/* ==========================================================================
   BARRANCO BOHEMIA - CORE APPLICATION LOGIC
   ========================================================================== */

// 1. DATASET: Barranco Points of Interest (POIs)
const pois = [
  // --- TOURIST ATTRACTIONS (attraction) ---
  {
    id: "puente-suspiros",
    name: "Puente de los Suspiros",
    tagline: "El monumento romántico más famoso de Lima",
    category: "attraction",
    coords: [-12.1486, -77.0223],
    rating: 4.7,
    address: "Jr. Batalla de Junín, Barranco 15063",
    hours: "Acceso abierto 24 horas",
    desc: "Construido en 1876, este icónico puente de madera cruza la quebrada de la Bajada de Baños. Dice la tradición que quien lo visite por primera vez puede pedir un deseo cruzándolo sin respirar. Fue inmortalizado por la cantautora Chabuca Granda en su famosa canción homónima.",
    special: "Tip: Visítalo al atardecer cuando las luces de gas coloniales se encienden.",
    image: "https://images.unsplash.com/photo-1627894006066-b4578b537103?q=80&w=600",
    closestNode: "puente"
  },
  {
    id: "bajada-banos",
    name: "Bajada de Baños",
    tagline: "El sendero histórico hacia el Océano Pacífico",
    category: "attraction",
    coords: [-12.1488, -77.0227],
    rating: 4.8,
    address: "Bajada de Baños, Barranco",
    hours: "Acceso abierto 24 horas",
    desc: "Un hermoso barranco natural flanqueado por antiguas casonas de madera del siglo XIX. Antiguamente era el camino que usaban los pescadores locales. Hoy está lleno de restaurantes, galerías de arte, bares acogedores y hermosos murales de arte urbano.",
    special: "Tip: Baja caminando hasta la playa cruzando por debajo del Puente de los Suspiros.",
    image: "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=600",
    closestNode: "bajada"
  },
  {
    id: "plaza-armas",
    name: "Plaza de Armas de Barranco",
    tagline: "El vibrante corazón cívico del distrito",
    category: "attraction",
    coords: [-12.1492, -77.0219],
    rating: 4.6,
    address: "Av. Miguel Grau, Barranco",
    hours: "Abierto 24 horas",
    desc: "El punto de encuentro central de Barranco. Cuenta con una hermosa estatua de la Danaida en su pileta central, hermosos jardines, y está rodeado por la Biblioteca Municipal de madera de estilo neoclásico y la Iglesia Santísima Cruz.",
    special: "Dato: Frecuentemente alberga ferias de libros, ferias gastronómicas y músicos callejeros.",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600",
    closestNode: "plaza"
  },
  {
    id: "museo-osma",
    name: "Museo Pedro de Osma",
    tagline: "Arte virreinal y esplendor republicano",
    category: "attraction",
    coords: [-12.1528, -77.0221],
    rating: 4.7,
    address: "Av. Pedro de Osma 421, Barranco",
    hours: "Mar - Dom: 10:00 AM - 6:00 PM",
    desc: "Ubicado en una deslumbrante mansión de estilo francés construida en 1906, este museo alberga una valiosa colección privada de arte colonial del sur andino (pinturas cusqueñas, platería, esculturas y retablos).",
    special: "Imperdible: Los jardines del palacio decorados con estatuas de mármol y palmeras centenarias.",
    image: "https://images.unsplash.com/photo-1566121318599-29a8a773d2a7?q=80&w=600",
    closestNode: "museo"
  },
  {
    id: "mac-lima",
    name: "Museo de Arte Contemporáneo (MAC)",
    tagline: "El espacio para la vanguardia artística visual",
    category: "attraction",
    coords: [-12.1415, -77.0218],
    rating: 4.5,
    address: "Av. Miguel Grau 1511, Barranco",
    hours: "Mar - Dom: 10:00 AM - 7:00 PM",
    desc: "El único museo de Lima especializado en la difusión de prácticas artísticas contemporáneas. Cuenta con tres salas de exhibición principales y un amplio parque que sirve de plataforma para intervenciones de arte al aire libre.",
    special: "Tip: Su cafetería en el jardín frente a una pequeña laguna es un remanso de paz.",
    image: "https://images.unsplash.com/photo-1554907914-1b344d59c3e2?q=80&w=600",
    closestNode: "mac"
  },
  {
    id: "mirador-barranco",
    name: "El Mirador de Barranco",
    tagline: "Espectaculares puestas de sol sobre la Costa Verde",
    category: "attraction",
    coords: [-12.1483, -77.0224],
    rating: 4.7,
    address: "Detrás de la Biblioteca Municipal, Barranco",
    hours: "Abierto 24 horas",
    desc: "Ubicado en un acantilado justo detrás de la Iglesia de la Ermita, este mirador ofrece una de las vistas más románticas y despejadas del mar limeño, el Morro Solar de Chorrillos y la Bajada de Baños.",
    special: "Tip: El mejor momento para ir es a las 5:30 PM para ver el sunset sobre el océano.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
    closestNode: "puente"
  },

  // --- RESTAURANTS (restaurant) ---
  {
    id: "rest-central",
    name: "Central Restaurante",
    tagline: "El Mejor Restaurante del Mundo (World's 50 Best 2023)",
    category: "restaurant",
    coords: [-12.1552, -77.0210],
    rating: 4.9,
    address: "Av. Pedro de Osma 301, Barranco",
    hours: "Lun - Sáb: Reserva previa indispensable",
    desc: "El templo culinario de los chefs Virgilio Martínez y Pía León. Su propuesta se basa en 'Alturas Mater', explorando los insumos peruanos de acuerdo con sus ecosistemas y altitudes, desde el fondo marino (-20 msnm) hasta los Andes altos (4200 msnm).",
    special: "Especialidad: Menú degustación de Alturas Mater.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600",
    closestNode: "central"
  },
  {
    id: "rest-isolina",
    name: "Isolina Taberna Peruana",
    tagline: "Tradición y abundancia de la comida criolla",
    category: "restaurant",
    coords: [-12.1501, -77.0220],
    rating: 4.7,
    address: "Av. San Martín 101, Barranco",
    hours: "Mar - Sáb: 12:30 PM - 10:00 PM | Dom: 12:30 PM - 5:00 PM",
    desc: "Una auténtica taberna limeña en una casona centenaria. Rinde homenaje a las recetas familiares de las abuelas. Las porciones son sumamente generosas y se sirven en ollas y fuentes de metal para compartir en mesa.",
    special: "Recomendado: Seco de Res a la Limeña, Lomo Saltado o Escabeche de Pescado.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600",
    closestNode: "isolina"
  },
  {
    id: "rest-cantarana",
    name: "Cebichería Canta Rana",
    tagline: "Un clásico barranquino con alma futbolera y marina",
    category: "restaurant",
    coords: [-12.1467, -77.0239],
    rating: 4.6,
    address: "Génova 101, Barranco",
    hours: "Lun - Dom: 12:00 PM - 5:00 PM",
    desc: "Abierta hace más de 30 años, esta rústica y querida cebichería está tapizada de banderas de fútbol, fotos antiguas y recortes de prensa. Sirve uno de los cebiches más frescos, picantes y tradicionales de todo Lima.",
    special: "Especialidad: Cebiche Apaltado (con palta), Conchas Negras y el Arroz con Mariscos.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600",
    closestNode: "bajada"
  },
  {
    id: "rest-merito",
    name: "Mérito",
    tagline: "Fusión única de sabores andinos y venezolanos",
    category: "restaurant",
    coords: [-12.1502, -77.0220],
    rating: 4.8,
    address: "Jr. 28 de Julio 206, Barranco",
    hours: "Lun - Sáb: 1:00 PM - 10:30 PM",
    desc: "Dirigido por el chef venezolano Juan Luis Martínez. Mérito mezcla técnicas contemporáneas e ingredientes peruanos con toques nostálgicos de la cocina venezolana. Ha sido aclamado como uno de los restaurantes más innovadores de Sudamérica.",
    special: "Plato estrella: El maíz a la brasa con salsa Huancaína y las arepas de maíz tierno.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600",
    closestNode: "isolina"
  },

  // --- BARS (bar) ---
  {
    id: "bar-ayahuasca",
    name: "Ayahuasca Restobar",
    tagline: "Espectacular bar en una mansión neoclásica del siglo XIX",
    category: "bar",
    coords: [-12.1472, -77.0227],
    rating: 4.7,
    address: "Av. Prolongación San Martín 130, Barranco",
    hours: "Lun - Sáb: 6:00 PM - 3:00 AM",
    desc: "La mansión Berninzon (1895) restaurada e iluminada con luces de colores. Cuenta con múltiples habitaciones de techos altos, chimeneas, escaleras caracol y una barra central que ofrece licores macerados en pisco con frutas andinas.",
    special: "Trago sugerido: Chilcano de Aguaymanto o Pisco Sour macerado en hoja de coca.",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=600",
    closestNode: "ayahuasca"
  },
  {
    id: "bar-juanito",
    name: "Juanito de Barranco",
    tagline: "La cantina tradicional de poetas y bohemios",
    category: "bar",
    coords: [-12.1494, -77.0217],
    rating: 4.5,
    address: "Av. Miguel Grau 270, Barranco (Frente a la Plaza)",
    hours: "Lun - Dom: 12:00 PM - 1:00 AM",
    desc: "Fundada en 1937, es el bar más antiguo y con más solera de Barranco. Ha sido el refugio de intelectuales, músicos y artistas limeños. Famoso por sus conversaciones animadas y sus botellas de Pisco servidas con ginger ale ('el res').",
    special: "Obligatorio: Probar su tradicional sándwich de jamón del país con salsa criolla.",
    image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600",
    closestNode: "plaza"
  },
  {
    id: "bar-dada",
    name: "Dada Restobar",
    tagline: "Cultura, pizza artesanal y coctelería de autor",
    category: "bar",
    coords: [-12.1479, -77.0224],
    rating: 4.6,
    address: "Av. San Martín 154, Barranco",
    hours: "Lun - Dom: 6:00 PM - 2:00 AM",
    desc: "Un rincón artístico e inconformista en una hermosa casa republicana. Ofrece exposiciones de cuadros locales, música en vivo acústica, un patio central arbolado espectacular para cenar al aire libre y pizzas a la leña.",
    special: "Recomendado: Probar su carta de coctelería experimental elaborada con gin peruano.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600",
    closestNode: "ayahuasca"
  },
  {
    id: "bar-barra55",
    name: "Barra 55",
    tagline: "El bar más íntimo especialista en Gin, Mezcal y Tapas",
    category: "bar",
    coords: [-12.1504, -77.0219],
    rating: 4.6,
    address: "Jr. 28 de Julio 206, Barranco",
    hours: "Lun - Sáb: 7:00 PM - 2:00 AM",
    desc: "Un espacio diminuto de apenas 20 metros cuadrados donde prima la calidad. Cuentan con una espectacular colección de más de 60 variedades de gin de todo el mundo y cervezas artesanales locales, acompañadas de excelentes tapas.",
    special: "Dato: Perfecto para una primera parada en la noche ('pre-drink') por su ambiente íntimo.",
    image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=600",
    closestNode: "isolina"
  },

  // --- NIGHTCLUBS (club) ---
  {
    id: "club-dragon",
    name: "El Dragón de Barranco",
    tagline: "El legendario club de música en vivo y fiesta ecléctica",
    category: "club",
    coords: [-12.1462, -77.0221],
    rating: 4.5,
    address: "Av. Nicolás de Piérola 168, Barranco",
    hours: "Mié - Sáb: 9:00 PM - 4:00 AM",
    desc: "El corazón de la noche barranquina por más de 20 años. Es famoso por su programación variada: conciertos de bandas locales los miércoles, batallas de hip hop, reggae y DJs de música electrónica y reggaetón los fines de semana.",
    special: "Tip: Llega temprano los jueves para disfrutar de bandas tributo o funk en vivo.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600",
    closestNode: "dragon"
  },
  {
    id: "club-sargento",
    name: "Sargento Pimienta",
    tagline: "El templo del Rock y la Salsa desde 1975",
    category: "club",
    coords: [-12.1479, -77.0202],
    rating: 4.6,
    address: "Av. Francisco Bolognesi 757, Barranco",
    hours: "Mar - Sáb: 9:00 PM - 4:00 AM",
    desc: "El local nocturno en actividad más antiguo y con más historia del rock peruano. Por su escenario han pasado todas las grandes leyendas nacionales del rock, punk e indie. Los martes son legendarios por sus noches de salsa con orquesta en vivo.",
    special: "Evento imperdible: 'Martes de Salsa con Sargento' o fines de semana de puro Rock.",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=600",
    closestNode: "sargento"
  },
  {
    id: "club-bizarro",
    name: "Bizarro Club",
    tagline: "Música electrónica y hits de moda en dos ambientes",
    category: "club",
    coords: [-12.1469, -77.0218],
    rating: 4.4,
    address: "Av. Miguel Grau, límite con Miraflores",
    hours: "Jue - Sáb: 10:00 PM - 4:00 AM",
    desc: "Una discoteca moderna con excelentes sistemas de luces y sonido. Cuenta con dos salas independientes: una dedicada al reggaetón y hits comerciales, y otra sala interior íntima ('underground') enfocada en house y techno.",
    special: "Dato: Cuenta con un código de vestimenta casual-elegante.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600",
    closestNode: "balta"
  },

  // --- PUBLIC AREAS (public) ---
  {
    id: "pub-malecon",
    name: "Malecón de Barranco (Paul Harris)",
    tagline: "Caminatas panorámicas frente al abismo del Océano",
    category: "public",
    coords: [-12.1440, -77.0250],
    rating: 4.8,
    address: "Av. Paul Harris, Barranco",
    hours: "Abierto 24 horas",
    desc: "El hermoso malecón sobre los acantilados que bordean la Costa Verde. Conecta Barranco con Miraflores. Cuenta con ciclovías, parques llenos de flores, bancas para descansar y áreas de césped ideales para hacer picnic, yoga o ver el sunset.",
    special: "Tip: Alquila una bicicleta pública y recorre el malecón entero de norte a sur.",
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600",
    closestNode: "malecon"
  },
  {
    id: "pub-carrion",
    name: "Plazuela Daniel Alcides Carrión",
    tagline: "Un rincón de paz y casonas históricas",
    category: "public",
    coords: [-12.1521, -77.0205],
    rating: 4.5,
    address: "Jr. Centenario cruce con Jr. Dos de Mayo",
    hours: "Abierto 24 horas",
    desc: "Una encantadora y tranquila plaza pequeña rodeada de hermosas casonas republicanas de adobe y madera pintadas en vibrantes colores. Hay bancas bajo frondosos árboles ideales para leer un libro lejos del bullicio.",
    special: "Dato: Es un punto habitual para sesiones fotográficas de novios y turistas.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=600",
    closestNode: "museo"
  },

  // --- ACCESS POINTS (access) ---
  {
    id: "acc-bul",
    name: "Estación Bulevar (Metropolitano)",
    tagline: "Acceso rápido de transporte masivo al centro del distrito",
    category: "access",
    coords: [-12.1490, -77.0205],
    rating: 4.2,
    address: "Av. Paseo de la República con Jr. Bolognesi",
    hours: "Lun - Dom: 5:00 AM - 11:00 PM",
    desc: "La estación de autobús de tránsito rápido (BRT) más importante de Barranco. Conecta el distrito directamente con Miraflores, San Isidro, Lince y el Centro de Lima. Al salir, estás a 2 minutos a pie de la Plaza de Armas y de los principales bulevares de bares.",
    special: "Dato: Es la mejor forma de llegar a Barranco desde el centro de la ciudad evitando el tráfico vehicular.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600",
    closestNode: "plaza"
  },
  {
    id: "acc-bal",
    name: "Estación Balta (Metropolitano)",
    tagline: "Ingreso norte peatonal al distrito de Barranco",
    category: "access",
    coords: [-12.1422, -77.0213],
    rating: 4.1,
    address: "Av. Paseo de la República cruce con Av. Balta",
    hours: "Lun - Dom: 5:00 AM - 11:00 PM",
    desc: "Estación ubicada en el extremo norte del distrito. Permite un ingreso directo al barrio a través de la hermosa Av. Balta, caracterizada por sus grandes árboles de ficus y ciclovías.",
    special: "Tip: Úsala si vas en dirección al Museo de Arte Contemporáneo (MAC).",
    image: "https://images.unsplash.com/photo-1463780324318-d1a8ddc05a11?q=80&w=600",
    closestNode: "balta"
  },
  {
    id: "acc-armendariz",
    name: "Bajada de Armendáriz (Acceso Vehicular)",
    tagline: "Entrada principal desde el circuito de playas Costa Verde",
    category: "access",
    coords: [-12.1395, -77.0255],
    rating: 4.3,
    address: "Límite Miraflores - Barranco",
    hours: "Vía rápida 24 horas",
    desc: "La garganta vehicular que conecta la autopista costera de Lima (Costa Verde) con las avenidas principales de Miraflores y Barranco. Es el punto de entrada para taxistas y turistas que llegan desde el aeropuerto del Callao por vía rápida costera.",
    special: "Atención: Tráfico congestionado en horas punta (de 6:00 PM a 8:00 PM).",
    image: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=600",
    closestNode: "mac"
  },
  {
    id: "acc-bajada-playa",
    name: "Acceso Peatonal de Bajada de Baños",
    tagline: "El puente peatonal rústico que conecta con la arena",
    category: "access",
    coords: [-12.1500, -77.0245],
    rating: 4.7,
    address: "Final de la Bajada de Baños, Barranco",
    hours: "Abierto 24 horas",
    desc: "Un puente peatonal arqueado que cruza por encima del Circuito de Playas vehicular, conectando de forma segura y pintoresca el acantilado y restaurantes de la Bajada de Baños con la orilla de la playa de Barranco.",
    special: "Dato: Excelente punto para ver a los surfistas locales que ingresan al mar.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600",
    closestNode: "playa"
  }
];

