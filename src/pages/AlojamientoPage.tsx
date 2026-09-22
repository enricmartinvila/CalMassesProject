import { bookingHref, isTodo, siteConfig } from "../config/siteConfig";
import { useLang } from "../hooks/useLang";
import { SeoHead } from "../components/seo/SeoHead";
import { BreadcrumbJsonLd } from "../components/seo/JsonLd";
import { CtaLink } from "../components/ui/CtaLink";
import { Paragraphs, renderText } from "../components/ui/TodoMark";
import { SmartImage } from "../components/ui/SmartImage";
import { ImageGallery } from "../components/home/ImageGallery";
import { ServiceFacts, PoolFactsList } from "../components/home/QuickFacts";
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
      <BreadcrumbJsonLd
        items={[
          { name: content.ui.breadcrumbHome, path: path("home") },
          { name: t.seo.h1, path: path("alojamiento") },
        ]}
      />

      <article>
        <header className="mx-auto max-w-6xl px-4 pt-10 pb-8 sm:px-6 lg:px-8">
          <div className="max-w-[46rem] space-y-5">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
              {renderText(t.seo.h1)}
            </h1>
            <Paragraphs items={t.intro} />
          </div>
        </header>

        <SmartImage
          src={siteConfig.images.interior}
          alt={
            lang === "en"
              ? "Cal Masses accommodation"
              : "Alojamiento de Cal Masses"
          }
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full rounded-2xl object-cover aspect-[21/9]"
          sizes="100vw"
          srcSet="/images/hero-interior-800.webp 800w, /images/hero-interior-1600.webp 1600w"
        />

        <ImageGallery categories={["alojamiento", "exterior", "piscina"]} />

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SmartImage
              src={siteConfig.images.bedroom}
              alt={
                lang === "en" ? "Cal Masses bedroom" : "Dormitorio de Cal Masses"
              }
              className="w-full rounded-2xl object-cover aspect-[4/3]"
            />
            <div className="max-w-[46rem] space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                {renderText(t.bedroom.h2)}
              </h2>
              <Paragraphs items={t.bedroom.paragraphs} />
              {!isTodo(siteConfig.capacity.beds) && (
                <p className="text-sm text-gray-700">
                  {content.ui.facts.beds}: {String(siteConfig.capacity.beds)}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f7f4] py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="max-w-[46rem] space-y-4 order-2 lg:order-1">
              <h2 className="text-2xl font-semibold text-gray-900">
                {renderText(t.living.h2)}
              </h2>
              <Paragraphs items={t.living.paragraphs} />
            </div>
            <div className="grid grid-cols-2 gap-3 order-1 lg:order-2">
              <SmartImage
                src={siteConfig.images.living}
                alt={lang === "en" ? "Living room" : "Sala"}
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
              <SmartImage
                src={siteConfig.images.kitchen}
                alt={lang === "en" ? "Kitchen" : "Cocina"}
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SmartImage
              src={siteConfig.images.bathroom}
              alt={lang === "en" ? "Bathroom" : "Baño de Cal Masses"}
              className="w-full rounded-2xl object-cover aspect-[4/3]"
            />
            <div className="max-w-[46rem] space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                {renderText(t.bathroom.h2)}
              </h2>
              <Paragraphs items={t.bathroom.paragraphs} />
              {siteConfig.amenities.jacuzzi === true && (
                <p className="text-sm text-gray-700">
                  {content.ui.facts.jacuzzi}: ✓
                </p>
              )}
            </div>
          </div>
        </section>

        {showPool && (
          <section className="bg-[#f7f7f4] py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="max-w-[46rem] space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  {renderText(t.exterior.h2)}
                </h2>
                <Paragraphs items={t.exterior.paragraphs} />
                <PoolFactsList />
              </div>
              <SmartImage
                src={siteConfig.images.pool}
                alt={lang === "en" ? "Pool" : "Piscina de Cal Masses"}
                className="w-full rounded-2xl object-cover aspect-[4/3]"
              />
            </div>
          </section>
        )}

        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {renderText(t.services.h2)}
          </h2>
          <ServiceFacts />
        </section>

        <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {renderText(t.rules.h2)}
          </h2>
          <Paragraphs items={t.rules.paragraphs} />
        </section>

        <section className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            {renderText(t.checkTimes.h2)}
          </h2>
          <ul className="space-y-2 text-gray-700">
            {!isTodo(siteConfig.checkIn) && (
              <li>
                {content.ui.facts.checkIn}: {String(siteConfig.checkIn)}
              </li>
            )}
            {!isTodo(siteConfig.checkOut) && (
              <li>
                {content.ui.facts.checkOut}: {String(siteConfig.checkOut)}
              </li>
            )}
            {!isTodo(siteConfig.cancellationPolicy) && (
              <li>{String(siteConfig.cancellationPolicy)}</li>
            )}
          </ul>
        </section>

        <FaqSection title={content.ui.faqTitle} items={content.faq} />

        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <CtaLink href={bookingHref()} external>
              {t.cta.primary}
            </CtaLink>
            <CtaLink to={path("contacto")} variant="secondary">
              {t.cta.secondary}
            </CtaLink>
          </div>
        </section>
      </article>
    </>
  );
}
