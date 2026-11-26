import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { resolveRouteKey, type RouteKey } from "../../i18n/routes";
import { useLangLinks } from "./LangSwitcher";
import { bookHref } from "../cm/Blocks";
import { Icon } from "../cm/Icons";

export function Logo({ className = "", accent = "" }: { className?: string; accent?: string }) {
  return (
    <span className={`font-serif text-[1.55rem] font-normal tracking-tight ${className}`}>
      Cal <i className={`italic ${accent}`}>Masses</i>
    </span>
  );
}

export function Header({ overHero = false }: { overHero?: boolean }) {
  const { lang, content, path } = useLang();
  const location = useLocation();
  const langs = useLangLinks();
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSub(false);
  }, [location.pathname]);

  const currentKey =
    resolveRouteKey(lang, location.pathname.replace(new RegExp(`^/${lang}/?`), "").split("/")) ?? "home";

  const f = content.ui.footer;
  const main: Array<[RouteKey, string]> = [
    ["alojamiento", content.ui.nav.alojamiento],
    ["finca", f.laFinca],
    ["sisu", content.ui.nav.sisu],
    ["contacto", content.ui.nav.contacto],
  ];
  const entorno: Array<[RouteKey, string]> = [
    ["landingBages", content.ui.nav.entornoBages],
    ["landingMontserrat", content.ui.nav.entornoMontserrat],
    ["landingManresa", content.ui.nav.entornoManresa],
    ["landingEnoturismo", content.ui.nav.entornoEnoturismo],
    ["landingParaDos", f.paraDos],
    ["landingPiscina", f.withPool],
  ];

  const solid = !overHero || scrolled || open;
  const linkBase =
    "inline-flex items-center gap-1 rounded-full px-3 py-2.5 text-[0.93rem] font-medium no-underline transition-colors";
  const linkTone = solid ? "text-ink hover:bg-[#e9eddb]" : "text-white hover:bg-white/15";
  const active = solid ? "bg-[#e9eddb] text-[#2f3a1a]" : "bg-white/20";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-[#fbf8f1]/95 backdrop-blur-md shadow-[0_1px_0_#d9d1bd]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1160px] items-center justify-between px-[18px] sm:px-6">
        <Link to={path("home")} aria-label={siteConfig.brandName} className={solid ? "text-[#2f3a1a]" : "text-white"}>
          <Logo accent={solid ? "text-[#c9973a]" : "text-[#e9d8a6]"} />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {main.map(([k, l]) => (
              <li key={k}>
                <Link
                  to={path(k)}
                  aria-current={currentKey === k ? "page" : undefined}
                  className={`${linkBase} ${linkTone} ${currentKey === k ? active : ""}`}
                >
                  {l}
                </Link>
              </li>
            ))}
            <li className="group relative" onMouseLeave={() => setSub(false)}>
              <button
                type="button"
                aria-expanded={sub}
                aria-haspopup="true"
                onClick={() => setSub((v) => !v)}
                onMouseEnter={() => setSub(true)}
                className={`${linkBase} ${linkTone}`}
              >
                {content.ui.nav.entorno} <Icon name="chevron" />
              </button>
              <ul
                className={`absolute left-0 top-full min-w-[230px] rounded-[14px] bg-white p-2 shadow-[0_18px_40px_-12px_rgba(0,0,0,.28)] ${
                  sub ? "block" : "hidden group-focus-within:block"
                }`}
              >
                {entorno.map(([k, l]) => (
                  <li key={k}>
                    <Link
                      to={path(k)}
                      aria-current={currentKey === k ? "page" : undefined}
                      className="block rounded-[10px] px-3 py-2.5 text-[0.93rem] text-ink no-underline hover:bg-[#e9eddb]"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <div className={`flex gap-0.5 text-[0.8rem] ${solid ? "text-ink" : "text-white"}`} aria-label="Idioma">
            {langs.map((l) => (
              <Link
                key={l.lang}
                to={l.to}
                title={l.title}
                aria-current={l.active ? "true" : undefined}
                className={`rounded-full px-2 py-1.5 no-underline ${l.active ? "font-bold opacity-100" : "opacity-80 hover:opacity-100"}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <a
            href={bookHref(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="cm-btn cm-btn-primary hidden xl:inline-flex"
          >
            {content.ui.cta.availability}
          </a>
        </nav>

        <button
          type="button"
          className="relative h-[46px] w-[46px] lg:hidden"
          aria-expanded={open}
          aria-controls="cm-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute left-3 right-3 h-0.5 rounded transition-all ${solid ? "bg-[#2f3a1a]" : "bg-white"} ${
              open ? "top-[22px] rotate-45" : "top-[18px]"
            }`}
          />
          <span
            className={`absolute left-3 right-3 h-0.5 rounded transition-all ${solid ? "bg-[#2f3a1a]" : "bg-white"} ${
              open ? "top-[22px] -rotate-45" : "top-[27px]"
            }`}
          />
        </button>
      </div>

      {open && (
        <div id="cm-menu" className="fixed inset-x-0 bottom-0 top-[72px] overflow-auto bg-[#fbf8f1] px-6 pb-10 pt-5 lg:hidden">
          <ul className="flex flex-col">
            {main.map(([k, l]) => (
              <li key={k}>
                <Link to={path(k)} className="block rounded-full px-3 py-3.5 text-[1.05rem] font-medium text-ink no-underline">
                  {l}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                aria-expanded={sub}
                onClick={() => setSub((v) => !v)}
                className="flex w-full items-center justify-between px-3 py-3.5 text-[1.05rem] font-medium text-ink"
              >
                {content.ui.nav.entorno} <Icon name="chevron" />
              </button>
              {sub && (
                <ul className="pl-3">
                  {entorno.map(([k, l]) => (
                    <li key={k}>
                      <Link to={path(k)} className="block px-3 py-3 text-ink no-underline">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          <div className="mt-3 flex gap-1 px-1 text-[0.9rem]" aria-label="Idioma">
            {langs.map((l) => (
              <Link
                key={l.lang}
                to={l.to}
                aria-current={l.active ? "true" : undefined}
                className={`rounded-full px-3 py-2 no-underline ${l.active ? "bg-[#e9eddb] font-bold" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <a href={bookHref(lang)} target="_blank" rel="noopener noreferrer" className="cm-btn cm-btn-primary mt-5 w-full">
            {content.ui.cta.availability}
          </a>
        </div>
      )}
    </header>
  );
}
