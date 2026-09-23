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
  NumberedList,
} from "../EditorialBlocks";
import {
  DistanceFromCalMasses,
  EnvironmentCTA,
  PageTOC,
  RelatedDestinations,
} from "../GuideChrome";

export function MontserratGuide({ landing }: { landing: LandingDefinition }) {
  const { lang, path, content } = useLang();
  const bookLabel = content.ui.cta.availability;
  const [day, honesty, more, forTwo] = landing.sections;

  const toc = [
    { id: "dia", label: day.h2 },
    { id: "ubicacion", label: honesty.h2 },
    { id: "combinar", label: more.h2 },
    { id: "alojamiento", label: forTwo.h2 },
  ];

  const numbered =
    more.cards?.map((c) => ({
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
          variant="panoramic"
          eyebrow={content.ui.nav.entornoMontserrat}
          h1={landing.hero.h1}
          intro={landing.hero.intro}
          image={landing.hero.image}
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

        <ImageTextSplit
          id="dia"
          h2={day.h2}
          paragraphs={day.paragraphs}
          image={day.image}
          imageSide="right"
          aspect="16/10"
          spacing="loose"
        >
          <CtaLink to={path("alojamiento")} variant="secondary">
            {content.ui.cta.seeAccommodation}
          </CtaLink>
        </ImageTextSplit>

        <FullWidthImage src={siteConfig.images.vineyard} />

        <EditorialSection
          id="ubicacion"
          h2={honesty.h2}
          paragraphs={honesty.paragraphs}
          spacing="default"
        >
          {honesty.showDistanceKey ? (
            <DistanceFromCalMasses
              destination={honesty.showDistanceKey}
              destinationLabel={content.ui.nav.entornoMontserrat}
            />
          ) : null}
        </EditorialSection>

        <EditorialSection
          id="combinar"
          h2={more.h2}
          paragraphs={more.paragraphs}
          spacing="loose"
        >
          <NumberedList items={numbered} />
        </EditorialSection>

        <FullWidthImage src={siteConfig.images.exterior} />

        <ImageTextSplit
          id="alojamiento"
          h2={forTwo.h2}
          paragraphs={forTwo.paragraphs}
          image={siteConfig.images.interior}
          imageSide="left"
          aspect="4/5"
          spacing="default"
        >
          <CtaLink to={path("alojamiento")} variant="secondary">
            {content.ui.cta.seeAccommodation}
          </CtaLink>
        </ImageTextSplit>

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
