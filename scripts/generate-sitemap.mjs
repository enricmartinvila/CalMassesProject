import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteUrl = "https://www.calmasses.com";

/**
 * Indexable pages, one row per page with its URL in each language
 * (mirrors sitemapRouteKeys/slugs in src/i18n/routes.ts).
 * /reservar is noindex and intentionally left out.
 */
const pages = [
  { es: "", ca: "", en: "" },
  { es: "alojamiento", ca: "allotjament", en: "accommodation" },
  { es: "cal-masses", ca: "cal-masses", en: "cal-masses" },
  { es: "sisu", ca: "sisu", en: "sisu" },
  { es: "contacto", ca: "contacte", en: "contact" },
  { es: "alojamiento-rural-bages", ca: "allotjament-rural-bages", en: "rural-accommodation-bages" },
  { es: "alojamiento-rural-cerca-manresa", ca: "allotjament-rural-prop-de-manresa", en: "rural-accommodation-near-manresa" },
  { es: "alojamiento-cerca-montserrat", ca: "allotjament-prop-de-montserrat", en: "accommodation-near-montserrat" },
  { es: "alojamiento-rural-para-dos-bages", ca: "allotjament-rural-per-a-dos-bages", en: "rural-accommodation-for-two-bages" },
  { es: "alojamiento-rural-piscina-bages", ca: "allotjament-rural-piscina-bages", en: "rural-accommodation-pool-bages" },
  { es: "escapada-rural-cerca-barcelona", ca: "escapada-rural-prop-de-barcelona", en: "rural-getaway-near-barcelona" },
  { es: "enoturismo-pla-de-bages", ca: "enoturisme-pla-de-bages", en: "wine-tourism-pla-de-bages" },
];

const langs = ["es", "ca", "en"];
const lastmod = new Date().toISOString().slice(0, 10);
const loc = (lang, slug) => (slug ? `${siteUrl}/${lang}/${slug}` : `${siteUrl}/${lang}`);

const urls = [];
for (const page of pages) {
  const alternates = [
    ...langs.map(
      (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${loc(l, page[l])}"/>`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc("es", page.es)}"/>`,
  ].join("\n");
  for (const lang of langs) {
    urls.push(
      `  <url>\n    <loc>${loc(lang, page[lang])}</loc>\n    <lastmod>${lastmod}</lastmod>\n${alternates}\n  </url>`,
    );
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;

const out = path.resolve(__dirname, "../public/sitemap.xml");
fs.writeFileSync(out, xml);
console.log("wrote", out, urls.length, "urls");
