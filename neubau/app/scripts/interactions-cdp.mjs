import process from 'node:process';
import WebSocket from 'ws';

const [cdpBase = 'http://localhost:9230', pageUrl, widthArg = '1600', heightArg = '1000'] = process.argv.slice(2);
if (!pageUrl) throw new Error('Usage: node scripts/interactions-cdp.mjs <cdp-base> <url> [width] [height]');

const response = await fetch(`${cdpBase}/json/new?${encodeURIComponent(pageUrl)}`, { method: 'PUT' });
const target = await response.json();
const socket = new WebSocket(target.webSocketDebuggerUrl);
let id = 0;
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
  const commandId = ++id;
  socket.send(JSON.stringify({ id: commandId, method, params }));
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`CDP timeout: ${method}`)), 20000);
    pending.set(commandId, { resolve, reject, timer });
  });
}

await Promise.all([send('Page.enable'), send('Runtime.enable')]);
await send('Emulation.setDeviceMetricsOverride', {
  width: Number(widthArg),
  height: Number(heightArg),
  deviceScaleFactor: 1,
  mobile: Number(widthArg) < 600,
});
await send('Page.navigate', { url: pageUrl });

const result = await send('Runtime.evaluate', {
  expression: `(async () => {
    while (document.readyState !== 'complete') await new Promise((resolve) => setTimeout(resolve, 50));
    if (document.fonts?.ready) await document.fonts.ready;
    await new Promise((resolve) => setTimeout(resolve, 250));

    const initialDark = document.documentElement.classList.contains('dark');
    const themeButton = document.querySelector('button[aria-label="Farbschema wechseln"]');
    themeButton?.click();
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    const toggledDark = document.documentElement.classList.contains('dark');

    const nextButton = document.querySelector('button[aria-label^="Nächstes Projekt in Simulation"]');
    nextButton?.click();
    await new Promise((resolve) => setTimeout(resolve, 650));
    const firstRail = document.querySelector('[aria-roledescription="Karussell"]');
    const counter = nextButton?.closest('section')?.querySelector('[aria-live="polite"]')?.textContent?.trim() ?? null;
    const weeLink = [...document.querySelectorAll('a')].find((link) => link.textContent?.includes('Frontend ansehen'));
    const cvLink = [...document.querySelectorAll('a')].find((link) => /Lebenslauf herunterladen/.test(link.textContent ?? ''));

    return {
      viewport: [innerWidth, innerHeight],
      noPageOverflow: document.documentElement.scrollWidth <= innerWidth,
      themeChanged: initialDark !== toggledDark,
      persistedTheme: localStorage.getItem('leon-theme'),
      firstRailMoved: Boolean(firstRail && firstRail.scrollLeft > 0),
      railCounter: counter,
      weeHref: weeLink?.href ?? null,
      cvHref: cvLink?.href ?? null,
      touchTargetsTooSmall: [...document.querySelectorAll('button,a')]
        .filter((element) => {
          const box = element.getBoundingClientRect();
          return box.width > 0 && box.height > 0 && (box.width < 44 || box.height < 44);
        })
        .map((element) => (element.textContent ?? element.getAttribute('aria-label') ?? '').trim().slice(0, 50)),
    };
  })()`,
  awaitPromise: true,
  returnByValue: true,
});

const checks = result.result.value;
const pass =
  checks.noPageOverflow &&
  checks.themeChanged &&
  checks.firstRailMoved &&
  checks.weeHref?.includes('/neubau/projekte/wee-crm/') &&
  checks.cvHref?.endsWith('/neubau/Leon-Poesken-Lebenslauf.pdf');

console.log(JSON.stringify({ pass, checks }, null, 2));
socket.close();