// 2. STREET NETWORK FOR DIJKSTRA ROUTING
// Nodes inside Barranco
const nodes = {
  balta: { coords: [-12.1422, -77.0213], label: "Estación Balta" },
  mac: { coords: [-12.1415, -77.0218], label: "MAC Lima" },
  dragon: { coords: [-12.1462, -77.0221], label: "Av. Grau (El Dragón)" },
  ayahuasca: { coords: [-12.1472, -77.0227], label: "Prolongación San Martín" },
  sargento: { coords: [-12.1479, -77.0202], label: "Av. Bolognesi (Sargento Pimienta)" },
  plaza: { coords: [-12.1492, -77.0219], label: "Plaza de Armas" },
  puente: { coords: [-12.1486, -77.0223], label: "Puente de los Suspiros" },
  bajada: { coords: [-12.1488, -77.0227], label: "Bajada de Baños" },
  playa: { coords: [-12.1500, -77.0245], label: "Acceso Playa" },
  isolina: { coords: [-12.1501, -77.0220], label: "Av. San Martín / Isolina" },
  museo: { coords: [-12.1528, -77.0221], label: "Av. Pedro de Osma (Museo)" },
  central: { coords: [-12.1552, -77.0210], label: "Av. Pedro de Osma (Central)" },
  malecon: { coords: [-12.1440, -77.0250], label: "Malecón Paul Harris" },
  gps: { coords: [-12.1450, -77.0225], label: "Mi Ubicación Simulada" }
};

