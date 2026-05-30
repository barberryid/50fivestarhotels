export type SeasonalityLabel =
  | "Best"
  | "Good"
  | "Possible"
  | "Avoid"
  | "Cheapest"
  | "Good value"
  | "Average"
  | "Expensive"
  | "Most expensive";


export type SeasonalityMonth = {
  month: "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec";
  label: SeasonalityLabel;
};


export type HotelSeasonality = {
  hotel: string;
  city: string;
  country: string;
  weather: {
    title: "Best time for weather";
    months: SeasonalityMonth[];
    summary: string;
    notes?: string;
    confidenceLevel?: string;
    lastChecked?: string;
    sources?: string;
  };
  price: {
    title: "Best time for price";
    months: SeasonalityMonth[];
    summary: string;
    notes?: string;
    confidenceLevel?: string;
    lastChecked?: string;
    sources?: string;
  };
};


export const hotelSeasonality: Record<string, HotelSeasonality> = {
  "hotel-majapahit-surabaya": {
    "hotel": "Hotel Majapahit Surabaya – MGallery",
    "city": "Surabaya",
    "country": "Indonesia",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Avoid"
        },
        {
          "month": "Feb",
          "label": "Avoid"
        },
        {
          "month": "Mar",
          "label": "Avoid"
        },
        {
          "month": "Apr",
          "label": "Possible"
        },
        {
          "month": "May",
          "label": "Good"
        },
        {
          "month": "Jun",
          "label": "Best"
        },
        {
          "month": "Jul",
          "label": "Best"
        },
        {
          "month": "Aug",
          "label": "Best"
        },
        {
          "month": "Sep",
          "label": "Good"
        },
        {
          "month": "Oct",
          "label": "Good"
        },
        {
          "month": "Nov",
          "label": "Possible"
        },
        {
          "month": "Dec",
          "label": "Avoid"
        }
      ],
      "summary": "Best: Jun–Aug. Driest months for city walks, heritage sights and side trips; Dec–Mar is wetter.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.traveloka.com/en-sg/explore/guides/surabaya-weather-temperature-forecast/1002875\nhttps://www.holidify.com/places/surabaya/best-time-to-visit.html\nhttps://www.kayak.com/Surabaya-Hotels-Hotel-Majapahit-Surabaya---Managed-by-AccorHotels.56297.ksp"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Cheapest"
        },
        {
          "month": "Feb",
          "label": "Cheapest"
        },
        {
          "month": "Mar",
          "label": "Good value"
        },
        {
          "month": "Apr",
          "label": "Good value"
        },
        {
          "month": "May",
          "label": "Average"
        },
        {
          "month": "Jun",
          "label": "Average"
        },
        {
          "month": "Jul",
          "label": "Expensive"
        },
        {
          "month": "Aug",
          "label": "Expensive"
        },
        {
          "month": "Sep",
          "label": "Good value"
        },
        {
          "month": "Oct",
          "label": "Good value"
        },
        {
          "month": "Nov",
          "label": "Good value"
        },
        {
          "month": "Dec",
          "label": "Most expensive"
        }
      ],
      "summary": "Cheapest: Jan–Feb. Most expensive: Dec; Jul–Aug can rise with Indonesia holiday demand.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.traveloka.com/en-sg/explore/guides/surabaya-weather-temperature-forecast/1002875\nhttps://www.holidify.com/places/surabaya/best-time-to-visit.html\nhttps://www.kayak.com/Surabaya-Hotels-Hotel-Majapahit-Surabaya---Managed-by-AccorHotels.56297.ksp"
    }
  },
  "phoenix-hotel-yogyakarta": {
    "hotel": "The Phoenix Hotel Yogyakarta – Handwritten Collection",
    "city": "Yogyakarta",
    "country": "Indonesia",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Avoid"
        },
        {
          "month": "Feb",
          "label": "Avoid"
        },
        {
          "month": "Mar",
          "label": "Avoid"
        },
        {
          "month": "Apr",
          "label": "Possible"
        },
        {
          "month": "May",
          "label": "Good"
        },
        {
          "month": "Jun",
          "label": "Best"
        },
        {
          "month": "Jul",
          "label": "Best"
        },
        {
          "month": "Aug",
          "label": "Best"
        },
        {
          "month": "Sep",
          "label": "Good"
        },
        {
          "month": "Oct",
          "label": "Good"
        },
        {
          "month": "Nov",
          "label": "Possible"
        },
        {
          "month": "Dec",
          "label": "Avoid"
        }
      ],
      "summary": "Best: Jun–Aug. Dry-season temple weather is strongest; Dec–Mar is wetter and less reliable.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.airasia.com/blog/indonesia/yogyakarta/yogyakarta-travel-guide/\nhttps://panoramalenstrip.com/best-time-to-visit-yogyakarta/\nhttps://www.kayak.com/Yogyakarta-Hotels-The-Phoenix-Hotel-Yogyakarta---MGallery-by-Sofitel.44841.ksp"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Cheapest"
        },
        {
          "month": "Feb",
          "label": "Cheapest"
        },
        {
          "month": "Mar",
          "label": "Good value"
        },
        {
          "month": "Apr",
          "label": "Good value"
        },
        {
          "month": "May",
          "label": "Good value"
        },
        {
          "month": "Jun",
          "label": "Average"
        },
        {
          "month": "Jul",
          "label": "Expensive"
        },
        {
          "month": "Aug",
          "label": "Expensive"
        },
        {
          "month": "Sep",
          "label": "Good value"
        },
        {
          "month": "Oct",
          "label": "Good value"
        },
        {
          "month": "Nov",
          "label": "Good value"
        },
        {
          "month": "Dec",
          "label": "Most expensive"
        }
      ],
      "summary": "Cheapest: Jan–Feb. Most expensive: Dec; Jul–Aug and Waisak/holiday periods can be higher.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.airasia.com/blog/indonesia/yogyakarta/yogyakarta-travel-guide/\nhttps://panoramalenstrip.com/best-time-to-visit-yogyakarta/\nhttps://www.kayak.com/Yogyakarta-Hotels-The-Phoenix-Hotel-Yogyakarta---MGallery-by-Sofitel.44841.ksp"
    }
  },
  "royal-surakarta-heritage": {
    "hotel": "The Royal Surakarta Heritage – Handwritten Collection",
    "city": "Solo (Surakarta)",
    "country": "Indonesia",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Avoid"
        },
        {
          "month": "Feb",
          "label": "Avoid"
        },
        {
          "month": "Mar",
          "label": "Avoid"
        },
        {
          "month": "Apr",
          "label": "Possible"
        },
        {
          "month": "May",
          "label": "Good"
        },
        {
          "month": "Jun",
          "label": "Best"
        },
        {
          "month": "Jul",
          "label": "Best"
        },
        {
          "month": "Aug",
          "label": "Best"
        },
        {
          "month": "Sep",
          "label": "Good"
        },
        {
          "month": "Oct",
          "label": "Good"
        },
        {
          "month": "Nov",
          "label": "Possible"
        },
        {
          "month": "Dec",
          "label": "Avoid"
        }
      ],
      "summary": "Best: Jun–Aug. Dry-season weather is best for palaces, batik districts and nearby day trips.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.agoda.com/travel-guides/indonesia/surakarta/discover-the-perfect-time-to-visit-surakarta-a-seasonal-guide-to-the-heart-of-java/\nhttps://www.kupi.com/en-ae/explore/indonesia/solo/weather\nhttps://www.kayak.com/Surakarta-City-Hotels-The-Royal-Surakarta-Heritage-Solo---MGallery-by-Sofitel.569998.ksp"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Cheapest"
        },
        {
          "month": "Feb",
          "label": "Cheapest"
        },
        {
          "month": "Mar",
          "label": "Good value"
        },
        {
          "month": "Apr",
          "label": "Good value"
        },
        {
          "month": "May",
          "label": "Average"
        },
        {
          "month": "Jun",
          "label": "Average"
        },
        {
          "month": "Jul",
          "label": "Expensive"
        },
        {
          "month": "Aug",
          "label": "Expensive"
        },
        {
          "month": "Sep",
          "label": "Good value"
        },
        {
          "month": "Oct",
          "label": "Good value"
        },
        {
          "month": "Nov",
          "label": "Good value"
        },
        {
          "month": "Dec",
          "label": "Most expensive"
        }
      ],
      "summary": "Cheapest: Jan–Feb. Most expensive: Dec; Jul–Aug can be higher around domestic holidays.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.agoda.com/travel-guides/indonesia/surakarta/discover-the-perfect-time-to-visit-surakarta-a-seasonal-guide-to-the-heart-of-java/\nhttps://www.kupi.com/en-ae/explore/indonesia/solo/weather\nhttps://www.kayak.com/Surakarta-City-Hotels-The-Royal-Surakarta-Heritage-Solo---MGallery-by-Sofitel.569998.ksp"
    }
  },
  "angkor-aurora-siem-reap": {
    "hotel": "Angkor Aurora",
    "city": "Siem Reap",
    "country": "Cambodia",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Best"
        },
        {
          "month": "Feb",
          "label": "Best"
        },
        {
          "month": "Mar",
          "label": "Good"
        },
        {
          "month": "Apr",
          "label": "Possible"
        },
        {
          "month": "May",
          "label": "Possible"
        },
        {
          "month": "Jun",
          "label": "Possible"
        },
        {
          "month": "Jul",
          "label": "Possible"
        },
        {
          "month": "Aug",
          "label": "Possible"
        },
        {
          "month": "Sep",
          "label": "Avoid"
        },
        {
          "month": "Oct",
          "label": "Avoid"
        },
        {
          "month": "Nov",
          "label": "Good"
        },
        {
          "month": "Dec",
          "label": "Best"
        }
      ],
      "summary": "Best: Dec–Feb. Cool dry temple weather; Sep–Oct is wetter and less ideal.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.hotels.com/go/cambodia/siem-reap-weather\nhttps://www.villa-finder.com/magazine/best-time-to-go-to-siem-reap/\nhttps://www.booking.com/hotel/kh/angkor-aurora.html\nhttps://www.agoda.com/grand-elysee-siem-reap/hotel/siem-reap-kh.html"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Most expensive"
        },
        {
          "month": "Feb",
          "label": "Expensive"
        },
        {
          "month": "Mar",
          "label": "Average"
        },
        {
          "month": "Apr",
          "label": "Good value"
        },
        {
          "month": "May",
          "label": "Cheapest"
        },
        {
          "month": "Jun",
          "label": "Cheapest"
        },
        {
          "month": "Jul",
          "label": "Cheapest"
        },
        {
          "month": "Aug",
          "label": "Cheapest"
        },
        {
          "month": "Sep",
          "label": "Cheapest"
        },
        {
          "month": "Oct",
          "label": "Good value"
        },
        {
          "month": "Nov",
          "label": "Good value"
        },
        {
          "month": "Dec",
          "label": "Expensive"
        }
      ],
      "summary": "Cheapest: May–Sep. Most expensive: Jan; Dec–Feb brings peak Angkor demand.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.hotels.com/go/cambodia/siem-reap-weather\nhttps://www.villa-finder.com/magazine/best-time-to-go-to-siem-reap/\nhttps://www.booking.com/hotel/kh/angkor-aurora.html\nhttps://www.agoda.com/grand-elysee-siem-reap/hotel/siem-reap-kh.html"
    }
  },
  "raweekanlaya-bangkok": {
    "hotel": "The Raweekanlaya Bangkok Wellness Cuisine Resort",
    "city": "Bangkok",
    "country": "Thailand",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Best"
        },
        {
          "month": "Feb",
          "label": "Best"
        },
        {
          "month": "Mar",
          "label": "Good"
        },
        {
          "month": "Apr",
          "label": "Possible"
        },
        {
          "month": "May",
          "label": "Possible"
        },
        {
          "month": "Jun",
          "label": "Possible"
        },
        {
          "month": "Jul",
          "label": "Avoid"
        },
        {
          "month": "Aug",
          "label": "Avoid"
        },
        {
          "month": "Sep",
          "label": "Avoid"
        },
        {
          "month": "Oct",
          "label": "Possible"
        },
        {
          "month": "Nov",
          "label": "Good"
        },
        {
          "month": "Dec",
          "label": "Best"
        }
      ],
      "summary": "Best: Dec–Feb. Cooler, drier Bangkok weather; Jul–Sep is wetter and less comfortable.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.thailandhighlights.com/thailand/bangkok/best-time-to-visit\nhttps://thailandwithtereza.com/the-best-time-to-visit-bangkok/\nhttps://www.kayak.com/Bangkok-Hotels-The-Raweekanlaya-Hotel-Bangkok.2416575.ksp"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Most expensive"
        },
        {
          "month": "Feb",
          "label": "Expensive"
        },
        {
          "month": "Mar",
          "label": "Average"
        },
        {
          "month": "Apr",
          "label": "Average"
        },
        {
          "month": "May",
          "label": "Good value"
        },
        {
          "month": "Jun",
          "label": "Good value"
        },
        {
          "month": "Jul",
          "label": "Good value"
        },
        {
          "month": "Aug",
          "label": "Good value"
        },
        {
          "month": "Sep",
          "label": "Cheapest"
        },
        {
          "month": "Oct",
          "label": "Cheapest"
        },
        {
          "month": "Nov",
          "label": "Average"
        },
        {
          "month": "Dec",
          "label": "Most expensive"
        }
      ],
      "summary": "Cheapest: Sep–Oct. Most expensive: Dec–Jan; Songkran in April can lift rates.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.thailandhighlights.com/thailand/bangkok/best-time-to-visit\nhttps://thailandwithtereza.com/the-best-time-to-visit-bangkok/\nhttps://www.kayak.com/Bangkok-Hotels-The-Raweekanlaya-Hotel-Bangkok.2416575.ksp"
    }
  },
  "steigenberger-resort-achti-luxor": {
    "hotel": "Steigenberger Resort Achti Luxor",
    "city": "Luxor",
    "country": "Egypt",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Best"
        },
        {
          "month": "Feb",
          "label": "Best"
        },
        {
          "month": "Mar",
          "label": "Good"
        },
        {
          "month": "Apr",
          "label": "Good"
        },
        {
          "month": "May",
          "label": "Possible"
        },
        {
          "month": "Jun",
          "label": "Avoid"
        },
        {
          "month": "Jul",
          "label": "Avoid"
        },
        {
          "month": "Aug",
          "label": "Avoid"
        },
        {
          "month": "Sep",
          "label": "Possible"
        },
        {
          "month": "Oct",
          "label": "Good"
        },
        {
          "month": "Nov",
          "label": "Best"
        },
        {
          "month": "Dec",
          "label": "Best"
        }
      ],
      "summary": "Best: Nov–Feb. Mild sightseeing weather for temples and tombs; Jun–Aug is very hot.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.luxorbookingtours.com/BlogDetails?cid=best-time-to-visit-luxor-weather-prices--crowds\nhttps://www.granadatravelagency.com/blog/seasonal-hotel-prices-egypt\nhttps://www.kayak.com/Luxor-Hotels-Achti-Resort-Luxor.158995.ksp"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Most expensive"
        },
        {
          "month": "Feb",
          "label": "Expensive"
        },
        {
          "month": "Mar",
          "label": "Expensive"
        },
        {
          "month": "Apr",
          "label": "Average"
        },
        {
          "month": "May",
          "label": "Good value"
        },
        {
          "month": "Jun",
          "label": "Cheapest"
        },
        {
          "month": "Jul",
          "label": "Cheapest"
        },
        {
          "month": "Aug",
          "label": "Cheapest"
        },
        {
          "month": "Sep",
          "label": "Good value"
        },
        {
          "month": "Oct",
          "label": "Average"
        },
        {
          "month": "Nov",
          "label": "Expensive"
        },
        {
          "month": "Dec",
          "label": "Most expensive"
        }
      ],
      "summary": "Cheapest: Jun–Aug. Most expensive: Dec–Jan; winter is prime Nile/archaeology season.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.luxorbookingtours.com/BlogDetails?cid=best-time-to-visit-luxor-weather-prices--crowds\nhttps://www.granadatravelagency.com/blog/seasonal-hotel-prices-egypt\nhttps://www.kayak.com/Luxor-Hotels-Achti-Resort-Luxor.158995.ksp"
    }
  },
  "pleiada-boutique-hotel-iasi": {
    "hotel": "Pleiada Boutique Hotel & Spa",
    "city": "Iași",
    "country": "Romania",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Avoid"
        },
        {
          "month": "Feb",
          "label": "Avoid"
        },
        {
          "month": "Mar",
          "label": "Possible"
        },
        {
          "month": "Apr",
          "label": "Good"
        },
        {
          "month": "May",
          "label": "Best"
        },
        {
          "month": "Jun",
          "label": "Best"
        },
        {
          "month": "Jul",
          "label": "Possible"
        },
        {
          "month": "Aug",
          "label": "Possible"
        },
        {
          "month": "Sep",
          "label": "Best"
        },
        {
          "month": "Oct",
          "label": "Good"
        },
        {
          "month": "Nov",
          "label": "Possible"
        },
        {
          "month": "Dec",
          "label": "Avoid"
        }
      ],
      "summary": "Best: May–Jun; Sep. Mild city weather; Dec–Feb is cold and less appealing.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.climatestotravel.com/climate/romania/iasi\nhttps://romaniatraveltips.com/travel-for-americans/best-time-to-visit-romania\nhttps://www.kayak.com/Iasi-Hotels-Pleiada-Boutique-Hotel-And-Spa.750954.ksp"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Cheapest"
        },
        {
          "month": "Feb",
          "label": "Cheapest"
        },
        {
          "month": "Mar",
          "label": "Good value"
        },
        {
          "month": "Apr",
          "label": "Good value"
        },
        {
          "month": "May",
          "label": "Average"
        },
        {
          "month": "Jun",
          "label": "Average"
        },
        {
          "month": "Jul",
          "label": "Expensive"
        },
        {
          "month": "Aug",
          "label": "Expensive"
        },
        {
          "month": "Sep",
          "label": "Average"
        },
        {
          "month": "Oct",
          "label": "Good value"
        },
        {
          "month": "Nov",
          "label": "Cheapest"
        },
        {
          "month": "Dec",
          "label": "Good value"
        }
      ],
      "summary": "Cheapest: Jan–Feb and Nov. Most expensive: none clear; summer can be pricier.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.climatestotravel.com/climate/romania/iasi\nhttps://romaniatraveltips.com/travel-for-americans/best-time-to-visit-romania\nhttps://www.kayak.com/Iasi-Hotels-Pleiada-Boutique-Hotel-And-Spa.750954.ksp"
    }
  },
  "silk-path-grand-hue": {
    "hotel": "Silk Path Grand Hue Hotel & Spa",
    "city": "Hue",
    "country": "Vietnam",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Good"
        },
        {
          "month": "Feb",
          "label": "Best"
        },
        {
          "month": "Mar",
          "label": "Best"
        },
        {
          "month": "Apr",
          "label": "Best"
        },
        {
          "month": "May",
          "label": "Good"
        },
        {
          "month": "Jun",
          "label": "Good"
        },
        {
          "month": "Jul",
          "label": "Possible"
        },
        {
          "month": "Aug",
          "label": "Possible"
        },
        {
          "month": "Sep",
          "label": "Possible"
        },
        {
          "month": "Oct",
          "label": "Avoid"
        },
        {
          "month": "Nov",
          "label": "Avoid"
        },
        {
          "month": "Dec",
          "label": "Possible"
        }
      ],
      "summary": "Best: Feb–Apr. Cooler, drier sightseeing weather; Oct–Nov brings heavy rain risk.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.selectiveasia.com/vietnam-holidays/weather\nhttps://indochinatodaytravel.com/best-time-to-visit-hue/\nhttps://vietnamluxuryexpress.com/hue-vietnam-weather/\nhttps://www.kayak.com/Hue-Hotels-Green-Hotel.280207.ksp"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Average"
        },
        {
          "month": "Feb",
          "label": "Average"
        },
        {
          "month": "Mar",
          "label": "Expensive"
        },
        {
          "month": "Apr",
          "label": "Average"
        },
        {
          "month": "May",
          "label": "Good value"
        },
        {
          "month": "Jun",
          "label": "Good value"
        },
        {
          "month": "Jul",
          "label": "Expensive"
        },
        {
          "month": "Aug",
          "label": "Expensive"
        },
        {
          "month": "Sep",
          "label": "Cheapest"
        },
        {
          "month": "Oct",
          "label": "Cheapest"
        },
        {
          "month": "Nov",
          "label": "Cheapest"
        },
        {
          "month": "Dec",
          "label": "Good value"
        }
      ],
      "summary": "Cheapest: Sep–Nov. Most expensive: none clear; Tet and summer holidays can raise rates.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.selectiveasia.com/vietnam-holidays/weather\nhttps://indochinatodaytravel.com/best-time-to-visit-hue/\nhttps://vietnamluxuryexpress.com/hue-vietnam-weather/\nhttps://www.kayak.com/Hue-Hotels-Green-Hotel.280207.ksp"
    }
  },
  "stamba-hotel-tbilisi": {
    "hotel": "Stamba Hotel",
    "city": "Tbilisi",
    "country": "Georgia",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Avoid"
        },
        {
          "month": "Feb",
          "label": "Avoid"
        },
        {
          "month": "Mar",
          "label": "Possible"
        },
        {
          "month": "Apr",
          "label": "Good"
        },
        {
          "month": "May",
          "label": "Best"
        },
        {
          "month": "Jun",
          "label": "Best"
        },
        {
          "month": "Jul",
          "label": "Possible"
        },
        {
          "month": "Aug",
          "label": "Possible"
        },
        {
          "month": "Sep",
          "label": "Best"
        },
        {
          "month": "Oct",
          "label": "Best"
        },
        {
          "month": "Nov",
          "label": "Good"
        },
        {
          "month": "Dec",
          "label": "Possible"
        }
      ],
      "summary": "Best: May–Jun; Sep–Oct. Walkable city weather; Jan–Feb is cold and less comfortable.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://wander-lush.org/best-time-to-visit-georgia-country/\nhttps://www.steppestravel.com/best-time-to-visit/georgia/\nhttps://www.kayak.com/Tbilisi-Hotels_Luxury.Hlu.24544.hotel.ksp\nhttps://www.kayak.com/Tbilisi-Hotels-Stamba-Hotel.3970339.ksp"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Cheapest"
        },
        {
          "month": "Feb",
          "label": "Cheapest"
        },
        {
          "month": "Mar",
          "label": "Cheapest"
        },
        {
          "month": "Apr",
          "label": "Average"
        },
        {
          "month": "May",
          "label": "Expensive"
        },
        {
          "month": "Jun",
          "label": "Expensive"
        },
        {
          "month": "Jul",
          "label": "Average"
        },
        {
          "month": "Aug",
          "label": "Average"
        },
        {
          "month": "Sep",
          "label": "Most expensive"
        },
        {
          "month": "Oct",
          "label": "Most expensive"
        },
        {
          "month": "Nov",
          "label": "Cheapest"
        },
        {
          "month": "Dec",
          "label": "Good value"
        }
      ],
      "summary": "Cheapest: Jan–Mar and Nov. Most expensive: Sep–Oct; Stamba is most in demand in peak city months.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://wander-lush.org/best-time-to-visit-georgia-country/\nhttps://www.steppestravel.com/best-time-to-visit/georgia/\nhttps://www.kayak.com/Tbilisi-Hotels_Luxury.Hlu.24544.hotel.ksp\nhttps://www.kayak.com/Tbilisi-Hotels-Stamba-Hotel.3970339.ksp"
    }
  },
  "grand-hotel-yerevan": {
    "hotel": "Grand Hotel Yerevan – Small Luxury Hotels of the World",
    "city": "Yerevan",
    "country": "Armenia",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Avoid"
        },
        {
          "month": "Feb",
          "label": "Avoid"
        },
        {
          "month": "Mar",
          "label": "Possible"
        },
        {
          "month": "Apr",
          "label": "Good"
        },
        {
          "month": "May",
          "label": "Best"
        },
        {
          "month": "Jun",
          "label": "Best"
        },
        {
          "month": "Jul",
          "label": "Possible"
        },
        {
          "month": "Aug",
          "label": "Possible"
        },
        {
          "month": "Sep",
          "label": "Best"
        },
        {
          "month": "Oct",
          "label": "Best"
        },
        {
          "month": "Nov",
          "label": "Good"
        },
        {
          "month": "Dec",
          "label": "Avoid"
        }
      ],
      "summary": "Best: May–Jun; Sep–Oct. Pleasant city weather; Dec–Feb is cold and less ideal.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.responsibletravel.com/holidays/armenia/travel-guide/best-time-to-visit-armenia\nhttps://thingstodoinyerevan.com/when-to-visit/\nhttps://www.kayak.com/Yerevan-Hotels-Grand-Hotel-Yerevan.99568.ksp\nhttps://slh.com/hotels/grand-hotel-yerevan"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Cheapest"
        },
        {
          "month": "Feb",
          "label": "Cheapest"
        },
        {
          "month": "Mar",
          "label": "Good value"
        },
        {
          "month": "Apr",
          "label": "Average"
        },
        {
          "month": "May",
          "label": "Expensive"
        },
        {
          "month": "Jun",
          "label": "Expensive"
        },
        {
          "month": "Jul",
          "label": "Average"
        },
        {
          "month": "Aug",
          "label": "Average"
        },
        {
          "month": "Sep",
          "label": "Expensive"
        },
        {
          "month": "Oct",
          "label": "Expensive"
        },
        {
          "month": "Nov",
          "label": "Good value"
        },
        {
          "month": "Dec",
          "label": "Good value"
        }
      ],
      "summary": "Cheapest: Jan–Feb. Most expensive: none clear; May–Jun and Sep–Oct are higher-demand months.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.responsibletravel.com/holidays/armenia/travel-guide/best-time-to-visit-armenia\nhttps://thingstodoinyerevan.com/when-to-visit/\nhttps://www.kayak.com/Yerevan-Hotels-Grand-Hotel-Yerevan.99568.ksp\nhttps://slh.com/hotels/grand-hotel-yerevan"
    }
  },
  "hyatt-regency-tashkent": {
    "hotel": "Hyatt Regency Tashkent",
    "city": "Tashkent",
    "country": "Uzbekistan",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Avoid"
        },
        {
          "month": "Feb",
          "label": "Possible"
        },
        {
          "month": "Mar",
          "label": "Good"
        },
        {
          "month": "Apr",
          "label": "Best"
        },
        {
          "month": "May",
          "label": "Best"
        },
        {
          "month": "Jun",
          "label": "Possible"
        },
        {
          "month": "Jul",
          "label": "Avoid"
        },
        {
          "month": "Aug",
          "label": "Avoid"
        },
        {
          "month": "Sep",
          "label": "Best"
        },
        {
          "month": "Oct",
          "label": "Best"
        },
        {
          "month": "Nov",
          "label": "Good"
        },
        {
          "month": "Dec",
          "label": "Possible"
        }
      ],
      "summary": "Best: Apr–May; Sep–Oct. Silk Road weather is most comfortable; Jul–Aug is very hot.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.steppestravel.com/best-time-to-visit/uzbekistan/\nhttps://www.weroad.com/blog/best-time-to-visit-uzbekistan\nhttps://www.kayak.com/Tashkent-Hotels-Hyatt-Regency-Tashkent.2652111.ksp\nhttps://www.hyatt.com/hyatt-regency/en-US/tasrt-hyatt-regency-tashkent"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Cheapest"
        },
        {
          "month": "Feb",
          "label": "Cheapest"
        },
        {
          "month": "Mar",
          "label": "Average"
        },
        {
          "month": "Apr",
          "label": "Expensive"
        },
        {
          "month": "May",
          "label": "Expensive"
        },
        {
          "month": "Jun",
          "label": "Good value"
        },
        {
          "month": "Jul",
          "label": "Cheapest"
        },
        {
          "month": "Aug",
          "label": "Cheapest"
        },
        {
          "month": "Sep",
          "label": "Expensive"
        },
        {
          "month": "Oct",
          "label": "Expensive"
        },
        {
          "month": "Nov",
          "label": "Good value"
        },
        {
          "month": "Dec",
          "label": "Cheapest"
        }
      ],
      "summary": "Cheapest: Jan–Feb; Jul–Aug; Dec. Most expensive: none clear, but spring/autumn are higher demand.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.steppestravel.com/best-time-to-visit/uzbekistan/\nhttps://www.weroad.com/blog/best-time-to-visit-uzbekistan\nhttps://www.kayak.com/Tashkent-Hotels-Hyatt-Regency-Tashkent.2652111.ksp\nhttps://www.hyatt.com/hyatt-regency/en-US/tasrt-hyatt-regency-tashkent"
    }
  },
  "sofitel-marrakech": {
    "hotel": "Sofitel Marrakech Lounge & Spa",
    "city": "Marrakech",
    "country": "Morocco",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Possible"
        },
        {
          "month": "Feb",
          "label": "Good"
        },
        {
          "month": "Mar",
          "label": "Best"
        },
        {
          "month": "Apr",
          "label": "Best"
        },
        {
          "month": "May",
          "label": "Best"
        },
        {
          "month": "Jun",
          "label": "Possible"
        },
        {
          "month": "Jul",
          "label": "Avoid"
        },
        {
          "month": "Aug",
          "label": "Avoid"
        },
        {
          "month": "Sep",
          "label": "Good"
        },
        {
          "month": "Oct",
          "label": "Best"
        },
        {
          "month": "Nov",
          "label": "Best"
        },
        {
          "month": "Dec",
          "label": "Good"
        }
      ],
      "summary": "Best: Mar–May; Oct–Nov. Comfortable medina/garden weather; Jul–Aug is very hot.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.tui.co.uk/holidays/weather/africa/morocco/morocco-marrakech.html\nhttps://www.tripadvisor.com/Articles-lZBkxXmk9CFk-Best_time_to_visit_marrakech.html\nhttps://www.experienceittours.com/blog/best-times-to-visit-moroccos-top-destinations-a-month-by-month-guide/\nhttps://www.kayak.com/Marrakesh-Hotels-Sofitel-Marrakech-Lounge-And-Spa.342938.ksp"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Cheapest"
        },
        {
          "month": "Feb",
          "label": "Cheapest"
        },
        {
          "month": "Mar",
          "label": "Expensive"
        },
        {
          "month": "Apr",
          "label": "Most expensive"
        },
        {
          "month": "May",
          "label": "Average"
        },
        {
          "month": "Jun",
          "label": "Good value"
        },
        {
          "month": "Jul",
          "label": "Average"
        },
        {
          "month": "Aug",
          "label": "Average"
        },
        {
          "month": "Sep",
          "label": "Good value"
        },
        {
          "month": "Oct",
          "label": "Most expensive"
        },
        {
          "month": "Nov",
          "label": "Cheapest"
        },
        {
          "month": "Dec",
          "label": "Good value"
        }
      ],
      "summary": "Cheapest: Jan–Feb and Nov. Most expensive: Apr and Oct; Easter/spring breaks can spike rates.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.tui.co.uk/holidays/weather/africa/morocco/morocco-marrakech.html\nhttps://www.tripadvisor.com/Articles-lZBkxXmk9CFk-Best_time_to_visit_marrakech.html\nhttps://www.experienceittours.com/blog/best-times-to-visit-moroccos-top-destinations-a-month-by-month-guide/\nhttps://www.kayak.com/Marrakesh-Hotels-Sofitel-Marrakech-Lounge-And-Spa.342938.ksp"
    }
  },
  "malak-regency-sarajevo": {
    "hotel": "Malak Regency Hotel",
    "city": "Sarajevo (Ilidža)",
    "country": "Bosnia and Herzegovina",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Avoid"
        },
        {
          "month": "Feb",
          "label": "Avoid"
        },
        {
          "month": "Mar",
          "label": "Possible"
        },
        {
          "month": "Apr",
          "label": "Good"
        },
        {
          "month": "May",
          "label": "Best"
        },
        {
          "month": "Jun",
          "label": "Best"
        },
        {
          "month": "Jul",
          "label": "Good"
        },
        {
          "month": "Aug",
          "label": "Good"
        },
        {
          "month": "Sep",
          "label": "Best"
        },
        {
          "month": "Oct",
          "label": "Good"
        },
        {
          "month": "Nov",
          "label": "Possible"
        },
        {
          "month": "Dec",
          "label": "Avoid"
        }
      ],
      "summary": "Best: May–Jun; Sep. Comfortable city and mountain weather; Dec–Feb is cold.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.responsibletravel.com/holidays/bosnia-herzegovina/travel-guide/best-time-to-visit-bosnia-herzegovina\nhttps://thingstodoinsarajevo.com/when-to-visit/\nhttps://www.kayak.com/Sarajevo-Hotels-Malak-Regency-Hotel.2844223.ksp"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Good value"
        },
        {
          "month": "Feb",
          "label": "Cheapest"
        },
        {
          "month": "Mar",
          "label": "Good value"
        },
        {
          "month": "Apr",
          "label": "Average"
        },
        {
          "month": "May",
          "label": "Expensive"
        },
        {
          "month": "Jun",
          "label": "Expensive"
        },
        {
          "month": "Jul",
          "label": "Most expensive"
        },
        {
          "month": "Aug",
          "label": "Most expensive"
        },
        {
          "month": "Sep",
          "label": "Expensive"
        },
        {
          "month": "Oct",
          "label": "Average"
        },
        {
          "month": "Nov",
          "label": "Cheapest"
        },
        {
          "month": "Dec",
          "label": "Good value"
        }
      ],
      "summary": "Cheapest: Nov and Feb. Most expensive: Jul–Aug; summer and some ski/holiday periods lift demand.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.responsibletravel.com/holidays/bosnia-herzegovina/travel-guide/best-time-to-visit-bosnia-herzegovina\nhttps://thingstodoinsarajevo.com/when-to-visit/\nhttps://www.kayak.com/Sarajevo-Hotels-Malak-Regency-Hotel.2844223.ksp"
    }
  },
  "majestic-hotel-kuala-lumpur": {
    "hotel": "The Majestic Hotel Kuala Lumpur, Autograph Collection",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Best"
        },
        {
          "month": "Feb",
          "label": "Best"
        },
        {
          "month": "Mar",
          "label": "Possible"
        },
        {
          "month": "Apr",
          "label": "Possible"
        },
        {
          "month": "May",
          "label": "Good"
        },
        {
          "month": "Jun",
          "label": "Best"
        },
        {
          "month": "Jul",
          "label": "Best"
        },
        {
          "month": "Aug",
          "label": "Good"
        },
        {
          "month": "Sep",
          "label": "Good"
        },
        {
          "month": "Oct",
          "label": "Possible"
        },
        {
          "month": "Nov",
          "label": "Possible"
        },
        {
          "month": "Dec",
          "label": "Good"
        }
      ],
      "summary": "Best: Jan–Feb; Jun–Jul. KL is year-round, though showers are common in all months.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.selectiveasia.com/malaysia-holidays/weather\nhttps://lowseasontraveller.com/destination/kuala-lumpur\nhttps://www.kayak.nl/Kuala-Lumpur-Hotels-The-Majestic-Hotel-Kuala-Lumpur-Autograph-Collection.490998.ksp\nhttps://www.marriott.com/en-us/hotels/kulak-the-majestic-hotel-kuala-lumpur-autograph-collection/overview/"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Expensive"
        },
        {
          "month": "Feb",
          "label": "Expensive"
        },
        {
          "month": "Mar",
          "label": "Good value"
        },
        {
          "month": "Apr",
          "label": "Good value"
        },
        {
          "month": "May",
          "label": "Good value"
        },
        {
          "month": "Jun",
          "label": "Average"
        },
        {
          "month": "Jul",
          "label": "Cheapest"
        },
        {
          "month": "Aug",
          "label": "Average"
        },
        {
          "month": "Sep",
          "label": "Good value"
        },
        {
          "month": "Oct",
          "label": "Cheapest"
        },
        {
          "month": "Nov",
          "label": "Good value"
        },
        {
          "month": "Dec",
          "label": "Most expensive"
        }
      ],
      "summary": "Cheapest: Jul and Oct. Most expensive: Dec; Friday/holiday demand can also push rates up.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.selectiveasia.com/malaysia-holidays/weather\nhttps://lowseasontraveller.com/destination/kuala-lumpur\nhttps://www.kayak.nl/Kuala-Lumpur-Hotels-The-Majestic-Hotel-Kuala-Lumpur-Autograph-Collection.490998.ksp\nhttps://www.marriott.com/en-us/hotels/kulak-the-majestic-hotel-kuala-lumpur-autograph-collection/overview/"
    }
  },
  "boton-blue-nha-trang": {
    "hotel": "Boton Blue Hotel & Spa",
    "city": "Nha Trang",
    "country": "Vietnam",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Good"
        },
        {
          "month": "Feb",
          "label": "Best"
        },
        {
          "month": "Mar",
          "label": "Best"
        },
        {
          "month": "Apr",
          "label": "Best"
        },
        {
          "month": "May",
          "label": "Good"
        },
        {
          "month": "Jun",
          "label": "Good"
        },
        {
          "month": "Jul",
          "label": "Possible"
        },
        {
          "month": "Aug",
          "label": "Possible"
        },
        {
          "month": "Sep",
          "label": "Possible"
        },
        {
          "month": "Oct",
          "label": "Avoid"
        },
        {
          "month": "Nov",
          "label": "Avoid"
        },
        {
          "month": "Dec",
          "label": "Possible"
        }
      ],
      "summary": "Best: Feb–Apr. Best beach weather and lower humidity; Oct–Nov is rain/typhoon season.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://vinpearl.com/en/best-time-to-visit-nha-trang\nhttps://www.aliburesort.com/blogs/best-time-to-visit-nha-trang-vietnam.html\nhttps://www.kayak.com/Nha-Trang-Hotels-Boton-Blue-Hotel-Spa.893317.ksp\nhttps://www.agoda.com/royal-beach-boton-blue-hotel-spa/hotel/nha-trang-vn.html"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Average"
        },
        {
          "month": "Feb",
          "label": "Expensive"
        },
        {
          "month": "Mar",
          "label": "Expensive"
        },
        {
          "month": "Apr",
          "label": "Expensive"
        },
        {
          "month": "May",
          "label": "Average"
        },
        {
          "month": "Jun",
          "label": "Average"
        },
        {
          "month": "Jul",
          "label": "Most expensive"
        },
        {
          "month": "Aug",
          "label": "Most expensive"
        },
        {
          "month": "Sep",
          "label": "Good value"
        },
        {
          "month": "Oct",
          "label": "Cheapest"
        },
        {
          "month": "Nov",
          "label": "Cheapest"
        },
        {
          "month": "Dec",
          "label": "Good value"
        }
      ],
      "summary": "Cheapest: Oct–Nov. Most expensive: Jul–Aug; Tet can raise rates when it falls Jan/Feb.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://vinpearl.com/en/best-time-to-visit-nha-trang\nhttps://www.aliburesort.com/blogs/best-time-to-visit-nha-trang-vietnam.html\nhttps://www.kayak.com/Nha-Trang-Hotels-Boton-Blue-Hotel-Spa.893317.ksp\nhttps://www.agoda.com/royal-beach-boton-blue-hotel-spa/hotel/nha-trang-vn.html"
    }
  },
  "im-hotel-makati": {
    "hotel": "I'M Hotel Makati",
    "city": "Makati",
    "country": "Philippines",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Best"
        },
        {
          "month": "Feb",
          "label": "Best"
        },
        {
          "month": "Mar",
          "label": "Good"
        },
        {
          "month": "Apr",
          "label": "Good"
        },
        {
          "month": "May",
          "label": "Possible"
        },
        {
          "month": "Jun",
          "label": "Possible"
        },
        {
          "month": "Jul",
          "label": "Avoid"
        },
        {
          "month": "Aug",
          "label": "Avoid"
        },
        {
          "month": "Sep",
          "label": "Avoid"
        },
        {
          "month": "Oct",
          "label": "Avoid"
        },
        {
          "month": "Nov",
          "label": "Possible"
        },
        {
          "month": "Dec",
          "label": "Best"
        }
      ],
      "summary": "Best: Dec–Feb. Drier, cooler Manila weather; Jul–Oct is rainier and less ideal.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.audleytravel.com/the-philippines/best-time-to-visit\nhttps://www.kupi.com/en-ae/explore/philippines/makati/weather\nhttps://www.traveloka.com/en-ph/hotel/philippines/city/makati-10007657/cheap-hotels-in-makati\nhttps://www.kayak.com/Makati-Hotels-I-M-Hotel.878937.ksp"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Expensive"
        },
        {
          "month": "Feb",
          "label": "Average"
        },
        {
          "month": "Mar",
          "label": "Average"
        },
        {
          "month": "Apr",
          "label": "Average"
        },
        {
          "month": "May",
          "label": "Good value"
        },
        {
          "month": "Jun",
          "label": "Cheapest"
        },
        {
          "month": "Jul",
          "label": "Cheapest"
        },
        {
          "month": "Aug",
          "label": "Cheapest"
        },
        {
          "month": "Sep",
          "label": "Cheapest"
        },
        {
          "month": "Oct",
          "label": "Cheapest"
        },
        {
          "month": "Nov",
          "label": "Good value"
        },
        {
          "month": "Dec",
          "label": "Most expensive"
        }
      ],
      "summary": "Cheapest: Jun–Oct. Most expensive: Dec; Christmas/New Year and conferences can lift rates.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.audleytravel.com/the-philippines/best-time-to-visit\nhttps://www.kupi.com/en-ae/explore/philippines/makati/weather\nhttps://www.traveloka.com/en-ph/hotel/philippines/city/makati-10007657/cheap-hotels-in-makati\nhttps://www.kayak.com/Makati-Hotels-I-M-Hotel.878937.ksp"
    }
  },
  "real-marina-olhao": {
    "hotel": "Real Marina Hotel & Spa",
    "city": "Olhão",
    "country": "Portugal",
    "weather": {
      "title": "Best time for weather",
      "months": [
        {
          "month": "Jan",
          "label": "Avoid"
        },
        {
          "month": "Feb",
          "label": "Avoid"
        },
        {
          "month": "Mar",
          "label": "Possible"
        },
        {
          "month": "Apr",
          "label": "Good"
        },
        {
          "month": "May",
          "label": "Best"
        },
        {
          "month": "Jun",
          "label": "Best"
        },
        {
          "month": "Jul",
          "label": "Good"
        },
        {
          "month": "Aug",
          "label": "Good"
        },
        {
          "month": "Sep",
          "label": "Best"
        },
        {
          "month": "Oct",
          "label": "Good"
        },
        {
          "month": "Nov",
          "label": "Possible"
        },
        {
          "month": "Dec",
          "label": "Avoid"
        }
      ],
      "summary": "Best: May–Jun; Sep. Warm Algarve weather with fewer crowds than peak summer.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.algarve-tourist.com/guides/algarve-weather-when-to-visit-best-month.html\nhttps://portugalgetaways.com/en-us/destination/algarve/plan-your-trip/best-time-travel-algarve\nhttps://www.kayak.com/Olhao-Hotels-Real-Marina-Hotel-Spa.344549.ksp\nhttps://www.be.kayak.com/Olhao-Hotels-Real-Marina-Hotel-Spa.344549.ksp"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        {
          "month": "Jan",
          "label": "Cheapest"
        },
        {
          "month": "Feb",
          "label": "Cheapest"
        },
        {
          "month": "Mar",
          "label": "Cheapest"
        },
        {
          "month": "Apr",
          "label": "Good value"
        },
        {
          "month": "May",
          "label": "Average"
        },
        {
          "month": "Jun",
          "label": "Expensive"
        },
        {
          "month": "Jul",
          "label": "Most expensive"
        },
        {
          "month": "Aug",
          "label": "Most expensive"
        },
        {
          "month": "Sep",
          "label": "Average"
        },
        {
          "month": "Oct",
          "label": "Good value"
        },
        {
          "month": "Nov",
          "label": "Cheapest"
        },
        {
          "month": "Dec",
          "label": "Cheapest"
        }
      ],
      "summary": "Cheapest: Nov–Mar. Most expensive: Jul–Aug; school-holiday beach demand is strongest.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.algarve-tourist.com/guides/algarve-weather-when-to-visit-best-month.html\nhttps://portugalgetaways.com/en-us/destination/algarve/plan-your-trip/best-time-travel-algarve\nhttps://www.kayak.com/Olhao-Hotels-Real-Marina-Hotel-Spa.344549.ksp\nhttps://www.be.kayak.com/Olhao-Hotels-Real-Marina-Hotel-Spa.344549.ksp"
    }
  }
};
