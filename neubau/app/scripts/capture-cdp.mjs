import { writeFile } from 'node:fs/promises';
import process from 'node:process';
import WebSocket from 'ws';

const [cdpBase = 'http://localhost:9226', pageUrl, outputPath, widthArg = '1600', heightArg = '1000', selector] = process.argv.slice(2);

if (!pageUrl || !outputPath) {
  throw new Error('Usage: node scripts/capture-cdp.mjs <cdp-base> <url> <output> [width] [height]');
}

const width = Number(widthArg);
const height = Number(heightArg);
const targetResponse = await fetch(`${cdpBase}/json/new?${encodeURIComponent(pageUrl)}`, { method: 'PUT' });

if (!targetResponse.ok) {
  throw new Error(`Could not create CDP target: ${targetResponse.status}`);
}

const target = await targetResponse.json();
const socket = new WebSocket(target.webSocketDebuggerUrl);
let commandId = 0;
const pending = new Map();

await new Promise((resolve, reject) => {
  socket.once('open', resolve);
  socket.once('error', reject);
});

socket.on('message', (raw) => {
  const message = JSON.parse(raw.toString());
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
      if (!pending.has(id)) return;
      pending.delete(id);
      reject(new Error(`CDP timeout: ${method}`));
    }, 20000);
    pending.set(id, { resolve, reject, timer });
  });
}

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', {
  width,
  height,
  deviceScaleFactor: 1,
  mobile: false,
});
await send('Page.navigate', { url: pageUrl });

await send('Runtime.evaluate', {
  expression: `new Promise(async (resolve) => {
    const started = Date.now();
    while (document.readyState !== 'complete' && Date.now() - started < 15000) {
      await new Promise((next) => setTimeout(next, 100));
    }
    if (document.fonts?.ready) await document.fonts.ready;
    await new Promise((next) => requestAnimationFrame(() => requestAnimationFrame(next)));
    resolve({ title: document.title, readyState: document.readyState });
  })`,
  awaitPromise: true,
  returnByValue: true,
});

if (selector) {
  await send('Runtime.evaluate', {
    expression: `(() => {
      const target = document.querySelector(${JSON.stringify(selector)});
      if (!target) throw new Error('Selector not found: ' + ${JSON.stringify(selector)});
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY);
      return new Promise((resolve) => setTimeout(resolve, 120));
    })()`,
    awaitPromise: true,
    returnByValue: true,
  });
}

const screenshot = await send('Page.captureScreenshot', {
  format: 'png',
  fromSurface: true,
  captureBeyondViewport: false,
});

await writeFile(outputPath, Buffer.from(screenshot.data, 'base64'));
socket.close();

console.log(`${width}x${height}\t${outputPath}`);
