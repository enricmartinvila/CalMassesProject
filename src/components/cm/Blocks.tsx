import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { bookingHref, isTodo, siteConfig, type Lang } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import type { RouteKey } from "../../i18n/routes";
import { BreadcrumbJsonLd } from "../seo/JsonLd";
import { SmartImage } from "../ui/SmartImage";
import { renderText } from "../ui/TodoMark";
import { Icon, type IconName } from "./Icons";

/** Booking link for any page; works whether or not bookingHref takes a language. */
export function bookHref(lang: Lang): string {
  return (bookingHref as (l?: Lang) => string)(lang);
}

const has = (src?: string): src is string => Boolean(src && !isTodo(src));

/* ---------- buttons ---------- */

export type BtnProps = {
  children: React.ReactNode;
  variant?: "primary" | "light" | "ghost" | "ghost-dark";
  to?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
};

export function Btn({ children, variant = "primary", to, href, external, onClick }: BtnProps) {
  const cls = `cm-btn cm-btn-${variant}`;
  if (to) return <Link className={cls} to={to}>{children}</Link>;
  if (href)
    return (
      <a className={cls} href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

/** Primary booking button + optional secondary link. */
export function BookActions({
  secondary,
  tone = "paper",
}: {
  secondary?: { label: string; to?: string; href?: string; external?: boolean };
  /** hero: over a photo; dark: over the dark CTA band; paper: on light sections. */
  tone?: "hero" | "dark" | "paper";
}) {
  const { lang, content } = useLang();
  const primary = tone === "dark" ? "light" : "primary";
  const second = tone === "paper" ? "ghost-dark" : "ghost";
  return (
    <div className="cm-actions">
      <Btn variant={primary} href={bookHref(lang)} external>
        {content.ui.cta.availability}
      </Btn>
      {secondary ? (
        <Btn variant={second} to={secondary.to} href={secondary.href} external={secondary.external}>
          {secondary.label}
        </Btn>
      ) : null}
    </div>
  );
}

/* ---------- page shell ---------- */

export function Page({ children }: { children: React.ReactNode }) {
  return <article className="cm-page">{children}</article>;
}

export type Crumb = { label: string; route?: RouteKey };

export function Hero({
  crumbs,
  eyebrow,
  h1,
  intro,
  image,
  actions,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  h1: string;
  intro: string[];
  image?: string;
  actions?: React.ReactNode;
}) {
  const { path } = useLang();
  const src = has(image) ? image : siteConfig.images.vineyard;
  return (
    <header className="cm-hero">
      <BreadcrumbJsonLd
        items={crumbs.map((c) => ({ name: c.label, path: c.route ? path(c.route) : undefined }))}
      />
      <div className="cm-hero-bg">
        <SmartImage src={src} alt="" priority sizes="100vw" width={1600} height={1067} />
      </div>
      <div className="cm-wrap cm-hero-in">
        <nav className="cm-crumb" aria-label="Breadcrumb">
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1;
            return (
              <span key={`${c.label}-${i}`} style={{ display: "contents" }}>
                {i > 0 && <span aria-hidden="true">/</span>}
                {!last && c.route ? (
                  <Link to={path(c.route)}>{c.label}</Link>
                ) : (
                  <span aria-current={last ? "page" : undefined}>{c.label}</span>
                )}
              </span>
            );
          })}
        </nav>
        {eyebrow ? <p className="cm-eyebrow cm-light">{eyebrow}</p> : null}
        <h1>{renderText(h1)}</h1>
        <div className="cm-hero-p">
          {intro.filter((p) => !p.startsWith("TODO_")).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {actions}
      </div>
    </header>
  );
}

