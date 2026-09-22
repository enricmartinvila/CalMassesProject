import type { Lang } from "../../config/siteConfig";
import type { LandingsBundle } from "./types";
import { landingsCa } from "./ca";
import { landingsEn } from "./en";
import { landingsEs } from "./es";

export const landingsByLang: Record<Lang, LandingsBundle> = {
  es: landingsEs,
  ca: landingsCa,
  en: landingsEn,
};

export function getLandings(lang: Lang): LandingsBundle {
  return landingsByLang[lang] ?? landingsEs;
}

export type { LandingDefinition, LandingsBundle } from "./types";
