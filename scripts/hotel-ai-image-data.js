export const negativePrompt =
  'No collage, no split screen, no fantasy architecture, no cartoon style, no illustration, no exaggerated neon colours, no warped columns, no distorted balconies, no impossible windows, no unreadable large text, no fake hotel brand logo, no crowds, no people dominating the frame, no low-resolution look, no fisheye distortion, no messy clutter, no over-saturated HDR, no unrealistic reflections, no duplicated architectural elements, no direct copy of any reference photo.';

const baseDusk =
  'Create a fully AI-generated, original, realistic luxury hotel photograph in a premium travel magazine style. 16:10 landscape composition with generous vertical space, believable architectural geometry, polished dusk lighting, warm interior glow, refined travel atmosphere, no copied reference-photo composition, no readable fake signage.';

const baseDaylight =
  'Create a fully AI-generated, original, realistic daylight travel-photography hotel image. 16:10 landscape composition with natural colours, true-to-life materials, crisp architecture, premium but believable booking-site realism, no copied reference-photo composition, no readable fake signage.';

export const hotels = [
  {
    hotel: 'Angkor Aurora',
    city: 'Siem Reap',
    country: 'Cambodia',
    slug: 'angkor-aurora-siem-reap',
    contentFile: 'angkor-aurora-siem-reap.md',
    sources: ['https://angkoraurora.com/', 'https://angkoraurora.com/rooms/'],
    features: {
      architecture: 'small modern Khmer-influenced boutique hotel, low-rise, contemporary tropical retreat rather than grand resort',
      entrance: 'modest Wat Bo district street frontage, clean cream walls, timber and dark metal accents',
      pool: 'guest rooms close to a quiet pool, balconies overlooking pool on upper levels',
      colours: 'cream plaster, warm timber, charcoal trim, blue pool water, tropical planting',
      setting: 'Wat Bo area of Siem Reap, urban boutique-hotel setting with Angkor travel mood',
      details: 'keep scale intimate and believable; use Khmer hospitality cues without turning it into a temple hotel',
    },
    directions: {
      dusk: 'pool courtyard with glowing rooms and tropical plants, quiet boutique arrival mood',
      daylight: 'low-rise facade and pool-facing balconies in clean daylight',
    },
  },
  {
    hotel: 'Malak Regency Hotel',
    city: 'Sarajevo',
    country: 'Bosnia and Herzegovina',
    slug: 'malak-regency-sarajevo',
    contentFile: 'malak-regency-sarajevo.md',
    sources: ['https://www.malakregency.com/en/malak-regency-hotel'],
    features: {
      architecture: 'seven-floor luxury hotel in Ilidza with contemporary Balkan and subtle oriental styling',
      entrance: 'formal modern facade and entrance, polished but not ultra-luxury',
      pool: 'indoor wellness pool; garden cafe by the Zelenica river is a useful exterior cue',
      colours: 'light stone, glass, warm interior light, dark rooflines, mountain greenery',
      setting: 'green oasis of Ilidza near the Great Alley and Sarajevo mountain backdrop',
      details: 'preserve urban-resort balance and avoid making it a palace',
    },
    directions: {
      dusk: 'front entrance with warm windows, garden edge, and distant Sarajevo hills',
      daylight: 'hotel facade from a garden approach with leafy Ilidza context',
    },
  },
  {
    hotel: 'Melia Yangon',
    city: 'Yangon',
    country: 'Myanmar',
    slug: 'melia-yangon-yangon',
    sources: ['https://www.hrs.com/en/hotel/774972', 'https://www.tripadvisor.com/Hotel_Feature-g294191-d10158206-zft6217-Melia_Yangon.html'],
    features: {
      architecture: 'large modern five-star city hotel attached to Myanmar Plaza, tall glass-and-concrete urban form',
      entrance: 'polished business-hotel arrival beside a shopping complex',
      pool: 'outdoor pool and rooms with views toward Inya Lake',
      colours: 'glass, pale stone, beige interiors, blue pool water, tropical urban greenery',
      setting: 'Kaba Aye Pagoda Road between downtown and airport, near Inya Lake and offices',
      details: 'credible urban luxury, not a resort; hint at lake views if possible',
    },
    directions: {
      dusk: 'tower facade and pool terrace glowing above the city with Inya Lake atmosphere',
      daylight: 'modern hotel exterior and plaza approach in natural tropical daylight',
    },
  },
  {
    hotel: 'The Raweekanlaya Bangkok Wellness Cuisine Resort',
    city: 'Bangkok',
    country: 'Thailand',
    slug: 'raweekanlaya-bangkok',
    contentFile: 'raweekanlaya-bangkok.md',
    sources: ['https://www.raweekanlaya.com/', 'https://www.imperialhotels.com/find-us/our-hotels/the-raweekanlaya-bangkok-wellness-cuisine-resort'],
    features: {
      architecture: 'heritage Old-Siam residence from the late 1800s with contemporary boutique resort touches',
      entrance: 'low heritage buildings on Krung Kasem Road rather than a high-rise frontage',
      pool: 'rectangular outdoor pool and pool bar wrapped in lush greenery',
      colours: 'white and cream walls, dark timber, clay roof tones, emerald garden, blue pool',
      setting: 'Phra Nakhon garden retreat close to Thewet Market and old Bangkok',
      details: 'preserve the 120-year-old banyan tree and intimate 38-room garden-resort scale',
    },
    directions: {
      dusk: 'pool garden with heritage building, warm lantern light, banyan canopy',
      daylight: 'Old-Siam house facade framed by palms and tropical garden',
    },
  },
  {
    hotel: 'Hotel Majapahit Surabaya - MGallery',
    city: 'Surabaya',
    country: 'Indonesia',
    slug: 'hotel-majapahit-surabaya',
    contentFile: 'hotel-majapahit-surabaya.md',
    sources: ['https://mgallery.accor.com/en/hotels/B066.html'],
    features: {
      architecture: 'iconic 1910 colonial heritage landmark, elegant low-rise white facade, arcades and Art Deco interiors',
      entrance: 'grand but restrained colonial frontage on Jalan Tunjungan',
      pool: 'aromatic gardens and courtyards are central; pool should feel tucked into the heritage grounds',
      colours: 'white plaster, black trim, terracotta roof, green lawns, mature palms, warm brass lighting',
      setting: 'historic central Surabaya, romantic heritage hotel atmosphere',
      details: 'this one can lean strongly into atmospheric heritage luxury while staying realistic',
    },
    directions: {
      dusk: 'colonial arcades and garden path with warm lights after sunset',
      daylight: 'white heritage facade and manicured garden courtyard in clear daylight',
    },
  },
  {
    hotel: 'The Phoenix Hotel Yogyakarta - Handwritten Collection',
    city: 'Yogyakarta',
    country: 'Indonesia',
    slug: 'phoenix-hotel-yogyakarta',
    contentFile: 'phoenix-hotel-yogyakarta.md',
    sources: ['https://all.accor.com/hotel/5451/index.id.shtml', 'https://www.expedia.com/Yogyakarta-Hotels-The-Phoenix-Hotel-Yogyakarta-MGallery-Collection.h1077271.Hotel-Information'],
    features: {
      architecture: 'boutique heritage hotel with colonial-era facade, Javanese decorative details, balconies and shaded arcades',
      entrance: 'historic arrival on Jalan Jend. Sudirman near Tugu Yogyakarta',
      pool: 'serene courtyard swimming pool surrounded by heritage wings and balconies',
      colours: 'cream plaster, dark timber, patterned tile, green courtyard planting, turquoise pool',
      setting: 'central Yogyakarta heritage district close to Malioboro and Tugu',
      details: 'romantic old-world atmosphere without exaggerating into a palace',
    },
    directions: {
      dusk: 'courtyard pool with glowing colonial balconies and Javanese details',
      daylight: 'front facade or courtyard arcade in realistic travel-photo daylight',
    },
  },
  {
    hotel: 'The Royal Surakarta Heritage - Handwritten Collection',
    city: 'Solo',
    country: 'Indonesia',
    slug: 'royal-surakarta-heritage-solo',
    contentFile: 'royal-surakarta-heritage.md',
    sources: ['https://all.accor.com/hotel/9239/index.en.shtml'],
    features: {
      architecture: 'urban five-star hotel with Javanese cultural interiors and batik motif nuances',
      entrance: 'city-hotel facade on Jl Slamet Riyadi with ceremonial Javanese details',
      pool: 'interior and leisure facilities are secondary; emphasize cultural lobby/entrance cues',
      colours: 'cream stone, dark timber, gold accents, batik pattern inspiration, warm interior lighting',
      setting: 'central Solo, near royal heritage sites, polished but compact city context',
      details: 'heritage design-forward city hotel, not a sprawling resort',
    },
    directions: {
      dusk: 'entrance with warm Javanese-pattern lighting and dignified city-hotel facade',
      daylight: 'street-facing facade with restrained batik-inspired architectural accents',
    },
  },
  {
    hotel: 'Pleiada Boutique Hotel & Spa',
    city: 'Iasi',
    country: 'Romania',
    slug: 'pleiada-boutique-hotel-iasi',
    contentFile: 'pleiada-boutique-hotel-iasi.md',
    sources: ['https://www.hotelpleiada.ro/en/spa-iasi-romania-pleiada-boutique-hotel/', 'https://www.hotelpleiada.ro/en/spa-iasi-romania-pleiada-boutique-hotel/facilities/'],
    features: {
      architecture: 'small polished boutique spa hotel near Bucium Road, more modern local luxury than grand palace',
      entrance: 'neat contemporary exterior with understated five-star arrival',
      pool: 'indoor spa pool with chromotherapy, hydromassage, water curtain and lounge zone',
      colours: 'cream and taupe exterior, dark glazing, warm spa light, calm blue pool tones',
      setting: 'near Iasi airport and Bucium area, suburban city-edge context',
      details: 'premium spa mood should feel believable and compact',
    },
    directions: {
      dusk: 'warm exterior entrance and spa glow through windows, refined boutique mood',
      daylight: 'clean boutique facade with landscaped arrival and Romanian city-edge context',
    },
  },
  {
    hotel: 'Boton Blue Hotel & Spa',
    city: 'Nha Trang',
    country: 'Vietnam',
    slug: 'boton-blue-hotel-spa-nha-trang',
    contentFile: 'boton-blue-nha-trang.md',
    sources: ['https://hotel.botonblue.com/photos.html', 'https://botonbluehotels.com/en'],
    features: {
      architecture: '27-story modern ocean-view tower on Pham Van Dong beach',
      entrance: 'sleek high-rise hotel frontage with coastal-city feel',
      pool: '7th-floor infinity pool with transparent glass design and sea-view atmosphere',
      colours: 'blue glass, pale concrete, coastal sky, turquoise pool, restrained warm interiors',
      setting: 'north Nha Trang near Pham Van Dong beach, sea and urban skyline context',
      details: 'make it a scenic city-beach hotel, not a private island resort',
    },
    directions: {
      dusk: 'glassy tower and elevated pool terrace with sea-horizon dusk light',
      daylight: 'modern tower facade with beach-road context and realistic coastal sky',
    },
  },
  {
    hotel: 'Grand Mercure Medan Angkasa',
    city: 'Medan',
    country: 'Indonesia',
    slug: 'grand-mercure-medan-angkasa',
    sources: ['https://all.accor.com/hotel/9054/index.en.shtml'],
    features: {
      architecture: 'large upper-upscale urban hotel in Medan business district, practical full-service scale',
      entrance: 'substantial city-hotel entrance on Jl Sutomo, not boutique or resort-like',
      pool: 'open-space cafe beside swimming pool with verdant nuance',
      colours: 'light concrete, glass, warm lobby light, green poolside plants, North Sumatra cultural hints',
      setting: 'business and shopping district near Medan historical attractions',
      details: 'premium but believable local five-star city hotel',
    },
    directions: {
      dusk: 'front entrance and poolside cafe lighting with urban Medan backdrop',
      daylight: 'large city-hotel facade and restrained poolside greenery',
    },
  },
  {
    hotel: 'NH Collection Bogota WTC Royal',
    city: 'Bogota',
    country: 'Colombia',
    slug: 'nh-collection-bogota-wtc-royal',
    sources: ['https://www.nh-collection.com/en/hotel/nh-collection-bogota-wtc-royal'],
    features: {
      architecture: 'polished urban business hotel adjacent to the World Trade Center in Chico',
      entrance: 'corporate city-hotel facade near Carrera 8A and 99th Street',
      pool: 'no resort pool emphasis; top-floor roof terrace and mountain/savannah views matter more',
      colours: 'glass, grey stone, white walls, muted corporate interiors, green Andean hills in distance',
      setting: 'Bogota Chico business district near Parque 93 and restaurants',
      details: 'must read as business hotel, not tropical resort',
    },
    directions: {
      dusk: 'urban facade with warm windows, roof-terrace hint, Andean twilight',
      daylight: 'street-level business-hotel entrance with Bogota mountain context',
    },
  },
  {
    hotel: "I'M Hotel",
    city: 'Makati',
    country: 'Philippines',
    slug: 'im-hotel-makati',
    contentFile: 'im-hotel-makati.md',
    sources: ['https://imhotel.com/', 'https://imhotel.com/about-us/'],
    features: {
      architecture: 'modern urban high-rise in Poblacion/Makati with interactive contemporary architecture',
      entrance: 'city tower arrival on Makati Avenue, polished but lively urban context',
      pool: 'distinctive acrylic-bottomed infinity pool visible from lobby, rooftop Antidote bar with skyline views',
      colours: 'glass, concrete, warm nightlife lighting, blue pool, Makati skyline',
      setting: 'dense Makati CBD/Poblacion edge, city nightlife and spa-hotel mood',
      details: 'urban spa hotel; avoid beach resort cues',
    },
    directions: {
      dusk: 'tower facade and glowing acrylic-bottom pool with Makati skyline',
      daylight: 'street-level modern facade or elevated pool deck in bright city daylight',
    },
  },
  {
    hotel: 'Novotel Ahmedabad',
    city: 'Ahmedabad',
    country: 'India',
    slug: 'novotel-ahmedabad-ahmedabad',
    sources: ['https://all.accor.com/hotel/8173/index.en.shtml'],
    features: {
      architecture: 'contemporary business hotel on SG Highway with natural-light interiors',
      entrance: 'modern Accor city-hotel arrival near ISKCON Cross Road',
      pool: 'open-air swimming pool, fitness and spa amenities',
      colours: 'white and grey modern facade, glass, warm lobby light, Indian urban greenery',
      setting: 'Ahmedabad SG Highway business and entertainment corridor',
      details: 'sensible premium city hotel, not palace or resort',
    },
    directions: {
      dusk: 'modern facade with warm windows and SG Highway city ambience',
      daylight: 'clean contemporary exterior and open-air pool in realistic Indian city light',
    },
  },
  {
    hotel: 'Steigenberger Resort Achti',
    city: 'Luxor',
    country: 'Egypt',
    slug: 'steigenberger-resort-achti-luxor',
    contentFile: 'steigenberger-resort-achti-luxor.md',
    sources: ['https://achti.com.eg/en/%D8%A7%D9%84%D9%81%D9%86%D8%A7%D8%AF%D9%82/steigenberger-resort-achti/', 'https://www.hotel.com.au/luxor/steigenberger-resort-achti.htm'],
    features: {
      architecture: 'Nile-side resort with low resort buildings and garden bungalows',
      entrance: 'resort arrival should be secondary to the Nile and garden setting',
      pool: 'multiple outdoor pools, including Nile-side pool and garden pool areas',
      colours: 'sand-coloured walls, palms, Nile blue, lush green gardens, warm Egyptian dusk',
      setting: 'eight-acre tropical gardens directly on Luxor east bank of the Nile',
      details: 'include palms, river, possibly West Bank silhouette; not a desert fantasy palace',
    },
    directions: {
      dusk: 'Nile-side pool and palms with violet sunset over the river',
      daylight: 'garden bungalow or pool terrace with Nile view and realistic Luxor light',
    },
  },
  {
    hotel: 'Silk Path Hotel',
    city: 'Hue',
    country: 'Vietnam',
    slug: 'silk-path-hotel-hue',
    contentFile: 'silk-path-grand-hue.md',
    sources: ['https://silkpathhotel.com/galleryhue/', 'https://www.tripadvisor.com/Hotel_Feature-g293926-d653958-zft6217-Silk_Path_Grand_Hue_Hotel_Spa.html'],
    features: {
      architecture: 'majestic boutique hotel with refined Indochine-inspired exterior and art-filled interiors',
      entrance: 'elegant city hotel on Le Loi Street, polished and stately',
      pool: 'courtyard swimming pool surrounded by beautiful trees, flowering shrubs and tasteful paving',
      colours: 'cream facade, dark shutters, green courtyard, blue pool, warm lantern lighting',
      setting: 'central Hue near the Perfume River and Imperial City',
      details: 'keep calm, refined Hue atmosphere and courtyard garden as hero',
    },
    directions: {
      dusk: 'courtyard pool with flowering shrubs and softly lit Indochine facade',
      daylight: 'front facade or courtyard garden in natural Hue daylight',
    },
  },
  {
    hotel: 'Mandarin Colombo',
    city: 'Colombo',
    country: 'Sri Lanka',
    slug: 'mandarin-colombo-colombo',
    sources: ['https://www.expedia.com/Colombo-Hotels-Mandarina-Colombo.h17399512.Hotel-Information', 'https://sg.trip.com/hotels/colombo-hotel-detail-6633828/mandarina-colombo/photo.html'],
    features: {
      architecture: 'modern Colombo city hotel, likely Mandarina Colombo, with contemporary Galle Road frontage',
      entrance: 'urban front-of-property in Colombo 03',
      pool: 'rooftop outdoor pool and restaurant with city/ocean view',
      colours: 'white and grey facade, glass, rooftop blue pool, tropical city light, Indian Ocean hints',
      setting: 'heart of Colombo near Marino Mall, University of Colombo and Galle Road',
      details: 'name/source mismatch needs review; keep as modern urban Colombo hotel, not colonial beachfront',
    },
    directions: {
      dusk: 'rooftop pool and Colombo skyline with warm restaurant glow',
      daylight: 'front-of-property or rooftop pool with realistic Galle Road city context',
    },
    uncertainty: 'The brief says Mandarin Colombo, while public sources strongly indicate Mandarina Colombo. Treat visual match as manual-review-sensitive.',
  },
  {
    hotel: 'Millennium Downtown',
    city: 'Abu Dhabi',
    country: 'UAE',
    slug: 'millennium-downtown-abu-dhabi',
    contentFile: 'millennium-downtown-abu-dhabi.md',
    sources: ['https://www.millenniumhotels.com/en/abu-dhabi/millennium-downtown-abu-dhabi/'],
    features: {
      architecture: 'central Abu Dhabi urban hotel on Hamdan Bin Mohammed Street, business-travel character',
      entrance: 'city-centre tower entrance, practical polished Gulf hotel',
      pool: 'rooftop terrace pool on top floor, exclusive guest oasis but compact',
      colours: 'cream stone, glass, warm Gulf sunset, blue rooftop pool, city towers',
      setting: 'Al Danah central Abu Dhabi, not beachfront',
      details: 'must look like a central city hotel, not waterfront palace',
    },
    directions: {
      dusk: 'rooftop pool terrace and warm city tower lights',
      daylight: 'street-facing central Abu Dhabi facade in strong daylight',
    },
  },
  {
    hotel: 'Real Marina Hotel & Spa',
    city: 'Olhao',
    country: 'Portugal',
    slug: 'real-marina-hotel-spa-olhao',
    contentFile: 'real-marina-olhao.md',
    sources: ['https://real-marina.com/', 'https://www.realmarina.realhotelsgroup.com/photo-and-video-gallery/'],
    features: {
      architecture: 'modern five-star marina hotel overlooking Olhao leisure marina and Ria Formosa',
      entrance: 'custom-built contemporary Algarve waterfront hotel',
      pool: 'heated indoor and outdoor swimming pools with marina/estuary views',
      colours: 'white facade, glass balconies, blue marina water, pale stone paving, Algarve sunlight',
      setting: 'Olhão marina and Formosa Estuary Natural Park, boats and barrier-island horizon',
      details: 'coastal modern luxury, not old-town boutique',
    },
    directions: {
      dusk: 'marina-facing facade with pool terrace, boats and soft estuary sunset',
      daylight: 'white modern hotel and marina promenade in crisp Algarve daylight',
    },
  },
  {
    hotel: 'Graffit Gallery Design Hotel',
    city: 'Varna',
    country: 'Bulgaria',
    slug: 'graffit-gallery-design-hotel-varna',
    contentFile: 'graffit-gallery-varna.md',
    sources: ['https://en.graffithotel.com/', 'https://en.graffithotel.com/the-hotel'],
    features: {
      architecture: 'modern stylish urban design hotel with graphite-like facade in central Varna',
      entrance: 'tight city frontage on Knyaz Boris I Boulevard, contemporary art-hotel identity',
      pool: 'indoor swimming pool; exterior should focus on design-forward facade',
      colours: 'dark graphite panels, glass, urban lighting, warm interior glow, restrained art-hotel palette',
      setting: 'downtown Varna near cultural and Black Sea city attractions',
      details: 'design-forward and urban, not heritage grand',
    },
    directions: {
      dusk: 'graphite facade with warm gallery-like windows in Varna city evening',
      daylight: 'sharp modern street facade with subtle Black Sea city context',
    },
  },
];

