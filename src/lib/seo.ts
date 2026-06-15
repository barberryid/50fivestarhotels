export const SITE_URL = 'https://50fivestarhotels.com';
export const siteName = '50 Five-Star Hotels';

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString();
}

export function canonicalUrl(path: string) {
  const cleanPath = path.endsWith('/') ? path : `${path}/`;
  return absoluteUrl(cleanPath);
}

export function imageUrl(path?: string) {
  if (!path) return absoluteUrl('/images/social/default-og.webp');
  if (path.startsWith('http')) return path;
  return absoluteUrl(path);
}

export function hotelImageAlt(hotel: { data?: any } | any) {
  const data = hotel.data ?? hotel;
  return `${data.title} in ${data.city}, ${data.country}`;
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: SITE_URL,
    description:
      'A practical guide to affordable five-star and near-five-star hotels around the world.',
    inLanguage: 'en',
  };
}

export function publisherJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: SITE_URL,
    logo: absoluteUrl('/Favicon.png'),
  };
}

export function webApplicationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '50 Five-Star Hotels Hotel Finder',
    url: canonicalUrl('/hotel-finder/'),
    applicationCategory: 'TravelApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    description:
      'A free hotel-finding assistant that creates a structured research brief for affordable five-star, near-luxury and unusually good-value hotels.',
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function itemListJsonLd(name: string, hotels: any[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: hotels.map((hotel, index) => {
      const data = hotel.data ?? hotel;
      return {
        '@type': 'ListItem',
        position: index + 1,
        url: canonicalUrl(`/hotels/${data.slug}/`),
        name: data.title,
      };
    }),
  };
}
