import { ratingSnippet } from "../../config/siteConfig";
import { siteConfig } from "../../config/siteConfig";
import type { LandingsBundle } from "./types";

const R = ratingSnippet("ca");

/**
 * Catalan landing copy. Only confirmed facts about the property
 * (see siteConfig); the practical guide blocks live in content/guides.
 */
export const landingsCa: LandingsBundle = {
  bages: {
    routeKey: "landingBages",
    status: "published",
    seo: {
      title: "Allotjament rural al Bages, entre vinyes | Cal Masses",
      description:
        `${R}. Allotjament rural sencer per a dos en una finca amb vinya i bosc a Sant Salvador de Guardiola, a 20 min de Manresa i a prop de Montserrat.`,
      h1: "Allotjament rural al Bages, entre camp i vinyes",
    },
    breadcrumb: [
      { label: "Inici", route: "home" },
      { label: "Allotjament rural al Bages" },
    ],
    hero: {
      h1: "Allotjament rural al Bages, entre camp i vinyes",
      intro: [
        "Cal Masses és un allotjament rural per a dues persones a Sant Salvador de Guardiola, en ple Bages. Forma part d'una finca amb vinya pròpia, bosc i camps de conreu.",
        "Des d'aquí, Manresa queda a uns 20 minuts i Montserrat a poc més. Pots passar el dia recorrent la comarca i tornar a la tarda a un lloc tranquil, amb jacuzzi, pati privat i cuina per preparar-te el sopar.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Consultar disponibilitat", route: "reservar" },
      ctaSecondary: { label: "Veure l'allotjament", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Una finca en actiu, no una urbanització",
        paragraphs: [
          "Cal Masses no és en un nucli turístic. L'allotjament és dins d'una finca agrícola on es continua conreant la vinya i on el paisatge canvia amb les estacions: brotada a la primavera, verd intens a l'estiu, verema a finals d'estiu i repòs a l'hivern.",
          "Aquesta és la diferència principal amb dormir a Manresa o al costat de Montserrat. En tornar de les visites no ets en un carrer ni en un aparcament, sinó al camp, amb camins que surten directament de la finca.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Què inclou l'allotjament",
        paragraphs: [
          "És un espai petit, per a dos hostes, i es lloga sencer: no comparteixes cuina, bany ni pati amb ningú. Té dormitori, cuina equipada, bany amb jacuzzi, aire condicionat i calefacció.",
          "A la finca hi ha a més una piscina exterior d'aigua salada, compartida i oberta a l'estiu, bicicletes i aparcament gratuït. L'arribada és autònoma a partir de les 16:00.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "Una comarca per recórrer en cotxe i sense presses",
        paragraphs: [
          "El Bages és al centre de Catalunya i la seva capital és Manresa. Té monuments coneguts, com el monestir de Montserrat, la Seu de Manresa o el castell de Cardona, però també una xarxa de carreteres secundàries entre vinyes, pobles petits i construccions de pedra seca.",
          "El més còmode és moure's en cotxe i triar una o dues visites al dia. Més avall tens els llocs principals amb el temps aproximat des de Cal Masses, segons l'època de l'any i quants dies convé quedar-se.",
        ],
      },
      {
        h2: "Vi propi i DO Pla de Bages",
        paragraphs: [
          "A Cal Masses conreem la nostra pròpia vinya i elaborem petites quantitats de vi amb el nom SISU. No organitzem tastos ni visites: el vi forma part de la finca, no d'un paquet turístic.",
          "Si t'interessa el vi, la comarca té la seva pròpia denominació d'origen, la DO Pla de Bages, amb cellers que obren amb cita prèvia i una varietat de raïm autòctona, el picapoll.",
        ],
        cta: {
          label: "Descobrir l'enoturisme al Pla de Bages",
          route: "landingEnoturismo",
        },
        image: siteConfig.images.wine,
      },
    ],
    finalCta: {
      h2: "Et ve de gust conèixer el Bages des d'aquí?",
      paragraphs: [
        "Mira les dates disponibles. L'entrada és a partir de les 16:00 i la sortida fins a les 11:00.",
      ],
      primary: { label: "Consultar disponibilitat", route: "reservar" },
      secondary: { label: "Veure l'allotjament", route: "alojamiento" },
    },
    related: [
      { label: "A prop de Manresa", route: "landingManresa" },
      { label: "A prop de Montserrat", route: "landingMontserrat" },
      { label: "Per a dos", route: "landingParaDos" },
      { label: "Enoturisme", route: "landingEnoturismo" },
    ],
    internalLinks: [
      { label: "Veure l'allotjament", route: "alojamiento" },
      { label: "Allotjament rural a prop de Manresa", route: "landingManresa" },
      { label: "Allotjament a prop de Montserrat", route: "landingMontserrat" },
      { label: "Allotjament rural per a dos", route: "landingParaDos" },
      { label: "Allotjament rural amb piscina", route: "landingPiscina" },
      { label: "Enoturisme al Pla de Bages", route: "landingEnoturismo" },
      { label: "Consultar disponibilitat", route: "reservar" },
    ],
  },

  manresa: {
    routeKey: "landingManresa",
    status: "published",
    seo: {
      title: "Allotjament rural a 20 min de Manresa | Cal Masses",
      description:
        `Allotjament rural per a dos a 11 km de Manresa, en una finca amb vinya. Jacuzzi, pati privat, piscina a l'estiu i pàrquing gratuït. ${R}.`,
      h1: "Allotjament rural a prop de Manresa",
    },
    breadcrumb: [
      { label: "Inici", route: "home" },
      { label: "L'entorn", route: "entorno" },
      { label: "A prop de Manresa" },
    ],
    hero: {
      h1: "Allotjament rural a prop de Manresa",
      intro: [
        "Cal Masses és a Sant Salvador de Guardiola, a uns 11 km de Manresa (uns 20 minuts en cotxe). És un allotjament rural per a dues persones dins d'una finca amb vinya i bosc.",
        "Tens la ciutat a prop per visitar la Seu, dinar o fer la compra, i a la nit dorms al camp, amb aparcament gratuït a la finca.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Consultar disponibilitat", route: "reservar" },
      ctaSecondary: { label: "Veure l'allotjament", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Manresa de dia, el camp a la nit",
        paragraphs: [
          "Manresa és la capital del Bages i concentra el patrimoni més visitat de la comarca: la Seu gòtica sobre el riu Cardener, el Pont Vell, el nucli antic i la Cova de Sant Ignasi, punt final del Camí Ignasià.",
          "Així que surts de la ciutat, el paisatge canvia en pocs quilòmetres: camps, bosc i vinyes. Cal Masses és en aquest paisatge, de manera que pots combinar les dues coses en la mateixa estada sense haver de triar.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Per què no dormir al centre",
        paragraphs: [
          "Si véns a Manresa per feina, pel Camí Ignasià o per visitar la comarca, un allotjament als afores té avantatges pràctics: aparcament gratuït a la finca, espai exterior i cuina pròpia per no dependre de restaurants cada dia.",
          "A canvi, necessites cotxe. El transport públic fins a Sant Salvador de Guardiola és limitat, així que el més habitual és arribar en cotxe o en tren a Manresa i continuar per carretera.",
        ],
      },
      {
        h2: "L'allotjament, per a dues persones",
        paragraphs: [
          "Cal Masses es lloga sencer i està pensat per a dos hostes: dormitori, cuina equipada, bany amb jacuzzi i pati privat. Hi ha aire condicionat i calefacció, i a l'estiu piscina exterior d'aigua salada compartida.",
          "L'arribada és autònoma a partir de les 16:00, així que pots passar per Manresa a fer la compra i arribar a l'hora que et vagi bé.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "Què combinar amb Manresa",
        cards: [
          {
            title: "Montserrat",
            text: "El monestir i el massís, a una distància que permet anar-hi al matí i tornar a dinar o descansar.",
            cta: "Allotjament a prop de Montserrat",
            route: "landingMontserrat",
          },
          {
            title: "Pla de Bages",
            text: "Cellers de la DO, vinyes i tines de pedra seca repartides per la comarca.",
            cta: "Enoturisme al Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Cal Masses",
            text: "La finca: vinya pròpia, bosc, camins i el vi SISU.",
            cta: "Conèixer Cal Masses",
            route: "finca",
          },
        ],
      },
    ],
    finalCta: {
      h2: "Dormir a prop de Manresa sense dormir a Manresa",
      paragraphs: [
        "Si busques un allotjament o apartament rural a prop de Manresa, consulta les dates disponibles. La sortida és fins a les 11:00, amb temps per a una última volta per la ciutat.",
      ],
      primary: { label: "Consultar disponibilitat", route: "reservar" },
    },
    related: [
      { label: "Allotjament rural al Bages", route: "landingBages" },
      { label: "A prop de Montserrat", route: "landingMontserrat" },
      { label: "Enoturisme", route: "landingEnoturismo" },
    ],
    internalLinks: [
      { label: "Veure l'allotjament", route: "alojamiento" },
      { label: "Allotjament rural al Bages", route: "landingBages" },
      { label: "Allotjament a prop de Montserrat", route: "landingMontserrat" },
      { label: "Enoturisme al Pla de Bages", route: "landingEnoturismo" },
      { label: "Consultar disponibilitat", route: "reservar" },
    ],
  },

  montserrat: {
    routeKey: "landingMontserrat",
    status: "published",
    seo: {
      title: "Allotjament rural a 25 min de Montserrat | Cal Masses",
      description:
        `Dorm a 25 min de Montserrat en una finca amb vinya del Bages. Allotjament per a dos amb jacuzzi, pati privat, piscina a l'estiu i pàrquing. ${R}.`,
      h1: "Allotjament a prop de Montserrat per a una escapada tranquil·la",
    },
    breadcrumb: [
      { label: "Inici", route: "home" },
      { label: "L'entorn", route: "entorno" },
      { label: "Montserrat" },
    ],
    hero: {
      h1: "Allotjament a prop de Montserrat per a una escapada tranquil·la",
      intro: [
        "Cal Masses és un allotjament rural per a dues persones a Sant Salvador de Guardiola, al Bages, a uns 20 km del monestir de Montserrat.",
        "Permet pujar d'hora, abans que arribin la majoria de visitants, i tornar a la tarda a una finca amb vinya, jacuzzi i pati privat.",
      ],
      image: siteConfig.images.montserrat,
      ctaPrimary: { label: "Consultar disponibilitat", route: "reservar" },
      ctaSecondary: { label: "Veure l'allotjament", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Arribar abans que els autocars",
        paragraphs: [
          "La majoria de visitants de Montserrat puja des de Barcelona i arriba a mig matí. Sortint de Cal Masses després d'esmorzar, pots ser-hi dalt força abans, amb menys cua per veure la Moreneta i els camins més buits.",
          "Si prefereixes no pujar en cotxe fins al monestir, també pots deixar-lo a baix i pujar amb el cremallera o l'aeri. Més avall expliquem les opcions, què veure a dalt i quina ruta triar segons el temps que tinguis.",
        ],
        image: siteConfig.images.exterior,
      },
      {
        h2: "No som a la muntanya, i això té avantatges",
        paragraphs: [
          "Perquè quedi clar: Cal Masses no és a Montserrat ni al costat del monestir. És a la comarca del Bages, a la distància que indiquem aquí sota.",
          "Dormir fora de la muntanya té avantatges: no depens dels horaris del recinte, tens cuina pròpia i espai exterior, i pots repartir l'estada entre Montserrat, Manresa i els cellers del Pla de Bages.",
        ],
        showDistanceKey: "montserrat",
      },
      {
        h2: "Més enllà de Montserrat",
        paragraphs: [
          "Amb dues nits o més no cal organitzar tot el viatge al voltant de la muntanya. La segona jornada pot ser per a Manresa, un celler o simplement per quedar-se a la finca.",
        ],
        cards: [
          {
            title: "Manresa",
            text: "La Seu, el Pont Vell i la Cova de Sant Ignasi, a uns 20 minuts de la finca.",
            cta: "Allotjament rural a prop de Manresa",
            route: "landingManresa",
          },
          {
            title: "Enoturisme",
            text: "Cellers de la DO Pla de Bages, el raïm picapoll i les tines de pedra seca.",
            cta: "Enoturisme al Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Bages",
            text: "Cardona, Món Sant Benet i Sant Llorenç del Munt, tot a menys d'una hora.",
            cta: "Allotjament rural al Bages",
            route: "landingBages",
          },
        ],
      },
      {
        h2: "Un allotjament per a dos",
        paragraphs: [
          "Cal Masses es lloga sencer per a dos hostes: dormitori, cuina equipada, bany amb jacuzzi i pati privat, amb aire condicionat i calefacció.",
          "A l'estiu hi ha una piscina exterior d'aigua salada a la finca, compartida. L'aparcament és gratuït.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "Montserrat és només una part del viatge",
      paragraphs: [
        "Consulta les dates disponibles. Entre setmana Montserrat és molt més tranquil·la, així que val la pena mirar també aquests dies.",
      ],
      primary: { label: "Consultar disponibilitat", route: "reservar" },
    },
    related: [
      { label: "A prop de Manresa", route: "landingManresa" },
      { label: "Allotjament rural al Bages", route: "landingBages" },
      { label: "Per a dos", route: "landingParaDos" },
    ],
    internalLinks: [
      { label: "Veure l'allotjament", route: "alojamiento" },
      { label: "Allotjament rural a prop de Manresa", route: "landingManresa" },
      { label: "Allotjament rural al Bages", route: "landingBages" },
      { label: "Allotjament rural per a dos", route: "landingParaDos" },
      { label: "Consultar disponibilitat", route: "reservar" },
    ],
  },

  paraDos: {
    routeKey: "landingParaDos",
    status: "published",
    seo: {
      title: "Escapada romàntica amb jacuzzi al Bages | Cal Masses",
      description:
        `Allotjament només per a dos, amb jacuzzi i pati privat, entre vinyes i bosc al Bages. Escapada en parella a 1 h de Barcelona. ${R}.`,
      h1: "Una escapada per a dos amb jacuzzi al Bages",
    },
    breadcrumb: [
      { label: "Inici", route: "home" },
      { label: "Allotjament", route: "alojamiento" },
      { label: "Per a dos" },
    ],
    hero: {
      h1: "Una escapada per a dos amb jacuzzi al Bages",
      intro: [
        "Cal Masses és un allotjament rural pensat només per a dues persones, en una finca amb vinya i bosc de Sant Salvador de Guardiola, al Bages.",
        "Es lloga sencer: el dormitori, la cuina, el bany amb jacuzzi i el pati són només per a vosaltres. És a poc més d'una hora de Barcelona.",
      ],
      image: siteConfig.images.interior,
      ctaPrimary: { label: "Consultar disponibilitat", route: "reservar" },
      ctaSecondary: { label: "Veure l'allotjament", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Pensat per a dos, no adaptat per a dos",
        paragraphs: [
          "Moltes cases rurals estan pensades per a grups i es lloguen també a parelles. Cal Masses és al revés: té la mida justa per a dues persones, de manera que no sobren habitacions ni espais buits.",
          "Té dormitori, cuina equipada per cuinar de debò, aire condicionat i calefacció, i un pati privat amb taula per esmorzar o sopar a fora. L'arribada és autònoma, sense horaris de recepció.",
        ],
        image: siteConfig.images.bedroom,
        showFeatureGrid: true,
      },
      {
        h2: "El jacuzzi, dins l'allotjament",
        paragraphs: [
          "El jacuzzi és al bany de l'allotjament i és només per a vosaltres. Com que és interior, es pot fer servir tot l'any: a l'hivern, després d'un dia a Montserrat, o a l'estiu, a última hora.",
          "A l'estiu la finca té a més una piscina exterior d'aigua salada. És compartida i no té horari fix.",
        ],
        image: siteConfig.images.jacuzzi,
      },
      {
        h2: "Una finca que continua funcionant",
        paragraphs: [
          "L'allotjament no és un decorat rural. És dins d'una finca on es conrea la vinya i s'elabora en petites quantitats el vi SISU. A la finca també hi viuen gallines i gats.",
          "Des de la porta surten camins entre camps i bosc per passejar o sortir amb les bicicletes de la finca.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Si us ve de gust sortir",
        paragraphs: [
          "Al voltant teniu plans per a uns quants dies sense fer gaires quilòmetres. També podeu no fer-ne cap.",
        ],
        cards: [
          {
            title: "Montserrat",
            text: "Pugeu d'hora, camineu per la part alta i torneu a dinar al pati.",
            cta: "Allotjament a prop de Montserrat",
            route: "landingMontserrat",
          },
          {
            title: "Manresa",
            text: "La Seu, el nucli antic i el mercat, a uns 20 minuts.",
            cta: "Allotjament rural a prop de Manresa",
            route: "landingManresa",
          },
          {
            title: "Enoturisme",
            text: "Una visita amb tast en un celler de la DO Pla de Bages, amb cita prèvia.",
            cta: "Enoturisme al Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Bages",
            text: "Cardona, Món Sant Benet i pobles petits entre vinyes.",
            cta: "Allotjament rural al Bages",
            route: "landingBages",
          },
        ],
      },
    ],
    finalCta: {
      h2: "Busqueu un lloc per a dos?",
      paragraphs: [
        "Consulteu les dates disponibles. Amb dues nits hi ha temps per fer una excursió i gaudir de la finca sense presses.",
      ],
      primary: { label: "Consultar disponibilitat", route: "reservar" },
    },
    related: [
      { label: "Amb piscina", route: "landingPiscina" },
      { label: "A prop de Montserrat", route: "landingMontserrat" },
      { label: "A prop de Manresa", route: "landingManresa" },
    ],
    internalLinks: [
      { label: "Veure l'allotjament", route: "alojamiento" },
      { label: "Allotjament rural amb piscina", route: "landingPiscina" },
      { label: "Allotjament a prop de Montserrat", route: "landingMontserrat" },
      { label: "Allotjament rural a prop de Manresa", route: "landingManresa" },
      { label: "Enoturisme al Pla de Bages", route: "landingEnoturismo" },
      { label: "Consultar disponibilitat", route: "reservar" },
    ],
  },

  piscina: {
    routeKey: "landingPiscina",
    status: "published",
    seo: {
      title: "Allotjament rural amb piscina al Bages | Cal Masses",
      description:
        `Piscina exterior d'aigua salada (compartida, a l'estiu) en una finca amb vinya del Bages. Allotjament per a dos amb jacuzzi i pati privat. ${R}.`,
      h1: "Allotjament rural amb piscina al Bages",
    },
    breadcrumb: [
      { label: "Inici", route: "home" },
      { label: "Allotjament", route: "alojamiento" },
      { label: "Amb piscina" },
    ],
    hero: {
      h1: "Allotjament rural amb piscina al Bages",
      intro: [
        "Cal Masses és un allotjament rural per a dues persones a Sant Salvador de Guardiola, en una finca amb vinya i bosc. A l'estiu, la finca té una piscina exterior d'aigua salada.",
        "És una manera de passar la calor de la Catalunya interior: excursió al matí i tarda a l'aigua, sense agafar el cotxe.",
      ],
      image: siteConfig.images.pool,
      ctaPrimary: { label: "Consultar disponibilitat", route: "reservar" },
    },
    sections: [
      {
        h2: "Com és la piscina",
        paragraphs: [
          "És una piscina exterior d'aigua salada, oberta en temporada d'estiu i sense horari fix. És compartida: no és d'ús exclusiu de l'allotjament. Aquestes són les dades confirmades:",
        ],
        showPoolFacts: true,
      },
      {
        h2: "Aigua salada: què canvia",
        paragraphs: [
          "Una piscina d'aigua salada es continua desinfectant amb clor, però el clor es genera a partir de la sal dissolta. Per al banyista, la diferència és que l'aigua sol ser més suau per a la pell i els ulls i fa menys olor de clor.",
          "No és aigua de mar: la concentració de sal és molt més baixa que la del mar.",
        ],
      },
      {
        h2: "Fora de temporada, el jacuzzi",
        paragraphs: [
          "La piscina només obre a l'estiu. La resta de l'any, l'allotjament té un jacuzzi interior al bany, d'ús exclusiu per als hostes, que funciona en qualsevol estació.",
          "Si el que busques és aigua a l'hivern o a la primavera, el jacuzzi és el que tindràs. Més avall tens una comparació de les dues opcions mes a mes.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "L'allotjament, per a dos",
        paragraphs: [
          "Cal Masses es lloga sencer per a dos hostes: dormitori, cuina equipada, bany amb jacuzzi i pati privat per menjar a fora les nits d'estiu. Té aire condicionat, cosa que s'agraeix al juliol i a l'agost.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "Véns a l'estiu?",
      paragraphs: [
        "Consulta les dates disponibles. La piscina obre en temporada d'estiu; si dubtes de si estarà oberta en les teves dates, pregunta'ns abans de reservar.",
      ],
      primary: { label: "Consultar disponibilitat", route: "reservar" },
    },
    related: [
      { label: "Per a dos", route: "landingParaDos" },
      { label: "Allotjament rural al Bages", route: "landingBages" },
    ],
    internalLinks: [
      { label: "Veure l'allotjament", route: "alojamiento" },
      { label: "Allotjament rural per a dos", route: "landingParaDos" },
      { label: "Allotjament rural al Bages", route: "landingBages" },
      { label: "Consultar disponibilitat", route: "reservar" },
    ],
  },

  barcelona: {
    routeKey: "landingBarcelona",
    status: "published",
    seo: {
      title: "Escapada rural a 1 h de Barcelona, entre vinyes | Cal Masses",
      description:
        `A 1 h 10 min de Barcelona: allotjament rural per a dos amb jacuzzi en una finca amb vinya del Bages, a prop de Montserrat. ${R}.`,
      h1: "Una escapada rural a prop de Barcelona",
    },
    breadcrumb: [
      { label: "Inici", route: "home" },
      { label: "Escapada rural a prop de Barcelona" },
    ],
    hero: {
      h1: "Una escapada rural a prop de Barcelona",
      intro: [
        "Cal Masses és a uns 65 km de Barcelona, al voltant d'1 h 10 min en cotxe, a Sant Salvador de Guardiola, al Bages.",
        "És un allotjament rural per a dues persones en una finca amb vinya i bosc, amb jacuzzi i pati privat. És a prop de Montserrat i de Manresa, així que funciona bé per a un cap de setmana sense passar mig viatge a la carretera.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Consultar disponibilitat", route: "reservar" },
      ctaSecondary: { label: "Veure l'allotjament", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Prou a prop per a un cap de setmana",
        paragraphs: [
          "Una escapada de dos dies funciona millor quan el trajecte no es menja el viatge. Sortint de Barcelona divendres a la tarda arribes a l'hora de sopar, i diumenge pots tornar amb calma després del check-out de les 11:00.",
          "Si no tens cotxe, el tren arriba a Manresa, però des d'allà cal cotxe o taxi: el transport públic rural és limitat.",
        ],
        showDistanceKey: "barcelona",
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Què canvia respecte a la ciutat",
        h3Blocks: [
          {
            h3: "Espai i calma",
            paragraphs: [
              "L'allotjament és en una finca agrícola envoltada de camps i bosc. En tornar de les visites no hi ha carrers ni trànsit de ciutat, sinó camp i camins que surten de la mateixa finca.",
            ],
          },
          {
            h3: "Cuinar sense presses",
            paragraphs: [
              "La cuina és equipada i el pati és privat. El més pràctic és comprar a Manresa de camí i sopar a casa.",
            ],
          },
          {
            h3: "Plans a menys d'una hora",
            paragraphs: [
              "Montserrat, Manresa, els cellers del Pla de Bages i el castell de Cardona. O no sortir de la finca.",
            ],
          },
        ],
      },
      {
        h2: "Per a dues persones",
        paragraphs: [
          "Cal Masses és un allotjament petit que es lloga sencer: dormitori, cuina, bany amb jacuzzi i pati, amb aire condicionat i calefacció. A l'estiu hi ha una piscina exterior d'aigua salada a la finca, compartida.",
          "No és una casa rural per a grups. Si veniu més de dues persones, no és el lloc adequat.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "No cal omplir el cap de setmana",
      paragraphs: [
        "Montserrat, vi, Manresa o piscina poden formar part de l'estada, però també pots venir simplement a aturar-te. Consulta les dates disponibles.",
      ],
      primary: { label: "Consultar disponibilitat", route: "reservar" },
    },
    related: [
      { label: "Allotjament rural al Bages", route: "landingBages" },
      { label: "A prop de Montserrat", route: "landingMontserrat" },
      { label: "A prop de Manresa", route: "landingManresa" },
      { label: "Per a dos", route: "landingParaDos" },
    ],
    internalLinks: [
      { label: "Allotjament rural al Bages", route: "landingBages" },
      { label: "Allotjament a prop de Montserrat", route: "landingMontserrat" },
      { label: "Allotjament rural a prop de Manresa", route: "landingManresa" },
      { label: "Allotjament rural per a dos", route: "landingParaDos" },
      { label: "Consultar disponibilitat", route: "reservar" },
    ],
  },

  enoturismo: {
    routeKey: "landingEnoturismo",
    status: "published",
    seo: {
      title: "Enoturisme Pla de Bages: dorm entre vinyes | Cal Masses",
      description:
        `Cellers de la DO Pla de Bages, raïm picapoll i tines de pedra seca, des d'una finca amb vinya i vi propi (SISU). Allotjament per a dos. ${R}.`,
      h1: "Enoturisme al Pla de Bages des d'una finca amb vinya",
    },
    breadcrumb: [
      { label: "Inici", route: "home" },
      { label: "L'entorn", route: "entorno" },
      { label: "Enoturisme al Pla de Bages" },
    ],
    hero: {
      h1: "Enoturisme al Pla de Bages des d'una finca amb vinya",
      intro: [
        "Cal Masses és un allotjament rural per a dues persones a Sant Salvador de Guardiola, dins d'una finca amb vinya pròpia. Aquí elaborem en petites quantitats el vi SISU.",
        "És un bon punt de partida per conèixer els cellers de la DO Pla de Bages i tornar a dormir entre vinyes, sense haver de conduir lluny després d'un tast.",
      ],
      image: siteConfig.images.vineyard,
      ctaPrimary: { label: "Consultar disponibilitat", route: "reservar" },
      ctaSecondary: { label: "Conèixer SISU", route: "sisu" },
    },
    sections: [
      {
        h2: "Una comarca amb molta història vinícola",
        paragraphs: [
          "El Bages va ser una de les grans zones vinícoles de Catalunya fins que la fil·loxera va arrasar les vinyes a finals del segle XIX. D'aquella època queden les tines: dipòsits de pedra seca construïts enmig de les vinyes per fermentar-hi el vi allà mateix.",
          "Avui la DO Pla de Bages reuneix cellers de mides diferents i té com a varietat pròpia el picapoll, un raïm blanc molt lligat a la comarca.",
        ],
      },
      {
        h2: "Dormir dins d'una vinya",
        paragraphs: [
          "A Cal Masses la vinya no es mira de lluny: forma part de la finca. Segons quan vinguis, la trobaràs brotant a la primavera, verda a l'estiu, a punt de verema a finals d'estiu o en repòs a l'hivern.",
          "Té sentit si t'interessa el vi, perquè veus de prop el cicle que després t'expliquen als cellers.",
        ],
        image: siteConfig.images.wine,
      },
      {
        h2: "SISU, el nostre vi",
        paragraphs: [
          "SISU és el nostre petit projecte de vi. Elaborem poques ampolles, amb la mínima intervenció possible, i no busquem que cada anyada sigui igual que l'anterior: ens interessa que cada verema es noti.",
        ],
        cta: { label: "Conèixer SISU", route: "sisu" },
      },
      {
        h2: "Com visitar els cellers de la DO",
        paragraphs: [
          "Gairebé tots els cellers del Pla de Bages obren amb cita prèvia, així que convé reservar la visita abans de venir. Solen oferir un recorregut per la vinya o el celler i un tast al final.",
          "No cal intentar veure'ls tots. Una o dues visites per estada, amb temps per dinar per la zona, sol ser millor pla que encadenar tastos.",
        ],
        showWineriesTodo: true,
      },
      {
        h2: "El que no oferim",
        paragraphs: [
          "Cal Masses no és un celler amb visites: ara mateix no organitzem tastos ni activitats d'enoturisme. Si en el futur en fem, ho indicarem aquí.",
          "La vinya i SISU formen part del lloc i de la nostra història, no d'un paquet turístic.",
        ],
      },
      {
        h2: "Després d'un dia de cellers",
        paragraphs: [
          "En tornar, l'allotjament és només per a vosaltres: cuina equipada per sopar a casa, pati privat i bany amb jacuzzi. Com que és al centre del Pla de Bages, els trajectes des dels cellers són curts.",
        ],
      },
    ],
    finalCta: {
      h2: "Vi, sense convertir-ho tot en una activitat",
      paragraphs: [
        "Dedica un matí a un celler i la resta de l'estada a Montserrat, Manresa o la finca. Consulta les dates disponibles.",
      ],
      primary: { label: "Consultar disponibilitat", route: "reservar" },
    },
    related: [
      { label: "SISU", route: "sisu" },
      { label: "Cal Masses", route: "finca" },
      { label: "Allotjament rural al Bages", route: "landingBages" },
      { label: "Per a dos", route: "landingParaDos" },
    ],
    internalLinks: [
      { label: "Conèixer SISU", route: "sisu" },
      { label: "Conèixer Cal Masses", route: "finca" },
      { label: "Allotjament rural al Bages", route: "landingBages" },
      { label: "Allotjament rural per a dos", route: "landingParaDos" },
      { label: "Consultar disponibilitat", route: "reservar" },
    ],
  },
};
