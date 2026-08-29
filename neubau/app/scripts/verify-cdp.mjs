import process from 'node:process';
import WebSocket from 'ws';

const [cdpBase = 'http://localhost:9230', pageUrl] = process.argv.slice(2);

if (!pageUrl) throw new Error('Usage: node scripts/verify-cdp.mjs <cdp-base> <url>');

const targetResponse = await fetch(`${cdpBase}/json/new?${encodeURIComponent(pageUrl)}`, { method: 'PUT' });
if (!targetResponse.ok) throw new Error(`Could not create CDP target: ${targetResponse.status}`);

const target = await targetResponse.json();
const socket = new WebSocket(target.webSocketDebuggerUrl);
let commandId = 0;
const pending = new Map();
const consoleErrors = [];
const runtimeErrors = [];
const networkErrors = [];

await new Promise((resolve, reject) => {
  socket.once('open', resolve);
  socket.once('error', reject);
});

socket.on('message', (raw) => {
  const message = JSON.parse(raw.toString());
  if (message.method === 'Runtime.consoleAPICalled' && message.params.type === 'error') {
    consoleErrors.push(message.params.args.map((argument) => argument.value ?? argument.description ?? '').join(' '));
  }
  if (message.method === 'Runtime.exceptionThrown') {
    runtimeErrors.push(message.params.exceptionDetails.text);
  }
  if (message.method === 'Network.loadingFailed') {
    networkErrors.push(`${message.params.errorText}: ${message.params.requestId}`);
  }
  if (message.method === 'Network.responseReceived' && message.params.response.status >= 400) {
    networkErrors.push(`${message.params.response.status}: ${message.params.response.url}`);
  }
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject, timer } = pending.get(message.id);
  pending.delete(message.id);
  clearTimeout(timer);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

function send(method, params = {}) {
  const id = ++commandId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pending.delete(id);
      reject(new Error(`CDP timeout: ${method}`));
    }, 20000);
    pending.set(id, { resolve, reject, timer });
  });
}

await Promise.all([send('Page.enable'), send('Runtime.enable'), send('Network.enable')]);
await send('Emulation.setDeviceMetricsOverride', { width: 1600, height: 1000, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url: pageUrl });
await send('Runtime.evaluate', {
  expression: `new Promise(async (resolve) => {
    const started = Date.now();
    while (document.readyState !== 'complete' && Date.now() - started < 15000) {
      await new Promise((next) => setTimeout(next, 100));
    }
    if (document.fonts?.ready) await document.fonts.ready;
    await Promise.all([...document.images].map(async (image) => {
      image.loading = 'eager';
      try { await image.decode(); } catch (_) {}
    }));
    await new Promise((next) => setTimeout(next, 350));
    resolve(true);
  })`,
  awaitPromise: true,
  returnByValue: true,
});

const inspection = await send('Runtime.evaluate', {
  expression: `JSON.stringify({
    url: location.href,
    title: document.title,
    textLength: document.body.innerText.trim().length,
    h1: document.querySelector('h1')?.innerText ?? null,
    headings: document.querySelectorAll('h1,h2,h3').length,
    links: document.querySelectorAll('a[href]').length,
    buttons: document.querySelectorAll('button').length,
    rails: document.querySelectorAll('[aria-roledescription="Karussell"]').length,
    images: document.images.length,
    brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
    errorOverlay: Boolean(document.querySelector('[data-nextjs-dialog], .vite-error-overlay, #webpack-dev-server-client-overlay')),
    hasContact: document.body.innerText.includes('Auf ein Gespräch'),
    hasCv: [...document.querySelectorAll('a')].some((link) => /Lebenslauf|CV/.test(link.innerText)),
  })`,
  returnByValue: true,
});

const page = JSON.parse(inspection.result.value);
const report = {
  pass:
    page.textLength > 500 &&
    page.h1 &&
    !page.errorOverlay &&
    page.brokenImages.length === 0 &&
    consoleErrors.length === 0 &&
    runtimeErrors.length === 0 &&
    networkErrors.length === 0,
  page,
  consoleErrors,
  runtimeErrors,
  networkErrors,
};

console.log(JSON.stringify(report, null, 2));
socket.close();
