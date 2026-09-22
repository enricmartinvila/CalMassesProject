/**
 * Single source of truth for lodging facts.
 * Unknown values stay as TODO markers — never invent data.
 */

export const TODO_DATA = "TODO_DATA" as const;
export const TODO_DATA_BOOKING_URL = "TODO_DATA_BOOKING_URL" as const;
export const TODO_LEGAL_CONTENT = "TODO_LEGAL_CONTENT" as const;

export type Lang = "es" | "ca" | "en";

export const SUPPORTED_LANGS: Lang[] = ["es", "ca", "en"];
export const DEFAULT_LANG: Lang = "es";

export const siteConfig = {
  brandName: "Cal Masses",
  wineBrandName: "SISU",

  /** Domain used for canonical / OG / sitemap. Confirm production domain. */
  siteUrl: "https://calmasses.com",

  /** Official lodging category (e.g. turisme rural / apartament). */
  lodgingCategory: TODO_DATA,

  /** Official tourism registration number. */
  registrationNumber: TODO_DATA,

  address: {
    line: "Raval del Sellarès, Cal Masses, s/n",
    postalCode: "08253",
    locality: "Sant Salvador de Guardiola",
    region: "Bages",
    country: "ES",
    countryName: "España",
  },

  geo: {
    lat: 41.6778129,
    lng: 1.7557529,
  },

  contact: {
    name: "Alba · Cal Masses",
    phoneE164: "+34690332521",
    phoneDisplay: "+34 690 332 521",
    email: "calmasses@gmail.com",
    whatsappUrl:
      "https://wa.me/34690332521?text=Hola%20Alba,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Cal%20Masses",
  },

  capacity: {
    guests: 2,
    bedrooms: 1,
    beds: "1 cama de matrimonio y 1 sofá cama",
    bathrooms: "1 (con jacuzzi)",
  },

  amenities: {
    kitchen: true,
    nature: true,
    pool: {
      available: true,
      confirmedForGuests: true,
      privateOrShared: "compartida",
      season: "verano",
      hours: "sin horario fijo",
      rules: "sentido común",
      type: "exterior",
    },
    jacuzzi: true,
    parking: "Sí",
    wifi: "Sí",
    /** A/C and/or heating — unconfirmed; third-party listings mention A/C. */
    climateControl: TODO_DATA,
    petsAllowed: TODO_DATA,
    childrenAllowed: true,
  },

  checkIn: "16:00",
  checkOut: "11:00",
  cancellationPolicy: TODO_DATA,

  /** Driving estimates via OSRM from Cal Masses coordinates. */
  distances: {
    montserrat: "aprox. 20 km / 40 min en coche",
    manresa: "aprox. 11 km / 20 min en coche",
    barcelona: "aprox. 65 km / 1 h 10 min en coche",
  },

  landingStatus: {
    piscina: "published" as const,
  },

  booking: {
    /** Primary booking engine (Airbnb). Booking.com URL not stably resolved. */
    url: "https://www.airbnb.es/rooms/896856836379489751",
    airbnb: "https://www.airbnb.es/rooms/896856836379489751",
    bookingCom: TODO_DATA,
  },

  social: {
    instagram: "https://www.instagram.com/calmasses/",
  },

  reviews: {
    rating: TODO_DATA,
    reviewCount: TODO_DATA,
    reviewSource: TODO_DATA,
    reviewDate: TODO_DATA,
  },

  /**
   * Confirmed attribute chips for the hero line.
   * Only include facts confirmed in editorial brief / this config.
   */
  confirmedHeroAttributes: {
    es: ["2 huéspedes", "1 dormitorio", "piscina", "cocina", "Wi-Fi", "naturaleza"],
    ca: ["2 hostes", "1 dormitori", "piscina", "cuina", "Wi-Fi", "natura"],
    en: ["2 guests", "1 bedroom", "pool", "kitchen", "Wi-Fi", "nature"],
  },

  images: {
    logo: "/fotosTargetes/fotosCaseta/logo.webp",
    favicon: "/favicon-32.png",
    ogDefault: "/images/og-calmasses.jpg",
    heroLcp: "/images/hero-interior-1600.webp",
    heroGallery: [
      "/images/hero-interior-1600.webp",
      "/fotosTargetes/fotosCaseta/dinsnousoda.webp",
      "/fotosTargetes/fotosCaseta/foravermut.webp",
      "/images/exterior-1600.webp",
      "/fotosTargetes/fotosCaseta/SliderHab1.jpg",
      "/images/hero-vinyes-1600.webp",
    ],
    exterior: "/images/exterior-1600.webp",
    vineyard: "/images/hero-vinyes-1600.webp",
    poolCandidate: "/fotosTargetes/fotosExterior/SliderExterior6.jpg",
    wine: "/images/sisu-1600.webp",
    wineAlt: "/fotosVino/fotoplano.webp",
    interior: "/images/hero-interior-1600.webp",
    bedroom: "/fotosTargetes/fotosCaseta/SliderHab1.jpg",
    /** No approved Montserrat photo in the project. */
    montserrat: "TODO_IMAGE_MONTSERRAT",
  },

  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2979.978258593224!2d1.7557528760743542!3d41.67781297126447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDQwJzQwLjEiTiAxwrA0NSczMC4wIkU!5e0!3m2!1ses!2ses!4v1713543105295!5m2!1ses!2ses",
} as const;

export type SiteConfig = typeof siteConfig;

export function absoluteUrl(path = "/"): string {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function isTodo(value: unknown): boolean {
  return (
    typeof value === "string" &&
    (value === TODO_DATA ||
      value === TODO_DATA_BOOKING_URL ||
      value === TODO_LEGAL_CONTENT ||
      value.startsWith("TODO_"))
  );
}

export function bookingHref(): string {
  const url = siteConfig.booking.url;
  if (isTodo(url)) return "#reservar";
  return url as string;
}
