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
    guide: {
      tocTitle: "En aquesta guia",
      keepDiscovering: "Segueix descobrint",
      fromCalMasses: "Des de Cal Masses",
    },
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
      loungers: "Hamacas",
      shade: "Zona d'ombra",
      distance: "Distància a l'allotjament",
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
      title: "L'allotjament | Cal Masses, Bages",
      description:
        "Descobreix l'allotjament de Cal Masses: un espai per a dues persones a Sant Salvador de Guardiola amb cuina, piscina i natura al Bages.",
      h1: "L'allotjament",
    },
    hero: {
      paragraphs: [
        "Cal Masses és un allotjament sencer per a dues persones dins d'una finca de Sant Salvador de Guardiola, al Bages.",
        "Un espai petit i tranquil des del qual descobrir la comarca o simplement passar uns dies entre camp, vinya i natura.",
      ],
      ctaSecondary: "Veure els espais",
    },
    essentialsAria: "Dades essencials de l'allotjament",
    essentialLabels: {
      entirePlace: "Allotjament sencer",
      guests: "2 hostes",
      bedrooms: "1 dormitori",
      beds: "1 llit",
      bathrooms: "1 bany",
      kitchen: "Cuina",
      pool: "Piscina",
      wifi: "Wi-Fi",
    },
    gallery: {
      seeAll: "Veure totes les fotos",
      close: "Tancar",
    },
    intro: {
      h2: "Un espai per estar al teu aire",
      paragraphs: [
        "Cal Masses està pensat per a una estada tranquil·la de dues persones, amb els espais necessaris per passar uns dies amb comoditat i autonomia.",
        "Dins hi trobaràs dormitori, cuina, bany i zona d'estar. Fora comença bona part del que fa diferent l'estada: el camp, la vinya, els camins i la vida de la finca.",
        "Pots utilitzar Cal Masses com a punt de partida per descobrir el Bages o simplement quedar-te i gaudir del lloc.",
      ],
    },
    bedroom: {
      h2: "El dormitori",
      paragraphs: [
        "El dormitori de Cal Masses està pensat per a dues persones, amb un ambient senzill i tranquil per descansar al final del dia.",
        "Aquí no volem afegir més coses de les necessàries: un bon llit, calma i un espai còmode on tancar la porta i descansar.",
      ],
    },
    living: {
      h2: "Cuina i espai per estar al teu aire",
      paragraphs: [
        "Un dels avantatges d'allotjar-te a Cal Masses és poder organitzar els dies a la teva manera.",
        "La cuina permet preparar esmorzars, dinars o sopars sense dependre sempre de sortir, i la zona d'estar ofereix un espai còmode per descansar quan apeteix quedar-se dins.",
      ],
      equipmentTitle: "Equipament",
    },
    bathroom: {
      h2: "El bany",
      paragraphs: [
        "L'allotjament disposa d'un bany complet per a ús exclusiu dels hostes.",
      ],
    },
    exterior: {
      h2: "Piscina i vida exterior",
      paragraphs: [
        "Durant els mesos de bon temps, gran part de Cal Masses es gaudeix a fora.",
        "La piscina, les zones exteriors i el paisatge de la finca permeten passar bona part del dia sense necessitat de sortir.",
        "Esmorzar fora, llegir, banyar-se o senzillament quedar-se una estona mirant el paisatge també formen part de l'estada.",
      ],
    },
    privacy: {
      h2: "Un allotjament dins d'una finca viva",
      paragraphs: [
        "Cal Masses està dins d'una finca on també vivim i treballem.",
        "L'allotjament té els seus propis espais, però forma part d'un lloc on continua l'activitat diària de la finca, el camp i la vinya.",
        "Preferim explicar-ho amb claredat perquè sàpigues quin tipus d'estada trobaràs abans de venir.",
      ],
      h3: "Quins espais són només per a vosaltres?",
      privateLabel: "Privat",
      sharedLabel: "Compartit",
      areaLabels: {
        lodging: "Allotjament",
        pool: "Piscina",
        terrace: "Terrassa",
        garden: "Jardí",
        parking: "Pàrquing",
      },
      knowFinca: "Conèixer la finca",
    },
    services: {
      h2: "Tot el que hi trobaràs",
      categories: {
        kitchen: "Cuina",
        comfort: "Confort",
        exterior: "Exterior",
        practical: "Pràctic",
        bedroomBath: "Dormitori i bany",
      },
      items: {
        entirePlace: "Allotjament sencer",
        kitchen: "Cuina",
        wifi: "Wi-Fi",
        airConditioning: "Aire condicionat",
        heating: "Calefacció",
        pool: "Piscina",
        parking: "Pàrquing",
        jacuzzi: "Jacuzzi",
        selfCheckIn: "Arribada autònoma",
        washer: "Rentadora",
        dryer: "Assecadora",
        linens: "Roba de llit",
        towels: "Tovalloles",
        hairDryer: "Assecador",
      },
    },
    arrival: {
      h2: "Arribar i començar l'estada",
      paragraphs: [
        "Volem que l'arribada sigui senzilla i que tinguis la informació necessària abans de sortir de casa.",
        "Aquí trobaràs els horaris i les indicacions bàsiques per organitzar l'estada.",
      ],
      checkIn: "Entrada",
      checkOut: "Sortida",
      selfCheckInTitle: "Arribada autònoma",
      selfCheckInBody:
        "Pots fer l'arribada de forma autònoma seguint les instruccions que rebràs abans de l'estada.",
      parkingTitle: "Aparcament",
    },
    fit: {
      h2: "És Cal Masses per a tu?",
      yesTitle: "Probablement sí si...",
      yesItems: [
        "sou dues persones;",
        "busqueu tranquil·litat;",
        "us agrada estar a prop del camp;",
        "preferiu un allotjament petit a un complex turístic;",
        "voleu combinar descans amb Montserrat, Manresa o el Bages;",
        "valoreu poder cuinar i organitzar l'estada al vostre ritme.",
      ],
      noTitle: "Potser no és el que busqueu si...",
      noItems: [
        "viatgeu en un grup gran;",
        "busqueu estar al centre d'una ciutat;",
        "voleu els serveis propis d'un hotel;",
        "busqueu animació, recepció o restauració dins de l'allotjament.",
      ],
    },
    reviews: {
      h2: "Ho expliquen qui ja hi ha estat",
    },
    faq: {
      h2: "Abans de reservar",
      items: [
        {
          question: "L'allotjament és sencer?",
          answer: "Sí. Cal Masses és un allotjament sencer per a dues persones.",
        },
        {
          question: "Per a quantes persones és?",
          answer: "Per a 2 persones.",
        },
        {
          question: "La piscina és privada o compartida?",
          answer:
            "Piscina compartida. Està disponible per a hostes a l'estiu; els de la casa no solen fer-la servir si hi ha gent. Exterior, sense horari fix: sentit comú.",
        },
        {
          question: "Hi ha cuina equipada?",
          answer: "Sí. Hi ha cuina.",
        },
        {
          question: "Hi ha Wi-Fi?",
          answer: "Sí.",
        },
        {
          question: "Hi ha aire condicionat i calefacció?",
          answer: "Sí. Hi ha aire condicionat i calefacció.",
        },
        {
          question: "Hi ha aparcament?",
          answer: "Sí, hi ha aparcament de sobres; hi cap qualsevol tipus de vehicle.",
        },
        {
          question: "S'admeten mascotes?",
          answer: "No.",
        },
        {
          question: "Es poden allotjar nens?",
          answer: "Sí.",
        },
        {
          question: "Es pot fumar?",
          answer: TODO_DATA,
        },
        {
          question: "Es permeten festes o esdeveniments?",
          answer: "No es permeten festes ni esdeveniments.",
        },
        {
          question: "Com funciona el check-in?",
          answer: "A partir de les 16:00.",
        },
        {
          question: "Hi ha altres hostes a la finca?",
          answer:
            "Cal Masses està dins d'una finca on també vivim i treballem. L'allotjament té els seus propis espais.",
        },
        {
          question: "Quines zones són compartides?",
          answer: "La piscina és compartida.",
        },
        {
          question: "Com puc consultar disponibilitat?",
          answer:
            "Pots consultar disponibilitat a Airbnb, o contactar per WhatsApp o email.",
        },
        {
          question: "Quina és la política de cancel·lació?",
          answer: "S'indica a Airbnb en triar les dates de la reserva.",
        },
      ],
    },
    related: [
      { label: "Descobrir el Bages", route: "landingBages" },
      { label: "Allotjament rural prop de Manresa", route: "landingManresa" },
      { label: "Allotjament prop de Montserrat", route: "landingMontserrat" },
      {
        label: "Descobrir el Pla de Bages i els seus vins",
        route: "landingEnoturismo",
      },
      { label: "Conèixer SISU", route: "sisu" },
    ],
    finalCta: {
      h2: "Encaixa amb el que busques?",
      paragraphs: [
        "Consulta les dates disponibles i, si necessites resoldre algun dubte abans de venir, escriu-nos.",
      ],
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
