import { Link } from "react-router-dom";
import { isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";

type DestinationKey = "montserrat" | "manresa" | "barcelona";

/**
 * Visual distance chip — displays only confirmed siteConfig values.
 * Never calculates distances.
 */
export function DistanceFromCalMasses({
  destination,
  destinationLabel,
}: {
  destination: DestinationKey;
  destinationLabel: string;
}) {
  const { content } = useLang();
  const raw = siteConfig.distances[destination];
  if (isTodo(raw)) return null;

  return (
    <div className="mt-8 max-w-xl border border-[#556B2F]/20 px-5 py-5 sm:px-6">
      <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#556B2F]">
        {content.ui.guide.fromCalMasses}
      </p>
      <p className="mt-3 text-lg md:text-xl font-light text-gray-900 tracking-tight">
        Cal Masses
        <span className="mx-2 text-[#556B2F]" aria-hidden>
          →
        </span>
        {destinationLabel}
      </p>
      <p className="mt-2 text-sm md:text-base text-gray-600">{String(raw)}</p>
    </div>
  );
}

export function PageTOC({
  items,
}: {
  items: Array<{ id: string; label: string }>;
}) {
  const { content } = useLang();
  if (items.length < 2) return null;

  return (
    <nav
      aria-label={content.ui.guide.tocTitle}
      className="border-y border-gray-200 py-5"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-[#556B2F]">
          {content.ui.guide.tocTitle}
        </p>
        <ul className="mt-3 flex gap-x-6 gap-y-2 overflow-x-auto pb-1 text-sm text-gray-700 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className="whitespace-nowrap underline-offset-4 hover:text-[#556B2F] hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function RelatedDestinations({
  items,
}: {
  items: Array<{ title: string; text?: string; to: string }>;
}) {
  const { content } = useLang();
  if (!items.length) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {content.ui.guide.keepDiscovering}
        </h2>
        <ul className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <span className="text-lg font-medium text-gray-900 group-hover:text-[#556B2F]">
                  {item.title}
                </span>
                {item.text ? (
                  <span className="text-sm text-gray-600 sm:text-right max-w-md">
                    {item.text}
                    <span className="ml-2 text-[#556B2F]" aria-hidden>
                      →
                    </span>
                  </span>
                ) : (
                  <span className="text-[#556B2F]" aria-hidden>
                    →
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function EnvironmentCTA({
  h2,
  paragraphs,
  primary,
  secondary,
}: {
  h2: string;
  paragraphs: string[];
  primary: React.ReactNode;
  secondary?: React.ReactNode;
}) {
  return (
    <section className="bg-[#556B2F] text-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[40rem] space-y-5">
          <h2 className="text-2xl md:text-3xl font-semibold">{h2}</h2>
          <div className="space-y-4 text-base md:text-lg text-white/90 leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            {primary}
            {secondary}
          </div>
        </div>
      </div>
    </section>
  );
}