// Edges connecting nodes
const edges = [
  { u: "balta", v: "mac", path: [[-12.1422, -77.0213], [-12.1415, -77.0218]], cost: 1, desc: "Camine hacia el norte por la Av. Miguel Grau en dirección al MAC (80 m)" },
  { u: "balta", v: "dragon", path: [[-12.1422, -77.0213], [-12.1445, -77.0217], [-12.1462, -77.0221]], cost: 4, desc: "Avance hacia el sur por la Av. Miguel Grau (450 m)" },
  { u: "dragon", v: "ayahuasca", path: [[-12.1462, -77.0221], [-12.1472, -77.0227]], cost: 2, desc: "Siga por Av. Grau y doble a la derecha en Prolongación San Martín (120 m)" },
  { u: "ayahuasca", v: "plaza", path: [[-12.1472, -77.0227], [-12.1479, -77.0224], [-12.1492, -77.0219]], cost: 3, desc: "Camine hacia el sur por la Av. San Martín rumbo al Parque Municipal (250 m)" },
  { u: "plaza", v: "puente", path: [[-12.1492, -77.0219], [-12.1486, -77.0223]], cost: 1, desc: "Tome la calle Jr. Batalla de Junín hacia el Puente de los Suspiros (80 m)" },
  { u: "puente", v: "bajada", path: [[-12.1486, -77.0223], [-12.1488, -77.0227]], cost: 1, desc: "Cruce el puente y baje hacia la Bajada de Baños (50 m)" },
  { u: "bajada", v: "playa", path: [[-12.1488, -77.0227], [-12.1500, -77.0245]], cost: 3, desc: "Descienda por la Bajada de Baños entre murales hacia el mirador peatonal (350 m)" },
  { u: "plaza", v: "isolina", path: [[-12.1492, -77.0219], [-12.1501, -77.0220]], cost: 1, desc: "Diríjase al sur por la vereda lateral de Av. San Martín (100 m)" },
  { u: "isolina", v: "museo", path: [[-12.1501, -77.0220], [-12.1528, -77.0221]], cost: 3, desc: "Siga recto por la arbolada Av. Pedro de Osma pasando el Jr. 28 de Julio (320 m)" },
  { u: "museo", v: "central", path: [[-12.1528, -77.0221], [-12.1552, -77.0210]], cost: 3, desc: "Continúe hacia el sur por Av. Pedro de Osma (280 m)" },
  { u: "sargento", v: "plaza", path: [[-12.1479, -77.0202], [-12.1490, -77.0205], [-12.1492, -77.0219]], cost: 3, desc: "Camine hacia el oeste por la Av. Francisco Bolognesi cruzando las vías del tranvía (300 m)" },
  { u: "malecon", v: "gps", path: [[-12.1440, -77.0250], [-12.1450, -77.0225]], cost: 3, desc: "Camine por el Malecón Paul Harris y doble hacia calle San Martín (320 m)" },
  { u: "gps", v: "ayahuasca", path: [[-12.1450, -77.0225], [-12.1472, -77.0227]], cost: 3, desc: "Camine hacia el sur por la Av. San Martín en dirección a Ayahuasca (260 m)" }
];

