import { ratingSnippet } from "../config/siteConfig";
import type { ContentBundle } from "./types";
import { TODO_DATA } from "../config/siteConfig";

const R = ratingSnippet("en");

/** English — faithful translation of approved Spanish copy. */
export const contentEn: ContentBundle = {
  ui: {
    nav: {
      home: "Home",
      alojamiento: "Accommodation",
      finca: "Cal Masses",
      sisu: "SISU",
      contacto: "Contact",
      reservar: "Check availability",
      entorno: "The surroundings",
      entornoBages: "The Bages",
      entornoMontserrat: "Montserrat",
      entornoManresa: "Manresa",
      entornoEnoturismo: "Wine tourism",
    },
    cta: {
      availability: "Check availability",
      contact: "Contact",
      seeAccommodation: "See the accommodation",
      seeAccommodationFull: "See the full accommodation",
      knowCalMasses: "Discover Cal Masses",
      knowSisu: "Discover SISU",
      discoverMontserrat: "Discover Montserrat",
      discoverManresa: "Discover Manresa",
      discoverBages: "Discover the Pla de Bages",
      seeMoreReviews: "See more reviews",
    },
    cookie: {
      message:
        "We use necessary cookies and, if you accept them, analytics and third-party map cookies.",
      accept: "Accept",
      reject: "Reject",
      settings: "Cookies",
    },
    footer: {
      brandTitle: "Cal Masses",
      stayTitle: "Your stay",
      entornoTitle: "The surroundings",
      legal: "Legal notice",
      privacy: "Privacy",
      cookies: "Cookies",
      paraDos: "For two",
      piscina: "Pool",
      laFinca: "The farm",
      exploreTitle: "Explore",
      tagline: "A place for two on a farm with a vineyard, in Sant Salvador de Guardiola (Bages).",
      withPool: "With pool",
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
    faqTitle: "Before you come",
    galleryTitle: "Gallery",
    galleryTabs: {
      all: "All",
      alojamiento: "Accommodation",
      exterior: "Exterior",
      piscina: "Pool",
      finca: "Farm and vineyard",
      sisu: "SISU",
    },
    locationMapConsent:
      "The Google Maps map only loads if you accept third-party cookies.",
    loadMap: "Show map",
    breadcrumbHome: "Home",
    guide: {
      tocTitle: "In this guide",
      keepDiscovering: "Keep exploring",
      fromCalMasses: "From Cal Masses",
    },
    facts: {
      guests: "Guests",
      bedrooms: "Bedroom",
      beds: "Beds",
      bathrooms: "Bathroom",
      kitchen: "Kitchen",
      pool: "Pool",
      poolUse: "Pool use",
      parking: "Parking",
      wifi: "Wi-Fi",
      climate: "Climate control",
      location: "Location",
      checkIn: "Check-in",
      checkOut: "Check-out",
      pets: "Pets",
      children: "Children",
      jacuzzi: "Jacuzzi",
    },
    poolLabels: {
      use: "Use",
      season: "Season",
      hours: "Hours",
      rules: "Rules",
      type: "Type",
      loungers: "Loungers",
      shade: "Shade",
      distance: "Distance from the accommodation",
    },
  },

  home: {
    design: {
      eyebrows: {
        accommodation: "The accommodation",
        finca: "The farm",
        pool: "Outdoors",
        surroundings: "The surroundings",
        sisu: "SISU",
        gallery: "Gallery",
        faq: "Before you come",
        reviews: "Told by those who have already been here",
      },
      emphasis: {
        hero: "vineyards",
        accommodation: "at ease",
        finca: "sleep",
        pool: "outdoors",
        surroundings: "Pla de Bages",
        sisu: "wine",
        gallery: "like",
        faq: "questions",
        finalCta: "Cal Masses",
      },
      poolChips: ["Shared pool", "Season: summer", "No fixed hours", "Rules: common sense", "Salt water"],
      faqLead: "Any other questions? Write to us and we'll get back to you.",
      galleryTitle: "See what it's like",
      faqTitle: "Frequently asked questions",
    },
    seo: {
      title:
        "Rural stay for two with hot tub near Montserrat | Cal Masses",
      description:
        `${R}. A self-contained place for two on a vineyard farm in the Bages, 25 min from Montserrat. Hot tub, pool and free parking.`,
      h1: "A getaway for two among vineyards and nature in the Bages",
    },
    hero: {
      h1: "A getaway for two among vineyards and nature in the Bages",
      paragraphs: [
        "Cal Masses is an accommodation in Sant Salvador de Guardiola, surrounded by fields, forest and vineyard, near Manresa and Montserrat.",
        "A small place, designed for two people, from which to discover the Bages or simply spend a few days without much rush.",
      ],
      ctaPrimary: "Check availability",
      ctaSecondary: "See the accommodation",
    },
    accommodation: {
      h2: "A space to be at ease",
      paragraphs: [
        "Cal Masses is designed for a quiet stay for two people, with the spaces needed to spend a few days comfortably and independently.",
        "Inside you will find the resting areas, kitchen, bathroom and living room. Outside begins much of what makes the stay different: the fields, the vineyard, the paths and life on the farm.",
        "We do not want to explain the accommodation with an endless list of adjectives. Here you can see what it is like, what services it has and everything you need to know before you come.",
      ],
      cta: "See the full accommodation",
    },
    finca: {
      h2: "You are not only coming to sleep",
      paragraphs: [
        "Cal Masses is also the place where we live and work the land.",
        "Around the accommodation there are fields, forest and vineyard. We farm, we make our own wine and we continue shaping a small project that comes from this place.",
        "The stay is part of that landscape. It is not an accommodation placed in the middle of the countryside to look rural: the countryside was already here.",
      ],
      h3: "A farm that changes with the seasons",
      h3Paragraphs: [
        "Cal Masses does not look the same in winter as in spring, summer or harvest time.",
        "The vineyard, the light, the fields and the tasks we do all change.",
        "That is part of the place, even if each guest decides how close they want to get to that part of the farm.",
      ],
      cta: "Discover Cal Masses",
    },
    pool: {
      h2: "Things also happen outdoors",
      paragraphs: [
        "Much of Cal Masses is enjoyed outdoors: breakfast without rushing, reading, walking, resting or simply staying a while looking at the landscape.",
        "During the warmer months, the pool is part of that outdoor space.",
      ],
    },
    surroundings: {
      h2: "Montserrat, Manresa and the Pla de Bages",
      paragraphs: [
        "Cal Masses is in Sant Salvador de Guardiola, at a point from which it is easy to combine nature, villages, heritage, wine and gastronomy.",
        "Montserrat and Manresa are two of the best-known visits, but the Pla de Bages also deserves its own time.",
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
          text: "History, heritage, gastronomy and services near the farm, without having to stay inside the city.",
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
      h2: "Told by those who have already been here",
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
      title: "Accommodation for two: hot tub, kitchen and pool | Cal Masses",
      description:
        "An entire place for two in Sant Salvador de Guardiola: bedroom, bathroom, kitchen, hot tub, air conditioning and a shared pool in summer. See photos and details.",
      h1: "The accommodation",
    },
    hero: {
      paragraphs: [
        "Cal Masses is an entire accommodation for two people within a farm in Sant Salvador de Guardiola, in the Bages.",
        "A small, quiet space from which to discover the area or simply spend a few days among fields, vineyard and nature.",
      ],
      ctaSecondary: "See the spaces",
    },
    essentialsAria: "Essential accommodation facts",
    eyebrows: {
      bedroom: "Rest",
      living: "Kitchen and living",
      bathroom: "Bathroom",
      exterior: "Outside",
      privacy: "The farm",
      services: "Amenities",
      arrival: "Arrival",
      explore: "Keep exploring",
      enlarge: "Enlarge photo",
    },
    essentialLabels: {
      entirePlace: "Entire place",
      guests: "2 guests",
      bedrooms: "1 bedroom",
      beds: "1 bed",
      bathrooms: "1 bathroom",
      kitchen: "Kitchen",
      pool: "Pool",
      wifi: "Wi-Fi",
    },
    gallery: {
      seeAll: "See all photos",
      close: "Close",
    },
    intro: {
      h2: "A space to be at ease",
      paragraphs: [
        "Cal Masses is designed for a quiet stay for two people, with the spaces needed to spend a few days comfortably and independently.",
        "Inside you will find a bedroom, kitchen, bathroom and living area. Outside begins much of what makes the stay different: the fields, the vineyard, the paths and the life of the farm.",
        "You can use Cal Masses as a starting point to discover the Bages or simply stay and enjoy the place.",
      ],
    },
    bedroom: {
      h2: "The bedroom",
      paragraphs: [
        "The bedroom at Cal Masses is designed for two people, with a simple, quiet atmosphere for resting at the end of the day.",
        "We do not want to add more than is needed: a good bed, calm, and a comfortable space where you can close the door and rest.",
      ],
    },
    living: {
      h2: "Kitchen and a space to be at ease",
      paragraphs: [
        "One of the advantages of staying at Cal Masses is being able to organise your days as you wish.",
        "The kitchen lets you prepare breakfasts, lunches or dinners without always needing to go out, and the living area offers a comfortable space to rest when you prefer to stay inside.",
      ],
      equipmentTitle: "Equipment",
    },
    bathroom: {
      h2: "The bathroom",
      paragraphs: [
        "The accommodation has a full bathroom for the exclusive use of guests.",
      ],
    },
    exterior: {
      h2: "Pool and outdoor life",
      paragraphs: [
        "During the warmer months, much of Cal Masses is enjoyed outdoors.",
        "The pool, the outdoor areas and the farm landscape let you spend a good part of the day without needing to leave.",
        "Having breakfast outside, reading, swimming or simply spending time looking at the landscape are also part of the stay.",
      ],
    },
    privacy: {
      h2: "An accommodation within a living farm",
      paragraphs: [
        "Cal Masses is within a farm where we also live and work.",
        "The accommodation has its own spaces, but it is part of a place where the daily activity of the farm, the fields and the vineyard continues.",
        "We prefer to explain this clearly so you know what kind of stay you will find before you come.",
      ],
      h3: "Which spaces are only for you?",
      privateLabel: "Private",
      sharedLabel: "Shared",
      areaLabels: {
        lodging: "Accommodation",
        pool: "Pool",
        terrace: "Terrace",
        garden: "Garden",
        parking: "Parking",
      },
      knowFinca: "Learn about the farm",
    },
    services: {
      h2: "Everything you will find",
      categories: {
        kitchen: "Kitchen",
        comfort: "Comfort",
        exterior: "Outdoors",
        practical: "Practical",
        bedroomBath: "Bedroom and bathroom",
      },
      items: {
        entirePlace: "Entire place",
        kitchen: "Kitchen",
        wifi: "Wi-Fi",
        airConditioning: "Air conditioning",
        heating: "Heating",
        pool: "Pool",
        parking: "Parking",
        jacuzzi: "Jacuzzi",
        selfCheckIn: "Self check-in",
        washer: "Washer",
        dryer: "Dryer",
        linens: "Bed linen",
        towels: "Towels",
        hairDryer: "Hair dryer",
      },
    },
    arrival: {
      h2: "Arriving and starting the stay",
      paragraphs: [
        "We want arrival to be simple and for you to have the information you need before leaving home.",
        "Here you will find the times and basic guidance to organise the stay.",
      ],
      checkIn: "Check-in",
      checkOut: "Check-out",
      selfCheckInTitle: "Self check-in",
      selfCheckInBody:
        "You can check in on your own following the instructions you will receive before your stay.",
      parkingTitle: "Parking",
    },
    fit: {
      h2: "Is Cal Masses for you?",
      yesTitle: "Probably yes if...",
      yesItems: [
        "you are two people;",
        "you are looking for quiet;",
        "you like being close to the countryside;",
        "you prefer a small accommodation to a tourist complex;",
        "you want to combine rest with Montserrat, Manresa or the Bages;",
        "you value being able to cook and organise the stay at your own pace.",
      ],
      noTitle: "It may not be what you are looking for if...",
      noItems: [
        "you are travelling in a large group;",
        "you want to be in the centre of a city;",
        "you want the services of a hotel;",
        "you are looking for entertainment, a reception desk or dining services within the accommodation.",
      ],
    },
    reviews: {
      h2: "What guests who have stayed here say",
    },
    faq: {
      h2: "Before booking",
      items: [
        {
          question: "Is the accommodation entire?",
          answer: "Yes. Cal Masses is an entire accommodation for two people.",
        },
        {
          question: "How many people is it for?",
          answer: "For 2 people.",
        },
        {
          question: "Is the pool private or shared?",
          answer:
            "Shared pool. It is available for guests in summer; those from the house do not usually use it if guests are there. Outdoor, no fixed hours: common sense.",
        },
        {
          question: "Is there an equipped kitchen?",
          answer: "Yes. There is a kitchen.",
        },
        {
          question: "Is there Wi-Fi?",
          answer: "Yes.",
        },
        {
          question: "Is there air conditioning and heating?",
          answer: "Yes. There is air conditioning and heating.",
        },
        {
          question: "Is there parking?",
          answer: "Yes, there is plenty of parking; any type of vehicle fits.",
        },
        {
          question: "Are pets allowed?",
          answer: "No.",
        },
        {
          question: "Can children stay?",
          answer: "Yes.",
        },
        {
          question: "Is smoking allowed?",
          answer: TODO_DATA,
        },
        {
          question: "Are parties or events allowed?",
          answer: "Parties and events are not allowed.",
        },
        {
          question: "How does check-in work?",
          answer: "From 16:00.",
        },
        {
          question: "Are there other guests on the farm?",
          answer:
            "Cal Masses is within a farm where we also live and work. The accommodation has its own spaces.",
        },
        {
          question: "Which areas are shared?",
          answer: "The pool is shared.",
        },
        {
          question: "How can I check availability?",
          answer:
            "You can check availability on Booking.com, or contact us by WhatsApp or email.",
        },
        {
          question: "What is the cancellation policy?",
          answer: "It is shown on Booking.com when you choose the booking dates.",
        },
      ],
    },
    related: [
      { label: "Discover the Bages", route: "landingBages" },
      {
        label: "Rural accommodation near Manresa",
        route: "landingManresa",
      },
      {
        label: "Accommodation near Montserrat",
        route: "landingMontserrat",
      },
      {
        label: "Discover the Pla de Bages and its wines",
        route: "landingEnoturismo",
      },
      { label: "Learn about SISU", route: "sisu" },
    ],
    finalCta: {
      h2: "Does it match what you are looking for?",
      paragraphs: [
        "Check available dates and, if you need to clear up any questions before coming, write to us.",
      ],
      primary: "Check availability",
      secondary: "Contact",
    },
  },

  finca: {
    seo: {
      title: "The farm: vineyard, garden and our own wine | Cal Masses",
      description:
        "Cal Masses did not start as a tourism project: it is a farm with a vineyard and vegetable garden where we live, grow food and make our wine, SISU.",
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
    cta: {
      primary: "Check availability",
      primaryRoute: "reservar",
      secondary: "See the accommodation",
      secondaryRoute: "alojamiento",
    },
    design: {
      next: [
        { label: "See the accommodation", route: "alojamiento" },
        { label: "SISU, the farm's wine", route: "sisu" },
      ],
      closing: { h2: "Check available dates", paragraph: "A small farm for two people that changes with every season." },
    },
  },

  sisu: {
    seo: {
      title: "SISU, the wine from the Cal Masses farm in Pla de Bages",
      description:
        "SISU comes from the same place. The vineyard is part of Cal Masses and each vintage explains, in its own way, part of what happens on the farm.",
      h1: "SISU",
    },
    intro: [
      "SISU comes from the same place.",
      "The vineyard is part of Cal Masses and each vintage explains, in its own way, part of what happens on the farm.",
      "We make small productions with a simple idea: intervene as needed and let the grapes and the year have something to say.",
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
    cta: {
      primary: "Check availability",
      primaryRoute: "reservar",
      secondary: "See the accommodation",
      secondaryRoute: "alojamiento",
    },
    design: {
      eyebrow: "Our wine",
      specs: [
        { label: "Vintage", value: "2024" },
        { label: "Grapes", value: "Macabeo 80% · Sumoll 20%" },
        { label: "Maceration", value: "5 days on the skins" },
        { label: "Resting", value: "6 months in stainless steel tanks", wide: true },
      ],
      tasteEyebrow: "In the glass",
      tasteH2: "What it is like",
      projectH2: "A small, honest project",
      next: [
        { label: "Wine tourism in Pla de Bages", route: "landingEnoturismo" },
        { label: "The farm", route: "finca" },
      ],
      closing: { h2: "Check available dates", paragraph: "The wine and the accommodation share the same landscape." },
    },
  },

  contacto: {
    seo: {
      title: "Contact and location | Cal Masses, Bages",
      description:
        "Message us on WhatsApp, email or phone with questions about dates, your stay or how to get to Cal Masses in Sant Salvador de Guardiola (Bages).",
      h1: "Contact",
    },
    intro:
      "If you have any questions about your stay, availability or how to get here, you can contact us directly.",
    arrival: "How to get here",
    saveContact: "Save contact",
    copyEmail: "Copy email",
    copied: "Email copied",
    writeUs: "Write to us",
    whatsappCta: "Message us on WhatsApp",
  },

  reservar: {
    seo: {
      title: "Check availability | Cal Masses",
      description:
        "Check the available dates on Booking.com. If you need to know anything before coming, write to us.",
      h1: "Check availability",
    },
    intro:
      "Check the available dates on Booking.com. If you have any questions before coming, write to us.",
  },

  legal: {
    aviso: {
      seo: {
        title: "Legal notice | Cal Masses",
        description: "Owner details, terms of use and intellectual property of the Cal Masses website.",
        h1: "Legal notice",
      },
    },
    privacidad: {
      seo: {
        title: "Privacy | Cal Masses",
        description: "How Cal Masses handles the personal data of people who contact us or stay with us.",
        h1: "Privacy",
      },
    },
    cookies: {
      seo: {
        title: "Cookies | Cal Masses",
        description: "Which cookies the Cal Masses website uses and how to change your choice.",
        h1: "Cookies",
      },
    },
  },

  faq: [
    {
      question: "How many people is Cal Masses for?",
      answer:
        "Two people. It is an entire place with one bedroom and one bathroom, designed for couples or two friends looking for a few quiet days.",
    },
    {
      question: "Is there a hot tub?",
      answer:
        "Yes. The bathroom has a hot tub (jacuzzi), and the place has air conditioning and heating for any time of year.",
    },
    {
      question: "Is the pool private or shared?",
      answer:
        "Shared. It is an outdoor saltwater pool available to guests in summer; the people of the house do not usually use it when there are guests. No fixed hours: common sense.",
    },
    {
      question: "Is there a kitchen?",
      answer:
        "Yes, the accommodation has its own kitchen so you can cook and plan your days as you like.",
    },
    {
      question: "Is there parking?",
      answer:
        "Yes, free parking on the farm itself, with plenty of room for any type of vehicle.",
    },
    {
      question: "Is there Wi-Fi?",
      answer:
        "Yes, there is free Wi-Fi in the accommodation.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "No, pets are not allowed at Cal Masses.",
    },
    {
      question: "Can children stay?",
      answer:
        "Yes, as long as there are no more than two people in total, which is the accommodation's capacity.",
    },
    {
      question: "What time is check-in?",
      answer:
        "Check-in is from 16:00.",
    },
    {
      question: "What time is check-out?",
      answer:
        "Check-out is until 11:00.",
    },
    {
      question: "Where is Cal Masses?",
      answer:
        "At Raval del Sellarès, s/n, 08253 Sant Salvador de Guardiola (Bages, Barcelona). The contact page has a map with the exact location.",
    },
    {
      question: "How far is Manresa?",
      answer:
        "Manresa is about 11 km away, roughly 20 minutes by car.",
    },
    {
      question: "How far is Montserrat?",
      answer:
        "Montserrat is about 20 km away, roughly 25 minutes by car.",
    },
    {
      question: "How far is Barcelona?",
      answer:
        "Barcelona is about 65 km away, roughly 1 h 10 min by car.",
    },
    {
      question: "How can I check availability?",
      answer:
        "You can see free dates on Booking.com, or message us on WhatsApp or email and we will reply directly.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "The cancellation policy is shown on Booking.com when you select your dates.",
    },
  ],
};
