import type { Lang } from "../../config/siteConfig";
import type { GuideBlock, GuideBundle, GuidePageKey } from "./types";
import { guideEs } from "./es";
import { guideCa } from "./ca";
import { guideEn } from "./en";

const bundles: Record<Lang, GuideBundle> = { es: guideEs, ca: guideCa, en: guideEn };

export function getGuide(lang: Lang, page: GuidePageKey): GuideBlock[] {
  return bundles[lang][page] ?? [];
}
