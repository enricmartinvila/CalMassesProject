/**
 * Post-build prerender: renders every public route with the SSR bundle
 * (dist-server/entry-server.js) into dist/<lang>/<slug>.html.
 * Crawlers and link previews get the real title, meta tags and content.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const serverEntry = path.join(root, "dist-server", "entry-server.js");

const { render, routes } = await import(pathToFileURL(serverEntry).href);
// Preload the two latin font files used above the fold (hashed by Vite).
const fontPreloads = fs
  .readdirSync(path.join(dist, "assets"))
  .filter((f) =>
    /^(inter-latin-wght-normal|fraunces-latin-standard-normal)-.*\.woff2$/.test(f),
  )
  .map(
    (f) =>
      `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`,
  )
  .join("\n    ");

const template = fs
  .readFileSync(path.join(dist, "index.html"), "utf8")
  .replace("<!--app-head-->", `${fontPreloads}\n    <!--app-head-->`);

function headFrom(helmet) {
  if (!helmet) return "";
  return [
    helmet.title.toString(),
    helmet.meta.toString(),
    helmet.link.toString(),
    helmet.script.toString(),
  ].join("\n    ");
}

for (const url of routes) {
  const { html, helmet } = render(url);
  if (!html || !helmet?.title?.toString()) {
    throw new Error(`Prerender produced no content for ${url}`);
  }
  const htmlAttrs = helmet.htmlAttributes.toString() || 'lang="es"';
  const page = template
    .replace(/<html[^>]*>/, `<html ${htmlAttrs}>`)
    .replace("<!--app-head-->", headFrom(helmet))
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  // Flat files (dist/es/alojamiento.html) + vercel.json cleanUrls → served at /es/alojamiento.
  const out = path.join(dist, `${url.replace(/^\//, "")}.html`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page);
  console.log("prerender", url);
}

// SPA fallback (only reached for routes not listed above).
fs.writeFileSync(
  path.join(dist, "index.html"),
  template.replace("<!--app-head-->", ""),
);

fs.rmSync(path.join(root, "dist-server"), { recursive: true, force: true });
console.log(`prerender complete (${routes.length} pages)`);
