import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useParams } from "react-router-dom";
import {
  DEFAULT_LANG,
  SUPPORTED_LANGS,
  type Lang,
} from "../config/siteConfig";
import { getContent } from "../content";
import type { ContentBundle } from "../content/types";
import { pathFor, type RouteKey } from "../i18n/routes";

type LangContextValue = {
  lang: Lang;
  content: ContentBundle;
  path: (key: RouteKey) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

export function parseLang(value: string | undefined): Lang {
  if (value && (SUPPORTED_LANGS as string[]).includes(value)) {
    return value as Lang;
  }
  return DEFAULT_LANG;
}

export function LangProvider({ children }: { children: ReactNode }) {
  const { lang: langParam } = useParams();
  const lang = parseLang(langParam);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      content: getContent(lang),
      path: (key) => pathFor(lang, key),
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
