import { isTodo, siteConfig } from "../../config/siteConfig";
import { renderText } from "../ui/TodoMark";

export function ReviewsSection({ title, emptyLabel }: { title: string; emptyLabel: string }) {
  const { rating, reviewCount, reviewSource, reviewDate } = siteConfig.reviews;
  const hasData =
    !isTodo(rating) && !isTodo(reviewCount) && !isTodo(reviewSource);

  return (
    <section className="bg-[#f7f7f4] py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
          {renderText(title)}
        </h2>

        {hasData ? (
          <div className="rounded-2xl border border-[#556B2F]/20 bg-white p-6">
            <p className="text-lg font-semibold">
              {String(rating)} / 5 · {String(reviewCount)}
            </p>
            <p className="mt-1 text-sm text-gray-600">
              {String(reviewSource)}
              {!isTodo(reviewDate) ? ` · ${String(reviewDate)}` : null}
            </p>
          </div>
        ) : emptyLabel.startsWith("TODO_") ? null : (
          <p className="text-sm md:text-base text-gray-600">{emptyLabel}</p>
        )}
      </div>
    </section>
  );
}
