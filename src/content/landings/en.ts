import { siteConfig } from "../../config/siteConfig";
import type { LandingsBundle } from "./types";

/**
 * English landing copy — faithful translation of the Spanish editorial brief.
 */
export const landingsEn: LandingsBundle = {
  bages: {
    routeKey: "landingBages",
    status: "published",
    seo: {
      title: "Rural accommodation in the Bages | Cal Masses",
      description:
        "Cal Masses is a rural accommodation for two in Sant Salvador de Guardiola, surrounded by countryside, vineyard and nature in the heart of the Bages.",
      h1: "Rural accommodation in the Bages, between countryside and vineyards",
    },
    breadcrumb: [
      { label: "Home", route: "home" },
      { label: "Rural accommodation in the Bages" },
    ],
    hero: {
      h1: "Rural accommodation in the Bages, between countryside and vineyards",
      intro: [
        "The Bages is a region to explore without too much hurry.",
        "Montserrat, Manresa, small villages, vineyards, paths and wineries share a territory where it is still easy to move quickly from city to countryside.",
        "Cal Masses is in Sant Salvador de Guardiola, in a rural setting surrounded by woodland, fields and vineyard. It is an accommodation designed for two people who want to spend a few days in the Bages and have a quiet place to return to after discovering the region.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Book on Airbnb", route: "reservar" },
      ctaSecondary: { label: "See the accommodation", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Sleep in the countryside to discover the Bages",
        paragraphs: [
          "Staying at Cal Masses lets you get to know the Bages from within the landscape itself.",
          "We are not in a tourist hub or a housing development. The accommodation is part of a farm where the countryside, the vineyard and the seasons still set much of the pace.",
          "From here you can spend the day visiting some of the region's best-known places, or simply stay nearby and enjoy the surroundings.",
          "Montserrat and Manresa are two obvious landmarks, but the Bages is much more than these two destinations.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "An accommodation designed for two",
        paragraphs: [
          "Cal Masses is a small accommodation.",
          "It is designed for two people, and that is part of how it works.",
          "It is not a large rural house for groups, nor a tourist complex. It is a space to spend a few days with autonomy, cook, rest and use the farm as a starting point to explore the region.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "Between Montserrat, Manresa and the Pla de Bages",
        paragraphs: [
          "Cal Masses's location lets you combine different kinds of plans during the same stay.",
          "You can visit Montserrat, head into Manresa, discover a DO Pla de Bages winery, or drive and walk between vineyards and small rural villages.",
          "And you can also decide not to do too much.",
          "An important part of staying in the countryside is precisely not having to fill every day with activities.",
        ],
      },
      {
        h2: "Wine and landscape",
        paragraphs: [
          "The vineyard is part of Cal Masses.",
          "We grow our own vineyard and make small amounts of wine under the name SISU.",
          "We do not aim to turn every stay into an organised wine experience. Wine simply forms part of the farm and of the landscape around the accommodation.",
          "For those who want to go further, the Pla de Bages offers wineries, routes and wine tourism experiences across the region.",
        ],
        cta: {
          label: "Discover wine tourism in the Pla de Bages",
          route: "landingEnoturismo",
        },
        image: siteConfig.images.wine,
      },
    ],
    finalCta: {
      h2: "Feel like discovering the Bages from here?",
      paragraphs: [
        "Book on Airbnb and discover Cal Masses as a starting point for a few days in the region.",
      ],
      primary: { label: "Book on Airbnb", route: "reservar" },
      secondary: { label: "See the accommodation", route: "alojamiento" },
    },
    related: [
      { label: "Near Manresa", route: "landingManresa" },
      { label: "Near Montserrat", route: "landingMontserrat" },
      { label: "For two", route: "landingParaDos" },
      { label: "Wine tourism", route: "landingEnoturismo" },
    ],
    internalLinks: [
      { label: "See the accommodation", route: "alojamiento" },
      { label: "Rural accommodation near Manresa", route: "landingManresa" },
      { label: "Accommodation near Montserrat", route: "landingMontserrat" },
      { label: "Rural accommodation for two", route: "landingParaDos" },
      { label: "Rural accommodation with pool", route: "landingPiscina" },
      { label: "Wine tourism in the Pla de Bages", route: "landingEnoturismo" },
      { label: "Book on Airbnb", route: "reservar" },
    ],
  },

  manresa: {
    routeKey: "landingManresa",
    status: "published",
    seo: {
      title: "Rural accommodation near Manresa | Cal Masses",
      description:
        "A rural accommodation for two near Manresa, surrounded by nature, countryside and vineyards. Discover Cal Masses in Sant Salvador de Guardiola.",
      h1: "Rural accommodation near Manresa",
    },
    breadcrumb: [
      { label: "Home", route: "home" },
      { label: "The surroundings", route: "entorno" },
      { label: "Near Manresa" },
    ],
    hero: {
      h1: "Rural accommodation near Manresa",
      intro: [
        "Being near Manresa does not mean you have to sleep in the city.",
        "Cal Masses is in Sant Salvador de Guardiola, in a setting of countryside and nature from which you can head into Manresa whenever you like and return afterwards to the quiet of the farm.",
        "It is an option especially suited to two people who want to combine Manresa with a rural stay.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Book on Airbnb", route: "reservar" },
      ctaSecondary: { label: "See the accommodation", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Manresa close by, the countryside when you return",
        paragraphs: [
          "Manresa concentrates much of the region's activity, services and heritage.",
          "A few kilometres away, however, the landscape changes quickly.",
          "Fields, woodland, vineyards, small villages and secondary roads appear, telling another side of the Bages.",
          "Cal Masses lets you combine those two realities during the same stay.",
          "You do not have to choose between city and countryside.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "A quiet base for exploring the area",
        paragraphs: [
          "You can use Cal Masses as a starting point to visit Manresa, Montserrat, Pla de Bages wineries or different corners of the region.",
          "The idea is not to spend the day covering kilometres.",
          "You can also come back early, prepare something to eat, enjoy the outdoors or simply let the afternoon pass on the farm.",
        ],
      },
      {
        h2: "For a stay for two",
        paragraphs: [
          "Cal Masses is designed for two guests.",
          "That allows for a small, simple accommodation, closer to the idea of a getaway than to a large rural house for groups.",
          "You have the spaces you need to spend a few days with autonomy and use the accommodation as you like: as a base for exploring the area, or simply as a place to rest.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "What can you combine with Manresa?",
        cards: [
          {
            title: "Montserrat",
            text: "Montserrat lets you spend a few hours or a full day getting to know one of Catalonia's most recognisable landscapes.",
            cta: "Accommodation near Montserrat",
            route: "landingMontserrat",
          },
          {
            title: "Pla de Bages",
            text: "Vineyards, wineries and quiet roads let you discover another side of the region.",
            cta: "Wine tourism in the Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Cal Masses",
            text: "Countryside, vineyard and quiet at the end of the day.",
            cta: "Discover Cal Masses",
            route: "finca",
          },
        ],
      },
    ],
    finalCta: {
      h2: "Sleep near Manresa without sleeping in Manresa",
      paragraphs: [
        "If you are looking for accommodation, a rural apartment or a quiet stay near Manresa, Cal Masses offers a different alternative to sleeping in the city centre.",
        "Book on Airbnb and decide the rest of the trip afterwards.",
      ],
      primary: { label: "Book on Airbnb", route: "reservar" },
    },
    related: [
      { label: "Rural accommodation in the Bages", route: "landingBages" },
      { label: "Near Montserrat", route: "landingMontserrat" },
      { label: "Wine tourism", route: "landingEnoturismo" },
    ],
    internalLinks: [
      { label: "See the accommodation", route: "alojamiento" },
      { label: "Rural accommodation in the Bages", route: "landingBages" },
      { label: "Accommodation near Montserrat", route: "landingMontserrat" },
      { label: "Wine tourism in the Pla de Bages", route: "landingEnoturismo" },
      { label: "Book on Airbnb", route: "reservar" },
    ],
  },

  montserrat: {
    routeKey: "landingMontserrat",
    status: "published",
    seo: {
      title: "Accommodation near Montserrat | Cal Masses",
      description:
        "Discover Cal Masses, a rural accommodation for two near Montserrat, surrounded by countryside and vineyards in the Bages.",
      h1: "Accommodation near Montserrat for a quiet getaway",
    },
    breadcrumb: [
      { label: "Home", route: "home" },
      { label: "The surroundings", route: "entorno" },
      { label: "Montserrat" },
    ],
    hero: {
      h1: "Accommodation near Montserrat for a quiet getaway",
      intro: [
        "Visiting Montserrat does not necessarily mean staying next to the monastery.",
        "Cal Masses is in Sant Salvador de Guardiola, in the Bages, and lets you combine a visit to Montserrat with a stay surrounded by countryside, woodland and vineyard.",
        "You can spend part of the day discovering the mountain and return afterwards to a completely different setting.",
      ],
      image: siteConfig.images.montserrat,
      ctaPrimary: { label: "Book on Airbnb", route: "reservar" },
      ctaSecondary: { label: "See the accommodation", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Montserrat during the day, Cal Masses when you return",
        paragraphs: [
          "Montserrat deserves time.",
          "The monastery is probably its best-known point, but the mountain, the paths and the landscape allow you to approach the visit in very different ways.",
          "Staying at Cal Masses lets you complement that day with another part of the territory.",
          "After Montserrat you can return to the countryside, rest, cook or enjoy the outdoors without needing to stay inside a tourist area.",
        ],
        image: siteConfig.images.exterior,
      },
      {
        h2: "We are not in Montserrat",
        paragraphs: [
          "We prefer to say this clearly.",
          "Cal Masses is not an accommodation on the mountain of Montserrat or next to the monastery.",
          "We are in Sant Salvador de Guardiola, within the Bages region.",
          "That is precisely why it can suit those who want to visit Montserrat but prefer to stay in a rural setting and use the stay to also discover Manresa, the Pla de Bages and its vineyards.",
        ],
        showDistanceKey: "montserrat",
      },
      {
        h2: "More to do besides Montserrat",
        paragraphs: [
          "If you stay more than one night, you do not need to plan the whole stay around Montserrat.",
          "You can combine the mountain with Manresa, a wine-related visit, short routes through the Bages, or simply time on the farm itself.",
          "Cal Masses works better as a point from which to discover the territory than as accommodation tied to a single attraction.",
        ],
        cards: [
          {
            title: "Manresa",
            text: "History, heritage, food and services a few kilometres from the farm.",
            cta: "Rural accommodation near Manresa",
            route: "landingManresa",
          },
          {
            title: "Wine tourism",
            text: "Vineyards, wineries and quiet roads let you discover another side of the region.",
            cta: "Wine tourism in the Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Bages",
            text: "Rural accommodation in the Bages, between countryside and vineyards.",
            cta: "Rural accommodation in the Bages",
            route: "landingBages",
          },
        ],
      },
      {
        h2: "An accommodation for two",
        paragraphs: [
          "Cal Masses is designed for two guests.",
          "It is an option for those looking for a small, quiet stay with autonomy, away from the format of large rural houses for groups.",
          "If you are coming to discover Montserrat and want to spend the rest of the trip in the countryside, this may be your place.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "Montserrat is only one part of the trip",
      paragraphs: [
        "Book on Airbnb and discover everything you can do from Cal Masses.",
      ],
      primary: { label: "Book on Airbnb", route: "reservar" },
    },
    related: [
      { label: "Near Manresa", route: "landingManresa" },
      { label: "Rural accommodation in the Bages", route: "landingBages" },
      { label: "For two", route: "landingParaDos" },
    ],
    internalLinks: [
      { label: "See the accommodation", route: "alojamiento" },
      { label: "Rural accommodation near Manresa", route: "landingManresa" },
      { label: "Rural accommodation in the Bages", route: "landingBages" },
      { label: "Rural accommodation for two", route: "landingParaDos" },
      { label: "Book on Airbnb", route: "reservar" },
    ],
  },

  paraDos: {
    routeKey: "landingParaDos",
    status: "published",
    seo: {
      title: "Rural accommodation for two in the Bages | Cal Masses",
      description:
        "A rural getaway for two in the Bages. Countryside, vineyards and nature at Cal Masses, Sant Salvador de Guardiola.",
      h1: "A rural getaway for two in the Bages",
    },
    breadcrumb: [
      { label: "Home", route: "home" },
      { label: "Accommodation", route: "alojamiento" },
      { label: "For two" },
    ],
    hero: {
      h1: "A rural getaway for two in the Bages",
      intro: [
        "Not every rural accommodation has to be designed for groups.",
        "Cal Masses is a space for two people, on a Bages farm surrounded by countryside, woodland and vineyard.",
        "A place from which to discover the region, or simply spend a few days without too many plans.",
      ],
      image: siteConfig.images.interior,
      ctaPrimary: { label: "Book on Airbnb", route: "reservar" },
      ctaSecondary: { label: "See the accommodation", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Two people, a small place and time ahead",
        paragraphs: [
          "The idea of Cal Masses is simple.",
          "Having a comfortable space to sleep, cook and be at ease, with the countryside beginning practically as you step outside.",
          "You do not need to organise every moment of the stay.",
          "You can spend the day out or stay in. You can head to Montserrat or Manresa, visit a winery, walk, or simply read and rest.",
        ],
        image: siteConfig.images.bedroom,
        showFeatureGrid: true,
      },
      {
        h2: "Few plans can also be a good plan",
        paragraphs: [
          "A morning walk.",
          "A quiet meal.",
          "An afternoon by the pool when it is available and the weather is right.",
          "A bottle of wine.",
          "A visit to Montserrat.",
          "Or none of that.",
          "Cal Masses is also for the days when you simply feel like not having too much planned.",
        ],
      },
      {
        h2: "A working farm",
        paragraphs: [
          "Cal Masses is not a rural set built around the accommodation.",
          "Here we still farm, care for the vineyard and make wine.",
          "Each season of the year has a different rhythm, and the landscape keeps changing too.",
          "The accommodation is part of that place.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "What to do if you feel like going out",
        paragraphs: [
          "If you feel like getting out, around Cal Masses there are enough options to fill several days without needing long journeys.",
        ],
        cards: [
          {
            title: "Montserrat",
            text: "Montserrat is close enough to spend a morning or a full day there and return afterwards to the quiet of Cal Masses.",
            cta: "Accommodation near Montserrat",
            route: "landingMontserrat",
          },
          {
            title: "Manresa",
            text: "History, heritage, food and services a few kilometres from the farm.",
            cta: "Rural accommodation near Manresa",
            route: "landingManresa",
          },
          {
            title: "Wine tourism",
            text: "Vineyards, wineries, rural landscape and a wine culture closely tied to the territory.",
            cta: "Wine tourism in the Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Bages",
            text: "Rural accommodation in the Bages, between countryside and vineyards.",
            cta: "Rural accommodation in the Bages",
            route: "landingBages",
          },
        ],
      },
    ],
    finalCta: {
      h2: "Looking for a place for two?",
      paragraphs: ["Book on Airbnb and discover Cal Masses."],
      primary: { label: "Book on Airbnb", route: "reservar" },
    },
    related: [
      { label: "With pool", route: "landingPiscina" },
      { label: "Near Montserrat", route: "landingMontserrat" },
      { label: "Near Manresa", route: "landingManresa" },
    ],
    internalLinks: [
      { label: "See the accommodation", route: "alojamiento" },
      { label: "Rural accommodation with pool", route: "landingPiscina" },
      { label: "Accommodation near Montserrat", route: "landingMontserrat" },
      { label: "Rural accommodation near Manresa", route: "landingManresa" },
      { label: "Wine tourism in the Pla de Bages", route: "landingEnoturismo" },
      { label: "Book on Airbnb", route: "reservar" },
    ],
  },

  piscina: {
    routeKey: "landingPiscina",
    status: "published",
    seo: {
      title: "Rural accommodation with pool in the Bages | Cal Masses",
      description:
        "Rural accommodation for two with a pool in the Bages. Discover Cal Masses, a farm surrounded by countryside and vineyards in Sant Salvador de Guardiola.",
      h1: "Rural accommodation with pool in the Bages",
    },
    breadcrumb: [
      { label: "Home", route: "home" },
      { label: "Accommodation", route: "alojamiento" },
      { label: "With pool" },
    ],
    hero: {
      h1: "Rural accommodation with pool in the Bages",
      intro: [
        "In summer, much of Cal Masses is enjoyed outdoors.",
        "The countryside, the outdoor areas and the pool let you spend more time on the farm and approach the stay with even less hurry.",
        "Cal Masses is an accommodation for two in Sant Salvador de Guardiola, surrounded by nature and vineyards.",
      ],
      image: siteConfig.images.poolCandidate,
      ctaPrimary: { label: "Book on Airbnb", route: "reservar" },
    },
    sections: [
      {
        h2: "The pool is part of the stay",
        paragraphs: [
          "The pool is integrated into the outdoor space at Cal Masses and is available during its season of use.",
        ],
        showPoolFacts: true,
      },
      {
        h2: "A day without leaving Cal Masses",
        paragraphs: [
          "Not every day needs an outing.",
          "When the weather is good you can spend much of the day on the farm: breakfast outside, reading, swimming, cooking or simply resting.",
          "Montserrat, Manresa and the rest of the Bages will still be there the next day.",
        ],
      },
      {
        h2: "Countryside, vineyard and summer",
        paragraphs: [
          "The surroundings of Cal Masses change a great deal with the time of year.",
          "During the warmer months life moves outdoors, and the pool becomes one more part of that relationship with the farm.",
          "We do not want to present it as a resort or as a standalone facility.",
          "It is part of a small rural accommodation within an agricultural landscape.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "For two people",
        paragraphs: [
          "Cal Masses is designed for two guests.",
          "That lets you enjoy the accommodation, the outdoors and the surroundings at a much quieter scale than large rural houses for groups.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "For two people",
      paragraphs: [
        "Cal Masses is designed for two guests.",
        "That lets you enjoy the accommodation, the outdoors and the surroundings at a much quieter scale than large rural houses for groups.",
      ],
      primary: { label: "Book on Airbnb", route: "reservar" },
    },
    related: [
      { label: "For two", route: "landingParaDos" },
      { label: "Rural accommodation in the Bages", route: "landingBages" },
    ],
    internalLinks: [
      { label: "See the accommodation", route: "alojamiento" },
      { label: "Rural accommodation for two", route: "landingParaDos" },
      { label: "Rural accommodation in the Bages", route: "landingBages" },
      { label: "Book on Airbnb", route: "reservar" },
    ],
  },

  barcelona: {
    routeKey: "landingBarcelona",
    status: "published",
    seo: {
      title: "Rural getaway near Barcelona | Cal Masses",
      description:
        "A rural getaway for two near Barcelona. Discover Cal Masses, in the Bages, among vineyards, countryside and nature.",
      h1: "A rural getaway near Barcelona",
    },
    breadcrumb: [
      { label: "Home", route: "home" },
      { label: "Rural getaway near Barcelona" },
    ],
    hero: {
      h1: "A rural getaway near Barcelona",
      intro: [
        "You do not need to go very far to change the landscape completely.",
        "Cal Masses is in the Bages, in Sant Salvador de Guardiola, surrounded by fields, woodland and vineyards.",
        "It is an accommodation for two designed for spending a few days away from the city and using time differently.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Book on Airbnb", route: "reservar" },
      ctaSecondary: { label: "See the accommodation", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Swap the city for the countryside for a few days",
        paragraphs: [
          "A short getaway works better when it does not force you to spend half the trip travelling.",
          "From Barcelona you can plan Cal Masses as a weekend stay or a few days to discover the Bages, visit Montserrat and Manresa, or simply rest on the farm.",
        ],
        showDistanceKey: "barcelona",
        image: siteConfig.images.vineyard,
      },
      {
        h2: "What can you do over a weekend?",
        h3Blocks: [
          {
            h3: "Arrive and slow down",
            paragraphs: [
              "You do not need to start the stay with a list of visits.",
              "Arriving, settling in, cooking something and enjoying the surroundings can be enough for the first day.",
            ],
          },
          {
            h3: "Discover the Bages",
            paragraphs: [
              "During the day you can head to Montserrat, visit Manresa, discover a winery or explore the territory without a tightly fixed itinerary.",
            ],
          },
          {
            h3: "Return without hurry",
            paragraphs: [
              "One of the advantages of staying in the countryside is being able to return after a visit and keep enjoying the place where you sleep.",
            ],
          },
        ],
      },
      {
        h2: "For two people",
        paragraphs: [
          "Cal Masses is a small accommodation designed for two.",
          "We are not trying to compete with large rural houses for groups.",
          "The offer is different: few guests, autonomy and a setting that invites you to spend part of your time on the farm itself.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "You do not need to fill the weekend",
        paragraphs: [
          "Montserrat, wine, Manresa, nature or the pool can form part of the stay.",
          "But you can also use Cal Masses simply to stop for a few days.",
        ],
        cta: { label: "Book on Airbnb", route: "reservar" },
      },
    ],
    finalCta: {
      h2: "You do not need to fill the weekend",
      paragraphs: [
        "Montserrat, wine, Manresa, nature or the pool can form part of the stay.",
        "But you can also use Cal Masses simply to stop for a few days.",
      ],
      primary: { label: "Book on Airbnb", route: "reservar" },
    },
    related: [
      { label: "Rural accommodation in the Bages", route: "landingBages" },
      { label: "Near Montserrat", route: "landingMontserrat" },
      { label: "Near Manresa", route: "landingManresa" },
      { label: "For two", route: "landingParaDos" },
    ],
    internalLinks: [
      { label: "Rural accommodation in the Bages", route: "landingBages" },
      { label: "Accommodation near Montserrat", route: "landingMontserrat" },
      { label: "Rural accommodation near Manresa", route: "landingManresa" },
      { label: "Rural accommodation for two", route: "landingParaDos" },
      { label: "Book on Airbnb", route: "reservar" },
    ],
  },

  enoturismo: {
    routeKey: "landingEnoturismo",
    status: "published",
    seo: {
      title: "Wine tourism in the Pla de Bages | Cal Masses",
      description:
        "Discover wine tourism in the Pla de Bages from Cal Masses: accommodation among vineyards, our own wine and a territory deeply tied to the vine.",
      h1: "Wine tourism in the Pla de Bages from a farm with a vineyard",
    },
    breadcrumb: [
      { label: "Home", route: "home" },
      { label: "The surroundings", route: "entorno" },
      { label: "Wine tourism in the Pla de Bages" },
    ],
    hero: {
      h1: "Wine tourism in the Pla de Bages from a farm with a vineyard",
      intro: [
        "Wine is not a decorative add-on at Cal Masses.",
        "The vineyard is part of the farm, and we ourselves make small amounts of wine under the name SISU.",
        "Staying here lets you discover the Pla de Bages from a place that also forms part, on a small scale, of that winegrowing landscape.",
      ],
      image: siteConfig.images.vineyard,
      ctaPrimary: { label: "Book on Airbnb", route: "reservar" },
      ctaSecondary: { label: "Discover SISU", route: "sisu" },
    },
    sections: [
      {
        h2: "A territory shaped by the vine",
        paragraphs: [
          "The Pla de Bages keeps a very visible relationship with wine.",
          "Vineyards appear across the region and share space with woodland, fields, small villages and numerous dry-stone buildings.",
          "There are also very different wineries, from small projects to producers with a much longer track record.",
          "Discovering Bages wine is also a way to understand the territory better.",
        ],
      },
      {
        h2: "Sleep among vineyards",
        paragraphs: [
          "At Cal Masses we do not look at the vineyard from afar.",
          "It is part of the farm.",
          "Depending on the time of year you may find it beginning to bud, fully green, approaching harvest, or in full winter rest.",
          "That continuous change is part of the landscape around the accommodation.",
        ],
        image: siteConfig.images.wine,
      },
      {
        h2: "SISU, our small wine project",
        paragraphs: [
          "SISU comes from the wish to make our own wine and learn from every harvest.",
          "We work in small quantities and aim to intervene only as much as needed so that the grapes and each vintage keep their personality.",
          "We do not try to produce identical wines year after year.",
          "What interests us is precisely that each harvest tells something different.",
        ],
        cta: { label: "Discover SISU", route: "sisu" },
      },
      {
        h2: "Discover the wineries of the Pla de Bages",
        paragraphs: [
          "Cal Masses can serve as a starting point to get to know different wineries and wine tourism experiences in the region.",
          "We do not recommend trying to visit them all.",
          "Choosing one or two, driving through the territory, stopping for a meal and leaving time for the rest of the trip is usually a much more enjoyable way to discover the Pla de Bages.",
        ],
        showWineriesTodo: true,
      },
      {
        h2: "We are not a tourist winery",
        paragraphs: [
          "Cal Masses has a vineyard and we make wine, but we do not want to present services we do not offer.",
          "If visits, tastings or other organised activities exist in the future, they will be added here.",
          "Until then, the vineyard and SISU are part of the place and of our story, not of a mandatory tourist package.",
        ],
      },
      {
        h2: "Accommodation and wine without turning everything into an activity",
        paragraphs: [
          "You can devote part of the stay to wine and the rest to Montserrat, Manresa, nature or simply Cal Masses.",
          "Wine tourism does not need to take up the whole trip.",
        ],
        cta: { label: "Book on Airbnb", route: "reservar" },
      },
    ],
    finalCta: {
      h2: "Accommodation and wine without turning everything into an activity",
      paragraphs: [
        "You can devote part of the stay to wine and the rest to Montserrat, Manresa, nature or simply Cal Masses.",
        "Wine tourism does not need to take up the whole trip.",
      ],
      primary: { label: "Book on Airbnb", route: "reservar" },
    },
    related: [
      { label: "SISU", route: "sisu" },
      { label: "Cal Masses", route: "finca" },
      { label: "Rural accommodation in the Bages", route: "landingBages" },
      { label: "For two", route: "landingParaDos" },
    ],
    internalLinks: [
      { label: "Discover SISU", route: "sisu" },
      { label: "Discover Cal Masses", route: "finca" },
      { label: "Rural accommodation in the Bages", route: "landingBages" },
      { label: "Rural accommodation for two", route: "landingParaDos" },
      { label: "Book on Airbnb", route: "reservar" },
    ],
  },
};
