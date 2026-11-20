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
    <section className="bg-brand-soft py-20">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-7">
        <h2 className="eyebrow !font-sans !tracking-[0.18em]">{renderText(title)}</h2>

        {visibleSources.length > 0 && (
          <ul className="mt-8 grid gap-7 md:grid-cols-2">
            {visibleSources.map((s) => (
              <li
                key={s.source}
                className="rv flex flex-col items-start justify-between gap-5 rounded-card bg-paper p-8 sm:flex-row sm:items-center sm:p-[42px]"
              >
                <div>
                  <p className="font-serif text-[4rem] leading-none text-brand-dark">
                    {s.rating}
                    <span className="text-[1.2rem] text-muted"> / {s.scale}</span>
                  </p>
                  <p className="text-[0.95rem] tracking-[3px] text-[#c88a2d]" aria-hidden>
                    ★★★★★
                  </p>
                  <p className="mt-2 text-[0.92rem] text-muted">
                    {!isTodo(s.count) ? `${s.count} · ` : null}
                    {s.source}
                  </p>
                </div>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  {content.ui.cta.seeMoreReviews} →
                </a>
              </li>
            ))}
          </ul>
        )}

        {hasQuotes ? (
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {(items as Array<{ text: string; name: string; source?: string }>)
              .slice(0, 3)
              .map((review, i) => (
                <li key={i} className="rounded-card bg-paper p-8">
                  <p className="font-serif text-lg leading-relaxed">“{review.text}”</p>
                  <p className="mt-4 text-sm text-muted">
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
