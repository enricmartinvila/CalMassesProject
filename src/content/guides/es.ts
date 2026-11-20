import type { GuideBundle } from "./types";

const TIEMPOS = "Tiempos aproximados en coche desde Cal Masses, sin tráfico.";

export const guideEs: GuideBundle = {
  montserrat: [
    {
      kind: "facts",
      id: "como-subir",
      eyebrow: "Cómo llegar",
      h2: "Cuatro formas de subir a Montserrat desde Cal Masses",
      intro: [
        "Desde Cal Masses llegas a Montserrat en unos 25 minutos. Una vez en la montaña puedes subir al monasterio de varias maneras; elegir bien depende de la época del año y de cuánto quieras caminar.",
      ],
      rows: [
        ["En coche hasta el monasterio", "La opción más directa. Arriba hay aparcamiento de pago que los fines de semana y festivos se llena pronto: llega antes de las 10:00."],
        ["Cremallera", "Tren de cremallera desde Monistrol de Montserrat, donde puedes dejar el coche. Sube hasta el monasterio en unos 15 minutos y es la opción más cómoda en días de mucha afluencia."],
        ["Aeri de Montserrat", "Teleférico desde la estación Montserrat-Aeri, junto a la carretera C-55. Trayecto corto y espectacular, con vistas verticales sobre el valle del Llobregat."],
        ["A pie", "Caminos señalizados desde Monistrol y desde Collbató. Requieren buena forma física, calzado adecuado y agua suficiente."],
      ],
      note: "Horarios y tarifas del cremallera, el teleférico y los funiculares cambian según la temporada: consúltalos en la web oficial de Montserrat antes de ir.",
    },
    {
      kind: "places",
      id: "que-ver",
      eyebrow: "Qué ver",
      h2: "Qué ver en Montserrat",
      intro: [
        "Montserrat es a la vez un santuario, un parque natural y una montaña de formas únicas. Estos son los lugares que merecen el viaje.",
      ],
      items: [
        { name: "Basílica y la Moreneta", text: "La talla románica de la Virgen de Montserrat se visita desde el interior de la basílica. En días de mucha gente hay cola: lo mejor es ir a primera hora." },
        { name: "Escolania de Montserrat", text: "Uno de los coros de niños más antiguos de Europa. Canta en la basílica en días y horas concretos, así que conviene consultar el calendario antes de planificar la visita." },
        { name: "Camino de la Santa Cova", text: "Paseo casi llano hasta la capilla donde, según la tradición, se encontró la imagen de la Virgen. Lo acompañan las esculturas del Rosario Monumental, con obras de autores como Gaudí o Puig i Cadafalch." },
        { name: "Sant Jeroni", text: "La cima más alta del macizo (1.236 m). Se llega a pie desde la parte superior del funicular de Sant Joan. En días claros se ven los Pirineos." },
        { name: "Museo de Montserrat", text: "Una colección sorprendente para un monasterio: pintura de El Greco, Caravaggio, Monet, Picasso o Dalí, y piezas arqueológicas de Oriente Próximo. Buen plan si el día sale nublado." },
        { name: "Coves del Salnitre", text: "En Collbató, en la vertiente sur de la montaña. Cuevas visitables con visita guiada; conviene reservar." },
      ],
    },
    {
      kind: "itinerary",
      id: "un-dia",
      eyebrow: "Plan",
      h2: "Un día en Montserrat saliendo desde Cal Masses",
      intro: [
        "La gran ventaja de dormir cerca es poder llegar temprano, antes que la mayoría de visitantes que suben desde Barcelona, y volver a descansar sin una hora de coche por delante.",
      ],
      steps: [
        { when: "8:30", title: "Desayuno y salida", text: "Desayuna con calma en el patio y sal hacia Montserrat. En 25 minutos estás arriba." },
        { when: "9:15", title: "Basílica y la Moreneta", text: "A primera hora la cola para ver la Virgen es mucho más corta. Aprovecha también para recorrer la plaza y el atrio antes de que se llene." },
        { when: "10:30", title: "Funicular de Sant Joan y caminata", text: "Sube a la parte alta y elige ruta: Sant Jeroni si te apetece caminar un buen rato, o un paseo más corto hasta las ermitas y miradores cercanos." },
        { when: "14:00", title: "Comida", text: "Hay restaurante y cafetería en el recinto. Otra opción es bajar a algún pueblo de alrededor o volver a Cal Masses y comer en el patio." },
        { when: "Tarde", title: "Santa Cova o museo", text: "El camino de la Santa Cova es tranquilo y fácil; el museo es la alternativa si hace mal tiempo." },
        { when: "Al volver", title: "Jacuzzi y cena en casa", text: "De vuelta en Cal Masses en 25 minutos. El jacuzzi después de un día de caminar es difícil de superar." },
      ],
    },
    {
      kind: "tips",
      id: "consejos",
      eyebrow: "Consejos",
      h2: "Consejos prácticos para visitar Montserrat",
      items: [
        { title: "Mejor entre semana", text: "Los fines de semana y festivos Montserrat recibe muchos visitantes. Si puedes elegir, ve de lunes a viernes." },
        { title: "Lleva una capa de más", text: "Arriba suele hacer más fresco y más viento que en el valle, incluso en verano." },
        { title: "Calzado de montaña", text: "Los caminos hacia Sant Jeroni y las ermitas son pedregosos. Con zapatillas de ciudad se hacen largos." },
        { title: "Mira la previsión", text: "Con niebla la montaña pierde sus vistas. Si el día amanece cubierto, deja la caminata para otro día y prioriza basílica y museo." },
        { title: "Consulta horarios", text: "Escolania, funiculares, cremallera y museo cambian de horario según la temporada." },
        { title: "Combínalo con el Bages", text: "Por la tarde puedes visitar una bodega del Pla de Bages o pasear por Manresa, ambas a poca distancia." },
      ],
    },
    {
      kind: "faq",
      id: "preguntas-montserrat",
      h2: "Preguntas frecuentes sobre Montserrat",
      items: [
        { question: "¿A qué distancia está Cal Masses de Montserrat?", answer: "A unos 20 km, aproximadamente 25 minutos en coche hasta el monasterio." },
        { question: "¿Cuánto tiempo hace falta para visitar Montserrat?", answer: "Medio día para la basílica, la Moreneta y un paseo corto. Un día entero si quieres subir a Sant Jeroni, hacer el camino de la Santa Cova o visitar el museo." },
        { question: "¿Se puede ir a Montserrat sin coche desde Cal Masses?", answer: "Cal Masses está en una zona rural y lo más práctico es moverse en coche: hasta el monasterio o hasta Monistrol para subir en cremallera." },
        { question: "¿Por qué dormir cerca de Montserrat y no en Barcelona?", answer: "Porque puedes subir temprano, evitar más de una hora de trayecto en cada sentido y combinar la visita con el resto del Bages: Manresa, bodegas y naturaleza." },
      ],
    },
  ],

  manresa: [
    {
      kind: "places",
      id: "que-ver",
      eyebrow: "Qué ver",
      h2: "Qué ver en Manresa",
      intro: [
        "Manresa es la capital del Bages y está a unos 20 minutos de Cal Masses. Su casco antiguo se recorre a pie en una mañana.",
      ],
      items: [
        { name: "La Seu", text: "La basílica gótica de Santa Maria domina la ciudad desde lo alto del casco antiguo. Desde sus alrededores se ve el río Cardener y, en días claros, Montserrat al fondo." },
        { name: "Cova de Sant Ignasi", text: "Ignacio de Loyola vivió en Manresa entre 1522 y 1523, y aquí empezó a escribir los Ejercicios Espirituales. Es también el final del Camí Ignasià." },
        { name: "Pont Vell", text: "Puente medieval sobre el Cardener, reconstruido después de la Guerra Civil. Desde aquí se toma la imagen más conocida de la Seu." },
        { name: "Carrer del Balç", text: "Calle medieval cubierta que conserva el ambiente de la Manresa antigua, con un centro de interpretación sobre la ciudad en la Edad Media." },
        { name: "Museu del Barroc de Catalunya", text: "Museo dedicado al arte barroco catalán, con retablos, escultura y pintura de los siglos XVII y XVIII." },
        { name: "Mercat de Puigmercadal", text: "El mercado municipal: buen sitio para comprar producto local si vas a cocinar en Cal Masses." },
      ],
    },
    {
      kind: "itinerary",
      id: "media-jornada",
      eyebrow: "Plan",
      h2: "Media jornada en Manresa",
      steps: [
        { when: "10:00", title: "Pont Vell", text: "Aparca cerca del río y empieza por el puente: es la mejor vista de la Seu." },
        { when: "10:30", title: "La Seu", text: "Sube a la basílica por las calles del casco antiguo y visita el interior." },
        { when: "11:30", title: "Carrer del Balç y casco antiguo", text: "Baja por el centro histórico pasando por la calle cubierta del Balç." },
        { when: "12:30", title: "Cova de Sant Ignasi", text: "Visita la cueva y el santuario, con buenas vistas sobre el río." },
        { when: "13:30", title: "Mercado y compra", text: "Pasa por el mercado o un supermercado y vuelve a Cal Masses a comer en el patio." },
      ],
    },
    {
      kind: "tips",
      id: "practico",
      eyebrow: "Práctico",
      h2: "Manresa como base de servicios",
      intro: [
        "Más allá de lo que se visita, Manresa es la ciudad de referencia durante tu estancia: allí tienes todo lo que no hay en el campo.",
      ],
      items: [
        { title: "Hacer la compra", text: "El alojamiento tiene cocina completa. Lo más cómodo es comprar en Manresa al llegar: supermercados, mercado y tiendas a 20 minutos." },
        { title: "Aparcar", text: "El casco antiguo es de calles estrechas y en cuesta. Deja el coche en un aparcamiento de las afueras del centro y sube a pie." },
        { title: "Tren a Barcelona", text: "Manresa tiene conexión directa con Barcelona en tren (Rodalies R4 y FGC R5), útil si alguien llega o se va en transporte público." },
        { title: "Servicios", text: "Farmacias, gasolineras, restaurantes y hospital. Todo a una distancia razonable de Cal Masses." },
      ],
    },
    {
      kind: "faq",
      id: "preguntas-manresa",
      h2: "Preguntas frecuentes sobre Manresa",
      items: [
        { question: "¿A qué distancia está Cal Masses de Manresa?", answer: "A unos 11 km, aproximadamente 20 minutos en coche." },
        { question: "¿Por qué alojarse cerca de Manresa y no en la ciudad?", answer: "Porque tienes la ciudad a 20 minutos para visitas y compras, y por la noche duermes en una finca rodeada de campo, sin ruido de tráfico." },
        { question: "¿Qué es el Camí Ignasià?", answer: "Una ruta de peregrinación de más de 600 km que reproduce el viaje de Ignacio de Loyola desde Loyola (Gipuzkoa) hasta Manresa, donde termina." },
        { question: "¿Se puede combinar Manresa y Montserrat en un día?", answer: "Sí. Montserrat por la mañana y Manresa por la tarde es una combinación cómoda, con Cal Masses entre ambas." },
      ],
    },
  ],

  bages: [
    {
      kind: "places",
      id: "lugares",
      eyebrow: "Escapadas",
      h2: "Qué ver en el Bages a menos de una hora",
      intro: [
        "Cal Masses está en el centro del Bages. Desde aquí se llega en poco rato a los lugares más interesantes de la comarca.",
      ],
      items: [
        { name: "Montserrat", time: "≈ 25 min", text: "Monasterio, la Moreneta y rutas por un macizo de formas únicas. Lo más conocido de la zona y merece al menos medio día." },
        { name: "Manresa", time: "≈ 20 min", text: "Capital de la comarca: la Seu gótica, el Pont Vell, la Cova de Sant Ignasi y todos los servicios." },
        { name: "Món Sant Benet", time: "≈ 25 min", text: "El monasterio románico de Sant Benet de Bages, restaurado y visitable, en Sant Fruitós de Bages." },
        { name: "Cardona", time: "≈ 45 min", text: "Castillo medieval sobre la villa y la Muntanya de Sal, una montaña de sal que se visita a través de una antigua mina." },
        { name: "Sant Llorenç del Munt i l'Obac", time: "≈ 35 min", text: "Parque natural de conglomerado, primo de Montserrat, con La Mola y su monasterio románico en la cima. Rutas para todos los niveles." },
        { name: "Tines de la Vall del Flequer", time: "≈ 40 min", text: "Construcciones de piedra seca donde se fermentaba el vino en medio de las viñas. El Bages conserva una de las mayores concentraciones." },
      ],
      note: TIEMPOS,
    },
    {
      kind: "text",
      id: "estaciones",
      eyebrow: "Cuándo venir",
      h2: "El Bages según la época del año",
      paragraphs: [
        "No hay una mala época para venir, pero cada estación cambia el plan. Esto es lo que puedes esperar.",
      ],
      h3Blocks: [
        { h3: "Primavera", paragraphs: ["La viña brota, los campos están verdes y las temperaturas son ideales para caminar por Montserrat o Sant Llorenç del Munt."] },
        { h3: "Verano", paragraphs: ["Días largos y calurosos en el interior. Lo mejor es salir por la mañana y pasar la tarde en la finca, con la piscina de agua salada abierta en temporada."] },
        { h3: "Otoño", paragraphs: ["Época de vendimia en el Pla de Bages (normalmente entre finales de agosto y octubre, según el año). Buena luz, colores y temperaturas suaves."] },
        { h3: "Invierno", paragraphs: ["Menos gente en Montserrat y días claros con vistas al Pirineo. El alojamiento tiene calefacción y el jacuzzi gana protagonismo."] },
      ],
    },
    {
      kind: "tips",
      id: "moverse",
      eyebrow: "Práctico",
      h2: "Moverse por el Bages",
      items: [
        { title: "El coche es casi imprescindible", text: "Los lugares de interés están repartidos por la comarca y el transporte público rural es limitado." },
        { title: "Buenas conexiones", text: "Las carreteras C-55 (hacia Montserrat), C-16 (hacia Barcelona) y C-25 (Eje Transversal) pasan cerca." },
        { title: "Bicicleta y caminos", text: "Desde la propia finca salen caminos para andar, correr o ir en bicicleta, y en Cal Masses hay bicicletas disponibles." },
        { title: "Reserva lo que lo requiera", text: "Coves del Salnitre, Muntanya de Sal y la mayoría de bodegas funcionan con visita guiada o cita previa." },
      ],
    },
    {
      kind: "faq",
      id: "preguntas-bages",
      h2: "Preguntas frecuentes sobre el Bages",
      items: [
        { question: "¿Dónde está el Bages?", answer: "Es una comarca del centro de Cataluña, con capital en Manresa, a aproximadamente una hora de Barcelona." },
        { question: "¿Qué hacer en el Bages en un fin de semana?", answer: "Montserrat un día, y el otro Manresa o Cardona, con una visita a una bodega del Pla de Bages. Desde Cal Masses todo queda a menos de una hora." },
        { question: "¿Cuál es la mejor época para visitar el Bages?", answer: "Primavera y otoño son ideales para caminar; el verano para combinar excursiones matinales con piscina; el invierno para ver Montserrat con menos gente." },
      ],
    },
  ],

  enoturismo: [
    {
      kind: "text",
      id: "claves",
      eyebrow: "La DO",
      h2: "El Pla de Bages en cuatro claves",
      paragraphs: [
        "Para entender el vino de la zona ayuda conocer un poco su historia y sus particularidades.",
      ],
      h3Blocks: [
        { h3: "Una DO pequeña", paragraphs: ["La DO Pla de Bages es una de las denominaciones más pequeñas de Cataluña, con viñedos alrededor de Manresa y bodegas mayoritariamente familiares."] },
        { h3: "El picapoll", paragraphs: ["Variedad blanca autóctona y la uva más característica de la zona. Da vinos frescos y aromáticos; si pruebas un solo vino del Bages, que sea un picapoll."] },
        { h3: "Las tines", paragraphs: ["Depósitos de piedra seca construidos en medio de las viñas para fermentar el vino allí mismo. El Bages conserva una de las mayores concentraciones."] },
        { h3: "Viña después de la filoxera", paragraphs: ["A finales del siglo XIX la filoxera arrasó buena parte de las viñas del Bages y muchas tierras pasaron a cereal. Hoy el viñedo se recupera con proyectos pequeños como el nuestro."] },
      ],
    },
    {
      kind: "places",
      id: "lugares-vino",
      eyebrow: "Visitas",
      h2: "Lugares del vino cerca de Cal Masses",
      items: [
        { name: "Oller del Mas", time: "≈ 20 min", text: "Bodega en una finca con castillo a las afueras de Manresa." },
        { name: "Abadal", time: "≈ 40 min", text: "Bodega en Santa Maria d'Horta d'Avinyó, una de las más conocidas de la DO y muy vinculada al picapoll." },
        { name: "Tines de la Vall del Flequer", time: "≈ 40 min", text: "Paseo entre tines de piedra seca en un entorno natural protegido." },
        { name: "SISU, en Cal Masses", time: "En la finca", text: "Nuestro pequeño proyecto de vino, nacido del viñedo que rodea el alojamiento." },
      ],
      note: "Reserva siempre las visitas con antelación: muchas bodegas solo abren con cita. La Ruta del Vino DO Pla de Bages recoge la oferta actualizada.",
    },
    {
      kind: "itinerary",
      id: "fin-de-semana-vino",
      eyebrow: "Plan",
      h2: "Un fin de semana de vino en el Pla de Bages",
      steps: [
        { when: "Sábado mañana", title: "Visita a una bodega", text: "Reserva una visita con cata. Las primeras horas son las más tranquilas." },
        { when: "Sábado mediodía", title: "Comida en Manresa", text: "Producto local en el centro, o compra en el mercado y comida en el patio de Cal Masses." },
        { when: "Sábado tarde", title: "Tines y paisaje", text: "Paseo entre tines de piedra seca para entender cómo se hacía el vino antes." },
        { when: "Domingo", title: "Montserrat o Manresa", text: "Cierra el fin de semana con la montaña por la mañana y vuelve a casa sin prisas después del check-out." },
      ],
    },
    {
      kind: "tips",
      id: "consejos-vino",
      eyebrow: "Consejos",
      h2: "Consejos para hacer enoturismo en el Bages",
      items: [
        { title: "Reserva con antelación", text: "La mayoría de bodegas del Pla de Bages son pequeñas y abren con cita previa, sobre todo fuera de temporada." },
        { title: "Decidid quién conduce", text: "Las bodegas están repartidas por la comarca: organizad las catas para que siempre haya alguien que no beba." },
        { title: "La vendimia", text: "Entre finales de agosto y octubre la actividad en viñas y bodegas es máxima. Es una época preciosa, pero algunas bodegas tienen menos disponibilidad para visitas." },
        { title: "Compra en la bodega", text: "Muchos vinos de la DO tienen una distribución pequeña; la bodega es el mejor sitio para encontrarlos." },
      ],
    },
    {
      kind: "faq",
      id: "preguntas-vino",
      h2: "Preguntas frecuentes sobre enoturismo",
      items: [
        { question: "¿Qué uva es típica del Pla de Bages?", answer: "El picapoll, una variedad blanca autóctona. También se cultivan otras como macabeo, chardonnay, ull de llebre (tempranillo), merlot o cabernet sauvignon." },
        { question: "¿Hay que reservar las visitas a bodegas?", answer: "Sí, en la mayoría de casos. Son bodegas pequeñas y muchas solo reciben visitas con cita." },
        { question: "¿Cuándo es la vendimia en el Bages?", answer: "Normalmente entre finales de agosto y octubre, según la variedad y el año." },
        { question: "¿Cal Masses es una bodega?", answer: "No. Hacemos pequeñas elaboraciones de nuestro vino, SISU, pero no somos una bodega turística ni organizamos catas." },
      ],
    },
  ],

  paraDos: [
    {
      kind: "tips",
      id: "sin-salir",
      eyebrow: "En la finca",
      h2: "Lo que tenéis a mano sin coger el coche",
      intro: [
        "Una escapada para dos también puede ser no moverse demasiado. Esto es lo que hay en Cal Masses para los días tranquilos.",
      ],
      items: [
        { title: "Jacuzzi", text: "En el baño del alojamiento, solo para vosotros. Ideal al final del día o en las noches frías." },
        { title: "Patio privado", text: "Con mesa y mobiliario exterior para desayunar, comer o cenar fuera." },
        { title: "Piscina de agua salada", text: "Exterior y compartida, abierta en verano y sin horario fijo." },
        { title: "Bicicletas y caminos", text: "Hay bicicletas en la finca y caminos que salen directamente hacia campos y bosques." },
        { title: "Barbacoa", text: "Zona de barbacoa en la finca. En épocas de riesgo de incendio no se puede encender fuego: pregúntanos antes." },
        { title: "Mesa de pimpón", text: "Para una partida antes de cenar." },
      ],
    },
    {
      kind: "itinerary",
      id: "dos-noches",
      eyebrow: "Plan",
      h2: "Una escapada de dos noches, paso a paso",
      steps: [
        { when: "Día 1 · 16:00", title: "Llegada sin esperas", text: "La llegada es autónoma, con caja de seguridad para las llaves. Si venís de Barcelona, parad a comprar en Manresa (20 minutos antes de llegar)." },
        { when: "Día 1 · tarde", title: "Paseo y jacuzzi", text: "Un paseo por los caminos de la finca al atardecer y, después, jacuzzi y cena en el patio." },
        { when: "Día 2 · mañana", title: "Montserrat temprano", text: "A 25 minutos. Llegando pronto evitáis las colas y tenéis tiempo de caminar por la parte alta." },
        { when: "Día 2 · tarde", title: "Bodega o piscina", text: "Una visita a una bodega del Pla de Bages o, en verano, la tarde en la piscina." },
        { when: "Día 3 · mañana", title: "Desayuno sin prisa", text: "La salida es hasta las 11:00. De vuelta, Manresa o Món Sant Benet quedan de camino." },
      ],
    },
    {
      kind: "faq",
      id: "preguntas-pareja",
      h2: "Preguntas frecuentes para parejas",
      items: [
        { question: "¿El alojamiento es solo para nosotros?", answer: "Sí. Es un alojamiento entero para dos personas. La piscina y los caminos de la finca son espacios compartidos." },
        { question: "¿El jacuzzi es privado?", answer: "Sí. Está dentro del alojamiento, en el baño, así que es solo para vosotros." },
        { question: "¿Podemos llegar tarde?", answer: "Sí, la llegada es autónoma a partir de las 16:00 con caja de seguridad para las llaves." },
        { question: "¿Hay animales en la finca?", answer: "Hay gallinas y un par de gatos muy sociables que viven fuera. Si tenéis alergia, avisadnos antes de reservar." },
      ],
    },
  ],

  piscina: [
    {
      kind: "facts",
      id: "datos-piscina",
      eyebrow: "La piscina",
      h2: "La piscina, en datos",
      intro: [
        "Preferimos explicarlo todo claro antes de que reserves, para que sepas exactamente qué vas a encontrar.",
      ],
      rows: [
        ["Tipo", "Exterior, de agua salada"],
        ["Uso", "Compartida con la familia que vive en la finca"],
        ["Temporada", "Verano (las fechas exactas dependen del tiempo de cada año)"],
        ["Horario", "Sin horario fijo"],
        ["Normas", "Sentido común y respeto por el descanso de todos"],
      ],
    },
    {
      kind: "text",
      id: "compartida",
      eyebrow: "Sin sorpresas",
      h2: "Qué significa que sea compartida",
      paragraphs: [
        "Cal Masses es también nuestra casa. La piscina está en la finca y es compartida: la podemos usar quienes vivimos aquí y los huéspedes.",
        "En la práctica, quienes vivimos aquí no solemos usarla cuando hay huéspedes. Aun así, si para vosotros es importante tener una piscina privada garantizada, preferimos que lo sepáis antes de reservar.",
      ],
    },
    {
      kind: "tips",
      id: "mas-alla",
      eyebrow: "Al aire libre",
      h2: "Más allá de la piscina",
      items: [
        { title: "Patio privado", text: "Con comedor exterior, para comer o cenar fuera en las noches de verano." },
        { title: "Jacuzzi interior", text: "Para cuando no apetece agua fría o fuera de la temporada de piscina." },
        { title: "Bicicletas", text: "Disponibles en la finca, para salir por los caminos a primera hora, antes del calor." },
        { title: "Mesa de pimpón y barbacoa", text: "Para las tardes largas. La barbacoa depende de las restricciones de fuego de cada momento." },
      ],
    },
    {
      kind: "faq",
      id: "preguntas-piscina",
      h2: "Preguntas frecuentes sobre la piscina",
      items: [
        { question: "¿Cuándo está abierta la piscina?", answer: "En verano. Si viajas a principios o a finales de temporada, pregúntanos y te diremos si está disponible." },
        { question: "¿Es de agua salada?", answer: "Sí, es una piscina exterior de agua salada." },
        { question: "¿Es privada?", answer: "No, es compartida con la familia de la finca, aunque cuando hay huéspedes solemos dejarla libre." },
        { question: "¿Qué hay fuera de temporada?", answer: "El alojamiento tiene jacuzzi en el baño, aire acondicionado y calefacción." },
      ],
    },
  ],

  barcelona: [
    {
      kind: "facts",
      id: "como-llegar",
      eyebrow: "Cómo llegar",
      h2: "Cómo llegar desde Barcelona",
      rows: [
        ["En coche", "Aprox. 65 km y 1 h 10 min. Las rutas habituales son por la C-16 hacia Manresa o por la A-2 y la C-55, bordeando Montserrat."],
        ["En tren + taxi", "Rodalies R4 o FGC R5 hasta Manresa y, desde allí, unos 20 minutos en taxi o coche hasta Cal Masses."],
        ["Desde el aeropuerto", "Aprox. 1 h en coche desde El Prat."],
        ["Llegada y salida", "Llegada autónoma a partir de las 16:00. Salida hasta las 11:00."],
      ],
      note: "Los viernes por la tarde la salida de Barcelona suele ir cargada; los domingos por la tarde, la entrada.",
    },
    {
      kind: "itinerary",
      id: "fin-de-semana",
      eyebrow: "Plan",
      h2: "Un fin de semana desde Barcelona",
      steps: [
        { when: "Viernes", title: "Salida después de comer", text: "Saliendo temprano evitas lo peor del tráfico. Para en Manresa a comprar y llega a partir de las 16:00." },
        { when: "Sábado mañana", title: "Montserrat", text: "A 25 minutos. Desde aquí llegas antes que la mayoría de visitantes que suben desde Barcelona." },
        { when: "Sábado tarde", title: "Bodega o piscina", text: "Una visita a una bodega del Pla de Bages o, en verano, piscina y cena en el patio." },
        { when: "Domingo", title: "Manresa y vuelta", text: "Check-out hasta las 11:00, paseo por Manresa o Món Sant Benet y vuelta a Barcelona antes del tráfico de la tarde." },
      ],
    },
    {
      kind: "faq",
      id: "preguntas-barcelona",
      h2: "Preguntas frecuentes",
      items: [
        { question: "¿A cuánto está Cal Masses de Barcelona?", answer: "A unos 65 km, aproximadamente 1 h 10 min en coche." },
        { question: "¿Se puede ir sin coche?", answer: "Sí, en tren hasta Manresa (R4 o R5) y desde allí en taxi. Para moverte por la zona durante la estancia, el coche es muy recomendable." },
        { question: "¿Vale la pena para una sola noche?", answer: "Sí, pero dos noches permiten combinar Montserrat, el Bages y tiempo de descanso en la finca sin ir con prisas." },
        { question: "¿Hay playa cerca?", answer: "La costa queda a aproximadamente una hora en coche." },
      ],
    },
  ],

  alojamiento: [
    {
      kind: "facts",
      id: "equipamiento",
      eyebrow: "Equipamiento",
      h2: "Todo el equipamiento, al detalle",
      intro: [
        "La lista completa de lo que encontrarás, para que no tengas que preguntar ni traer cosas de más.",
      ],
      rows: [
        ["Cocina", "Horno, microondas, nevera, congelador, cafetera, tostadora, utensilios básicos, platos, cubiertos y copas de vino"],
        ["Dormitorio", "Ropa de cama, perchas y persianas o cortinas opacas"],
        ["Baño", "Jacuzzi, agua caliente, secador de pelo y champú"],
        ["Confort", "Aire acondicionado, calefacción, Wi-Fi, televisión y zona para trabajar"],
        ["Lavandería", "Lavadora, secadora y plancha"],
        ["Exterior", "Patio privado con comedor y mobiliario exterior, barbacoa y piscina compartida de agua salada en verano"],
        ["En la finca", "Bicicletas, mesa de pimpón y caminos por campos y bosques"],
        ["Seguridad", "Detector de humo, extintor y botiquín"],
        ["Llegada", "Autónoma, con caja de seguridad para las llaves, a partir de las 16:00"],
        ["Aparcamiento", "Gratuito, en la misma finca"],
      ],
      note: "¿Necesitas algo que no aparece en la lista? Pregúntanos antes de venir.",
    },
    {
      kind: "tips",
      id: "bueno-saber",
      eyebrow: "Antes de venir",
      h2: "Bueno saber antes de reservar",
      items: [
        { title: "Animales en la finca", text: "Hay gallinas y un par de gatos muy sociables que viven fuera. Si tienes alergia, avísanos." },
        { title: "Sin fuego", text: "Está prohibido hacer fuego. La barbacoa solo se puede usar cuando las restricciones lo permiten." },
        { title: "Silencio y entorno", text: "Es un lugar tranquilo en plena naturaleza: te pedimos respetar el silencio y el medio ambiente." },
        { title: "Coche recomendado", text: "Estamos en una zona rural. Para la compra, lo más cómodo es Manresa, a 20 minutos." },
      ],
    },
  ],

  finca: [
    {
      kind: "text",
      id: "que-hay",
      eyebrow: "La finca",
      h2: "Qué hay en Cal Masses",
      paragraphs: [
        "El alojamiento está dentro de una finca agrícola en activo. Los huéspedes pueden recorrer libremente los campos y los bosques.",
      ],
      h3Blocks: [
        { h3: "Bosques y campos", paragraphs: ["Bosque mediterráneo y campos de cereal y forraje que cambian de color a lo largo del año."] },
        { h3: "Viñedo joven", paragraphs: ["Las viñas de las que nace SISU, nuestro vino. Un viñedo todavía joven que crece con el proyecto."] },
        { h3: "Huerto ecológico", paragraphs: ["Cultivamos un huerto ecológico para casa, siguiendo el ritmo de cada temporada."] },
        { h3: "Gallinas y gatos", paragraphs: ["Las gallinas forman parte de la finca y un par de gatos muy sociables cuidan de ella. Viven fuera; si tienes alergia, avísanos."] },
      ],
    },
    {
      kind: "text",
      id: "ano",
      eyebrow: "Calendario",
      h2: "La finca a lo largo del año",
      paragraphs: [
        "Lo que verás depende de cuándo vengas. Este es, a grandes rasgos, el ritmo de una finca como la nuestra.",
      ],
      h3Blocks: [
        { h3: "Invierno", paragraphs: ["Poda de la viña y campos en reposo. Días cortos y claros, buenos para caminar."] },
        { h3: "Primavera", paragraphs: ["Brota la viña, crecen los cereales y empieza la temporada del huerto."] },
        { h3: "Verano", paragraphs: ["Siega de cereal y forraje, mañanas tempranas de trabajo y piscina por la tarde."] },
        { h3: "Otoño", paragraphs: ["Vendimia y elaboración de SISU. La época con más actividad en la viña."] },
      ],
    },
    {
      kind: "tips",
      id: "hacer",
      eyebrow: "Planes",
      h2: "Qué puedes hacer sin salir de la finca",
      items: [
        { title: "Caminar y correr", text: "Desde el alojamiento salen caminos entre campos y bosques, sin necesidad de coger el coche." },
        { title: "Ir en bicicleta", text: "Hay bicicletas disponibles en la finca." },
        { title: "Escuchar el campo", text: "Por la mañana y al atardecer, el canto de los pájaros es el único ruido." },
        { title: "Piscina y patio", text: "En verano, piscina de agua salada; todo el año, patio privado para comer fuera." },
      ],
    },
  ],

  contacto: [
    {
      kind: "facts",
      id: "como-llegar",
      eyebrow: "Ubicación",
      h2: "Cómo llegar a Cal Masses",
      rows: [
        ["Dirección", "Raval del Sellarès, Cal Masses, s/n · 08253 Sant Salvador de Guardiola (Barcelona)"],
        ["Coordenadas GPS", "41.6778, 1.7558"],
        ["Desde Manresa", "Aprox. 11 km · 20 min en coche"],
        ["Desde Montserrat", "Aprox. 20 km · 25 min en coche"],
        ["Desde Barcelona", "Aprox. 65 km · 1 h 10 min en coche"],
        ["Sin coche", "Tren hasta Manresa (Rodalies R4 o FGC R5) y taxi hasta Cal Masses"],
        ["Aparcamiento", "Gratuito, dentro de la finca"],
        ["Llegada y salida", "Llegada autónoma desde las 16:00 · salida hasta las 11:00"],
      ],
      note: "En zonas rurales la dirección postal no siempre se localiza bien en el GPS: si es así, usa las coordenadas.",
    },
  ],
};
