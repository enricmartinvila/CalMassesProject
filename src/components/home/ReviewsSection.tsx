import { isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { CtaLink } from "../ui/CtaLink";
import { renderText } from "../ui/TodoMark";

export function ReviewsSection({ title }: { title: string }) {
  const { content } = useLang();
  const { rating, reviewCount, reviewSource, reviewDate, items, moreUrl } =
    siteConfig.reviews;

  const hasAggregate =
    !isTodo(rating) && !isTodo(reviewCount) && !isTodo(reviewSource);

  const hasQuotes = Array.isArray(items) && items.length > 0;

  if (!hasAggregate && !hasQuotes) {
    return null;
  }

  return (
    <section className="bg-[#f7f7f4] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 max-w-[46rem]">
          {renderText(title)}
        </h2>

        {hasAggregate && (
          <div className="mb-10 max-w-[46rem]">
            <p className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
              {String(rating)}
              <span className="text-lg md:text-xl text-gray-600"> / 5</span>
            </p>
            <p className="mt-2 text-sm md:text-base text-gray-600">
              {String(reviewCount)} · {String(reviewSource)}
              {!isTodo(reviewDate) ? ` · ${String(reviewDate)}` : null}
            </p>
          </div>
        )}

        {hasQuotes ? (
          <ul className="grid gap-6 md:grid-cols-3">
            {(items as Array<{ text: string; name: string; source?: string }>)
              .slice(0, 3)
              .map((review, i) => (
                <li
                  key={i}
                  className="border-t border-[#556B2F]/25 pt-5"
                >
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

        {!isTodo(moreUrl) && (
          <div className="mt-10">
            <CtaLink href={String(moreUrl)} external variant="secondary">
              {content.ui.cta.seeMoreReviews}
            </CtaLink>
          </div>
        )}
      </div>
    </section>
  );
}
