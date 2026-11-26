import { useEffect, useLayoutEffect, useRef } from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";
import { resolveRouteKey, type RouteKey } from "../../i18n/routes";
import type { Lang } from "../../config/siteConfig";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBookingBar } from "../booking/MobileBookingBar";
import { CookieBanner } from "../legal/CookieBanner";
import { AnalyticsGate } from "../legal/AnalyticsGate";

/** Pages whose first section is a full-bleed hero that sits under the header. */
const HERO_PAGES: RouteKey[] = [
  "home", "alojamiento", "finca", "sisu", "contacto",
  "landingBages", "landingManresa", "landingMontserrat", "landingEnoturismo",
  "landingParaDos", "landingPiscina", "landingBarcelona",
];

function isHeroPath(pathname: string) {
  const m = pathname.match(/^\/(es|ca|en)(?:\/(.*))?$/);
  if (!m) return false;
  const key = resolveRouteKey(m[1] as Lang, (m[2] ?? "").replace(/\/$/, "").split("/").filter(Boolean)) ?? (m[2] ? null : "home");
  return key != null && HERO_PAGES.includes(key);
}

/** Fade-in for elements marked `.rv` as they scroll into view. */
function useReveal(pathname: string) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv:not(.in)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
}

/** New page starts at the top (or at its #anchor); reload and back/forward keep the browser's position. */
function useScrollOnNavigate(pathname: string, hash: string) {
  const first = useRef(true);
  const navType = useNavigationType();
  useLayoutEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (navType === "POP") return; // back/forward: let the browser restore
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) target.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    else window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps
}

export function SiteLayout() {
  const { pathname, hash } = useLocation();
  const overHero = isHeroPath(pathname);
  useScrollOnNavigate(pathname, hash);
  useReveal(pathname);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header overHero={overHero} />
      <main className={`${overHero ? "" : "pt-[72px]"} pb-24 md:pb-0`}>
        <Outlet />
      </main>
      <Footer />
      <MobileBookingBar />
      <CookieBanner />
      <AnalyticsGate />
    </div>
  );
}
