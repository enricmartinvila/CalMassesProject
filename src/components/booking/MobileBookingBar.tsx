import { bookingHref, isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { CtaLink } from "../ui/CtaLink";

export function MobileBookingBar() {
  const { content } = useLang();
  if (isTodo(siteConfig.booking.url)) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <CtaLink href={bookingHref()} external className="w-full !rounded-full">
        {content.ui.cta.bookAirbnb}
      </CtaLink>
    </div>
  );
}
