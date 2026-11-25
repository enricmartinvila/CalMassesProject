import type { Lang } from "../../config/siteConfig";
import type { GuideBlock, GuideBundle, GuidePageKey } from "./types";
import { guideEs } from "./es";
import { guideCa } from "./ca";
import { guideEn } from "./en";
import { guideExtras } from "./extras";

const bundles: Record<Lang, GuideBundle> = { es: guideEs, ca: guideCa, en: guideEn };

export function getGuide(lang: Lang, page: GuidePageKey): GuideBlock[] {
  const base = bundles[lang][page] ?? [];
  const extra = guideExtras[lang][page] ?? [];
  return [
    ...base.filter((b) => b.kind !== "faq"),
    ...extra,
    ...base.filter((b) => b.kind === "faq"),
  ];
}
