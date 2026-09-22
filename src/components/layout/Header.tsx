import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { bookingHref, siteConfig, SUPPORTED_LANGS, type Lang } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { pathFor, resolveRouteKey, type RouteKey } from "../../i18n/routes";
import { CtaLink } from "../ui/CtaLink";

export function Header() {
  const { lang, content, path } = useLang();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [entornoOpen, setEntornoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  const switchLang = (next: Lang) => {
    const key = currentKey === "entorno" ? "home" : currentKey;
    return pathFor(next, key);
  };

  const entornoLinks: Array<{ route: RouteKey; label: string }> = [
    { route: "landingBages", label: content.ui.nav.entornoBages },
    { route: "landingMontserrat", label: content.ui.nav.entornoMontserrat },
    { route: "landingManresa", label: content.ui.nav.entornoManresa },
    { route: "landingEnoturismo", label: content.ui.nav.entornoEnoturismo },
  ];

  const entornoActive = entornoLinks.some((l) => l.route === currentKey);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur transition-all ${
        scrolled ? "py-2 shadow-md" : "py-3 shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to={path("home")} className="shrink-0" aria-label={siteConfig.brandName}>
          <img
            src={siteConfig.images.logo}
            alt={siteConfig.brandName}
            width={120}
            height={48}
            className={`w-auto transition-all ${scrolled ? "h-8" : "h-10 sm:h-11"}`}
          />
        </Link>

        <nav className="mx-auto hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-6 text-sm font-semibold xl:gap-8">
            <li>
              <Link
                to={path("home")}
                className={`hover:underline underline-offset-4 ${
                  currentKey === "home" ? "text-[#556B2F]" : "text-gray-900"
                }`}
              >
                {content.ui.nav.home}
              </Link>
            </li>
            <li>
              <Link
                to={path("alojamiento")}
                className={`hover:underline underline-offset-4 ${
                  currentKey === "alojamiento" ? "text-[#556B2F]" : "text-gray-900"
                }`}
              >
                {content.ui.nav.alojamiento}
              </Link>
            </li>
            <li>
              <Link
                to={path("finca")}
                className={`hover:underline underline-offset-4 ${
                  currentKey === "finca" ? "text-[#556B2F]" : "text-gray-900"
                }`}
              >
                {content.ui.nav.finca}
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setEntornoOpen(true)}
              onMouseLeave={() => setEntornoOpen(false)}
            >
              <button
                type="button"
                className={`hover:underline underline-offset-4 ${
                  entornoActive ? "text-[#556B2F]" : "text-gray-900"
                }`}
                aria-expanded={entornoOpen}
              >
                {content.ui.nav.entorno}
              </button>
              {entornoOpen && (
                <ul className="absolute left-0 top-full z-50 min-w-[14rem] rounded-xl border border-gray-200 bg-white py-2 shadow-lg">
                  {entornoLinks.map((l) => (
                    <li key={l.route}>
                      <Link
                        to={path(l.route)}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-[#EEF2E6]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                to={path("sisu")}
                className={`hover:underline underline-offset-4 ${
                  currentKey === "sisu" ? "text-[#556B2F]" : "text-gray-900"
                }`}
              >
                {content.ui.nav.sisu}
              </Link>
            </li>
            <li>
              <Link
                to={path("contacto")}
                className={`hover:underline underline-offset-4 ${
                  currentKey === "contacto" ? "text-[#556B2F]" : "text-gray-900"
                }`}
              >
                {content.ui.nav.contacto}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <label className="sr-only" htmlFor="lang-switch">
            Language
          </label>
          <select
            id="lang-switch"
            className="appearance-none rounded-lg border-2 border-[#556B2F] bg-transparent py-1 pl-3 pr-8 text-sm font-bold text-[#556B2F]"
            value={lang}
            onChange={(e) => {
              window.location.assign(switchLang(e.target.value as Lang));
            }}
          >
            {SUPPORTED_LANGS.map((l) => (
              <option key={l} value={l}>
                {l === "ca" ? "Català" : l === "es" ? "Español" : "English"}
              </option>
            ))}
          </select>

          <CtaLink
            href={bookingHref()}
            external
            className="hidden sm:inline-flex !py-2 !px-4 text-sm"
          >
            {content.ui.cta.bookAirbnb}
          </CtaLink>

          <button
            type="button"
            className="lg:hidden text-2xl text-[#556B2F]"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden border-t border-gray-200 bg-white transition-[max-height] ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col p-3 text-sm font-semibold">
          {(
            [
              ["home", content.ui.nav.home],
              ["alojamiento", content.ui.nav.alojamiento],
              ["finca", content.ui.nav.finca],
              ["sisu", content.ui.nav.sisu],
              ["contacto", content.ui.nav.contacto],
            ] as Array<[RouteKey, string]>
          ).map(([key, label]) => (
            <li key={key}>
              <Link
                to={path(key)}
                className="block rounded-md px-2 py-2 text-[#556B2F] hover:bg-gray-50"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="px-2 pt-2 text-xs uppercase tracking-wider text-gray-500">
            {content.ui.nav.entorno}
          </li>
          {entornoLinks.map((l) => (
            <li key={l.route}>
              <Link
                to={path(l.route)}
                className="block rounded-md px-2 py-2 text-[#556B2F] hover:bg-gray-50"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="px-2 pt-2">
            <CtaLink href={bookingHref()} external className="w-full">
              {content.ui.cta.bookAirbnb}
            </CtaLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
