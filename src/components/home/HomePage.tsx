import { Link } from "react-router-dom";
import { bookingHref, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { SeoHead } from "../seo/SeoHead";
import { BreadcrumbJsonLd, FaqJsonLd, LodgingJsonLd } from "../seo/JsonLd";
import { emphasize, renderText } from "../ui/TodoMark";
import { SmartImage } from "../ui/SmartImage";
import { QuickFacts, ServiceFacts } from "./QuickFacts";
import { ReviewsSection } from "./ReviewsSection";
import { ImageGallery } from "./ImageGallery";
import { FaqSection } from "./FaqSection";

const WRAP = "mx-auto max-w-[1180px] px-5 sm:px-7";
const SECTION = "py-20 md:py-[110px]";

const btnBase =
  "inline-flex items-center gap-2.5 rounded-full border-[1.5px] px-7 py-[15px] text-[0.95rem] font-semibold transition duration-200";
const btnLight = `${btnBase} border-transparent bg-paper text-brand-dark hover:-translate-y-0.5`;
const btnGhost = `${btnBase} border-current hover:bg-white/15`;

function Body({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <div className={`space-y-4 leading-[1.65] ${className}`}>
      {items.map((p, i) =>
        p.startsWith("TODO_") ? null : <p key={i}>{renderText(p)}</p>,
      )}
    </div>
  );
}

function Arrow({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="link-underline mt-6">
      {children} →
    </Link>
  );
}

export function HomePage() {
  const { lang, content, path } = useLang();
  const h = content.home;
  const d = h.design;
  const attrs = siteConfig.confirmedHeroAttributes[lang];
  const showPool =
    siteConfig.amenities.pool.available &&
    siteConfig.amenities.pool.confirmedForGuests === true;
  const alt = (es: string, ca: string, en: string) =>
    lang === "en" ? en : lang === "ca" ? ca : es;

  return (
    <>
      <SeoHead
        lang={lang}
        routeKey="home"
        title={h.seo.title}
        description={h.seo.description}
        path={path("home")}
      />
      <LodgingJsonLd />
      <BreadcrumbJsonLd
        items={[{ name: content.ui.breadcrumbHome, path: path("home") }]}
      />
      <FaqJsonLd items={content.faq} />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end pb-12 text-white md:pb-[70px]">
        <div className="absolute inset-0">
          <SmartImage
            src={siteConfig.images.heroLcp}
            alt=""
            priority
            sizes="100vw"
            width={1600}
            height={1067}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,24,10,.45)_0%,rgba(20,24,10,.1)_40%,rgba(20,24,10,.75)_100%)]" />
        </div>
        <div className={`relative z-10 w-full pt-32 ${WRAP}`}>
          <h1 className="mb-6 max-w-[880px] text-[2.8rem] font-light leading-[1.05] sm:text-[4rem] lg:text-[5.6rem] [&_em]:!text-[#e6e9c3]">
            {emphasize(h.hero.h1, d.emphasis.hero)}
          </h1>
          <div className="max-w-[540px] space-y-4 text-[1.1rem] opacity-[.92] md:text-[1.15rem]">
            {h.hero.paragraphs.map((p, i) => (
              <p key={i}>{renderText(p)}</p>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a href={bookingHref()} target="_blank" rel="noopener noreferrer" className={btnLight}>
              {content.ui.cta.availability}
            </a>
            <Link to={path("alojamiento")} className={btnGhost}>
              {content.ui.cta.seeAccommodation}
            </Link>
          </div>
          <p className="mt-11 flex flex-wrap gap-x-3 gap-y-2 text-[0.88rem] capitalize opacity-85">
            {attrs.map((a, i) => (
              <span key={a}>
                {i > 0 && <span className="mr-3" aria-hidden>·</span>}
                {a}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* DATOS */}
      <div className="bg-brand-dark text-brand-soft">
        <div className={WRAP}>
          <QuickFacts variant="band" />
        </div>
      </div>

      {/* ALOJAMIENTO */}
      <section id="alojamiento" className={SECTION}>
        <div className={`${WRAP} grid items-center gap-11 lg:grid-cols-2 lg:gap-20`}>
          <div className="rv">
            <div className="eyebrow">{d.eyebrows.accommodation}</div>
            <h2 className="h2-display mb-6">
              {emphasize(h.accommodation.h2, d.emphasis.accommodation)}
            </h2>
            <Body items={h.accommodation.paragraphs} />
            <ServiceFacts className="mt-9" />
            <Arrow to={path("alojamiento")}>{h.accommodation.cta}</Arrow>
          </div>
          <div className="rv grid grid-cols-2 grid-rows-[200px_200px] gap-3.5 sm:grid-rows-[260px_260px]">
            <SmartImage
              src={siteConfig.images.bedroom}
              alt={alt("Dormitorio de Cal Masses", "Dormitori de Cal Masses", "Cal Masses bedroom")}
              className="row-span-2 h-full w-full rounded-card object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <SmartImage
              src={siteConfig.images.living}
              alt={alt("Sala de Cal Masses", "Sala de Cal Masses", "Cal Masses living room")}
              className="h-full w-full rounded-card object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <SmartImage
              src={siteConfig.images.kitchen}
              alt={alt("Cocina de Cal Masses", "Cuina de Cal Masses", "Cal Masses kitchen")}
              className="h-full w-full rounded-card object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </section>

      {/* OPINIONES */}
      <ReviewsSection title={h.reviews.h2} />

      {/* FINCA */}
      <section id="cal-masses" className={SECTION}>
        <div className={`${WRAP} grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-[70px]`}>
          <div className="rv relative mb-10 lg:mb-0">
            <SmartImage
              src={siteConfig.images.vineyard}
              alt={alt("Viñedo de Cal Masses", "Vinya de Cal Masses", "Cal Masses vineyard")}
              className="aspect-[4/5] w-full rounded-card object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <SmartImage
              src={siteConfig.images.garden}
              alt={alt("Huerto de Cal Masses", "Hort de Cal Masses", "Cal Masses kitchen garden")}
              className="absolute -bottom-10 right-2.5 aspect-square w-[42%] rounded-card border-8 border-cream object-cover lg:-right-7"
              sizes="(max-width: 1024px) 45vw, 22vw"
            />
          </div>
          <div className="rv">
            <div className="eyebrow">{d.eyebrows.finca}</div>
            <h2 className="h2-display mb-6">{emphasize(h.finca.h2, d.emphasis.finca)}</h2>
            <Body items={h.finca.paragraphs} />
            <div className="mt-10 rounded-card border-l-[3px] border-wine bg-paper px-8 py-8 sm:px-[38px]">
              <h3 className="mb-2.5 text-2xl">{renderText(h.finca.h3)}</h3>
              <p className="text-[0.97rem] text-muted">
                {h.finca.h3Paragraphs.filter((p) => !p.startsWith("TODO_")).join(" ")}
              </p>
            </div>
            <Arrow to={path("finca")}>{h.finca.cta}</Arrow>
          </div>
        </div>
      </section>

      {/* EXTERIOR / PISCINA */}
      {showPool && (
        <section id="exteriores" className={`${SECTION} bg-paper`}>
          <div className={`${WRAP} grid items-center gap-11 lg:grid-cols-2 lg:gap-[70px]`}>
            <div className="rv">
              <div className="eyebrow">{d.eyebrows.pool}</div>
              <h2 className="h2-display mb-6">{emphasize(h.pool.h2, d.emphasis.pool)}</h2>
              <Body items={h.pool.paragraphs} />
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {d.poolChips.map((c) => (
                  <li
                    key={c}
                    className="rounded-full bg-brand-soft px-4 py-2 text-[0.85rem] font-medium text-brand-dark"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <SmartImage
              src={siteConfig.images.pool}
              alt={alt("Piscina de Cal Masses", "Piscina de Cal Masses", "Cal Masses pool")}
              className="rv aspect-[5/4] w-full rounded-card object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>
      )}

      {/* ENTORNO */}
      <section id="entorno" className={SECTION}>
        <div className={WRAP}>
          <div className="rv max-w-[680px]">
            <div className="eyebrow">{d.eyebrows.surroundings}</div>
            <h2 className="h2-display mb-6">
              {emphasize(h.surroundings.h2, d.emphasis.surroundings)}
            </h2>
            <Body items={h.surroundings.paragraphs} className="text-[1.15rem] text-muted" />
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {h.surroundings.cards.map((card, i) => {
              const img = [
                siteConfig.images.exterior,
                siteConfig.images.placeta,
                siteConfig.images.terrace,
              ][i % 3];
              return (
                <li
                  key={card.title}
                  className="rv flex flex-col overflow-hidden rounded-card bg-paper transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(47,56,25,.35)]"
                >
                  <SmartImage
                    src={img}
                    alt=""
                    className="h-[220px] w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="flex flex-1 flex-col p-[30px]">
                    <h3 className="mb-2.5 text-[1.7rem]">{card.title}</h3>
                    <p className="flex-1 text-[0.95rem] text-muted">{card.text}</p>
                    <Link to={path(card.route)} className="link-underline mt-5 self-start">
                      {card.cta} →
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* SISU */}
      <section id="sisu" className={`${SECTION} overflow-hidden bg-[#2a1418] text-[#f3e6e0]`}>
        <div className={`${WRAP} grid items-center gap-11 lg:grid-cols-2 lg:gap-[70px]`}>
          <div className="rv">
            <div className="eyebrow !text-[#e0a8b0]">{d.eyebrows.sisu}</div>
            <h2 className="h2-display mb-6 [&_em]:!text-[#e0a8b0]">
              {emphasize(h.sisu.h2, d.emphasis.sisu)}
            </h2>
            <Body items={h.sisu.paragraphs} className="text-[#d9c3bd]" />
            <Link
              to={path("sisu")}
              className={`${btnBase} mt-8 border-transparent bg-[#f3e6e0] text-[#2a1418] hover:-translate-y-0.5`}
            >
              {h.sisu.cta}
            </Link>
          </div>
          <SmartImage
            src={siteConfig.images.wine}
            alt={alt("SISU, vino de Cal Masses", "SISU, vi de Cal Masses", "SISU, Cal Masses wine")}
            className="rv aspect-[4/5] w-full rounded-card object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* GALERÍA */}
      <ImageGallery
        eyebrow={d.eyebrows.gallery}
        title={d.galleryTitle}
        emphasis={d.emphasis.gallery}
      />

      {/* FAQ */}
      <FaqSection
        eyebrow={d.eyebrows.faq}
        title={d.faqTitle}
        emphasis={d.emphasis.faq}
        lead={d.faqLead}
        contact={{ to: path("contacto"), label: content.ui.cta.contact }}
        items={content.faq}
      />

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-[130px] text-center text-white">
        <div className="absolute inset-0">
          <SmartImage
            src={siteConfig.images.exterior}
            alt=""
            className="h-full w-full object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(47,56,25,.82),rgba(47,56,25,.88))]" />
        </div>
        <div className={`rv relative ${WRAP}`}>
          <h2 className="h2-display mx-auto mb-5 max-w-[720px] [&_em]:!text-[#e6e9c3]">
            {emphasize(h.finalCta.h2, d.emphasis.finalCta)}
          </h2>
          <Body items={h.finalCta.paragraphs} className="mx-auto mb-10 max-w-[480px] opacity-90" />
          <div className="flex flex-wrap justify-center gap-3.5">
            <a href={bookingHref()} target="_blank" rel="noopener noreferrer" className={btnLight}>
              {content.ui.cta.availability}
            </a>
            <Link to={path("contacto")} className={btnGhost}>
              {content.ui.cta.contact}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
