import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBookingBar } from "../booking/MobileBookingBar";
import { CookieBanner } from "../legal/CookieBanner";
import { AnalyticsGate } from "../legal/AnalyticsGate";

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="pt-20 pb-24 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileBookingBar />
      <CookieBanner />
      <AnalyticsGate />
    </div>
  );
}
