import { isTodo, siteConfig } from "../../config/siteConfig";
import { useLang } from "../../hooks/useLang";
import { isDraftRoute } from "../../i18n/routes";
import type { LandingDefinition } from "../../content/landings/types";
import { SeoHead } from "../seo/SeoHead";
import { LandingHero } from "./LandingHero";
import { FeatureGrid, PoolFacts } from "./FeatureGrid";
import {
  DestinationCards,
  InternalLinkCards,
  RelatedPages,
} from "./DestinationCards";
import { BookingCTA } from "./BookingCTA";
import { Breadcrumbs } from "./Breadcrumbs";
import { CtaLink } from "../ui/CtaLink";
import { Paragraphs, renderText } from "../ui/TodoMark";
import { SmartImage } from "../ui/SmartImage";

export function LandingPage({ landing }: { landing: LandingDefinition }) {
  const { lang, path } = useLang();
  const draft = landing.status === "draft" || isDraftRoute(landing.routeKey);

  return (
    <>
      <SeoHead
        lang={lang}
        routeKey={landing.routeKey}
        title={landing.seo.title}
        description={landing.seo.description}
        path={path(landing.routeKey)}
        noIndex={draft}
      />

      <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
        {draft && import.meta.env.DEV && (
          <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-sm text-amber-900">
            DRAFT
          </p>
        )}

        <Breadcrumbs items={landing.breadcrumb} />

        <LandingHero
          eyebrow={landing.hero.eyebrow}
          h1={landing.hero.h1}
          intro={landing.hero.intro}
          image={landing.hero.image}
          primary={{
            label: landing.hero.ctaPrimary.label,
            to: path(landing.hero.ctaPrimary.route),
          }}
          secondary={
            landing.hero.ctaSecondary
              ? {
                  label: landing.hero.ctaSecondary.label,
                  to: path(landing.hero.ctaSecondary.route),
                }
              : undefined
          }
        />

        {landing.sections.map((section, idx) => (
          <section key={`${section.h2}-${idx}`} className="space-y-6">
            <div
              className={`grid gap-8 ${
                section.image && !isTodo(section.image)
                  ? "lg:grid-cols-2 lg:items-start"
                  : ""
              }`}
            >
              <div className="max-w-[46rem] space-y-5">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                  {renderText(section.h2)}
                </h2>
                {section.paragraphs && <Paragraphs items={section.paragraphs} />}

                {section.h3Blocks?.map((block) => (
                  <div key={block.h3} className="space-y-3 pt-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {renderText(block.h3)}
                    </h3>
                    <Paragraphs items={block.paragraphs} />
                  </div>
                ))}

                {section.showFeatureGrid && <FeatureGrid />}
                {section.showPoolFacts && <PoolFacts />}

                {section.showDistanceKey &&
                  !isTodo(siteConfig.distances[section.showDistanceKey]) && (
                    <p className="text-sm text-gray-700">
                      {String(siteConfig.distances[section.showDistanceKey])}
                    </p>
                  )}

                {section.showWineriesTodo && (
                  <p className="font-mono text-xs text-gray-400" hidden>
                    TODO_CONTENT_WINERIES
                  </p>
                )}

                {section.cta && (
                  <CtaLink to={path(section.cta.route)} variant="secondary">
                    {section.cta.label}
                  </CtaLink>
                )}
              </div>

              {section.image && !isTodo(section.image) && (
                <SmartImage
                  src={section.image}
                  alt=""
                  className="w-full rounded-3xl object-cover aspect-[4/3]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              )}
            </div>

            {section.cards && section.cards.length > 0 && (
              <DestinationCards cards={section.cards} />
            )}
          </section>
        ))}

        <BookingCTA
          h2={landing.finalCta.h2}
          paragraphs={landing.finalCta.paragraphs}
          primary={{
            label: landing.finalCta.primary.label,
            to: path(landing.finalCta.primary.route),
          }}
          secondary={
            landing.finalCta.secondary
              ? {
                  label: landing.finalCta.secondary.label,
                  to: path(landing.finalCta.secondary.route),
                }
              : undefined
          }
        />

        <RelatedPages links={landing.related} />
        <InternalLinkCards links={landing.internalLinks} />
      </article>
    </>
  );
}
