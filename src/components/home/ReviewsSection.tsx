import { isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { renderText } from "../ui/TodoMark";

export function ReviewsSection({ title }: { title: string }) {
  const { content } = useLang();
  const { sources, items } = siteConfig.reviews;

  const visibleSources = sources.filter(
    (s) => !isTodo(s.rating) && !isTodo(s.source) && !isTodo(s.url),
  );

  const hasQuotes = Array.isArray(items) && items.length > 0;

  if (!visibleSources.length && !hasQuotes) {
    return null;
  }

  return (
    <section className="bg-[#f7f7f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 max-w-[46rem]">
          {renderText(title)}
        </h2>

        {visibleSources.length > 0 && (
          <ul className="mb-10 grid gap-6 sm:grid-cols-2 max-w-2xl">
            {visibleSources.map((s) => (
              <li key={s.source} className="border-t border-[#556B2F]/25 pt-4">
                <p className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                  {s.rating}
                  <span className="text-lg md:text-xl text-gray-600">
                    {" "}
                    / {s.scale}
                  </span>
                </p>
                <p className="mt-2 text-sm md:text-base text-gray-600">
                  {!isTodo(s.count) ? `${s.count} · ` : null}
                  {s.source}
                </p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-[#556B2F] underline-offset-4 hover:underline"
                >
                  {content.ui.cta.seeMoreReviews}
                </a>
              </li>
            ))}
          </ul>
        )}

        {hasQuotes ? (
          <ul className="grid gap-6 md:grid-cols-3">
            {(items as Array<{ text: string; name: string; source?: string }>)
              .slice(0, 3)
              .map((review, i) => (
                <li key={i} className="border-t border-[#556B2F]/25 pt-5">
                  <p className="text-base text-gray-800 leading-relaxed">
                    “{review.text}”
                  </p>
                  <p className="mt-4 text-sm text-gray-600">
                    {review.name}
                    {review.source ? ` · ${review.source}` : null}
                  </p>
                </li>
              ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