// 3. DIJKSTRA PATHFINDING IMPLEMENTATION
function findShortestPath(startNodeId, endNodeId) {
  // Create adjacency list
  const adj = {};
  for (const nodeId in nodes) {
    adj[nodeId] = [];
  }
  edges.forEach(edge => {
    adj[edge.u].push({ node: edge.v, cost: edge.cost, path: edge.path, desc: edge.desc });
    // Bidirectional edges (symmetric)
    adj[edge.v].push({ 
      node: edge.u, 
      cost: edge.cost, 
      path: [...edge.path].reverse(), 
      desc: edge.desc.replace("hacia el sur", "hacia el norte")
                     .replace("hacia el norte", "hacia el sur")
                     .replace("norte", "sur")
                     .replace("sur", "norte")
                     .replace("este", "oeste")
                     .replace("oeste", "este")
                     .replace("descienda", "suba")
                     .replace("baje", "suba")
                     .replace("dirección a", "dirección opuesta a")
    });
  });

  // Dijkstra Algorithm
  const dist = {};
  const prev = {};
  const pq = new Set();

  for (const nodeId in nodes) {
    dist[nodeId] = Infinity;
    prev[nodeId] = null;
    pq.add(nodeId);
  }
  dist[startNodeId] = 0;

  while (pq.size > 0) {
    // Find node with minimum distance in priority queue
    let minNodeId = null;
    let minDist = Infinity;
    pq.forEach(nodeId => {
      if (dist[nodeId] < minDist) {
        minDist = dist[nodeId];
        minNodeId = nodeId;
      }
    });

    if (minNodeId === null || minNodeId === endNodeId) {
      break;
    }

    pq.delete(minNodeId);

    adj[minNodeId].forEach(neighbor => {
      if (pq.has(neighbor.node)) {
        const alt = dist[minNodeId] + neighbor.cost;
        if (alt < dist[neighbor.node]) {
          dist[neighbor.node] = alt;
          prev[neighbor.node] = { from: minNodeId, edge: neighbor };
        }
      }
    });
  }

  // Reconstruct path
  if (dist[endNodeId] === Infinity) return null;

  const pathCoords = [];
  const instructions = [];
  let curr = endNodeId;

  while (prev[curr] !== null) {
    const step = prev[curr];
    // Add path coords in reverse order
    pathCoords.unshift(...step.edge.path);
    instructions.unshift(step.edge.desc);
    curr = step.from;
  }

  // Clean duplicate consecutive coordinates
  const uniqueCoords = [];
  pathCoords.forEach(c => {
    if (uniqueCoords.length === 0) {
      uniqueCoords.push(c);
    } else {
      const last = uniqueCoords[uniqueCoords.length - 1];
      if (last[0] !== c[0] || last[1] !== c[1]) {
        uniqueCoords.push(c);
      }
    }
  });

  return {
    coords: uniqueCoords,
    instructions: instructions,
    cost: dist[endNodeId]
  };
}

// 4. PRESET AUDIO GUIDES
const audioTracks = [
  {
    id: "history-bajada",
    title: "Historia de la Bajada de Baños y el Puente",
    duration: 135, // in seconds (2:15)
    file: "history_bajada",
    transcript: "La Bajada de Baños era originalmente una quebrada natural que usaban los pescadores del distrito de Surco para bajar a las playas de Barranco. Con los años, se construyeron hermosas casonas coloniales y republicanas a sus costados. El Puente de los Suspiros fue inaugurado en 1876 para unir las riberas del barranco y evitar dar un gran rodeo. En la guerra del Pacífico, los soldados chilenos incendiaron el templo y el puente, pero los vecinos lo reconstruyeron con orgullo, convirtiéndolo en el emblema bohemio de Lima."
  },
  {
    id: "chabuca-granda",
    title: "Chabuca Granda y el vals criollo",
    duration: 105, // 1:45
    file: "chabuca",
    transcript: "María Isabel Granda Larco, conocida universalmente como Chabuca Granda, es la gran alma musical de Barranco. Pasó gran parte de su juventud en este distrito, inspirándose en sus esquinas y personajes. Su famoso vals 'El Puente de los Suspiros', lanzado en 1960, convirtió a este rincón en un icono internacional del romanticismo. Justo al lado del puente, podrás encontrar una estatua de bronce erigida en su honor junto a un monumento al chalán peruano José Antonio."
  },
  {
    id: "colonial-architecture",
    title: "Arquitectura Republicana en Pedro de Osma",
    duration: 185, // 3:05
    file: "architecture",
    transcript: "Al pasear por la Av. Pedro de Osma, te trasladas al año 1900. Este bulevar fue diseñado para albergar las residencias de verano de las familias adineradas de la época. Las casonas destacan por sus amplios pórticos, balcones de madera tallada, vitrales importados de Europa y techos de doble altura adaptados al clima húmedo de la costa. El Palacio Pedro de Osma, de estilo neoclásico francés, y el rancho colonial de Isolina son los máximos exponentes de este legado arquitectónico."
  }
];

