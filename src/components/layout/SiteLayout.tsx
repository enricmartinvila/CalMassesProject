import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBookingBar } from "../booking/MobileBookingBar";
import { CookieBanner } from "../legal/CookieBanner";
import { AnalyticsGate } from "../legal/AnalyticsGate";

/** Pages whose first section is a full-bleed hero that sits under the header. */
function isHeroPath(pathname: string) {
  return /^\/(es|ca|en)\/?$/.test(pathname);
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

export function SiteLayout() {
  const { pathname } = useLocation();
  const overHero = isHeroPath(pathname);
  useReveal(pathname);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <Header overHero={overHero} />
      <main className={`${overHero ? "" : "pt-20"} pb-24 md:pb-0`}>
        <Outlet />
      </main>
      <Footer />
      <MobileBookingBar />
      <CookieBanner />
      <AnalyticsGate />
    </div>
  );
}
