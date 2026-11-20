import type { GuideBundle } from "./types";

const TIMES = "Approximate driving times from Cal Masses, without traffic.";

export const guideEn: GuideBundle = {
  montserrat: [
    {
      kind: "facts",
      id: "getting-up",
      eyebrow: "Getting there",
      h2: "Four ways up Montserrat from Cal Masses",
      intro: [
        "Montserrat is about 25 minutes' drive from Cal Masses. Once at the mountain there are several ways up to the monastery; the best one depends on the season and how much you want to walk.",
      ],
      rows: [
        ["By car to the monastery", "The most direct option. There is paid parking at the top that fills early at weekends and on public holidays: arrive before 10:00."],
        ["Rack railway (Cremallera)", "Runs from Monistrol de Montserrat, where you can leave the car. It reaches the monastery in about 15 minutes and is the easiest choice on busy days."],
        ["Aeri de Montserrat", "Cable car from the Montserrat-Aeri station next to the C-55 road. A short, spectacular ride with sheer views over the Llobregat valley."],
        ["On foot", "Waymarked paths from Monistrol and Collbató. You need to be reasonably fit, with proper footwear and enough water."],
      ],
      note: "Timetables and fares for the rack railway, cable car and funiculars change with the season: check the official Montserrat website before you go.",
    },
    {
      kind: "places",
      id: "what-to-see",
      eyebrow: "What to see",
      h2: "What to see at Montserrat",
      intro: [
        "Montserrat is a sanctuary, a natural park and a mountain of unique shapes all at once. These are the places worth the trip.",
      ],
      items: [
        { name: "Basilica and La Moreneta", text: "The Romanesque statue of the Virgin of Montserrat is visited from inside the basilica. On busy days there is a queue, so go first thing." },
        { name: "Escolania de Montserrat", text: "One of the oldest boys' choirs in Europe. It sings in the basilica on set days and times, so check the calendar before planning your visit." },
        { name: "Santa Cova path", text: "An almost level walk to the chapel where, according to tradition, the image of the Virgin was found. It is lined with the sculptures of the Monumental Rosary, with works by Gaudí and Puig i Cadafalch among others." },
        { name: "Sant Jeroni", text: "The highest summit of the massif (1,236 m), reached on foot from the top of the Sant Joan funicular. On clear days you can see the Pyrenees." },
        { name: "Museum of Montserrat", text: "A surprising collection for a monastery: paintings by El Greco, Caravaggio, Monet, Picasso and Dalí, plus archaeological pieces from the Near East. A good plan if the day turns cloudy." },
        { name: "Coves del Salnitre", text: "In Collbató, on the south side of the mountain. Caves open for guided tours; booking ahead is advisable." },
      ],
    },
    {
      kind: "itinerary",
      id: "one-day",
      eyebrow: "Plan",
      h2: "A day at Montserrat from Cal Masses",
      intro: [
        "The big advantage of staying nearby is arriving early, ahead of most visitors coming up from Barcelona, and getting back to rest without an hour's drive ahead of you.",
      ],
      steps: [
        { when: "8:30", title: "Breakfast and off", text: "Have an unhurried breakfast on the patio and head to Montserrat. You'll be at the top in 25 minutes." },
        { when: "9:15", title: "Basilica and La Moreneta", text: "Early in the day the queue to see the Virgin is much shorter. Take the chance to walk the square and the atrium before the crowds." },
        { when: "10:30", title: "Sant Joan funicular and a walk", text: "Ride up and choose your route: Sant Jeroni for a proper hike, or a shorter walk to the nearby hermitages and viewpoints." },
        { when: "14:00", title: "Lunch", text: "There is a restaurant and a cafeteria on site. Alternatively, head down to a nearby village or back to Cal Masses for lunch on the patio." },
        { when: "Afternoon", title: "Santa Cova or the museum", text: "The Santa Cova path is quiet and easy; the museum is the fallback in bad weather." },
        { when: "Back home", title: "Hot tub and dinner", text: "Back at Cal Masses in 25 minutes. A hot tub after a day of walking is hard to beat." },
      ],
    },
    {
      kind: "tips",
      id: "tips",
      eyebrow: "Tips",
      h2: "Practical tips for visiting Montserrat",
      items: [
        { title: "Go on a weekday", text: "Montserrat gets a lot of visitors at weekends and on public holidays. If you can choose, go Monday to Friday." },
        { title: "Bring an extra layer", text: "It is usually cooler and windier at the top than in the valley, even in summer." },
        { title: "Wear hiking shoes", text: "The paths to Sant Jeroni and the hermitages are rocky. In city trainers they feel long." },
        { title: "Check the forecast", text: "In fog the mountain loses its views. If the day starts overcast, save the hike and focus on the basilica and the museum." },
        { title: "Check timetables", text: "The Escolania, funiculars, rack railway and museum change their hours with the season." },
        { title: "Combine it with the Bages", text: "In the afternoon you can visit a Pla de Bages winery or stroll around Manresa, both close by." },
      ],
    },
    {
      kind: "faq",
      id: "montserrat-faq",
      h2: "Montserrat FAQ",
      items: [
        { question: "How far is Cal Masses from Montserrat?", answer: "About 20 km, roughly 25 minutes by car to the monastery." },
        { question: "How long do you need to visit Montserrat?", answer: "Half a day for the basilica, La Moreneta and a short walk. A full day if you want to climb Sant Jeroni, walk to the Santa Cova or visit the museum." },
        { question: "Can you get to Montserrat from Cal Masses without a car?", answer: "Cal Masses is in a rural area and a car is the practical option: either to the monastery or to Monistrol to take the rack railway." },
        { question: "Why stay near Montserrat rather than in Barcelona?", answer: "You can go up early, skip over an hour of driving each way and combine the visit with the rest of the Bages: Manresa, wineries and countryside." },
      ],
    },
  ],

  manresa: [
    {
      kind: "places",
      id: "what-to-see",
      eyebrow: "What to see",
      h2: "What to see in Manresa",
      intro: [
        "Manresa is the capital of the Bages, about 20 minutes from Cal Masses. Its old town can be explored on foot in a morning.",
      ],
      items: [
        { name: "La Seu", text: "The Gothic basilica of Santa Maria towers over the city from the top of the old town. From around it you can see the Cardener river and, on clear days, Montserrat in the distance." },
        { name: "Cova de Sant Ignasi", text: "Ignatius of Loyola lived in Manresa in 1522–1523 and began writing the Spiritual Exercises here. It is also the end point of the Ignatian Way." },
        { name: "Pont Vell", text: "Medieval bridge over the Cardener, rebuilt after the Spanish Civil War. It gives the best-known view of La Seu." },
        { name: "Carrer del Balç", text: "A covered medieval street that keeps the feel of old Manresa, with an interpretation centre about the city in the Middle Ages." },
        { name: "Museu del Barroc de Catalunya", text: "A museum devoted to Catalan Baroque art: altarpieces, sculpture and painting from the 17th and 18th centuries." },
        { name: "Mercat de Puigmercadal", text: "The municipal market: a good place to buy local produce if you plan to cook at Cal Masses." },
      ],
    },
    {
      kind: "itinerary",
      id: "half-day",
      eyebrow: "Plan",
      h2: "Half a day in Manresa",
      steps: [
        { when: "10:00", title: "Pont Vell", text: "Park near the river and start at the bridge: it's the best view of La Seu." },
        { when: "10:30", title: "La Seu", text: "Walk up through the old town to the basilica and see the inside." },
        { when: "11:30", title: "Carrer del Balç and old town", text: "Head down through the historic centre via the covered Carrer del Balç." },
        { when: "12:30", title: "Cova de Sant Ignasi", text: "Visit the cave and the sanctuary, with good views over the river." },
        { when: "13:30", title: "Market and shopping", text: "Stop at the market or a supermarket and head back to Cal Masses for lunch on the patio." },
      ],
    },
    {
      kind: "tips",
      id: "practical",
      eyebrow: "Practical",
      h2: "Manresa as your service base",
      intro: [
        "Beyond the sights, Manresa is your go-to town during the stay: it has everything the countryside doesn't.",
      ],
      items: [
        { title: "Groceries", text: "The accommodation has a full kitchen. The easiest is to shop in Manresa on the way in: supermarkets, the market and shops 20 minutes away." },
        { title: "Parking", text: "The old town has narrow, steep streets. Leave the car in a car park on the edge of the centre and walk up." },
        { title: "Train to Barcelona", text: "Manresa has direct trains to Barcelona (Rodalies R4 and FGC R5), handy if someone arrives or leaves by public transport." },
        { title: "Services", text: "Pharmacies, petrol stations, restaurants and a hospital, all within reasonable reach of Cal Masses." },
      ],
    },
    {
      kind: "faq",
      id: "manresa-faq",
      h2: "Manresa FAQ",
      items: [
        { question: "How far is Cal Masses from Manresa?", answer: "About 11 km, roughly 20 minutes by car." },
        { question: "Why stay near Manresa rather than in town?", answer: "You have the city 20 minutes away for sights and shopping, and at night you sleep on a farm surrounded by countryside, with no traffic noise." },
        { question: "What is the Ignatian Way?", answer: "A pilgrimage route of over 600 km that retraces Ignatius of Loyola's journey from Loyola (Gipuzkoa) to Manresa, where it ends." },
        { question: "Can you combine Manresa and Montserrat in one day?", answer: "Yes. Montserrat in the morning and Manresa in the afternoon is an easy combination, with Cal Masses in between." },
      ],
    },
  ],

  bages: [
    {
      kind: "places",
      id: "places",
      eyebrow: "Day trips",
      h2: "What to see in the Bages within an hour",
      intro: [
        "Cal Masses sits in the middle of the Bages. From here the most interesting places in the county are a short drive away.",
      ],
      items: [
        { name: "Montserrat", time: "≈ 25 min", text: "Monastery, La Moreneta and trails across a massif of unique shapes. The area's best-known sight, worth at least half a day." },
        { name: "Manresa", time: "≈ 20 min", text: "The county capital: Gothic La Seu, the Pont Vell, the Cova de Sant Ignasi and every service you need." },
        { name: "Món Sant Benet", time: "≈ 25 min", text: "The restored Romanesque monastery of Sant Benet de Bages, open to visitors, in Sant Fruitós de Bages." },
        { name: "Cardona", time: "≈ 45 min", text: "A medieval castle above the town and the Salt Mountain, visited through an old mine." },
        { name: "Sant Llorenç del Munt i l'Obac", time: "≈ 35 min", text: "A conglomerate natural park, a cousin of Montserrat, with La Mola and its Romanesque monastery at the top. Trails for every level." },
        { name: "Vall del Flequer wine huts", time: "≈ 40 min", text: "Dry-stone 'tines' where wine was fermented right in the vineyards. The Bages has one of the largest concentrations of them." },
      ],
      note: TIMES,
    },
    {
      kind: "text",
      id: "seasons",
      eyebrow: "When to come",
      h2: "The Bages through the seasons",
      paragraphs: [
        "There's no bad time to come, but each season changes the plan. Here's what to expect.",
      ],
      h3Blocks: [
        { h3: "Spring", paragraphs: ["The vines bud, the fields are green and temperatures are ideal for walking at Montserrat or Sant Llorenç del Munt."] },
        { h3: "Summer", paragraphs: ["Long, hot inland days. Best to head out in the morning and spend the afternoon at the farm, with the saltwater pool open in season."] },
        { h3: "Autumn", paragraphs: ["Harvest time in the Pla de Bages (usually late August to October, depending on the year). Good light, colours and mild temperatures."] },
        { h3: "Winter", paragraphs: ["Fewer people at Montserrat and clear days with views of the Pyrenees. The accommodation is heated and the hot tub comes into its own."] },
      ],
    },
    {
      kind: "tips",
      id: "getting-around",
      eyebrow: "Practical",
      h2: "Getting around the Bages",
      items: [
        { title: "A car is almost essential", text: "Sights are spread across the county and rural public transport is limited." },
        { title: "Good road links", text: "The C-55 (to Montserrat), C-16 (to Barcelona) and C-25 (Eix Transversal) all run close by." },
        { title: "Bikes and trails", text: "Paths for walking, running and cycling start right at the farm, and Cal Masses has bikes available." },
        { title: "Book what needs booking", text: "The Coves del Salnitre, the Salt Mountain and most wineries work with guided tours or appointments." },
      ],
    },
    {
      kind: "faq",
      id: "bages-faq",
      h2: "Bages FAQ",
      items: [
        { question: "Where is the Bages?", answer: "A county in central Catalonia, with Manresa as its capital, roughly an hour from Barcelona." },
        { question: "What to do in the Bages over a weekend?", answer: "Montserrat one day and Manresa or Cardona the next, with a visit to a Pla de Bages winery. From Cal Masses everything is under an hour away." },
        { question: "When is the best time to visit the Bages?", answer: "Spring and autumn are ideal for walking; summer for morning outings followed by the pool; winter to see Montserrat with fewer crowds." },
      ],
    },
  ],

  enoturismo: [
    {
      kind: "text",
      id: "keys",
      eyebrow: "The DO",
      h2: "The Pla de Bages in four points",
      paragraphs: [
        "A little history and a few local quirks go a long way to understanding the wine here.",
      ],
      h3Blocks: [
        { h3: "A small DO", paragraphs: ["DO Pla de Bages is one of the smallest wine appellations in Catalonia, with vineyards around Manresa and mostly family-run wineries."] },
        { h3: "Picapoll", paragraphs: ["A native white grape and the area's signature variety. It makes fresh, aromatic wines; if you try only one Bages wine, make it a picapoll."] },
        { h3: "The tines", paragraphs: ["Dry-stone vats built in the middle of the vineyards to ferment the wine on the spot. The Bages has one of the largest concentrations of them."] },
        { h3: "Vines after phylloxera", paragraphs: ["In the late 19th century phylloxera wiped out much of the Bages' vineyards and a lot of land turned to cereals. Today vines are coming back through small projects like ours."] },
      ],
    },
    {
      kind: "places",
      id: "wine-places",
      eyebrow: "Visits",
      h2: "Wine places near Cal Masses",
      items: [
        { name: "Oller del Mas", time: "≈ 20 min", text: "A winery on an estate with a castle on the outskirts of Manresa." },
        { name: "Abadal", time: "≈ 40 min", text: "A winery in Santa Maria d'Horta d'Avinyó, one of the best known in the DO and closely tied to picapoll." },
        { name: "Vall del Flequer wine huts", time: "≈ 40 min", text: "A walk among dry-stone tines in a protected natural setting." },
        { name: "SISU, at Cal Masses", time: "On the farm", text: "Our own small wine project, born from the vineyard around the accommodation." },
      ],
      note: "Always book visits ahead: many wineries open by appointment only. The DO Pla de Bages Wine Route lists the up-to-date options.",
    },
    {
      kind: "itinerary",
      id: "wine-weekend",
      eyebrow: "Plan",
      h2: "A wine weekend in the Pla de Bages",
      steps: [
        { when: "Saturday morning", title: "Winery visit", text: "Book a tour with tasting. The early slots are the quietest." },
        { when: "Saturday lunch", title: "Lunch in Manresa", text: "Local produce in the centre, or shop at the market and eat on the Cal Masses patio." },
        { when: "Saturday afternoon", title: "Tines and landscape", text: "A walk among dry-stone tines to see how wine used to be made." },
        { when: "Sunday", title: "Montserrat or Manresa", text: "Round off the weekend with the mountain in the morning and head home unhurried after check-out." },
      ],
    },
    {
      kind: "tips",
      id: "wine-tips",
      eyebrow: "Tips",
      h2: "Tips for wine tourism in the Bages",
      items: [
        { title: "Book ahead", text: "Most Pla de Bages wineries are small and open by appointment, especially out of season." },
        { title: "Decide who drives", text: "Wineries are spread across the county: plan tastings so someone always stays sober." },
        { title: "Harvest time", text: "From late August to October activity in vineyards and wineries peaks. It's a beautiful time, but some wineries have fewer slots for visits." },
        { title: "Buy at the winery", text: "Many DO wines have small distribution; the winery is the best place to find them." },
      ],
    },
    {
      kind: "faq",
      id: "wine-faq",
      h2: "Wine tourism FAQ",
      items: [
        { question: "Which grape is typical of the Pla de Bages?", answer: "Picapoll, a native white variety. Others grown include macabeo, chardonnay, ull de llebre (tempranillo), merlot and cabernet sauvignon." },
        { question: "Do winery visits need booking?", answer: "Yes, in most cases. They are small wineries and many only take visitors by appointment." },
        { question: "When is the harvest in the Bages?", answer: "Usually between late August and October, depending on the variety and the year." },
        { question: "Is Cal Masses a winery?", answer: "No. We make small batches of our own wine, SISU, but we are not a visitor winery and don't run tastings." },
      ],
    },
  ],

  paraDos: [
    {
      kind: "tips",
      id: "on-the-farm",
      eyebrow: "On the farm",
      h2: "What's on hand without taking the car",
      intro: [
        "A getaway for two can also mean not going far. Here's what Cal Masses has for the slow days.",
      ],
      items: [
        { title: "Hot tub", text: "In the accommodation's bathroom, just for the two of you. Perfect at the end of the day or on cold nights." },
        { title: "Private patio", text: "With a table and outdoor furniture for breakfast, lunch or dinner outside." },
        { title: "Saltwater pool", text: "Outdoor and shared, open in summer with no fixed hours." },
        { title: "Bikes and trails", text: "There are bikes on the farm and paths leading straight into fields and woods." },
        { title: "Barbecue", text: "A barbecue area on the farm. During fire-risk periods no fires can be lit: ask us first." },
        { title: "Ping-pong table", text: "For a game before dinner." },
      ],
    },
    {
      kind: "itinerary",
      id: "two-nights",
      eyebrow: "Plan",
      h2: "A two-night getaway, step by step",
      steps: [
        { when: "Day 1 · 16:00", title: "Easy arrival", text: "Self check-in with a key lockbox. Coming from Barcelona, stop for groceries in Manresa, 20 minutes before you arrive." },
        { when: "Day 1 · evening", title: "A walk and the hot tub", text: "A sunset walk along the farm trails, then the hot tub and dinner on the patio." },
        { when: "Day 2 · morning", title: "Montserrat early", text: "25 minutes away. Arrive early to skip the queues and have time to walk on the upper paths." },
        { when: "Day 2 · afternoon", title: "Winery or pool", text: "A visit to a Pla de Bages winery or, in summer, an afternoon by the pool." },
        { when: "Day 3 · morning", title: "Slow breakfast", text: "Check-out is by 11:00. On the way home, Manresa or Món Sant Benet are on your route." },
      ],
    },
    {
      kind: "faq",
      id: "couples-faq",
      h2: "FAQ for couples",
      items: [
        { question: "Is the accommodation just for us?", answer: "Yes. It's an entire place for two. The pool and the farm trails are shared spaces." },
        { question: "Is the hot tub private?", answer: "Yes. It's inside the accommodation, in the bathroom, so it's just for you." },
        { question: "Can we arrive late?", answer: "Yes, check-in is self-service from 16:00 with a key lockbox." },
        { question: "Are there animals on the farm?", answer: "There are hens and a couple of very friendly cats that live outdoors. If you have allergies, let us know before booking." },
      ],
    },
  ],

  piscina: [
    {
      kind: "facts",
      id: "pool-facts",
      eyebrow: "The pool",
      h2: "The pool at a glance",
      intro: [
        "We'd rather explain everything clearly before you book, so you know exactly what to expect.",
      ],
      rows: [
        ["Type", "Outdoor, saltwater"],
        ["Use", "Shared with the family who live on the farm"],
        ["Season", "Summer (exact dates depend on each year's weather)"],
        ["Hours", "No fixed hours"],
        ["Rules", "Common sense and respect for everyone's rest"],
      ],
    },
    {
      kind: "text",
      id: "shared",
      eyebrow: "No surprises",
      h2: "What 'shared' means here",
      paragraphs: [
        "Cal Masses is also our home. The pool is on the farm and it's shared: those of us who live here and guests can both use it.",
        "In practice, we don't usually use it when guests are staying. Even so, if a guaranteed private pool matters to you, we'd rather you knew before booking.",
      ],
    },
    {
      kind: "tips",
      id: "beyond",
      eyebrow: "Outdoors",
      h2: "Beyond the pool",
      items: [
        { title: "Private patio", text: "With outdoor dining, for lunch or dinner outside on summer evenings." },
        { title: "Indoor hot tub", text: "For when you don't fancy cold water, or outside pool season." },
        { title: "Bikes", text: "Available on the farm, for heading out on the trails early, before the heat." },
        { title: "Ping-pong and barbecue", text: "For long afternoons. Barbecue use depends on fire restrictions at the time." },
      ],
    },
    {
      kind: "faq",
      id: "pool-faq",
      h2: "Pool FAQ",
      items: [
        { question: "When is the pool open?", answer: "In summer. If you're travelling at the start or end of the season, ask us and we'll tell you whether it's available." },
        { question: "Is it saltwater?", answer: "Yes, it's an outdoor saltwater pool." },
        { question: "Is it private?", answer: "No, it's shared with the family on the farm, although we don't usually use it when guests are staying." },
        { question: "What is there outside pool season?", answer: "The accommodation has a hot tub in the bathroom, air conditioning and heating." },
      ],
    },
  ],

  barcelona: [
    {
      kind: "facts",
      id: "getting-here",
      eyebrow: "Getting here",
      h2: "Getting here from Barcelona",
      rows: [
        ["By car", "About 65 km and 1 h 10 min. The usual routes are the C-16 towards Manresa, or the A-2 and C-55 past Montserrat."],
        ["Train + taxi", "Rodalies R4 or FGC R5 to Manresa, then about 20 minutes by taxi or car to Cal Masses."],
        ["From the airport", "About 1 h by car from El Prat."],
        ["Check-in and check-out", "Self check-in from 16:00. Check-out by 11:00."],
      ],
      note: "Friday afternoons tend to be busy leaving Barcelona, and Sunday afternoons coming back in.",
    },
    {
      kind: "itinerary",
      id: "weekend",
      eyebrow: "Plan",
      h2: "A weekend from Barcelona",
      steps: [
        { when: "Friday", title: "Leave after lunch", text: "Leaving early beats the worst of the traffic. Stop for groceries in Manresa and arrive from 16:00." },
        { when: "Saturday morning", title: "Montserrat", text: "25 minutes away. From here you arrive before most visitors coming up from Barcelona." },
        { when: "Saturday afternoon", title: "Winery or pool", text: "A Pla de Bages winery visit or, in summer, the pool and dinner on the patio." },
        { when: "Sunday", title: "Manresa and home", text: "Check out by 11:00, stroll around Manresa or Món Sant Benet, and get back to Barcelona before the afternoon traffic." },
      ],
    },
    {
      kind: "faq",
      id: "barcelona-faq",
      h2: "FAQ",
      items: [
        { question: "How far is Cal Masses from Barcelona?", answer: "About 65 km, roughly 1 h 10 min by car." },
        { question: "Can I get there without a car?", answer: "Yes, by train to Manresa (R4 or R5) and a taxi from there. To get around during your stay, a car is strongly recommended." },
        { question: "Is it worth it for one night?", answer: "Yes, but two nights let you combine Montserrat, the Bages and downtime on the farm without rushing." },
        { question: "Is there a beach nearby?", answer: "The coast is about an hour's drive away." },
      ],
    },
  ],

  alojamiento: [
    {
      kind: "facts",
      id: "equipment",
      eyebrow: "Equipment",
      h2: "Full equipment list",
      intro: [
        "Everything you'll find, so you don't need to ask or pack extras.",
      ],
      rows: [
        ["Kitchen", "Oven, microwave, fridge, freezer, coffee maker, toaster, basic cookware, plates, cutlery and wine glasses"],
        ["Bedroom", "Bed linen, hangers and blackout blinds or curtains"],
        ["Bathroom", "Hot tub, hot water, hair dryer and shampoo"],
        ["Comfort", "Air conditioning, heating, Wi-Fi, TV and a workspace"],
        ["Laundry", "Washing machine, dryer and iron"],
        ["Outdoors", "Private patio with outdoor dining and furniture, barbecue and a shared saltwater pool in summer"],
        ["On the farm", "Bikes, a ping-pong table and trails through fields and woods"],
        ["Safety", "Smoke detector, fire extinguisher and first-aid kit"],
        ["Arrival", "Self check-in with a key lockbox, from 16:00"],
        ["Parking", "Free, on the farm itself"],
      ],
      note: "Need something that isn't listed? Ask us before you come.",
    },
    {
      kind: "tips",
      id: "good-to-know",
      eyebrow: "Before you come",
      h2: "Good to know before booking",
      items: [
        { title: "Animals on the farm", text: "There are hens and a couple of very friendly cats that live outdoors. If you have allergies, let us know." },
        { title: "No fires", text: "Lighting fires is not allowed. The barbecue can only be used when restrictions permit." },
        { title: "Quiet and nature", text: "It's a peaceful place in the middle of nature: please respect the quiet and the environment." },
        { title: "A car is recommended", text: "We're in a rural area. For groceries, Manresa is the easiest option, 20 minutes away." },
      ],
    },
  ],

  finca: [
    {
      kind: "text",
      id: "whats-here",
      eyebrow: "The farm",
      h2: "What you'll find at Cal Masses",
      paragraphs: [
        "The accommodation sits within a working farm. Guests are free to roam the fields and woods.",
      ],
      h3Blocks: [
        { h3: "Woods and fields", paragraphs: ["Mediterranean woodland and fields of cereals and forage that change colour through the year."] },
        { h3: "A young vineyard", paragraphs: ["The vines SISU, our wine, comes from. A still-young vineyard growing along with the project."] },
        { h3: "Organic vegetable garden", paragraphs: ["We grow an organic kitchen garden for the house, following the rhythm of each season."] },
        { h3: "Hens and cats", paragraphs: ["Hens are part of the farm and a couple of very friendly cats keep an eye on it. They live outdoors; if you have allergies, let us know."] },
      ],
    },
    {
      kind: "text",
      id: "year",
      eyebrow: "Calendar",
      h2: "The farm through the year",
      paragraphs: [
        "What you'll see depends on when you come. Broadly, this is the rhythm of a farm like ours.",
      ],
      h3Blocks: [
        { h3: "Winter", paragraphs: ["Vine pruning and fields at rest. Short, clear days, good for walking."] },
        { h3: "Spring", paragraphs: ["The vines bud, cereals grow and the vegetable garden season begins."] },
        { h3: "Summer", paragraphs: ["Cereal and forage harvest, early-morning work and the pool in the afternoon."] },
        { h3: "Autumn", paragraphs: ["Grape harvest and SISU winemaking. The busiest time in the vineyard."] },
      ],
    },
    {
      kind: "tips",
      id: "things-to-do",
      eyebrow: "Plans",
      h2: "Things to do without leaving the farm",
      items: [
        { title: "Walk and run", text: "Trails through fields and woods start at the accommodation, no car needed." },
        { title: "Cycle", text: "Bikes are available on the farm." },
        { title: "Listen to the countryside", text: "In the morning and at sunset, birdsong is the only sound." },
        { title: "Pool and patio", text: "A saltwater pool in summer; a private patio for eating outside all year." },
      ],
    },
  ],

  contacto: [
    {
      kind: "facts",
      id: "getting-here",
      eyebrow: "Location",
      h2: "How to get to Cal Masses",
      rows: [
        ["Address", "Raval del Sellarès, Cal Masses, s/n · 08253 Sant Salvador de Guardiola (Barcelona)"],
        ["GPS coordinates", "41.6778, 1.7558"],
        ["From Manresa", "About 11 km · 20 min by car"],
        ["From Montserrat", "About 20 km · 25 min by car"],
        ["From Barcelona", "About 65 km · 1 h 10 min by car"],
        ["Without a car", "Train to Manresa (Rodalies R4 or FGC R5), then a taxi to Cal Masses"],
        ["Parking", "Free, on the farm"],
        ["Check-in and check-out", "Self check-in from 16:00 · check-out by 11:00"],
      ],
      note: "In rural areas the postal address doesn't always resolve well in GPS apps: if so, use the coordinates.",
    },
  ],
};
