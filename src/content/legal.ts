import type { Lang } from "../config/siteConfig";

export type LegalKind = "aviso" | "privacidad" | "cookies";
export type LegalSection = { h: string; p: string[] };

/**
 * Legal texts. Holder identity (name, tax ID, tourism registration) is injected
 * by LegalPage from siteConfig so it is filled in one place.
 * Describes what the site actually does: no forms, no accounts; contact by
 * email/phone/WhatsApp; Vercel Analytics and Google Maps only after consent.
 */
export const legalBodies: Record<Lang, Record<LegalKind, LegalSection[]>> = {
  es: {
    aviso: [
      {
        h: "Objeto",
        p: [
          "Este sitio web informa sobre el alojamiento Cal Masses, la finca y el vino SISU, y facilita el contacto y la consulta de disponibilidad. Las reservas se gestionan a través de plataformas externas (Airbnb, Booking.com) o directamente con nosotros.",
        ],
      },
      {
        h: "Condiciones de uso",
        p: [
          "El acceso a la web es gratuito y no requiere registro. La persona usuaria se compromete a hacer un uso correcto del sitio, conforme a la ley y a este aviso.",
          "La información sobre el alojamiento, servicios y distancias es orientativa. Las condiciones aplicables a cada reserva son las que se indican en el momento de reservar.",
        ],
      },
      {
        h: "Propiedad intelectual",
        p: [
          "Los textos, fotografías, logotipos y diseño de este sitio pertenecen a Cal Masses o se usan con autorización. No se permite su reproducción con fines comerciales sin consentimiento previo.",
        ],
      },
      {
        h: "Enlaces externos",
        p: [
          "La web enlaza a servicios de terceros (Airbnb, Booking.com, WhatsApp, Google Maps, Instagram). Cal Masses no es responsable de sus contenidos ni de sus políticas, que conviene consultar en cada caso.",
        ],
      },
      {
        h: "Legislación aplicable",
        p: [
          "Este aviso se rige por la legislación española, en particular la Ley 34/2002 de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE).",
        ],
      },
    ],
    privacidad: [
      {
        h: "Responsable",
        p: [
          "El responsable del tratamiento es el titular de Cal Masses, cuyos datos figuran en el aviso legal. Puedes escribirnos a la dirección de correo indicada allí para cualquier cuestión sobre tus datos.",
        ],
      },
      {
        h: "Qué datos tratamos",
        p: [
          "Esta web no tiene formularios ni cuentas de usuario. Solo tratamos los datos que nos envías voluntariamente al escribirnos por correo electrónico, teléfono o WhatsApp (nombre, contacto y lo que nos cuentes), y los necesarios para gestionar tu estancia si reservas.",
          "Si aceptas las cookies de analítica, se recogen estadísticas de visita agregadas y anónimas mediante Vercel Analytics.",
        ],
      },
      {
        h: "Para qué y con qué base",
        p: [
          "Usamos tus datos para responder a tus consultas y gestionar la estancia (ejecución de un contrato o medidas precontractuales) y, en el caso de la analítica, sobre la base de tu consentimiento, que puedes retirar en cualquier momento.",
        ],
      },
      {
        h: "Conservación y destinatarios",
        p: [
          "Conservamos los datos el tiempo necesario para atender tu consulta o estancia y cumplir las obligaciones legales (por ejemplo, el registro de viajeros). No los cedemos a terceros salvo obligación legal.",
          "Si reservas a través de Airbnb o Booking.com, esas plataformas tratan tus datos según sus propias políticas de privacidad.",
        ],
      },
      {
        h: "Tus derechos",
        p: [
          "Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiéndonos por correo. Si consideras que no se han respetado, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).",
        ],
      },
    ],
    cookies: [
      {
        h: "Qué son",
        p: [
          "Las cookies y tecnologías similares (como el almacenamiento local del navegador) guardan pequeños datos en tu dispositivo cuando visitas una web.",
        ],
      },
      {
        h: "Qué usamos",
        p: [
          "Necesarias: guardamos tu elección sobre cookies en el almacenamiento local del navegador (clave «calmasses-cookie-consent») para no volver a preguntarte. No requiere consentimiento.",
          "Analítica (solo si aceptas): Vercel Analytics, para conocer de forma agregada cuántas personas visitan cada página.",
          "Terceros (solo si aceptas): el mapa de Google Maps de la página de contacto, que puede instalar cookies de Google.",
        ],
      },
      {
        h: "Cómo cambiar tu elección",
        p: [
          "Puedes borrar los datos de este sitio desde la configuración de tu navegador; la próxima vez que entres volveremos a preguntarte. También puedes bloquear las cookies desde el propio navegador.",
        ],
      },
    ],
  },
  ca: {
    aviso: [
      {
        h: "Objecte",
        p: [
          "Aquest web informa sobre l'allotjament Cal Masses, la finca i el vi SISU, i facilita el contacte i la consulta de disponibilitat. Les reserves es gestionen a través de plataformes externes (Airbnb, Booking.com) o directament amb nosaltres.",
        ],
      },
      {
        h: "Condicions d'ús",
        p: [
          "L'accés al web és gratuït i no requereix registre. La persona usuària es compromet a fer-ne un ús correcte, d'acord amb la llei i amb aquest avís.",
          "La informació sobre l'allotjament, els serveis i les distàncies és orientativa. Les condicions aplicables a cada reserva són les que s'indiquen en el moment de reservar.",
        ],
      },
      {
        h: "Propietat intel·lectual",
        p: [
          "Els textos, fotografies, logotips i disseny d'aquest web pertanyen a Cal Masses o s'utilitzen amb autorització. No se'n permet la reproducció amb finalitats comercials sense consentiment previ.",
        ],
      },
      {
        h: "Enllaços externs",
        p: [
          "El web enllaça a serveis de tercers (Airbnb, Booking.com, WhatsApp, Google Maps, Instagram). Cal Masses no és responsable dels seus continguts ni de les seves polítiques, que convé consultar en cada cas.",
        ],
      },
      {
        h: "Legislació aplicable",
        p: [
          "Aquest avís es regeix per la legislació espanyola, en particular la Llei 34/2002 de serveis de la societat de la informació i de comerç electrònic (LSSI-CE).",
        ],
      },
    ],
    privacidad: [
      {
        h: "Responsable",
        p: [
          "El responsable del tractament és el titular de Cal Masses, les dades del qual figuren a l'avís legal. Ens pots escriure a l'adreça de correu que s'hi indica per a qualsevol qüestió sobre les teves dades.",
        ],
      },
      {
        h: "Quines dades tractem",
        p: [
          "Aquest web no té formularis ni comptes d'usuari. Només tractem les dades que ens envies voluntàriament quan ens escrius per correu electrònic, telèfon o WhatsApp (nom, contacte i el que ens expliquis), i les necessàries per gestionar la teva estada si reserves.",
          "Si acceptes les galetes d'analítica, es recullen estadístiques de visita agregades i anònimes mitjançant Vercel Analytics.",
        ],
      },
      {
        h: "Per a què i amb quina base",
        p: [
          "Fem servir les teves dades per respondre les teves consultes i gestionar l'estada (execució d'un contracte o mesures precontractuals) i, en el cas de l'analítica, sobre la base del teu consentiment, que pots retirar en qualsevol moment.",
        ],
      },
      {
        h: "Conservació i destinataris",
        p: [
          "Conservem les dades el temps necessari per atendre la consulta o l'estada i complir les obligacions legals (per exemple, el registre de viatgers). No les cedim a tercers excepte per obligació legal.",
          "Si reserves a través d'Airbnb o Booking.com, aquestes plataformes tracten les teves dades segons les seves pròpies polítiques de privacitat.",
        ],
      },
      {
        h: "Els teus drets",
        p: [
          "Pots exercir els drets d'accés, rectificació, supressió, oposició, limitació i portabilitat escrivint-nos per correu. Si consideres que no s'han respectat, pots reclamar davant l'Agència Espanyola de Protecció de Dades (www.aepd.es).",
        ],
      },
    ],
    cookies: [
      {
        h: "Què són",
        p: [
          "Les galetes i tecnologies similars (com l'emmagatzematge local del navegador) desen petites dades al teu dispositiu quan visites un web.",
        ],
      },
      {
        h: "Què fem servir",
        p: [
          "Necessàries: desem la teva elecció sobre galetes a l'emmagatzematge local del navegador (clau «calmasses-cookie-consent») per no tornar-te a preguntar. No requereix consentiment.",
          "Analítica (només si acceptes): Vercel Analytics, per saber de manera agregada quantes persones visiten cada pàgina.",
          "Tercers (només si acceptes): el mapa de Google Maps de la pàgina de contacte, que pot instal·lar galetes de Google.",
        ],
      },
      {
        h: "Com canviar la teva elecció",
        p: [
          "Pots esborrar les dades d'aquest web des de la configuració del navegador; la propera vegada que hi entris et tornarem a preguntar. També pots bloquejar les galetes des del mateix navegador.",
        ],
      },
    ],
  },
  en: {
    aviso: [
      {
        h: "Purpose",
        p: [
          "This website provides information about the Cal Masses accommodation, the farm and SISU wine, and makes it easy to contact us and check availability. Bookings are handled through external platforms (Airbnb, Booking.com) or directly with us.",
        ],
      },
      {
        h: "Terms of use",
        p: [
          "Access to the website is free and requires no registration. Users agree to use the site properly, in accordance with the law and this notice.",
          "Information about the accommodation, services and distances is for guidance only. The conditions that apply to each booking are those shown at the time of booking.",
        ],
      },
      {
        h: "Intellectual property",
        p: [
          "The texts, photographs, logos and design of this site belong to Cal Masses or are used with permission. They may not be reproduced for commercial purposes without prior consent.",
        ],
      },
      {
        h: "External links",
        p: [
          "The site links to third-party services (Airbnb, Booking.com, WhatsApp, Google Maps, Instagram). Cal Masses is not responsible for their content or policies, which you should check in each case.",
        ],
      },
      {
        h: "Applicable law",
        p: [
          "This notice is governed by Spanish law, in particular Law 34/2002 on information society services and electronic commerce (LSSI-CE).",
        ],
      },
    ],
    privacidad: [
      {
        h: "Data controller",
        p: [
          "The data controller is the owner of Cal Masses, whose details appear in the legal notice. You can write to the email address shown there about anything relating to your data.",
        ],
      },
      {
        h: "What data we process",
        p: [
          "This website has no forms or user accounts. We only process the data you choose to send us by email, phone or WhatsApp (name, contact details and whatever you tell us), and the data needed to manage your stay if you book.",
          "If you accept analytics cookies, aggregated and anonymous visit statistics are collected with Vercel Analytics.",
        ],
      },
      {
        h: "Purpose and legal basis",
        p: [
          "We use your data to answer your enquiries and manage your stay (performance of a contract or pre-contractual steps) and, for analytics, on the basis of your consent, which you can withdraw at any time.",
        ],
      },
      {
        h: "Retention and recipients",
        p: [
          "We keep data for as long as needed to handle your enquiry or stay and to meet legal obligations (for example, the guest register). We do not share it with third parties unless legally required.",
          "If you book through Airbnb or Booking.com, those platforms process your data under their own privacy policies.",
        ],
      },
      {
        h: "Your rights",
        p: [
          "You can exercise your rights of access, rectification, erasure, objection, restriction and portability by emailing us. If you believe they have not been respected, you can complain to the Spanish Data Protection Agency (www.aepd.es).",
        ],
      },
    ],
    cookies: [
      {
        h: "What they are",
        p: [
          "Cookies and similar technologies (such as the browser's local storage) store small pieces of data on your device when you visit a website.",
        ],
      },
      {
        h: "What we use",
        p: [
          "Necessary: we store your cookie choice in the browser's local storage (key “calmasses-cookie-consent”) so we don't ask again. No consent required.",
          "Analytics (only if you accept): Vercel Analytics, to see in aggregate how many people visit each page.",
          "Third parties (only if you accept): the Google Maps map on the contact page, which may set Google cookies.",
        ],
      },
      {
        h: "Changing your choice",
        p: [
          "You can clear this site's data in your browser settings; the next time you visit we will ask again. You can also block cookies in the browser itself.",
        ],
      },
    ],
  },
};

export const legalLabels: Record<
  Lang,
  { identification: string; holder: string; taxId: string; address: string; email: string; phone: string; registration: string }
> = {
  es: {
    identification: "Datos identificativos",
    holder: "Titular",
    taxId: "NIF",
    address: "Domicilio",
    email: "Correo electrónico",
    phone: "Teléfono",
    registration: "Número de registro turístico",
  },
  ca: {
    identification: "Dades identificatives",
    holder: "Titular",
    taxId: "NIF",
    address: "Domicili",
    email: "Correu electrònic",
    phone: "Telèfon",
    registration: "Número de registre turístic",
  },
  en: {
    identification: "Identification",
    holder: "Owner",
    taxId: "Tax ID (NIF)",
    address: "Address",
    email: "Email",
    phone: "Phone",
    registration: "Tourism registration number",
  },
};