export function Toc({ items }: { items: Array<{ id: string; label: string }> }) {
  const { content } = useLang();
  const [active, setActive] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-35% 0px -60% 0px" },
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);

  useEffect(() => {
    const ul = listRef.current;
    const a = ul?.querySelector<HTMLAnchorElement>("a.cm-on");
    if (ul && a && ul.scrollWidth > ul.clientWidth) ul.scrollTo({ left: a.offsetLeft - 24, behavior: "smooth" });
  }, [active]);

  if (items.length < 2) return null;
  return (
    <nav className="cm-toc" aria-label={content.ui.guide.tocTitle}>
      <div className="cm-wrap">
        <span className="cm-toc-t">{content.ui.guide.tocTitle}</span>
        <ul ref={listRef}>
          {items.map((it) => (
            <li key={it.id}>
              <a href={`#${it.id}`} className={active === it.id ? "cm-on" : undefined}>
                {it.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ---------- sections ---------- */

export function Head({ eyebrow, h2, intro }: { eyebrow?: string; h2?: string; intro?: string[] }) {
  return (
    <div className="cm-sec-head">
      {eyebrow ? <p className="cm-eyebrow">{eyebrow}</p> : null}
      {h2 ? <h2>{renderText(h2)}</h2> : null}
      {intro?.length ? <Prose items={intro} /> : null}
    </div>
  );
}

export function Prose({ items, children }: { items?: string[]; children?: React.ReactNode }) {
  return (
    <div className="cm-prose">
      {(items ?? []).filter((p) => !p.startsWith("TODO_")).map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {children}
    </div>
  );
}

export function Sec({
  id,
  soft = false,
  eyebrow,
  h2,
  intro,
  children,
  headChildren,
}: {
  id?: string;
  soft?: boolean;
  eyebrow?: string;
  h2?: string;
  intro?: string[];
  children?: React.ReactNode;
  /** Rendered inside the head, under the intro (e.g. buttons). */
  headChildren?: React.ReactNode;
}) {
  return (
    <section id={id} className={`cm-sec rv ${soft ? "cm-soft" : ""}`}>
      <div className="cm-wrap">
        {(h2 || eyebrow || intro?.length || headChildren) && (
          <div className="cm-sec-head">
            {eyebrow ? <p className="cm-eyebrow">{eyebrow}</p> : null}
            {h2 ? <h2>{renderText(h2)}</h2> : null}
            {intro?.length || headChildren ? <Prose items={intro}>{headChildren}</Prose> : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Split({
  id,
  soft = false,
  flip = false,
  eyebrow,
  h2,
  paragraphs,
  images,
  children,
}: {
  id?: string;
  soft?: boolean;
  flip?: boolean;
  eyebrow?: string;
  h2: string;
  paragraphs?: string[];
  images: Array<string | undefined>;
  children?: React.ReactNode;
}) {
  const pics = images.filter(has);
  if (!pics.length)
    return (
      <Sec id={id} soft={soft} eyebrow={eyebrow} h2={h2} intro={paragraphs}>
        {children}
      </Sec>
    );
  return (
    <section
      id={id}
      className={`cm-sec cm-split rv ${flip ? "cm-flip" : ""} ${pics.length > 1 ? "cm-two" : ""} ${soft ? "cm-soft" : ""}`}
    >
      <div className="cm-wrap">
        <div>
          {eyebrow ? <p className="cm-eyebrow">{eyebrow}</p> : null}
          <h2>{renderText(h2)}</h2>
          <Prose items={paragraphs} />
          {children}
        </div>
        <div className="cm-split-i">
          {pics.map((src) => (
            <figure className="cm-pic" key={src}>
              <SmartImage src={src} alt="" sizes="(max-width: 960px) 100vw, 45vw" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Band({ src }: { src?: string }) {
  if (!has(src)) return null;
  return (
    <div className="cm-band">
      <SmartImage src={src} alt="" sizes="100vw" />
    </div>
  );
}

export function Stats({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="cm-stats">
      <div className="cm-wrap">
        <ul>
          {items.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="cm-note">
      <Icon name="info" />
      <span>{children}</span>
    </p>
  );
}

/* ---------- lists ---------- */

export function Cards({
  items,
}: {
  items: Array<{ title: React.ReactNode; key?: string; text: string; pill?: string }>;
}) {
  return (
    <ul className="cm-cards">
      {items.map((c, i) => (
        <li className="cm-card" key={c.key ?? i}>
          <div className="cm-card-h">
            <h3>{c.title}</h3>
            {c.pill ? (
              <span className="cm-pill">
                <Icon name="clock" />
                {c.pill}
              </span>
            ) : null}
          </div>
          <p>{c.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: Array<{ title: string; text: string; to: string; cta: string }> }) {
  return (
    <ol className="cm-steps">
      {items.map((s, i) => (
        <li key={s.to}>
          <Link className="cm-step" to={s.to}>
            <span className="cm-num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <span className="cm-more">
              {s.cta} <Icon name="arrow" />
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function Timeline({ steps }: { steps: Array<{ when: string; title: string; text: string }> }) {
  return (
    <ol className="cm-timeline">
      {steps.map((s, i) => (
        <li key={i}>
          <span className="cm-when">{s.when}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Rows({ rows }: { rows: Array<[string, React.ReactNode]> }) {
  return (
    <dl className="cm-rows">
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Tips({ items }: { items: Array<{ title: string; text: string }> }) {
  return (
    <ul className="cm-tips">
      {items.map((t, i) => (
        <li key={t.title}>
          <span className="cm-tip-n">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

const SEASON_ICONS: IconName[] = ["spring", "summer", "autumn", "winter"];

export function Seasons({ items }: { items: Array<{ title: string; paragraphs: string[] }> }) {
  return (
    <ul className="cm-seasons">
      {items.map((s, i) => (
        <li key={s.title}>
          <Icon name={items.length === 4 ? SEASON_ICONS[i] : "leaf"} />
          <h3>{s.title}</h3>
          {s.paragraphs.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
        </li>
      ))}
    </ul>
  );
}

export function Specs({ items }: { items: Array<{ label: string; value: string; wide?: boolean }> }) {
  if (!items.length) return null;
  return (
    <dl className="cm-specs">
      {items.map((s) => (
        <div key={s.label} className={s.wide ? "cm-wide" : undefined}>
          <dt>{s.label}</dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Chips({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="cm-chips">
      {items.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  );
}

export function Route({ destination, label }: { destination: string; label: string }) {
  const { content } = useLang();
  return (
    <div className="cm-route">
      <span className="cm-route-t">{content.ui.guide.fromCalMasses}</span>
      <div className="cm-route-l">
        <b>Cal Masses</b>
        <i>
          <Icon name="route" />
        </i>
        <b>{destination}</b>
      </div>
      <span className="cm-route-d">{label}</span>
    </div>
  );
}

export function Callout({ h3, paragraphs }: { h3: string; paragraphs: string[] }) {
  return (
    <aside className="cm-callout">
      <Icon name="info" />
      <div>
        <h3>{h3}</h3>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </aside>
  );
}

export function Faq({ items }: { items: Array<{ question: string; answer: string }> }) {
  const visible = items.filter(
    (q) => !isTodo(q.answer) && !q.answer.startsWith("TODO_") && !q.question.startsWith("TODO_"),
  );
  if (!visible.length) return null;
  return (
    <div className="cm-faq">
      {visible.map((q) => (
        <details key={q.question}>
          <summary>
            <span>{q.question}</span>
            <Icon name="plus" className="cm-plus" />
          </summary>
          <p>{q.answer}</p>
        </details>
      ))}
    </div>
  );
}

/* ---------- closing ---------- */

export function Next({ items }: { items: Array<{ label: string; to: string }> }) {
  const { content } = useLang();
  if (!items.length) return null;
  return (
    <section className="cm-sec rv">
      <div className="cm-wrap">
        <div className="cm-sec-head">
          <h2>{content.ui.guide.keepDiscovering}</h2>
        </div>
        <ul className="cm-next-grid">
          {items.map((l) => (
            <li key={l.to}>
              <Link to={l.to}>
                <span>{l.label}</span>
                <Icon name="arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Cta({
  h2,
  paragraphs,
  secondary,
  primaryLabel,
}: {
  h2: string;
  paragraphs: string[];
  secondary?: { label: string; to?: string; href?: string; external?: boolean };
  primaryLabel?: string;
}) {
  const { lang, content } = useLang();
  return (
    <section className="cm-cta">
      <div className="cm-cta-bg">
        <SmartImage src={siteConfig.images.exterior} alt="" sizes="100vw" />
      </div>
      <div className="cm-wrap">
        <h2>{renderText(h2)}</h2>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="cm-actions">
          <Btn variant="light" href={bookHref(lang)} external>
            {primaryLabel ?? content.ui.cta.availability}
          </Btn>
          {secondary ? (
            <Btn variant="ghost" to={secondary.to} href={secondary.href} external={secondary.external}>
              {secondary.label}
            </Btn>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function LinkCards({ items }: { items: Array<{ title: string; text: string; to: string; cta: string }> }) {
  return (
    <ul className="cm-cards cm-links">
      {items.map((c) => (
        <li className="cm-card" key={c.to}>
          <Link to={c.to}>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <span className="cm-more">
              {c.cta} <Icon name="arrow" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Groups({ items }: { items: Array<{ title: string; items: string[] }> }) {
  if (!items.length) return null;
  return (
    <div className="cm-groups">
      {items.map((g) => (
        <div className="cm-group" key={g.title}>
          <h3>{g.title}</h3>
          <ul>
            {g.items.map((it) => (
              <li key={it}>
                <Icon name="check" />
                {it}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function YesNo({ kind, title, items }: { kind: "yes" | "no"; title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className={`cm-yn cm-${kind}`}>
      <h3>{title}</h3>
      <ul>
        {items.map((it) => (
          <li key={it}>
            <Icon name={kind === "yes" ? "check" : "x"} />
            {it.replace(/[;,.]\s*$/, "")}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Pills({ title, items }: { title?: string; items: Array<{ label: string; to: string }> }) {
  if (!items.length) return null;
  return (
    <ul className="cm-pills">
      {title ? <li className="cm-pills-t">{title}</li> : null}
      {items.map((l) => (
        <li key={l.to}>
          <Link to={l.to}>
            {l.label} <Icon name="arrow" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Rating cards for sources with a confirmed rating; approved quotes if any. */
export function Reviews({ soft = true, h2 }: { soft?: boolean; h2: string }) {
  const { content } = useLang();
  const sources = siteConfig.reviews.sources.filter(
    (s) => !isTodo(s.rating) && !isTodo(s.source) && !isTodo(s.url),
  );
  const quotes = Array.isArray(siteConfig.reviews.items)
    ? (siteConfig.reviews.items as Array<{ text: string; name: string; source?: string }>)
    : [];
  if (!sources.length && !quotes.length) return null;
  return (
    <Sec soft={soft} h2={h2}>
      <ul className="cm-reviews">
        {sources.map((s) => (
          <li key={s.source}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              <span className="cm-stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="star" />
                ))}
              </span>
              <b>
                {s.rating} / {s.scale}
              </b>
              <span>
                {!isTodo(s.count) ? `${s.count} · ` : null}
                {s.source}
              </span>
              <span className="cm-more">
                {content.ui.cta.seeMoreReviews} <Icon name="arrow" />
              </span>
            </a>
          </li>
        ))}
        {quotes.slice(0, 3).map((q, i) => (
          <li key={`q${i}`}>
            <div>
              <b>“{q.text}”</b>
              <span>
                {q.name}
                {q.source ? ` · ${q.source}` : null}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Sec>
  );
}
