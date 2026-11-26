import { ratingSnippet } from "../../config/siteConfig";
import { siteConfig } from "../../config/siteConfig";
import type { LandingsBundle } from "./types";

const R = ratingSnippet("en");

/**
 * English landing copy. Only confirmed facts about the property
 * (see siteConfig); the practical guide blocks live in content/guides.
 */
export const landingsEn: LandingsBundle = {
  bages: {
    routeKey: "landingBages",
    status: "published",
    seo: {
      title: "Rural accommodation in the Bages, among vineyards | Cal Masses",
      description:
        `${R}. An entire rural place for two on a farm with vineyard and woodland in Sant Salvador de Guardiola, 20 min from Manresa and close to Montserrat.`,
      h1: "Rural accommodation in the Bages, between countryside and vineyards",
    },
    breadcrumb: [
      { label: "Home", route: "home" },
      { label: "Rural accommodation in the Bages" },
    ],
    hero: {
      h1: "Rural accommodation in the Bages, between countryside and vineyards",
      intro: [
        "Cal Masses is a rural place for two in Sant Salvador de Guardiola, in the heart of the Bages, Catalonia. It is part of a farm with its own vineyard, woodland and fields.",
        "Manresa is about 20 minutes away and Montserrat a little further. You can spend the day exploring the area and come back in the evening to a quiet place with a hot tub, a private patio and a kitchen to cook dinner.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Check availability", route: "reservar" },
      ctaSecondary: { label: "See the accommodation", route: "alojamiento" },
    },
    sections: [
      {
        h2: "A working farm, not a housing estate",
        paragraphs: [
          "Cal Masses is not in a tourist resort. The accommodation sits on a working farm where the vines are still tended and the landscape changes with the seasons: budding in spring, deep green in summer, harvest at the end of summer and rest in winter.",
          "That is the main difference from staying in Manresa or next to Montserrat. When you get back from a day out you are not on a street or in a car park, but in the countryside, with trails leaving straight from the farm.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "What the accommodation includes",
        paragraphs: [
          "It is a small place for two guests, rented as a whole: you don't share the kitchen, bathroom or patio with anyone. It has a bedroom, an equipped kitchen, a bathroom with a hot tub, air conditioning and heating.",
          "The farm also has an outdoor saltwater pool, shared and open in summer, bikes and free parking. Check-in is self check-in from 16:00.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "An area to explore by car, at an easy pace",
        paragraphs: [
          "The Bages is a county in central Catalonia, with Manresa as its capital. It has well-known sights, such as Montserrat monastery, Manresa's Seu and Cardona castle, but also a network of back roads between vineyards, small villages and dry-stone huts.",
          "The easiest way to get around is by car, choosing one or two visits a day. Further down you'll find the main places with approximate drive times from Cal Masses, what each season is like and how many days to stay.",
        ],
      },
      {
        h2: "Our own wine and the DO Pla de Bages",
        paragraphs: [
          "At Cal Masses we tend our own vineyard and make small amounts of wine under the name SISU. We don't run tastings or tours: the wine is part of the farm, not a tourist package.",
          "If you're into wine, the area has its own designation of origin, the DO Pla de Bages, with wineries that open by appointment and a native grape, picapoll.",
        ],
        cta: {
          label: "Discover wine tourism in the Pla de Bages",
          route: "landingEnoturismo",
        },
        image: siteConfig.images.wine,
      },
    ],
    finalCta: {
      h2: "Fancy exploring the Bages from here?",
      paragraphs: [
        "Check the available dates. Check-in is from 16:00 and check-out by 11:00.",
      ],
      primary: { label: "Check availability", route: "reservar" },
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
      { label: "Check availability", route: "reservar" },
    ],
  },

  manresa: {
    routeKey: "landingManresa",
    status: "published",
    seo: {
      title: "Rural accommodation 20 min from Manresa | Cal Masses",
      description:
        `Rural accommodation for two 11 km from Manresa, on a vineyard farm. Hot tub, private patio, summer pool and free parking. ${R}.`,
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
        "Cal Masses is in Sant Salvador de Guardiola, about 11 km from Manresa (around 20 minutes by car). It is a rural place for two on a farm with vineyard and woodland.",
        "The city is close enough to visit the Seu, eat out or do your shopping, and at night you sleep in the countryside, with free parking on the farm.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Check availability", route: "reservar" },
      ctaSecondary: { label: "See the accommodation", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Manresa by day, the countryside at night",
        paragraphs: [
          "Manresa is the capital of the Bages and holds the area's most visited heritage: the Gothic Seu above the river Cardener, the Pont Vell, the old town and the Cave of Saint Ignatius, end point of the Ignatian Way.",
          "As soon as you leave the city the landscape changes within a few kilometres: fields, woodland and vines. Cal Masses is in that landscape, so you can combine both in the same stay without having to choose.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Why not stay in the centre",
        paragraphs: [
          "Whether you come to Manresa for work, the Ignatian Way or to explore the area, staying on the outskirts has practical advantages: free parking on the farm, outdoor space and your own kitchen so you don't depend on restaurants every day.",
          "The trade-off is that you need a car. Public transport to Sant Salvador de Guardiola is limited, so most guests drive, or take the train to Manresa and continue by road.",
        ],
      },
      {
        h2: "The accommodation, for two",
        paragraphs: [
          "Cal Masses is rented as a whole and designed for two guests: a bedroom, an equipped kitchen, a bathroom with a hot tub and a private patio. It has air conditioning and heating, and in summer there is a shared outdoor saltwater pool.",
          "Self check-in is from 16:00, so you can stop in Manresa for groceries and arrive whenever suits you.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "What to combine with Manresa",
        cards: [
          {
            title: "Montserrat",
            text: "The monastery and the massif, close enough to go in the morning and be back for lunch or a rest.",
            cta: "Accommodation near Montserrat",
            route: "landingMontserrat",
          },
          {
            title: "Pla de Bages",
            text: "DO wineries, vineyards and dry-stone wine vats spread across the area.",
            cta: "Wine tourism in the Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Cal Masses",
            text: "The farm: our own vineyard, woodland, trails and SISU wine.",
            cta: "Discover Cal Masses",
            route: "finca",
          },
        ],
      },
    ],
    finalCta: {
      h2: "Stay near Manresa without staying in Manresa",
      paragraphs: [
        "If you're looking for rural accommodation or an apartment near Manresa, check the available dates. Check-out is by 11:00, leaving time for a last stroll around the city.",
      ],
      primary: { label: "Check availability", route: "reservar" },
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
      { label: "Check availability", route: "reservar" },
    ],
  },

  montserrat: {
    routeKey: "landingMontserrat",
    status: "published",
    seo: {
      title: "Where to stay near Montserrat: 25 min away | Cal Masses",
      description:
        `Stay 25 min from Montserrat on a vineyard farm in the Bages. Accommodation for two with a hot tub, private patio, summer pool and parking. ${R}.`,
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
        "Cal Masses is a rural place for two in Sant Salvador de Guardiola, in the Bages, about 20 km from Montserrat monastery.",
        "It lets you go up early, before most visitors arrive, and come back in the afternoon to a vineyard farm with a hot tub and a private patio.",
      ],
      image: siteConfig.images.montserrat,
      ctaPrimary: { label: "Check availability", route: "reservar" },
      ctaSecondary: { label: "See the accommodation", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Get there before the coaches",
        paragraphs: [
          "Most Montserrat visitors come from Barcelona and arrive mid-morning. Leaving Cal Masses after breakfast, you can be up there well before them, with a shorter queue to see the Black Madonna and quieter trails.",
          "If you'd rather not drive all the way up, you can also park below and take the rack railway or the cable car. Further down we explain the options, what to see at the top and which walk to choose for the time you have.",
        ],
        image: siteConfig.images.exterior,
      },
      {
        h2: "We're not on the mountain, and that has advantages",
        paragraphs: [
          "To be clear: Cal Masses is not on Montserrat or next to the monastery. It is in the Bages area, at the distance shown below.",
          "Staying off the mountain has advantages: you don't depend on the site's opening times, you have your own kitchen and outdoor space, and you can split your stay between Montserrat, Manresa and the Pla de Bages wineries.",
        ],
        showDistanceKey: "montserrat",
      },
      {
        h2: "Beyond Montserrat",
        paragraphs: [
          "With two or more nights there's no need to build the whole trip around the mountain. The second day can be for Manresa, a winery or simply staying on the farm.",
        ],
        cards: [
          {
            title: "Manresa",
            text: "The Seu, the Pont Vell and the Cave of Saint Ignatius, about 20 minutes from the farm.",
            cta: "Rural accommodation near Manresa",
            route: "landingManresa",
          },
          {
            title: "Wine tourism",
            text: "DO Pla de Bages wineries, the picapoll grape and dry-stone wine vats.",
            cta: "Wine tourism in the Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Bages",
            text: "Cardona, Món Sant Benet and Sant Llorenç del Munt, all within an hour.",
            cta: "Rural accommodation in the Bages",
            route: "landingBages",
          },
        ],
      },
      {
        h2: "A place for two",
        paragraphs: [
          "Cal Masses is rented as a whole for two guests: a bedroom, an equipped kitchen, a bathroom with a hot tub and a private patio, with air conditioning and heating.",
          "In summer the farm has a shared outdoor saltwater pool. Parking is free.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "Montserrat is only part of the trip",
      paragraphs: [
        "Check the available dates. Montserrat is much quieter on weekdays, so those dates are worth a look too.",
      ],
      primary: { label: "Check availability", route: "reservar" },
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
      { label: "Check availability", route: "reservar" },
    ],
  },

  paraDos: {
    routeKey: "landingParaDos",
    status: "published",
    seo: {
      title: "Romantic getaway with hot tub in the Bages | Cal Masses",
      description:
        `A place just for two, with a hot tub and private patio, among vineyards and woodland in the Bages. A couple's getaway 1 h from Barcelona. ${R}.`,
      h1: "A getaway for two with a hot tub in the Bages",
    },
    breadcrumb: [
      { label: "Home", route: "home" },
      { label: "Accommodation", route: "alojamiento" },
      { label: "For two" },
    ],
    hero: {
      h1: "A getaway for two with a hot tub in the Bages",
      intro: [
        "Cal Masses is a rural place designed for two people only, on a farm with vineyard and woodland in Sant Salvador de Guardiola, in the Bages.",
        "It is rented as a whole: the bedroom, kitchen, bathroom with hot tub and patio are yours alone. It is a little over an hour from Barcelona.",
      ],
      image: siteConfig.images.interior,
      ctaPrimary: { label: "Check availability", route: "reservar" },
      ctaSecondary: { label: "See the accommodation", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Designed for two, not adapted for two",
        paragraphs: [
          "Many rural houses are built for groups and also rented to couples. Cal Masses is the other way round: it is sized for two, so there are no spare rooms or empty spaces.",
          "It has a bedroom, a kitchen equipped for real cooking, air conditioning and heating, and a private patio with a table for breakfast or dinner outdoors. Check-in is self check-in, with no reception hours.",
        ],
        image: siteConfig.images.bedroom,
        showFeatureGrid: true,
      },
      {
        h2: "The hot tub, inside the accommodation",
        paragraphs: [
          "The hot tub is in the bathroom and is for you alone. Being indoors, it works all year: in winter after a day at Montserrat, or late in the evening in summer.",
          "In summer the farm also has an outdoor saltwater pool. It is shared and has no fixed hours.",
        ],
        image: siteConfig.images.jacuzzi,
      },
      {
        h2: "A farm that is still at work",
        paragraphs: [
          "The accommodation is not a rural film set. It is on a farm where vines are grown and SISU wine is made in small amounts. Chickens and cats also live on the farm.",
          "Trails between fields and woodland start at the door, for walking or heading out on the farm's bikes.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "If you feel like going out",
        paragraphs: [
          "There's enough around for several days without driving far. Or you can skip all of it.",
        ],
        cards: [
          {
            title: "Montserrat",
            text: "Go up early, walk along the upper trails and be back for lunch on the patio.",
            cta: "Accommodation near Montserrat",
            route: "landingMontserrat",
          },
          {
            title: "Manresa",
            text: "The Seu, the old town and the market, about 20 minutes away.",
            cta: "Rural accommodation near Manresa",
            route: "landingManresa",
          },
          {
            title: "Wine tourism",
            text: "A visit and tasting at a DO Pla de Bages winery, by appointment.",
            cta: "Wine tourism in the Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Bages",
            text: "Cardona, Món Sant Benet and small villages among the vines.",
            cta: "Rural accommodation in the Bages",
            route: "landingBages",
          },
        ],
      },
    ],
    finalCta: {
      h2: "Looking for a place for two?",
      paragraphs: [
        "Check the available dates. Two nights give you time for one outing and an unhurried day on the farm.",
      ],
      primary: { label: "Check availability", route: "reservar" },
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
      { label: "Check availability", route: "reservar" },
    ],
  },

  piscina: {
    routeKey: "landingPiscina",
    status: "published",
    seo: {
      title: "Rural accommodation with pool in the Bages | Cal Masses",
      description:
        `Outdoor saltwater pool (shared, summer) on a vineyard farm in the Bages. Accommodation for two with a hot tub and private patio. ${R}.`,
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
        "Cal Masses is a rural place for two in Sant Salvador de Guardiola, on a farm with vineyard and woodland. In summer the farm has an outdoor saltwater pool.",
        "It's a good way to handle inland Catalonia's summer heat: an outing in the morning and the afternoon in the water, without getting in the car.",
      ],
      image: siteConfig.images.pool,
      ctaPrimary: { label: "Check availability", route: "reservar" },
    },
    sections: [
      {
        h2: "What the pool is like",
        paragraphs: [
          "It is an outdoor saltwater pool, open in the summer season with no fixed hours. It is shared, not exclusive to the accommodation. These are the confirmed details:",
        ],
        showPoolFacts: true,
      },
      {
        h2: "Saltwater: what's different",
        paragraphs: [
          "A saltwater pool is still disinfected with chlorine, but the chlorine is produced from the dissolved salt. For swimmers, the water usually feels gentler on skin and eyes and smells less of chlorine.",
          "It isn't seawater: the salt concentration is far lower than the sea's.",
        ],
      },
      {
        h2: "Out of season, the hot tub",
        paragraphs: [
          "The pool only opens in summer. The rest of the year, the accommodation has an indoor hot tub in the bathroom, for guests only, which works in any season.",
          "If you're after water in winter or spring, the hot tub is what you'll have. Further down there's a month-by-month comparison of the two.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "The accommodation, for two",
        paragraphs: [
          "Cal Masses is rented as a whole for two guests: a bedroom, an equipped kitchen, a bathroom with a hot tub and a private patio for dinner outdoors on summer nights. It has air conditioning, which helps in July and August.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "Coming in summer?",
      paragraphs: [
        "Check the available dates. The pool opens in the summer season; if you're unsure whether it will be open on your dates, ask us before booking.",
      ],
      primary: { label: "Check availability", route: "reservar" },
    },
    related: [
      { label: "For two", route: "landingParaDos" },
      { label: "Rural accommodation in the Bages", route: "landingBages" },
    ],
    internalLinks: [
      { label: "See the accommodation", route: "alojamiento" },
      { label: "Rural accommodation for two", route: "landingParaDos" },
      { label: "Rural accommodation in the Bages", route: "landingBages" },
      { label: "Check availability", route: "reservar" },
    ],
  },

  barcelona: {
    routeKey: "landingBarcelona",
    status: "published",
    seo: {
      title: "Rural getaway 1 h from Barcelona, among vineyards | Cal Masses",
      description:
        `1 h 10 min from Barcelona: rural accommodation for two with a hot tub on a vineyard farm in the Bages, near Montserrat. ${R}.`,
      h1: "A rural getaway near Barcelona",
    },
    breadcrumb: [
      { label: "Home", route: "home" },
      { label: "Rural getaway near Barcelona" },
    ],
    hero: {
      h1: "A rural getaway near Barcelona",
      intro: [
        "Cal Masses is about 65 km from Barcelona, around 1 h 10 min by car, in Sant Salvador de Guardiola, in the Bages.",
        "It is a rural place for two on a farm with vineyard and woodland, with a hot tub and a private patio. It's close to Montserrat and Manresa, so it works well for a weekend without spending half of it on the road.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Check availability", route: "reservar" },
      ctaSecondary: { label: "See the accommodation", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Close enough for a weekend",
        paragraphs: [
          "A two-day break works best when the journey doesn't eat into it. Leave Barcelona on Friday afternoon and you arrive in time for dinner; on Sunday you can head back at an easy pace after the 11:00 check-out.",
          "Without a car, the train reaches Manresa, but from there you'll need a car or taxi: rural public transport is limited.",
        ],
        showDistanceKey: "barcelona",
        image: siteConfig.images.vineyard,
      },
      {
        h2: "What changes compared with the city",
        h3Blocks: [
          {
            h3: "Space and calm",
            paragraphs: [
              "The accommodation is on a working farm surrounded by fields and woodland. When you get back from a day out there are no streets or city traffic, just countryside and trails leaving from the farm.",
            ],
          },
          {
            h3: "Cooking without rushing",
            paragraphs: [
              "The kitchen is equipped and the patio is private. The easiest option is to shop in Manresa on the way and eat in.",
            ],
          },
          {
            h3: "Plans within an hour",
            paragraphs: [
              "Montserrat, Manresa, the Pla de Bages wineries and Cardona castle. Or not leaving the farm at all.",
            ],
          },
        ],
      },
      {
        h2: "For two people",
        paragraphs: [
          "Cal Masses is a small place rented as a whole: a bedroom, kitchen, bathroom with a hot tub and patio, with air conditioning and heating. In summer the farm has a shared outdoor saltwater pool.",
          "It isn't a rural house for groups. If there are more than two of you, it's not the right place.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "No need to fill the weekend",
      paragraphs: [
        "Montserrat, wine, Manresa or the pool can all be part of your stay, but you can also just come to slow down. Check the available dates.",
      ],
      primary: { label: "Check availability", route: "reservar" },
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
      { label: "Check availability", route: "reservar" },
    ],
  },

  enoturismo: {
    routeKey: "landingEnoturismo",
    status: "published",
    seo: {
      title: "Wine tourism in Pla de Bages: sleep among vines | Cal Masses",
      description:
        `DO Pla de Bages wineries, the picapoll grape and dry-stone wine vats, from a farm with its own vineyard and wine (SISU). Accommodation for two. ${R}.`,
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
        "Cal Masses is a rural place for two in Sant Salvador de Guardiola, on a farm with its own vineyard. This is where we make our small-batch SISU wine.",
        "It's a good base for visiting DO Pla de Bages wineries and coming back to sleep among the vines, without a long drive after a tasting.",
      ],
      image: siteConfig.images.vineyard,
      ctaPrimary: { label: "Check availability", route: "reservar" },
      ctaSecondary: { label: "Discover SISU", route: "sisu" },
    },
    sections: [
      {
        h2: "An area with a long wine history",
        paragraphs: [
          "The Bages was one of Catalonia's great wine areas until phylloxera wiped out the vines in the late 19th century. From that time the tines remain: dry-stone vats built in the middle of the vineyards to ferment the wine on the spot.",
          "Today the DO Pla de Bages brings together wineries of different sizes, and its signature variety is picapoll, a white grape closely tied to the area.",
        ],
      },
      {
        h2: "Sleeping inside a vineyard",
        paragraphs: [
          "At Cal Masses the vineyard isn't something you look at from a distance: it's part of the farm. Depending on when you come, you'll find it budding in spring, green in summer, ready for harvest at the end of summer or resting in winter.",
          "If you're into wine, it helps: you see up close the cycle the wineries then explain.",
        ],
        image: siteConfig.images.wine,
      },
      {
        h2: "SISU, our wine",
        paragraphs: [
          "SISU is our small wine project. We make few bottles, with as little intervention as possible, and we don't try to make each vintage taste like the last: we want every harvest to show.",
        ],
        cta: { label: "Discover SISU", route: "sisu" },
      },
      {
        h2: "How to visit the DO wineries",
        paragraphs: [
          "Almost all Pla de Bages wineries open by appointment, so book your visit before you come. They usually offer a walk through the vineyard or cellar and a tasting at the end.",
          "There's no need to try to see them all. One or two visits per stay, with time for lunch nearby, usually beats back-to-back tastings.",
        ],
        showWineriesTodo: true,
      },
      {
        h2: "What we don't offer",
        paragraphs: [
          "Cal Masses is not a winery with tours: right now we don't run tastings or wine tourism activities. If we do in the future, we'll say so here.",
          "The vineyard and SISU are part of the place and our story, not a tourist package.",
        ],
      },
      {
        h2: "After a day of wineries",
        paragraphs: [
          "When you get back, the accommodation is yours alone: an equipped kitchen for dinner in, a private patio and a bathroom with a hot tub. Being in the middle of the Pla de Bages, drives from the wineries are short.",
        ],
      },
    ],
    finalCta: {
      h2: "Wine, without turning everything into an activity",
      paragraphs: [
        "Spend one morning at a winery and the rest of your stay on Montserrat, Manresa or the farm. Check the available dates.",
      ],
      primary: { label: "Check availability", route: "reservar" },
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
      { label: "Check availability", route: "reservar" },
    ],
  },
};
