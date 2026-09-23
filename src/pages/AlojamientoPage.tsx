import { bookingHref, siteConfig } from "../config/siteConfig";
import { useLang } from "../hooks/useLang";
import { SeoHead } from "../components/seo/SeoHead";
import { Breadcrumbs } from "../components/landing/Breadcrumbs";
import { FaqJsonLd, LodgingJsonLd } from "../components/seo/JsonLd";
import { CtaLink } from "../components/ui/CtaLink";
import { Paragraphs, renderText } from "../components/ui/TodoMark";
import { SmartImage } from "../components/ui/SmartImage";
import { EssentialFacts } from "../components/alojamiento/EssentialFacts";
import { FeaturedGallery } from "../components/alojamiento/FeaturedGallery";
import {
  BathroomFacts,
  BedroomFacts,
  KitchenEquipmentList,
  ServicesGrid,
} from "../components/alojamiento/ServicesAndFacts";
import {
  ArrivalSection,
  FitSection,
  PrivacySection,
} from "../components/alojamiento/PrivacyArrivalFit";
import { PoolFactsList } from "../components/home/QuickFacts";
import { ReviewsSection } from "../components/home/ReviewsSection";
import { FaqSection } from "../components/home/FaqSection";

export function AlojamientoPage() {
  const { lang, content, path } = useLang();
  const t = content.alojamiento;
  const showPool =
    siteConfig.amenities.pool.available &&
    siteConfig.amenities.pool.confirmedForGuests === true;

  return (
    <>
      <SeoHead
        lang={lang}
        routeKey="alojamiento"
        title={t.seo.title}
        description={t.seo.description}
        path={path("alojamiento")}
      />
      <LodgingJsonLd />
      <FaqJsonLd items={t.faq.items} />

      <article>
        {/* 1. HERO */}
        <header className="mx-auto max-w-6xl px-4 pt-8 pb-10 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: content.ui.breadcrumbHome, route: "home" },
              { label: t.seo.h1, route: "alojamiento" },
            ]}
          />

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
            <div className="max-w-[40rem] space-y-5">
              <h1 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
                {renderText(t.seo.h1)}
              </h1>
              <Paragraphs items={t.hero.paragraphs} />
              <div className="flex flex-wrap gap-3 pt-1">
                <CtaLink href={bookingHref()} external>
                  {content.ui.cta.availability}
                </CtaLink>
                <CtaLink href="#espacios" variant="secondary">
                  {t.hero.ctaSecondary}
                </CtaLink>
              </div>
            </div>

            <SmartImage
              src={siteConfig.images.exterior}
              alt={
                lang === "en"
                  ? "Cal Masses accommodation exterior"
                  : "Exterior del alojamiento de Cal Masses"
              }
              className="w-full rounded-2xl object-cover aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
              width={1600}
              height={1200}
            />
          </div>
        </header>

        {/* 2. DATOS ESENCIALES */}
        <section className="border-y border-gray-100 bg-[#f7f7f4]">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 md:py-10">
            <EssentialFacts />
          </div>
        </section>

        {/* 3. GALERÍA */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16 sm:px-6 lg:px-8">
          <FeaturedGallery />
        </section>

        {/* 4. INTRODUCCIÓN */}
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="max-w-[46rem] space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {renderText(t.intro.h2)}
            </h2>
            <Paragraphs items={t.intro.paragraphs} />
          </div>
        </section>

        {/* 5. DORMITORIO */}
        <section className="bg-[#f7f7f4] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <SmartImage
              src={siteConfig.images.bedroom}
              alt={
                lang === "en" ? "Cal Masses bedroom" : "Dormitorio de Cal Masses"
              }
              className="w-full rounded-2xl object-cover aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="max-w-[46rem] space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {renderText(t.bedroom.h2)}
              </h2>
              <Paragraphs items={t.bedroom.paragraphs} />
              <BedroomFacts />
            </div>
          </div>
        </section>

        {/* 6. COCINA Y ZONA DE ESTAR */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="max-w-[46rem] space-y-4 order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {renderText(t.living.h2)}
              </h2>
              <Paragraphs items={t.living.paragraphs} />
              <KitchenEquipmentList />
            </div>
            <div className="grid grid-cols-2 gap-3 order-1 lg:order-2">
              <SmartImage
                src={siteConfig.images.living}
                alt={lang === "en" ? "Living room" : "Sala de Cal Masses"}
                className="aspect-[4/3] w-full rounded-2xl object-cover col-span-2"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <SmartImage
                src={siteConfig.images.kitchen}
                alt={lang === "en" ? "Kitchen" : "Cocina de Cal Masses"}
                className="aspect-[4/3] w-full rounded-2xl object-cover col-span-2 sm:col-span-1"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
              <SmartImage
                src={siteConfig.images.interior}
                alt={
                  lang === "en"
                    ? "Accommodation interior"
                    : "Interior del alojamiento"
                }
                className="aspect-[4/3] w-full rounded-2xl object-cover hidden sm:block"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </section>

        {/* 7. BAÑO */}
        <section className="bg-[#f7f7f4] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <SmartImage
              src={siteConfig.images.bathroom}
              alt={lang === "en" ? "Bathroom" : "Baño de Cal Masses"}
              className="w-full rounded-2xl object-cover aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="max-w-[46rem] space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {renderText(t.bathroom.h2)}
              </h2>
              <Paragraphs items={t.bathroom.paragraphs} />
              <BathroomFacts />
            </div>
          </div>
        </section>

        {/* 8. PISCINA Y EXTERIORES */}
        {showPool ? (
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
              <SmartImage
                src={siteConfig.images.pool}
                alt={lang === "en" ? "Cal Masses pool" : "Piscina de Cal Masses"}
                className="w-full rounded-2xl object-cover aspect-[21/9] min-h-[14rem]"
                sizes="100vw"
              />
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="max-w-[46rem] space-y-4">
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                    {renderText(t.exterior.h2)}
                  </h2>
                  <Paragraphs items={t.exterior.paragraphs} />
                </div>
                <div>
                  <PoolFactsList />
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <SmartImage
                      src={siteConfig.images.terrace}
                      alt={lang === "en" ? "Terrace" : "Terraza"}
                      className="aspect-[4/3] w-full rounded-2xl object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <SmartImage
                      src={siteConfig.images.poolAlt}
                      alt={
                        lang === "en" ? "Outdoor area" : "Zona exterior"
                      }
                      className="aspect-[4/3] w-full rounded-2xl object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* 9. PRIVACIDAD */}
        <PrivacySection />

        {/* 10. SERVICIOS */}
        <section className="bg-[#f7f7f4] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 max-w-[46rem]">
              {renderText(t.services.h2)}
            </h2>
            <ServicesGrid />
          </div>
        </section>

        {/* 11. LLEGADA */}
        <ArrivalSection />

        {/* 12. ¿ES PARA TI? */}
        <FitSection />

        {/* 13. OPINIONES */}
        <ReviewsSection title={t.reviews.h2} />

        {/* 14. FAQ */}
        <FaqSection title={t.faq.h2} items={t.faq.items} />

        {/* 15. CTA FINAL */}
        <section className="bg-[#556B2F] text-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-[40rem] space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {renderText(t.finalCta.h2)}
              </h2>
              <Paragraphs
                items={t.finalCta.paragraphs}
                className="text-white/90"
              />
              <div className="flex flex-wrap gap-3">
                <CtaLink
                  href={bookingHref()}
                  external
                  className="!bg-white !text-[#556B2F] hover:!bg-gray-100"
                >
                  {t.finalCta.primary}
                </CtaLink>
                <CtaLink
                  to={path("contacto")}
                  variant="secondary"
                  className="!bg-transparent !border-2 !border-white !text-white hover:!bg-white/15"
                >
                  {t.finalCta.secondary}
                </CtaLink>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
