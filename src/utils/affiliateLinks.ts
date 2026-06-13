const BOOKING_CJ_BASE_URL = 'https://www.jdoqocy.com/click-101760376-17293132?url=';

export function getBookingAffiliateUrl(bookingUrl?: string | null): string | null {
  if (!bookingUrl) return null;

  const cleanUrl = bookingUrl.trim().replace(/\?$/, '');
  if (!cleanUrl) return null;

  return `${BOOKING_CJ_BASE_URL}${encodeURIComponent(cleanUrl)}`;
}
