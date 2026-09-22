import type { ContentBundle } from "./types";
import { TODO_DATA, TODO_LEGAL_CONTENT } from "../config/siteConfig";

/** Spanish editorial copy — exact strings from the quality brief. */
export const contentEs: ContentBundle = {
  ui: {
    nav: {
      home: "Inicio",
      alojamiento: "Alojamiento",
      finca: "Cal Masses",
      sisu: "SISU",
      contacto: "Contacto",
      reservar: "Consultar disponibilidad",
      entorno: "El entorno",
      entornoBages: "El Bages",
      entornoMontserrat: "Montserrat",
      entornoManresa: "Manresa",
      entornoEnoturismo: "Enoturismo",
    },
    cta: {
      availability: "Consultar disponibilidad",
      contact: "Contactar",
      seeAccommodation: "Ver el alojamiento",
      seeAccommodationFull: "Ver el alojamiento completo",
      knowCalMasses: "Conocer Cal Masses",
      knowSisu: "Conocer SISU",
      discoverMontserrat: "Descubrir Montserrat",
      discoverManresa: "Descubrir Manresa",
      discoverBages: "Descubrir el Pla de Bages",
      seeMoreReviews: "Ver más opiniones",
    },
    cookie: {
      message:
        "Utilizamos cookies necesarias y, si las aceptas, cookies de analítica y mapas de terceros.",
      accept: "Aceptar",
      reject: "Rechazar",
      settings: "Cookies",
    },
    footer: {
      brandTitle: "Cal Masses",
      stayTitle: "Tu estancia",
      entornoTitle: "El entorno",
      legal: "Aviso legal",
      privacy: "Privacidad",
      cookies: "Cookies",
      paraDos: "Para dos",
      piscina: "Piscina",
      laFinca: "La finca",
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
    faqTitle: "Antes de venir",
    galleryTitle: "Galería",
    galleryTabs: {
      all: "Todas",
      alojamiento: "Alojamiento",
      exterior: "Exterior",
      piscina: "Piscina",
      finca: "Finca y viñedo",
      sisu: "SISU",
    },
    locationMapConsent:
      "El mapa de Google Maps se carga solo si aceptas cookies de terceros.",
    loadMap: "Mostrar mapa",
    breadcrumbHome: "Inicio",
    facts: {
      guests: "Huéspedes",
      bedrooms: "Dormitorio",
      beds: "Camas",
      bathrooms: "Baño",
      kitchen: "Cocina",
      pool: "Piscina",
      poolUse: "Uso de la piscina",
      parking: "Parking",
      wifi: "Wi-Fi",
      climate: "Climatización",
      location: "Ubicación",
      checkIn: "Check-in",
      checkOut: "Check-out",
      pets: "Mascotas",
      children: "Niños",
      jacuzzi: "Jacuzzi",
    },
    poolLabels: {
      use: "Uso",
      season: "Temporada",
      hours: "Horarios",
      rules: "Normas",
      type: "Tipo",
    },
  },

  home: {
    seo: {
      title:
        "Una escapada para dos entre viñedos y naturaleza en el Bages | Cal Masses",
      description:
        "Cal Masses es un alojamiento en Sant Salvador de Guardiola, rodeado de campo, bosque y viñedo, cerca de Manresa y Montserrat.",
      h1: "Una escapada para dos entre viñedos y naturaleza en el Bages",
    },
    hero: {
      h1: "Una escapada para dos entre viñedos y naturaleza en el Bages",
      paragraphs: [
        "Cal Masses es un alojamiento en Sant Salvador de Guardiola, rodeado de campo, bosque y viñedo, cerca de Manresa y Montserrat.",
        "Un lugar pequeño, pensado para dos personas, desde el que descubrir el Bages o simplemente pasar unos días sin demasiadas prisas.",
      ],
      ctaPrimary: "Consultar disponibilidad",
      ctaSecondary: "Ver el alojamiento",
    },
    accommodation: {
      h2: "Un espacio para estar a tu aire",
      paragraphs: [
        "Cal Masses está pensado para una estancia tranquila de dos personas, con los espacios necesarios para pasar unos días con comodidad y autonomía.",
        "Dentro encontrarás las zonas de descanso, cocina, baño y sala. Fuera empieza buena parte de lo que hace diferente la estancia: el campo, el viñedo, los caminos y la vida de la finca.",
        "No queremos explicarte el alojamiento con una lista interminable de adjetivos. Aquí puedes ver cómo es, qué servicios tiene y todo lo que necesitas saber antes de venir.",
      ],
      cta: "Ver el alojamiento completo",
    },
    finca: {
      h2: "No vienes solo a dormir",
      paragraphs: [
        "Cal Masses es también el lugar donde vivimos y trabajamos la tierra.",
        "Alrededor del alojamiento hay campo, bosque y viñedo. Cultivamos, hacemos nuestro propio vino y seguimos dando forma a un proyecto pequeño que nace de este lugar.",
        "La estancia forma parte de ese paisaje. No es un alojamiento colocado en medio del campo para parecer rural: el campo ya estaba aquí.",
      ],
      h3: "Una finca que cambia con las estaciones",
      h3Paragraphs: [
        "Cal Masses no se ve igual en invierno que en primavera, verano o vendimia.",
        "Cambian el viñedo, la luz, el campo y las tareas que hacemos.",
        "Eso forma parte del lugar, aunque cada huésped decida cuánto quiere acercarse a esa parte de la finca.",
      ],
      cta: "Conocer Cal Masses",
    },
    pool: {
      h2: "Fuera también pasan cosas",
      paragraphs: [
        "Buena parte de Cal Masses se disfruta fuera: desayunar sin prisas, leer, pasear, descansar o simplemente quedarse un rato mirando el paisaje.",
        "Durante los meses más cálidos, la piscina forma parte de ese espacio exterior.",
      ],
    },
    surroundings: {
      h2: "Montserrat, Manresa y el Pla de Bages",
      paragraphs: [
        "Cal Masses está en Sant Salvador de Guardiola, en un punto desde el que es fácil combinar naturaleza, pueblos, patrimonio, vino y gastronomía.",
        "Montserrat y Manresa son dos de las visitas más conocidas, pero el Pla de Bages merece también tiempo propio.",
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
          text: "Historia, patrimonio, gastronomía y servicios cerca de la finca, sin tener que alojarte dentro de la ciudad.",
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
    finalCta: {
      h2: "¿Te apetece pasar unos días en Cal Masses?",
      paragraphs: [
        "Consulta las fechas disponibles y, si necesitas saber alguna cosa antes de venir, escríbenos.",
      ],
      ctaPrimary: "Consultar disponibilidad",
      ctaSecondary: "Contactar",
    },
  },

  alojamiento: {
    seo: {
      title: "El alojamiento | Cal Masses",
      description:
        "Cal Masses es un alojamiento para dos personas dentro de una finca de Sant Salvador de Guardiola.",
      h1: "El alojamiento",
    },
    intro: [
      "Cal Masses es un alojamiento para dos personas dentro de una finca de Sant Salvador de Guardiola.",
      "Está pensado para pasar unos días con autonomía, tanto si quieres recorrer el Bages como si prefieres disfrutar de la propia finca.",
    ],
    bedroom: {
      h2: "Dormitorio",
      paragraphs: ["TODO_CONTENT"],
    },
    living: {
      h2: "Cocina / sala",
      paragraphs: ["TODO_CONTENT"],
    },
    bathroom: {
      h2: "Baño",
      paragraphs: ["TODO_CONTENT"],
    },
    exterior: {
      h2: "Exterior / piscina",
      paragraphs: [
        "Buena parte de Cal Masses se disfruta fuera. Durante los meses más cálidos, la piscina forma parte de ese espacio exterior.",
      ],
    },
    services: { h2: "Servicios" },
    rules: {
      h2: "Normas básicas",
      paragraphs: [
        "Máximo 2 viajeros.",
        "No se admiten mascotas.",
        "No se permiten fiestas ni eventos.",
      ],
    },
    checkTimes: { h2: "Check-in / check-out" },
    cta: {
      primary: "Consultar disponibilidad",
      secondary: "Contactar",
    },
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
    cta: {
      primary: "Consultar disponibilidad",
      primaryRoute: "reservar",
      secondary: "Ver el alojamiento",
      secondaryRoute: "alojamiento",
    },
  },

  sisu: {
    seo: {
      title: "SISU, vino hecho en Cal Masses | Cal Masses",
      description:
        "SISU nace del mismo lugar. El viñedo forma parte de Cal Masses y cada añada explica, a su manera, una parte de lo que pasa en la finca.",
      h1: "SISU",
    },
    intro: [
      "SISU nace del mismo lugar.",
      "El viñedo forma parte de Cal Masses y cada añada explica, a su manera, una parte de lo que pasa en la finca.",
      "Hacemos pequeñas elaboraciones con una idea sencilla: intervenir lo necesario y dejar que la uva y el año tengan algo que decir.",
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
    cta: {
      primary: "Consultar disponibilidad",
      primaryRoute: "reservar",
    },
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
      title: "Consultar disponibilidad | Cal Masses",
      description:
        "Consulta las fechas disponibles en Airbnb. Si necesitas saber alguna cosa antes de venir, escríbenos.",
      h1: "Consultar disponibilidad",
    },
    intro:
      "Consulta las fechas disponibles en Airbnb. Si tienes alguna duda antes de venir, escríbenos.",
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
    { question: "¿Hay cocina?", answer: "Sí" },
    {
      question: "¿Hay aparcamiento?",
      answer: "Sí, hay aparcamiento de sobra; cabe cualquier tipo de vehículo.",
    },
    { question: "¿Hay Wi-Fi?", answer: "Sí" },
    { question: "¿Se admiten mascotas?", answer: "No." },
    { question: "¿Pueden alojarse niños?", answer: "Sí" },
    { question: "¿A qué hora es el check-in?", answer: "A partir de las 16:00." },
    { question: "¿A qué hora es el check-out?", answer: "Hasta las 11:00." },
    { question: "¿Cómo se llega?", answer: TODO_DATA },
    {
      question: "¿A qué distancia está Manresa?",
      answer: "Aprox. 11 km / 20 min en coche.",
    },
    {
      question: "¿A qué distancia está Montserrat?",
      answer: "Aprox. 20 km / 40 min en coche.",
    },
    {
      question: "¿Cómo puedo consultar disponibilidad?",
      answer: "Puedes consultar disponibilidad en Airbnb, o contactar por WhatsApp o email.",
    },
    {
      question: "¿Cuál es la política de cancelación?",
      answer: "Se indica en Airbnb al elegir las fechas de la reserva.",
    },
  ],
};
