import { bookingHref, siteConfig } from "../../../config/siteConfig";
import { useLang } from "../../../hooks/useLang";
import type { LandingDefinition } from "../../../content/landings/types";
import { SeoHead } from "../../seo/SeoHead";
import { CtaLink } from "../../ui/CtaLink";
import { EditorialHero } from "../EditorialHero";
import {
  EditorialSection,
  FullWidthImage,
  ImageTextSplit,
} from "../EditorialBlocks";
import {
  EnvironmentCTA,
  PageTOC,
  RelatedDestinations,
} from "../GuideChrome";

export function EnoturismoGuide({ landing }: { landing: LandingDefinition }) {
  const { lang, path, content } = useLang();
  const bookLabel = content.ui.cta.availability;
  const [territory, sleepVine, sisu, bodegas, notTourist, stayWine] =
    landing.sections;

  const toc = [
    { id: "territorio", label: territory.h2 },
    { id: "vina", label: sleepVine.h2 },
    { id: "sisu", label: sisu.h2 },
    { id: "bodegas", label: bodegas.h2 },
    { id: "estancia", label: stayWine.h2 },
  ];

  const related = landing.related.map((l) => ({
    title: l.label,
    to: path(l.route),
  }));

  return (
    <>
      <SeoHead
        lang={lang}
        routeKey={landing.routeKey}
        title={landing.seo.title}
        description={landing.seo.description}
        path={path(landing.routeKey)}
      />

      <article>
        <EditorialHero
          variant="vineyard"
          eyebrow={content.ui.nav.entornoEnoturismo}
          h1={landing.hero.h1}
          intro={landing.hero.intro}
          image={siteConfig.images.vineyard}
          breadcrumb={landing.breadcrumb}
          softCta={
            landing.hero.ctaSecondary ? (
              <CtaLink to={path("sisu")} variant="ghost" className="!px-0">
                {landing.hero.ctaSecondary.label}
              </CtaLink>
            ) : null
          }
        />

        <PageTOC items={toc} />

        <EditorialSection
          id="territorio"
          h2={territory.h2}
          paragraphs={territory.paragraphs}
          spacing="loose"
        />

        <FullWidthImage src={siteConfig.images.vineyard} />

        <ImageTextSplit
          id="vina"
          h2={sleepVine.h2}
          paragraphs={sleepVine.paragraphs}
          image={siteConfig.images.garden}
          imageSide="right"
          aspect="16/10"
          spacing="default"
        />

        <ImageTextSplit
          id="sisu"
          h2={sisu.h2}
          paragraphs={sisu.paragraphs}
          image={siteConfig.images.wine}
          imageSide="left"
          aspect="4/5"
          spacing="loose"
        >
          {sisu.cta ? (
            <CtaLink to={path(sisu.cta.route)} variant="secondary">
              {sisu.cta.label}
            </CtaLink>
          ) : null}
        </ImageTextSplit>

        <EditorialSection
          id="bodegas"
          h2={bodegas.h2}
          paragraphs={bodegas.paragraphs}
          spacing="default"
        />

        <EditorialSection
          h2={notTourist.h2}
          paragraphs={notTourist.paragraphs}
          spacing="tight"
        />

        <FullWidthImage src={siteConfig.images.wineAlt} />

        <EditorialSection
          id="estancia"
          h2={stayWine.h2}
          paragraphs={stayWine.paragraphs}
          spacing="loose"
        >
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaLink to={path("alojamiento")} variant="secondary">
              {content.ui.cta.seeAccommodation}
            </CtaLink>
            <CtaLink to={path("sisu")} variant="ghost" className="!px-0">
              {content.ui.cta.knowSisu}
            </CtaLink>
          </div>
        </EditorialSection>

        <RelatedDestinations items={related} />

        <EnvironmentCTA
          h2={landing.finalCta.h2}
          paragraphs={landing.finalCta.paragraphs}
          primary={
            <CtaLink
              href={bookingHref()}
              external
              className="!bg-white !text-[#556B2F] hover:!bg-gray-100"
            >
              {bookLabel}
            </CtaLink>
          }
        />
      </article>
    </>
  );
}
