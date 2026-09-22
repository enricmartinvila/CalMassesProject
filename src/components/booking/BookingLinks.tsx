import { bookingHref, isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { CtaLink } from "../ui/CtaLink";

/** Direct platform links — no availability form. */
export function BookingLinks({ id = "reservar" }: { id?: string }) {
  const { content } = useLang();
  const airbnb = bookingHref();
  const bookingCom = siteConfig.booking.bookingCom;
  const hasAirbnb = !isTodo(airbnb) && airbnb !== "#reservar";
  const hasBooking = !isTodo(bookingCom);

  return (
    <section
      id={id}
      className="rounded-3xl border border-[#556B2F]/20 bg-white p-6 md:p-8"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {hasAirbnb && (
          <CtaLink href={airbnb} external>
            {content.ui.cta.availability}
          </CtaLink>
        )}
        {hasBooking && (
          <CtaLink href={String(bookingCom)} external variant="secondary">
            Booking.com
          </CtaLink>
        )}
      </div>
    </section>
  );
}
