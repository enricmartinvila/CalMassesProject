import type { GuideBlock, GuidePageKey } from "../../content/guides/types";
import { getGuide } from "../../content/guides";
import { useLang } from "../../hooks/useLang";
import { FaqJsonLd } from "../seo/JsonLd";

const WRAP = "mx-auto max-w-[1180px] px-5 sm:px-7";

function Head({ eyebrow, h2, intro }: { eyebrow?: string; h2: string; intro?: string[] }) {
  return (
    <div className="max-w-[46rem]">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="font-serif text-[1.9rem] leading-[1.15] md:text-[2.5rem]">{h2}</h2>
      {intro?.length ? (
        <div className="mt-5 space-y-4 text-[1.05rem] leading-relaxed text-muted">
          {intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.kind) {
    case "text":
      return (
        <>
          <Head eyebrow={block.eyebrow} h2={block.h2} intro={block.paragraphs} />
          {block.h3Blocks?.length ? (
            <div className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
              {block.h3Blocks.map((b) => (
                <div key={b.h3}>
                  <h3 className="mb-2 text-[1.35rem]">{b.h3}</h3>
                  <div className="space-y-3 text-[0.98rem] leading-relaxed text-muted">
                    {b.paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </>
      );
    case "places":
      return (
        <>
          <Head eyebrow={block.eyebrow} h2={block.h2} intro={block.intro} />
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {block.items.map((p) => (
              <li key={p.name} className="rounded-card bg-paper p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-[1.45rem] leading-tight">{p.name}</h3>
                  {p.time && (
                    <span className="rounded-full bg-brand-soft px-3 py-1 text-[0.78rem] font-semibold text-brand-dark">
                      {p.time}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-muted">{p.text}</p>
              </li>
            ))}
          </ul>
          {block.note && <p className="mt-5 text-sm text-muted">{block.note}</p>}
        </>
      );
    case "itinerary":
      return (
        <>
          <Head eyebrow={block.eyebrow} h2={block.h2} intro={block.intro} />
          <ol className="mt-10 max-w-[52rem] border-l border-line">
            {block.steps.map((s, i) => (
              <li key={i} className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-brand" aria-hidden />
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-brand">{s.when}</p>
                <h3 className="mt-1 text-[1.3rem]">{s.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </>
      );
    case "tips":
      return (
        <>
          <Head eyebrow={block.eyebrow} h2={block.h2} intro={block.intro} />
          <ul className="mt-10 grid gap-x-12 gap-y-7 md:grid-cols-2">
            {block.items.map((t) => (
              <li key={t.title} className="border-t border-line pt-5">
                <h3 className="font-sans text-[1rem] font-semibold tracking-normal">{t.title}</h3>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-muted">{t.text}</p>
              </li>
            ))}
          </ul>
        </>
      );
    case "facts":
      return (
        <>
          <Head eyebrow={block.eyebrow} h2={block.h2} intro={block.intro} />
          <dl className="mt-8 max-w-[52rem] divide-y divide-line border-y border-line">
            {block.rows.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-3.5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <dt className="text-[0.95rem] text-muted">{k}</dt>
                <dd className="text-[0.97rem] font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          {block.note && <p className="mt-4 text-sm text-muted">{block.note}</p>}
        </>
      );
    case "faq":
      return (
        <>
          <FaqJsonLd items={block.items} />
          <Head eyebrow={block.eyebrow} h2={block.h2} />
          <div className="mt-8 max-w-[52rem]">
            {block.items.map((item) => (
              <details key={item.question} className="group border-b border-line py-5">
                <summary className="flex cursor-pointer list-none justify-between gap-5 text-[1.03rem] font-medium">
                  <span>{item.question}</span>
                  <span className="shrink-0 text-2xl leading-none text-brand transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </>
      );
  }
}

/** Table-of-contents entries for pages that show a TOC. */
export function useGuideToc(page: GuidePageKey) {
  const { lang } = useLang();
  return getGuide(lang, page).map((b) => ({ id: b.id, label: b.h2 }));
}

export function GuideBlocks({ page }: { page: GuidePageKey }) {
  const { lang } = useLang();
  const blocks = getGuide(lang, page);
  if (!blocks.length) return null;

  return (
    <>
      {blocks.map((block, i) => (
        <section
          key={block.id}
          id={block.id}
          className={`scroll-mt-28 py-16 md:py-24 ${i % 2 === 0 ? "bg-brand-soft/40" : ""}`}
        >
          <div className={WRAP}>
            <Block block={block} />
          </div>
        </section>
      ))}
    </>
  );
}