// 5. APPLICATION STATE
let map = null;
let currentTheme = "light"; // "light" or "dark"
let selectedPoiId = null;
let activeCategory = "all";
let gpsSimulatorMarker = null;
let activeRoutePolyline = null;
let currentAudioIndex = 0;
let audioTimerInterval = null;
let isAudioPlaying = false;
let audioElapsedTime = 0;
const simulatedGpsCoords = [-12.1450, -77.0225]; // Simulated current user coordinates

// Leaflet tile layer definitions
const tileLayers = {
  light: L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }),
  dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  })
};

// Map markers dictionary
const mapMarkers = {};

// 6. INITIALIZATION FUNCTIONS
document.addEventListener("DOMContentLoaded", () => {
  // Simulate Splash Screen completion
  setTimeout(() => {
    const splash = document.getElementById("splash-screen");
    splash.classList.add("fade-out");
    setTimeout(() => splash.remove(), 600);
  }, 1800);

  initMap();
  populateUI();
  setupEventListeners();
  initAudioGuide();
});

// Map Engine Startup
function initMap() {
  // Initialize Leaflet map targeting the 'map' div, locked on Barranco bounds
  map = L.map('map', {
    center: [-12.1486, -77.0211],
    zoom: 15,
    minZoom: 14,
    maxZoom: 18,
    // Limit map panning strictly to Barranco boundaries
    maxBounds: [
      [-12.1620, -77.0350], // South-West corner
      [-12.1320, -77.0100]  // North-East corner
    ]
  });

  // Default theme layer
  tileLayers.light.addTo(map);

  // Add simulated GPS marker
  const gpsIcon = L.divIcon({
    className: 'gps-pulse-marker',
    html: '<div class="gps-pulse"></div><div class="gps-dot"></div>',
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  });
  gpsSimulatorMarker = L.marker(simulatedGpsCoords, { icon: gpsIcon }).addTo(map);
  gpsSimulatorMarker.bindPopup("<b>Tú (Simulado)</b><br>Calle Prolongación San Martín");

  // Load custom pins for all POIs
  pois.forEach(poi => {
    const customIcon = L.divIcon({
      className: 'custom-leaflet-marker',
      html: `
        <div class="marker-pin-wrapper" style="--marker-color: var(--color-${poi.category})">
          <div class="marker-pin-circle"></div>
          <div class="marker-pin-icon">${getIconEmoji(poi.category)}</div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
    });

    const marker = L.marker(poi.coords, { icon: customIcon }).addTo(map);
    
    // Custom popup
    marker.bindPopup(`
      <div style="font-family: var(--font-primary); padding: 4px; max-width: 200px;">
        <b style="font-size: 14px; color: var(--text-primary);">${poi.name}</b>
        <div style="font-size: 11px; color: var(--color-${poi.category}); font-weight: 700; margin: 2px 0 6px;">${getCategoryLabel(poi.category)}</div>
        <button onclick="handlePoiSelect('${poi.id}')" style="background: var(--accent-color); color: #fff; border: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer; width: 100%; font-weight: 600;">Ver Ficha e Imagen</button>
      </div>
    `);

    marker.on('click', () => {
      // Direct opening drawer
      openPoiDrawer(poi.id);
    });

    mapMarkers[poi.id] = marker;
  });
}

// 7. UI POPULATION & BINDINGS
function populateUI() {
  // Places Cards list injection
  renderPlacesList(pois);

  // Populate Select fields for Waze Route simulation
  const startSelect = document.getElementById("route-start");
  const endSelect = document.getElementById("route-end");
  
  startSelect.innerHTML = `<option value="gps">📍 Mi Ubicación (Simulada)</option>`;
  endSelect.innerHTML = `<option value="" disabled selected>Selecciona destino...</option>`;

  // Filter access points and locations for routes
  pois.forEach(poi => {
    startSelect.innerHTML += `<option value="${poi.id}">${poi.name}</option>`;
    endSelect.innerHTML += `<option value="${poi.id}">${poi.name}</option>`;
  });
}

function renderPlacesList(places) {
  const container = document.getElementById("places-list-container");
  container.innerHTML = "";

  if (places.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <p style="font-size: 1.5rem; margin-bottom: 8px;">🔍</p>
        <p>No se encontraron resultados para tu búsqueda.</p>
      </div>
    `;
    document.getElementById("results-count").innerText = "0 lugares encontrados";
    return;
  }

  document.getElementById("results-count").innerText = `${places.length} lugar${places.length > 1 ? 'es' : ''} encontrado${places.length > 1 ? 's' : ''}`;

  places.forEach(poi => {
    const card = document.createElement("div");
    card.className = `place-card ${selectedPoiId === poi.id ? 'selected' : ''}`;
    card.style.setProperty('--category-color', `var(--color-${poi.category})`);
    card.setAttribute("id", `card-${poi.id}`);
    
    card.innerHTML = `
      <img src="${poi.image}" alt="${poi.name}" class="place-card-img" onerror="this.src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=150'">
      <div class="place-card-info">
        <div class="place-card-header">
          <h4 class="place-card-title">${poi.name}</h4>
          <span class="place-card-rating">${poi.rating} ★</span>
        </div>
        <p class="place-card-tagline">${poi.tagline}</p>
        <div class="place-card-footer">
          <span class="place-card-category">${getCategoryLabel(poi.category)}</span>
          <button class="place-card-btn" onclick="triggerNavigationSim('${poi.id}', event)">Navegar</button>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      // Prevent click triggers if clicked the card navigate button
      if (e.target.tagName !== "BUTTON") {
        handlePoiSelect(poi.id);
      }
    });

    container.appendChild(card);
  });
}

// Event Listeners setup
function setupEventListeners() {
  // Search bar logic
  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    if (query.length > 0) {
      searchClear.style.display = "block";
    } else {
      searchClear.style.display = "none";
    }
    filterPlaces();
  });

  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    searchClear.style.display = "none";
    filterPlaces();
    searchInput.focus();
  });

  // Filter chips click
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelector(".filter-chip.active").classList.remove("active");
      chip.classList.add("active");
      activeCategory = chip.dataset.category;
      filterPlaces();
    });
  });

  // Theme switch (Day vs Night map style)
  const themeToggle = document.getElementById("theme-toggle");
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");

  themeToggle.addEventListener("click", () => {
    if (currentTheme === "light") {
      currentTheme = "dark";
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      sunIcon.style.display = "none";
      moonIcon.style.display = "block";
      map.removeLayer(tileLayers.light);
      tileLayers.dark.addTo(map);
    } else {
      currentTheme = "light";
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      sunIcon.style.display = "block";
      moonIcon.style.display = "none";
      map.removeLayer(tileLayers.dark);
      tileLayers.light.addTo(map);
    }
  });

  // Tab click triggers
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".tab-btn.active").classList.remove("active");
      btn.classList.add("active");
      
      const tabId = btn.dataset.tab;
      document.querySelectorAll(".tab-content").forEach(content => {
        content.classList.remove("active");
      });
      document.getElementById(`tab-${tabId}`).classList.add("active");
    });
  });

  // GPS Simulation trigger
  document.getElementById("btn-gps-simulate").addEventListener("click", () => {
    map.setView(simulatedGpsCoords, 17, { animate: true });
    gpsSimulatorMarker.openPopup();
    
    // Ripple effect simulation visual alert
    const btn = document.getElementById("btn-gps-simulate");
    btn.style.borderColor = "#3B82F6";
    setTimeout(() => btn.style.borderColor = "var(--border-color)", 1000);
  });

  // Close drawer
  document.getElementById("close-drawer-btn").addEventListener("click", () => {
    document.getElementById("detail-drawer").classList.remove("open");
    if (selectedPoiId) {
      document.getElementById(`card-${selectedPoiId}`)?.classList.remove("selected");
      mapMarkers[selectedPoiId]?.getElement()?.classList.remove("selected");
      selectedPoiId = null;
    }
  });

  // Calculate simulated Waze route
  document.getElementById("btn-calculate-route").addEventListener("click", () => {
    calculateAndDrawRoute();
  });

  // Clear route
  document.getElementById("btn-clear-route").addEventListener("click", () => {
    clearActiveRoute();
  });

  // Preset Tour clicks
  document.querySelectorAll(".tour-card").forEach(tour => {
    tour.addEventListener("click", () => {
      const tourType = tour.dataset.tour;
      triggerPresetTour(tourType);
    });
  });

  // Slide-up drawer mobile swipe simulation
  const drawer = document.getElementById("detail-drawer");
  const handle = document.getElementById("drawer-handle");
  let startY = 0;
  let currentY = 0;

  handle.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
  });

  handle.addEventListener("touchmove", (e) => {
    currentY = e.touches[0].clientY;
    const diff = currentY - startY;
    if (diff > 0) { // Swiping down
      drawer.style.transform = `translateY(${diff}px)`;
    }
  });

  handle.addEventListener("touchend", (e) => {
    const diff = currentY - startY;
    drawer.style.transform = ""; // Reset inline style
    if (diff > 80) { // Dragged down sufficiently
      drawer.classList.remove("open");
    }
  });

  // Action inside drawer "Como llegar?"
  document.getElementById("btn-draw-to-here").addEventListener("click", () => {
    if (selectedPoiId) {
      document.getElementById("route-start").value = "gps";
      document.getElementById("route-end").value = selectedPoiId;
      
      // Open Waze Tab
      document.querySelector('[data-tab="routes-guide"]').click();
      
      // Calculate
      calculateAndDrawRoute();
      
      // Close detail drawer
      document.getElementById("detail-drawer").classList.remove("open");
    }
  });
}

// 8. DATA FILTERING & SYNCING
function filterPlaces() {
  const query = document.getElementById("search-input").value.toLowerCase().trim();
  
  // Filter POIs list
  const filtered = pois.filter(poi => {
    const matchesCategory = (activeCategory === "all" || poi.category === activeCategory);
    const matchesQuery = (
      poi.name.toLowerCase().includes(query) ||
      poi.tagline.toLowerCase().includes(query) ||
      poi.desc.toLowerCase().includes(query)
    );
    return matchesCategory && matchesQuery;
  });

  // Render list
  renderPlacesList(filtered);

  // Sync Map markers visibility
  pois.forEach(poi => {
    const marker = mapMarkers[poi.id];
    const isVisible = filtered.some(f => f.id === poi.id);
    
    if (isVisible) {
      if (!map.hasLayer(marker)) {
        marker.addTo(map);
      }
    } else {
      if (map.hasLayer(marker)) {
        map.removeLayer(marker);
      }
    }
  });

  // Set category name label in directory header
  const catLabel = document.querySelector(".active-category-name");
  catLabel.innerText = getCategoryLabelPlural(activeCategory);
}

// POI Selection pipeline
function handlePoiSelect(poiId) {
  const previouslySelected = selectedPoiId;
  selectedPoiId = poiId;

  // Un-select previous card
  if (previouslySelected) {
    document.getElementById(`card-${previouslySelected}`)?.classList.remove("selected");
    mapMarkers[previouslySelected]?.getElement()?.classList.remove("selected");
  }

  // Highlight selected card in list
  const card = document.getElementById(`card-${poiId}`);
  if (card) {
    card.classList.add("selected");
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Highlight map pin
  const marker = mapMarkers[poiId];
  if (marker) {
    marker.getElement()?.classList.add("selected");
    map.setView(marker.getLatLng(), 17, { animate: true });
    marker.openPopup();
  }

  // Populate and slide open detail drawer
  openPoiDrawer(poiId);
}

// Populate and Open Drawer sheet
function openPoiDrawer(poiId) {
  const poi = pois.find(p => p.id === poiId);
  if (!poi) return;

  selectedPoiId = poiId;

  document.getElementById("drawer-place-img").src = poi.image;
  document.getElementById("drawer-place-name").innerText = poi.name;
  document.getElementById("drawer-place-rating").innerText = poi.rating;
  document.getElementById("drawer-place-tagline").innerText = poi.tagline;
  document.getElementById("drawer-place-desc").innerText = poi.desc;
  document.getElementById("drawer-place-address").innerText = poi.address;
  document.getElementById("drawer-place-hours").innerText = poi.hours;
  document.getElementById("drawer-place-badge").innerText = getCategoryLabel(poi.category);
  document.getElementById("drawer-place-badge").style.background = `var(--color-${poi.category})`;

  const specialRow = document.getElementById("drawer-special-row");
  const specialText = document.getElementById("drawer-special-text");
  const specialIcon = document.getElementById("drawer-special-icon");

  if (poi.special) {
    specialRow.style.display = "flex";
    specialText.innerText = poi.special;
    
    // Dynamic icon based on content
    if (poi.special.includes("Tip")) {
      specialIcon.innerText = "💡";
    } else if (poi.special.includes("Dato")) {
      specialIcon.innerText = "📜";
    } else {
      specialIcon.innerText = "✨";
    }
  } else {
    specialRow.style.display = "none";
  }

  // CSS class toggle
  document.getElementById("detail-drawer").classList.add("open");
}

// 9. ROUTING SIMULATOR (WAZE SIM)
function calculateAndDrawRoute() {
  const startVal = document.getElementById("route-start").value;
  const endVal = document.getElementById("route-end").value;

  if (!endVal) {
    alert("Por favor, selecciona un destino.");
    return;
  }

  if (startVal === endVal) {
    alert("El origen y el destino no pueden ser iguales.");
    return;
  }

  clearActiveRoute();

  // Find routing node IDs
  let startNodeId = "gps";
  let endNodeId = "plaza";

  if (startVal !== "gps") {
    const startPoi = pois.find(p => p.id === startVal);
    startNodeId = startPoi.closestNode;
  }
  const endPoi = pois.find(p => p.id === endVal);
  endNodeId = endPoi.closestNode;

  // Run Dijkstra
  const result = findShortestPath(startNodeId, endNodeId);

  if (!result) {
    // Fallback: draw straight dashed line if path finder has a disconnected graph edge
    const startCoords = startVal === "gps" ? simulatedGpsCoords : pois.find(p => p.id === startVal).coords;
    const endCoords = pois.find(p => p.id === endVal).coords;

    activeRoutePolyline = L.polyline([startCoords, endCoords], {
      color: '#3B82F6',
      weight: 6,
      opacity: 0.8,
      dashArray: '5, 10'
    }).addTo(map);

    map.fitBounds(activeRoutePolyline.getBounds(), { padding: [50, 50] });

    document.getElementById("route-results-panel").style.display = "block";
    document.getElementById("route-distance").innerText = "Linea recta";
    document.getElementById("route-time").innerText = "Calculando...";
    document.getElementById("route-calories").innerText = "--";
    document.getElementById("route-instructions-list").innerHTML = "<li>Camine en dirección directa al destino visible.</li>";
    document.getElementById("btn-clear-route").style.display = "block";
    return;
  }

  // Prepend original start coordinate and append final target coordinate
  const startCoords = startVal === "gps" ? simulatedGpsCoords : pois.find(p => p.id === startVal).coords;
  const endCoords = pois.find(p => p.id === endVal).coords;

  const fullPathCoords = [startCoords, ...result.coords, endCoords];

  // Draw customized Waze path
  activeRoutePolyline = L.polyline(fullPathCoords, {
    color: '#059669', // Waze/Maps green walk route or #2563EB blue drive route
    weight: 6,
    opacity: 0.85,
    lineCap: 'round',
    lineJoin: 'round'
  }).addTo(map);

  // Zoom/Fit to route bounds
  map.fitBounds(activeRoutePolyline.getBounds(), { padding: [50, 50] });

  // Calculate metrics based on Dijkstra weight cost
  const distanceKm = (result.cost * 0.15).toFixed(2); // cost multiplied by 150m average edge length
  const timeMin = Math.ceil(result.cost * 1.8); // 1.8 minutes per node hop
  const kcal = Math.ceil(timeMin * 4.5); // 4.5 kcal burned per minute walk

  // Update panels
  document.getElementById("route-distance").innerText = `${distanceKm} km`;
  document.getElementById("route-time").innerText = `${timeMin} min`;
  document.getElementById("route-calories").innerText = `${kcal} kcal`;

  // Render instructions list
  const listElement = document.getElementById("route-instructions-list");
  listElement.innerHTML = "";

  const startName = startVal === "gps" ? "tu ubicación actual" : pois.find(p => p.id === startVal).name;
  const endName = pois.find(p => p.id === endVal).name;

  // Add initial/exit instruction
  listElement.innerHTML += `<li>Salga de <b>${startName}</b> y tome las veredas peatonales de Barranco.</li>`;

  // Add Dijkstra middle turns
  result.instructions.forEach(stepDesc => {
    listElement.innerHTML += `<li>${stepDesc}.</li>`;
  });

  // Add final instruction
  listElement.innerHTML += `<li>Llegue a <b>${endName}</b>. Su destino está a la vista.</li>`;

  // Show panels
  document.getElementById("route-results-panel").style.display = "block";
  document.getElementById("btn-clear-route").style.display = "block";

  // Simulate GPS tracking dot animating along the path
  animateRouteTracker(fullPathCoords);
}

// Animate a tracking pin moving along the calculated polyline
let animationMarker = null;
function animateRouteTracker(coordinates) {
  if (animationMarker) {
    map.removeLayer(animationMarker);
  }

  const trackerIcon = L.divIcon({
    className: 'gps-pulse-marker',
    html: '<div class="gps-dot" style="background: #10B981; box-shadow: 0 0 10px #10B981;"></div>', // Green tracker dot
    iconSize: [12, 12],
    iconAnchor: [6, 6]
  });

  animationMarker = L.marker(coordinates[0], { icon: trackerIcon }).addTo(map);

  let step = 0;
  function move() {
    if (step >= coordinates.length) {
      // Completed, loop or fade out
      setTimeout(() => {
        if (animationMarker && map.hasLayer(animationMarker)) {
          map.removeLayer(animationMarker);
          animationMarker = null;
        }
      }, 2000);
      return;
    }
    if (animationMarker) {
      animationMarker.setLatLng(coordinates[step]);
      step++;
      setTimeout(move, 400); // 400ms transition per coordinate node
    }
  }
  move();
}

function clearActiveRoute() {
  if (activeRoutePolyline) {
    map.removeLayer(activeRoutePolyline);
    activeRoutePolyline = null;
  }
  if (animationMarker) {
    map.removeLayer(animationMarker);
    animationMarker = null;
  }
  document.getElementById("route-results-panel").style.display = "none";
  document.getElementById("btn-clear-route").style.display = "none";
  document.getElementById("route-end").value = "";
}

function triggerNavigationSim(poiId, event) {
  if (event) event.stopPropagation();
  
  // Set values in inputs
  document.getElementById("route-start").value = "gps";
  document.getElementById("route-end").value = poiId;

  // Trigger tab change to navigation
  document.querySelector('[data-tab="routes-guide"]').click();

  // Draw
  calculateAndDrawRoute();
}

// 10. PRESET TOUR TRIGGERS
function triggerPresetTour(tourType) {
  clearActiveRoute();
  
  let stops = [];
  let tourColor = "#8B5CF6";
  let title = "";

  switch (tourType) {
    case "classic":
      stops = ["plaza-armas", "puente-suspiros", "bajada-banos", "mirador-barranco"];
      tourColor = "#8B5CF6";
      title = "Ruta Clásica Barranquina";
      break;
    case "art":
      stops = ["mac-lima", "bajada-banos", "museo-osma"];
      tourColor = "#EF4444";
      title = "Tour de Arte Contemporáneo";
      break;
    case "nightlife":
      stops = ["bar-juanito", "bar-ayahuasca", "bar-dada", "club-dragon"];
      tourColor = "#10B981";
      title = "Circuito Nocturno Bohemia";
      break;
  }

  const coords = stops.map(id => {
    const poi = pois.find(p => p.id === id);
    return poi.coords;
  });

  // Draw polyline connecting stops sequentially
  activeRoutePolyline = L.polyline(coords, {
    color: tourColor,
    weight: 5,
    opacity: 0.8,
    dashArray: "10, 10"
  }).addTo(map);

  map.fitBounds(activeRoutePolyline.getBounds(), { padding: [50, 50] });

  // Update Route Tab inputs
  document.getElementById("route-start").value = stops[0];
  document.getElementById("route-end").value = stops[stops.length - 1];

  // Open Route tab
  document.querySelector('[data-tab="routes-guide"]').click();

  // Mock results display
  document.getElementById("route-results-panel").style.display = "block";
  document.getElementById("btn-clear-route").style.display = "block";
  document.getElementById("route-distance").innerText = tourType === "art" ? "1.5 km" : tourType === "nightlife" ? "0.9 km" : "0.4 km";
  document.getElementById("route-time").innerText = tourType === "art" ? "22 min" : tourType === "nightlife" ? "14 min" : "8 min";
  document.getElementById("route-calories").innerText = tourType === "art" ? "100 kcal" : tourType === "nightlife" ? "65 kcal" : "35 kcal";

  // Build tour checkpoints instructions list
  const listElement = document.getElementById("route-instructions-list");
  listElement.innerHTML = `<li><b>Iniciando Tour: ${title}</b></li>`;
  stops.forEach((stopId, idx) => {
    const poi = pois.find(p => p.id === stopId);
    listElement.innerHTML += `<li>Parada ${idx+1}: Visite <b>${poi.name}</b> (${getCategoryLabel(poi.category)})</li>`;
  });
}

// 11. AUDIO GUIDE SYSTEM
function initAudioGuide() {
  const playBtn = document.getElementById("audio-play");
  const prevBtn = document.getElementById("audio-prev");
  const nextBtn = document.getElementById("audio-next");
  const progressBarBg = document.getElementById("progress-bar-bg");

  playBtn.addEventListener("click", () => {
    if (isAudioPlaying) {
      pauseAudioGuide();
    } else {
      playAudioGuide();
    }
  });

  prevBtn.addEventListener("click", () => {
    changeAudioTrack(-1);
  });

  nextBtn.addEventListener("click", () => {
    changeAudioTrack(1);
  });

  // Allow clicking progress bar to scrub audio simulation
  progressBarBg.addEventListener("click", (e) => {
    const rect = progressBarBg.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const pct = clickX / width;
    
    const track = audioTracks[currentAudioIndex];
    audioElapsedTime = Math.floor(pct * track.duration);
    updateAudioUI();
  });

  // Default track setup
  loadAudioTrack(0);
}

function loadAudioTrack(idx) {
  currentAudioIndex = idx;
  const track = audioTracks[idx];
  
  document.getElementById("audio-title").innerText = track.title;
  document.getElementById("audio-text").innerText = `"${track.transcript}"`;
  document.getElementById("audio-total-time").innerText = formatTime(track.duration);
  
  audioElapsedTime = 0;
  updateAudioUI();
}

function playAudioGuide() {
  isAudioPlaying = true;
  document.querySelector(".audio-guide-player").classList.add("playing");
  
  // Toggle SVGs in button
  document.querySelector(".play-svg").style.display = "none";
  document.querySelector(".pause-svg").style.display = "block";

  const track = audioTracks[currentAudioIndex];
  
  audioTimerInterval = setInterval(() => {
    audioElapsedTime++;
    if (audioElapsedTime >= track.duration) {
      // Track finished, advance or reset
      clearInterval(audioTimerInterval);
      if (currentAudioIndex < audioTracks.length - 1) {
        changeAudioTrack(1);
        playAudioGuide();
      } else {
        pauseAudioGuide();
        audioElapsedTime = 0;
        updateAudioUI();
      }
    } else {
      updateAudioUI();
    }
  }, 1000);
}

function pauseAudioGuide() {
  isAudioPlaying = false;
  document.querySelector(".audio-guide-player").classList.remove("playing");
  
  // Toggle SVGs in button
  document.querySelector(".play-svg").style.display = "block";
  document.querySelector(".pause-svg").style.display = "none";

  clearInterval(audioTimerInterval);
}

function changeAudioTrack(dir) {
  pauseAudioGuide();
  let nextIdx = currentAudioIndex + dir;
  if (nextIdx < 0) nextIdx = audioTracks.length - 1;
  if (nextIdx >= audioTracks.length) nextIdx = 0;
  loadAudioTrack(nextIdx);
}

function updateAudioUI() {
  const track = audioTracks[currentAudioIndex];
  const pct = (audioElapsedTime / track.duration) * 100;
  
  document.getElementById("progress-bar-fill").style.width = `${pct}%`;
  document.getElementById("audio-current-time").innerText = formatTime(audioElapsedTime);
}

// 12. HELPER UTILITIES
function getIconEmoji(category) {
  switch (category) {
    case "attraction": return "⚡";
    case "restaurant": return "🍽️";
    case "bar": return "🍹";
    case "club": return "🎸";
    case "public": return "🌳";
    case "access": return "🚇";
    default: return "📍";
  }
}

function getCategoryLabel(category) {
  switch (category) {
    case "attraction": return "Atracción";
    case "restaurant": return "Restaurante";
    case "bar": return "Bar";
    case "club": return "Discoteca";
    case "public": return "Vía Pública";
    case "access": return "Punto de Acceso";
    default: return "Lugar";
  }
}

function getCategoryLabelPlural(category) {
  switch (category) {
    case "all": return "Barranco Completo";
    case "attraction": return "Atracciones Turísticas";
    case "restaurant": return "Gastronomía / Restaurantes";
    case "bar": return "Bares Tradicionales";
    case "club": return "Discotecas y Vida Nocturna";
    case "public": return "Plazas, Vías y Malecón";
    case "access": return "Ingresos y Paradas";
    default: return "Lugares en Barranco";
  }
}

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}
