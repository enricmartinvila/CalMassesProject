import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { bookingHref, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { resolveRouteKey, type RouteKey } from "../../i18n/routes";
import { LangSwitcher } from "./LangSwitcher";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-serif text-2xl font-medium tracking-tight ${className}`}>
      Cal <span className="italic font-normal">Masses</span>
    </span>
  );
}

export function Header({ overHero = false }: { overHero?: boolean }) {
  const { lang, content, path } = useLang();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [entornoOpen, setEntornoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setEntornoOpen(false);
  }, [location.pathname]);

  const currentKey =
    resolveRouteKey(
      lang,
      location.pathname.replace(new RegExp(`^/${lang}/?`), "").split("/"),
    ) ?? "home";

  const entornoLinks: Array<{ route: RouteKey; label: string }> = [
    { route: "landingBages", label: content.ui.nav.entornoBages },
    { route: "landingMontserrat", label: content.ui.nav.entornoMontserrat },
    { route: "landingManresa", label: content.ui.nav.entornoManresa },
    { route: "landingEnoturismo", label: content.ui.nav.entornoEnoturismo },
  ];
  const entornoActive = entornoLinks.some((l) => l.route === currentKey);

  const mainLinks: Array<[RouteKey, string]> = [
    ["home", content.ui.nav.home],
    ["alojamiento", content.ui.nav.alojamiento],
    ["finca", content.ui.nav.finca],
  ];
  const tailLinks: Array<[RouteKey, string]> = [
    ["sisu", content.ui.nav.sisu],
    ["contacto", content.ui.nav.contacto],
  ];

  const transparent = overHero && !scrolled && !open;

  const navLink = (key: RouteKey, label: string) => (
    <li key={key}>
      <Link
        to={path(key)}
        className={`relative opacity-90 hover:opacity-100 after:absolute after:left-0 after:-bottom-1.5 after:h-[1.5px] after:bg-current after:transition-all hover:after:w-full ${
          currentKey === key ? "after:w-full" : "after:w-0"
        }`}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        transparent
          ? "bg-transparent text-white"
          : "bg-cream/90 text-ink backdrop-blur-md shadow-[0_1px_0_var(--line)]"
      }`}
    >
      <div className="mx-auto flex h-[78px] max-w-[1180px] items-center gap-6 px-5 sm:px-7">
        <Link to={path("home")} className="shrink-0" aria-label={siteConfig.brandName}>
          <Logo />
        </Link>

        <nav className="mx-auto hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-5 whitespace-nowrap text-[0.93rem] font-medium xl:gap-8">
            {mainLinks.map(([k, l]) => navLink(k, l))}
            <li
              className="relative"
              onMouseEnter={() => setEntornoOpen(true)}
              onMouseLeave={() => setEntornoOpen(false)}
            >
              <button
                type="button"
                className={`relative opacity-90 hover:opacity-100 after:absolute after:left-0 after:-bottom-1.5 after:h-[1.5px] after:bg-current after:transition-all hover:after:w-full ${
                  entornoActive ? "after:w-full" : "after:w-0"
                }`}
                aria-expanded={entornoOpen}
                onClick={() => setEntornoOpen((v) => !v)}
              >
                {content.ui.nav.entorno}
              </button>
              {entornoOpen && (
                <div className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3">
                  <ul className="min-w-[14rem] rounded-2xl border border-line bg-paper py-2 text-ink shadow-[0_20px_40px_-20px_rgba(47,56,25,.35)]">
                    {entornoLinks.map((l) => (
                      <li key={l.route}>
                        <Link
                          to={path(l.route)}
                          className="block px-5 py-2 text-sm hover:bg-brand-soft"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            {tailLinks.map(([k, l]) => navLink(k, l))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <LangSwitcher onDark={transparent} />

          <a
            href={bookingHref()}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden xl:inline-flex items-center whitespace-nowrap rounded-full px-[22px] py-[11px] text-[0.95rem] font-semibold transition hover:-translate-y-0.5 ${
              transparent
                ? "bg-white text-brand-dark"
                : "bg-brand text-white hover:bg-brand-dark"
            }`}
          >
            {content.ui.cta.availability}
          </a>

          <button
            type="button"
            className="lg:hidden text-2xl leading-none"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden bg-cream text-ink transition-[max-height] duration-300 ${
          open ? "max-h-[36rem] shadow-[0_20px_30px_-20px_rgba(0,0,0,.3)]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-7 pb-6 pt-2 text-base font-medium">
          {[...mainLinks, ...tailLinks].map(([key, label]) => (
            <li key={key}>
              <Link
                to={path(key)}
                className={`block py-2 ${currentKey === key ? "text-brand" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            {content.ui.nav.entorno}
          </li>
          {entornoLinks.map((l) => (
            <li key={l.route}>
              <Link to={path(l.route)} className="block py-2">
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={bookingHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center rounded-full bg-brand px-6 py-3.5 font-semibold text-white"
            >
              {content.ui.cta.availability}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
