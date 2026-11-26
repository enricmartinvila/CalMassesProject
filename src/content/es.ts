import { ratingSnippet } from "../config/siteConfig";
import type { ContentBundle } from "./types";
import { TODO_DATA } from "../config/siteConfig";

const R = ratingSnippet("es");

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
      exploreTitle: "Explorar",
      tagline: "Un alojamiento para dos dentro de una finca con viñedo, en Sant Salvador de Guardiola (Bages).",
      withPool: "Con piscina",
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
    guide: {
      tocTitle: "En esta guía",
      keepDiscovering: "Sigue descubriendo",
      fromCalMasses: "Desde Cal Masses",
    },
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
      loungers: "Tumbonas",
      shade: "Zona de sombra",
      distance: "Distancia al alojamiento",
    },
  },

  home: {
    design: {
      eyebrows: {
        accommodation: "El alojamiento",
        finca: "La finca",
        pool: "Al aire libre",
        surroundings: "El entorno",
        sisu: "SISU",
        gallery: "Galería",
        faq: "Antes de venir",
        reviews: "Lo cuentan quienes ya han estado aquí",
      },
      emphasis: {
        hero: "viñedos",
        accommodation: "a tu aire",
        finca: "dormir",
        pool: "pasan cosas",
        surroundings: "Pla de Bages",
        sisu: "vino",
        gallery: "es",
        faq: "frecuentes",
        finalCta: "Cal Masses",
      },
      poolChips: ["Piscina compartida", "Temporada: verano", "Sin horario fijo", "Normas: sentido común", "Agua salada"],
      faqLead: "¿Alguna duda más? Escríbenos y te respondemos.",
      galleryTitle: "Mira cómo es",
      faqTitle: "Preguntas frecuentes",
    },
    seo: {
      title:
        "Alojamiento rural para dos con jacuzzi · Bages | Cal Masses",
      description:
        `${R}. Alojamiento entero para dos en una finca con viñedo en Sant Salvador de Guardiola, a 25 min de Montserrat. Jacuzzi, piscina y parking.`,
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
      title: "Alojamiento para dos: jacuzzi, cocina y piscina | Cal Masses",
      description:
        "Alojamiento entero para dos en Sant Salvador de Guardiola: dormitorio, baño, cocina, jacuzzi, aire acondicionado y piscina compartida en verano. Mira fotos y detalles.",
      h1: "El alojamiento",
    },
    hero: {
      paragraphs: [
        "Cal Masses es un alojamiento entero para dos personas dentro de una finca de Sant Salvador de Guardiola, en el Bages.",
        "Un espacio pequeño y tranquilo desde el que descubrir la comarca o simplemente pasar unos días entre campo, viñedo y naturaleza.",
      ],
      ctaSecondary: "Ver los espacios",
    },
    essentialsAria: "Datos esenciales del alojamiento",
    eyebrows: {
      bedroom: "Descanso",
      living: "Cocina y estar",
      bathroom: "Baño",
      exterior: "Fuera",
      privacy: "La finca",
      services: "Equipamiento",
      arrival: "Llegada",
      explore: "Sigue explorando",
      enlarge: "Ampliar foto",
    },
    essentialLabels: {
      entirePlace: "Alojamiento entero",
      guests: "2 huéspedes",
      bedrooms: "1 dormitorio",
      beds: "1 cama",
      bathrooms: "1 baño",
      kitchen: "Cocina",
      pool: "Piscina",
      wifi: "Wi-Fi",
    },
    gallery: {
      seeAll: "Ver todas las fotos",
      close: "Cerrar",
    },
    intro: {
      h2: "Un espacio para estar a tu aire",
      paragraphs: [
        "Cal Masses está pensado para una estancia tranquila de dos personas, con los espacios necesarios para pasar unos días con comodidad y autonomía.",
        "Dentro encontrarás dormitorio, cocina, baño y zona de estar. Fuera empieza buena parte de lo que hace diferente la estancia: el campo, el viñedo, los caminos y la vida de la finca.",
        "Puedes utilizar Cal Masses como punto de partida para descubrir el Bages o simplemente quedarte y disfrutar del lugar.",
      ],
    },
    bedroom: {
      h2: "El dormitorio",
      paragraphs: [
        "El dormitorio de Cal Masses está pensado para dos personas, con un ambiente sencillo y tranquilo para descansar al final del día.",
        "Aquí no queremos añadir más cosas de las necesarias: una buena cama, calma y un espacio cómodo donde cerrar la puerta y descansar.",
      ],
    },
    living: {
      h2: "Cocina y espacio para estar a tu aire",
      paragraphs: [
        "Una de las ventajas de alojarte en Cal Masses es poder organizar los días a tu manera.",
        "La cocina permite preparar desayunos, comidas o cenas sin depender siempre de salir, y la zona de estar ofrece un espacio cómodo para descansar cuando apetece quedarse dentro.",
      ],
      equipmentTitle: "Equipamiento",
    },
    bathroom: {
      h2: "El baño",
      paragraphs: [
        "El alojamiento dispone de un baño completo para uso exclusivo de los huéspedes.",
      ],
    },
    exterior: {
      h2: "Piscina y vida exterior",
      paragraphs: [
        "Durante los meses de buen tiempo, gran parte de Cal Masses se disfruta fuera.",
        "La piscina, las zonas exteriores y el paisaje de la finca permiten pasar buena parte del día sin necesidad de salir.",
        "Desayunar fuera, leer, darse un baño o simplemente quedarse un rato mirando el paisaje también forman parte de la estancia.",
      ],
    },
    privacy: {
      h2: "Un alojamiento dentro de una finca viva",
      paragraphs: [
        "Cal Masses está dentro de una finca donde también vivimos y trabajamos.",
        "El alojamiento tiene sus propios espacios, pero forma parte de un lugar en el que continúa la actividad diaria de la finca, el campo y el viñedo.",
        "Preferimos explicarlo con claridad para que sepas qué tipo de estancia vas a encontrar antes de venir.",
      ],
      h3: "¿Qué espacios son solo para vosotros?",
      privateLabel: "Privado",
      sharedLabel: "Compartido",
      areaLabels: {
        lodging: "Alojamiento",
        pool: "Piscina",
        terrace: "Terraza",
        garden: "Jardín",
        parking: "Parking",
      },
      knowFinca: "Conocer la finca",
    },
    services: {
      h2: "Todo lo que encontrarás",
      categories: {
        kitchen: "Cocina",
        comfort: "Confort",
        exterior: "Exterior",
        practical: "Práctico",
        bedroomBath: "Dormitorio y baño",
      },
      items: {
        entirePlace: "Alojamiento entero",
        kitchen: "Cocina",
        wifi: "Wi-Fi",
        airConditioning: "Aire acondicionado",
        heating: "Calefacción",
        pool: "Piscina",
        parking: "Parking",
        jacuzzi: "Jacuzzi",
        selfCheckIn: "Llegada autónoma",
        washer: "Lavadora",
        dryer: "Secadora",
        linens: "Ropa de cama",
        towels: "Toallas",
        hairDryer: "Secador",
      },
    },
    arrival: {
      h2: "Llegar y empezar la estancia",
      paragraphs: [
        "Queremos que la llegada sea sencilla y que tengas la información necesaria antes de salir de casa.",
        "Aquí encontrarás los horarios y las indicaciones básicas para organizar la estancia.",
      ],
      checkIn: "Entrada",
      checkOut: "Salida",
      selfCheckInTitle: "Llegada autónoma",
      selfCheckInBody:
        "Puedes realizar la llegada de forma autónoma siguiendo las instrucciones que recibirás antes de tu estancia.",
      parkingTitle: "Aparcamiento",
    },
    fit: {
      h2: "¿Es Cal Masses para ti?",
      yesTitle: "Probablemente sí si...",
      yesItems: [
        "sois dos personas;",
        "buscáis tranquilidad;",
        "os gusta estar cerca del campo;",
        "preferís un alojamiento pequeño a un complejo turístico;",
        "queréis combinar descanso con Montserrat, Manresa o el Bages;",
        "valoráis poder cocinar y organizar la estancia a vuestro ritmo.",
      ],
      noTitle: "Puede que no sea lo que buscas si...",
      noItems: [
        "viajáis en un grupo grande;",
        "buscáis estar en el centro de una ciudad;",
        "queréis los servicios propios de un hotel;",
        "buscáis animación, recepción o restauración dentro del alojamiento.",
      ],
    },
    reviews: {
      h2: "Lo cuentan quienes ya han estado aquí",
    },
    faq: {
      h2: "Antes de reservar",
      items: [
        {
          question: "¿El alojamiento es entero?",
          answer: "Sí. Cal Masses es un alojamiento entero para dos personas.",
        },
        {
          question: "¿Para cuántas personas es?",
          answer: "Para 2 personas.",
        },
        {
          question: "¿La piscina es privada o compartida?",
          answer:
            "Piscina compartida. Está disponible para huéspedes en verano; los de la casa no suelen usarla si hay gente. Exterior, sin horario fijo: sentido común.",
        },
        {
          question: "¿Hay cocina equipada?",
          answer: "Sí. Hay cocina.",
        },
        {
          question: "¿Hay Wi-Fi?",
          answer: "Sí.",
        },
        {
          question: "¿Hay aire acondicionado y calefacción?",
          answer: "Sí. Hay aire acondicionado y calefacción.",
        },
        {
          question: "¿Hay aparcamiento?",
          answer: "Sí, hay aparcamiento de sobra; cabe cualquier tipo de vehículo.",
        },
        {
          question: "¿Se admiten mascotas?",
          answer: "No.",
        },
        {
          question: "¿Pueden alojarse niños?",
          answer: "Sí.",
        },
        {
          question: "¿Se puede fumar?",
          answer: TODO_DATA,
        },
        {
          question: "¿Se permiten fiestas o eventos?",
          answer: "No se permiten fiestas ni eventos.",
        },
        {
          question: "¿Cómo funciona el check-in?",
          answer: "A partir de las 16:00.",
        },
        {
          question: "¿Hay otros huéspedes en la finca?",
          answer:
            "Cal Masses está dentro de una finca donde también vivimos y trabajamos. El alojamiento tiene sus propios espacios.",
        },
        {
          question: "¿Qué zonas son compartidas?",
          answer: "La piscina es compartida.",
        },
        {
          question: "¿Cómo puedo consultar disponibilidad?",
          answer:
            "Puedes consultar disponibilidad en Booking.com, o contactar por WhatsApp o email.",
        },
        {
          question: "¿Cuál es la política de cancelación?",
          answer: "Se indica en Booking.com al elegir las fechas de la reserva.",
        },
      ],
    },
    related: [
      { label: "Descubrir el Bages", route: "landingBages" },
      { label: "Alojamiento rural cerca de Manresa", route: "landingManresa" },
      { label: "Alojamiento cerca de Montserrat", route: "landingMontserrat" },
      {
        label: "Descubrir el Pla de Bages y sus vinos",
        route: "landingEnoturismo",
      },
      { label: "Conocer SISU", route: "sisu" },
    ],
    finalCta: {
      h2: "¿Encaja con lo que buscas?",
      paragraphs: [
        "Consulta las fechas disponibles y, si necesitas resolver alguna duda antes de venir, escríbenos.",
      ],
      primary: "Consultar disponibilidad",
      secondary: "Contactar",
    },
  },

  finca: {
    seo: {
      title: "La finca: viñedo, huerto y vino propio | Cal Masses",
      description:
        "Cal Masses no empezó como un proyecto turístico: es una finca con viñedo y huerto donde vivimos, cultivamos y hacemos nuestro vino, SISU.",
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
    design: {
      next: [
        { label: "Ver el alojamiento", route: "alojamiento" },
        { label: "SISU, el vino de la finca", route: "sisu" },
      ],
      closing: { h2: "Consulta las fechas disponibles", paragraph: "Una finca pequeña, para dos personas, que cambia con cada estación." },
    },
  },

  sisu: {
    seo: {
      title: "SISU, el vino de la finca Cal Masses en el Pla de Bages",
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
      secondary: "Ver el alojamiento",
      secondaryRoute: "alojamiento",
    },
    design: {
      eyebrow: "Nuestro vino",
      specs: [
        { label: "Añada", value: "2024" },
        { label: "Uvas", value: "Macabeo 80 % · Sumoll 20 %" },
        { label: "Maceración", value: "5 días con pieles" },
        { label: "Reposo", value: "6 meses en depósito de acero inoxidable", wide: true },
      ],
      tasteEyebrow: "En la copa",
      tasteH2: "Cómo es",
      projectH2: "Un proyecto pequeño y honesto",
      next: [
        { label: "Enoturismo en el Pla de Bages", route: "landingEnoturismo" },
        { label: "La finca", route: "finca" },
      ],
      closing: { h2: "Consulta las fechas disponibles", paragraph: "El vino y el alojamiento comparten el mismo paisaje." },
    },
  },

  contacto: {
    seo: {
      title: "Contacto y ubicación | Cal Masses, Bages",
      description:
        "Escríbenos por WhatsApp, email o teléfono si tienes dudas sobre fechas, la estancia o cómo llegar a Cal Masses, en Sant Salvador de Guardiola (Bages).",
      h1: "Contacto",
    },
    intro:
      "Si tienes cualquier duda sobre tu estancia, disponibilidad o cómo llegar, puedes contactar directamente con nosotros.",
    arrival: "Cómo llegar",
    saveContact: "Guardar contacto",
    copyEmail: "Copiar email",
    copied: "Email copiado",
    writeUs: "Escríbenos",
    whatsappCta: "Escribir por WhatsApp",
  },

  reservar: {
    seo: {
      title: "Consultar disponibilidad | Cal Masses",
      description:
        "Consulta las fechas disponibles en Booking.com. Si necesitas saber alguna cosa antes de venir, escríbenos.",
      h1: "Consultar disponibilidad",
    },
    intro:
      "Consulta las fechas disponibles en Booking.com. Si tienes alguna duda antes de venir, escríbenos.",
  },

  legal: {
    aviso: {
      seo: {
        title: "Aviso legal | Cal Masses",
        description: "Datos del titular, condiciones de uso y propiedad intelectual del sitio web de Cal Masses.",
        h1: "Aviso legal",
      },
    },
    privacidad: {
      seo: {
        title: "Privacidad | Cal Masses",
        description: "Cómo trata Cal Masses los datos personales de quienes nos contactan o se alojan con nosotros.",
        h1: "Privacidad",
      },
    },
    cookies: {
      seo: {
        title: "Cookies | Cal Masses",
        description: "Qué cookies usa la web de Cal Masses y cómo cambiar tu elección.",
        h1: "Cookies",
      },
    },
  },

  faq: [
    {
      question: "¿Para cuántas personas es Cal Masses?",
      answer:
        "Para dos personas. Es un alojamiento entero con un dormitorio y un baño, pensado para parejas o dos amigos que quieren unos días tranquilos.",
    },
    {
      question: "¿Tiene jacuzzi?",
      answer:
        "Sí. El baño del alojamiento tiene jacuzzi, además de aire acondicionado y calefacción para cualquier época del año.",
    },
    {
      question: "¿La piscina es privada o compartida?",
      answer:
        "Compartida. Es una piscina exterior de agua salada disponible para huéspedes en verano; los de la casa no suelen usarla si hay gente. No hay horario fijo: sentido común.",
    },
    {
      question: "¿Hay cocina?",
      answer:
        "Sí, el alojamiento tiene cocina propia para que puedas preparar tus comidas y organizarte a tu aire.",
    },
    {
      question: "¿Hay aparcamiento?",
      answer:
        "Sí, aparcamiento gratuito en la misma finca, con espacio de sobra para cualquier tipo de vehículo.",
    },
    {
      question: "¿Hay Wi-Fi?",
      answer:
        "Sí, hay Wi-Fi gratuito en el alojamiento.",
    },
    {
      question: "¿Se admiten mascotas?",
      answer:
        "No, en Cal Masses no se admiten mascotas.",
    },
    {
      question: "¿Pueden alojarse niños?",
      answer:
        "Sí, siempre que en total no seáis más de dos personas, que es la capacidad del alojamiento.",
    },
    {
      question: "¿A qué hora es el check-in?",
      answer:
        "El check-in es a partir de las 16:00.",
    },
    {
      question: "¿A qué hora es el check-out?",
      answer:
        "El check-out es hasta las 11:00.",
    },
    {
      question: "¿Dónde está Cal Masses?",
      answer:
        "En el Raval del Sellarès, s/n, 08253 Sant Salvador de Guardiola (Bages, Barcelona). En la página de contacto tienes el mapa con la ubicación exacta.",
    },
    {
      question: "¿A qué distancia está Manresa?",
      answer:
        "Manresa está a unos 11 km, aproximadamente 20 minutos en coche.",
    },
    {
      question: "¿A qué distancia está Montserrat?",
      answer:
        "Montserrat está a unos 20 km, aproximadamente 25 minutos en coche.",
    },
    {
      question: "¿A qué distancia está Barcelona?",
      answer:
        "Barcelona está a unos 65 km, aproximadamente 1 h 10 min en coche.",
    },
    {
      question: "¿Cómo puedo consultar disponibilidad?",
      answer:
        "Puedes ver las fechas libres en Booking.com o escribirnos por WhatsApp o email y te respondemos directamente.",
    },
    {
      question: "¿Cuál es la política de cancelación?",
      answer:
        "La política de cancelación se muestra en Booking.com al elegir las fechas de la reserva.",
    },
  ],
};
