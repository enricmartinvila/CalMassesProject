import { siteConfig } from "../../config/siteConfig";
import type { LandingsBundle } from "./types";

/**
 * Catalan landing copy — faithful translation of the Spanish editorial brief.
 */
export const landingsCa: LandingsBundle = {
  bages: {
    routeKey: "landingBages",
    status: "published",
    seo: {
      title: "Allotjament rural al Bages | Cal Masses",
      description:
        "Cal Masses és un allotjament rural per a dues persones a Sant Salvador de Guardiola, envoltat de camp, vinya i natura al cor del Bages.",
      h1: "Allotjament rural al Bages, entre camp i vinyes",
    },
    breadcrumb: [
      { label: "Inici", route: "home" },
      { label: "Allotjament rural al Bages" },
    ],
    hero: {
      h1: "Allotjament rural al Bages, entre camp i vinyes",
      intro: [
        "El Bages és una comarca per recórrer sense massa presses.",
        "Montserrat, Manresa, petits pobles, vinyes, camins i cellers conviuen en un territori on encara és fàcil passar ràpidament de la ciutat al camp.",
        "Cal Masses és a Sant Salvador de Guardiola, en un entorn rural envoltat de bosc, camps i vinya. És un allotjament pensat per a dues persones que volen passar uns dies al Bages i tenir un lloc tranquil on tornar després de descobrir la comarca.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Reservar a Airbnb", route: "reservar" },
      ctaSecondary: { label: "Veure l'allotjament", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Dormir al camp per descobrir el Bages",
        paragraphs: [
          "Allotjar-se a Cal Masses permet conèixer el Bages des de dins del propi paisatge.",
          "No som en un nucli turístic ni en una urbanització. L'allotjament forma part d'una finca on el camp, la vinya i les estacions continuen marcant bona part del ritme.",
          "Des d'aquí pots dedicar el dia a visitar alguns dels indrets més coneguts de la comarca o simplement quedar-te a prop i gaudir de l'entorn.",
          "Montserrat i Manresa són dues referències evidents, però el Bages és molt més que aquestes dues destinacions.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Un allotjament pensat per a dos",
        paragraphs: [
          "Cal Masses és un allotjament petit.",
          "Està pensat per a dues persones i això forma part de la seva manera de ser.",
          "No és una gran casa rural destinada a grups ni un complex turístic. És un espai per passar uns dies amb autonomia, cuinar, descansar i utilitzar la finca com a punt de partida per conèixer la comarca.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "Entre Montserrat, Manresa i el Pla de Bages",
        paragraphs: [
          "La ubicació de Cal Masses permet combinar diferents tipus de plans durant una mateixa estada.",
          "Pots visitar Montserrat, apropar-te a Manresa, descobrir algun celler de la DO Pla de Bages o recórrer carreteres i camins entre vinyes i petits nuclis rurals.",
          "I també pots decidir no fer gaire.",
          "Una part important d'allotjar-se al camp consisteix precisament a no haver d'omplir tots els dies d'activitats.",
        ],
      },
      {
        h2: "Vi i paisatge",
        paragraphs: [
          "La vinya forma part de Cal Masses.",
          "Cultivem la nostra pròpia vinya i elaborem petites quantitats de vi sota el nom SISU.",
          "No preténem convertir cada estada en una experiència enològica organitzada. Simplement el vi forma part de la finca i del paisatge que envolta l'allotjament.",
          "Per a qui vulgui aprofundir més, el Pla de Bages ofereix cellers, rutes i propostes d'enoturisme repartides per tota la comarca.",
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
        "Reserva a Airbnb i descobreix Cal Masses com a punt de partida per passar uns dies a la comarca.",
      ],
      primary: { label: "Reservar a Airbnb", route: "reservar" },
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
      { label: "Reservar a Airbnb", route: "reservar" },
    ],
  },

  manresa: {
    routeKey: "landingManresa",
    status: "published",
    seo: {
      title: "Allotjament rural a prop de Manresa | Cal Masses",
      description:
        "Un allotjament rural per a dos a prop de Manresa, envoltat de natura, camp i vinyes. Descobreix Cal Masses a Sant Salvador de Guardiola.",
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
        "Estar a prop de Manresa no significa haver de dormir a la ciutat.",
        "Cal Masses és a Sant Salvador de Guardiola, en un entorn de camp i natura des del qual pots apropar-te a Manresa quan vulguis i tornar després a la tranquil·litat de la finca.",
        "És una opció especialment pensada per a dues persones que volen combinar Manresa amb una estada rural.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Reservar a Airbnb", route: "reservar" },
      ctaSecondary: { label: "Veure l'allotjament", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Manresa a prop, el camp en tornar",
        paragraphs: [
          "Manresa concentra bona part de l'activitat, els serveis i el patrimoni de la comarca.",
          "A pocs quilòmetres, però, el paisatge canvia ràpidament.",
          "Apareixen camps, boscos, vinyes, petits nuclis i carreteres secundàries que expliquen una altra part del Bages.",
          "Cal Masses permet combinar aquestes dues realitats durant una mateixa estada.",
          "No cal escollir entre ciutat i camp.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Una base tranquil·la per conèixer la zona",
        paragraphs: [
          "Pots utilitzar Cal Masses com a punt de partida per visitar Manresa, Montserrat, cellers del Pla de Bages o diferents racons de la comarca.",
          "La idea no és passar el dia fent quilòmetres.",
          "També pots tornar aviat, preparar alguna cosa per menjar, gaudir de l'exterior o senzillament deixar passar la tarda a la finca.",
        ],
      },
      {
        h2: "Per a una estada de dues persones",
        paragraphs: [
          "Cal Masses està pensat per a dos hostes.",
          "Això permet mantenir un allotjament petit i senzill, més proper a la idea d'una escapada que a la d'una gran casa rural per a grups.",
          "Disposes dels espais necessaris per passar uns dies amb autonomia i utilitzar l'allotjament com vulguis: com a base per recórrer la zona o simplement com a lloc on descansar.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "Què pots combinar amb Manresa?",
        cards: [
          {
            title: "Montserrat",
            text: "Montserrat permet dedicar unes hores o un dia sencer a conèixer un dels paisatges més recognoscibles de Catalunya.",
            cta: "Allotjament a prop de Montserrat",
            route: "landingMontserrat",
          },
          {
            title: "Pla de Bages",
            text: "Vinyes, cellers i petites carreteres permeten descobrir una altra cara de la comarca.",
            cta: "Enoturisme al Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Cal Masses",
            text: "Camp, vinya i tranquil·litat al final del dia.",
            cta: "Conèixer Cal Masses",
            route: "finca",
          },
        ],
      },
    ],
    finalCta: {
      h2: "Dormir a prop de Manresa sense dormir a Manresa",
      paragraphs: [
        "Si busques un allotjament, apartament rural o una estada tranquil·la a prop de Manresa, Cal Masses ofereix una alternativa diferent a dormir al centre de la ciutat.",
        "Reserva a Airbnb i decideix la resta del viatge després.",
      ],
      primary: { label: "Reservar a Airbnb", route: "reservar" },
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
      { label: "Reservar a Airbnb", route: "reservar" },
    ],
  },

  montserrat: {
    routeKey: "landingMontserrat",
    status: "published",
    seo: {
      title: "Allotjament a prop de Montserrat | Cal Masses",
      description:
        "Descobreix Cal Masses, un allotjament rural per a dos a prop de Montserrat, envoltat de camp i vinyes al Bages.",
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
        "Visitar Montserrat no significa necessàriament haver d'allotjar-se junt al monestir.",
        "Cal Masses és a Sant Salvador de Guardiola, al Bages, i permet combinar una visita a Montserrat amb una estada envoltada de camp, bosc i vinya.",
        "Pots dedicar part del dia a descobrir la muntanya i tornar després a un entorn completament distint.",
      ],
      image: siteConfig.images.montserrat,
      ctaPrimary: { label: "Reservar a Airbnb", route: "reservar" },
      ctaSecondary: { label: "Veure l'allotjament", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Montserrat durant el dia, Cal Masses en tornar",
        paragraphs: [
          "Montserrat mereix temps.",
          "El monestir és probablement el seu punt més conegut, però la muntanya, els camins i el paisatge permeten plantejar la visita de maneres molt diferents.",
          "Allotjar-te a Cal Masses permet complementar aquesta jornada amb una altra part del territori.",
          "Després de Montserrat pots tornar al camp, descansar, cuinar o gaudir de l'exterior sense necessitat de continuar dins d'una zona turística.",
        ],
        image: siteConfig.images.exterior,
      },
      {
        h2: "No som a Montserrat",
        paragraphs: [
          "Preferim explicar-ho clarament.",
          "Cal Masses no és un allotjament situat a la muntanya de Montserrat ni junt al monestir.",
          "Som a Sant Salvador de Guardiola, dins de la comarca del Bages.",
          "Precisament per això pot ser interessant per a qui vulgui visitar Montserrat però prefereixi allotjar-se en un entorn rural i aprofitar l'estada per conèixer també Manresa, el Pla de Bages i les seves vinyes.",
        ],
        showDistanceKey: "montserrat",
      },
      {
        h2: "Més coses a fer a més de Montserrat",
        paragraphs: [
          "Si véns més d'una nit, no necessites plantejar tota l'estada al voltant de Montserrat.",
          "Pots combinar la muntanya amb Manresa, alguna visita relacionada amb el vi, petits recorreguts pel Bages o simplement temps a la pròpia finca.",
          "Cal Masses funciona millor com a punt des del qual descobrir el territori que com a allotjament vinculat a una sola atracció.",
        ],
        cards: [
          {
            title: "Manresa",
            text: "Història, patrimoni, gastronomia i serveis a pocs quilòmetres de la finca.",
            cta: "Allotjament rural a prop de Manresa",
            route: "landingManresa",
          },
          {
            title: "Enoturisme",
            text: "Vinyes, cellers i petites carreteres permeten descobrir una altra cara de la comarca.",
            cta: "Enoturisme al Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Bages",
            text: "Allotjament rural al Bages, entre camp i vinyes.",
            cta: "Allotjament rural al Bages",
            route: "landingBages",
          },
        ],
      },
      {
        h2: "Un allotjament per a dos",
        paragraphs: [
          "Cal Masses està pensat per a dos hostes.",
          "És una opció per a qui busca una estada petita, tranquil·la i amb autonomia, lluny del format de les grans cases rurals per a grups.",
          "Si véns a conèixer Montserrat i vols passar la resta del viatge al camp, aquest pot ser el teu lloc.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "Montserrat és només una part del viatge",
      paragraphs: [
        "Reserva a Airbnb i descobreix tot el que pots fer des de Cal Masses.",
      ],
      primary: { label: "Reservar a Airbnb", route: "reservar" },
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
      { label: "Reservar a Airbnb", route: "reservar" },
    ],
  },

  paraDos: {
    routeKey: "landingParaDos",
    status: "published",
    seo: {
      title: "Allotjament rural per a dos al Bages | Cal Masses",
      description:
        "Una escapada rural per a dos al Bages. Camp, vinyes i natura a Cal Masses, Sant Salvador de Guardiola.",
      h1: "Una escapada rural per a dos al Bages",
    },
    breadcrumb: [
      { label: "Inici", route: "home" },
      { label: "Allotjament", route: "alojamiento" },
      { label: "Per a dos" },
    ],
    hero: {
      h1: "Una escapada rural per a dos al Bages",
      intro: [
        "No tots els allotjaments rurals han d'estar pensats per a grups.",
        "Cal Masses és un espai per a dues persones, dins d'una finca del Bages envoltada de camp, bosc i vinya.",
        "Un lloc des del qual descobrir la comarca o simplement passar uns dies sense massa plans.",
      ],
      image: siteConfig.images.interior,
      ctaPrimary: { label: "Reservar a Airbnb", route: "reservar" },
      ctaSecondary: { label: "Veure l'allotjament", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Dues persones, un lloc petit i temps per davant",
        paragraphs: [
          "La idea de Cal Masses és senzilla.",
          "Tenir un espai còmode on dormir, cuinar i anar a la teva, amb el camp començant pràcticament en sortir per la porta.",
          "No necessites organitzar cada moment de l'estada.",
          "Pots passar el dia fora o quedar-te. Pots apropar-te a Montserrat o Manresa, visitar un celler, passejar o senzillament llegir i descansar.",
        ],
        image: siteConfig.images.bedroom,
        showFeatureGrid: true,
      },
      {
        h2: "Pocs plans també poden ser un bon pla",
        paragraphs: [
          "Un passeig al matí.",
          "Un dinar tranquil.",
          "Una tarda al costat de la piscina quan està disponible i el temps acompanya.",
          "Una ampolla de vi.",
          "Una visita a Montserrat.",
          "O res de tot això.",
          "Cal Masses també és per als dies en què senzillament ve de gust no tenir massa coses previstes.",
        ],
      },
      {
        h2: "Una finca que continua funcionant",
        paragraphs: [
          "Cal Masses no és un decorat rural construït al voltant de l'allotjament.",
          "Aquí continuem cultivant, cuidant la vinya i fent vi.",
          "Cada època de l'any té un ritme distint i el paisatge també va canviant.",
          "L'allotjament forma part d'aquest indret.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Què fer si et ve de gust sortir",
        paragraphs: [
          "Si et ve de gust moure't, al voltant de Cal Masses tens prou opcions per omplir diversos dies sense necessitat de fer grans desplaçaments.",
        ],
        cards: [
          {
            title: "Montserrat",
            text: "Montserrat és prou a prop per dedicar-li un matí o un dia sencer i tornar després a la tranquil·litat de Cal Masses.",
            cta: "Allotjament a prop de Montserrat",
            route: "landingMontserrat",
          },
          {
            title: "Manresa",
            text: "Història, patrimoni, gastronomia i serveis a pocs quilòmetres de la finca.",
            cta: "Allotjament rural a prop de Manresa",
            route: "landingManresa",
          },
          {
            title: "Enoturisme",
            text: "Vinyes, cellers, paisatge rural i una cultura del vi molt lligada al territori.",
            cta: "Enoturisme al Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Bages",
            text: "Allotjament rural al Bages, entre camp i vinyes.",
            cta: "Allotjament rural al Bages",
            route: "landingBages",
          },
        ],
      },
    ],
    finalCta: {
      h2: "Busques un lloc per a dos?",
      paragraphs: ["Reserva a Airbnb i descobreix Cal Masses."],
      primary: { label: "Reservar a Airbnb", route: "reservar" },
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
      { label: "Reservar a Airbnb", route: "reservar" },
    ],
  },

  piscina: {
    routeKey: "landingPiscina",
    status: "published",
    seo: {
      title: "Allotjament rural amb piscina al Bages | Cal Masses",
      description:
        "Allotjament rural per a dos amb piscina al Bages. Descobreix Cal Masses, una finca envoltada de camp i vinyes a Sant Salvador de Guardiola.",
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
        "A l'estiu, bona part de Cal Masses es gaudeix a fora.",
        "El camp, les zones exteriors i la piscina permeten passar més temps a la finca i plantejar l'estada amb encara menys presses.",
        "Cal Masses és un allotjament per a dues persones a Sant Salvador de Guardiola, envoltat de natura i vinyes.",
      ],
      image: siteConfig.images.poolCandidate,
      ctaPrimary: { label: "Reservar a Airbnb", route: "reservar" },
    },
    sections: [
      {
        h2: "La piscina forma part de l'estada",
        paragraphs: [
          "La piscina està integrada a l'espai exterior de Cal Masses i està disponible durant la seva temporada d'ús.",
        ],
        showPoolFacts: true,
      },
      {
        h2: "Un dia sense sortir de Cal Masses",
        paragraphs: [
          "No tots els dies necessiten una excursió.",
          "Quan fa bon temps pots passar bona part del dia a la finca: esmorzar a fora, llegir, banyar-te, cuinar o simplement descansar.",
          "Montserrat, Manresa i la resta del Bages continuaran sent-hi l'endemà.",
        ],
      },
      {
        h2: "Camp, vinya i estiu",
        paragraphs: [
          "L'entorn de Cal Masses canvia molt segons l'època de l'any.",
          "Durant els mesos més càlids la vida es desplaça cap a l'exterior i la piscina es converteix en una part més d'aquesta relació amb la finca.",
          "No volem presentar-la com un resort ni com una instal·lació aïllada.",
          "Forma part d'un allotjament rural petit, dins d'un paisatge agrícola.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Per a dues persones",
        paragraphs: [
          "Cal Masses està pensat per a dos hostes.",
          "Això permet gaudir de l'allotjament, els exteriors i l'entorn des d'una escala molt més tranquil·la que la de les grans cases rurals destinades a grups.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "Per a dues persones",
      paragraphs: [
        "Cal Masses està pensat per a dos hostes.",
        "Això permet gaudir de l'allotjament, els exteriors i l'entorn des d'una escala molt més tranquil·la que la de les grans cases rurals destinades a grups.",
      ],
      primary: { label: "Reservar a Airbnb", route: "reservar" },
    },
    related: [
      { label: "Per a dos", route: "landingParaDos" },
      { label: "Allotjament rural al Bages", route: "landingBages" },
    ],
    internalLinks: [
      { label: "Veure l'allotjament", route: "alojamiento" },
      { label: "Allotjament rural per a dos", route: "landingParaDos" },
      { label: "Allotjament rural al Bages", route: "landingBages" },
      { label: "Reservar a Airbnb", route: "reservar" },
    ],
  },

  barcelona: {
    routeKey: "landingBarcelona",
    status: "published",
    seo: {
      title: "Escapada rural a prop de Barcelona | Cal Masses",
      description:
        "Una escapada rural per a dos a prop de Barcelona. Descobreix Cal Masses, al Bages, entre vinyes, camp i natura.",
      h1: "Una escapada rural a prop de Barcelona",
    },
    breadcrumb: [
      { label: "Inici", route: "home" },
      { label: "Escapada rural a prop de Barcelona" },
    ],
    hero: {
      h1: "Una escapada rural a prop de Barcelona",
      intro: [
        "No cal anar-se'n gaire lluny per canviar completament de paisatge.",
        "Cal Masses és al Bages, a Sant Salvador de Guardiola, envoltat de camps, bosc i vinyes.",
        "És un allotjament per a dues persones pensat per passar uns dies fora de la ciutat i utilitzar el temps d'una altra manera.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Reservar a Airbnb", route: "reservar" },
      ctaSecondary: { label: "Veure l'allotjament", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Canviar ciutat per camp durant uns dies",
        paragraphs: [
          "Una escapada curta funciona millor quan no obliga a passar mig viatge desplaçant-se.",
          "Des de Barcelona pots plantejar Cal Masses com una estada de cap de setmana o d'alguns dies per conèixer el Bages, visitar Montserrat i Manresa o simplement descansar a la finca.",
        ],
        showDistanceKey: "barcelona",
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Què pots fer durant un cap de setmana?",
        h3Blocks: [
          {
            h3: "Arribar i baixar el ritme",
            paragraphs: [
              "No necessites començar l'estada amb una llista de visites.",
              "Arribar, instal·lar-te, cuinar alguna cosa i gaudir de l'entorn pot ser suficient per al primer dia.",
            ],
          },
          {
            h3: "Descobrir el Bages",
            paragraphs: [
              "Durant el dia pots apropar-te a Montserrat, visitar Manresa, descobrir algun celler o recórrer el territori sense un itinerari massa tancat.",
            ],
          },
          {
            h3: "Tornar sense presses",
            paragraphs: [
              "Un dels avantatges d'allotjar-se al camp és poder tornar després d'una visita i continuar gaudint del lloc on dorms.",
            ],
          },
        ],
      },
      {
        h2: "Per a dues persones",
        paragraphs: [
          "Cal Masses és un allotjament petit pensat per a dos.",
          "No busquem competir amb grans cases rurals per a grups.",
          "La proposta és distinta: pocs hostes, autonomia i un entorn que convida a passar part del temps a la pròpia finca.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "No cal omplir el cap de setmana",
        paragraphs: [
          "Montserrat, vi, Manresa, natura o piscina poden formar part de l'estada.",
          "Però també pots utilitzar Cal Masses simplement per parar uns dies.",
        ],
        cta: { label: "Reservar a Airbnb", route: "reservar" },
      },
    ],
    finalCta: {
      h2: "No cal omplir el cap de setmana",
      paragraphs: [
        "Montserrat, vi, Manresa, natura o piscina poden formar part de l'estada.",
        "Però també pots utilitzar Cal Masses simplement per parar uns dies.",
      ],
      primary: { label: "Reservar a Airbnb", route: "reservar" },
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
      { label: "Reservar a Airbnb", route: "reservar" },
    ],
  },

  enoturismo: {
    routeKey: "landingEnoturismo",
    status: "published",
    seo: {
      title: "Enoturisme al Pla de Bages | Cal Masses",
      description:
        "Descobreix l'enoturisme del Pla de Bages des de Cal Masses: allotjament entre vinyes, vi propi i un territori profundament lligat a la vinya.",
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
        "El vi no és un afegitó decoratiu a Cal Masses.",
        "La vinya forma part de la finca i nosaltres mateixos elaborem petites quantitats de vi sota el nom SISU.",
        "Allotjar-se aquí permet descobrir el Pla de Bages des d'un lloc que també forma part, a petita escala, d'aquest paisatge vitícola.",
      ],
      image: siteConfig.images.vineyard,
      ctaPrimary: { label: "Reservar a Airbnb", route: "reservar" },
      ctaSecondary: { label: "Conèixer SISU", route: "sisu" },
    },
    sections: [
      {
        h2: "Un territori marcat per la vinya",
        paragraphs: [
          "El Pla de Bages manté una relació molt visible amb el vi.",
          "Les vinyes apareixen repartides per la comarca i conviuen amb boscos, camps, petits pobles i nombroses construccions de pedra seca.",
          "També hi ha cellers molt diferents entre si, des de projectes petits fins a productors amb una trajectòria molt més llarga.",
          "Descobrir el vi del Bages és també una manera d'entendre millor el territori.",
        ],
      },
      {
        h2: "Dormir entre vinyes",
        paragraphs: [
          "A Cal Masses no mirem la vinya de lluny.",
          "Forma part de la finca.",
          "Segons l'època de l'any la pots trobar començant a brotar, completament verda, acostant-se a la verema o en ple descans hivernal.",
          "Aquest canvi continu forma part del paisatge que envolta l'allotjament.",
        ],
        image: siteConfig.images.wine,
      },
      {
        h2: "SISU, el nostre petit projecte de vi",
        paragraphs: [
          "SISU neix de les ganes d'elaborar el nostre propi vi i aprendre de cada verema.",
          "Treballem en petites quantitats i busquem intervenir només el necessari perquè el raïm i cada anyada mantinguin la seva personalitat.",
          "No intentem produir vins idèntics any rere any.",
          "Precisament ens interessa que cada collita expliqui alguna cosa diferent.",
        ],
        cta: { label: "Conèixer SISU", route: "sisu" },
      },
      {
        h2: "Descobrir els cellers del Pla de Bages",
        paragraphs: [
          "Cal Masses pot servir com a punt de partida per conèixer diferents cellers i propostes d'enoturisme de la comarca.",
          "No recomanem intentar visitar-los tots.",
          "Escollir-ne un o dos, conduir pel territori, parar a menjar i deixar temps per a la resta del viatge sol ser una manera molt més agradable de conèixer el Pla de Bages.",
        ],
        showWineriesTodo: true,
      },
      {
        h2: "No som un celler turístic",
        paragraphs: [
          "Cal Masses té vinya i fem vi, però no volem presentar serveis que no oferim.",
          "Si en el futur existeixen visites, tastets o altres activitats organitzades, s'afegiran aquí.",
          "Fins aleshores, la vinya i SISU formen part del lloc i de la nostra història, no d'un paquet turístic obligatori.",
        ],
      },
      {
        h2: "Allotjament i vi sense convertir-ho tot en una activitat",
        paragraphs: [
          "Pots dedicar part de l'estada al vi i la resta a Montserrat, Manresa, la natura o simplement Cal Masses.",
          "L'enoturisme no necessita ocupar tot el viatge.",
        ],
        cta: { label: "Reservar a Airbnb", route: "reservar" },
      },
    ],
    finalCta: {
      h2: "Allotjament i vi sense convertir-ho tot en una activitat",
      paragraphs: [
        "Pots dedicar part de l'estada al vi i la resta a Montserrat, Manresa, la natura o simplement Cal Masses.",
        "L'enoturisme no necessita ocupar tot el viatge.",
      ],
      primary: { label: "Reservar a Airbnb", route: "reservar" },
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
      { label: "Reservar a Airbnb", route: "reservar" },
    ],
  },
};
