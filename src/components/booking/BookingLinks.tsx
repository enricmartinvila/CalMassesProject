import { bookingHref, isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { CtaLink } from "../ui/CtaLink";

type Props = {
  id?: string;
};

/** Direct platform links — no fake availability form. */
export function BookingLinks({ id = "reservar" }: Props) {
  const { content } = useLang();
  const airbnb = bookingHref();
  const bookingCom = siteConfig.booking.bookingCom;
  const hasAirbnb = !isTodo(airbnb) && airbnb !== "#reservar";
  const hasBooking = !isTodo(bookingCom);

  return (
    <section
      id={id}
      className="rounded-3xl border border-[#556B2F]/20 bg-white p-6 shadow-md md:p-8"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {hasAirbnb && (
          <CtaLink href={airbnb} external>
            {content.ui.cta.bookAirbnb}
          </CtaLink>
        )}
        {hasBooking && (
          <CtaLink href={String(bookingCom)} external variant="secondary">
            {content.ui.cta.bookBooking}
          </CtaLink>
        )}
      </div>
      {!hasAirbnb && !hasBooking && (
        <p className="text-sm text-gray-600">{content.ui.cta.contact}</p>
      )}
    </section>
  );
}
