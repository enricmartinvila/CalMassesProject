import { Helmet } from "react-helmet-async";
import { absoluteUrl, isTodo, siteConfig } from "../../config/siteConfig";
import type { RouteKey } from "../../i18n/routes";
import { useLang } from "../../hooks/useLang";

type Crumb = { name: string; path?: string };

export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path
        ? { item: absoluteUrl(item.path) }
        : {}),
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

/** LodgingBusiness with only confirmed fields from siteConfig. */
export function LodgingJsonLd() {
  const { path, content, lang } = useLang();
  const a = siteConfig.amenities;
  const amenity = (name: string) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  });
  const features: string[] = [];
  if (a.kitchen) features.push(lang === "en" ? "Kitchen" : "Cocina");
  if (a.wifi === true) features.push("Wi-Fi");
  if (a.airConditioning === true) features.push(lang === "en" ? "Air conditioning" : "Aire acondicionado");
  if (a.heating === true) features.push(lang === "en" ? "Heating" : "Calefacción");
  if (a.jacuzzi === true) features.push(lang === "en" ? "Hot tub" : "Jacuzzi");
  if (a.pool.available) features.push(lang === "en" ? "Outdoor saltwater pool (shared, summer)" : "Piscina exterior de agua salada (compartida, verano)");
  if (a.parking.available) features.push(lang === "en" ? "Free on-site parking" : "Parking gratuito");

  const lodging: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${siteConfig.siteUrl}/#lodging`,
    name: siteConfig.brandName,
    description: content.home.seo.description,
    url: absoluteUrl(path("home")),
    telephone: siteConfig.contact.phoneE164,
    email: siteConfig.contact.email,
    image: [
      siteConfig.images.heroLcp,
      siteConfig.images.bedroom,
      siteConfig.images.jacuzzi,
      siteConfig.images.pool,
      siteConfig.images.exterior,
    ].map((src) => absoluteUrl(src)),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line,
      postalCode: siteConfig.address.postalCode,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    },
    hasMap: `https://www.google.com/maps?q=${siteConfig.geo.lat},${siteConfig.geo.lng}`,
    numberOfRooms: siteConfig.capacity.bedrooms,
    checkinTime: siteConfig.checkIn,
    checkoutTime: siteConfig.checkOut,
    petsAllowed: siteConfig.amenities.petsAllowed,
    amenityFeature: features.map(amenity),
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.booking.airbnb,
      siteConfig.booking.bookingCom,
    ],
  };

  if (!isTodo(siteConfig.lodgingCategory)) {
    lodging.additionalType = siteConfig.lodgingCategory;
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(lodging)}</script>
    </Helmet>
  );
}

export function FaqJsonLd({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  const answered = items.filter(
    (i) => !isTodo(i.answer) && !i.answer.startsWith("TODO_"),
  );
  if (!answered.length) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: answered.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function useBreadcrumbs(
  trail: Array<{ name: string; route?: RouteKey }>,
) {
  const { path, content } = useLang();
  return [
    { name: content.ui.breadcrumbHome, path: path("home") },
    ...trail.map((t) => ({
      name: t.name,
      path: t.route ? path(t.route) : undefined,
    })),
  ];
}
