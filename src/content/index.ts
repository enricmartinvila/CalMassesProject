import type { Lang } from "../config/siteConfig";
import type { ContentBundle } from "./types";
import { contentCa } from "./ca";
import { contentEn } from "./en";
import { contentEs } from "./es";

export const contentByLang: Record<Lang, ContentBundle> = {
  es: contentEs,
  ca: contentCa,
  en: contentEn,
};

export function getContent(lang: Lang): ContentBundle {
  return contentByLang[lang] ?? contentEs;
}
