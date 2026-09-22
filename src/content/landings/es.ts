import { siteConfig } from "../../config/siteConfig";
import type { LandingsBundle } from "./types";

/**
 * Spanish landing copy — exact strings from the editorial brief.
 * Do not rewrite.
 */
export const landingsEs: LandingsBundle = {
  bages: {
    routeKey: "landingBages",
    status: "published",
    seo: {
      title: "Alojamiento rural en el Bages | Cal Masses",
      description:
        "Cal Masses es un alojamiento rural para dos personas en Sant Salvador de Guardiola, rodeado de campo, viñedo y naturaleza en el corazón del Bages.",
      h1: "Alojamiento rural en el Bages, entre campo y viñedos",
    },
    breadcrumb: [
      { label: "Inicio", route: "home" },
      { label: "Alojamiento rural en el Bages" },
    ],
    hero: {
      h1: "Alojamiento rural en el Bages, entre campo y viñedos",
      intro: [
        "El Bages es una comarca para recorrer sin demasiadas prisas.",
        "Montserrat, Manresa, pequeños pueblos, viñedos, caminos y bodegas conviven en un territorio donde todavía es fácil pasar rápidamente de la ciudad al campo.",
        "Cal Masses está en Sant Salvador de Guardiola, en un entorno rural rodeado de bosque, campos y viñedo. Es un alojamiento pensado para dos personas que quieren pasar unos días en el Bages y tener un lugar tranquilo al que volver después de descubrir la comarca.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
      ctaSecondary: { label: "Ver el alojamiento", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Dormir en el campo para descubrir el Bages",
        paragraphs: [
          "Alojarse en Cal Masses permite conocer el Bages desde dentro del propio paisaje.",
          "No estamos en un núcleo turístico ni en una urbanización. El alojamiento forma parte de una finca donde el campo, el viñedo y las estaciones siguen marcando buena parte del ritmo.",
          "Desde aquí puedes dedicar el día a visitar algunos de los lugares más conocidos de la comarca o simplemente quedarte cerca y disfrutar del entorno.",
          "Montserrat y Manresa son dos referencias evidentes, pero el Bages es mucho más que estos dos destinos.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Un alojamiento pensado para dos",
        paragraphs: [
          "Cal Masses es un alojamiento pequeño.",
          "Está pensado para dos personas y eso forma parte de su manera de ser.",
          "No es una gran casa rural destinada a grupos ni un complejo turístico. Es un espacio para pasar unos días con autonomía, cocinar, descansar y utilizar la finca como punto de partida para conocer la comarca.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "Entre Montserrat, Manresa y el Pla de Bages",
        paragraphs: [
          "La ubicación de Cal Masses permite combinar diferentes tipos de planes durante una misma estancia.",
          "Puedes visitar Montserrat, acercarte a Manresa, descubrir alguna bodega de la DO Pla de Bages o recorrer carreteras y caminos entre viñedos y pequeños núcleos rurales.",
          "Y también puedes decidir no hacer demasiado.",
          "Una parte importante de alojarse en el campo consiste precisamente en no tener que llenar todos los días de actividades.",
        ],
      },
      {
        h2: "Vino y paisaje",
        paragraphs: [
          "La viña forma parte de Cal Masses.",
          "Cultivamos nuestro propio viñedo y elaboramos pequeñas cantidades de vino bajo el nombre SISU.",
          "No pretendemos convertir cada estancia en una experiencia enológica organizada. Simplemente el vino forma parte de la finca y del paisaje que rodea el alojamiento.",
          "Para quien quiera profundizar más, el Pla de Bages ofrece bodegas, rutas y propuestas de enoturismo repartidas por toda la comarca.",
        ],
        cta: {
          label: "Descubrir el enoturismo en el Pla de Bages",
          route: "landingEnoturismo",
        },
        image: siteConfig.images.wine,
      },
    ],
    finalCta: {
      h2: "¿Te apetece conocer el Bages desde aquí?",
      paragraphs: [
        "Consulta las fechas disponibles y descubre Cal Masses como punto de partida para pasar unos días en la comarca.",
      ],
      primary: { label: "Consultar disponibilidad", route: "reservar" },
      secondary: { label: "Ver el alojamiento", route: "alojamiento" },
    },
    related: [
      { label: "Cerca de Manresa", route: "landingManresa" },
      { label: "Cerca de Montserrat", route: "landingMontserrat" },
      { label: "Para dos", route: "landingParaDos" },
      { label: "Enoturismo", route: "landingEnoturismo" },
    ],
    internalLinks: [
      { label: "Ver el alojamiento", route: "alojamiento" },
      { label: "Alojamiento rural cerca de Manresa", route: "landingManresa" },
      { label: "Alojamiento cerca de Montserrat", route: "landingMontserrat" },
      { label: "Alojamiento rural para dos", route: "landingParaDos" },
      { label: "Alojamiento rural con piscina", route: "landingPiscina" },
      { label: "Enoturismo en el Pla de Bages", route: "landingEnoturismo" },
      { label: "Consultar disponibilidad", route: "reservar" },
    ],
  },

  manresa: {
    routeKey: "landingManresa",
    status: "published",
    seo: {
      title: "Alojamiento rural cerca de Manresa | Cal Masses",
      description:
        "Un alojamiento rural para dos cerca de Manresa, rodeado de naturaleza, campo y viñedos. Descubre Cal Masses en Sant Salvador de Guardiola.",
      h1: "Alojamiento rural cerca de Manresa",
    },
    breadcrumb: [
      { label: "Inicio", route: "home" },
      { label: "El entorno", route: "entorno" },
      { label: "Cerca de Manresa" },
    ],
    hero: {
      h1: "Alojamiento rural cerca de Manresa",
      intro: [
        "Estar cerca de Manresa no significa tener que dormir en la ciudad.",
        "Cal Masses está en Sant Salvador de Guardiola, en un entorno de campo y naturaleza desde el que puedes acercarte a Manresa cuando quieras y volver después a la tranquilidad de la finca.",
        "Es una opción especialmente pensada para dos personas que quieren combinar Manresa con una estancia rural.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
      ctaSecondary: { label: "Ver el alojamiento", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Manresa cerca, el campo al volver",
        paragraphs: [
          "Manresa concentra buena parte de la actividad, los servicios y el patrimonio de la comarca.",
          "A pocos kilómetros, sin embargo, el paisaje cambia rápidamente.",
          "Aparecen campos, bosques, viñedos, pequeños núcleos y carreteras secundarias que explican otra parte del Bages.",
          "Cal Masses permite combinar esas dos realidades durante una misma estancia.",
          "No hace falta escoger entre ciudad y campo.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Una base tranquila para conocer la zona",
        paragraphs: [
          "Puedes utilizar Cal Masses como punto de partida para visitar Manresa, Montserrat, bodegas del Pla de Bages o distintos rincones de la comarca.",
          "La idea no es pasar el día haciendo kilómetros.",
          "También puedes regresar temprano, preparar algo de comer, disfrutar del exterior o sencillamente dejar pasar la tarde en la finca.",
        ],
      },
      {
        h2: "Para una estancia de dos personas",
        paragraphs: [
          "Cal Masses está pensado para dos huéspedes.",
          "Eso permite mantener un alojamiento pequeño y sencillo, más próximo a la idea de una escapada que a la de una gran casa rural para grupos.",
          "Dispones de los espacios necesarios para pasar unos días con autonomía y utilizar el alojamiento como quieras: como base para recorrer la zona o simplemente como lugar donde descansar.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "¿Qué puedes combinar con Manresa?",
        cards: [
          {
            title: "Montserrat",
            text: "Montserrat permite dedicar unas horas o un día entero a conocer uno de los paisajes más reconocibles de Cataluña.",
            cta: "Alojamiento cerca de Montserrat",
            route: "landingMontserrat",
          },
          {
            title: "Pla de Bages",
            text: "Viñedos, bodegas y pequeñas carreteras permiten descubrir otra cara de la comarca.",
            cta: "Enoturismo en el Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Cal Masses",
            text: "Campo, viñedo y tranquilidad al final del día.",
            cta: "Conocer Cal Masses",
            route: "finca",
          },
        ],
      },
    ],
    finalCta: {
      h2: "Dormir cerca de Manresa sin dormir en Manresa",
      paragraphs: [
        "Si buscas un alojamiento, apartamento rural o una estancia tranquila cerca de Manresa, Cal Masses ofrece una alternativa diferente a dormir en el centro de la ciudad.",
        "Consulta las fechas disponibles y decide el resto del viaje después.",
      ],
      primary: { label: "Consultar disponibilidad", route: "reservar" },
    },
    related: [
      { label: "Alojamiento rural en el Bages", route: "landingBages" },
      { label: "Cerca de Montserrat", route: "landingMontserrat" },
      { label: "Enoturismo", route: "landingEnoturismo" },
    ],
    internalLinks: [
      { label: "Ver el alojamiento", route: "alojamiento" },
      { label: "Alojamiento rural en el Bages", route: "landingBages" },
      { label: "Alojamiento cerca de Montserrat", route: "landingMontserrat" },
      { label: "Enoturismo en el Pla de Bages", route: "landingEnoturismo" },
      { label: "Consultar disponibilidad", route: "reservar" },
    ],
  },

  montserrat: {
    routeKey: "landingMontserrat",
    status: "published",
    seo: {
      title: "Alojamiento cerca de Montserrat | Cal Masses",
      description:
        "Descubre Cal Masses, un alojamiento rural para dos cerca de Montserrat, rodeado de campo y viñedos en el Bages.",
      h1: "Alojamiento cerca de Montserrat para una escapada tranquila",
    },
    breadcrumb: [
      { label: "Inicio", route: "home" },
      { label: "El entorno", route: "entorno" },
      { label: "Montserrat" },
    ],
    hero: {
      h1: "Alojamiento cerca de Montserrat para una escapada tranquila",
      intro: [
        "Visitar Montserrat no significa necesariamente tener que alojarse junto al monasterio.",
        "Cal Masses está en Sant Salvador de Guardiola, en el Bages, y permite combinar una visita a Montserrat con una estancia rodeada de campo, bosque y viñedo.",
        "Puedes dedicar parte del día a descubrir la montaña y volver después a un entorno completamente distinto.",
      ],
      image: siteConfig.images.montserrat,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
      ctaSecondary: { label: "Ver el alojamiento", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Montserrat durante el día, Cal Masses al volver",
        paragraphs: [
          "Montserrat merece tiempo.",
          "El monasterio es probablemente su punto más conocido, pero la montaña, los caminos y el paisaje permiten plantear la visita de maneras muy diferentes.",
          "Alojarte en Cal Masses permite complementar esa jornada con otra parte del territorio.",
          "Después de Montserrat puedes volver al campo, descansar, cocinar o disfrutar del exterior sin necesidad de seguir dentro de una zona turística.",
        ],
        image: siteConfig.images.exterior,
      },
      {
        h2: "No estamos en Montserrat",
        paragraphs: [
          "Preferimos explicarlo claramente.",
          "Cal Masses no es un alojamiento situado en la montaña de Montserrat ni junto al monasterio.",
          "Estamos en Sant Salvador de Guardiola, dentro de la comarca del Bages.",
          "Precisamente por eso puede ser interesante para quienes quieren visitar Montserrat pero prefieren alojarse en un entorno rural y aprovechar la estancia para conocer también Manresa, el Pla de Bages y sus viñedos.",
        ],
        showDistanceKey: "montserrat",
      },
      {
        h2: "Más cosas que hacer además de Montserrat",
        paragraphs: [
          "Si vienes más de una noche, no necesitas plantear toda la estancia alrededor de Montserrat.",
          "Puedes combinar la montaña con Manresa, alguna visita relacionada con el vino, pequeños recorridos por el Bages o simplemente tiempo en la propia finca.",
          "Cal Masses funciona mejor como punto desde el que descubrir el territorio que como alojamiento vinculado a una sola atracción.",
        ],
        cards: [
          {
            title: "Manresa",
            text: "Historia, patrimonio, gastronomía y servicios a pocos kilómetros de la finca.",
            cta: "Alojamiento rural cerca de Manresa",
            route: "landingManresa",
          },
          {
            title: "Enoturismo",
            text: "Viñedos, bodegas y pequeñas carreteras permiten descubrir otra cara de la comarca.",
            cta: "Enoturismo en el Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Bages",
            text: "Alojamiento rural en el Bages, entre campo y viñedos.",
            cta: "Alojamiento rural en el Bages",
            route: "landingBages",
          },
        ],
      },
      {
        h2: "Un alojamiento para dos",
        paragraphs: [
          "Cal Masses está pensado para dos huéspedes.",
          "Es una opción para quienes buscan una estancia pequeña, tranquila y con autonomía, lejos del formato de las grandes casas rurales para grupos.",
          "Si vienes a conocer Montserrat y quieres pasar el resto del viaje en el campo, este puede ser tu lugar.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "Montserrat es solo una parte del viaje",
      paragraphs: [
        "Consulta las fechas disponibles y descubre todo lo que puedes hacer desde Cal Masses.",
      ],
      primary: { label: "Consultar disponibilidad", route: "reservar" },
    },
    related: [
      { label: "Cerca de Manresa", route: "landingManresa" },
      { label: "Alojamiento rural en el Bages", route: "landingBages" },
      { label: "Para dos", route: "landingParaDos" },
    ],
    internalLinks: [
      { label: "Ver el alojamiento", route: "alojamiento" },
      { label: "Alojamiento rural cerca de Manresa", route: "landingManresa" },
      { label: "Alojamiento rural en el Bages", route: "landingBages" },
      { label: "Alojamiento rural para dos", route: "landingParaDos" },
      { label: "Consultar disponibilidad", route: "reservar" },
    ],
  },

  paraDos: {
    routeKey: "landingParaDos",
    status: "published",
    seo: {
      title: "Alojamiento rural para dos en el Bages | Cal Masses",
      description:
        "Una escapada rural para dos en el Bages. Campo, viñedos y naturaleza en Cal Masses, Sant Salvador de Guardiola.",
      h1: "Una escapada rural para dos en el Bages",
    },
    breadcrumb: [
      { label: "Inicio", route: "home" },
      { label: "Alojamiento", route: "alojamiento" },
      { label: "Para dos" },
    ],
    hero: {
      h1: "Una escapada rural para dos en el Bages",
      intro: [
        "No todos los alojamientos rurales tienen que estar pensados para grupos.",
        "Cal Masses es un espacio para dos personas, dentro de una finca del Bages rodeada de campo, bosque y viñedo.",
        "Un lugar desde el que descubrir la comarca o simplemente pasar unos días sin demasiados planes.",
      ],
      image: siteConfig.images.interior,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
      ctaSecondary: { label: "Ver el alojamiento", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Dos personas, un lugar pequeño y tiempo por delante",
        paragraphs: [
          "La idea de Cal Masses es sencilla.",
          "Tener un espacio cómodo donde dormir, cocinar y estar a tu aire, con el campo empezando prácticamente al salir de la puerta.",
          "No necesitas organizar cada momento de la estancia.",
          "Puedes pasar el día fuera o quedarte. Puedes acercarte a Montserrat o Manresa, visitar una bodega, pasear o sencillamente leer y descansar.",
        ],
        image: siteConfig.images.bedroom,
        showFeatureGrid: true,
      },
      {
        h2: "Pocos planes también pueden ser un buen plan",
        paragraphs: [
          "Un paseo por la mañana.",
          "Una comida tranquila.",
          "Una tarde junto a la piscina cuando está disponible y el tiempo acompaña.",
          "Una botella de vino.",
          "Una visita a Montserrat.",
          "O nada de todo eso.",
          "Cal Masses también está para los días en los que simplemente apetece no tener demasiadas cosas previstas.",
        ],
      },
      {
        h2: "Una finca que sigue funcionando",
        paragraphs: [
          "Cal Masses no es un decorado rural construido alrededor del alojamiento.",
          "Aquí seguimos cultivando, cuidando el viñedo y haciendo vino.",
          "Cada época del año tiene un ritmo distinto y el paisaje también va cambiando.",
          "El alojamiento forma parte de ese lugar.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Qué hacer si te apetece salir",
        paragraphs: [
          "Si te apetece moverte, alrededor de Cal Masses tienes suficientes opciones para llenar varios días sin necesidad de hacer grandes desplazamientos.",
        ],
        cards: [
          {
            title: "Montserrat",
            text: "Montserrat está lo bastante cerca para dedicarle una mañana o un día entero y volver después a la tranquilidad de Cal Masses.",
            cta: "Alojamiento cerca de Montserrat",
            route: "landingMontserrat",
          },
          {
            title: "Manresa",
            text: "Historia, patrimonio, gastronomía y servicios a pocos kilómetros de la finca.",
            cta: "Alojamiento rural cerca de Manresa",
            route: "landingManresa",
          },
          {
            title: "Enoturismo",
            text: "Viñedos, bodegas, paisaje rural y una cultura del vino muy ligada al territorio.",
            cta: "Enoturismo en el Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Bages",
            text: "Alojamiento rural en el Bages, entre campo y viñedos.",
            cta: "Alojamiento rural en el Bages",
            route: "landingBages",
          },
        ],
      },
    ],
    finalCta: {
      h2: "¿Buscas un lugar para dos?",
      paragraphs: ["Consulta las fechas disponibles y descubre Cal Masses."],
      primary: { label: "Consultar disponibilidad", route: "reservar" },
    },
    related: [
      { label: "Con piscina", route: "landingPiscina" },
      { label: "Cerca de Montserrat", route: "landingMontserrat" },
      { label: "Cerca de Manresa", route: "landingManresa" },
    ],
    internalLinks: [
      { label: "Ver el alojamiento", route: "alojamiento" },
      { label: "Alojamiento rural con piscina", route: "landingPiscina" },
      { label: "Alojamiento cerca de Montserrat", route: "landingMontserrat" },
      { label: "Alojamiento rural cerca de Manresa", route: "landingManresa" },
      { label: "Enoturismo en el Pla de Bages", route: "landingEnoturismo" },
      { label: "Consultar disponibilidad", route: "reservar" },
    ],
  },

  piscina: {
    routeKey: "landingPiscina",
    status: "published",
    seo: {
      title: "Alojamiento rural con piscina en el Bages | Cal Masses",
      description:
        "Alojamiento rural para dos con piscina en el Bages. Descubre Cal Masses, una finca rodeada de campo y viñedos en Sant Salvador de Guardiola.",
      h1: "Alojamiento rural con piscina en el Bages",
    },
    breadcrumb: [
      { label: "Inicio", route: "home" },
      { label: "Alojamiento", route: "alojamiento" },
      { label: "Con piscina" },
    ],
    hero: {
      h1: "Alojamiento rural con piscina en el Bages",
      intro: [
        "En verano, buena parte de Cal Masses se disfruta fuera.",
        "El campo, las zonas exteriores y la piscina permiten pasar más tiempo en la finca y plantear la estancia con todavía menos prisas.",
        "Cal Masses es un alojamiento para dos personas en Sant Salvador de Guardiola, rodeado de naturaleza y viñedos.",
      ],
      image: siteConfig.images.pool,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
    },
    sections: [
      {
        h2: "La piscina forma parte de la estancia",
        paragraphs: [
          "La piscina está integrada en el espacio exterior de Cal Masses y está disponible durante su temporada de uso.",
        ],
        showPoolFacts: true,
      },
      {
        h2: "Un día sin salir de Cal Masses",
        paragraphs: [
          "No todos los días necesitan una excursión.",
          "Cuando hace buen tiempo puedes pasar buena parte del día en la finca: desayunar fuera, leer, bañarte, cocinar o simplemente descansar.",
          "Montserrat, Manresa y el resto del Bages seguirán estando ahí al día siguiente.",
        ],
      },
      {
        h2: "Campo, viñedo y verano",
        paragraphs: [
          "El entorno de Cal Masses cambia mucho según la época del año.",
          "Durante los meses más cálidos la vida se desplaza hacia el exterior y la piscina se convierte en una parte más de esa relación con la finca.",
          "No queremos presentarla como un resort ni como una instalación aislada.",
          "Forma parte de un alojamiento rural pequeño, dentro de un paisaje agrícola.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Para dos personas",
        paragraphs: [
          "Cal Masses está pensado para dos huéspedes.",
          "Eso permite disfrutar del alojamiento, los exteriores y el entorno desde una escala mucho más tranquila que la de las grandes casas rurales destinadas a grupos.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "Para dos personas",
      paragraphs: [
        "Cal Masses está pensado para dos huéspedes.",
        "Eso permite disfrutar del alojamiento, los exteriores y el entorno desde una escala mucho más tranquila que la de las grandes casas rurales destinadas a grupos.",
      ],
      primary: { label: "Consultar disponibilidad", route: "reservar" },
    },
    related: [
      { label: "Para dos", route: "landingParaDos" },
      { label: "Alojamiento rural en el Bages", route: "landingBages" },
    ],
    internalLinks: [
      { label: "Ver el alojamiento", route: "alojamiento" },
      { label: "Alojamiento rural para dos", route: "landingParaDos" },
      { label: "Alojamiento rural en el Bages", route: "landingBages" },
      { label: "Consultar disponibilidad", route: "reservar" },
    ],
  },

  barcelona: {
    routeKey: "landingBarcelona",
    status: "published",
    seo: {
      title: "Escapada rural cerca de Barcelona | Cal Masses",
      description:
        "Una escapada rural para dos cerca de Barcelona. Descubre Cal Masses, en el Bages, entre viñedos, campo y naturaleza.",
      h1: "Una escapada rural cerca de Barcelona",
    },
    breadcrumb: [
      { label: "Inicio", route: "home" },
      { label: "Escapada rural cerca de Barcelona" },
    ],
    hero: {
      h1: "Una escapada rural cerca de Barcelona",
      intro: [
        "No hace falta irse muy lejos para cambiar completamente de paisaje.",
        "Cal Masses está en el Bages, en Sant Salvador de Guardiola, rodeado de campos, bosque y viñedos.",
        "Es un alojamiento para dos personas pensado para pasar unos días fuera de la ciudad y utilizar el tiempo de otra manera.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
      ctaSecondary: { label: "Ver el alojamiento", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Cambiar ciudad por campo durante unos días",
        paragraphs: [
          "Una escapada corta funciona mejor cuando no obliga a pasar medio viaje desplazándose.",
          "Desde Barcelona puedes plantear Cal Masses como una estancia de fin de semana o de algunos días para conocer el Bages, visitar Montserrat y Manresa o simplemente descansar en la finca.",
        ],
        showDistanceKey: "barcelona",
        image: siteConfig.images.vineyard,
      },
      {
        h2: "¿Qué puedes hacer durante un fin de semana?",
        h3Blocks: [
          {
            h3: "Llegar y bajar el ritmo",
            paragraphs: [
              "No necesitas empezar la estancia con una lista de visitas.",
              "Llegar, instalarte, cocinar algo y disfrutar del entorno puede ser suficiente para el primer día.",
            ],
          },
          {
            h3: "Descubrir el Bages",
            paragraphs: [
              "Durante el día puedes acercarte a Montserrat, visitar Manresa, descubrir alguna bodega o recorrer el territorio sin un itinerario demasiado cerrado.",
            ],
          },
          {
            h3: "Volver sin prisas",
            paragraphs: [
              "Una de las ventajas de alojarse en el campo es poder volver después de una visita y seguir disfrutando del lugar donde duermes.",
            ],
          },
        ],
      },
      {
        h2: "Para dos personas",
        paragraphs: [
          "Cal Masses es un alojamiento pequeño pensado para dos.",
          "No buscamos competir con grandes casas rurales para grupos.",
          "La propuesta es distinta: pocos huéspedes, autonomía y un entorno que invita a pasar parte del tiempo en la propia finca.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "No hace falta llenar el fin de semana",
        paragraphs: [
          "Montserrat, vino, Manresa, naturaleza o piscina pueden formar parte de la estancia.",
          "Pero también puedes utilizar Cal Masses simplemente para parar unos días.",
        ],
        cta: { label: "Consultar disponibilidad", route: "reservar" },
      },
    ],
    finalCta: {
      h2: "No hace falta llenar el fin de semana",
      paragraphs: [
        "Montserrat, vino, Manresa, naturaleza o piscina pueden formar parte de la estancia.",
        "Pero también puedes utilizar Cal Masses simplemente para parar unos días.",
      ],
      primary: { label: "Consultar disponibilidad", route: "reservar" },
    },
    related: [
      { label: "Alojamiento rural en el Bages", route: "landingBages" },
      { label: "Cerca de Montserrat", route: "landingMontserrat" },
      { label: "Cerca de Manresa", route: "landingManresa" },
      { label: "Para dos", route: "landingParaDos" },
    ],
    internalLinks: [
      { label: "Alojamiento rural en el Bages", route: "landingBages" },
      { label: "Alojamiento cerca de Montserrat", route: "landingMontserrat" },
      { label: "Alojamiento rural cerca de Manresa", route: "landingManresa" },
      { label: "Alojamiento rural para dos", route: "landingParaDos" },
      { label: "Consultar disponibilidad", route: "reservar" },
    ],
  },

  enoturismo: {
    routeKey: "landingEnoturismo",
    status: "published",
    seo: {
      title: "Enoturismo en el Pla de Bages | Cal Masses",
      description:
        "Descubre el enoturismo del Pla de Bages desde Cal Masses: alojamiento entre viñedos, vino propio y un territorio profundamente ligado a la viña.",
      h1: "Enoturismo en el Pla de Bages desde una finca con viñedo",
    },
    breadcrumb: [
      { label: "Inicio", route: "home" },
      { label: "El entorno", route: "entorno" },
      { label: "Enoturismo en el Pla de Bages" },
    ],
    hero: {
      h1: "Enoturismo en el Pla de Bages desde una finca con viñedo",
      intro: [
        "El vino no es un añadido decorativo en Cal Masses.",
        "La viña forma parte de la finca y nosotros mismos elaboramos pequeñas cantidades de vino bajo el nombre SISU.",
        "Alojarse aquí permite descubrir el Pla de Bages desde un lugar que también forma parte, a pequeña escala, de ese paisaje vitícola.",
      ],
      image: siteConfig.images.vineyard,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
      ctaSecondary: { label: "Conocer SISU", route: "sisu" },
    },
    sections: [
      {
        h2: "Un territorio marcado por la viña",
        paragraphs: [
          "El Pla de Bages mantiene una relación muy visible con el vino.",
          "Los viñedos aparecen repartidos por la comarca y conviven con bosques, campos, pequeños pueblos y numerosas construcciones de piedra seca.",
          "También hay bodegas muy diferentes entre sí, desde proyectos pequeños hasta productores con una trayectoria mucho más larga.",
          "Descubrir el vino del Bages es también una manera de entender mejor el territorio.",
        ],
      },
      {
        h2: "Dormir entre viñedos",
        paragraphs: [
          "En Cal Masses no miramos la viña desde lejos.",
          "Forma parte de la finca.",
          "Según la época del año puedes encontrarla empezando a brotar, completamente verde, acercándose a la vendimia o en pleno descanso invernal.",
          "Ese cambio continuo forma parte del paisaje que rodea el alojamiento.",
        ],
        image: siteConfig.images.wine,
      },
      {
        h2: "SISU, nuestro pequeño proyecto de vino",
        paragraphs: [
          "SISU nace de las ganas de elaborar nuestro propio vino y aprender de cada vendimia.",
          "Trabajamos en pequeñas cantidades y buscamos intervenir solo lo necesario para que la uva y cada añada mantengan su personalidad.",
          "No intentamos producir vinos idénticos año tras año.",
          "Precisamente nos interesa que cada cosecha explique algo diferente.",
        ],
        cta: { label: "Conocer SISU", route: "sisu" },
      },
      {
        h2: "Descubrir las bodegas del Pla de Bages",
        paragraphs: [
          "Cal Masses puede servir como punto de partida para conocer diferentes bodegas y propuestas de enoturismo de la comarca.",
          "No recomendamos intentar visitarlas todas.",
          "Escoger una o dos, conducir por el territorio, parar a comer y dejar tiempo para el resto del viaje suele ser una manera mucho más agradable de conocer el Pla de Bages.",
        ],
        showWineriesTodo: true,
      },
      {
        h2: "No somos una bodega turística",
        paragraphs: [
          "Cal Masses tiene viñedo y hacemos vino, pero no queremos presentar servicios que no ofrecemos.",
          "Si en el futuro existen visitas, catas u otras actividades organizadas, se añadirán aquí.",
          "Hasta entonces, el viñedo y SISU forman parte del lugar y de nuestra historia, no de un paquete turístico obligatorio.",
        ],
      },
      {
        h2: "Alojamiento y vino sin convertirlo todo en una actividad",
        paragraphs: [
          "Puedes dedicar parte de la estancia al vino y el resto a Montserrat, Manresa, la naturaleza o simplemente Cal Masses.",
          "El enoturismo no necesita ocupar todo el viaje.",
        ],
        cta: { label: "Consultar disponibilidad", route: "reservar" },
      },
    ],
    finalCta: {
      h2: "Alojamiento y vino sin convertirlo todo en una actividad",
      paragraphs: [
        "Puedes dedicar parte de la estancia al vino y el resto a Montserrat, Manresa, la naturaleza o simplemente Cal Masses.",
        "El enoturismo no necesita ocupar todo el viaje.",
      ],
      primary: { label: "Consultar disponibilidad", route: "reservar" },
    },
    related: [
      { label: "SISU", route: "sisu" },
      { label: "Cal Masses", route: "finca" },
      { label: "Alojamiento rural en el Bages", route: "landingBages" },
      { label: "Para dos", route: "landingParaDos" },
    ],
    internalLinks: [
      { label: "Conocer SISU", route: "sisu" },
      { label: "Conocer Cal Masses", route: "finca" },
      { label: "Alojamiento rural en el Bages", route: "landingBages" },
      { label: "Alojamiento rural para dos", route: "landingParaDos" },
      { label: "Consultar disponibilidad", route: "reservar" },
    ],
  },
};
