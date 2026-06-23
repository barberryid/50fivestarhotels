export const SITE_URL = 'https://50fivestarhotels.com';
export const siteName = '50 Five-Star Hotels';
export const defaultDescription =
  'A practical guide to affordable five-star and near-five-star hotels around the world.';

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
    '@id': absoluteUrl('/#website'),
    name: siteName,
    url: SITE_URL,
    description: defaultDescription,
    inLanguage: 'en',
    publisher: {
      '@id': absoluteUrl('/#organization'),
    },
  };
}

export function publisherJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': absoluteUrl('/#organization'),
    name: siteName,
    alternateName: '50fivestarhotels.com',
    url: SITE_URL,
    logo: absoluteUrl('/Favicon.png'),
    description: defaultDescription,
  };
}

export function webPageJsonLd({
  title,
  description,
  path,
  type = 'WebPage',
}: {
  title: string;
  description: string;
  path: string;
  type?: 'WebPage' | 'CollectionPage' | 'AboutPage' | 'ContactPage';
}) {
  const url = canonicalUrl(path);
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    name: title,
    description,
    url,
    isPartOf: {
      '@id': absoluteUrl('/#website'),
    },
    publisher: {
      '@id': absoluteUrl('/#organization'),
    },
    inLanguage: 'en',
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  image,
  datePublished = '2026-05-31',
  dateModified = '2026-06-23',
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const url = canonicalUrl(path);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: title,
    description,
    image: imageUrl(image),
    author: {
      '@type': 'Organization',
      '@id': absoluteUrl('/#organization'),
      name: siteName,
    },
    publisher: {
      '@id': absoluteUrl('/#organization'),
    },
    mainEntityOfPage: {
      '@id': `${url}#webpage`,
    },
    datePublished,
    dateModified,
    inLanguage: 'en',
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
    '@id': `${SITE_URL}/#${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name,
    numberOfItems: hotels.length,
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
