import type { Lang } from "../config/siteConfig";
import type { RouteKey } from "./routes";

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
    discoverCalMasses: string;
    seeAccommodation: string;
    knowCalMasses: string;
    knowSisu: string;
    discoverMontserrat: string;
    discoverManresa: string;
    discoverBages: string;
  };
  booking: {
    checkIn: string;
    checkOut: string;
    guests: string;
    submit: string;
    note: string;
  };
  cookie: {
    message: string;
    accept: string;
    reject: string;
    settings: string;
  };
  footer: {
    legal: string;
    privacy: string;
    cookies: string;
    discoverTitle: string;
    discoverBages: string;
    discoverManresa: string;
    discoverMontserrat: string;
    discoverParaDos: string;
    discoverEnoturismo: string;
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
  locationMapConsent: string;
  loadMap: string;
  breadcrumbHome: string;
  facts: {
    guests: string;
    bedrooms: string;
    kitchen: string;
    pool: string;
    poolUse: string;
    parking: string;
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
  location: {
    h2: string;
    paragraphs: string[];
  };
  finalCta: {
    h2: string;
    paragraphs: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
};

export type SimplePageContent = {
  seo: PageSeo;
  intro: string[];
  sections: Array<{
    h2: string;
    paragraphs: string[];
  }>;
  cta?: { primary: string; primaryRoute?: RouteKey; secondary?: string; secondaryRoute?: RouteKey };
};

export type FaqItem = { question: string; answer: string };

export type ContentBundle = {
  ui: UiCopy;
  home: HomeContent;
  alojamiento: SimplePageContent;
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
