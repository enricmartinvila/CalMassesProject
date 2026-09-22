import type { ContentBundle } from "./types";
import { TODO_DATA, TODO_LEGAL_CONTENT } from "../config/siteConfig";

/** Catalan — faithful translation of approved Spanish copy. */
export const contentCa: ContentBundle = {
  ui: {
    nav: {
      home: "Inici",
      alojamiento: "Allotjament",
      finca: "Cal Masses",
      sisu: "SISU",
      contacto: "Contacte",
      reservar: "Consultar disponibilitat",
      entorno: "L'entorn",
      entornoBages: "El Bages",
      entornoMontserrat: "Montserrat",
      entornoManresa: "Manresa",
      entornoEnoturismo: "Enoturisme",
    },
    cta: {
      availability: "Consultar disponibilitat",
      contact: "Contactar",
      seeAccommodation: "Veure l'allotjament",
      seeAccommodationFull: "Veure l'allotjament complet",
      knowCalMasses: "Conèixer Cal Masses",
      knowSisu: "Conèixer SISU",
      discoverMontserrat: "Descobrir Montserrat",
      discoverManresa: "Descobrir Manresa",
      discoverBages: "Descobrir el Pla de Bages",
      seeMoreReviews: "Veure més opinions",
    },
    cookie: {
      message:
        "Fem servir cookies necessàries i, si les acceptes, cookies d'analítica i mapes de tercers.",
      accept: "Acceptar",
      reject: "Rebutjar",
      settings: "Cookies",
    },
    footer: {
      brandTitle: "Cal Masses",
      stayTitle: "La teva estada",
      entornoTitle: "L'entorn",
      legal: "Avís legal",
      privacy: "Privacitat",
      cookies: "Cookies",
      paraDos: "Per a dos",
      piscina: "Piscina",
      laFinca: "La finca",
    },
    notFound: {
      title: "Pàgina no trobada",
      body: "La pàgina que busques no existeix o ha canviat d'adreça.",
      back: "Tornar a l'inici",
    },
    todo: {
      content: "TODO_CONTENT",
      data: "TODO_DATA",
    },
    reviewsEmpty: "Les ressenyes es publicaran quan hi hagi testimonis aprovats.",
    faqTitle: "Abans de venir",
    galleryTitle: "Galeria",
    galleryTabs: {
      all: "Totes",
      alojamiento: "Allotjament",
      exterior: "Exterior",
      piscina: "Piscina",
      finca: "Finca i vinya",
      sisu: "SISU",
    },
    locationMapConsent:
      "El mapa de Google Maps només es carrega si acceptes cookies de tercers.",
    loadMap: "Mostrar mapa",
    breadcrumbHome: "Inici",
    facts: {
      guests: "Hostes",
      bedrooms: "Dormitori",
      beds: "Llits",
      bathrooms: "Bany",
      kitchen: "Cuina",
      pool: "Piscina",
      poolUse: "Ús de la piscina",
      parking: "Pàrquing",
      wifi: "Wi-Fi",
      climate: "Climatització",
      location: "Ubicació",
      checkIn: "Check-in",
      checkOut: "Check-out",
      pets: "Mascotes",
      children: "Nens",
      jacuzzi: "Jacuzzi",
    },
    poolLabels: {
      use: "Ús",
      season: "Temporada",
      hours: "Horaris",
      rules: "Normes",
      type: "Tipus",
    },
  },

  home: {
    seo: {
      title:
        "Una escapada per a dos entre vinyes i natura al Bages | Cal Masses",
      description:
        "Cal Masses és un allotjament a Sant Salvador de Guardiola, envoltat de camp, bosc i vinya, a prop de Manresa i Montserrat.",
      h1: "Una escapada per a dos entre vinyes i natura al Bages",
    },
    hero: {
      h1: "Una escapada per a dos entre vinyes i natura al Bages",
      paragraphs: [
        "Cal Masses és un allotjament a Sant Salvador de Guardiola, envoltat de camp, bosc i vinya, a prop de Manresa i Montserrat.",
        "Un lloc petit, pensat per a dues persones, des del qual descobrir el Bages o simplement passar uns dies sense gaires presses.",
      ],
      ctaPrimary: "Consultar disponibilitat",
      ctaSecondary: "Veure l'allotjament",
    },
    accommodation: {
      h2: "Un espai per anar al teu aire",
      paragraphs: [
        "Cal Masses està pensat per a una estada tranquil·la de dues persones, amb els espais necessaris per passar uns dies amb comoditat i autonomia.",
        "A dins hi trobaràs les zones de descans, cuina, bany i sala. A fora comença bona part del que fa diferent l'estada: el camp, la vinya, els camins i la vida de la finca.",
        "No volem explicar-te l'allotjament amb una llista interminable d'adjectius. Aquí pots veure com és, quins serveis té i tot el que necessites saber abans de venir.",
      ],
      cta: "Veure l'allotjament complet",
    },
    finca: {
      h2: "No vens només a dormir",
      paragraphs: [
        "Cal Masses és també el lloc on vivim i treballem la terra.",
        "Al voltant de l'allotjament hi ha camp, bosc i vinya. Cultivem, fem el nostre propi vi i continuem donant forma a un projecte petit que neix d'aquest lloc.",
        "L'estada forma part d'aquest paisatge. No és un allotjament col·locat enmig del camp per semblar rural: el camp ja hi era.",
      ],
      h3: "Una finca que canvia amb les estacions",
      h3Paragraphs: [
        "Cal Masses no es veu igual a l'hivern que a la primavera, a l'estiu o a la verema.",
        "Canvien la vinya, la llum, el camp i les tasques que fem.",
        "Això forma part del lloc, tot i que cada hoste decideixi quant s'hi vol acostar, a aquesta part de la finca.",
      ],
      cta: "Conèixer Cal Masses",
    },
    pool: {
      h2: "A fora també passen coses",
      paragraphs: [
        "Bona part de Cal Masses es gaudeix a fora: esmorzar sense presses, llegir, passejar, descansar o simplement quedar-se una estona mirant el paisatge.",
        "Durant els mesos més càlids, la piscina forma part d'aquest espai exterior.",
      ],
    },
    surroundings: {
      h2: "Montserrat, Manresa i el Pla de Bages",
      paragraphs: [
        "Cal Masses és a Sant Salvador de Guardiola, en un punt des del qual és fàcil combinar natura, pobles, patrimoni, vi i gastronomia.",
        "Montserrat i Manresa són dues de les visites més conegudes, però el Pla de Bages mereix també temps propi.",
      ],
      cards: [
        {
          title: "Montserrat",
          text: "Montserrat és prou a prop per dedicar-li un matí o un dia sencer i tornar després a la tranquil·litat de Cal Masses.",
          cta: "Descobrir Montserrat",
          route: "landingMontserrat",
        },
        {
          title: "Manresa",
          text: "Història, patrimoni, gastronomia i serveis a prop de la finca, sense haver d'allotjar-te dins de la ciutat.",
          cta: "Descobrir Manresa",
          route: "landingManresa",
        },
        {
          title: "Pla de Bages",
          text: "Vinyes, cellers, paisatge rural i una cultura del vi molt lligada al territori.",
          cta: "Descobrir el Pla de Bages",
          route: "landingEnoturismo",
        },
      ],
    },
    sisu: {
      h2: "També fem vi aquí",
      paragraphs: [
        "SISU neix del mateix lloc.",
        "La vinya forma part de Cal Masses i cada anyada explica, a la seva manera, una part del que passa a la finca.",
        "Fem petites elaboracions amb una idea senzilla: intervenir el necessari i deixar que el raïm i l'any tinguin alguna cosa a dir.",
      ],
      cta: "Conèixer SISU",
    },
    reviews: {
      h2: "Ho expliquen els qui ja hi han estat",
    },
    finalCta: {
      h2: "Et ve de gust passar uns dies a Cal Masses?",
      paragraphs: [
        "Consulta les dates disponibles i, si necessites saber alguna cosa abans de venir, escriu-nos.",
      ],
      ctaPrimary: "Consultar disponibilitat",
      ctaSecondary: "Contactar",
    },
  },

  alojamiento: {
    seo: {
      title: "L'allotjament | Cal Masses",
      description:
        "Cal Masses és un allotjament per a dues persones dins d'una finca de Sant Salvador de Guardiola.",
      h1: "L'allotjament",
    },
    intro: [
      "Cal Masses és un allotjament per a dues persones dins d'una finca de Sant Salvador de Guardiola.",
      "Està pensat per passar uns dies amb autonomia, tant si vols recórrer el Bages com si prefereixes gaudir de la mateixa finca.",
    ],
    bedroom: {
      h2: "Dormitori",
      paragraphs: ["TODO_CONTENT"],
    },
    living: {
      h2: "Cuina / sala",
      paragraphs: ["TODO_CONTENT"],
    },
    bathroom: {
      h2: "Bany",
      paragraphs: ["TODO_CONTENT"],
    },
    exterior: {
      h2: "Exterior / piscina",
      paragraphs: [
        "Bona part de Cal Masses es gaudeix a fora. Durant els mesos més càlids, la piscina forma part d'aquest espai exterior.",
      ],
    },
    services: { h2: "Serveis" },
    rules: {
      h2: "Normes bàsiques",
      paragraphs: [
        "Màxim 2 viatgers.",
        "No s'admeten mascotes.",
        "No es permeten festes ni esdeveniments.",
      ],
    },
    checkTimes: { h2: "Check-in / check-out" },
    cta: {
      primary: "Consultar disponibilitat",
      secondary: "Contactar",
    },
  },

  finca: {
    seo: {
      title: "Cal Masses | La finca",
      description:
        "Cal Masses no va començar com un projecte turístic. És una finca, un lloc on vivim, cultivem i fem vi.",
      h1: "Cal Masses",
    },
    intro: [
      "Cal Masses no va començar com un projecte turístic.",
      "És una finca, un lloc on vivim, cultivem i fem vi. L'allotjament va arribar després i comparteix aquest mateix entorn.",
      "Per això l'experiència de quedar-s'hi està inevitablement lligada al paisatge, a les estacions i al que passa al voltant.",
    ],
    sections: [
      {
        h2: "Camp, vinya i temps",
        paragraphs: [
          "Treballar una finca vol dir que mai no és exactament igual d'un mes a l'altre.",
          "Canvien el camp, la vinya, la llum i les tasques. Hi ha èpoques de creixement, de verema, de més activitat i d'altres en què tot sembla anar més a poc a poc.",
          "L'allotjament forma part d'aquest ritme, tot i que cada hoste decideixi quant s'hi vol acostar.",
        ],
      },
      {
        h2: "Un projecte petit",
        paragraphs: [
          "No busquem convertir Cal Masses en un complex turístic.",
          "Preferim continuar sent un lloc petit, cuidar el que fem i permetre que qui vingui pugui conèixer una part del territori des d'aquí.",
        ],
      },
    ],
    cta: {
      primary: "Consultar disponibilitat",
      primaryRoute: "reservar",
      secondary: "Veure l'allotjament",
      secondaryRoute: "alojamiento",
    },
  },

  sisu: {
    seo: {
      title: "SISU, vi fet a Cal Masses | Cal Masses",
      description:
        "SISU neix del mateix lloc. La vinya forma part de Cal Masses i cada anyada explica, a la seva manera, una part del que passa a la finca.",
      h1: "SISU",
    },
    intro: [
      "SISU neix del mateix lloc.",
      "La vinya forma part de Cal Masses i cada anyada explica, a la seva manera, una part del que passa a la finca.",
      "Fem petites elaboracions amb una idea senzilla: intervenir el necessari i deixar que el raïm i l'any tinguin alguna cosa a dir.",
    ],
    sections: [],
    existingWine: {
      title: "SISU — El primer vi de Cal Masses",
      paragraphs: [
        "Us presentem el SISU, el primer vi de Cal Masses. Elaborat a la verema del 2024 amb raïm de vinyes velles del nostre poble: Macabeu (80%) i Sumoll (20%).",
        "Collit a mà, derrapat i macerat amb les seves pells durant cinc dies. Després premsat i reposat sis mesos en dipòsit d'acer inoxidable. Embotellat amb el mínim de sulfits i sense filtrar, mantenint la seva autenticitat.",
        "És un vi que juga entre colors i estils: un rosat molt especial, gairebé un “rosat de blancs”. El seu color recorda els capvespres rogencs del Pla de Bages.",
        "Al nas, notes de pell de taronja, fruita blanca madura i un toc floral i herbaci mediterrani. En boca és fresc i vibrant, amb l'acidesa del Macabeu i un punt astringent del Sumoll que evoca sabors de tardor.",
        "Ideal per gaudir-lo ben fresc amb plats lleugers: amanides, pastes, arrossos, pizzes, formatges tous… o simplement sol o en bona companyia.",
        "És un projecte petit i honest, que parla de resiliència, identitat i del nostre paisatge. Un brisat tradicional del Bages amb una mirada actual: mínima intervenció, sense maquillatges i prioritzant l'autenticitat.",
      ],
      footer: "Raval del Sellarès — Sant Salvador de Guardiola",
    },
    cta: {
      primary: "Consultar disponibilitat",
      primaryRoute: "reservar",
    },
  },

  contacto: {
    seo: {
      title: "Contacte | Cal Masses",
      description:
        "Si tens qualsevol dubte sobre la teva estada, disponibilitat o com arribar-hi, pots contactar directament amb nosaltres.",
      h1: "Contacte",
    },
    intro:
      "Si tens qualsevol dubte sobre la teva estada, disponibilitat o com arribar-hi, pots contactar directament amb nosaltres.",
    arrival: "Com arribar-hi",
    saveContact: "Desar contacte",
    copyEmail: "Copiar email",
    copied: "Email copiat",
  },

  reservar: {
    seo: {
      title: "Consultar disponibilitat | Cal Masses",
      description:
        "Consulta les dates disponibles a Airbnb. Si necessites saber alguna cosa abans de venir, escriu-nos.",
      h1: "Consultar disponibilitat",
    },
    intro:
      "Consulta les dates disponibles a Airbnb. Si tens algun dubte abans de venir, escriu-nos.",
  },

  legal: {
    aviso: {
      seo: {
        title: "Avís legal | Cal Masses",
        description: TODO_LEGAL_CONTENT,
        h1: "Avís legal",
      },
      body: TODO_LEGAL_CONTENT,
    },
    privacidad: {
      seo: {
        title: "Privacitat | Cal Masses",
        description: TODO_LEGAL_CONTENT,
        h1: "Privacitat",
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
    { question: "Per a quantes persones és Cal Masses?", answer: "2" },
    {
      question: "La piscina és privada o compartida?",
      answer:
        "Compartida. Està disponible per als hostes a l'estiu; els de la casa no solen fer-la servir si hi ha gent. Exterior, sense horari fix: sentit comú.",
    },
    { question: "Hi ha cuina?", answer: "Sí" },
    {
      question: "Hi ha aparcament?",
      answer: "Sí, hi ha aparcament de sobres; hi cap qualsevol tipus de vehicle.",
    },
    { question: "Hi ha Wi-Fi?", answer: "Sí" },
    { question: "S'admeten mascotes?", answer: "No." },
    { question: "Hi poden allotjar-se nens?", answer: "Sí" },
    { question: "A quina hora és el check-in?", answer: "A partir de les 16:00." },
    { question: "A quina hora és el check-out?", answer: "Fins a les 11:00." },
    { question: "Com s'hi arriba?", answer: TODO_DATA },
    {
      question: "A quina distància és Manresa?",
      answer: "Aprox. 11 km / 20 min en cotxe.",
    },
    {
      question: "A quina distància és Montserrat?",
      answer: "Aprox. 20 km / 40 min en cotxe.",
    },
    {
      question: "Com puc consultar la disponibilitat?",
      answer:
        "Pots consultar la disponibilitat a Airbnb, o contactar per WhatsApp o email.",
    },
    {
      question: "Quina és la política de cancel·lació?",
      answer: "S'indica a Airbnb en triar les dates de la reserva.",
    },
  ],
};
