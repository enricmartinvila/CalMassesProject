import { useEffect, useId, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SUPPORTED_LANGS, type Lang } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { pathFor, resolveRouteKey } from "../../i18n/routes";

const LABELS: Record<Lang, { short: string; full: string }> = {
  ca: { short: "CA", full: "Català" },
  es: { short: "ES", full: "Español" },
  en: { short: "EN", full: "English" },
};

export function LangSwitcher({ className = "" }: { className?: string }) {
  const { lang } = useLang();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();

  const currentKey =
    resolveRouteKey(
      lang,
      location.pathname.replace(new RegExp(`^/${lang}/?`), "").split("/"),
    ) ?? "home";

  const toFor = (next: Lang) => {
    const key = currentKey === "entorno" ? "home" : currentKey;
    return pathFor(next, key);
  };

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <div
        className="hidden sm:inline-flex items-center rounded-full border border-[#556B2F]/25 bg-[#f7f7f4] p-0.5"
        role="group"
        aria-label="Idioma"
      >
        {SUPPORTED_LANGS.map((l) => {
          const active = l === lang;
          return (
            <Link
              key={l}
              to={toFor(l)}
              aria-current={active ? "true" : undefined}
              title={LABELS[l].full}
              className={`min-w-[2.25rem] rounded-full px-2.5 py-1.5 text-center text-[0.7rem] font-semibold tracking-[0.08em] transition ${
                active
                  ? "bg-[#556B2F] text-white shadow-sm"
                  : "text-[#556B2F]/80 hover:text-[#556B2F] hover:bg-white/70"
              }`}
            >
              {LABELS[l].short}
            </Link>
          );
        })}
      </div>

      <div className="sm:hidden">
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-full border border-[#556B2F]/30 bg-[#f7f7f4] px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.08em] text-[#556B2F]"
          aria-expanded={open}
          aria-controls={listId}
          aria-haspopup="listbox"
          onClick={() => setOpen((v) => !v)}
        >
          {LABELS[lang].short}
          <span
            aria-hidden
            className={`text-[0.55rem] transition-transform ${open ? "rotate-180" : ""}`}
          >
            ▾
          </span>
        </button>
        {open && (
          <ul
            id={listId}
            role="listbox"
            aria-label="Idioma"
            className="absolute right-0 top-[calc(100%+0.35rem)] z-50 min-w-[8.5rem] overflow-hidden rounded-2xl border border-[#556B2F]/15 bg-white py-1 shadow-[0_12px_30px_rgba(0,0,0,0.1)]"
          >
            {SUPPORTED_LANGS.map((l) => {
              const active = l === lang;
              return (
                <li key={l} role="option" aria-selected={active}>
                  <Link
                    to={toFor(l)}
                    className={`flex items-center justify-between gap-3 px-3.5 py-2.5 text-sm transition ${
                      active
                        ? "bg-[#EEF2E6] font-semibold text-[#556B2F]"
                        : "text-gray-800 hover:bg-[#f7f7f4]"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span>{LABELS[l].full}</span>
                    <span className="text-[0.65rem] tracking-[0.1em] text-[#556B2F]/70">
                      {LABELS[l].short}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
