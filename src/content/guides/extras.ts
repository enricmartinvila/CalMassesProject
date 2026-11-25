import type { Lang } from "../../config/siteConfig";
import type { GuideBundle } from "./types";

/** Extra in-depth blocks per landing. Inserted before each page's FAQ. */
export const guideExtras: Record<Lang, GuideBundle> = {
  es: {
    montserrat: [
      { kind: "facts", id: "rutas", eyebrow: "Senderismo", h2: "Qué ruta elegir según el tiempo que tengas", intro: ["Además del monasterio, Montserrat tiene una vertiente oeste más tranquila, que se visita desde el coll de Can Maçana."], rows: [
        ["Solo una mañana", "Basílica, plaza del monasterio y un paseo corto por los miradores cercanos."],
        ["Roca Foradada", "Unos 3 km y 45 minutos de subida desde Can Maçana hasta la base de la roca agujereada."],
        ["Agulles y Frares Encantats", "Circular desde Can Maçana de unos 7 km, 600 m de desnivel y algo más de 3 horas sin paradas, pasando por el refugio Vicenç Barbé."],
        ["Día completo en la cima", "Funicular de Sant Joan y camino a Sant Jeroni (1.236 m)."],
      ], note: "Son referencias orientativas: consulta un mapa actualizado. En verano, el riesgo de incendio puede cerrar accesos y funiculares." },
    ],
    manresa: [
      { kind: "places", id: "naturaleza-manresa", eyebrow: "Más allá del centro", h2: "Agua, caminos y pueblos junto a Manresa", items: [
        { name: "La Séquia", text: "Canal del siglo XIV, de unos 26 km, que lleva agua del Llobregat desde Balsareny hasta Manresa y sigue en uso. Su recorrido pasa por Sallent, Santpedor y Sant Fruitós." },
        { name: "Parc de l'Agulla", text: "El lago donde termina la Séquia. Aquí está el centro de visitantes del Parc de la Séquia: un paseo fácil para empezar o acabar el día." },
        { name: "Castillo de Guardiola", text: "Ruinas de un castillo documentado en el siglo X, en el mismo municipio que Cal Masses. Al lado está la capilla gótica de la Mare de Déu de Gràcia." },
        { name: "Sant Sadurní de Salelles", text: "Iglesia románica de Salelles, también en Sant Salvador de Guardiola, con un retablo conservado." },
      ] },
      { kind: "tips", id: "ruta-barroca", eyebrow: "Cultura", h2: "Si te interesa el barroco o el Camí Ignasià", items: [
        { title: "Reserva algo más de una hora para el museo", text: "El Museu del Barroc está en la plaza de Sant Ignasi. Se puede visitar por libre, con visita guiada o con audioguía." },
        { title: "Enlaza museo y Cova", text: "El itinerario barroco de la ciudad une el museo, el Ayuntamiento, el antiguo Palau del Consell y la Cova de Sant Ignasi." },
      ] },
    ],
    bages: [
      { kind: "facts", id: "cuantos-dias", eyebrow: "Planifica", h2: "Cuántos días dedicar al Bages", rows: [
        ["Una noche", "Manresa o Montserrat, y tiempo para disfrutar del alojamiento."],
        ["Dos noches", "Montserrat un día y, el otro, Manresa con una bodega o un paseo entre tines."],
        ["Tres noches", "Lo anterior y Cardona, con su castillo y la Muntanya de Sal."],
        ["Cuatro o más", "Añade Món Sant Benet, Sant Llorenç del Munt y un día entero sin salir de la finca."],
      ] },
      { kind: "places", id: "sant-salvador", eyebrow: "Aquí mismo", h2: "Qué ver en Sant Salvador de Guardiola", intro: ["El municipio de Cal Masses también tiene patrimonio propio, poco conocido y cercano."], items: [
        { name: "Castillo de Guardiola", text: "Ruinas sobre el cerro de Can Miralda, con restos documentados desde el siglo X y vistas sobre el entorno." },
        { name: "Mare de Déu de Gràcia", text: "Capilla gótica del siglo XVI junto al castillo, con un porche y un friso de piedra con inscripciones." },
        { name: "Sant Sadurní de Salelles", text: "Iglesia románica con retablo conservado, en el núcleo de Salelles." },
      ], note: "Confirma los horarios de apertura de las iglesias antes de ir." },
    ],
    enoturismo: [
      { kind: "facts", id: "uvas", eyebrow: "En la copa", h2: "Qué uvas probar en el Pla de Bages", intro: ["La DO reúne 17 bodegas según su consejo regulador. Antes de la filoxera el Bages llegó a tener unas 27.700 hectáreas de viña."], rows: [
        ["Picapoll", "Blanca autóctona, la más representativa de la zona."],
        ["Mandó", "Tinta ancestral recuperada, entre otras bodegas, por Abadal a partir de viñas viejas."],
        ["Sumoll", "Tinta autóctona que varios productores han vuelto a elaborar."],
        ["Picapoll negre", "Variante tinta, también autorizada en la DO."],
        ["Garnacha y ull de llebre", "Tintas conocidas, buenas para comparar con las autóctonas."],
      ] },
      { kind: "text", id: "tines-ruta", eyebrow: "A pie", h2: "La ruta de las tines de la Vall del Flequer", paragraphs: [
        "Es la mejor manera de ver el pasado vitícola del Bages: conjuntos de tines de piedra seca a ambos lados del torrente del Flequer.",
        "El punto de salida habitual es el aparcamiento de Ca n'Oristrell, junto a la carretera BV-1224 entre El Pont de Vilomara y Rocafort, poco antes del km 4. Calcula unas 2 horas caminando, sin paradas.",
        "Lleva agua y protección solar: es zona de montaña baja y en verano conviene ir a primera hora.",
      ] },
    ],
    paraDos: [
      { kind: "facts", id: "encaja", eyebrow: "Sinceros", h2: "¿Es la escapada que buscáis?", rows: [
        ["Sí, si queréis", "Un alojamiento entero para dos, con jacuzzi, cocina y patio privado, en una finca con viñedo."],
        ["Sí, si os gusta", "Cocinar, pasear, leer y decidir cada día si salís o no."],
        ["Quizá no, si buscáis", "Restaurante, recepción o servicios de hotel en el propio alojamiento."],
        ["Quizá no, si necesitáis", "Viajar con mascota, celebrar una fiesta o tener una piscina privada garantizada."],
      ] },
      { kind: "text", id: "por-estacion", eyebrow: "Cuándo venir", h2: "La escapada en pareja según la estación", paragraphs: ["El jacuzzi está dentro y funciona como plan todo el año; lo que cambia es el resto del día."], h3Blocks: [
        { h3: "Otoño e invierno", paragraphs: ["Caminar a mediodía, volver temprano, jacuzzi y cena en casa. El alojamiento tiene calefacción."] },
        { h3: "Primavera", paragraphs: ["Buen momento para Montserrat, las tines y las comidas en el patio."] },
        { h3: "Verano", paragraphs: ["Salir temprano, piscina por la tarde y aire acondicionado por la noche."] },
        { h3: "Vendimia", paragraphs: ["Entre finales de agosto y octubre, el paisaje del vino está en su momento más activo."] },
      ] },
    ],
    piscina: [
      { kind: "itinerary", id: "dia-verano", eyebrow: "Plan", h2: "Un día de verano en la finca", intro: ["En el interior el calor aprieta a mediodía. Este orden funciona mejor que salir a las doce."], steps: [
        { when: "Primera hora", title: "Caminar o ir en bici", text: "Los caminos salen de la finca, y hay bicicletas disponibles." },
        { when: "Media mañana", title: "Piscina", text: "Baño en la piscina de agua salada, que no tiene horario fijo." },
        { when: "Mediodía", title: "Comer en casa", text: "Cocina equipada y mesa en el patio, o interior con aire acondicionado." },
        { when: "Tarde", title: "Piscina o excursión corta", text: "Otro baño, o Manresa, a 20 minutos en coche." },
        { when: "Noche", title: "Cena fuera y jacuzzi", text: "Cena en el patio y, para terminar, el jacuzzi del baño." },
      ] },
      { kind: "facts", id: "piscina-o-jacuzzi", eyebrow: "Compara", h2: "Piscina y jacuzzi: qué tienes en cada época", rows: [
        ["Piscina", "Exterior, de agua salada, compartida y solo en verano."],
        ["Jacuzzi", "Dentro del alojamiento, en el baño, para uso exclusivo de los huéspedes."],
        ["Verano", "Piscina y jacuzzi."],
        ["Resto del año", "Jacuzzi y calefacción."],
      ] },
      { kind: "places", id: "cerca-piscina", eyebrow: "Para combinar", h2: "Excursiones de medio día y vuelta al agua", items: [
        { name: "Montserrat", time: "≈ 25 min", text: "Sube temprano y vuelve antes de las horas de más calor." },
        { name: "Manresa", time: "≈ 20 min", text: "La Seu, el casco antiguo y la compra para la cena." },
        { name: "Bodegas del Pla de Bages", text: "Una visita con reserva a primera hora, con la viña en plena temporada." },
      ], note: "Tiempos aproximados en coche." },
    ],
    barcelona: [
      { kind: "facts", id: "cuantas-noches", eyebrow: "Planifica", h2: "Una, dos o tres noches desde Barcelona", rows: [
        ["Una noche", "Llegada a las 16:00, paseo por la finca, jacuzzi y cena. Al día siguiente, Manresa de vuelta."],
        ["Dos noches", "Un día completo para Montserrat o una bodega, sin prisas."],
        ["Tres noches", "Montserrat, vino y un día entero sin coger el coche."],
        ["Entre semana", "Menos gente en Montserrat y menos tráfico que un viernes por la tarde."],
      ] },
      { kind: "tips", id: "antes-salir", eyebrow: "Antes de salir", h2: "Qué preparar para la escapada", items: [
        { title: "La compra", text: "Estamos en zona rural. Compra antes de salir o en Manresa: la cocina tiene horno, microondas, nevera y congelador." },
        { title: "Calzado", text: "Si vas a caminar por Montserrat o por la finca, trae calzado cerrado con buena suela." },
        { title: "Una capa de abrigo", text: "Las noches del interior suelen ser más frescas que en la costa." },
        { title: "Reservas", text: "Las bodegas y algunas visitas guiadas necesitan reserva, sobre todo en fin de semana." },
        { title: "Coordenadas", text: "Guarda 41.6778, 1.7558 antes de salir por si el navegador no encuentra la dirección." },
        { title: "Coche", text: "Con coche tendrás aparcamiento gratis en la finca y libertad para moverte por el Bages." },
      ] },
      { kind: "places", id: "de-camino", eyebrow: "De camino", h2: "Dónde parar entre Barcelona y Cal Masses", items: [
        { name: "Montserrat", text: "Viniendo por la A-2 y la C-55 pasas a los pies de la montaña: puedes subir el mismo día de llegada." },
        { name: "Manresa", text: "Viniendo por la C-16, es la parada natural para comer, pasear y hacer la compra." },
        { name: "Món Sant Benet", text: "El monasterio de Sant Benet de Bages, cerca de Manresa, encaja bien el día de vuelta." },
      ] },
    ],
  },
  ca: {
    montserrat: [
      { kind: "facts", id: "rutes", eyebrow: "Senderisme", h2: "Quina ruta triar segons el temps que tinguis", intro: ["A més del monestir, Montserrat té una banda oest més tranquil·la, que es visita des del coll de Can Maçana."], rows: [
        ["Només un matí", "Basílica, plaça del monestir i un passeig curt pels miradors propers."],
        ["Roca Foradada", "Uns 3 km i 45 minuts de pujada des de Can Maçana fins a la base de la roca."],
        ["Agulles i Frares Encantats", "Circular des de Can Maçana d'uns 7 km, 600 m de desnivell i una mica més de 3 hores sense parades, passant pel refugi Vicenç Barbé."],
        ["Dia complet al cim", "Funicular de Sant Joan i camí a Sant Jeroni (1.236 m)."],
      ], note: "Són referències orientatives: consulta un mapa actualitzat. A l'estiu, el risc d'incendi pot tancar accessos i funiculars." },
    ],
    manresa: [
      { kind: "places", id: "natura-manresa", eyebrow: "Més enllà del centre", h2: "Aigua, camins i pobles al costat de Manresa", items: [
        { name: "La Sèquia", text: "Canal del segle XIV, d'uns 26 km, que porta aigua del Llobregat des de Balsareny fins a Manresa i continua en ús. Passa per Sallent, Santpedor i Sant Fruitós." },
        { name: "Parc de l'Agulla", text: "El llac on acaba la Sèquia. Aquí hi ha el centre de visitants del Parc de la Sèquia: un passeig fàcil per començar o acabar el dia." },
        { name: "Castell de Guardiola", text: "Ruïnes d'un castell documentat al segle X, al mateix municipi que Cal Masses. Al costat hi ha la capella gòtica de la Mare de Déu de Gràcia." },
        { name: "Sant Sadurní de Salelles", text: "Església romànica de Salelles, també a Sant Salvador de Guardiola, amb un retaule conservat." },
      ] },
      { kind: "tips", id: "ruta-barroca", eyebrow: "Cultura", h2: "Si t'interessa el barroc o el Camí Ignasià", items: [
        { title: "Reserva una mica més d'una hora per al museu", text: "El Museu del Barroc és a la plaça de Sant Ignasi. Es pot visitar per lliure, amb visita guiada o amb audioguia." },
        { title: "Enllaça museu i Cova", text: "L'itinerari barroc de la ciutat uneix el museu, l'Ajuntament, l'antic Palau del Consell i la Cova de Sant Ignasi." },
      ] },
    ],
    bages: [
      { kind: "facts", id: "quants-dies", eyebrow: "Planifica", h2: "Quants dies dedicar al Bages", rows: [
        ["Una nit", "Manresa o Montserrat, i temps per gaudir de l'allotjament."],
        ["Dues nits", "Montserrat un dia i, l'altre, Manresa amb un celler o un passeig entre tines."],
        ["Tres nits", "L'anterior i Cardona, amb el castell i la Muntanya de Sal."],
        ["Quatre o més", "Afegeix-hi Món Sant Benet, Sant Llorenç del Munt i un dia sencer sense sortir de la finca."],
      ] },
      { kind: "places", id: "sant-salvador", eyebrow: "Aquí mateix", h2: "Què veure a Sant Salvador de Guardiola", intro: ["El municipi de Cal Masses també té patrimoni propi, poc conegut i proper."], items: [
        { name: "Castell de Guardiola", text: "Ruïnes al turó de Can Miralda, amb restes documentades des del segle X i vistes sobre l'entorn." },
        { name: "Mare de Déu de Gràcia", text: "Capella gòtica del segle XVI al costat del castell, amb un porxo i un fris de pedra amb inscripcions." },
        { name: "Sant Sadurní de Salelles", text: "Església romànica amb retaule conservat, al nucli de Salelles." },
      ], note: "Confirma els horaris d'obertura de les esglésies abans d'anar-hi." },
    ],
    enoturismo: [
      { kind: "facts", id: "raims", eyebrow: "A la copa", h2: "Quins raïms tastar al Pla de Bages", intro: ["La DO reuneix 17 cellers segons el seu consell regulador. Abans de la fil·loxera el Bages va arribar a tenir unes 27.700 hectàrees de vinya."], rows: [
        ["Picapoll", "Blanca autòctona, la més representativa de la zona."],
        ["Mandó", "Negra ancestral recuperada, entre altres cellers, per Abadal a partir de vinyes velles."],
        ["Sumoll", "Negra autòctona que diversos productors han tornat a elaborar."],
        ["Picapoll negre", "Variant negra, també autoritzada a la DO."],
        ["Garnatxa i ull de llebre", "Negres conegudes, bones per comparar amb les autòctones."],
      ] },
      { kind: "text", id: "tines-ruta", eyebrow: "A peu", h2: "La ruta de les tines de la Vall del Flequer", paragraphs: [
        "És la millor manera de veure el passat vitícola del Bages: conjunts de tines de pedra seca a banda i banda del torrent del Flequer.",
        "El punt de sortida habitual és l'aparcament de Ca n'Oristrell, a la carretera BV-1224 entre el Pont de Vilomara i Rocafort, poc abans del km 4. Calcula unes 2 hores caminant, sense parades.",
        "Porta aigua i protecció solar: a l'estiu convé anar-hi a primera hora.",
      ] },
    ],
    paraDos: [
      { kind: "facts", id: "encaixa", eyebrow: "Sincers", h2: "És l'escapada que busqueu?", rows: [
        ["Sí, si voleu", "Un allotjament sencer per a dos, amb jacuzzi, cuina i pati privat, en una finca amb vinya."],
        ["Sí, si us agrada", "Cuinar, passejar, llegir i decidir cada dia si sortiu o no."],
        ["Potser no, si busqueu", "Restaurant, recepció o serveis d'hotel al mateix allotjament."],
        ["Potser no, si necessiteu", "Viatjar amb mascota, celebrar una festa o tenir una piscina privada garantida."],
      ] },
      { kind: "text", id: "per-estacio", eyebrow: "Quan venir", h2: "L'escapada en parella segons l'estació", paragraphs: ["El jacuzzi és a dins i és un bon pla tot l'any; el que canvia és la resta del dia."], h3Blocks: [
        { h3: "Tardor i hivern", paragraphs: ["Caminar al migdia, tornar d'hora, jacuzzi i sopar a casa. L'allotjament té calefacció."] },
        { h3: "Primavera", paragraphs: ["Bon moment per a Montserrat, les tines i els àpats al pati."] },
        { h3: "Estiu", paragraphs: ["Sortir d'hora, piscina a la tarda i aire condicionat a la nit."] },
        { h3: "Verema", paragraphs: ["Entre finals d'agost i octubre, el paisatge del vi és en el moment més actiu."] },
      ] },
    ],
    piscina: [
      { kind: "itinerary", id: "dia-estiu", eyebrow: "Pla", h2: "Un dia d'estiu a la finca", intro: ["A l'interior la calor apreta al migdia. Aquest ordre funciona millor que sortir a les dotze."], steps: [
        { when: "Primera hora", title: "Caminar o anar en bici", text: "Els camins surten de la finca, i hi ha bicicletes disponibles." },
        { when: "Mig matí", title: "Piscina", text: "Bany a la piscina d'aigua salada, que no té horari fix." },
        { when: "Migdia", title: "Dinar a casa", text: "Cuina equipada i taula al pati, o interior amb aire condicionat." },
        { when: "Tarda", title: "Piscina o excursió curta", text: "Un altre bany, o Manresa, a 20 minuts en cotxe." },
        { when: "Nit", title: "Sopar a fora i jacuzzi", text: "Sopar al pati i, per acabar, el jacuzzi del bany." },
      ] },
      { kind: "facts", id: "piscina-o-jacuzzi", eyebrow: "Compara", h2: "Piscina i jacuzzi: què tens en cada època", rows: [
        ["Piscina", "Exterior, d'aigua salada, compartida i només a l'estiu."],
        ["Jacuzzi", "Dins de l'allotjament, al bany, per a ús exclusiu dels hostes."],
        ["Estiu", "Piscina i jacuzzi."],
        ["Resta de l'any", "Jacuzzi i calefacció."],
      ] },
      { kind: "places", id: "prop-piscina", eyebrow: "Per combinar", h2: "Excursions de mig dia i tornada a l'aigua", items: [
        { name: "Montserrat", time: "≈ 25 min", text: "Puja d'hora i torna abans de les hores de més calor." },
        { name: "Manresa", time: "≈ 20 min", text: "La Seu, el nucli antic i la compra per al sopar." },
        { name: "Cellers del Pla de Bages", text: "Una visita amb reserva a primera hora, amb la vinya en plena temporada." },
      ], note: "Temps aproximats en cotxe." },
    ],
    barcelona: [
      { kind: "facts", id: "quantes-nits", eyebrow: "Planifica", h2: "Una, dues o tres nits des de Barcelona", rows: [
        ["Una nit", "Arribada a les 16:00, passeig per la finca, jacuzzi i sopar. L'endemà, Manresa de tornada."],
        ["Dues nits", "Un dia complet per a Montserrat o un celler, sense presses."],
        ["Tres nits", "Montserrat, vi i un dia sencer sense agafar el cotxe."],
        ["Entre setmana", "Menys gent a Montserrat i menys trànsit que un divendres a la tarda."],
      ] },
      { kind: "tips", id: "abans-sortir", eyebrow: "Abans de sortir", h2: "Què preparar per a l'escapada", items: [
        { title: "La compra", text: "Som en zona rural. Compra abans de sortir o a Manresa: la cuina té forn, microones, nevera i congelador." },
        { title: "Calçat", text: "Si has de caminar per Montserrat o per la finca, porta calçat tancat amb bona sola." },
        { title: "Una capa d'abric", text: "Les nits de l'interior solen ser més fresques que a la costa." },
        { title: "Reserves", text: "Els cellers i algunes visites guiades demanen reserva, sobretot en cap de setmana." },
        { title: "Coordenades", text: "Desa 41.6778, 1.7558 abans de sortir per si el navegador no troba l'adreça." },
        { title: "Cotxe", text: "Amb cotxe tindràs aparcament gratuït a la finca i llibertat per moure't pel Bages." },
      ] },
      { kind: "places", id: "de-cami", eyebrow: "De camí", h2: "On parar entre Barcelona i Cal Masses", items: [
        { name: "Montserrat", text: "Venint per l'A-2 i la C-55 passes als peus de la muntanya: hi pots pujar el mateix dia d'arribada." },
        { name: "Manresa", text: "Venint per la C-16, és la parada natural per dinar, passejar i fer la compra." },
        { name: "Món Sant Benet", text: "El monestir de Sant Benet de Bages, a prop de Manresa, encaixa bé el dia de tornada." },
      ] },
    ],
  },
  en: {
    montserrat: [
      { kind: "facts", id: "walks", eyebrow: "Walking", h2: "Which walk to choose for the time you have", intro: ["Beyond the monastery, Montserrat has a quieter western side, reached from the Can Maçana pass."], rows: [
        ["Just a morning", "Basilica, monastery square and a short stroll to the nearby viewpoints."],
        ["Roca Foradada", "About 3 km and 45 minutes uphill from Can Maçana to the base of the pierced rock."],
        ["Agulles and Frares Encantats", "A loop from Can Maçana of about 7 km, with 600 m of ascent and just over 3 hours without stops, via the Vicenç Barbé refuge."],
        ["A full day to the summit", "Sant Joan funicular and the path to Sant Jeroni (1,236 m)."],
      ], note: "These are guideline figures: check an up-to-date map. In summer, fire risk can close access and funiculars." },
    ],
    manresa: [
      { kind: "places", id: "around-manresa", eyebrow: "Beyond the centre", h2: "Water, trails and villages around Manresa", items: [
        { name: "La Sèquia", text: "A 14th-century canal, about 26 km long, carrying Llobregat water from Balsareny to Manresa and still in use. It passes Sallent, Santpedor and Sant Fruitós." },
        { name: "Parc de l'Agulla", text: "The lake where the Sèquia ends, home to the Parc de la Sèquia visitor centre: an easy stroll to start or end the day." },
        { name: "Guardiola castle", text: "Ruins of a castle recorded in the 10th century, in the same municipality as Cal Masses. Next to it stands the Gothic chapel of Mare de Déu de Gràcia." },
        { name: "Sant Sadurní de Salelles", text: "The Romanesque church of Salelles, also in Sant Salvador de Guardiola, with a surviving altarpiece." },
      ] },
      { kind: "tips", id: "baroque", eyebrow: "Culture", h2: "If you like the Baroque or the Ignatian Way", items: [
        { title: "Allow just over an hour for the museum", text: "The Museu del Barroc is on Plaça de Sant Ignasi. Visit on your own, on a guided tour or with an audio guide." },
        { title: "Link the museum and the Cova", text: "The city's Baroque itinerary joins the museum, the town hall, the old Palau del Consell and the Cova de Sant Ignasi." },
      ] },
    ],
    bages: [
      { kind: "facts", id: "how-long", eyebrow: "Plan", h2: "How many days to spend in the Bages", rows: [
        ["One night", "Manresa or Montserrat, plus time to enjoy the accommodation."],
        ["Two nights", "Montserrat one day and, the next, Manresa with a winery or a walk among the stone vats."],
        ["Three nights", "The above plus Cardona, with its castle and Salt Mountain."],
        ["Four or more", "Add Món Sant Benet, Sant Llorenç del Munt and a whole day on the farm."],
      ] },
      { kind: "places", id: "sant-salvador", eyebrow: "Right here", h2: "What to see in Sant Salvador de Guardiola", intro: ["Cal Masses' own municipality has little-known heritage close by."], items: [
        { name: "Guardiola castle", text: "Ruins on the Can Miralda hill, with remains recorded since the 10th century and views over the surroundings." },
        { name: "Mare de Déu de Gràcia", text: "A 16th-century Gothic chapel by the castle, with a porch and an inscribed stone frieze." },
        { name: "Sant Sadurní de Salelles", text: "A Romanesque church with a surviving altarpiece, in the hamlet of Salelles." },
      ], note: "Confirm church opening times before you go." },
    ],
    enoturismo: [
      { kind: "facts", id: "grapes", eyebrow: "In the glass", h2: "Which grapes to try in the Pla de Bages", intro: ["The DO has 17 wineries according to its regulatory council. Before phylloxera the Bages had around 27,700 hectares of vines."], rows: [
        ["Picapoll", "Native white, the area's most representative grape."],
        ["Mandó", "Ancestral red revived by Abadal, among others, from old vines."],
        ["Sumoll", "Native red that several producers have returned to."],
        ["Picapoll Negre", "The red variant, also authorised in the DO."],
        ["Grenache and Ull de Llebre", "Familiar reds, good to compare with the native ones."],
      ] },
      { kind: "text", id: "vats-walk", eyebrow: "On foot", h2: "The Vall del Flequer stone vats walk", paragraphs: [
        "The best way to see the Bages' winemaking past: groups of dry-stone vats on both sides of the Flequer stream.",
        "The usual start is the Ca n'Oristrell car park on the BV-1224 road between El Pont de Vilomara and Rocafort, shortly before km 4. Allow about 2 hours' walking, without stops.",
        "Bring water and sun protection: in summer, go early.",
      ] },
    ],
    paraDos: [
      { kind: "facts", id: "right-fit", eyebrow: "Honestly", h2: "Is this the getaway you want?", rows: [
        ["Yes, if you want", "An entire place for two with a hot tub, kitchen and private patio, on a farm with a vineyard."],
        ["Yes, if you enjoy", "Cooking, walking, reading and deciding each day whether to go out."],
        ["Maybe not, if you want", "A restaurant, reception or hotel services on site."],
        ["Maybe not, if you need", "To bring a pet, throw a party or have a guaranteed private pool."],
      ] },
      { kind: "text", id: "by-season", eyebrow: "When to come", h2: "A couple's getaway by season", paragraphs: ["The hot tub is indoors and works all year; what changes is the rest of the day."], h3Blocks: [
        { h3: "Autumn and winter", paragraphs: ["Walk around midday, come back early, hot tub and dinner in. The accommodation is heated."] },
        { h3: "Spring", paragraphs: ["A good time for Montserrat, the stone vats and meals on the patio."] },
        { h3: "Summer", paragraphs: ["Out early, pool in the afternoon and air conditioning at night."] },
        { h3: "Grape harvest", paragraphs: ["From late August to October, wine country is at its busiest."] },
      ] },
    ],
    piscina: [
      { kind: "itinerary", id: "summer-day", eyebrow: "Plan", h2: "A summer day on the farm", intro: ["Inland, midday heat is strong. This order works better than heading out at noon."], steps: [
        { when: "Early", title: "Walk or cycle", text: "Trails start at the farm, and bikes are available." },
        { when: "Mid-morning", title: "Pool", text: "A dip in the saltwater pool, which has no fixed hours." },
        { when: "Midday", title: "Lunch in", text: "Equipped kitchen and a patio table, or indoors with air conditioning." },
        { when: "Afternoon", title: "Pool or a short trip", text: "Another swim, or Manresa, 20 minutes by car." },
        { when: "Evening", title: "Dinner outside and hot tub", text: "Dinner on the patio and, to finish, the hot tub in the bathroom." },
      ] },
      { kind: "facts", id: "pool-or-tub", eyebrow: "Compare", h2: "Pool and hot tub: what you get when", rows: [
        ["Pool", "Outdoor, saltwater, shared and summer only."],
        ["Hot tub", "Inside the accommodation, in the bathroom, for guests' exclusive use."],
        ["Summer", "Pool and hot tub."],
        ["Rest of the year", "Hot tub and heating."],
      ] },
      { kind: "places", id: "near-pool", eyebrow: "Combine", h2: "Half-day trips and back to the water", items: [
        { name: "Montserrat", time: "≈ 25 min", text: "Go up early and return before the hottest hours." },
        { name: "Manresa", time: "≈ 20 min", text: "La Seu, the old town and shopping for dinner." },
        { name: "Pla de Bages wineries", text: "A booked visit early in the day, with the vines in full season." },
      ], note: "Approximate driving times." },
    ],
    barcelona: [
      { kind: "facts", id: "how-many-nights", eyebrow: "Plan", h2: "One, two or three nights from Barcelona", rows: [
        ["One night", "Arrive at 16:00, walk the farm, hot tub and dinner. Next day, Manresa on the way home."],
        ["Two nights", "A full day for Montserrat or a winery, unhurried."],
        ["Three nights", "Montserrat, wine and a whole day without the car."],
        ["Midweek", "Fewer people at Montserrat and less traffic than a Friday afternoon."],
      ] },
      { kind: "tips", id: "before-leaving", eyebrow: "Before you leave", h2: "What to prepare for the trip", items: [
        { title: "Groceries", text: "We're in a rural area. Shop before leaving or in Manresa: the kitchen has an oven, microwave, fridge and freezer." },
        { title: "Footwear", text: "For walking at Montserrat or on the farm, bring closed shoes with good soles." },
        { title: "A warm layer", text: "Inland nights are usually cooler than on the coast." },
        { title: "Bookings", text: "Wineries and some guided visits need booking, especially at weekends." },
        { title: "Coordinates", text: "Save 41.6778, 1.7558 before leaving in case your satnav can't find the address." },
        { title: "Car", text: "With a car you'll have free parking on the farm and freedom to explore the Bages." },
      ] },
      { kind: "places", id: "on-the-way", eyebrow: "On the way", h2: "Where to stop between Barcelona and Cal Masses", items: [
        { name: "Montserrat", text: "Coming by the A-2 and C-55 you pass the foot of the mountain: you can go up on your arrival day." },
        { name: "Manresa", text: "Coming by the C-16, it's the natural stop for lunch, a stroll and groceries." },
        { name: "Món Sant Benet", text: "The monastery of Sant Benet de Bages, near Manresa, fits well on the way home." },
      ] },
    ],
  },
};
