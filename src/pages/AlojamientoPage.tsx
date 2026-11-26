import { siteConfig } from "../config/siteConfig";
import { useLang } from "../hooks/useLang";
import { SeoHead } from "../components/seo/SeoHead";
import { FaqJsonLd, LodgingJsonLd } from "../components/seo/JsonLd";
import { useEssentialFacts } from "../components/alojamiento/EssentialFacts";
import {
  useBathroomFacts,
  useBedroomFacts,
  useServiceCategories,
} from "../components/alojamiento/ServicesAndFacts";
import { useArrivalSpecs, usePrivacyRows } from "../components/alojamiento/PrivacyArrivalFit";
import { usePoolFacts } from "../components/home/QuickFacts";
import { GuideBlocks } from "../components/guide/GuideBlocks";
import {
  BookActions,
  Btn,
  Chips,
  Cta,
  Faq,
  Groups,
  Hero,
  Page,
  Pills,
  Reviews,
  Sec,
  Specs,
  Split,
  Stats,
  YesNo,
} from "../components/cm/Blocks";
import { Gallery } from "../components/cm/Gallery";

const img = siteConfig.images;
const GALLERY = [
  img.exterior,
  img.bedroom,
  img.living,
  img.kitchen,
  img.interior,
  img.bathroom,
  img.pool,
  img.poolAlt,
  img.terrace,
];

export function AlojamientoPage() {
  const { lang, content, path } = useLang();
  const t = content.alojamiento;
  const e = t.eyebrows;
  const showPool =
    siteConfig.amenities.pool.available && siteConfig.amenities.pool.confirmedForGuests === true;

  const stats = useEssentialFacts();
  const bedroom = useBedroomFacts();
  const bathroom = useBathroomFacts();
  const pool = usePoolFacts().map((f) => f.value);
  const services = useServiceCategories();
  const privacy = usePrivacyRows();
  const arrival = useArrivalSpecs();

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

      <Page>
        <Hero
          crumbs={[
            { label: content.ui.breadcrumbHome, route: "home" },
            { label: t.seo.h1 },
          ]}
          h1={t.seo.h1}
          intro={t.hero.paragraphs}
          image={img.exterior}
          actions={<BookActions tone="hero" secondary={{ label: t.hero.ctaSecondary, href: "#espacios" }} />}
        />
        <Stats items={stats} />

        <section className="cm-sec cm-gallery-sec rv" aria-label={t.gallery.seeAll}>
          <div className="cm-wrap">
            <Gallery images={GALLERY} />
          </div>
        </section>

        <Sec id="espacios" h2={t.intro.h2} intro={t.intro.paragraphs} />

        <Split eyebrow={e.bedroom} h2={t.bedroom.h2} paragraphs={t.bedroom.paragraphs} images={[img.bedroom]}>
          <Chips items={bedroom} />
        </Split>

        <Split flip eyebrow={e.living} h2={t.living.h2} paragraphs={t.living.paragraphs} images={[img.kitchen, img.living]} />

        <Split eyebrow={e.bathroom} h2={t.bathroom.h2} paragraphs={t.bathroom.paragraphs} images={[img.bathroom]}>
          <Chips items={bathroom} />
        </Split>

        {showPool ? (
          <Split flip eyebrow={e.exterior} h2={t.exterior.h2} paragraphs={t.exterior.paragraphs} images={[img.pool, img.poolAlt]}>
            <Chips items={pool} />
          </Split>
        ) : null}

        <Sec soft eyebrow={e.privacy} h2={t.privacy.h2} intro={t.privacy.paragraphs}>
          <Specs items={privacy} />
          <div className="cm-actions">
            <Btn to={path("finca")}>{t.privacy.knowFinca}</Btn>
          </div>
        </Sec>

        {services.length ? (
          <Sec eyebrow={e.services} h2={t.services.h2}>
            <Groups items={services} />
          </Sec>
        ) : null}

        <Sec soft eyebrow={e.arrival} h2={t.arrival.h2} intro={t.arrival.paragraphs}>
          <Specs items={arrival} />
        </Sec>

        <Sec h2={t.fit.h2}>
          <YesNo kind="yes" title={t.fit.yesTitle} items={t.fit.yesItems} />
          <YesNo kind="no" title={t.fit.noTitle} items={t.fit.noItems} />
          <Pills title={e.explore} items={t.related.map((l) => ({ label: l.label, to: path(l.route) }))} />
        </Sec>

        <GuideBlocks page="alojamiento" />

        <Reviews h2={t.reviews.h2} />

        <Sec h2={t.faq.h2}>
          <Faq items={t.faq.items} />
        </Sec>

        <Cta
          h2={t.finalCta.h2}
          paragraphs={t.finalCta.paragraphs}
          primaryLabel={t.finalCta.primary}
          secondary={{ label: t.finalCta.secondary, to: path("contacto") }}
        />
      </Page>
    </>
  );
}
