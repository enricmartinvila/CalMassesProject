/**
 * Single source of truth for lodging facts.
 * Unknown values stay as TODO markers — never invent data.
 */

export const TODO_DATA = "TODO_DATA" as const;
export const TODO_DATA_BOOKING_URL = "TODO_DATA_BOOKING_URL" as const;
export const TODO_LEGAL_CONTENT = "TODO_LEGAL_CONTENT" as const;
export const TODO_CONTENT_REVIEWS = "TODO_CONTENT_REVIEWS" as const;
export const TODO_IMAGE = "TODO_IMAGE" as const;

export type Lang = "es" | "ca" | "en";

export const SUPPORTED_LANGS: Lang[] = ["es", "ca", "en"];
export const DEFAULT_LANG: Lang = "es";

export type GalleryCategoryId =
  | "alojamiento"
  | "exterior"
  | "piscina"
  | "finca"
  | "sisu";

export type GalleryImage = {
  src: string;
  alt: { es: string; ca: string; en: string };
  category: GalleryCategoryId;
};

export const siteConfig = {
  brandName: "Cal Masses",
  wineBrandName: "SISU",

  siteUrl: "https://calmasses.com",

  lodgingCategory: TODO_DATA,
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
    beds: "1 cama",
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
      type: "exterior de agua salada",
    },
    jacuzzi: true,
    parking: "Sí, gratis in situ",
    wifi: "Sí",
    climateControl: "Aire acondicionado y calefacción",
    petsAllowed: false,
    childrenAllowed: true,
  },

  checkIn: "16:00",
  checkOut: "11:00",
  cancellationPolicy: "Según la política de Airbnb al reservar",

  distances: {
    montserrat: "aprox. 20 km / 40 min en coche",
    manresa: "aprox. 11 km / 20 min en coche",
    barcelona: "aprox. 65 km / 1 h 10 min en coche",
  },

  landingStatus: {
    piscina: "published" as const,
  },

  booking: {
    url: "https://www.airbnb.es/rooms/896856836379489751",
    airbnb: "https://www.airbnb.es/rooms/896856836379489751",
    bookingCom:
      "https://www.booking.com/hotel/es/cal-masses-st-salvador-de-guardiola.es.html",
  },

  social: {
    instagram: "https://www.instagram.com/calmasses/",
  },

  reviews: {
    sources: [
      {
        rating: "4,97",
        scale: "5",
        count: "86",
        source: "Airbnb",
        url: "https://www.airbnb.es/rooms/896856836379489751/reviews",
      },
      {
        rating: "9,9",
        scale: "10",
        count: TODO_DATA,
        source: "Booking.com",
        url: "https://www.booking.com/hotel/es/cal-masses-st-salvador-de-guardiola.es.html",
      },
    ],
    /** Approved guest quotes — none provided yet. */
    items: TODO_CONTENT_REVIEWS as typeof TODO_CONTENT_REVIEWS,
  },

  confirmedHeroAttributes: {
    es: ["2 huéspedes", "1 dormitorio", "piscina", "cocina", "naturaleza"],
    ca: ["2 hostes", "1 dormitori", "piscina", "cuina", "natura"],
    en: ["2 guests", "1 bedroom", "pool", "kitchen", "nature"],
  },

  images: {
    logo: "/images/logo-400.webp",
    favicon: "/favicon-32.png",
    ogDefault: "/images/og-calmasses.jpg",
    /** Exterior LCP for home hero — SmartImage derives 400/800/1600 srcset. */
    heroLcp: "/images/exterior-1600.webp",
    exterior: "/images/exterior-1600.webp",
    vineyard: "/images/hero-vinyes-1600.webp",
    pool: "/images/pool-1600.webp",
    poolAlt: "/images/pool-2-1600.webp",
    wine: "/images/sisu-1600.webp",
    wineAlt: "/images/sisu-alt-1600.webp",
    interior: "/images/hero-interior-1600.webp",
    bedroom: "/images/bedroom-1600.webp",
    bedroomAlt: "/images/bedroom-2-1600.webp",
    living: "/images/interior-soda-1600.webp",
    kitchen: "/images/kitchen-1600.webp",
    bathroom: "/images/bathroom-1600.webp",
    terrace: "/images/exterior-vermut-1600.webp",
    garden: "/images/garden-1600.webp",
    bbq: "/images/bbq-1600.webp",
    placeta: "/images/placeta-1600.webp",
    montserrat: "TODO_IMAGE_MONTSERRAT",
  },

  gallery: [
    {
      src: "/images/exterior-1600.webp",
      alt: {
        es: "Exterior de Cal Masses",
        ca: "Exterior de Cal Masses",
        en: "Cal Masses exterior",
      },
      category: "exterior" as const,
    },
    {
      src: "/images/exterior-1-1600.webp",
      alt: {
        es: "Paisaje alrededor de Cal Masses",
        ca: "Paisatge al voltant de Cal Masses",
        en: "Landscape around Cal Masses",
      },
      category: "exterior" as const,
    },
    {
      src: "/images/exterior-3-1600.webp",
      alt: {
        es: "Vista exterior de la finca",
        ca: "Vista exterior de la finca",
        en: "Exterior view of the farm",
      },
      category: "exterior" as const,
    },
    {
      src: "/images/exterior-vermut-1600.webp",
      alt: {
        es: "Terraza de Cal Masses",
        ca: "Terrassa de Cal Masses",
        en: "Cal Masses terrace",
      },
      category: "exterior" as const,
    },
    {
      src: "/images/pool-1600.webp",
      alt: {
        es: "Piscina de Cal Masses",
        ca: "Piscina de Cal Masses",
        en: "Cal Masses pool",
      },
      category: "piscina" as const,
    },
    {
      src: "/images/pool-2-1600.webp",
      alt: {
        es: "Zona de piscina y exterior",
        ca: "Zona de piscina i exterior",
        en: "Pool and outdoor area",
      },
      category: "piscina" as const,
    },
    {
      src: "/images/bbq-1600.webp",
      alt: {
        es: "Zona de barbacoa",
        ca: "Zona de barbacoa",
        en: "Barbecue area",
      },
      category: "exterior" as const,
    },
    {
      src: "/images/hero-vinyes-1600.webp",
      alt: {
        es: "Viñedo de Cal Masses",
        ca: "Vinya de Cal Masses",
        en: "Cal Masses vineyard",
      },
      category: "finca" as const,
    },
    {
      src: "/images/garden-1600.webp",
      alt: {
        es: "Huerto de Cal Masses",
        ca: "Hort de Cal Masses",
        en: "Cal Masses kitchen garden",
      },
      category: "finca" as const,
    },
    {
      src: "/images/garden-2-1600.webp",
      alt: {
        es: "Cultivo en la finca",
        ca: "Conreu a la finca",
        en: "Crops on the farm",
      },
      category: "finca" as const,
    },
    {
      src: "/images/placeta-1600.webp",
      alt: {
        es: "Placeta de Cal Masses",
        ca: "Placeta de Cal Masses",
        en: "Cal Masses courtyard",
      },
      category: "finca" as const,
    },
    {
      src: "/images/bedroom-1600.webp",
      alt: {
        es: "Dormitorio de Cal Masses",
        ca: "Dormitori de Cal Masses",
        en: "Cal Masses bedroom",
      },
      category: "alojamiento" as const,
    },
    {
      src: "/images/bedroom-2-1600.webp",
      alt: {
        es: "Dormitorio de Cal Masses",
        ca: "Dormitori de Cal Masses",
        en: "Cal Masses bedroom",
      },
      category: "alojamiento" as const,
    },
    {
      src: "/images/hero-interior-1600.webp",
      alt: {
        es: "Interior del alojamiento",
        ca: "Interior de l'allotjament",
        en: "Accommodation interior",
      },
      category: "alojamiento" as const,
    },
    {
      src: "/images/interior-soda-1600.webp",
      alt: {
        es: "Sala de Cal Masses",
        ca: "Sala de Cal Masses",
        en: "Cal Masses living room",
      },
      category: "alojamiento" as const,
    },
    {
      src: "/images/kitchen-1600.webp",
      alt: {
        es: "Cocina de Cal Masses",
        ca: "Cuina de Cal Masses",
        en: "Cal Masses kitchen",
      },
      category: "alojamiento" as const,
    },
    {
      src: "/images/bathroom-1600.webp",
      alt: {
        es: "Baño de Cal Masses",
        ca: "Bany de Cal Masses",
        en: "Cal Masses bathroom",
      },
      category: "alojamiento" as const,
    },
    {
      src: "/images/sisu-1600.webp",
      alt: {
        es: "SISU, vino de Cal Masses",
        ca: "SISU, vi de Cal Masses",
        en: "SISU, Cal Masses wine",
      },
      category: "sisu" as const,
    },
    {
      src: "/images/sisu-alt-1600.webp",
      alt: {
        es: "Botella de SISU",
        ca: "Ampolla de SISU",
        en: "SISU bottle",
      },
      category: "sisu" as const,
    },
  ] satisfies GalleryImage[],

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
      value === TODO_CONTENT_REVIEWS ||
      value === TODO_IMAGE ||
      value.startsWith("TODO_"))
  );
}

export function bookingHref(): string {
  const url = siteConfig.booking.url;
  if (isTodo(url)) return "#reservar";
  return url as string;
}
