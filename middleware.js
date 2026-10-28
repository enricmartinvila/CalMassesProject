/**
 * Edge middleware: return a real HTTP 404 for unknown paths.
 *
 * Without this, Vercel's SPA rewrite serves index.html with 200 for every
 * unknown URL. Google then classifies those as Soft 404.
 */

const LANGS = new Set(["es", "ca", "en"]);

/** Slugs allowed under /:lang/… (includes legacy paths that vercel.json redirects). */
const SLUGS = new Set([
  // core
  "alojamiento",
  "allotjament",
  "accommodation",
  "cal-masses",
  "sisu",
  "contacto",
  "contacte",
  "contact",
  "reservar",
  "book",
  // landings
  "alojamiento-rural-bages",
  "allotjament-rural-bages",
  "rural-accommodation-bages",
  "alojamiento-rural-cerca-manresa",
  "allotjament-rural-prop-de-manresa",
  "rural-accommodation-near-manresa",
  "alojamiento-cerca-montserrat",
  "allotjament-prop-de-montserrat",
  "accommodation-near-montserrat",
  "alojamiento-rural-para-dos-bages",
  "allotjament-rural-per-a-dos-bages",
  "rural-accommodation-for-two-bages",
  "alojamiento-rural-piscina-bages",
  "allotjament-rural-piscina-bages",
  "rural-accommodation-pool-bages",
  "escapada-rural-cerca-barcelona",
  "escapada-rural-prop-de-barcelona",
  "rural-getaway-near-barcelona",
  "enoturismo-pla-de-bages",
  "enoturisme-pla-de-bages",
  "wine-tourism-pla-de-bages",
  // legal
  "aviso-legal",
  "avis-legal",
  "legal-notice",
  "privacidad",
  "privacitat",
  "privacy",
  "cookies",
  // legacy (still reachable before/without redirect)
  "alojamiento-cerca-manresa",
  "escapada-para-dos",
  "escapada-per-a-dos",
  "getaway-for-two",
]);

const STATIC_PREFIXES = [
  "/assets/",
  "/images/",
  "/fotos",
  "/fotosTargetes",
  "/fotosVino",
  "/logo/",
  "/font/",
];

const STATIC_EXACT = new Set([
  "/robots.txt",
  "/sitemap.xml",
  "/favicon-32.png",
  "/favicon.ico",
  "/apple-touch-icon.png",
]);

function isStatic(pathname) {
  if (STATIC_EXACT.has(pathname)) return true;
  return STATIC_PREFIXES.some(
    (p) => pathname === p.slice(0, -1) || pathname.startsWith(p),
  );
}

function isKnownAppPath(pathname) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/") return true;

  const parts = clean.slice(1).split("/");
  const lang = parts[0];
  if (!LANGS.has(lang)) return false;
  if (parts.length === 1) return true; // /es /ca /en
  if (parts.length === 2) return SLUGS.has(parts[1]);
  return false;
}

function notFoundHtml(pathname) {
  const safe = pathname.replace(/[<>&"]/g, "");
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="robots" content="noindex,follow"/>
  <title>404 | Cal Masses</title>
  <style>
    body{margin:0;font-family:Georgia,serif;color:#111827;background:#fff}
    main{max-width:36rem;margin:0 auto;padding:6rem 1.25rem;text-align:center}
    h1{font-weight:300;font-size:1.875rem}
    p{color:#4b5563;line-height:1.6}
    a{display:inline-block;margin-top:2rem;padding:.75rem 1.5rem;border-radius:9999px;background:#556B2F;color:#fff;text-decoration:none}
  </style>
</head>
<body>
  <main>
    <h1>Página no encontrada</h1>
    <p>La página que buscas no existe o ha cambiado de dirección.</p>
    <p style="font-size:.75rem;color:#9ca3af;margin-top:1rem">${safe}</p>
    <a href="/es">Volver al inicio</a>
  </main>
</body>
</html>`;
}

export default function middleware(request) {
  const { pathname } = new URL(request.url);

  if (isStatic(pathname)) {
    return; // continue to static / rewrite
  }

  if (isKnownAppPath(pathname)) {
    return;
  }

  return new Response(notFoundHtml(pathname), {
    status: 404,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, follow",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}

export const config = {
  matcher: "/:path*",
};
