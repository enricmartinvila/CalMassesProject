import type { GuideBundle } from "./types";

const TEMPS = "Temps aproximats en cotxe des de Cal Masses, sense trànsit.";

export const guideCa: GuideBundle = {
  montserrat: [
    {
      kind: "facts",
      id: "com-pujar",
      eyebrow: "Com arribar",
      h2: "Quatre maneres de pujar a Montserrat des de Cal Masses",
      intro: [
        "Des de Cal Masses arribes a Montserrat en uns 25 minuts. Un cop a la muntanya pots pujar al monestir de diverses maneres; triar bé depèn de l'època de l'any i de quant vulguis caminar.",
      ],
      rows: [
        ["En cotxe fins al monestir", "L'opció més directa. A dalt hi ha aparcament de pagament que els caps de setmana i festius s'omple aviat: arriba abans de les 10:00."],
        ["Cremallera", "Tren cremallera des de Monistrol de Montserrat, on pots deixar el cotxe. Puja fins al monestir en uns 20 minuts i és l'opció més còmoda els dies de molta gent."],
        ["Aeri de Montserrat", "Telefèric des de l'estació Montserrat-Aeri, al costat de la carretera C-55. Trajecte curt i espectacular, amb vistes verticals sobre la vall del Llobregat."],
        ["A peu", "Camins senyalitzats des de Monistrol i des de Collbató. Demanen bona forma física, calçat adequat i aigua suficient."],
      ],
      note: "Horaris i tarifes del cremallera, l'aeri i els funiculars canvien segons la temporada: consulta'ls al web oficial de Montserrat abans d'anar-hi.",
    },
    {
      kind: "places",
      id: "que-veure",
      eyebrow: "Què veure",
      h2: "Què veure a Montserrat",
      intro: [
        "Montserrat és alhora un santuari, un parc natural i una muntanya de formes úniques. Aquests són els llocs que valen el viatge.",
      ],
      items: [
        { name: "Basílica i la Moreneta", text: "La talla romànica de la Mare de Déu de Montserrat es visita des de l'interior de la basílica. Els dies de molta gent hi ha cua: el millor és anar-hi a primera hora." },
        { name: "Escolania de Montserrat", text: "Un dels cors de nens més antics d'Europa. Canta a la basílica en dies i hores concrets, així que convé consultar el calendari abans de planificar la visita." },
        { name: "Camí de la Santa Cova", text: "Camí fins a la capella on, segons la tradició, es va trobar la imatge de la Mare de Déu. L'acompanyen les escultures del Rosari Monumental, amb obres d'autors com Gaudí o Puig i Cadafalch. Consulta abans si el camí i el funicular són oberts: hi ha tancaments per manteniment." },
        { name: "Sant Jeroni", text: "El cim més alt del massís (1.236 m). S'hi arriba a peu des de la part alta del funicular de Sant Joan. Els dies clars es veuen els Pirineus." },
        { name: "Museu de Montserrat", text: "Una col·lecció sorprenent per a un monestir: pintura d'El Greco, Caravaggio, Monet, Picasso o Dalí, i peces arqueològiques del Pròxim Orient. Bon pla si el dia surt ennuvolat." },
        { name: "Coves del Salnitre", text: "A Collbató, a la banda sud de la muntanya. Coves visitables amb visita guiada; convé reservar." },
      ],
    },
    {
      kind: "itinerary",
      id: "un-dia",
      eyebrow: "Pla",
      h2: "Un dia a Montserrat sortint de Cal Masses",
      intro: [
        "El gran avantatge de dormir a prop és poder arribar d'hora, abans que la majoria de visitants que pugen des de Barcelona, i tornar a descansar sense una hora de cotxe al davant.",
      ],
      steps: [
        { when: "8:30", title: "Esmorzar i sortida", text: "Esmorza amb calma al pati i surt cap a Montserrat. En 25 minuts ets a dalt." },
        { when: "9:15", title: "Basílica i la Moreneta", text: "A primera hora la cua per veure la Mare de Déu és molt més curta. Aprofita també per recórrer la plaça i l'atri abans que s'ompli." },
        { when: "10:30", title: "Funicular de Sant Joan i caminada", text: "Puja a la part alta i tria ruta: Sant Jeroni si et ve de gust caminar una bona estona, o un passeig més curt fins a les ermites i miradors propers." },
        { when: "14:00", title: "Dinar", text: "Hi ha restaurant i cafeteria al recinte. Una altra opció és baixar a algun poble dels voltants o tornar a Cal Masses i dinar al pati." },
        { when: "Tarda", title: "Santa Cova o museu", text: "Si el camí de la Santa Cova és obert, és una bona opció per a la tarda; el museu és l'alternativa si fa mal temps." },
        { when: "En tornar", title: "Jacuzzi i sopar a casa", text: "De tornada a Cal Masses en 25 minuts. El jacuzzi després d'un dia de caminar és difícil de superar." },
      ],
    },
    {
      kind: "tips",
      id: "consells",
      eyebrow: "Consells",
      h2: "Consells pràctics per visitar Montserrat",
      items: [
        { title: "Millor entre setmana", text: "Els caps de setmana i festius Montserrat rep molts visitants. Si pots triar, ves-hi de dilluns a divendres." },
        { title: "Porta una capa de més", text: "A dalt sol fer més fresca i més vent que a la vall, fins i tot a l'estiu." },
        { title: "Calçat de muntanya", text: "Els camins cap a Sant Jeroni i les ermites són pedregosos. Amb sabatilles de ciutat se't faran llargs." },
        { title: "Mira la previsió", text: "Amb boira la muntanya perd les vistes. Si el dia es lleva tapat, deixa la caminada per a un altre dia i prioritza basílica i museu." },
        { title: "Consulta horaris", text: "Escolania, funiculars, cremallera i museu canvien d'horari segons la temporada." },
        { title: "Combina-ho amb el Bages", text: "A la tarda pots visitar un celler del Pla de Bages o passejar per Manresa, tots dos a poca distància." },
      ],
    },
    {
      kind: "faq",
      id: "preguntes-montserrat",
      h2: "Preguntes freqüents sobre Montserrat",
      items: [
        { question: "A quina distància és Cal Masses de Montserrat?", answer: "A uns 20 km, aproximadament 25 minuts en cotxe fins al monestir." },
        { question: "Quant de temps cal per visitar Montserrat?", answer: "Mig dia per a la basílica, la Moreneta i un passeig curt. Un dia sencer si vols pujar a Sant Jeroni, fer el camí de la Santa Cova o visitar el museu." },
        { question: "Es pot anar a Montserrat sense cotxe des de Cal Masses?", answer: "Cal Masses és en una zona rural i el més pràctic és moure's en cotxe: fins al monestir o fins a Monistrol per pujar amb el cremallera." },
        { question: "Per què dormir a prop de Montserrat i no a Barcelona?", answer: "Perquè pots pujar d'hora, evitar més d'una hora de trajecte en cada sentit i combinar la visita amb la resta del Bages: Manresa, cellers i natura." },
      ],
    },
  ],

  manresa: [
    {
      kind: "places",
      id: "que-veure",
      eyebrow: "Què veure",
      h2: "Què veure a Manresa",
      intro: [
        "Manresa és la capital del Bages i és a uns 20 minuts de Cal Masses. El nucli antic es recorre a peu en un matí.",
      ],
      items: [
        { name: "La Seu", text: "La basílica gòtica de Santa Maria domina la ciutat des de dalt del nucli antic. Des dels voltants es veu el riu Cardener i, els dies clars, Montserrat al fons." },
        { name: "Cova de Sant Ignasi", text: "Ignasi de Loiola va viure a Manresa entre 1522 i 1523, i aquí va començar a escriure els Exercicis Espirituals. És també el final del Camí Ignasià." },
        { name: "Pont Vell", text: "Pont medieval sobre el Cardener, reconstruït després de la Guerra Civil. Des d'aquí es pren la imatge més coneguda de la Seu." },
        { name: "Carrer del Balç", text: "Carrer medieval cobert que conserva l'ambient de la Manresa antiga, amb un centre d'interpretació sobre la ciutat a l'edat mitjana." },
        { name: "Museu del Barroc de Catalunya", text: "Museu dedicat a l'art barroc català, amb retaules, escultura i pintura dels segles XVII i XVIII." },
        { name: "Mercat de Puigmercadal", text: "El mercat municipal: bon lloc per comprar producte local si cuinareu a Cal Masses." },
      ],
    },
    {
      kind: "itinerary",
      id: "mitja-jornada",
      eyebrow: "Pla",
      h2: "Mitja jornada a Manresa",
      steps: [
        { when: "10:00", title: "Pont Vell", text: "Aparca a prop del riu i comença pel pont: és la millor vista de la Seu." },
        { when: "10:30", title: "La Seu", text: "Puja a la basílica pels carrers del nucli antic i visita'n l'interior." },
        { when: "11:30", title: "Carrer del Balç i nucli antic", text: "Baixa pel centre històric passant pel carrer cobert del Balç." },
        { when: "12:30", title: "Cova de Sant Ignasi", text: "Visita la cova i el santuari, amb bones vistes sobre el riu." },
        { when: "13:30", title: "Mercat i compra", text: "Passa pel mercat o per un supermercat i torna a Cal Masses a dinar al pati." },
      ],
    },
    {
      kind: "tips",
      id: "practic",
      eyebrow: "Pràctic",
      h2: "Manresa com a base de serveis",
      intro: [
        "Més enllà del que s'hi visita, Manresa és la ciutat de referència durant l'estada: hi tens tot el que no hi ha al camp.",
      ],
      items: [
        { title: "Fer la compra", text: "L'allotjament té cuina equipada. El més còmode és comprar a Manresa en arribar: supermercats, mercat i botigues a 20 minuts." },
        { title: "Aparcar", text: "El nucli antic és de carrers estrets i costeruts. Deixa el cotxe en un aparcament dels afores del centre i puja a peu." },
        { title: "Tren a Barcelona", text: "Manresa té connexió directa amb Barcelona en tren (Rodalies R4 i FGC R5), útil si algú arriba o marxa en transport públic." },
        { title: "Serveis", text: "Farmàcies, benzineres, restaurants i hospital. Tot a una distància raonable de Cal Masses." },
      ],
    },
    {
      kind: "faq",
      id: "preguntes-manresa",
      h2: "Preguntes freqüents sobre Manresa",
      items: [
        { question: "A quina distància és Cal Masses de Manresa?", answer: "A uns 11 km, aproximadament 20 minuts en cotxe." },
        { question: "Per què allotjar-se a prop de Manresa i no a la ciutat?", answer: "Perquè tens la ciutat a 20 minuts per a visites i compres, i a la nit dorms en una finca envoltada de camp, bosc i vinya." },
        { question: "Què és el Camí Ignasià?", answer: "Una ruta de pelegrinatge de més de 600 km que reprodueix el viatge d'Ignasi de Loiola des de Loiola (Guipúscoa) fins a Manresa, on acaba." },
        { question: "Es poden combinar Manresa i Montserrat en un dia?", answer: "Sí. Montserrat al matí i Manresa a la tarda és una combinació còmoda." },
      ],
    },
  ],

  bages: [
    {
      kind: "places",
      id: "llocs",
      eyebrow: "Escapades",
      h2: "Què veure al Bages a menys d'una hora",
      intro: [
        "Cal Masses és al centre del Bages. Des d'aquí s'arriba en poca estona als llocs més interessants de la comarca.",
      ],
      items: [
        { name: "Montserrat", time: "≈ 25 min", text: "Monestir, la Moreneta i rutes per un massís de formes úniques. El més conegut de la zona i val almenys mig dia." },
        { name: "Manresa", time: "≈ 20 min", text: "Capital de la comarca: la Seu gòtica, el Pont Vell, la Cova de Sant Ignasi i tots els serveis." },
        { name: "Món Sant Benet", time: "≈ 30 min", text: "El monestir romànic de Sant Benet de Bages, restaurat i visitable, a Sant Fruitós de Bages." },
        { name: "Cardona", time: "≈ 45 min", text: "Castell medieval sobre la vila i la Muntanya de Sal, una muntanya de sal que es visita a través d'una antiga mina." },
        { name: "Sant Llorenç del Munt i l'Obac", time: "≈ 50 min", text: "Parc natural de conglomerat, cosí de Montserrat, amb la Mola i el seu monestir romànic al cim. Rutes per a tots els nivells." },
        { name: "Tines de la Vall del Flequer", time: "≈ 35 min", text: "Construccions de pedra seca on es fermentava el vi enmig de les vinyes. El Bages en conserva una de les concentracions més grans." },
      ],
      note: TEMPS,
    },
    {
      kind: "text",
      id: "estacions",
      eyebrow: "Quan venir",
      h2: "El Bages segons l'època de l'any",
      paragraphs: [
        "No hi ha una mala època per venir, però cada estació canvia el pla. Això és el que pots esperar.",
      ],
      h3Blocks: [
        { h3: "Primavera", paragraphs: ["La vinya brota, els camps són verds i les temperatures són ideals per caminar per Montserrat o Sant Llorenç del Munt."] },
        { h3: "Estiu", paragraphs: ["Dies llargs i calorosos a l'interior. El millor és sortir al matí i passar la tarda a la finca, amb la piscina d'aigua salada oberta en temporada."] },
        { h3: "Tardor", paragraphs: ["Època de verema al Pla de Bages (normalment entre finals d'agost i octubre, segons l'any). Bona llum, colors i temperatures suaus."] },
        { h3: "Hivern", paragraphs: ["Menys gent a Montserrat i dies clars amb vistes al Pirineu. L'allotjament té calefacció i el jacuzzi guanya protagonisme."] },
      ],
    },
    {
      kind: "tips",
      id: "moure-s",
      eyebrow: "Pràctic",
      h2: "Moure's pel Bages",
      items: [
        { title: "El cotxe és gairebé imprescindible", text: "Els llocs d'interès són repartits per la comarca i el transport públic rural és limitat." },
        { title: "Bones connexions", text: "Les carreteres C-55 (cap a Montserrat), C-16 (cap a Barcelona) i C-25 (Eix Transversal) passen a prop." },
        { title: "Bicicleta i camins", text: "Des de la mateixa finca surten camins per caminar, córrer o anar en bicicleta, i a Cal Masses hi ha bicicletes disponibles." },
        { title: "Reserva el que ho demani", text: "Coves del Salnitre, Muntanya de Sal i la majoria de cellers funcionen amb visita guiada o cita prèvia." },
      ],
    },
    {
      kind: "faq",
      id: "preguntes-bages",
      h2: "Preguntes freqüents sobre el Bages",
      items: [
        { question: "On és el Bages?", answer: "És una comarca del centre de Catalunya, amb capital a Manresa, a aproximadament una hora de Barcelona." },
        { question: "Què fer al Bages en un cap de setmana?", answer: "Montserrat un dia, i l'altre Manresa o Cardona, amb una visita a un celler del Pla de Bages. Des de Cal Masses tot queda a menys d'una hora." },
        { question: "Quina és la millor època per visitar el Bages?", answer: "Primavera i tardor són ideals per caminar; l'estiu per combinar excursions matinals amb piscina; l'hivern per veure Montserrat amb menys gent." },
      ],
    },
  ],

  enoturismo: [
    {
      kind: "text",
      id: "claus",
      eyebrow: "La DO",
      h2: "El Pla de Bages en quatre claus",
      paragraphs: [
        "Per entendre el vi de la zona ajuda conèixer una mica la seva història i les seves particularitats.",
      ],
      h3Blocks: [
        { h3: "Una DO petita", paragraphs: ["La DO Pla de Bages és una de les denominacions més petites de Catalunya, amb vinyes al voltant de Manresa i cellers majoritàriament familiars."] },
        { h3: "El picapoll", paragraphs: ["Varietat blanca autòctona i el raïm més característic de la zona. Dona vins frescos i aromàtics; si només tastes un vi del Bages, que sigui un picapoll."] },
        { h3: "Les tines", paragraphs: ["Dipòsits de pedra seca construïts enmig de les vinyes per fermentar-hi el vi allà mateix. El Bages en conserva una de les concentracions més grans."] },
        { h3: "Vinya després de la fil·loxera", paragraphs: ["A finals del segle XIX la fil·loxera va arrasar bona part de les vinyes del Bages i moltes terres van passar a cereal. Avui la vinya es recupera amb projectes petits com el nostre."] },
      ],
    },
    {
      kind: "places",
      id: "llocs-vi",
      eyebrow: "Visites",
      h2: "Llocs del vi a prop de Cal Masses",
      items: [
        { name: "Oller del Mas", time: "≈ 15 min", text: "Celler en una finca amb castell als afores de Manresa." },
        { name: "Abadal", time: "≈ 30 min", text: "Celler a Santa Maria d'Horta d'Avinyó, un dels més coneguts de la DO i molt vinculat al picapoll." },
        { name: "Tines de la Vall del Flequer", time: "≈ 35 min", text: "Passeig entre tines de pedra seca en un entorn natural protegit." },
        { name: "SISU, a Cal Masses", time: "A la finca", text: "El nostre petit projecte de vi, nascut de la vinya que envolta l'allotjament." },
      ],
      note: "Reserva sempre les visites amb antelació: molts cellers només obren amb cita. La Ruta del Vi DO Pla de Bages recull l'oferta actualitzada.",
    },
    {
      kind: "itinerary",
      id: "cap-de-setmana-vi",
      eyebrow: "Pla",
      h2: "Un cap de setmana de vi al Pla de Bages",
      steps: [
        { when: "Dissabte matí", title: "Visita a un celler", text: "Reserva una visita amb tast. Les primeres hores són les més tranquil·les." },
        { when: "Dissabte migdia", title: "Dinar a Manresa", text: "Producte local al centre, o compra al mercat i dinar al pati de Cal Masses." },
        { when: "Dissabte tarda", title: "Tines i paisatge", text: "Passeig entre tines de pedra seca per entendre com es feia el vi abans." },
        { when: "Diumenge", title: "Montserrat o Manresa", text: "Tanca el cap de setmana amb la muntanya al matí i torna a casa sense presses després del check-out." },
      ],
    },
    {
      kind: "tips",
      id: "consells-vi",
      eyebrow: "Consells",
      h2: "Consells per fer enoturisme al Bages",
      items: [
        { title: "Reserva amb antelació", text: "La majoria de cellers del Pla de Bages són petits i obren amb cita prèvia, sobretot fora de temporada." },
        { title: "Decidiu qui condueix", text: "Els cellers són repartits per la comarca: organitzeu els tastos perquè sempre hi hagi algú que no begui." },
        { title: "La verema", text: "Entre finals d'agost i octubre l'activitat a vinyes i cellers és màxima. És una època preciosa, però alguns cellers tenen menys disponibilitat per a visites." },
        { title: "Compra al celler", text: "Molts vins de la DO tenen una distribució petita; el celler és el millor lloc per trobar-los." },
      ],
    },
    {
      kind: "faq",
      id: "preguntes-vi",
      h2: "Preguntes freqüents sobre enoturisme",
      items: [
        { question: "Quin raïm és típic del Pla de Bages?", answer: "El picapoll, una varietat blanca autòctona. També s'hi conreen d'altres com macabeu, chardonnay, ull de llebre (tempranillo), merlot o cabernet sauvignon." },
        { question: "Cal reservar les visites als cellers?", answer: "Sí, en la majoria de casos. Són cellers petits i molts només reben visites amb cita." },
        { question: "Quan és la verema al Bages?", answer: "Normalment entre finals d'agost i octubre, segons la varietat i l'any." },
        { question: "Cal Masses és un celler?", answer: "No. Fem petites elaboracions del nostre vi, SISU, però no som un celler turístic ni organitzem tastos." },
      ],
    },
  ],

  paraDos: [
    {
      kind: "tips",
      id: "sense-sortir",
      eyebrow: "A la finca",
      h2: "El que teniu a mà sense agafar el cotxe",
      intro: [
        "Una escapada per a dos també pot ser no moure's gaire. Això és el que hi ha a Cal Masses per als dies tranquils.",
      ],
      items: [
        { title: "Jacuzzi", text: "Al bany de l'allotjament, només per a vosaltres. Ideal al final del dia o les nits fredes." },
        { title: "Pati privat", text: "Amb taula i mobiliari exterior per esmorzar, dinar o sopar a fora." },
        { title: "Piscina d'aigua salada", text: "Exterior i compartida, oberta a l'estiu i sense horari fix." },
        { title: "Bicicletes i camins", text: "Hi ha bicicletes a la finca i camins que surten directament cap a camps i boscos." },
        { title: "Barbacoa", text: "Zona de barbacoa a la finca. A la finca no es permet fer foc: pregunteu-nos abans si la podeu fer servir." },
        { title: "Taula de ping-pong", text: "Per a una partida abans de sopar." },
      ],
    },
    {
      kind: "itinerary",
      id: "dues-nits",
      eyebrow: "Pla",
      h2: "Una escapada de dues nits, pas a pas",
      steps: [
        { when: "Dia 1 · 16:00", title: "Arribada sense esperes", text: "L'arribada és autònoma, amb caixa de seguretat per a les claus. Si veniu de Barcelona, pareu a comprar a Manresa (20 minuts abans d'arribar)." },
        { when: "Dia 1 · tarda", title: "Passeig i jacuzzi", text: "Un passeig pels camins de la finca a la posta de sol i, després, jacuzzi i sopar al pati." },
        { when: "Dia 2 · matí", title: "Montserrat d'hora", text: "A 25 minuts. Arribant aviat eviteu les cues i teniu temps de caminar per la part alta." },
        { when: "Dia 2 · tarda", title: "Celler o piscina", text: "Una visita a un celler del Pla de Bages o, a l'estiu, la tarda a la piscina." },
        { when: "Dia 3 · matí", title: "Esmorzar sense pressa", text: "La sortida és fins a les 11:00. De tornada, Manresa o Món Sant Benet queden de camí." },
      ],
    },
    {
      kind: "faq",
      id: "preguntes-parella",
      h2: "Preguntes freqüents per a parelles",
      items: [
        { question: "L'allotjament és només per a nosaltres?", answer: "Sí. És un allotjament sencer per a dues persones. La piscina és compartida." },
        { question: "El jacuzzi és privat?", answer: "Sí. És dins de l'allotjament, al bany, així que és només per a vosaltres." },
        { question: "Podem arribar tard?", answer: "Sí, l'arribada és autònoma a partir de les 16:00 amb caixa de seguretat per a les claus." },
        { question: "Hi ha animals a la finca?", answer: "Hi ha gallines i gats sociables que viuen a fora. Si teniu al·lèrgia, aviseu-nos abans de reservar." },
      ],
    },
  ],

  piscina: [
    {
      kind: "facts",
      id: "dades-piscina",
      eyebrow: "La piscina",
      h2: "La piscina, en dades",
      intro: [
        "Preferim explicar-ho tot clar abans que reservis, perquè sàpigues exactament què hi trobaràs.",
      ],
      rows: [
        ["Tipus", "Exterior, d'aigua salada"],
        ["Ús", "Compartida amb els qui vivim a la finca"],
        ["Temporada", "Estiu"],
        ["Horari", "Sense horari fix"],
        ["Normes", "Sentit comú"],
      ],
    },
    {
      kind: "text",
      id: "compartida",
      eyebrow: "Sense sorpreses",
      h2: "Què vol dir que sigui compartida",
      paragraphs: [
        "Cal Masses és també casa nostra. La piscina és a la finca i és compartida: la podem fer servir els qui vivim aquí i els hostes.",
        "A la pràctica, els qui vivim aquí no solem fer-la servir quan hi ha hostes. Tot i així, si per a vosaltres és important tenir una piscina privada garantida, preferim que ho sapigueu abans de reservar.",
      ],
    },
    {
      kind: "tips",
      id: "mes-enlla",
      eyebrow: "A l'aire lliure",
      h2: "Més enllà de la piscina",
      items: [
        { title: "Pati privat", text: "Amb menjador exterior, per dinar o sopar a fora les nits d'estiu." },
        { title: "Jacuzzi interior", text: "Per quan no ve de gust aigua freda o fora de la temporada de piscina." },
        { title: "Bicicletes", text: "Disponibles a la finca, per sortir pels camins a primera hora, abans de la calor." },
        { title: "Taula de ping-pong i barbacoa", text: "Per a les tardes llargues. Pregunta'ns abans si pots fer servir la barbacoa." },
      ],
    },
    {
      kind: "faq",
      id: "preguntes-piscina",
      h2: "Preguntes freqüents sobre la piscina",
      items: [
        { question: "Quan és oberta la piscina?", answer: "A l'estiu. Si viatges a principis o a finals de temporada, pregunta'ns i et direm si està disponible." },
        { question: "És d'aigua salada?", answer: "Sí, és una piscina exterior d'aigua salada." },
        { question: "És privada?", answer: "No, és compartida, tot i que els qui vivim aquí no la solem fer servir quan hi ha hostes." },
        { question: "Què hi ha fora de temporada?", answer: "L'allotjament té jacuzzi al bany, aire condicionat i calefacció." },
      ],
    },
  ],

  barcelona: [
    {
      kind: "facts",
      id: "com-arribar",
      eyebrow: "Com arribar",
      h2: "Com arribar des de Barcelona",
      rows: [
        ["En cotxe", "Aprox. 65 km i 1 h 10 min. Les rutes habituals són per la C-16 cap a Manresa o per l'A-2 i la C-55, vorejant Montserrat."],
        ["En tren + taxi", "Rodalies R4 o FGC R5 fins a Manresa i, des d'allà, uns 20 minuts en taxi o cotxe fins a Cal Masses."],
        ["Des de l'aeroport", "Aprox. 1 h 15 min en cotxe des del Prat."],
        ["Arribada i sortida", "Arribada autònoma a partir de les 16:00. Sortida fins a les 11:00."],
      ],
      note: "Els divendres a la tarda la sortida de Barcelona sol anar carregada; els diumenges a la tarda, l'entrada.",
    },
    {
      kind: "itinerary",
      id: "cap-de-setmana",
      eyebrow: "Pla",
      h2: "Un cap de setmana des de Barcelona",
      steps: [
        { when: "Divendres", title: "Sortida després de dinar", text: "Sortint d'hora evites el pitjor del trànsit. Para a Manresa a comprar i arriba a partir de les 16:00." },
        { when: "Dissabte matí", title: "Montserrat", text: "A 25 minuts. Des d'aquí arribes abans que la majoria de visitants que pugen des de Barcelona." },
        { when: "Dissabte tarda", title: "Celler o piscina", text: "Una visita a un celler del Pla de Bages o, a l'estiu, piscina i sopar al pati." },
        { when: "Diumenge", title: "Manresa i tornada", text: "Check-out fins a les 11:00, passeig per Manresa o Món Sant Benet i tornada a Barcelona abans del trànsit de la tarda." },
      ],
    },
    {
      kind: "faq",
      id: "preguntes-barcelona",
      h2: "Preguntes freqüents",
      items: [
        { question: "A quant és Cal Masses de Barcelona?", answer: "A uns 65 km, aproximadament 1 h 10 min en cotxe." },
        { question: "S'hi pot anar sense cotxe?", answer: "Sí, en tren fins a Manresa (R4 o R5) i des d'allà en taxi. Per moure't per la zona durant l'estada, el cotxe és molt recomanable." },
        { question: "Val la pena per a una sola nit?", answer: "Sí, però dues nits permeten combinar Montserrat, el Bages i temps de descans a la finca sense anar amb presses." },
        { question: "Hi ha platja a prop?", answer: "La costa queda a aproximadament una hora en cotxe." },
      ],
    },
  ],

  alojamiento: [
    {
      kind: "facts",
      id: "equipament",
      eyebrow: "Equipament",
      h2: "Tot l'equipament, al detall",
      intro: [
        "La llista completa del que hi trobaràs, perquè no hagis de preguntar ni portar coses de més.",
      ],
      rows: [
        ["Cuina", "Forn, microones, nevera, congelador, cafetera, torradora, estris bàsics, plats, coberts i copes de vi"],
        ["Dormitori", "Roba de llit, penjadors i persianes o cortines opaques"],
        ["Bany", "Jacuzzi, aigua calenta, assecador de cabells i xampú"],
        ["Confort", "Aire condicionat, calefacció, Wi-Fi, televisió i zona per treballar"],
        ["Bugaderia", "Rentadora, assecadora i planxa"],
        ["Exterior", "Pati privat amb menjador i mobiliari exterior, barbacoa i piscina compartida d'aigua salada a l'estiu"],
        ["A la finca", "Bicicletes, taula de ping-pong i camins per camps i boscos"],
        ["Seguretat", "Detector de fum, extintor i farmaciola"],
        ["Arribada", "Autònoma, amb caixa de seguretat per a les claus, a partir de les 16:00"],
        ["Aparcament", "Gratuït, a la mateixa finca"],
      ],
      note: "Necessites alguna cosa que no surt a la llista? Pregunta'ns abans de venir.",
    },
    {
      kind: "tips",
      id: "bo-saber",
      eyebrow: "Abans de venir",
      h2: "Bo de saber abans de reservar",
      items: [
        { title: "Animals a la finca", text: "Hi ha gallines i gats sociables que viuen a fora. Si tens al·lèrgia, avisa'ns." },
        { title: "Sense foc", text: "No es permet fer foc. Hi ha zona de barbacoa: pregunta'ns abans si la pots fer servir." },
        { title: "Silenci i entorn", text: "És un lloc tranquil en plena natura: et demanem respectar el silenci i el medi ambient." },
        { title: "Cotxe recomanat", text: "Som en una zona rural. Per a la compra, el més còmode és Manresa, a 20 minuts." },
      ],
    },
  ],

  finca: [
    {
      kind: "text",
      id: "que-hi-ha",
      eyebrow: "La finca",
      h2: "Què hi ha a Cal Masses",
      paragraphs: [
        "L'allotjament és dins d'una finca agrícola en actiu. Els hostes poden recórrer lliurement els camps i els boscos.",
      ],
      h3Blocks: [
        { h3: "Boscos i camps", paragraphs: ["Bosc mediterrani i camps de cereal i farratge que canvien de color al llarg de l'any."] },
        { h3: "Vinya jove", paragraphs: ["Les vinyes d'on neix SISU, el nostre vi. Una vinya encara jove que creix amb el projecte."] },
        { h3: "Hort ecològic", paragraphs: ["Conreem un hort ecològic que canvia amb cada temporada."] },
        { h3: "Gallines i gats", paragraphs: ["Les gallines formen part de la finca i també hi ha gats sociables que viuen a fora; si tens al·lèrgia, avisa'ns."] },
      ],
    },
    {
      kind: "text",
      id: "any",
      eyebrow: "Calendari",
      h2: "La finca al llarg de l'any",
      paragraphs: [
        "El que veuràs depèn de quan vinguis. Aquest és, a grans trets, el ritme d'una finca com la nostra.",
      ],
      h3Blocks: [
        { h3: "Hivern", paragraphs: ["Poda de la vinya i camps en repòs. Dies curts i clars, bons per caminar."] },
        { h3: "Primavera", paragraphs: ["Brota la vinya, creixen els cereals i comença la temporada de l'hort."] },
        { h3: "Estiu", paragraphs: ["Època de sega del cereal, dies llargs i temporada de piscina."] },
        { h3: "Tardor", paragraphs: ["Verema i elaboració de SISU. L'època amb més activitat a la vinya."] },
      ],
    },
    {
      kind: "tips",
      id: "fer",
      eyebrow: "Plans",
      h2: "Què pots fer sense sortir de la finca",
      items: [
        { title: "Caminar i córrer", text: "Des de l'allotjament surten camins entre camps i boscos, sense haver d'agafar el cotxe." },
        { title: "Anar en bicicleta", text: "Hi ha bicicletes disponibles a la finca." },
        { title: "Piscina i pati", text: "A l'estiu, piscina d'aigua salada; i un pati privat per menjar a fora quan el temps acompanya." },
      ],
    },
  ],

  contacto: [
    {
      kind: "facts",
      id: "com-arribar",
      eyebrow: "Ubicació",
      h2: "Com arribar a Cal Masses",
      rows: [
        ["Adreça", "Raval del Sellarès, Cal Masses, s/n · 08253 Sant Salvador de Guardiola (Barcelona)"],
        ["Coordenades GPS", "41.6778, 1.7558"],
        ["Des de Manresa", "Aprox. 11 km · 20 min en cotxe"],
        ["Des de Montserrat", "Aprox. 20 km · 25 min en cotxe"],
        ["Des de Barcelona", "Aprox. 65 km · 1 h 10 min en cotxe"],
        ["Sense cotxe", "Tren fins a Manresa (Rodalies R4 o FGC R5) i taxi fins a Cal Masses"],
        ["Aparcament", "Gratuït, dins de la finca"],
        ["Arribada i sortida", "Arribada autònoma des de les 16:00 · sortida fins a les 11:00"],
      ],
      note: "En zones rurals l'adreça postal no sempre es localitza bé al GPS: si és així, fes servir les coordenades.",
    },
  ],
};
