/**
 * Post-build prerender: serves dist/, visits every public route, writes static HTML.
 * Crawlers get real title/H1/content without executing our SPA bootstrap.
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const PORT = 4179;
const BASE = `http://127.0.0.1:${PORT}`;

const routes = {
  es: [
    "",
    "alojamiento",
    "cal-masses",
    "sisu",
    "contacto",
    "reservar",
    "alojamiento-cerca-montserrat",
    "alojamiento-cerca-manresa",
    "escapada-para-dos",
    "enoturismo-pla-de-bages",
    "aviso-legal",
    "privacidad",
    "cookies",
  ],
  ca: [
    "",
    "allotjament",
    "cal-masses",
    "sisu",
    "contacte",
    "reservar",
    "allotjament-prop-de-montserrat",
    "allotjament-prop-de-manresa",
    "escapada-per-a-dos",
    "enoturisme-pla-de-bages",
    "avis-legal",
    "privacitat",
    "cookies",
  ],
  en: [
    "",
    "accommodation",
    "cal-masses",
    "sisu",
    "contact",
    "book",
    "accommodation-near-montserrat",
    "accommodation-near-manresa",
    "getaway-for-two",
    "wine-tourism-pla-de-bages",
    "legal-notice",
    "privacy",
    "cookies",
  ],
};

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function startPreview() {
  const child = spawn(
    "npx",
    ["vite", "preview", "--host", "127.0.0.1", "--port", String(PORT), "--strictPort"],
    {
      cwd: root,
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, BROWSER: "none" },
    },
  );
  return child;
}

async function waitForServer(url, attempts = 40) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status === 404) return;
    } catch {
      /* retry */
    }
    await sleep(250);
  }
  throw new Error(`Preview server did not start at ${url}`);
}

function outPathFor(lang, slug) {
  if (!slug) return path.join(dist, lang, "index.html");
  return path.join(dist, lang, slug, "index.html");
}

async function prerenderRoute(page, lang, slug) {
  const urlPath = slug ? `/${lang}/${slug}` : `/${lang}`;
  const url = `${BASE}${urlPath}`;
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
  await page.waitForFunction(
    () => document.documentElement.getAttribute("data-prerender") === "ready",
    { timeout: 30000 },
  );
  // Let helmet flush
  await sleep(100);
  const html = await page.content();
  const out = outPathFor(lang, slug);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log("prerender", urlPath);
}

const preview = startPreview();
let browser;

try {
  await waitForServer(BASE);
  browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  // Root redirect page: point crawlers to /es
  const rootHtml = `<!DOCTYPE html><html lang="es"><head>
<meta charset="UTF-8"/>
<meta http-equiv="refresh" content="0;url=/es"/>
<link rel="canonical" href="https://www.calmasses.com/es"/>
<title>Cal Masses</title>
</head><body><p><a href="/es">Cal Masses</a></p></body></html>`;
  fs.writeFileSync(path.join(dist, "index.html"), rootHtml);

  for (const [lang, slugs] of Object.entries(routes)) {
    for (const slug of slugs) {
      await prerenderRoute(page, lang, slug);
    }
  }
  console.log("prerender complete");
} finally {
  if (browser) await browser.close();
  preview.kill("SIGTERM");
}
