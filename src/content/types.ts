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
    guide: {
      tocTitle: string;
      keepDiscovering: string;
      fromCalMasses: string;
    };
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
      loungers: string;
      shade: string;
      distance: string;
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
  hero: {
    paragraphs: string[];
    ctaSecondary: string;
  };
  essentialsAria: string;
  gallery: {
    seeAll: string;
    close: string;
  };
  intro: {
    h2: string;
    paragraphs: string[];
  };
  bedroom: {
    h2: string;
    paragraphs: string[];
  };
  living: {
    h2: string;
    paragraphs: string[];
    equipmentTitle: string;
  };
  bathroom: {
    h2: string;
    paragraphs: string[];
  };
  exterior: {
    h2: string;
    paragraphs: string[];
  };
  privacy: {
    h2: string;
    paragraphs: string[];
    h3: string;
    privateLabel: string;
    sharedLabel: string;
    areaLabels: {
      lodging: string;
      pool: string;
      terrace: string;
      garden: string;
      parking: string;
    };
    knowFinca: string;
  };
  services: {
    h2: string;
    categories: {
      kitchen: string;
      comfort: string;
      exterior: string;
      practical: string;
      bedroomBath: string;
    };
    items: {
      entirePlace: string;
      kitchen: string;
      wifi: string;
      airConditioning: string;
      heating: string;
      pool: string;
      parking: string;
      jacuzzi: string;
      selfCheckIn: string;
      washer: string;
      dryer: string;
      linens: string;
      towels: string;
      hairDryer: string;
    };
  };
  arrival: {
    h2: string;
    paragraphs: string[];
    checkIn: string;
    checkOut: string;
    selfCheckInTitle: string;
    selfCheckInBody: string;
    parkingTitle: string;
  };
  fit: {
    h2: string;
    yesTitle: string;
    yesItems: string[];
    noTitle: string;
    noItems: string[];
  };
  reviews: {
    h2: string;
  };
  faq: {
    h2: string;
    items: FaqItem[];
  };
  related: Array<{ label: string; route: RouteKey }>;
  finalCta: {
    h2: string;
    paragraphs: string[];
    primary: string;
    secondary: string;
  };
  /** Short essential-fact labels (icon row). */
  essentialLabels: {
    entirePlace: string;
    guests: string;
    bedrooms: string;
    beds: string;
    bathrooms: string;
    kitchen: string;
    pool: string;
    wifi: string;
  };
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
