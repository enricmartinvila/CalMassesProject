import { Link } from "react-router-dom";
import { bookingHref, isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import type { RouteKey } from "../../i18n/routes";
import { renderText } from "../ui/TodoMark";
import type { LandingCard } from "../../content/landings/types";

export function DestinationCards({ cards }: { cards: LandingCard[] }) {
  const { path } = useLang();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <article
          key={`${card.route}-${card.title}`}
          className="flex flex-col rounded-3xl border border-[#556B2F]/15 bg-white p-6 shadow-sm"
        >
          <h3 className="text-xl font-semibold text-gray-900">
            {renderText(card.title)}
          </h3>
          <p className="mt-3 flex-1 text-sm md:text-base text-gray-700 leading-relaxed">
            {renderText(card.text)}
          </p>
          <Link
            to={path(card.route)}
            className="mt-6 inline-flex text-sm font-semibold text-[#556B2F] underline-offset-4 hover:underline"
          >
            {renderText(card.cta)}
          </Link>
        </article>
      ))}
    </div>
  );
}

function BookingAwareLink({
  label,
  route,
}: {
  label: string;
  route: RouteKey;
}) {
  const { path, content } = useLang();
  const className =
    "text-[#556B2F] underline-offset-4 hover:underline";

  if (route === "reservar" && !isTodo(siteConfig.booking.url)) {
    return (
      <a
        href={bookingHref()}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {renderText(content.ui.cta.bookAirbnb)}
      </a>
    );
  }

  return (
    <Link to={path(route)} className={className}>
      {renderText(label)}
    </Link>
  );
}

export function InternalLinkCards({
  title,
  links,
}: {
  title?: string;
  links: Array<{ label: string; route: RouteKey }>;
}) {
  if (!links.length) return null;

  return (
    <aside className="rounded-3xl border border-[#556B2F]/10 bg-[#f7f7f4] p-6 md:p-8">
      {title && (
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {renderText(title)}
        </h2>
      )}
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {links.map((l) => (
          <li key={`${l.route}-${l.label}`}>
            <BookingAwareLink label={l.label} route={l.route} />
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function RelatedPages({
  links,
}: {
  links: Array<{ label: string; route: RouteKey }>;
}) {
  return <InternalLinkCards links={links} />;
}
