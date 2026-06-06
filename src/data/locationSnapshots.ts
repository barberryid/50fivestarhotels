export type NearbyAnchor = {
  name: string;
  type?: string;
  distance?: string;
};

export type LocationSnapshot = {
  area?: string;
  locationVerdict: string;
  bestFor?: string[];
  nearbyAnchors?: NearbyAnchor[];
  address?: string;
  googleMapsUrl?: string;
  mapPreview?: {
    image: string;
    alt: string;
  };
  fallbackMap?: {
    label?: string;
    nearby?: string[];
  };
};

export const locationSnapshots: Record<string, LocationSnapshot> = {
  "the-grand-york": {
    area: "York city centre / station edge",
    locationVerdict: "A strong York base near the station and close enough for the Minster, the Shambles and the city walls on foot.",
    bestFor: ["Medieval York", "Rail arrival", "Heritage stay", "Spa city break"],
    nearbyAnchors: [
      { name: "York Minster", type: "cathedral", distance: "about 10 min on foot" },
      { name: "The Shambles", type: "historic street", distance: "about 12 min on foot" },
      { name: "York city walls", type: "heritage walk", distance: "nearby" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Grand%20York%20England",
    fallbackMap: {
      label: "York heritage base",
      nearby: ["York Minster", "The Shambles", "City walls"],
    },
  },
  "municipal-hotel-liverpool": {
    area: "Liverpool city centre",
    locationVerdict: "A central Liverpool base for St George's Hall, the waterfront, Albert Dock, galleries and Beatles-linked city exploring.",
    bestFor: ["Liverpool city break", "Civic architecture", "Waterfront", "Music history"],
    nearbyAnchors: [
      { name: "St George's Hall", type: "civic landmark", distance: "about 5 min on foot" },
      { name: "Albert Dock", type: "waterfront / museums", distance: "walk or short taxi" },
      { name: "Pier Head / Three Graces", type: "architecture", distance: "walk or short taxi" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Municipal%20Hotel%20Liverpool%20MGallery",
    fallbackMap: {
      label: "Liverpool civic base",
      nearby: ["St George's Hall", "Albert Dock", "Three Graces"],
    },
  },
  "kimpton-blythswood-square": {
    area: "Blythswood Square / central Glasgow",
    locationVerdict: "A central Glasgow base on a Georgian square, useful for museums, restaurants, Mackintosh architecture and city nightlife.",
    bestFor: ["Glasgow city break", "Spa hotel", "Restaurants", "Architecture"],
    nearbyAnchors: [
      { name: "Kelvingrove Art Gallery and Museum", type: "museum", distance: "short taxi ride" },
      { name: "Mackintosh architecture trail", type: "architecture", distance: "walk or short taxi" },
      { name: "Merchant City", type: "restaurants / galleries", distance: "walk or short taxi" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kimpton%20Blythswood%20Square%20Glasgow",
    fallbackMap: {
      label: "Glasgow square base",
      nearby: ["Kelvingrove", "Mackintosh trail", "Merchant City"],
    },
  },
  "hotel-majapahit-surabaya": {
    area: "Central Surabaya",
    locationVerdict: "In central Surabaya, useful for colonial-history sights, old-city exploring and a short-stay Java food stop.",
    bestFor: ["Heritage stay", "Old Surabaya", "Food stop", "Central base"],
    nearbyAnchors: [
      { name: "Tunjungan area", type: "shopping / city centre", distance: "nearby" },
      { name: "House of Sampoerna", type: "heritage museum", distance: "short taxi ride" },
      { name: "Surabaya old town", type: "historic area", distance: "short taxi ride" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hotel%20Majapahit%20Surabaya%20MGallery%20Collection",
    fallbackMap: {
      label: "Central heritage base",
      nearby: ["Old town", "House of Sampoerna", "Food streets"],
    },
  },
  "phoenix-hotel-yogyakarta": {
    area: "Central Yogyakarta",
    locationVerdict: "In central Yogyakarta, well placed for Malioboro, the Kraton and temple day trips to Borobudur and Prambanan.",
    bestFor: ["Heritage stay", "Malioboro", "Temple day trips", "Culture base"],
    nearbyAnchors: [
      { name: "Malioboro", type: "shopping / street life", distance: "nearby" },
      { name: "Kraton Yogyakarta", type: "royal palace", distance: "short taxi ride" },
      { name: "Prambanan / Borobudur", type: "temple day trips", distance: "day trip" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Phoenix%20Hotel%20Yogyakarta%20Handwritten%20Collection",
    fallbackMap: {
      label: "Central culture base",
      nearby: ["Malioboro", "Kraton", "Temple trips"],
    },
  },
  "majestic-hotel-kuala-lumpur": {
    area: "KL Sentral / heritage railway district",
    locationVerdict: "Near KL Sentral and Kuala Lumpur's heritage core, useful for arrivals, museums and quick movement around the city.",
    bestFor: ["Heritage glamour", "KL Sentral", "Museums", "Easy transfers"],
    nearbyAnchors: [
      { name: "KL Sentral", type: "transport hub", distance: "nearby" },
      { name: "Islamic Arts Museum Malaysia", type: "museum", distance: "nearby" },
      { name: "Merdeka Square", type: "heritage sight", distance: "short taxi ride" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Majestic%20Hotel%20Kuala%20Lumpur%20Autograph%20Collection",
    fallbackMap: {
      label: "Heritage transfer base",
      nearby: ["KL Sentral", "Museums", "Merdeka Square"],
    },
  },
  "raweekanlaya-bangkok": {
    area: "Dusit / old Bangkok",
    locationVerdict: "In a quieter old-Bangkok setting, useful for temples, palaces and a calmer base away from the busiest hotel districts.",
    bestFor: ["Old Bangkok", "Wellness", "Temples", "Garden retreat"],
    nearbyAnchors: [
      { name: "Grand Palace area", type: "historic sight", distance: "short taxi ride" },
      { name: "Dusit district", type: "old Bangkok", distance: "nearby" },
      { name: "Khao San / river area", type: "food / nightlife", distance: "short taxi ride" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Raweekanlaya%20Bangkok%20Wellness%20Cuisine%20Resort",
    fallbackMap: {
      label: "Old Bangkok base",
      nearby: ["Dusit", "Grand Palace", "Chao Phraya"],
    },
  },
  "stamba-hotel-tbilisi": {
    area: "Vera / central Tbilisi",
    locationVerdict: "In one of Tbilisi's most atmospheric central districts, useful for design cafes, Rustaveli Avenue and old-town exploring.",
    bestFor: ["Design hotel", "Cafes", "Central Tbilisi", "Walkable base"],
    nearbyAnchors: [
      { name: "Rustaveli Avenue", type: "central boulevard", distance: "nearby" },
      { name: "Old Tbilisi", type: "historic area", distance: "short taxi or walk" },
      { name: "Rooms / Stamba district cafes", type: "food / design", distance: "nearby" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Stamba%20Hotel%20Tbilisi",
    fallbackMap: {
      label: "Vera design base",
      nearby: ["Rustaveli", "Old Tbilisi", "Cafes"],
    },
  },
  "angkor-aurora-siem-reap": {
    area: "Siem Reap temple base",
    locationVerdict: "Close enough to Angkor for early temple starts while keeping Siem Reap town, Old Market and Pub Street easy by tuk-tuk.",
    bestFor: ["Angkor temples", "Tuk-tuk base", "Old Market", "Khmer food"],
    nearbyAnchors: [
      { name: "Angkor Archaeological Park", type: "temple complex", distance: "early-start day trip" },
      { name: "Old Market", type: "shopping / food", distance: "easy tuk-tuk ride" },
      { name: "Pub Street area", type: "restaurants / nightlife", distance: "easy tuk-tuk ride" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Angkor%20Aurora%20Siem%20Reap%20Cambodia",
    fallbackMap: {
      label: "Temple trip base",
      nearby: ["Angkor", "Old Market", "Pub Street"],
    },
  },
  "royal-surakarta-heritage": {
    area: "Central Solo",
    locationVerdict: "In central Solo, useful for the royal palaces, batik culture and an easy Java heritage stop between bigger cities.",
    bestFor: ["Javanese heritage", "Palaces", "Batik", "Food stop"],
    nearbyAnchors: [
      { name: "Keraton Surakarta", type: "royal palace", distance: "nearby" },
      { name: "Mangkunegaran Palace", type: "heritage sight", distance: "nearby" },
      { name: "Central market area", type: "food / batik", distance: "nearby" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Royal%20Surakarta%20Heritage%20Handwritten%20Collection%20Solo",
    fallbackMap: {
      label: "Solo heritage base",
      nearby: ["Keraton", "Mangkunegaran", "Batik markets"],
    },
  },
  "pleiada-boutique-hotel-iasi": {
    area: "Iasi city access",
    locationVerdict: "A practical Iasi base for reaching the Palace of Culture, university quarter and the city's walkable historic core.",
    bestFor: ["Palace of Culture", "Historic core", "Spa stay", "Romanian food"],
    nearbyAnchors: [
      { name: "Palace of Culture", type: "museum complex", distance: "short taxi ride" },
      { name: "Metropolitan Cathedral", type: "cultural sight", distance: "short taxi ride" },
      { name: "University quarter", type: "historic district", distance: "short taxi ride" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Pleiada%20Boutique%20Hotel%20and%20Spa%20Iasi%20Romania",
    fallbackMap: {
      label: "Iasi culture base",
      nearby: ["Palace of Culture", "University quarter", "Cathedral"],
    },
  },
  "steigenberger-resort-achti-luxor": {
    area: "Nile-side Luxor",
    locationVerdict: "On the Nile in Luxor, useful for river views, East Bank temples and West Bank antiquities by ferry or road.",
    bestFor: ["Nile views", "Temples", "West Bank sights", "Low-season value"],
    nearbyAnchors: [
      { name: "Luxor Temple", type: "ancient temple", distance: "short taxi ride" },
      { name: "Karnak Temple", type: "ancient temple", distance: "short taxi ride" },
      { name: "Valley of the Kings", type: "West Bank sight", distance: "short ferry or taxi trip" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Steigenberger%20Resort%20Achti%20Luxor",
    fallbackMap: {
      label: "Nile-side base",
      nearby: ["Luxor Temple", "Karnak", "West Bank"],
    },
  },
  "silk-path-grand-hue": {
    area: "Central Hue",
    locationVerdict: "A central Hue base for the Imperial City, Perfume River and royal-tomb day trips without resort-style isolation.",
    bestFor: ["Imperial City", "Perfume River", "Royal tombs", "Hue food"],
    nearbyAnchors: [
      { name: "Imperial City", type: "citadel / heritage", distance: "nearby" },
      { name: "Perfume River", type: "riverfront", distance: "nearby" },
      { name: "Thien Mu Pagoda", type: "temple", distance: "boat or bike trip" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Silk%20Path%20Grand%20Hue%20Hotel%20and%20Spa",
    fallbackMap: {
      label: "Hue heritage base",
      nearby: ["Imperial City", "Perfume River", "Royal tombs"],
    },
  },
  "hermitage-jakarta": {
    area: "Menteng",
    locationVerdict: "In Menteng, one of Jakarta's most attractive central districts and a practical base for museums, Monas and Old Batavia by taxi.",
    bestFor: ["Heritage stay", "Museums", "Menteng", "Jakarta food"],
    nearbyAnchors: [
      { name: "National Monument", type: "sight", distance: "short taxi ride" },
      { name: "National Museum", type: "museum", distance: "short taxi ride" },
      { name: "Kota Tua", type: "old town", distance: "half-day taxi trip" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Hermitage%20Jakarta%20Tribute%20Portfolio%20Hotel",
    fallbackMap: {
      label: "Menteng hotel base",
      nearby: ["Monas", "National Museum", "Kota Tua"],
    },
  },
  "hyatt-regency-tashkent": {
    area: "Central Tashkent",
    locationVerdict: "In central Tashkent, useful for metro-hopping, Chorsu Bazaar, Islamic sights and onward rail links to Samarkand.",
    bestFor: ["Central base", "Metro mosaics", "Chorsu Bazaar", "Samarkand link"],
    nearbyAnchors: [
      { name: "Tashkent Metro", type: "architecture / transit", distance: "nearby" },
      { name: "Chorsu Bazaar", type: "market", distance: "short taxi or metro ride" },
      { name: "Hazrati Imam complex", type: "Islamic sight", distance: "short taxi ride" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hyatt%20Regency%20Tashkent",
    fallbackMap: {
      label: "Central Tashkent base",
      nearby: ["Metro", "Chorsu", "Hazrati Imam"],
    },
  },
  "grand-hotel-yerevan": {
    area: "Republic Square / central Yerevan",
    locationVerdict: "Beside Yerevan's central square, useful for the Cascade, museums, cafes and easy city walking.",
    bestFor: ["Republic Square", "Walkable base", "Museums", "Armenian food"],
    nearbyAnchors: [
      { name: "Republic Square", type: "central square", distance: "nearby" },
      { name: "Cascade complex", type: "art / viewpoint", distance: "about 10 min on foot" },
      { name: "History Museum of Armenia", type: "museum", distance: "nearby" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Grand%20Hotel%20Yerevan%20Armenia",
    fallbackMap: {
      label: "Republic Square base",
      nearby: ["Cascade", "Museums", "Cafes"],
    },
  },
  "sofitel-marrakech": {
    area: "Hivernage / Medina edge",
    locationVerdict: "Between Hivernage and the Medina, useful for pairing resort-style comfort with the old city's main sights.",
    bestFor: ["Medina access", "Hivernage", "Sofitel comfort", "Souk food"],
    nearbyAnchors: [
      { name: "Koutoubia Mosque", type: "landmark", distance: "walk or short ride" },
      { name: "Medina / Jemaa el-Fnaa", type: "old city", distance: "walk or short ride" },
      { name: "Jardin Majorelle", type: "garden / museum", distance: "short taxi ride" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sofitel%20Marrakech%20Palais%20Imperial%20and%20Spa",
    fallbackMap: {
      label: "Medina-edge base",
      nearby: ["Koutoubia", "Medina", "Majorelle"],
    },
  },
  "boton-blue-nha-trang": {
    area: "Nha Trang beach area",
    locationVerdict: "A Nha Trang beach base that keeps the seafront, Cham heritage sights and island boat trips easy to plan.",
    bestFor: ["Beach base", "Seafood", "Cham towers", "Island trips"],
    nearbyAnchors: [
      { name: "Nha Trang beach", type: "beach", distance: "nearby" },
      { name: "Po Nagar Cham Towers", type: "heritage sight", distance: "short taxi ride" },
      { name: "Hon Mun / Hon Tam", type: "island trips", distance: "day excursion" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Boton%20Blue%20Hotel%20and%20Spa%20Nha%20Trang",
    fallbackMap: {
      label: "Beach city base",
      nearby: ["Beach", "Po Nagar", "Islands"],
    },
  },
  "im-hotel-makati": {
    area: "Makati / Poblacion",
    locationVerdict: "In Makati, useful for restaurants, Poblacion nightlife, Ayala shopping and business-district convenience.",
    bestFor: ["Makati dining", "Poblacion", "Business base", "Shopping"],
    nearbyAnchors: [
      { name: "Poblacion", type: "dining / nightlife", distance: "nearby" },
      { name: "Ayala Triangle Gardens", type: "urban park", distance: "short taxi ride" },
      { name: "Intramuros", type: "old city", distance: "taxi trip" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=I%27M%20Hotel%20Makati%20Philippines",
    fallbackMap: {
      label: "Makati city base",
      nearby: ["Poblacion", "Ayala", "Intramuros"],
    },
  },
  "malak-regency-sarajevo": {
    area: "Ilidza / Sarajevo access",
    locationVerdict: "A quieter Sarajevo base with access to the old bazaar quarter, War Tunnel Museum and mountain-edge scenery by taxi.",
    bestFor: ["Quiet base", "Old Sarajevo", "War Tunnel", "Bosnian food"],
    nearbyAnchors: [
      { name: "Bascarsija", type: "Ottoman bazaar", distance: "taxi ride" },
      { name: "War Tunnel Museum", type: "history museum", distance: "short taxi ride" },
      { name: "Latin Bridge", type: "historic sight", distance: "taxi ride" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Malak%20Regency%20Hotel%20Sarajevo",
    fallbackMap: {
      label: "Sarajevo access base",
      nearby: ["Bascarsija", "War Tunnel", "Latin Bridge"],
    },
  },
  "bar-peepal-resort-pokhara": {
    area: "Lakeside / hillside above Fewa Lake",
    locationVerdict: "On the hillside above Pokhara Lakeside, close enough for Fewa Lake but high enough for Himalayan and lake views.",
    bestFor: ["Himalayan views", "Fewa Lake", "Trekking base", "Slow recovery stay"],
    nearbyAnchors: [
      { name: "Pokhara Lakeside", type: "lakefront / restaurants", distance: "about 17 min on foot" },
      { name: "Fewa Lake", type: "lake / boating", distance: "about 17 min on foot" },
      { name: "World Peace Pagoda", type: "viewpoint / cultural sight", distance: "short taxi/boat-and-walk trip" },
    ],
    address: "Mani Marg, Street No. 28, Lakeside, Pokhara 33700, Nepal",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Bar%20Peepal%20Resort%20Pokhara%20Nepal",
    fallbackMap: {
      label: "Hillside hotel base",
      nearby: ["Fewa Lake", "Pokhara Lakeside", "Annapurna views"],
    },
  },
  "auberge-saint-antoine-quebec-city": {
    area: "Old Port / Old Quebec",
    locationVerdict: "In Quebec City's Old Port, useful for Le Petit-Champlain, the Chateau Frontenac and atmospheric old-city walking.",
    bestFor: ["Old Quebec", "Heritage stay", "Winter city break", "Quebecois food"],
    nearbyAnchors: [
      { name: "Le Petit-Champlain", type: "old town / boutiques", distance: "immediately nearby" },
      { name: "Chateau Frontenac", type: "landmark hotel", distance: "about 5 min on foot" },
      { name: "Montmorency Falls", type: "waterfall / viewpoint", distance: "short drive" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Auberge%20Saint-Antoine%20Quebec%20City",
    fallbackMap: {
      label: "Old Quebec base",
      nearby: ["Le Petit-Champlain", "Chateau Frontenac", "Montmorency Falls"],
    },
  },
  "brown-hotel-louisville": {
    area: "Downtown Louisville / Theater District",
    locationVerdict: "In downtown Louisville's Theater District, useful for Whiskey Row, bourbon bars, the Muhammad Ali Center and Derby heritage by taxi.",
    bestFor: ["Bourbon trail", "Grand hotel", "Derby heritage", "Downtown base"],
    nearbyAnchors: [
      { name: "Whiskey Row", type: "bourbon bars / distilleries", distance: "walk or short ride" },
      { name: "Muhammad Ali Center", type: "sports / culture museum", distance: "about 10 min on foot" },
      { name: "Churchill Downs", type: "racecourse / museum", distance: "short drive" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Brown%20Hotel%20Louisville%20Kentucky",
    fallbackMap: {
      label: "Downtown bourbon base",
      nearby: ["Whiskey Row", "Muhammad Ali Center", "Churchill Downs"],
    },
  },
  "pfister-hotel-milwaukee": {
    area: "Downtown Milwaukee / Lake Michigan access",
    locationVerdict: "In downtown Milwaukee, useful for Lake Michigan, the Milwaukee Art Museum, the Third Ward and city-centre food stops.",
    bestFor: ["Lake Michigan", "Art hotel", "Third Ward", "Victorian heritage"],
    nearbyAnchors: [
      { name: "Milwaukee Art Museum", type: "architecture / museum", distance: "about 10 min on foot" },
      { name: "Milwaukee Public Market", type: "food hall", distance: "nearby" },
      { name: "Harley-Davidson Museum", type: "design / transport museum", distance: "short cab ride" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Pfister%20Hotel%20Milwaukee",
    fallbackMap: {
      label: "Downtown lake base",
      nearby: ["Art Museum", "Public Market", "Harley-Davidson Museum"],
    },
  },
  "venetian-resort-las-vegas": {
    area: "Las Vegas Strip",
    locationVerdict: "On the central Las Vegas Strip, useful for restaurants, shows, casino-hopping and spa time without needing a car.",
    bestFor: ["The Strip", "Suite stay", "Shows", "Spa trip"],
    nearbyAnchors: [
      { name: "Las Vegas Strip", type: "entertainment corridor", distance: "at the door" },
      { name: "Canyon Ranch Spa Club", type: "hotel spa", distance: "on property" },
      { name: "Neon Museum", type: "design / photo stop", distance: "rideshare trip" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Venetian%20Resort%20Las%20Vegas",
    fallbackMap: {
      label: "Strip resort base",
      nearby: ["The Strip", "Canyon Ranch Spa", "Neon Museum"],
    },
  },
  "mayo-hotel-tulsa": {
    area: "Downtown Tulsa / Art Deco district",
    locationVerdict: "In downtown Tulsa's Art Deco core, useful for architecture walks, rooftop drinks, Philbrook and the Gathering Place by car.",
    bestFor: ["Art Deco", "Downtown Tulsa", "Rooftop bar", "Architecture walk"],
    nearbyAnchors: [
      { name: "Art Deco walking circuit", type: "architecture", distance: "surrounding blocks" },
      { name: "Philbrook Museum of Art", type: "museum / gardens", distance: "short drive" },
      { name: "The Gathering Place", type: "riverfront park", distance: "short drive" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Mayo%20Hotel%20Tulsa",
    fallbackMap: {
      label: "Downtown Deco base",
      nearby: ["Art Deco district", "Philbrook", "Gathering Place"],
    },
  },
  "central-station-memphis": {
    area: "South Main Arts District",
    locationVerdict: "In Memphis's South Main Arts District, useful for music, restaurants, galleries and rideshare access to the city's major soul and civil-rights sights.",
    bestFor: ["Music trip", "South Main", "Train station hotel", "Memphis history"],
    nearbyAnchors: [
      { name: "National Civil Rights Museum", type: "history museum", distance: "nearby" },
      { name: "Stax Museum of American Soul Music", type: "music museum", distance: "short rideshare" },
      { name: "Sun Studio", type: "recording studio / tour", distance: "rideshare trip" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Central%20Station%20Memphis%20Curio%20Collection%20by%20Hilton",
    fallbackMap: {
      label: "South Main music base",
      nearby: ["Civil Rights Museum", "Stax Museum", "Sun Studio"],
    },
  },
  "the-nines-portland": {
    area: "Downtown Portland / Pioneer Square",
    locationVerdict: "Above Pioneer Place in downtown Portland, useful for Powell's, the Portland Art Museum, restaurants and easy city walking.",
    bestFor: ["Downtown Portland", "Design hotel", "Bookshops", "Pacific Northwest food"],
    nearbyAnchors: [
      { name: "Powell's City of Books", type: "bookshop / landmark", distance: "about 10 min on foot" },
      { name: "Portland Art Museum", type: "museum", distance: "about 15 min on foot" },
      { name: "Portland Japanese Garden", type: "garden / viewpoint", distance: "rideshare trip" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The%20Nines%20a%20Luxury%20Collection%20Hotel%20Portland",
    fallbackMap: {
      label: "Pioneer Square base",
      nearby: ["Powell's", "Art Museum", "Japanese Garden"],
    },
  },
  "21c-museum-hotel-louisville": {
    area: "Downtown Louisville / Museum Row",
    locationVerdict: "On Louisville's Museum Row, useful for the Slugger Museum, Whiskey Row, NuLu and bourbon-country city exploring.",
    bestFor: ["Art hotel", "Museum Row", "Bourbon bars", "NuLu dining"],
    nearbyAnchors: [
      { name: "Louisville Slugger Museum", type: "museum / factory", distance: "about 5 min on foot" },
      { name: "Whiskey Row", type: "bourbon bars", distance: "walkable" },
      { name: "NuLu", type: "food / boutiques", distance: "about 10 min on foot" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=21c%20Museum%20Hotel%20Louisville",
    fallbackMap: {
      label: "Museum Row base",
      nearby: ["Slugger Museum", "Whiskey Row", "NuLu"],
    },
  },
  "kimpton-cottonwood-omaha": {
    area: "Blackstone District",
    locationVerdict: "In Omaha's Blackstone District, useful for independent restaurants and bars, with the Old Market, Joslyn and zoo reached by taxi or rideshare.",
    bestFor: ["Blackstone District", "Heritage stay", "Omaha food", "Midwest city break"],
    nearbyAnchors: [
      { name: "Blackstone District", type: "restaurants / bars", distance: "at the door" },
      { name: "Joslyn Art Museum", type: "art museum", distance: "short drive" },
      { name: "Henry Doorly Zoo and Aquarium", type: "zoo / aquarium", distance: "rideshare trip" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kimpton%20Cottonwood%20Hotel%20Omaha",
    fallbackMap: {
      label: "Blackstone base",
      nearby: ["Blackstone District", "Joslyn", "Henry Doorly Zoo"],
    },
  },
  "perry-lane-hotel-savannah": {
    area: "Savannah Historic District",
    locationVerdict: "Inside Savannah's Historic District, useful for Forsyth Park, SCAD, house museums, rooftop drinks and walkable Southern city scenery.",
    bestFor: ["Historic District", "Rooftop pool", "Photogenic streets", "Savannah food"],
    nearbyAnchors: [
      { name: "Forsyth Park", type: "park / photography", distance: "about 5 min on foot" },
      { name: "SCAD Museum of Art", type: "art museum", distance: "about 10 min on foot" },
      { name: "Mercer Williams House", type: "house museum", distance: "about 10 min on foot" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Perry%20Lane%20Hotel%20a%20Luxury%20Collection%20Hotel%20Savannah",
    fallbackMap: {
      label: "Historic District base",
      nearby: ["Forsyth Park", "SCAD Museum", "Mercer Williams House"],
    },
  },
  "real-marina-olhao": {
    area: "Olhao marina / Ria Formosa",
    locationVerdict: "On Olhao's marina, useful for Ria Formosa boat trips, seafood markets and barrier-island beach days.",
    bestFor: ["Ria Formosa", "Seafood", "Island ferries", "Algarve value"],
    nearbyAnchors: [
      { name: "Ria Formosa", type: "lagoon / nature park", distance: "at the marina" },
      { name: "Olhao market", type: "seafood / local food", distance: "nearby" },
      { name: "Culatra / Armona islands", type: "barrier islands", distance: "ferry trip" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Real%20Marina%20Hotel%20and%20Spa%20Olhao%20Portugal",
    fallbackMap: {
      label: "Marina hotel base",
      nearby: ["Ria Formosa", "Olhao market", "Island ferries"],
    },
  },
  "graffit-gallery-varna": {
    area: "Varna city centre",
    locationVerdict: "In Varna's city centre, useful for the Sea Garden, Roman Baths, museums and Black Sea beach time.",
    bestFor: ["City centre", "Sea Garden", "Roman Baths", "Beach access"],
    nearbyAnchors: [
      { name: "Sea Garden", type: "park / seafront", distance: "nearby" },
      { name: "Roman Baths", type: "heritage sight", distance: "nearby" },
      { name: "Varna beaches", type: "Black Sea", distance: "nearby" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Graffit%20Gallery%20Design%20Hotel%20Varna",
    fallbackMap: {
      label: "Varna centre base",
      nearby: ["Sea Garden", "Roman Baths", "Beach"],
    },
  },
  "millennium-downtown-abu-dhabi": {
    area: "Downtown Abu Dhabi",
    locationVerdict: "In downtown Abu Dhabi, useful for the Corniche, city-centre dining and taxi access to the Grand Mosque and Louvre Abu Dhabi.",
    bestFor: ["Downtown base", "Corniche", "Grand Mosque", "Business hotel value"],
    nearbyAnchors: [
      { name: "Abu Dhabi Corniche", type: "waterfront", distance: "nearby" },
      { name: "Sheikh Zayed Grand Mosque", type: "landmark", distance: "taxi trip" },
      { name: "Louvre Abu Dhabi", type: "museum", distance: "short drive" },
    ],
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Millennium%20Downtown%20Abu%20Dhabi",
    fallbackMap: {
      label: "Downtown Abu Dhabi base",
      nearby: ["Corniche", "Grand Mosque", "Louvre Abu Dhabi"],
    },
  },
};
