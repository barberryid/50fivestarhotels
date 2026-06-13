export const countryRegions: Record<string, string> = {
  Indonesia: 'Asia',
  Malaysia: 'Asia',
  Thailand: 'Asia',
  Cambodia: 'Asia',
  Vietnam: 'Asia',
  Philippines: 'Asia',
  Nepal: 'Asia',
  Uzbekistan: 'Central Asia',
  Georgia: 'Caucasus',
  Armenia: 'Caucasus',
  Romania: 'Europe',
  Bulgaria: 'Europe',
  Portugal: 'Europe',
  England: 'Europe',
  Scotland: 'Europe',
  France: 'Europe',
  Italy: 'Europe',
  Germany: 'Europe',
  'Bosnia and Herzegovina': 'Europe',
  Egypt: 'Middle East and North Africa',
  Morocco: 'Middle East and North Africa',
  'United Arab Emirates': 'Middle East',
  Canada: 'Americas',
  'United States': 'Americas',
  Mexico: 'Americas',
  'Dominican Republic': 'Americas',
};

export function countryRegion(country: string) {
  return countryRegions[country] ?? 'Worldwide';
}

export function regionSlug(region: string) {
  if (region === 'Asia') return '/regions/asia/';
  if (region === 'Europe') return '/regions/europe/';
  if (region === 'Middle East' || region === 'Middle East and North Africa') {
    return '/regions/middle-east-north-africa/';
  }
  if (region === 'Caucasus' || region === 'Central Asia') {
    return '/regions/caucasus-central-asia/';
  }
  if (region === 'Americas') return '/regions/americas/';
  return '/destinations/';
}
