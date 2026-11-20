import { useEffect, useState } from "react";
import { bookingHref, isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { CtaLink } from "../ui/CtaLink";
import { WhatsIcon } from "../../assets/whatsapp_icon";

/**
 * Sticky mobile availability CTA.
 * Hides when the footer is in view so it does not cover footer links.
 */
export function MobileBookingBar() {
  const { content } = useLang();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (isTodo(siteConfig.booking.url)) return;
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { root: null, threshold: 0.05 },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (isTodo(siteConfig.booking.url)) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 px-3 pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-transform duration-200 md:hidden ${
        hidden ? "translate-y-full pointer-events-none" : "translate-y-0"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2">
        <CtaLink
          href={bookingHref()}
          external
          className="flex-1 !rounded-full !py-3"
        >
          {content.ui.cta.availability}
        </CtaLink>
        <a
          href={siteConfig.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex w-12 shrink-0 items-center justify-center rounded-full border border-brand text-brand"
        >
          <WhatsIcon className="h-6 w-6" aria-hidden />
        </a>
      </div>
    </div>
  );
}
