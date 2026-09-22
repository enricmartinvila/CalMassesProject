import { bookingHref, isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { SeoHead } from "../seo/SeoHead";
import { BreadcrumbJsonLd, FaqJsonLd, LodgingJsonLd } from "../seo/JsonLd";
import { CtaLink } from "../ui/CtaLink";
import { Paragraphs, renderText, TodoMark } from "../ui/TodoMark";
import { SmartImage } from "../ui/SmartImage";
import { HeroGallery } from "./HeroGallery";
import { FaqAccordion } from "./FaqAccordion";
import { ReviewsSection } from "./ReviewsSection";
import { ConsentMap } from "../ui/ConsentMap";

function SectionShell({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function HomePage() {
  const { lang, content, path } = useLang();
  const h = content.home;
  const attrs = siteConfig.confirmedHeroAttributes[lang];

  const practicalFacts = [
    { label: content.ui.facts.guests, value: String(siteConfig.capacity.guests) },
    { label: content.ui.facts.bedrooms, value: String(siteConfig.capacity.bedrooms) },
    {
      label: content.ui.facts.kitchen,
      value: siteConfig.amenities.kitchen ? "✓" : "TODO_DATA",
    },
    {
      label: content.ui.facts.pool,
      value: siteConfig.amenities.pool.available ? "✓" : "TODO_DATA",
    },
    {
      label: content.ui.facts.poolUse,
      value: String(siteConfig.amenities.pool.privateOrShared),
    },
    { label: content.ui.facts.parking, value: String(siteConfig.amenities.parking) },
  ];

  return (
    <>
      <SeoHead
        lang={lang}
        routeKey="home"
        title={h.seo.title}
        description={h.seo.description}
        path={path("home")}
      />
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={siteConfig.images.heroLcp}
          // @ts-expect-error fetchpriority on link is valid for LCP
          fetchpriority="high"
        />
      </Helmet>
      <LodgingJsonLd />
      <BreadcrumbJsonLd items={[{ name: content.ui.breadcrumbHome, path: path("home") }]} />
      <FaqJsonLd items={content.faq} />

      {/* HERO */}
      <SectionShell className="pt-10 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-gray-900">
              {renderText(h.hero.h1)}
            </h1>
            <Paragraphs items={h.hero.paragraphs} />
            <div className="flex flex-wrap gap-3 pt-2">
              <CtaLink href={bookingHref()} external>
                {content.ui.cta.bookAirbnb}
              </CtaLink>
              <CtaLink to={path("finca")} variant="secondary">
                {h.hero.ctaSecondary}
              </CtaLink>
            </div>
            <p className="pt-4 text-sm md:text-base text-gray-600 tracking-wide">
              {attrs.map((a, i) => (
                <span key={i}>
                  {i > 0 ? " · " : null}
                  {a.startsWith("TODO_") ? <TodoMark>{a}</TodoMark> : a}
                </span>
              ))}
            </p>
          </div>
          <HeroGallery />
        </div>
      </SectionShell>

      {/* ALOJAMIENTO */}
      <SectionShell id="alojamiento" className="bg-[#f7f7f4]">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {renderText(h.accommodation.h2)}
            </h2>
            <Paragraphs items={h.accommodation.paragraphs} />
            <CtaLink to={path("alojamiento")}>{h.accommodation.cta}</CtaLink>
          </div>
          <SmartImage
            src={siteConfig.images.heroLcp}
            alt=""
            className="w-full rounded-3xl object-cover aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practicalFacts.map((fact) => {
            if (isTodo(fact.value) || String(fact.value).startsWith("TODO_")) {
              return null;
            }
            return (
            <li
              key={fact.label}
              className="rounded-2xl border border-[#556B2F]/15 bg-white p-4"
            >
              <p className="text-xs uppercase tracking-wider text-[#556B2F]">
                {fact.label}
              </p>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {fact.value}
              </p>
            </li>
            );
          })}
        </ul>
      </SectionShell>

      {/* FINCA */}
      <SectionShell id="cal-masses">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SmartImage
            src={siteConfig.images.vineyard}
            alt=""
            className="w-full rounded-3xl object-cover aspect-[4/3] order-2 lg:order-1"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {renderText(h.finca.h2)}
            </h2>
            <Paragraphs items={h.finca.paragraphs} />
            <CtaLink to={path("finca")}>{h.finca.cta}</CtaLink>
          </div>
        </div>
      </SectionShell>

      {/* PISCINA — confirmed available */}
      {siteConfig.amenities.pool.available && (
        <SectionShell id="exteriores" className="bg-[#f7f7f4]">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {renderText(h.pool.h2)}
              </h2>
              <Paragraphs items={h.pool.paragraphs} />
              <ul className="space-y-2 text-sm text-gray-700">
                {!isTodo(siteConfig.amenities.pool.privateOrShared) && (
                  <li>Uso: {String(siteConfig.amenities.pool.privateOrShared)}</li>
                )}
                {!isTodo(siteConfig.amenities.pool.season) && (
                  <li>Temporada: {String(siteConfig.amenities.pool.season)}</li>
                )}
                {!isTodo(siteConfig.amenities.pool.hours) && (
                  <li>Horarios: {String(siteConfig.amenities.pool.hours)}</li>
                )}
                {!isTodo(siteConfig.amenities.pool.rules) && (
                  <li>Normas: {String(siteConfig.amenities.pool.rules)}</li>
                )}
              </ul>
            </div>
            <SmartImage
              src={siteConfig.images.poolCandidate}
              alt=""
              className="w-full rounded-3xl object-cover aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </SectionShell>
      )}

      {/* ENTORNO */}
      <SectionShell id="entorno">
        <div className="space-y-6 max-w-3xl mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {renderText(h.surroundings.h2)}
          </h2>
          <Paragraphs items={h.surroundings.paragraphs} />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {h.surroundings.cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-3xl border border-[#556B2F]/15 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
              <div className="mt-3 flex-1 text-sm md:text-base text-gray-700 leading-relaxed">
                {renderText(card.text)}
              </div>
              <div className="mt-6">
                <CtaLink to={path(card.route)} variant="secondary" className="!px-4 !py-2 text-sm">
                  {card.cta}
                </CtaLink>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      {/* SISU — secondary */}
      <SectionShell id="sisu" className="bg-[#f7f7f4]">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {renderText(h.sisu.h2)}
            </h2>
            <Paragraphs items={h.sisu.paragraphs} />
            <CtaLink to={path("sisu")}>{h.sisu.cta}</CtaLink>
          </div>
          <SmartImage
            src={siteConfig.images.wine}
            alt=""
            className="w-full rounded-3xl object-cover aspect-[4/3]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </SectionShell>

      <ReviewsSection title={h.reviews.h2} emptyLabel={content.ui.reviewsEmpty} />

      {/* UBICACIÓN */}
      <SectionShell id="ubicacion">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {renderText(h.location.h2)}
            </h2>
            <Paragraphs items={h.location.paragraphs} />
            <ul className="space-y-2 text-sm text-gray-700">
              {!isTodo(siteConfig.distances.montserrat) && (
                <li>Montserrat: {String(siteConfig.distances.montserrat)}</li>
              )}
              {!isTodo(siteConfig.distances.manresa) && (
                <li>Manresa: {String(siteConfig.distances.manresa)}</li>
              )}
              {!isTodo(siteConfig.distances.barcelona) && (
                <li>Barcelona: {String(siteConfig.distances.barcelona)}</li>
              )}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[#556B2F]/20 shadow-md min-h-[280px]">
            <ConsentMap />
          </div>
        </div>
      </SectionShell>

      <FaqAccordion title={content.ui.faqTitle} items={content.faq} />

      {/* CTA FINAL */}
      <SectionShell className="bg-[#556B2F] text-white">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {renderText(h.finalCta.h2)}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-white/90 leading-relaxed">
            {h.finalCta.paragraphs.map((p, i) => (
              <p key={i}>{renderText(p)}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaLink
              href={bookingHref()}
              external
              className="!bg-white !text-[#556B2F] hover:!bg-gray-100"
            >
              {content.ui.cta.bookAirbnb}
            </CtaLink>
            <CtaLink
              to={path("contacto")}
              variant="secondary"
              className="!border-white !text-white hover:!bg-white/10"
            >
              {h.finalCta.ctaSecondary}
            </CtaLink>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
