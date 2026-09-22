import { bookingHref, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { SeoHead } from "../seo/SeoHead";
import { BreadcrumbJsonLd, FaqJsonLd, LodgingJsonLd } from "../seo/JsonLd";
import { CtaLink } from "../ui/CtaLink";
import { Paragraphs, renderText } from "../ui/TodoMark";
import { SmartImage } from "../ui/SmartImage";
import { QuickFacts, ServiceFacts, PoolFactsList } from "./QuickFacts";
import { ReviewsSection } from "./ReviewsSection";
import { ImageGallery } from "./ImageGallery";
import { FaqSection } from "./FaqSection";

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
    <section id={id} className={`px-4 py-16 md:py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function HomePage() {
  const { lang, content, path } = useLang();
  const h = content.home;
  const attrs = siteConfig.confirmedHeroAttributes[lang];
  const showPool =
    siteConfig.amenities.pool.available &&
    siteConfig.amenities.pool.confirmedForGuests === true;

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

      {/* 1. HERO */}
      <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-end">
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-32 sm:px-6 lg:px-8 md:pb-20">
          <div className="max-w-[40rem] space-y-6 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-[1.15] tracking-tight">
              {renderText(h.hero.h1)}
            </h1>
            <div className="space-y-4 text-base md:text-lg text-white/90 leading-relaxed">
              {h.hero.paragraphs.map((p, i) => (
                <p key={i}>{renderText(p)}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <CtaLink
                href={bookingHref()}
                external
                className="!bg-white !text-[#556B2F] hover:!bg-gray-100"
              >
                {content.ui.cta.availability}
              </CtaLink>
              <CtaLink
                to={path("alojamiento")}
                variant="secondary"
                className="!bg-transparent !border-2 !border-white !text-white hover:!bg-white/15"
              >
                {content.ui.cta.seeAccommodation}
              </CtaLink>
            </div>
            <p className="pt-4 text-sm text-white/80 tracking-wide">
              {attrs.join(" · ")}
            </p>
          </div>
        </div>
      </section>

      {/* 2. DATOS RÁPIDOS */}
      <SectionShell className="!py-10 md:!py-12 border-b border-gray-100">
        <QuickFacts />
      </SectionShell>

      {/* 3. ALOJAMIENTO */}
      <SectionShell id="alojamiento">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div className="grid grid-cols-2 gap-3">
            <SmartImage
              src={siteConfig.images.bedroom}
              alt={lang === "en" ? "Cal Masses bedroom" : "Dormitorio de Cal Masses"}
              className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <SmartImage
              src={siteConfig.images.living}
              alt={lang === "en" ? "Cal Masses living room" : "Sala de Cal Masses"}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <SmartImage
              src={siteConfig.images.kitchen}
              alt={lang === "en" ? "Cal Masses kitchen" : "Cocina de Cal Masses"}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="space-y-6 max-w-[46rem]">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {renderText(h.accommodation.h2)}
            </h2>
            <Paragraphs items={h.accommodation.paragraphs} />
            <ServiceFacts />
            <CtaLink to={path("alojamiento")} variant="secondary">
              {h.accommodation.cta}
            </CtaLink>
          </div>
        </div>
      </SectionShell>

      {/* 4. REVIEWS */}
      <ReviewsSection title={h.reviews.h2} />

      {/* 5. CAL MASSES / FINCA */}
      <SectionShell id="cal-masses" className="bg-[#f7f7f4]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-start">
          <div className="space-y-6 max-w-[46rem] order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {renderText(h.finca.h2)}
            </h2>
            <Paragraphs items={h.finca.paragraphs} />
            <h3 className="text-xl font-semibold text-gray-900 pt-2">
              {renderText(h.finca.h3)}
            </h3>
            <Paragraphs items={h.finca.h3Paragraphs} />
            <CtaLink to={path("finca")} variant="secondary">
              {h.finca.cta}
            </CtaLink>
          </div>
          <div className="grid grid-cols-2 gap-3 order-1 lg:order-2">
            <SmartImage
              src={siteConfig.images.vineyard}
              alt={lang === "en" ? "Cal Masses vineyard" : "Viñedo de Cal Masses"}
              className="col-span-2 aspect-[16/10] w-full rounded-2xl object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <SmartImage
              src={siteConfig.images.garden}
              alt={lang === "en" ? "Cal Masses garden" : "Huerto de Cal Masses"}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <SmartImage
              src={siteConfig.images.placeta}
              alt={lang === "en" ? "Cal Masses courtyard" : "Placeta de Cal Masses"}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </SectionShell>

      {/* 6. PISCINA */}
      {showPool && (
        <SectionShell id="exteriores">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 lg:items-center">
            <div className="space-y-6 max-w-[46rem]">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {renderText(h.pool.h2)}
              </h2>
              <Paragraphs items={h.pool.paragraphs} />
              <PoolFactsList />
            </div>
            <SmartImage
              src={siteConfig.images.pool}
              alt={lang === "en" ? "Cal Masses pool" : "Piscina de Cal Masses"}
              className="w-full rounded-2xl object-cover aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </SectionShell>
      )}

      {/* 7. ENTORNO */}
      <SectionShell id="entorno" className="bg-[#f7f7f4]">
        <div className="max-w-[46rem] space-y-5 mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {renderText(h.surroundings.h2)}
          </h2>
          <Paragraphs items={h.surroundings.paragraphs} />
        </div>
        <ul className="grid gap-8 md:grid-cols-3">
          {h.surroundings.cards.map((card) => (
            <li key={card.title} className="border-t border-[#556B2F]/30 pt-5">
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-3 text-sm md:text-base text-gray-700 leading-relaxed">
                {card.text}
              </p>
              <CtaLink
                to={path(card.route)}
                variant="ghost"
                className="!px-0 mt-4"
              >
                {card.cta}
              </CtaLink>
            </li>
          ))}
        </ul>
      </SectionShell>

      {/* 8. SISU */}
      <SectionShell id="sisu">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:items-center">
          <div className="space-y-6 max-w-[40rem]">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {renderText(h.sisu.h2)}
            </h2>
            <Paragraphs items={h.sisu.paragraphs} />
            <CtaLink to={path("sisu")} variant="secondary">
              {h.sisu.cta}
            </CtaLink>
          </div>
          <SmartImage
            src={siteConfig.images.wine}
            alt="SISU"
            className="w-full rounded-2xl object-cover aspect-[4/5] max-h-[28rem] mx-auto"
            sizes="(max-width: 1024px) 80vw, 35vw"
          />
        </div>
      </SectionShell>

      {/* 9. GALERÍA */}
      <ImageGallery title={content.ui.galleryTitle} className="bg-[#f7f7f4]" />

      {/* 10. FAQ */}
      <FaqSection title={content.ui.faqTitle} items={content.faq} />

      {/* 11. CTA FINAL */}
      <SectionShell className="bg-[#556B2F] text-white !py-16 md:!py-20">
        <div className="max-w-[40rem] space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {renderText(h.finalCta.h2)}
          </h2>
          <Paragraphs items={h.finalCta.paragraphs} className="text-white/90" />
          <div className="flex flex-wrap gap-3">
            <CtaLink
              href={bookingHref()}
              external
              className="!bg-white !text-[#556B2F] hover:!bg-gray-100"
            >
              {content.ui.cta.availability}
            </CtaLink>
            <CtaLink
              to={path("contacto")}
              variant="secondary"
              className="!bg-transparent !border-2 !border-white !text-white hover:!bg-white/15"
            >
              {content.ui.cta.contact}
            </CtaLink>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
