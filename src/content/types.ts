import type { Lang } from "../config/siteConfig";
import type { RouteKey } from "../i18n/routes";

export type PageSeo = {
  title: string;
  description: string;
  h1: string;
};

export type UiCopy = {
  nav: {
    home: string;
    alojamiento: string;
    finca: string;
    sisu: string;
    contacto: string;
    reservar: string;
    entorno: string;
    entornoBages: string;
    entornoMontserrat: string;
    entornoManresa: string;
    entornoEnoturismo: string;
  };
  cta: {
    availability: string;
    contact: string;
    seeAccommodation: string;
    seeAccommodationFull: string;
    knowCalMasses: string;
    knowSisu: string;
    discoverMontserrat: string;
    discoverManresa: string;
    discoverBages: string;
    seeMoreReviews: string;
  };
  cookie: {
    message: string;
    accept: string;
    reject: string;
    settings: string;
  };
  footer: {
    brandTitle: string;
    stayTitle: string;
    entornoTitle: string;
    legal: string;
    privacy: string;
    cookies: string;
    paraDos: string;
    piscina: string;
    laFinca: string;
  };
  notFound: {
    title: string;
    body: string;
    back: string;
  };
  todo: {
    content: string;
    data: string;
  };
  reviewsEmpty: string;
  faqTitle: string;
  galleryTitle: string;
  galleryTabs: {
    all: string;
    alojamiento: string;
    exterior: string;
    piscina: string;
    finca: string;
    sisu: string;
  };
  locationMapConsent: string;
  loadMap: string;
  breadcrumbHome: string;
  facts: {
    guests: string;
    bedrooms: string;
    beds: string;
    bathrooms: string;
    kitchen: string;
    pool: string;
    poolUse: string;
    parking: string;
    wifi: string;
    climate: string;
    location: string;
    checkIn: string;
    checkOut: string;
    pets: string;
    children: string;
    jacuzzi: string;
  };
  poolLabels: {
    use: string;
    season: string;
    hours: string;
    rules: string;
    type: string;
  };
};

export type HomeContent = {
  seo: PageSeo;
  hero: {
    h1: string;
    paragraphs: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  accommodation: {
    h2: string;
    paragraphs: string[];
    cta: string;
  };
  finca: {
    h2: string;
    paragraphs: string[];
    h3: string;
    h3Paragraphs: string[];
    cta: string;
  };
  pool: {
    h2: string;
    paragraphs: string[];
  };
  surroundings: {
    h2: string;
    paragraphs: string[];
    cards: Array<{
      title: string;
      text: string;
      cta: string;
      route: RouteKey;
    }>;
  };
  sisu: {
    h2: string;
    paragraphs: string[];
    cta: string;
  };
  reviews: {
    h2: string;
  };
  finalCta: {
    h2: string;
    paragraphs: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
};

export type AlojamientoPageContent = {
  seo: PageSeo;
  intro: string[];
  bedroom: { h2: string; paragraphs: string[] };
  living: { h2: string; paragraphs: string[] };
  bathroom: { h2: string; paragraphs: string[] };
  exterior: { h2: string; paragraphs: string[] };
  services: { h2: string };
  rules: { h2: string; paragraphs: string[] };
  checkTimes: { h2: string };
  cta: { primary: string; secondary: string };
};

export type SimplePageContent = {
  seo: PageSeo;
  intro: string[];
  sections: Array<{
    h2: string;
    paragraphs: string[];
  }>;
  cta?: {
    primary: string;
    primaryRoute?: RouteKey;
    secondary?: string;
    secondaryRoute?: RouteKey;
  };
};

export type FaqItem = { question: string; answer: string };

export type ContentBundle = {
  ui: UiCopy;
  home: HomeContent;
  alojamiento: AlojamientoPageContent;
  finca: SimplePageContent;
  sisu: SimplePageContent & {
    existingWine?: {
      title: string;
      paragraphs: string[];
      footer: string;
    };
  };
  contacto: {
    seo: PageSeo;
    intro: string;
    arrival: string;
    saveContact: string;
    copyEmail: string;
    copied: string;
  };
  reservar: {
    seo: PageSeo;
    intro: string;
  };
  legal: {
    aviso: { seo: PageSeo; body: string };
    privacidad: { seo: PageSeo; body: string };
    cookies: { seo: PageSeo; body: string };
  };
  faq: FaqItem[];
};

export type ContentByLang = Record<Lang, ContentBundle>;
