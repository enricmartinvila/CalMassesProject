import type { ContentBundle } from "./types";
import { TODO_DATA, TODO_LEGAL_CONTENT } from "../config/siteConfig";

/** English — faithful translation of approved Spanish copy. */
export const contentEn: ContentBundle = {
  ui: {
    nav: {
      home: "Home",
      alojamiento: "Accommodation",
      finca: "Cal Masses",
      sisu: "SISU",
      contacto: "Contact",
      reservar: "Book",
      entorno: "The surroundings",
      entornoBages: "The Bages",
      entornoMontserrat: "Montserrat",
      entornoManresa: "Manresa",
      entornoEnoturismo: "Wine tourism",
    },
    cta: {
      availability: "Check availability",
      contact: "Contact",
      discoverCalMasses: "Discover Cal Masses",
      seeAccommodation: "See the accommodation",
      knowCalMasses: "Discover Cal Masses",
      knowSisu: "Discover SISU",
      discoverMontserrat: "Discover Montserrat",
      discoverManresa: "Discover Manresa",
      discoverBages: "Discover the Pla de Bages",
    },
    booking: {
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Guests",
      submit: "Check availability",
      note: "We redirect you to Airbnb to see dates and prices.",
    },
    cookie: {
      message:
        "We use necessary cookies and, if you accept them, analytics and third-party map cookies.",
      accept: "Accept",
      reject: "Reject",
      settings: "Cookies",
    },
    footer: {
      legal: "Legal notice",
      privacy: "Privacy",
      cookies: "Cookies",
      discoverTitle: "Discover Cal Masses",
      discoverBages: "Rural accommodation in the Bages",
      discoverManresa: "Near Manresa",
      discoverMontserrat: "Near Montserrat",
      discoverParaDos: "Getaway for two",
      discoverEnoturismo: "Wine tourism in the Pla de Bages",
    },
    notFound: {
      title: "Page not found",
      body: "The page you are looking for does not exist or has moved.",
      back: "Back to home",
    },
    todo: {
      content: "TODO_CONTENT",
      data: "TODO_DATA",
    },
    reviewsEmpty: "Reviews will be published when approved testimonials are available.",
    faqTitle: "Frequently asked questions",
    locationMapConsent:
      "The Google Maps map only loads if you accept third-party cookies.",
    loadMap: "Show map",
    breadcrumbHome: "Home",
    facts: {
      guests: "Guests",
      bedrooms: "Bedrooms",
      kitchen: "Kitchen",
      pool: "Pool",
      poolUse: "Pool (use)",
      parking: "Parking",
    },
  },

  home: {
    seo: {
      title:
        "A getaway for two among vineyards and nature in the Bages | Cal Masses",
      description:
        "Cal Masses is an accommodation in Sant Salvador de Guardiola, surrounded by forest, fields and vineyards, near Manresa and Montserrat.",
      h1: "A getaway for two among vineyards and nature in the Bages",
    },
    hero: {
      h1: "A getaway for two among vineyards and nature in the Bages",
      paragraphs: [
        "Cal Masses is an accommodation in Sant Salvador de Guardiola, surrounded by forest, fields and vineyards, near Manresa and Montserrat.",
        "A place to slow down, enjoy the surroundings and discover the Pla de Bages from a farm with a life of its own.",
      ],
      ctaPrimary: "Check availability",
      ctaSecondary: "Discover Cal Masses",
    },
    accommodation: {
      h2: "A space to be at ease",
      paragraphs: [
        "Cal Masses is designed for a quiet stay for two people, with the spaces needed to spend a few days comfortably and without rushing.",
        "Inside you will find the resting areas, kitchen, bathroom and living room. Outside begins much of what makes the stay different: the fields, the vineyard, the paths and life on the farm.",
        "We do not want to explain the accommodation with an endless list of adjectives. Here you can see the spaces, the available services and everything you need to know before you come.",
      ],
      cta: "See the accommodation",
    },
    finca: {
      h2: "You are not only coming to sleep",
      paragraphs: [
        "Cal Masses is also the place where we live and work the land.",
        "Around the accommodation there are fields, forest and vineyard. We farm, we make our own wine and we continue shaping a small project that comes from this place.",
        "The stay is part of that landscape. It is not an accommodation placed in the middle of the countryside to look rural: the countryside was already here.",
      ],
      cta: "Discover Cal Masses",
    },
    pool: {
      h2: "Things also happen outdoors",
      paragraphs: [
        "Much of Cal Masses is enjoyed outdoors: breakfast without rushing, reading, walking, resting or simply staying a while looking at the landscape.",
        "The pool is part of this space during its season of use.",
      ],
    },
    surroundings: {
      h2: "Montserrat, Manresa and the Pla de Bages",
      paragraphs: [
        "Cal Masses is in Sant Salvador de Guardiola, at a point from which it is easy to combine nature, villages, heritage, wine and gastronomy.",
        "Montserrat and Manresa are two of the best-known visits, but the Pla de Bages also deserves its own time: vineyards, paths, small wineries and a landscape that changes a lot with the time of year.",
      ],
      cards: [
        {
          title: "Montserrat",
          text: "Montserrat is close enough to spend a morning or a full day there and then return to the quiet of Cal Masses.",
          cta: "Discover Montserrat",
          route: "landingMontserrat",
        },
        {
          title: "Manresa",
          text: "History, heritage, gastronomy and services a few kilometres from the farm.",
          cta: "Discover Manresa",
          route: "landingManresa",
        },
        {
          title: "Pla de Bages",
          text: "Vineyards, wineries, rural landscape and a wine culture closely tied to the territory.",
          cta: "Discover the Pla de Bages",
          route: "landingEnoturismo",
        },
      ],
    },
    sisu: {
      h2: "We also make wine here",
      paragraphs: [
        "SISU comes from the same place.",
        "The vineyard is part of Cal Masses and each vintage explains, in its own way, part of what happens on the farm.",
        "We make small productions with a simple idea: intervene as needed and let the grapes and the year have something to say.",
      ],
      cta: "Discover SISU",
    },
    reviews: {
      h2: "Those who have already been here say so",
    },
    location: {
      h2: "In the Bages, between Manresa and Montserrat",
      paragraphs: [
        "Cal Masses is in Sant Salvador de Guardiola, in the Bages county.",
        "From here you can move around the territory during the day and then return to a quiet setting, surrounded by fields and nature.",
      ],
    },
    finalCta: {
      h2: "Would you like to spend a few days at Cal Masses?",
      paragraphs: [
        "Check the available dates and, if you need to know anything before coming, write to us.",
      ],
      ctaPrimary: "Check availability",
      ctaSecondary: "Contact",
    },
  },

  alojamiento: {
    seo: {
      title: "Accommodation | Cal Masses",
      description:
        "Cal Masses is designed for a quiet stay for two people, with the spaces needed to spend a few days comfortably and without rushing.",
      h1: "A space to be at ease",
    },
    intro: [
      "Cal Masses is designed for a quiet stay for two people, with the spaces needed to spend a few days comfortably and without rushing.",
      "Inside you will find the resting areas, kitchen, bathroom and living room. Outside begins much of what makes the stay different: the fields, the vineyard, the paths and life on the farm.",
      "We do not want to explain the accommodation with an endless list of adjectives. Here you can see the spaces, the available services and everything you need to know before you come.",
    ],
    sections: [],
    cta: { primary: "Check availability", primaryRoute: "reservar" },
  },

  finca: {
    seo: {
      title: "Cal Masses | The farm",
      description:
        "Cal Masses did not start as a tourism project. It is a farm, a place where we live, farm and make wine.",
      h1: "Cal Masses",
    },
    intro: [
      "Cal Masses did not start as a tourism project.",
      "It is a farm, a place where we live, farm and make wine. The accommodation came later and shares that same setting.",
      "That is why staying here is inevitably tied to the landscape, the seasons and what happens around us.",
    ],
    sections: [
      {
        h2: "Fields, vineyard and time",
        paragraphs: [
          "Working a farm means it is never exactly the same from one month to the next.",
          "The fields, the vines, the light and the tasks change. There are times of growth, harvest, more activity and others when everything seems to slow down.",
          "The accommodation is part of that rhythm, even if each guest decides how close they want to get to it.",
        ],
      },
      {
        h2: "A small project",
        paragraphs: [
          "We do not aim to turn Cal Masses into a tourism complex.",
          "We prefer to remain a small place, care for what we do and let whoever comes get to know part of the territory from here.",
        ],
      },
    ],
  },

  sisu: {
    seo: {
      title: "SISU, wine made at Cal Masses | Cal Masses",
      description:
        "SISU is our small wine project. It comes from the vineyard, from the wish to learn and from a way of making wine in which we try to intervene only as needed.",
      h1: "SISU, wine made at Cal Masses",
    },
    intro: [
      "SISU is our small wine project.",
      "It comes from the vineyard, from the wish to learn and from a way of making wine in which we try to intervene only as needed and respect the grapes and each vintage as much as possible.",
      "We do not want every wine to be the same. Precisely the opposite interests us: that each year keeps something of its own.",
    ],
    sections: [],
    existingWine: {
      title: "SISU — The first wine of Cal Masses",
      paragraphs: [
        "We present SISU, the first wine of Cal Masses. Made during the 2024 harvest with grapes from old vineyards in our village: Macabeo (80%) and Sumoll (20%).",
        "Hand-harvested, destemmed and macerated with its skins for five days. Then pressed and rested for six months in stainless steel. Bottled with minimal sulfites and unfiltered to preserve authenticity.",
        "A wine that moves between colors and styles: a very special rosé, almost a “white rosé”. Its color resembles the reddish sunsets of Pla de Bages.",
        "On the nose, notes of orange peel, ripe white fruit and a Mediterranean floral-herbaceous touch. On the palate it is fresh and vibrant, with the acidity of Macabeo and a light astringency from Sumoll that evokes autumn flavours.",
        "Ideal to enjoy well chilled with light dishes: salads, pasta, rice, pizza, soft cheeses… or simply on its own or with good company.",
        "A small and honest project that speaks of resilience, identity and our landscape. A traditional Bages brisat with a modern approach: minimal intervention, no make-up and authenticity first.",
      ],
      footer: "Raval del Sellarès — Sant Salvador de Guardiola",
    },
    cta: { primary: "Check availability", primaryRoute: "reservar" },
  },

  contacto: {
    seo: {
      title: "Contact | Cal Masses",
      description:
        "If you have any questions about your stay, availability or how to get here, you can contact us directly.",
      h1: "Contact",
    },
    intro:
      "If you have any questions about your stay, availability or how to get here, you can contact us directly.",
    arrival: "How to get here",
    saveContact: "Save contact",
    copyEmail: "Copy email",
    copied: "Email copied",
  },

  reservar: {
    seo: {
      title: "Check availability | Cal Masses",
      description:
        "Check the available dates and, if you need to know anything before coming, write to us.",
      h1: "Check availability",
    },
    intro:
      "Check the available dates and, if you need to know anything before coming, write to us.",
  },

  legal: {
    aviso: {
      seo: {
        title: "Legal notice | Cal Masses",
        description: TODO_LEGAL_CONTENT,
        h1: "Legal notice",
      },
      body: TODO_LEGAL_CONTENT,
    },
    privacidad: {
      seo: {
        title: "Privacy | Cal Masses",
        description: TODO_LEGAL_CONTENT,
        h1: "Privacy",
      },
      body: TODO_LEGAL_CONTENT,
    },
    cookies: {
      seo: {
        title: "Cookies | Cal Masses",
        description: TODO_LEGAL_CONTENT,
        h1: "Cookies",
      },
      body: TODO_LEGAL_CONTENT,
    },
  },

  faq: [
    { question: "How many people is Cal Masses for?", answer: "2" },
    {
      question: "Is the pool private or shared?",
      answer:
        "Shared. It is available for guests in summer; the house owners usually do not use it when guests are there. Outdoor, no fixed hours: common sense.",
    },
    {
      question: "Is there parking?",
      answer: "Yes, there is plenty of parking; any type of vehicle fits.",
    },
    { question: "Is there a kitchen?", answer: "Yes" },
    { question: "Are pets allowed?", answer: TODO_DATA },
    { question: "Can children stay?", answer: "Yes" },
    { question: "What time is check-in?", answer: "From 16:00." },
    { question: "What time is check-out?", answer: "Until 11:00." },
    { question: "How do I get there?", answer: TODO_DATA },
    {
      question: "How far is Montserrat?",
      answer: "Approx. 20 km / 40 min by car.",
    },
    {
      question: "How far is Manresa?",
      answer: "Approx. 11 km / 20 min by car.",
    },
    {
      question: "How can I check availability?",
      answer:
        "You can check availability on Airbnb from the booking page, or contact us by WhatsApp or email.",
    },
    { question: "What is the cancellation policy?", answer: TODO_DATA },
  ],
};
