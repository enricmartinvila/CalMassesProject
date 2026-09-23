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
  EnvironmentCTA,
  PageTOC,
  RelatedDestinations,
} from "../GuideChrome";

export function BagesGuide({ landing }: { landing: LandingDefinition }) {
  const { lang, path, content } = useLang();
  const bookLabel = content.ui.cta.availability;
  const [sleep, forTwo, between, wine] = landing.sections;

  const toc = [
    { id: "dormir", label: sleep.h2 },
    { id: "dos", label: forTwo.h2 },
    { id: "entre", label: between.h2 },
    { id: "vino", label: wine.h2 },
  ];

  const ways = [
    { title: sleep.h2, text: sleep.paragraphs?.[0] ?? "" },
    { title: forTwo.h2, text: forTwo.paragraphs?.[0] ?? "" },
    { title: between.h2, text: between.paragraphs?.[0] ?? "" },
    { title: wine.h2, text: wine.paragraphs?.[0] ?? "" },
  ].filter((w) => w.text);

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
          eyebrow={content.ui.cta.discoverBages}
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

        <EditorialSection spacing="loose">
          <NumberedList items={ways} />
        </EditorialSection>

        <FullWidthImage src={siteConfig.images.exterior} />

        <ImageTextSplit
          id="dormir"
          h2={sleep.h2}
          paragraphs={sleep.paragraphs}
          image={sleep.image}
          imageSide="right"
          aspect="16/10"
          spacing="default"
        />

        <EditorialSection
          id="dos"
          h2={forTwo.h2}
          paragraphs={forTwo.paragraphs}
          spacing="tight"
        >
          <div className="mt-6">
            <CtaLink to={path("alojamiento")} variant="secondary">
              {content.ui.cta.seeAccommodation}
            </CtaLink>
          </div>
        </EditorialSection>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 md:grid-cols-3">
            <SmartImage
              src={siteConfig.images.garden}
              alt=""
              className="aspect-[4/5] w-full rounded-sm object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <SmartImage
              src={siteConfig.images.placeta}
              alt=""
              className="aspect-[4/5] w-full rounded-sm object-cover hidden md:block"
              sizes="33vw"
            />
            <SmartImage
              src={siteConfig.images.exterior}
              alt=""
              className="aspect-[4/5] w-full rounded-sm object-cover hidden md:block"
              sizes="33vw"
            />
          </div>
        </div>

        <EditorialSection
          id="entre"
          h2={between.h2}
          paragraphs={between.paragraphs}
          spacing="loose"
        />

        <ImageTextSplit
          id="vino"
          h2={wine.h2}
          paragraphs={wine.paragraphs}
          image={wine.image}
          imageSide="left"
          aspect="4/5"
          spacing="default"
        >
          {wine.cta ? (
            <CtaLink to={path(wine.cta.route)} variant="secondary">
              {wine.cta.label}
            </CtaLink>
          ) : null}
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
          secondary={
            landing.finalCta.secondary ? (
              <CtaLink
                to={path(landing.finalCta.secondary.route)}
                variant="secondary"
                className="!bg-transparent !border-2 !border-white !text-white hover:!bg-white/15"
              >
                {landing.finalCta.secondary.label}
              </CtaLink>
            ) : null
          }
        />
      </article>
    </>
  );
}
