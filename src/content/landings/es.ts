import { ratingSnippet } from "../../config/siteConfig";
import { siteConfig } from "../../config/siteConfig";
import type { LandingsBundle } from "./types";

const R = ratingSnippet("es");

/**
 * Spanish landing copy. Only confirmed facts about the property
 * (see siteConfig); the practical guide blocks live in content/guides.
 */
export const landingsEs: LandingsBundle = {
  bages: {
    routeKey: "landingBages",
    status: "published",
    seo: {
      title: "Casa rural en el Bages, entre viñedos | Cal Masses",
      description:
        `${R}. Casa rural entera para dos en una finca con viñedo y bosque en Sant Salvador de Guardiola, a 20 min de Manresa y cerca de Montserrat.`,
      h1: "Casa rural en el Bages, entre campo y viñedos",
    },
    breadcrumb: [
      { label: "Inicio", route: "home" },
      { label: "Casa rural en el Bages" },
    ],
    hero: {
      h1: "Casa rural en el Bages, entre campo y viñedos",
      intro: [
        "Cal Masses es una casa rural para dos personas en Sant Salvador de Guardiola, en pleno Bages. Forma parte de una finca con viñedo propio, bosque y campos de cultivo.",
        "Desde aquí, Manresa queda a unos 20 minutos y Montserrat a poco más. Puedes pasar el día recorriendo la comarca y volver por la tarde a un sitio tranquilo, con jacuzzi, patio privado y cocina para prepararte la cena.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
      ctaSecondary: { label: "Ver el alojamiento", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Una finca en activo, no una urbanización",
        paragraphs: [
          "Cal Masses no está en un núcleo turístico. El alojamiento está dentro de una finca agrícola en la que se sigue cultivando la viña y donde el paisaje cambia con las estaciones: brotación en primavera, verde intenso en verano, vendimia a finales de verano y reposo en invierno.",
          "Esa es la principal diferencia con dormir en Manresa o junto a Montserrat. Al volver de las visitas no estás en una calle ni en un aparcamiento, sino en el campo, con caminos que salen directamente de la finca.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Qué incluye el alojamiento",
        paragraphs: [
          "Es un espacio pequeño, para dos huéspedes, y se alquila entero: no compartes cocina, baño ni patio con nadie. Tiene dormitorio, cocina equipada, baño con jacuzzi, aire acondicionado y calefacción.",
          "En la finca hay además una piscina exterior de agua salada, compartida y abierta en verano, bicicletas y aparcamiento gratuito. La llegada es autónoma a partir de las 16:00.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "Una comarca que se recorre en coche y sin prisas",
        paragraphs: [
          "El Bages está en el centro de Cataluña y su capital es Manresa. Tiene monumentos conocidos, como el monasterio de Montserrat, la Seu de Manresa o el castillo de Cardona, pero también una red de carreteras secundarias entre viñas, pueblos pequeños y construcciones de piedra seca.",
          "Lo más cómodo es moverse en coche y escoger una o dos visitas al día. Más abajo tienes los lugares principales con el tiempo aproximado desde Cal Masses, según la época del año y cuántos días conviene quedarse.",
        ],
      },
      {
        h2: "Vino propio y DO Pla de Bages",
        paragraphs: [
          "En Cal Masses cultivamos nuestra propia viña y elaboramos pequeñas cantidades de vino con el nombre SISU. No organizamos catas ni visitas: el vino forma parte de la finca, no de un paquete turístico.",
          "Si te interesa el vino, la comarca tiene su propia denominación de origen, la DO Pla de Bages, con bodegas que abren con cita previa y una variedad de uva autóctona, la picapoll.",
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
        "Mira las fechas disponibles. La entrada es a partir de las 16:00 y la salida hasta las 11:00.",
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
      { label: "Casa rural cerca de Manresa", route: "landingManresa" },
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
      title: "Casa rural a 20 min de Manresa, para dos | Cal Masses",
      description:
        `Casa rural para dos a 11 km de Manresa, en una finca con viñedo. Jacuzzi, patio privado, piscina en verano y parking gratis. ${R}.`,
      h1: "Casa rural cerca de Manresa",
    },
    breadcrumb: [
      { label: "Inicio", route: "home" },
      { label: "El entorno", route: "entorno" },
      { label: "Cerca de Manresa" },
    ],
    hero: {
      h1: "Casa rural cerca de Manresa",
      intro: [
        "Cal Masses está en Sant Salvador de Guardiola, a unos 11 km de Manresa (unos 20 minutos en coche). Es una casa rural para dos personas dentro de una finca con viñedo y bosque.",
        "Tienes la ciudad cerca para visitar la Seu, comer o hacer la compra, y por la noche duermes en el campo, con aparcamiento gratuito en la finca.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
      ctaSecondary: { label: "Ver el alojamiento", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Manresa de día, el campo por la noche",
        paragraphs: [
          "Manresa es la capital del Bages y concentra el patrimonio más visitado de la comarca: la Seu gótica sobre el río Cardener, el Pont Vell, el casco antiguo y la Cova de Sant Ignasi, punto final del Camí Ignasià.",
          "En cuanto sales de la ciudad, el paisaje cambia en pocos kilómetros: campos, bosque y viñas. Cal Masses está en ese paisaje, así que puedes combinar las dos cosas en la misma estancia sin tener que escoger.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Por qué no dormir en el centro",
        paragraphs: [
          "Si vienes a Manresa por trabajo, por el Camí Ignasià o para visitar la comarca, un alojamiento en las afueras tiene ventajas prácticas: aparcamiento gratuito en la finca, espacio exterior y cocina propia para no depender de restaurantes cada día.",
          "A cambio, necesitas coche. El transporte público hasta Sant Salvador de Guardiola es limitado, así que lo más habitual es llegar en coche o en tren a Manresa y seguir por carretera.",
        ],
      },
      {
        h2: "El alojamiento, para dos personas",
        paragraphs: [
          "Cal Masses se alquila entero y está pensado para dos huéspedes: dormitorio, cocina equipada, baño con jacuzzi y patio privado. Hay aire acondicionado y calefacción, y en verano piscina exterior de agua salada compartida.",
          "La llegada es autónoma a partir de las 16:00, así que puedes pasar por Manresa a hacer la compra y llegar a la hora que te vaya bien.",
        ],
        showFeatureGrid: true,
      },
      {
        h2: "Qué combinar con Manresa",
        cards: [
          {
            title: "Montserrat",
            text: "El monasterio y el macizo, a una distancia que permite ir por la mañana y volver a comer o descansar.",
            cta: "Alojamiento cerca de Montserrat",
            route: "landingMontserrat",
          },
          {
            title: "Pla de Bages",
            text: "Bodegas de la DO, viñas y tinas de piedra seca repartidas por la comarca.",
            cta: "Enoturismo en el Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Cal Masses",
            text: "La finca: viñedo propio, bosque, caminos y el vino SISU.",
            cta: "Conocer Cal Masses",
            route: "finca",
          },
        ],
      },
    ],
    finalCta: {
      h2: "Dormir cerca de Manresa sin dormir en Manresa",
      paragraphs: [
        "Si buscas un alojamiento o apartamento rural cerca de Manresa, consulta las fechas disponibles. La salida es hasta las 11:00, con tiempo para una última vuelta por la ciudad.",
      ],
      primary: { label: "Consultar disponibilidad", route: "reservar" },
    },
    related: [
      { label: "Casa rural en el Bages", route: "landingBages" },
      { label: "Cerca de Montserrat", route: "landingMontserrat" },
      { label: "Enoturismo", route: "landingEnoturismo" },
    ],
    internalLinks: [
      { label: "Ver el alojamiento", route: "alojamiento" },
      { label: "Casa rural en el Bages", route: "landingBages" },
      { label: "Alojamiento cerca de Montserrat", route: "landingMontserrat" },
      { label: "Enoturismo en el Pla de Bages", route: "landingEnoturismo" },
      { label: "Consultar disponibilidad", route: "reservar" },
    ],
  },

  montserrat: {
    routeKey: "landingMontserrat",
    status: "published",
    seo: {
      title: "Casa rural a 25 min de Montserrat | Cal Masses",
      description:
        `Duerme a 25 min de Montserrat en una finca con viñedo del Bages. Alojamiento para dos con jacuzzi, patio privado, piscina en verano y parking. ${R}.`,
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
        "Cal Masses es un alojamiento rural para dos personas en Sant Salvador de Guardiola, en el Bages, a unos 20 km del monasterio de Montserrat.",
        "Permite subir temprano, antes de que lleguen la mayoría de visitantes, y volver por la tarde a una finca con viñedo, jacuzzi y patio privado.",
      ],
      image: siteConfig.images.montserrat,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
      ctaSecondary: { label: "Ver el alojamiento", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Llegar antes que los autocares",
        paragraphs: [
          "La mayoría de visitantes de Montserrat sube desde Barcelona y llega a media mañana. Saliendo desde Cal Masses después de desayunar, puedes estar arriba bastante antes, con menos cola para ver la Moreneta y los caminos más vacíos.",
          "Si prefieres no subir en coche hasta el monasterio, también puedes dejarlo abajo y subir en cremallera o teleférico. Más abajo explicamos las opciones, qué ver arriba y qué ruta escoger según el tiempo que tengas.",
        ],
        image: siteConfig.images.exterior,
      },
      {
        h2: "No estamos en la montaña, y eso tiene ventajas",
        paragraphs: [
          "Para que quede claro: Cal Masses no está en Montserrat ni junto al monasterio. Está en la comarca del Bages, a la distancia que indicamos aquí debajo.",
          "Dormir fuera de la montaña tiene ventajas: no dependes de los horarios del recinto, tienes cocina propia y espacio exterior, y puedes repartir la estancia entre Montserrat, Manresa y las bodegas del Pla de Bages.",
        ],
        showDistanceKey: "montserrat",
      },
      {
        h2: "Más allá de Montserrat",
        paragraphs: [
          "Con dos o más noches no hace falta organizar todo el viaje alrededor de la montaña. La segunda jornada puede ser para Manresa, una bodega o simplemente para quedarse en la finca.",
        ],
        cards: [
          {
            title: "Manresa",
            text: "La Seu, el Pont Vell y la Cova de Sant Ignasi, a unos 20 minutos de la finca.",
            cta: "Casa rural cerca de Manresa",
            route: "landingManresa",
          },
          {
            title: "Enoturismo",
            text: "Bodegas de la DO Pla de Bages, la uva picapoll y las tinas de piedra seca.",
            cta: "Enoturismo en el Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Bages",
            text: "Cardona, Món Sant Benet y Sant Llorenç del Munt, todo a menos de una hora.",
            cta: "Casa rural en el Bages",
            route: "landingBages",
          },
        ],
      },
      {
        h2: "Un alojamiento para dos",
        paragraphs: [
          "Cal Masses se alquila entero para dos huéspedes: dormitorio, cocina equipada, baño con jacuzzi y patio privado, con aire acondicionado y calefacción.",
          "En verano hay una piscina exterior de agua salada en la finca, compartida. El aparcamiento es gratuito.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "Montserrat es solo una parte del viaje",
      paragraphs: [
        "Consulta las fechas disponibles. Entre semana Montserrat está mucho más tranquila, así que vale la pena mirar también esos días.",
      ],
      primary: { label: "Consultar disponibilidad", route: "reservar" },
    },
    related: [
      { label: "Cerca de Manresa", route: "landingManresa" },
      { label: "Casa rural en el Bages", route: "landingBages" },
      { label: "Para dos", route: "landingParaDos" },
    ],
    internalLinks: [
      { label: "Ver el alojamiento", route: "alojamiento" },
      { label: "Casa rural cerca de Manresa", route: "landingManresa" },
      { label: "Casa rural en el Bages", route: "landingBages" },
      { label: "Alojamiento rural para dos", route: "landingParaDos" },
      { label: "Consultar disponibilidad", route: "reservar" },
    ],
  },

  paraDos: {
    routeKey: "landingParaDos",
    status: "published",
    seo: {
      title: "Escapada romántica con jacuzzi en el Bages | Cal Masses",
      description:
        `Alojamiento solo para dos, con jacuzzi y patio privado, entre viñedos y bosque en el Bages. Escapada en pareja a 1 h de Barcelona. ${R}.`,
      h1: "Una escapada para dos con jacuzzi en el Bages",
    },
    breadcrumb: [
      { label: "Inicio", route: "home" },
      { label: "Alojamiento", route: "alojamiento" },
      { label: "Para dos" },
    ],
    hero: {
      h1: "Una escapada para dos con jacuzzi en el Bages",
      intro: [
        "Cal Masses es un alojamiento rural pensado solo para dos personas, en una finca con viñedo y bosque de Sant Salvador de Guardiola, en el Bages.",
        "Se alquila entero: el dormitorio, la cocina, el baño con jacuzzi y el patio son solo para vosotros. Está a algo más de una hora de Barcelona.",
      ],
      image: siteConfig.images.interior,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
      ctaSecondary: { label: "Ver el alojamiento", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Pensado para dos, no adaptado para dos",
        paragraphs: [
          "Muchas casas rurales están pensadas para grupos y se alquilan también a parejas. Cal Masses es al revés: tiene la medida justa para dos personas, de forma que no sobran habitaciones ni espacios vacíos.",
          "Tiene dormitorio, cocina equipada para cocinar de verdad, aire acondicionado y calefacción, y un patio privado con mesa para desayunar o cenar fuera. La llegada es autónoma, sin horarios de recepción.",
        ],
        image: siteConfig.images.bedroom,
        showFeatureGrid: true,
      },
      {
        h2: "El jacuzzi, dentro del alojamiento",
        paragraphs: [
          "El jacuzzi está en el baño del alojamiento y es solo para vosotros. Al ser interior, se puede usar todo el año: en invierno, después de un día en Montserrat, o en verano, a última hora.",
          "En verano la finca tiene además una piscina exterior de agua salada. Es compartida y no tiene horario fijo.",
        ],
        image: siteConfig.images.jacuzzi,
      },
      {
        h2: "Una finca que sigue funcionando",
        paragraphs: [
          "El alojamiento no es un decorado rural. Está dentro de una finca donde se cultiva la viña y se elabora en pequeñas cantidades el vino SISU. En la finca viven también gallinas y gatos.",
          "Desde la puerta salen caminos entre campos y bosque para pasear o salir con las bicicletas de la finca.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Si os apetece salir",
        paragraphs: [
          "Alrededor tenéis planes para varios días sin hacer muchos kilómetros. También podéis no hacer ninguno.",
        ],
        cards: [
          {
            title: "Montserrat",
            text: "Subid temprano, caminad por la parte alta y volved a comer al patio.",
            cta: "Alojamiento cerca de Montserrat",
            route: "landingMontserrat",
          },
          {
            title: "Manresa",
            text: "La Seu, el casco antiguo y el mercado, a unos 20 minutos.",
            cta: "Casa rural cerca de Manresa",
            route: "landingManresa",
          },
          {
            title: "Enoturismo",
            text: "Una visita con cata en una bodega de la DO Pla de Bages, con cita previa.",
            cta: "Enoturismo en el Pla de Bages",
            route: "landingEnoturismo",
          },
          {
            title: "Bages",
            text: "Cardona, Món Sant Benet y pueblos pequeños entre viñas.",
            cta: "Casa rural en el Bages",
            route: "landingBages",
          },
        ],
      },
    ],
    finalCta: {
      h2: "¿Buscáis un lugar para dos?",
      paragraphs: [
        "Consultad las fechas disponibles. Con dos noches da tiempo a hacer una excursión y a disfrutar de la finca sin prisas.",
      ],
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
      { label: "Casa rural cerca de Manresa", route: "landingManresa" },
      { label: "Enoturismo en el Pla de Bages", route: "landingEnoturismo" },
      { label: "Consultar disponibilidad", route: "reservar" },
    ],
  },

  piscina: {
    routeKey: "landingPiscina",
    status: "published",
    seo: {
      title: "Casa rural con piscina en el Bages | Cal Masses",
      description:
        `Piscina exterior de agua salada (compartida, en verano) en una finca con viñedo del Bages. Alojamiento para dos con jacuzzi y patio privado. ${R}.`,
      h1: "Casa rural con piscina en el Bages",
    },
    breadcrumb: [
      { label: "Inicio", route: "home" },
      { label: "Alojamiento", route: "alojamiento" },
      { label: "Con piscina" },
    ],
    hero: {
      h1: "Casa rural con piscina en el Bages",
      intro: [
        "Cal Masses es una casa rural para dos personas en Sant Salvador de Guardiola, en una finca con viñedo y bosque. En verano, la finca tiene una piscina exterior de agua salada.",
        "Es una forma de pasar el calor del interior de Cataluña: excursión por la mañana y tarde en el agua, sin coger el coche.",
      ],
      image: siteConfig.images.pool,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
    },
    sections: [
      {
        h2: "Cómo es la piscina",
        paragraphs: [
          "Es una piscina exterior de agua salada, abierta en temporada de verano y sin horario fijo. Es compartida: no es de uso exclusivo del alojamiento. Estos son los datos confirmados:",
        ],
        showPoolFacts: true,
      },
      {
        h2: "Agua salada: qué cambia",
        paragraphs: [
          "Una piscina de agua salada se sigue desinfectando con cloro, pero el cloro se genera a partir de la sal disuelta. Para el bañista, la diferencia es que el agua suele resultar más suave para la piel y los ojos y tiene menos olor a cloro.",
          "No es agua de mar: la concentración de sal es mucho menor que la del mar.",
        ],
      },
      {
        h2: "Fuera de temporada, el jacuzzi",
        paragraphs: [
          "La piscina solo abre en verano. El resto del año, el alojamiento tiene un jacuzzi interior en el baño, de uso exclusivo para los huéspedes, que funciona en cualquier estación.",
          "Si lo que buscas es agua en invierno o en primavera, el jacuzzi es lo que tendrás. Más abajo tienes una comparación de las dos opciones mes a mes.",
        ],
        image: siteConfig.images.vineyard,
      },
      {
        h2: "El alojamiento, para dos",
        paragraphs: [
          "Cal Masses se alquila entero para dos huéspedes: dormitorio, cocina equipada, baño con jacuzzi y patio privado para comer fuera en las noches de verano. Tiene aire acondicionado, algo que se agradece en julio y agosto.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "¿Vienes en verano?",
      paragraphs: [
        "Consulta las fechas disponibles. La piscina abre en temporada de verano; si dudas de si estará abierta en tus fechas, pregúntanos antes de reservar.",
      ],
      primary: { label: "Consultar disponibilidad", route: "reservar" },
    },
    related: [
      { label: "Para dos", route: "landingParaDos" },
      { label: "Casa rural en el Bages", route: "landingBages" },
    ],
    internalLinks: [
      { label: "Ver el alojamiento", route: "alojamiento" },
      { label: "Alojamiento rural para dos", route: "landingParaDos" },
      { label: "Casa rural en el Bages", route: "landingBages" },
      { label: "Consultar disponibilidad", route: "reservar" },
    ],
  },

  barcelona: {
    routeKey: "landingBarcelona",
    status: "published",
    seo: {
      title: "Escapada rural a 1 h de Barcelona, entre viñedos | Cal Masses",
      description:
        `A 1 h 10 min de Barcelona: alojamiento rural para dos con jacuzzi en una finca con viñedo del Bages, cerca de Montserrat. ${R}.`,
      h1: "Una escapada rural cerca de Barcelona",
    },
    breadcrumb: [
      { label: "Inicio", route: "home" },
      { label: "Escapada rural cerca de Barcelona" },
    ],
    hero: {
      h1: "Una escapada rural cerca de Barcelona",
      intro: [
        "Cal Masses está a unos 65 km de Barcelona, alrededor de 1 h 10 min en coche, en Sant Salvador de Guardiola, en el Bages.",
        "Es un alojamiento rural para dos personas en una finca con viñedo y bosque, con jacuzzi y patio privado. Está cerca de Montserrat y de Manresa, así que funciona bien para un fin de semana sin pasar medio viaje en la carretera.",
      ],
      image: siteConfig.images.exterior,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
      ctaSecondary: { label: "Ver el alojamiento", route: "alojamiento" },
    },
    sections: [
      {
        h2: "Lo bastante cerca para un fin de semana",
        paragraphs: [
          "Una escapada de dos días funciona mejor cuando el trayecto no se come el viaje. Saliendo de Barcelona el viernes por la tarde llegas a la hora de cenar, y el domingo puedes volver con calma después del check-out de las 11:00.",
          "Si no tienes coche, el tren llega a Manresa, pero desde allí hace falta coche o taxi: el transporte público rural es limitado.",
        ],
        showDistanceKey: "barcelona",
        image: siteConfig.images.vineyard,
      },
      {
        h2: "Qué cambia respecto a la ciudad",
        h3Blocks: [
          {
            h3: "Espacio y calma",
            paragraphs: [
              "El alojamiento está en una finca agrícola rodeada de campos y bosque. Al volver de las visitas no hay calles ni tráfico de ciudad, sino campo y caminos que salen de la misma finca.",
            ],
          },
          {
            h3: "Cocinar sin prisa",
            paragraphs: [
              "La cocina está equipada y el patio es privado. Lo más práctico es comprar en Manresa de camino y cenar en casa.",
            ],
          },
          {
            h3: "Planes a menos de una hora",
            paragraphs: [
              "Montserrat, Manresa, las bodegas del Pla de Bages y el castillo de Cardona. O no salir de la finca.",
            ],
          },
        ],
      },
      {
        h2: "Para dos personas",
        paragraphs: [
          "Cal Masses es un alojamiento pequeño que se alquila entero: dormitorio, cocina, baño con jacuzzi y patio, con aire acondicionado y calefacción. En verano hay una piscina exterior de agua salada en la finca, compartida.",
          "No es una casa rural para grupos. Si venís más de dos personas, no es el lugar adecuado.",
        ],
        showFeatureGrid: true,
      },
    ],
    finalCta: {
      h2: "No hace falta llenar el fin de semana",
      paragraphs: [
        "Montserrat, vino, Manresa o piscina pueden formar parte de la estancia, pero también puedes venir simplemente a parar. Consulta las fechas disponibles.",
      ],
      primary: { label: "Consultar disponibilidad", route: "reservar" },
    },
    related: [
      { label: "Casa rural en el Bages", route: "landingBages" },
      { label: "Cerca de Montserrat", route: "landingMontserrat" },
      { label: "Cerca de Manresa", route: "landingManresa" },
      { label: "Para dos", route: "landingParaDos" },
    ],
    internalLinks: [
      { label: "Casa rural en el Bages", route: "landingBages" },
      { label: "Alojamiento cerca de Montserrat", route: "landingMontserrat" },
      { label: "Casa rural cerca de Manresa", route: "landingManresa" },
      { label: "Alojamiento rural para dos", route: "landingParaDos" },
      { label: "Consultar disponibilidad", route: "reservar" },
    ],
  },

  enoturismo: {
    routeKey: "landingEnoturismo",
    status: "published",
    seo: {
      title: "Enoturismo Pla de Bages: duerme entre viñedos | Cal Masses",
      description:
        `Bodegas de la DO Pla de Bages, uva picapoll y tinas de piedra seca, desde una finca con viña y vino propio (SISU). Alojamiento para dos. ${R}.`,
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
        "Cal Masses es un alojamiento rural para dos personas en Sant Salvador de Guardiola, dentro de una finca con viña propia. Aquí elaboramos en pequeñas cantidades el vino SISU.",
        "Es un buen punto de partida para conocer las bodegas de la DO Pla de Bages y volver a dormir entre viñas, sin tener que conducir lejos después de una cata.",
      ],
      image: siteConfig.images.vineyard,
      ctaPrimary: { label: "Consultar disponibilidad", route: "reservar" },
      ctaSecondary: { label: "Conocer SISU", route: "sisu" },
    },
    sections: [
      {
        h2: "Una comarca con mucha historia vinícola",
        paragraphs: [
          "El Bages fue una de las grandes zonas vinícolas de Cataluña hasta que la filoxera arrasó las viñas a finales del siglo XIX. De aquella época quedan las tinas: depósitos de piedra seca construidos en medio de las viñas para fermentar el vino allí mismo.",
          "Hoy la DO Pla de Bages reúne bodegas de distintos tamaños y tiene como variedad propia la picapoll, una uva blanca muy ligada a la comarca.",
        ],
      },
      {
        h2: "Dormir dentro de una viña",
        paragraphs: [
          "En Cal Masses la viña no se mira de lejos: forma parte de la finca. Según cuándo vengas, la encontrarás brotando en primavera, verde en verano, a punto de vendimia a finales de verano o en reposo en invierno.",
          "Tiene sentido si te interesa el vino, porque ves de cerca el ciclo que después explican en las bodegas.",
        ],
        image: siteConfig.images.wine,
      },
      {
        h2: "SISU, nuestro vino",
        paragraphs: [
          "SISU es nuestro pequeño proyecto de vino. Elaboramos pocas botellas, con la mínima intervención posible, y no buscamos que cada añada sea igual a la anterior: nos interesa que cada vendimia se note.",
        ],
        cta: { label: "Conocer SISU", route: "sisu" },
      },
      {
        h2: "Cómo visitar las bodegas de la DO",
        paragraphs: [
          "Casi todas las bodegas del Pla de Bages abren con cita previa, así que conviene reservar la visita antes de venir. Suelen ofrecer un recorrido por la viña o la bodega y una cata al final.",
          "No hace falta intentar verlas todas. Una o dos visitas por estancia, con tiempo para comer por la zona, suele ser mejor plan que encadenar catas.",
        ],
        showWineriesTodo: true,
      },
      {
        h2: "Lo que no ofrecemos",
        paragraphs: [
          "Cal Masses no es una bodega con visitas: ahora mismo no organizamos catas ni actividades de enoturismo. Si en el futuro las hacemos, lo indicaremos aquí.",
          "El viñedo y SISU forman parte del lugar y de nuestra historia, no de un paquete turístico.",
        ],
      },
      {
        h2: "Después de un día de bodegas",
        paragraphs: [
          "Al volver, el alojamiento es solo para vosotros: cocina equipada para cenar en casa, patio privado y baño con jacuzzi. Al estar en el centro del Pla de Bages, los trayectos desde las bodegas son cortos.",
        ],
      },
    ],
    finalCta: {
      h2: "Vino, sin convertirlo todo en una actividad",
      paragraphs: [
        "Dedica una mañana a una bodega y el resto de la estancia a Montserrat, Manresa o la finca. Consulta las fechas disponibles.",
      ],
      primary: { label: "Consultar disponibilidad", route: "reservar" },
    },
    related: [
      { label: "SISU", route: "sisu" },
      { label: "Cal Masses", route: "finca" },
      { label: "Casa rural en el Bages", route: "landingBages" },
      { label: "Para dos", route: "landingParaDos" },
    ],
    internalLinks: [
      { label: "Conocer SISU", route: "sisu" },
      { label: "Conocer Cal Masses", route: "finca" },
      { label: "Casa rural en el Bages", route: "landingBages" },
      { label: "Alojamiento rural para dos", route: "landingParaDos" },
      { label: "Consultar disponibilidad", route: "reservar" },
    ],
  },
};
