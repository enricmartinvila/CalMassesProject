import { bookingHref, siteConfig } from "../../../config/siteConfig";
import { useLang } from "../../../hooks/useLang";
import type { LandingDefinition } from "../../../content/landings/types";
import { SeoHead } from "../../seo/SeoHead";
import { CtaLink } from "../../ui/CtaLink";
import { SmartImage } from "../../ui/SmartImage";
import { EditorialHero } from "../EditorialHero";
import {
  EditorialSection,
  FullWidthImage,
  ImageTextSplit,
  NumberedList,
} from "../EditorialBlocks";
import {
  DistanceFromCalMasses,
  EnvironmentCTA,
  PageTOC,
  RelatedDestinations,
} from "../GuideChrome";

export function ManresaGuide({ landing }: { landing: LandingDefinition }) {
  const { lang, path, content } = useLang();
  const bookLabel = content.ui.cta.availability;
  const [near, base, forTwo, combine] = landing.sections;

  const toc = [
    { id: "cerca", label: near.h2 },
    { id: "base", label: base.h2 },
    { id: "dos", label: forTwo.h2 },
    { id: "combinar", label: combine.h2 },
  ];

  const numbered =
    combine.cards?.map((c) => ({
      title: c.title,
      text: c.text,
      href: path(c.route),
      cta: c.cta,
    })) ?? [];

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
          variant="split"
          eyebrow={content.ui.nav.entornoManresa}
          h1={landing.hero.h1}
          intro={landing.hero.intro}
          image={siteConfig.images.vineyard}
          breadcrumb={landing.breadcrumb}
          softCta={
            landing.hero.ctaSecondary ? (
              <CtaLink to={path("alojamiento")} variant="ghost" className="!px-0">
                {landing.hero.ctaSecondary.label}
              </CtaLink>
            ) : null
          }
        />

        <PageTOC items={toc} />

        <EditorialSection
          id="cerca"
          h2={near.h2}
          paragraphs={near.paragraphs}
          spacing="loose"
        >
          <DistanceFromCalMasses
            destination="manresa"
            destinationLabel={content.ui.nav.entornoManresa}
          />
        </EditorialSection>

        {/* Campo side of the city↔campo contrast — Cal Masses landscape, not claimed as Manresa */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2">
            <SmartImage
              src={siteConfig.images.exterior}
              alt=""
              className="aspect-[4/5] w-full rounded-sm object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <SmartImage
              src={siteConfig.images.garden}
              alt=""
              className="aspect-[4/5] w-full rounded-sm object-cover hidden sm:block"
              sizes="50vw"
            />
          </div>
        </div>

        <ImageTextSplit
          id="base"
          h2={base.h2}
          paragraphs={base.paragraphs}
          image={siteConfig.images.placeta}
          imageSide="left"
          aspect="4/3"
          spacing="default"
        />

        <EditorialSection id="dos" h2={forTwo.h2} paragraphs={forTwo.paragraphs}>
          <div className="mt-6">
            <CtaLink to={path("alojamiento")} variant="secondary">
              {content.ui.cta.seeAccommodation}
            </CtaLink>
          </div>
        </EditorialSection>

        <FullWidthImage src={siteConfig.images.exterior} />

        <EditorialSection
          id="combinar"
          h2={combine.h2}
          paragraphs={combine.paragraphs}
          spacing="loose"
        >
          <NumberedList items={numbered} />
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
