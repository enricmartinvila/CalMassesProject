import type { Lang } from "../config/siteConfig";

/** Route keys shared across languages (hreflang mapping). */
export type RouteKey =
  | "home"
  | "alojamiento"
  | "finca"
  | "sisu"
  | "contacto"
  | "reservar"
  | "entorno"
  | "landingBages"
  | "landingManresa"
  | "landingMontserrat"
  | "landingParaDos"
  | "landingPiscina"
  | "landingBarcelona"
  | "landingEnoturismo"
  | "avisoLegal"
  | "privacidad"
  | "cookies";

const slugs: Record<RouteKey, Record<Lang, string>> = {
  home: { es: "", ca: "", en: "" },
  alojamiento: {
    es: "alojamiento",
    ca: "allotjament",
    en: "accommodation",
  },
  finca: {
    es: "cal-masses",
    ca: "cal-masses",
    en: "cal-masses",
  },
  sisu: { es: "sisu", ca: "sisu", en: "sisu" },
  contacto: {
    es: "contacto",
    ca: "contacte",
    en: "contact",
  },
  reservar: {
    es: "reservar",
    ca: "reservar",
    en: "book",
  },
  /** Anchor-only nav group — no page. */
  entorno: { es: "entorno", ca: "entorn", en: "surroundings" },
  landingBages: {
    es: "alojamiento-rural-bages",
    ca: "allotjament-rural-bages",
    en: "rural-accommodation-bages",
  },
  landingManresa: {
    es: "alojamiento-rural-cerca-manresa",
    ca: "allotjament-rural-prop-de-manresa",
    en: "rural-accommodation-near-manresa",
  },
  landingMontserrat: {
    es: "alojamiento-cerca-montserrat",
    ca: "allotjament-prop-de-montserrat",
    en: "accommodation-near-montserrat",
  },
  landingParaDos: {
    es: "alojamiento-rural-para-dos-bages",
    ca: "allotjament-rural-per-a-dos-bages",
    en: "rural-accommodation-for-two-bages",
  },
  landingPiscina: {
    es: "alojamiento-rural-piscina-bages",
    ca: "allotjament-rural-piscina-bages",
    en: "rural-accommodation-pool-bages",
  },
  landingBarcelona: {
    es: "escapada-rural-cerca-barcelona",
    ca: "escapada-rural-prop-de-barcelona",
    en: "rural-getaway-near-barcelona",
  },
  landingEnoturismo: {
    es: "enoturismo-pla-de-bages",
    ca: "enoturisme-pla-de-bages",
    en: "wine-tourism-pla-de-bages",
  },
  avisoLegal: {
    es: "aviso-legal",
    ca: "avis-legal",
    en: "legal-notice",
  },
  privacidad: {
    es: "privacidad",
    ca: "privacitat",
    en: "privacy",
  },
  cookies: {
    es: "cookies",
    ca: "cookies",
    en: "cookies",
  },
};

/** Landings that must not be indexed or listed in sitemap. */
export const draftRouteKeys: RouteKey[] = [];

export function isDraftRoute(key: RouteKey): boolean {
  return draftRouteKeys.includes(key);
}

export function pathFor(lang: Lang, key: RouteKey): string {
  if (key === "entorno") return `/${lang}#entorno`;
  const slug = slugs[key][lang];
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

export function alternatePaths(key: RouteKey): Record<Lang, string> {
  return {
    es: pathFor("es", key),
    ca: pathFor("ca", key),
    en: pathFor("en", key),
  };
}

export function resolveRouteKey(
  lang: Lang,
  slugSegments: string[],
): RouteKey | null {
  const slug = slugSegments.filter(Boolean).join("/");
  if (!slug) return "home";
  for (const [key, map] of Object.entries(slugs) as [
    RouteKey,
    Record<Lang, string>,
  ][]) {
    if (key === "entorno") continue;
    if (map[lang] === slug) return key;
  }
  return null;
}

/** Published routes for sitemap (excludes drafts + legal optional). */
export const sitemapRouteKeys: RouteKey[] = [
  "home",
  "alojamiento",
  "finca",
  "sisu",
  "contacto",
  "reservar",
  "landingBages",
  "landingManresa",
  "landingMontserrat",
  "landingParaDos",
  "landingBarcelona",
  "landingEnoturismo",
  "landingPiscina",
];

export const publishedRouteKeys: RouteKey[] = [
  ...sitemapRouteKeys,
  "avisoLegal",
  "privacidad",
  "cookies",
];