export function buildPrompts(hotel) {
  const featureText = [
    `Architecture: ${hotel.features.architecture}.`,
    `Entrance/facade: ${hotel.features.entrance}.`,
    `Pool/garden/courtyard: ${hotel.features.pool}.`,
    `Colours/materials: ${hotel.features.colours}.`,
    `Setting: ${hotel.features.setting}.`,
    `Useful details to preserve: ${hotel.features.details}.`,
  ].join(' ');

  return {
    editorialDusk: `${baseDusk} Subject: ${hotel.hotel} in ${hotel.city}, ${hotel.country}. ${featureText} Image direction: ${hotel.directions.dusk}. Keep the hotel as the clear hero, premium and aspirational but believable for this specific property.`,
    realisticDaylight: `${baseDaylight} Subject: ${hotel.hotel} in ${hotel.city}, ${hotel.country}. ${featureText} Image direction: ${hotel.directions.daylight}. Keep the hotel as the clear hero, natural daylight, honest premium travel photography.`,
  };
}

export function imageRecords(hotel) {
  return [
    {
      type: 'editorial-dusk',
      filename: `${hotel.slug}-editorial-dusk.webp`,
      alt: `AI-generated editorial dusk view of ${hotel.hotel} in ${hotel.city}, ${hotel.country}`,
    },
    {
      type: 'realistic-daylight',
      filename: `${hotel.slug}-realistic-daylight.webp`,
      alt: `AI-generated realistic daylight view of ${hotel.hotel} in ${hotel.city}, ${hotel.country}`,
    },
  ];
}
