import type { ContentBundle } from "./types";
import { TODO_DATA, TODO_LEGAL_CONTENT } from "../config/siteConfig";

/** Spanish editorial copy — exact strings from the brief. */
export const contentEs: ContentBundle = {
  ui: {
    nav: {
      home: "Inicio",
      alojamiento: "Alojamiento",
      finca: "Cal Masses",
      sisu: "SISU",
      contacto: "Contacto",
      reservar: "Reservar",
      entorno: "El entorno",
      entornoBages: "El Bages",
      entornoMontserrat: "Montserrat",
      entornoManresa: "Manresa",
      entornoEnoturismo: "Enoturismo",
    },
    cta: {
      bookAirbnb: "Reservar en Airbnb",
      bookBooking: "Reservar en Booking",
      contact: "Contactar",
      discoverCalMasses: "Descubrir Cal Masses",
      seeAccommodation: "Ver el alojamiento",
      knowCalMasses: "Conocer Cal Masses",
      knowSisu: "Conocer SISU",
      discoverMontserrat: "Descubrir Montserrat",
      discoverManresa: "Descubrir Manresa",
      discoverBages: "Descubrir el Pla de Bages",
    },
    cookie: {
      message:
        "Utilizamos cookies necesarias y, si las aceptas, cookies de analítica y mapas de terceros.",
      accept: "Aceptar",
      reject: "Rechazar",
      settings: "Cookies",
    },
    footer: {
      legal: "Aviso legal",
      privacy: "Privacidad",
      cookies: "Cookies",
      discoverTitle: "Descubre Cal Masses",
      discoverBages: "Alojamiento rural en el Bages",
      discoverManresa: "Cerca de Manresa",
      discoverMontserrat: "Cerca de Montserrat",
      discoverParaDos: "Escapada para dos",
      discoverEnoturismo: "Enoturismo en el Pla de Bages",
    },
    notFound: {
      title: "Página no encontrada",
      body: "La página que buscas no existe o ha cambiado de dirección.",
      back: "Volver al inicio",
    },
    todo: {
      content: "TODO_CONTENT",
      data: "TODO_DATA",
    },
    reviewsEmpty: "Las reseñas se publicarán cuando haya testimonios aprobados.",
    faqTitle: "Preguntas frecuentes",
    locationMapConsent:
      "El mapa de Google Maps se carga solo si aceptas cookies de terceros.",
    loadMap: "Mostrar mapa",
    breadcrumbHome: "Inicio",
    facts: {
      guests: "Huéspedes",
      bedrooms: "Dormitorios",
      kitchen: "Cocina",
      pool: "Piscina",
      poolUse: "Piscina (uso)",
      parking: "Parking",
    },
  },

  home: {
    seo: {
      title: "Una escapada para dos entre viñedos y naturaleza en el Bages | Cal Masses",
      description:
        "Cal Masses es un alojamiento en Sant Salvador de Guardiola, rodeado de bosque, campo y viñedo, cerca de Manresa y Montserrat.",
      h1: "Una escapada para dos entre viñedos y naturaleza en el Bages",
    },
    hero: {
      h1: "Una escapada para dos entre viñedos y naturaleza en el Bages",
      paragraphs: [
        "Cal Masses es un alojamiento en Sant Salvador de Guardiola, rodeado de bosque, campo y viñedo, cerca de Manresa y Montserrat.",
        "Un lugar donde bajar el ritmo, disfrutar del entorno y descubrir el Pla de Bages desde una finca con vida propia.",
      ],
      ctaPrimary: "Reservar en Airbnb",
      ctaSecondary: "Descubrir Cal Masses",
    },
    accommodation: {
      h2: "Un espacio para estar a tu aire",
      paragraphs: [
        "Cal Masses está pensado para una estancia tranquila de dos personas, con los espacios necesarios para pasar unos días con comodidad y sin prisas.",
        "Dentro encontrarás las zonas de descanso, cocina, baño y sala. Fuera empieza buena parte de lo que hace diferente la estancia: el campo, el viñedo, los caminos y la vida de la finca.",
        "No queremos explicarte el alojamiento con una lista interminable de adjetivos. Aquí puedes ver los espacios, los servicios disponibles y todo lo que necesitas saber antes de venir.",
      ],
      cta: "Ver el alojamiento",
    },
    finca: {
      h2: "No vienes solo a dormir",
      paragraphs: [
        "Cal Masses es también el lugar donde vivimos y trabajamos la tierra.",
        "Alrededor del alojamiento hay campo, bosque y viñedo. Cultivamos, hacemos nuestro propio vino y seguimos dando forma a un proyecto pequeño que nace de este lugar.",
        "La estancia forma parte de ese paisaje. No es un alojamiento colocado en medio del campo para parecer rural: el campo ya estaba aquí.",
      ],
      cta: "Conocer Cal Masses",
    },
    pool: {
      h2: "Fuera también pasan cosas",
      paragraphs: [
        "Buena parte de Cal Masses se disfruta fuera: desayunar sin prisas, leer, pasear, descansar o simplemente quedarse un rato mirando el paisaje.",
        "La piscina forma parte de este espacio durante su temporada de uso.",
      ],
    },
    surroundings: {
      h2: "Montserrat, Manresa y el Pla de Bages",
      paragraphs: [
        "Cal Masses está en Sant Salvador de Guardiola, en un punto desde el que es fácil combinar naturaleza, pueblos, patrimonio, vino y gastronomía.",
        "Montserrat y Manresa son dos de las visitas más conocidas, pero el Pla de Bages merece también tiempo propio: viñedos, caminos, pequeñas bodegas y un paisaje que cambia mucho según la época del año.",
      ],
      cards: [
        {
          title: "Montserrat",
          text: "Montserrat está lo bastante cerca para dedicarle una mañana o un día entero y volver después a la tranquilidad de Cal Masses.",
          cta: "Descubrir Montserrat",
          route: "landingMontserrat",
        },
        {
          title: "Manresa",
          text: "Historia, patrimonio, gastronomía y servicios a pocos kilómetros de la finca.",
          cta: "Descubrir Manresa",
          route: "landingManresa",
        },
        {
          title: "Pla de Bages",
          text: "Viñedos, bodegas, paisaje rural y una cultura del vino muy ligada al territorio.",
          cta: "Descubrir el Pla de Bages",
          route: "landingEnoturismo",
        },
      ],
    },
    sisu: {
      h2: "También hacemos vino aquí",
      paragraphs: [
        "SISU nace del mismo lugar.",
        "El viñedo forma parte de Cal Masses y cada añada explica, a su manera, una parte de lo que pasa en la finca.",
        "Hacemos pequeñas elaboraciones con una idea sencilla: intervenir lo necesario y dejar que la uva y el año tengan algo que decir.",
      ],
      cta: "Conocer SISU",
    },
    reviews: {
      h2: "Lo cuentan quienes ya han estado aquí",
    },
    location: {
      h2: "En el Bages, entre Manresa y Montserrat",
      paragraphs: [
        "Cal Masses está en Sant Salvador de Guardiola, en la comarca del Bages.",
        "Desde aquí puedes moverte por el territorio durante el día y volver después a un entorno tranquilo, rodeado de campo y naturaleza.",
      ],
    },
    finalCta: {
      h2: "¿Te apetece pasar unos días en Cal Masses?",
      paragraphs: [
        "Reserva en Airbnb y, si necesitas saber alguna cosa antes de venir, escríbenos.",
      ],
      ctaPrimary: "Reservar en Airbnb",
      ctaSecondary: "Contactar",
    },
  },

  alojamiento: {
    seo: {
      title: "Alojamiento | Cal Masses",
      description:
        "Cal Masses está pensado para una estancia tranquila de dos personas, con los espacios necesarios para pasar unos días con comodidad y sin prisas.",
      h1: "Un espacio para estar a tu aire",
    },
    intro: [
      "Cal Masses está pensado para una estancia tranquila de dos personas, con los espacios necesarios para pasar unos días con comodidad y sin prisas.",
      "Dentro encontrarás las zonas de descanso, cocina, baño y sala. Fuera empieza buena parte de lo que hace diferente la estancia: el campo, el viñedo, los caminos y la vida de la finca.",
      "No queremos explicarte el alojamiento con una lista interminable de adjetivos. Aquí puedes ver los espacios, los servicios disponibles y todo lo que necesitas saber antes de venir.",
    ],
    sections: [],
    cta: { primary: "Reservar en Airbnb", primaryRoute: "reservar" },
  },

  finca: {
    seo: {
      title: "Cal Masses | La finca",
      description:
        "Cal Masses no empezó como un proyecto turístico. Es una finca, un lugar donde vivimos, cultivamos y hacemos vino.",
      h1: "Cal Masses",
    },
    intro: [
      "Cal Masses no empezó como un proyecto turístico.",
      "Es una finca, un lugar donde vivimos, cultivamos y hacemos vino. El alojamiento llegó después y comparte ese mismo entorno.",
      "Por eso la experiencia de quedarse aquí está inevitablemente ligada al paisaje, a las estaciones y a lo que sucede alrededor.",
    ],
    sections: [
      {
        h2: "Campo, viñedo y tiempo",
        paragraphs: [
          "Trabajar una finca significa que nunca es exactamente igual de un mes a otro.",
          "Cambian el campo, la viña, la luz y las tareas. Hay épocas de crecimiento, de vendimia, de más actividad y otras en las que todo parece ir más despacio.",
          "El alojamiento forma parte de ese ritmo, aunque cada huésped decida cuánto quiere acercarse a él.",
        ],
      },
      {
        h2: "Un proyecto pequeño",
        paragraphs: [
          "No buscamos convertir Cal Masses en un complejo turístico.",
          "Preferimos seguir siendo un lugar pequeño, cuidar lo que hacemos y permitir que quien venga pueda conocer una parte del territorio desde aquí.",
        ],
      },
    ],
  },

  sisu: {
    seo: {
      title: "SISU, vino hecho en Cal Masses | Cal Masses",
      description:
        "SISU es nuestro pequeño proyecto de vino. Nace del viñedo, de las ganas de aprender y de una manera de elaborar en la que intentamos intervenir lo necesario.",
      h1: "SISU, vino hecho en Cal Masses",
    },
    intro: [
      "SISU es nuestro pequeño proyecto de vino.",
      "Nace del viñedo, de las ganas de aprender y de una manera de elaborar en la que intentamos intervenir lo necesario y respetar todo lo posible la uva y cada añada.",
      "No buscamos que todos los vinos sean iguales. Precisamente nos interesa lo contrario: que cada año conserve algo propio.",
    ],
    sections: [],
    existingWine: {
      title: "SISU — El primer vino de Cal Masses",
      paragraphs: [
        "Te presentamos SISU, el primer vino de Cal Masses. Elaborado en la vendimia de 2024 con uva de viñas viejas de nuestro pueblo: Macabeo (80%) y Sumoll (20%).",
        "Cosechado a mano, despalillado y macerado con sus pieles durante cinco días. Luego prensado y reposado seis meses en depósito de acero inoxidable. Embotellado con el mínimo de sulfitos y sin filtrar, manteniendo su autenticidad.",
        "Es un vino que juega entre colores y estilos: un rosado muy especial, casi un “rosado de blancos”. Su color recuerda los atardeceres rojizos del Pla de Bages.",
        "En nariz, notas de piel de naranja, fruta blanca madura y un toque floral y herbáceo mediterráneo. En boca es fresco y vibrante, con la acidez del Macabeo y un punto astringente del Sumoll que evoca sabores de otoño.",
        "Ideal para disfrutarlo bien fresco con platos ligeros: ensaladas, pastas, arroces, pizzas, quesos tiernos… o simplemente solo o en buena compañía.",
        "Es un proyecto pequeño y honesto, que habla de resiliencia, identidad y de nuestro paisaje. Un brisat tradicional del Bages con una mirada actual: mínima intervención, sin maquillajes y priorizando la autenticidad.",
      ],
      footer: "Raval del Sellarès — Sant Salvador de Guardiola",
    },
    cta: { primary: "Reservar en Airbnb", primaryRoute: "reservar" },
  },

  contacto: {
    seo: {
      title: "Contacto | Cal Masses",
      description:
        "Si tienes cualquier duda sobre tu estancia, disponibilidad o cómo llegar, puedes contactar directamente con nosotros.",
      h1: "Contacto",
    },
    intro:
      "Si tienes cualquier duda sobre tu estancia, disponibilidad o cómo llegar, puedes contactar directamente con nosotros.",
    arrival: "Cómo llegar",
    saveContact: "Guardar contacto",
    copyEmail: "Copiar email",
    copied: "Email copiado",
  },

  reservar: {
    seo: {
      title: "Reservar | Cal Masses",
      description:
        "Reserva Cal Masses en Airbnb. Si necesitas saber alguna cosa antes de venir, escríbenos.",
      h1: "Reservar",
    },
    intro:
      "Puedes reservar directamente en Airbnb. Si tienes alguna duda antes de venir, escríbenos.",
  },









  legal: {
    aviso: {
      seo: {
        title: "Aviso legal | Cal Masses",
        description: TODO_LEGAL_CONTENT,
        h1: "Aviso legal",
      },
      body: TODO_LEGAL_CONTENT,
    },
    privacidad: {
      seo: {
        title: "Privacidad | Cal Masses",
        description: TODO_LEGAL_CONTENT,
        h1: "Privacidad",
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
    { question: "¿Para cuántas personas es Cal Masses?", answer: "2" },
    {
      question: "¿La piscina es privada o compartida?",
      answer:
        "Compartida. Está disponible para huéspedes en verano; los de la casa no suelen usarla si hay gente. Exterior, sin horario fijo: sentido común.",
    },
    {
      question: "¿Hay aparcamiento?",
      answer: "Sí, hay aparcamiento de sobra; cabe cualquier tipo de vehículo.",
    },
    { question: "¿Hay cocina?", answer: "Sí" },
    { question: "¿Se admiten mascotas?", answer: TODO_DATA },
    { question: "¿Pueden alojarse niños?", answer: "Sí" },
    { question: "¿A qué hora es el check-in?", answer: "A partir de las 16:00." },
    { question: "¿A qué hora es el check-out?", answer: "Hasta las 11:00." },
    { question: "¿Cómo se llega?", answer: TODO_DATA },
    {
      question: "¿A qué distancia está Montserrat?",
      answer: "Aprox. 20 km / 40 min en coche.",
    },
    {
      question: "¿A qué distancia está Manresa?",
      answer: "Aprox. 11 km / 20 min en coche.",
    },
    {
      question: "¿Cómo puedo reservar?",
      answer:
        "Puedes reservar en Airbnb, o contactar por WhatsApp o email.",
    },
    { question: "¿Cuál es la política de cancelación?", answer: TODO_DATA },
  ],
};
