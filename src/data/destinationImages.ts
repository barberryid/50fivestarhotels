export const destinationImages = {
  'siem-reap': {
    src: '/images/destinations/angkor-wat-siem-reap-ai.webp',
    alt: 'Angkor Wat at sunrise in Siem Reap, Cambodia',
    credit: 'AI-generated editorial image',
    subject: 'Angkor Wat sunrise',
  },
  yogyakarta: {
    src: '/images/destinations/borobudur-yogyakarta-ai.webp',
    alt: 'Borobudur temple at sunrise near Yogyakarta, Indonesia',
    credit: 'AI-generated editorial image',
    subject: 'Borobudur sunrise',
  },
  luxor: {
    src: '/images/destinations/luxor-nile-balloons-ai.webp',
    alt: 'Hot air balloons over the Nile at dawn in Luxor, Egypt',
    credit: 'AI-generated editorial image',
    subject: 'Nile balloons at dawn',
  },
  marrakech: {
    src: '/images/destinations/jardin-majorelle-marrakech-ai.webp',
    alt: 'Palm-framed Moroccan garden inspired by Jardin Majorelle in Marrakech',
    credit: 'AI-generated editorial image',
    subject: 'Jardin Majorelle inspired garden',
  },
  'abu-dhabi': {
    src: '/images/destinations/sheikh-zayed-grand-mosque-abu-dhabi-ai.webp',
    alt: 'Sheikh Zayed Grand Mosque at golden hour in Abu Dhabi',
    credit: 'AI-generated editorial image',
    subject: 'Sheikh Zayed Grand Mosque golden hour',
  },
  jakarta: {
    src: '/images/destinations/cafe-batavia-jakarta-ai.webp',
    alt: 'Historic Kota Tua restaurant atmosphere in Jakarta',
    credit: 'AI-generated editorial image',
    subject: 'Kota Tua heritage restaurant atmosphere',
  },
  sarajevo: {
    src: '/images/destinations/bascarsija-sarajevo-ai.webp',
    alt: 'Bascarsija bazaar street in Sarajevo, Bosnia and Herzegovina',
    credit: 'AI-generated editorial image',
    subject: 'Bascarsija Ottoman bazaar street',
  },
  olhao: {
    src: '/images/destinations/ria-formosa-olhao-ai.webp',
    alt: 'Small boats on the Ria Formosa lagoon near Olhao, Portugal',
    credit: 'AI-generated editorial image',
    subject: 'Ria Formosa boats and lagoon islands',
  },
  tbilisi: {
    src: '/images/destinations/old-tbilisi-sulfur-baths-ai.webp',
    alt: 'Old Tbilisi sulfur bath domes with the Narikala hillside in Georgia',
    credit: 'AI-generated editorial image',
    subject: 'Old Tbilisi sulfur baths',
  },
  iasi: {
    src: '/images/destinations/palace-of-culture-iasi-ai.webp',
    alt: 'Palace of Culture in Iasi, Romania',
    credit: 'AI-generated editorial image',
    subject: 'Palace of Culture',
  },
} as const;

export type DestinationImage = (typeof destinationImages)[keyof typeof destinationImages];
