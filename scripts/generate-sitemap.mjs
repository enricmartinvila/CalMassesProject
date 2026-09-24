import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteUrl = "https://www.calmasses.com";

/** Published SEO URLs only. */
const pages = {
  es: [
    "",
    "alojamiento",
    "cal-masses",
    "sisu",
    "contacto",
    "reservar",
    "alojamiento-rural-bages",
    "alojamiento-rural-cerca-manresa",
    "alojamiento-cerca-montserrat",
    "alojamiento-rural-para-dos-bages",
    "alojamiento-rural-piscina-bages",
    "escapada-rural-cerca-barcelona",
    "enoturismo-pla-de-bages",
  ],
  ca: [
    "",
    "allotjament",
    "cal-masses",
    "sisu",
    "contacte",
    "reservar",
    "allotjament-rural-bages",
    "allotjament-rural-prop-de-manresa",
    "allotjament-prop-de-montserrat",
    "allotjament-rural-per-a-dos-bages",
    "allotjament-rural-piscina-bages",
    "escapada-rural-prop-de-barcelona",
    "enoturisme-pla-de-bages",
  ],
  en: [
    "",
    "accommodation",
    "cal-masses",
    "sisu",
    "contact",
    "book",
    "rural-accommodation-bages",
    "rural-accommodation-near-manresa",
    "accommodation-near-montserrat",
    "rural-accommodation-for-two-bages",
    "rural-accommodation-pool-bages",
    "rural-getaway-near-barcelona",
    "wine-tourism-pla-de-bages",
  ],
};

const urls = [];
for (const [lang, slugs] of Object.entries(pages)) {
  for (const slug of slugs) {
    const loc = slug ? `${siteUrl}/${lang}/${slug}` : `${siteUrl}/${lang}`;
    urls.push(`  <url><loc>${loc}</loc></url>`);
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

const out = path.resolve(__dirname, "../public/sitemap.xml");
fs.writeFileSync(out, xml);
console.log("wrote", out, urls.length, "urls");
