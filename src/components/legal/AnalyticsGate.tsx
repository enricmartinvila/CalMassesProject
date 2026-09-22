import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { getConsent } from "./CookieBanner";

export function AnalyticsGate() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(getConsent() === "accepted");
    sync();
    window.addEventListener("calmasses-consent", sync);
    return () => window.removeEventListener("calmasses-consent", sync);
  }, []);

  if (!allowed) return null;
  return <Analytics />;
}
