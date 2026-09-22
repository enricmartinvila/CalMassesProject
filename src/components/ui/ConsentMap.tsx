import { useEffect, useState } from "react";
import { getConsent } from "../legal/CookieBanner";
import { siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";

export function ConsentMap() {
  const { content } = useLang();
  const [allowed, setAllowed] = useState(false);
  const [force, setForce] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(getConsent() === "accepted");
    sync();
    window.addEventListener("calmasses-consent", sync);
    return () => window.removeEventListener("calmasses-consent", sync);
  }, []);

  if (!allowed && !force) {
    return (
      <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-3 bg-gray-50 p-6 text-center">
        <p className="text-sm text-gray-600">{content.ui.locationMapConsent}</p>
        <button
          type="button"
          onClick={() => setForce(true)}
          className="rounded-full border border-[#556B2F] px-4 py-2 text-sm font-medium text-[#556B2F]"
        >
          {content.ui.loadMap}
        </button>
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <iframe
        title={`${siteConfig.brandName} map`}
        src={siteConfig.mapsEmbedUrl}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
