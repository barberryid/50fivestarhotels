export type WeatherRating = "Best" | "Good" | "Possible" | "Avoid";


export type PriceRating = "Cheapest" | "Good value" | "Average" | "Expensive" | "Most expensive";


export type SeasonalityLabel = WeatherRating | PriceRating;


export type SeasonalityMonthName = "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec";


export type SeasonalityMonth = {
  month: SeasonalityMonthName;
  label: SeasonalityLabel;
};


export type HotelSeasonalityMonth = {
  month: SeasonalityMonthName;
  weather: WeatherRating;
  price: PriceRating;
  tempC: number;
  tempF: number;
  humidity: number;
};


export type SeasonalitySummary = {
  title: "Best time for weather" | "Best time for price";
  months: SeasonalityMonth[];
  summary: string;
  notes?: string;
  confidenceLevel?: string;
  lastChecked?: string;
  sources?: string;
};


export type HotelSeasonality = {
  hotel: string;
  city: string;
  country: string;
  matchedSite: boolean;
  weather: SeasonalitySummary & { title: "Best time for weather" };
  price: SeasonalitySummary & { title: "Best time for price" };
  months: HotelSeasonalityMonth[];
};


export const hotelSeasonality: Record<string, HotelSeasonality> = {
  "hotel-majapahit-surabaya": {
    "hotel": "Hotel Majapahit Surabaya – MGallery",
    "city": "Surabaya",
    "country": "Indonesia",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 83
      },
      {
        "month": "Feb",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 83
      },
      {
        "month": "Mar",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": 28,
        "tempF": 82,
        "humidity": 82
      },
      {
        "month": "Apr",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 29,
        "tempF": 84,
        "humidity": 80
      },
      {
        "month": "May",
        "weather": "Good",
        "price": "Average",
        "tempC": 29,
        "tempF": 84,
        "humidity": 78
      },
      {
        "month": "Jun",
        "weather": "Best",
        "price": "Average",
        "tempC": 28,
        "tempF": 82,
        "humidity": 75
      },
      {
        "month": "Jul",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 28,
        "tempF": 82,
        "humidity": 72
      },
      {
        "month": "Aug",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 28,
        "tempF": 82,
        "humidity": 72
      },
      {
        "month": "Sep",
        "weather": "Good",
        "price": "Good value",
        "tempC": 29,
        "tempF": 84,
        "humidity": 73
      },
      {
        "month": "Oct",
        "weather": "Good",
        "price": "Good value",
        "tempC": 29,
        "tempF": 84,
        "humidity": 75
      },
      {
        "month": "Nov",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 29,
        "tempF": 84,
        "humidity": 78
      },
      {
        "month": "Dec",
        "weather": "Avoid",
        "price": "Most expensive",
        "tempC": 28,
        "tempF": 82,
        "humidity": 82
      }
    ]
  },
  "phoenix-hotel-yogyakarta": {
    "hotel": "The Phoenix Hotel Yogyakarta – Handwritten Collection",
    "city": "Yogyakarta",
    "country": "Indonesia",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 26,
        "tempF": 79,
        "humidity": 85
      },
      {
        "month": "Feb",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 26,
        "tempF": 79,
        "humidity": 85
      },
      {
        "month": "Mar",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": 26,
        "tempF": 79,
        "humidity": 84
      },
      {
        "month": "Apr",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 82
      },
      {
        "month": "May",
        "weather": "Good",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 80
      },
      {
        "month": "Jun",
        "weather": "Best",
        "price": "Average",
        "tempC": 26,
        "tempF": 79,
        "humidity": 78
      },
      {
        "month": "Jul",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 26,
        "tempF": 79,
        "humidity": 76
      },
      {
        "month": "Aug",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 26,
        "tempF": 79,
        "humidity": 75
      },
      {
        "month": "Sep",
        "weather": "Good",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 77
      },
      {
        "month": "Oct",
        "weather": "Good",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 80
      },
      {
        "month": "Nov",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 83
      },
      {
        "month": "Dec",
        "weather": "Avoid",
        "price": "Most expensive",
        "tempC": 26,
        "tempF": 79,
        "humidity": 85
      }
    ]
  },
  "royal-surakarta-heritage": {
    "hotel": "The Royal Surakarta Heritage – Handwritten Collection",
    "city": "Solo (Surakarta)",
    "country": "Indonesia",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 27,
        "tempF": 81,
        "humidity": 85
      },
      {
        "month": "Feb",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 27,
        "tempF": 81,
        "humidity": 85
      },
      {
        "month": "Mar",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 84
      },
      {
        "month": "Apr",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 82
      },
      {
        "month": "May",
        "weather": "Good",
        "price": "Average",
        "tempC": 27,
        "tempF": 81,
        "humidity": 80
      },
      {
        "month": "Jun",
        "weather": "Best",
        "price": "Average",
        "tempC": 26,
        "tempF": 79,
        "humidity": 78
      },
      {
        "month": "Jul",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 26,
        "tempF": 79,
        "humidity": 76
      },
      {
        "month": "Aug",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 26,
        "tempF": 79,
        "humidity": 75
      },
      {
        "month": "Sep",
        "weather": "Good",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 77
      },
      {
        "month": "Oct",
        "weather": "Good",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 80
      },
      {
        "month": "Nov",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 83
      },
      {
        "month": "Dec",
        "weather": "Avoid",
        "price": "Most expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 85
      }
    ]
  },
  "angkor-aurora-siem-reap": {
    "hotel": "Angkor Aurora",
    "city": "Siem Reap",
    "country": "Cambodia",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 26,
        "tempF": 79,
        "humidity": 67
      },
      {
        "month": "Feb",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 65
      },
      {
        "month": "Mar",
        "weather": "Good",
        "price": "Average",
        "tempC": 29,
        "tempF": 84,
        "humidity": 64
      },
      {
        "month": "Apr",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 30,
        "tempF": 86,
        "humidity": 68
      },
      {
        "month": "May",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 30,
        "tempF": 86,
        "humidity": 75
      },
      {
        "month": "Jun",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 29,
        "tempF": 84,
        "humidity": 80
      },
      {
        "month": "Jul",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 82
      },
      {
        "month": "Aug",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 83
      },
      {
        "month": "Sep",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 85
      },
      {
        "month": "Oct",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 84
      },
      {
        "month": "Nov",
        "weather": "Good",
        "price": "Good value",
        "tempC": 26,
        "tempF": 79,
        "humidity": 76
      },
      {
        "month": "Dec",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 25,
        "tempF": 77,
        "humidity": 70
      }
    ]
  },
  "raweekanlaya-bangkok": {
    "hotel": "The Raweekanlaya Bangkok Wellness Cuisine Resort",
    "city": "Bangkok",
    "country": "Thailand",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 68
      },
      {
        "month": "Feb",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 28,
        "tempF": 82,
        "humidity": 70
      },
      {
        "month": "Mar",
        "weather": "Good",
        "price": "Average",
        "tempC": 30,
        "tempF": 86,
        "humidity": 72
      },
      {
        "month": "Apr",
        "weather": "Possible",
        "price": "Average",
        "tempC": 31,
        "tempF": 88,
        "humidity": 74
      },
      {
        "month": "May",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 30,
        "tempF": 86,
        "humidity": 75
      },
      {
        "month": "Jun",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 30,
        "tempF": 86,
        "humidity": 76
      },
      {
        "month": "Jul",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": 29,
        "tempF": 84,
        "humidity": 77
      },
      {
        "month": "Aug",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": 29,
        "tempF": 84,
        "humidity": 78
      },
      {
        "month": "Sep",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 80
      },
      {
        "month": "Oct",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 80
      },
      {
        "month": "Nov",
        "weather": "Good",
        "price": "Average",
        "tempC": 28,
        "tempF": 82,
        "humidity": 73
      },
      {
        "month": "Dec",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 26,
        "tempF": 79,
        "humidity": 67
      }
    ]
  },
  "hotel-borobudur-jakarta": {
    "hotel": "Hotel Borobudur Jakarta",
    "city": "Jakarta",
    "country": "Indonesia",
    "matchedSite": false,
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
          "label": "Possible"
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
      "summary": "Best: Jun–Aug. Jakarta is driest then; Dec–Mar is wetter and can disrupt outdoor plans.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.vietjetair.com/en/destinations/experience/jakarta-weather-by-season-when-is-the-best-time-to-visit\nhttps://id.trip.com/guide/info/best-time-to-visit-jakarta.html\nhttps://www.kayak.com/Jakarta-Hotels-Hotel-Borobudur-Jakarta.41074.ksp"
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
          "label": "Most expensive"
        }
      ],
      "summary": "Cheapest: Jan–Feb and Nov. Most expensive: Dec; Jul–Aug can rise with domestic travel.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.vietjetair.com/en/destinations/experience/jakarta-weather-by-season-when-is-the-best-time-to-visit\nhttps://id.trip.com/guide/info/best-time-to-visit-jakarta.html\nhttps://www.kayak.com/Jakarta-Hotels-Hotel-Borobudur-Jakarta.41074.ksp"
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 27,
        "tempF": 81,
        "humidity": 82
      },
      {
        "month": "Feb",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 27,
        "tempF": 81,
        "humidity": 82
      },
      {
        "month": "Mar",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": 28,
        "tempF": 82,
        "humidity": 81
      },
      {
        "month": "Apr",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 28,
        "tempF": 82,
        "humidity": 80
      },
      {
        "month": "May",
        "weather": "Good",
        "price": "Average",
        "tempC": 28,
        "tempF": 82,
        "humidity": 79
      },
      {
        "month": "Jun",
        "weather": "Best",
        "price": "Average",
        "tempC": 28,
        "tempF": 82,
        "humidity": 78
      },
      {
        "month": "Jul",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 28,
        "tempF": 82,
        "humidity": 77
      },
      {
        "month": "Aug",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 28,
        "tempF": 82,
        "humidity": 76
      },
      {
        "month": "Sep",
        "weather": "Good",
        "price": "Average",
        "tempC": 28,
        "tempF": 82,
        "humidity": 76
      },
      {
        "month": "Oct",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 28,
        "tempF": 82,
        "humidity": 77
      },
      {
        "month": "Nov",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 79
      },
      {
        "month": "Dec",
        "weather": "Avoid",
        "price": "Most expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 81
      }
    ]
  },
  "steigenberger-resort-achti-luxor": {
    "hotel": "Steigenberger Resort Achti Luxor",
    "city": "Luxor",
    "country": "Egypt",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 14,
        "tempF": 57,
        "humidity": 45
      },
      {
        "month": "Feb",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 16,
        "tempF": 61,
        "humidity": 38
      },
      {
        "month": "Mar",
        "weather": "Good",
        "price": "Expensive",
        "tempC": 20,
        "tempF": 68,
        "humidity": 30
      },
      {
        "month": "Apr",
        "weather": "Good",
        "price": "Average",
        "tempC": 26,
        "tempF": 79,
        "humidity": 25
      },
      {
        "month": "May",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 30,
        "tempF": 86,
        "humidity": 22
      },
      {
        "month": "Jun",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 33,
        "tempF": 91,
        "humidity": 22
      },
      {
        "month": "Jul",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 34,
        "tempF": 93,
        "humidity": 24
      },
      {
        "month": "Aug",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 33,
        "tempF": 91,
        "humidity": 27
      },
      {
        "month": "Sep",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 31,
        "tempF": 88,
        "humidity": 30
      },
      {
        "month": "Oct",
        "weather": "Good",
        "price": "Average",
        "tempC": 27,
        "tempF": 81,
        "humidity": 36
      },
      {
        "month": "Nov",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 21,
        "tempF": 70,
        "humidity": 43
      },
      {
        "month": "Dec",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 16,
        "tempF": 61,
        "humidity": 48
      }
    ]
  },
  "pleiada-boutique-hotel-iasi": {
    "hotel": "Pleiada Boutique Hotel & Spa",
    "city": "Iași",
    "country": "Romania",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": -3,
        "tempF": 27,
        "humidity": 85
      },
      {
        "month": "Feb",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": -1,
        "tempF": 30,
        "humidity": 82
      },
      {
        "month": "Mar",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 4,
        "tempF": 39,
        "humidity": 75
      },
      {
        "month": "Apr",
        "weather": "Good",
        "price": "Good value",
        "tempC": 11,
        "tempF": 52,
        "humidity": 68
      },
      {
        "month": "May",
        "weather": "Best",
        "price": "Average",
        "tempC": 16,
        "tempF": 61,
        "humidity": 68
      },
      {
        "month": "Jun",
        "weather": "Best",
        "price": "Average",
        "tempC": 20,
        "tempF": 68,
        "humidity": 70
      },
      {
        "month": "Jul",
        "weather": "Possible",
        "price": "Expensive",
        "tempC": 21,
        "tempF": 70,
        "humidity": 69
      },
      {
        "month": "Aug",
        "weather": "Possible",
        "price": "Expensive",
        "tempC": 21,
        "tempF": 70,
        "humidity": 70
      },
      {
        "month": "Sep",
        "weather": "Best",
        "price": "Average",
        "tempC": 16,
        "tempF": 61,
        "humidity": 74
      },
      {
        "month": "Oct",
        "weather": "Good",
        "price": "Good value",
        "tempC": 10,
        "tempF": 50,
        "humidity": 79
      },
      {
        "month": "Nov",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 4,
        "tempF": 39,
        "humidity": 85
      },
      {
        "month": "Dec",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": -1,
        "tempF": 30,
        "humidity": 87
      }
    ]
  },
  "silk-path-grand-hue": {
    "hotel": "Silk Path Grand Hue Hotel & Spa",
    "city": "Hue",
    "country": "Vietnam",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Good",
        "price": "Average",
        "tempC": 20,
        "tempF": 68,
        "humidity": 90
      },
      {
        "month": "Feb",
        "weather": "Best",
        "price": "Average",
        "tempC": 21,
        "tempF": 70,
        "humidity": 88
      },
      {
        "month": "Mar",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 23,
        "tempF": 73,
        "humidity": 85
      },
      {
        "month": "Apr",
        "weather": "Best",
        "price": "Average",
        "tempC": 26,
        "tempF": 79,
        "humidity": 82
      },
      {
        "month": "May",
        "weather": "Good",
        "price": "Good value",
        "tempC": 28,
        "tempF": 82,
        "humidity": 78
      },
      {
        "month": "Jun",
        "weather": "Good",
        "price": "Good value",
        "tempC": 29,
        "tempF": 84,
        "humidity": 75
      },
      {
        "month": "Jul",
        "weather": "Possible",
        "price": "Expensive",
        "tempC": 29,
        "tempF": 84,
        "humidity": 73
      },
      {
        "month": "Aug",
        "weather": "Possible",
        "price": "Expensive",
        "tempC": 29,
        "tempF": 84,
        "humidity": 75
      },
      {
        "month": "Sep",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 27,
        "tempF": 81,
        "humidity": 82
      },
      {
        "month": "Oct",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 25,
        "tempF": 77,
        "humidity": 87
      },
      {
        "month": "Nov",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 23,
        "tempF": 73,
        "humidity": 89
      },
      {
        "month": "Dec",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 21,
        "tempF": 70,
        "humidity": 90
      }
    ]
  },
  "royale-chulan-kuala-lumpur": {
    "hotel": "Royale Chulan Kuala Lumpur",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "matchedSite": false,
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
      "summary": "Best: Jan–Feb; Jun–Jul. Kuala Lumpur is year-round, but these months are relatively easier.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.selectiveasia.com/malaysia-holidays/weather\nhttps://lowseasontraveller.com/destination/kuala-lumpur\nhttps://ph.trip.com/guide/info/best-time-to-visit-kuala-lumpur.html\nhttps://www.kayak.com/Kuala-Lumpur-Hotels-Royale-Chulan-Kuala-Lumpur.311419.ksp"
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
          "label": "Cheapest"
        },
        {
          "month": "Apr",
          "label": "Cheapest"
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
          "label": "Average"
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
      "summary": "Cheapest: Mar–Apr; Oct. Most expensive: Dec; prices also rise around major holidays.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.selectiveasia.com/malaysia-holidays/weather\nhttps://lowseasontraveller.com/destination/kuala-lumpur\nhttps://ph.trip.com/guide/info/best-time-to-visit-kuala-lumpur.html\nhttps://www.kayak.com/Kuala-Lumpur-Hotels-Royale-Chulan-Kuala-Lumpur.311419.ksp"
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 80
      },
      {
        "month": "Feb",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 78
      },
      {
        "month": "Mar",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 78
      },
      {
        "month": "Apr",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 80
      },
      {
        "month": "May",
        "weather": "Good",
        "price": "Good value",
        "tempC": 28,
        "tempF": 82,
        "humidity": 80
      },
      {
        "month": "Jun",
        "weather": "Best",
        "price": "Average",
        "tempC": 28,
        "tempF": 82,
        "humidity": 78
      },
      {
        "month": "Jul",
        "weather": "Best",
        "price": "Average",
        "tempC": 28,
        "tempF": 82,
        "humidity": 77
      },
      {
        "month": "Aug",
        "weather": "Good",
        "price": "Expensive",
        "tempC": 28,
        "tempF": 82,
        "humidity": 78
      },
      {
        "month": "Sep",
        "weather": "Good",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 80
      },
      {
        "month": "Oct",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 27,
        "tempF": 81,
        "humidity": 82
      },
      {
        "month": "Nov",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 84
      },
      {
        "month": "Dec",
        "weather": "Good",
        "price": "Most expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 83
      }
    ]
  },
  "stamba-hotel-tbilisi": {
    "hotel": "Stamba Hotel",
    "city": "Tbilisi",
    "country": "Georgia",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 1,
        "tempF": 34,
        "humidity": 75
      },
      {
        "month": "Feb",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 2,
        "tempF": 36,
        "humidity": 72
      },
      {
        "month": "Mar",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 6,
        "tempF": 43,
        "humidity": 68
      },
      {
        "month": "Apr",
        "weather": "Good",
        "price": "Average",
        "tempC": 12,
        "tempF": 54,
        "humidity": 65
      },
      {
        "month": "May",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 16,
        "tempF": 61,
        "humidity": 68
      },
      {
        "month": "Jun",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 21,
        "tempF": 70,
        "humidity": 66
      },
      {
        "month": "Jul",
        "weather": "Possible",
        "price": "Average",
        "tempC": 24,
        "tempF": 75,
        "humidity": 60
      },
      {
        "month": "Aug",
        "weather": "Possible",
        "price": "Average",
        "tempC": 24,
        "tempF": 75,
        "humidity": 60
      },
      {
        "month": "Sep",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 19,
        "tempF": 66,
        "humidity": 66
      },
      {
        "month": "Oct",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 13,
        "tempF": 55,
        "humidity": 72
      },
      {
        "month": "Nov",
        "weather": "Good",
        "price": "Cheapest",
        "tempC": 7,
        "tempF": 45,
        "humidity": 76
      },
      {
        "month": "Dec",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 3,
        "tempF": 37,
        "humidity": 77
      }
    ]
  },
  "grand-hotel-yerevan": {
    "hotel": "Grand Hotel Yerevan – Small Luxury Hotels of the World",
    "city": "Yerevan",
    "country": "Armenia",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": -3,
        "tempF": 27,
        "humidity": 78
      },
      {
        "month": "Feb",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 0,
        "tempF": 32,
        "humidity": 72
      },
      {
        "month": "Mar",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 6,
        "tempF": 43,
        "humidity": 62
      },
      {
        "month": "Apr",
        "weather": "Good",
        "price": "Average",
        "tempC": 12,
        "tempF": 54,
        "humidity": 58
      },
      {
        "month": "May",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 17,
        "tempF": 63,
        "humidity": 58
      },
      {
        "month": "Jun",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 22,
        "tempF": 72,
        "humidity": 50
      },
      {
        "month": "Jul",
        "weather": "Possible",
        "price": "Average",
        "tempC": 26,
        "tempF": 79,
        "humidity": 45
      },
      {
        "month": "Aug",
        "weather": "Possible",
        "price": "Average",
        "tempC": 25,
        "tempF": 77,
        "humidity": 46
      },
      {
        "month": "Sep",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 20,
        "tempF": 68,
        "humidity": 52
      },
      {
        "month": "Oct",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 13,
        "tempF": 55,
        "humidity": 63
      },
      {
        "month": "Nov",
        "weather": "Good",
        "price": "Good value",
        "tempC": 6,
        "tempF": 43,
        "humidity": 72
      },
      {
        "month": "Dec",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": 0,
        "tempF": 32,
        "humidity": 78
      }
    ]
  },
  "hyatt-regency-tashkent": {
    "hotel": "Hyatt Regency Tashkent",
    "city": "Tashkent",
    "country": "Uzbekistan",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 1,
        "tempF": 34,
        "humidity": 75
      },
      {
        "month": "Feb",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 3,
        "tempF": 37,
        "humidity": 70
      },
      {
        "month": "Mar",
        "weather": "Good",
        "price": "Average",
        "tempC": 9,
        "tempF": 48,
        "humidity": 65
      },
      {
        "month": "Apr",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 16,
        "tempF": 61,
        "humidity": 58
      },
      {
        "month": "May",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 21,
        "tempF": 70,
        "humidity": 52
      },
      {
        "month": "Jun",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 26,
        "tempF": 79,
        "humidity": 42
      },
      {
        "month": "Jul",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 40
      },
      {
        "month": "Aug",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 26,
        "tempF": 79,
        "humidity": 42
      },
      {
        "month": "Sep",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 21,
        "tempF": 70,
        "humidity": 46
      },
      {
        "month": "Oct",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 14,
        "tempF": 57,
        "humidity": 58
      },
      {
        "month": "Nov",
        "weather": "Good",
        "price": "Good value",
        "tempC": 8,
        "tempF": 46,
        "humidity": 68
      },
      {
        "month": "Dec",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 3,
        "tempF": 37,
        "humidity": 75
      }
    ]
  },
  "sofitel-marrakech": {
    "hotel": "Sofitel Marrakech Lounge & Spa",
    "city": "Marrakech",
    "country": "Morocco",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 12,
        "tempF": 54,
        "humidity": 60
      },
      {
        "month": "Feb",
        "weather": "Good",
        "price": "Cheapest",
        "tempC": 14,
        "tempF": 57,
        "humidity": 55
      },
      {
        "month": "Mar",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 17,
        "tempF": 63,
        "humidity": 50
      },
      {
        "month": "Apr",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 19,
        "tempF": 66,
        "humidity": 48
      },
      {
        "month": "May",
        "weather": "Best",
        "price": "Average",
        "tempC": 23,
        "tempF": 73,
        "humidity": 45
      },
      {
        "month": "Jun",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 40
      },
      {
        "month": "Jul",
        "weather": "Avoid",
        "price": "Average",
        "tempC": 30,
        "tempF": 86,
        "humidity": 38
      },
      {
        "month": "Aug",
        "weather": "Avoid",
        "price": "Average",
        "tempC": 30,
        "tempF": 86,
        "humidity": 40
      },
      {
        "month": "Sep",
        "weather": "Good",
        "price": "Good value",
        "tempC": 26,
        "tempF": 79,
        "humidity": 48
      },
      {
        "month": "Oct",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 22,
        "tempF": 72,
        "humidity": 55
      },
      {
        "month": "Nov",
        "weather": "Best",
        "price": "Cheapest",
        "tempC": 17,
        "tempF": 63,
        "humidity": 60
      },
      {
        "month": "Dec",
        "weather": "Good",
        "price": "Good value",
        "tempC": 13,
        "tempF": 55,
        "humidity": 63
      }
    ]
  },
  "malak-regency-sarajevo": {
    "hotel": "Malak Regency Hotel",
    "city": "Sarajevo (Ilidža)",
    "country": "Bosnia and Herzegovina",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": 0,
        "tempF": 32,
        "humidity": 80
      },
      {
        "month": "Feb",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 2,
        "tempF": 36,
        "humidity": 76
      },
      {
        "month": "Mar",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 6,
        "tempF": 43,
        "humidity": 70
      },
      {
        "month": "Apr",
        "weather": "Good",
        "price": "Average",
        "tempC": 11,
        "tempF": 52,
        "humidity": 68
      },
      {
        "month": "May",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 16,
        "tempF": 61,
        "humidity": 70
      },
      {
        "month": "Jun",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 19,
        "tempF": 66,
        "humidity": 70
      },
      {
        "month": "Jul",
        "weather": "Good",
        "price": "Most expensive",
        "tempC": 21,
        "tempF": 70,
        "humidity": 68
      },
      {
        "month": "Aug",
        "weather": "Good",
        "price": "Most expensive",
        "tempC": 21,
        "tempF": 70,
        "humidity": 70
      },
      {
        "month": "Sep",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 16,
        "tempF": 61,
        "humidity": 75
      },
      {
        "month": "Oct",
        "weather": "Good",
        "price": "Average",
        "tempC": 11,
        "tempF": 52,
        "humidity": 78
      },
      {
        "month": "Nov",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 5,
        "tempF": 41,
        "humidity": 80
      },
      {
        "month": "Dec",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": 1,
        "tempF": 34,
        "humidity": 82
      }
    ]
  },
  "majestic-hotel-kuala-lumpur": {
    "hotel": "The Majestic Hotel Kuala Lumpur, Autograph Collection",
    "city": "Kuala Lumpur",
    "country": "Malaysia",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 80
      },
      {
        "month": "Feb",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 78
      },
      {
        "month": "Mar",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 28,
        "tempF": 82,
        "humidity": 78
      },
      {
        "month": "Apr",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 28,
        "tempF": 82,
        "humidity": 80
      },
      {
        "month": "May",
        "weather": "Good",
        "price": "Good value",
        "tempC": 28,
        "tempF": 82,
        "humidity": 80
      },
      {
        "month": "Jun",
        "weather": "Best",
        "price": "Average",
        "tempC": 28,
        "tempF": 82,
        "humidity": 78
      },
      {
        "month": "Jul",
        "weather": "Best",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 77
      },
      {
        "month": "Aug",
        "weather": "Good",
        "price": "Average",
        "tempC": 28,
        "tempF": 82,
        "humidity": 78
      },
      {
        "month": "Sep",
        "weather": "Good",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 80
      },
      {
        "month": "Oct",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 27,
        "tempF": 81,
        "humidity": 82
      },
      {
        "month": "Nov",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 84
      },
      {
        "month": "Dec",
        "weather": "Good",
        "price": "Most expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 83
      }
    ]
  },
  "boton-blue-nha-trang": {
    "hotel": "Boton Blue Hotel & Spa",
    "city": "Nha Trang",
    "country": "Vietnam",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Good",
        "price": "Average",
        "tempC": 24,
        "tempF": 75,
        "humidity": 78
      },
      {
        "month": "Feb",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 25,
        "tempF": 77,
        "humidity": 78
      },
      {
        "month": "Mar",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 79
      },
      {
        "month": "Apr",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 28,
        "tempF": 82,
        "humidity": 78
      },
      {
        "month": "May",
        "weather": "Good",
        "price": "Average",
        "tempC": 29,
        "tempF": 84,
        "humidity": 76
      },
      {
        "month": "Jun",
        "weather": "Good",
        "price": "Average",
        "tempC": 29,
        "tempF": 84,
        "humidity": 74
      },
      {
        "month": "Jul",
        "weather": "Possible",
        "price": "Most expensive",
        "tempC": 29,
        "tempF": 84,
        "humidity": 73
      },
      {
        "month": "Aug",
        "weather": "Possible",
        "price": "Most expensive",
        "tempC": 29,
        "tempF": 84,
        "humidity": 74
      },
      {
        "month": "Sep",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 28,
        "tempF": 82,
        "humidity": 78
      },
      {
        "month": "Oct",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 27,
        "tempF": 81,
        "humidity": 82
      },
      {
        "month": "Nov",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 26,
        "tempF": 79,
        "humidity": 82
      },
      {
        "month": "Dec",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 25,
        "tempF": 77,
        "humidity": 80
      }
    ]
  },
  "im-hotel-makati": {
    "hotel": "I'M Hotel Makati",
    "city": "Makati",
    "country": "Philippines",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 72
      },
      {
        "month": "Feb",
        "weather": "Best",
        "price": "Average",
        "tempC": 28,
        "tempF": 82,
        "humidity": 70
      },
      {
        "month": "Mar",
        "weather": "Good",
        "price": "Average",
        "tempC": 29,
        "tempF": 84,
        "humidity": 68
      },
      {
        "month": "Apr",
        "weather": "Good",
        "price": "Average",
        "tempC": 31,
        "tempF": 88,
        "humidity": 68
      },
      {
        "month": "May",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 31,
        "tempF": 88,
        "humidity": 72
      },
      {
        "month": "Jun",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 30,
        "tempF": 86,
        "humidity": 78
      },
      {
        "month": "Jul",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 29,
        "tempF": 84,
        "humidity": 80
      },
      {
        "month": "Aug",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 29,
        "tempF": 84,
        "humidity": 81
      },
      {
        "month": "Sep",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 29,
        "tempF": 84,
        "humidity": 81
      },
      {
        "month": "Oct",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 29,
        "tempF": 84,
        "humidity": 80
      },
      {
        "month": "Nov",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 28,
        "tempF": 82,
        "humidity": 77
      },
      {
        "month": "Dec",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 74
      }
    ]
  },
  "real-marina-olhao": {
    "hotel": "Real Marina Hotel & Spa",
    "city": "Olhão",
    "country": "Portugal",
    "matchedSite": true,
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
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 12,
        "tempF": 54,
        "humidity": 78
      },
      {
        "month": "Feb",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 13,
        "tempF": 55,
        "humidity": 76
      },
      {
        "month": "Mar",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 15,
        "tempF": 59,
        "humidity": 73
      },
      {
        "month": "Apr",
        "weather": "Good",
        "price": "Good value",
        "tempC": 16,
        "tempF": 61,
        "humidity": 70
      },
      {
        "month": "May",
        "weather": "Best",
        "price": "Average",
        "tempC": 19,
        "tempF": 66,
        "humidity": 70
      },
      {
        "month": "Jun",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 22,
        "tempF": 72,
        "humidity": 70
      },
      {
        "month": "Jul",
        "weather": "Good",
        "price": "Most expensive",
        "tempC": 24,
        "tempF": 75,
        "humidity": 68
      },
      {
        "month": "Aug",
        "weather": "Good",
        "price": "Most expensive",
        "tempC": 24,
        "tempF": 75,
        "humidity": 70
      },
      {
        "month": "Sep",
        "weather": "Best",
        "price": "Average",
        "tempC": 23,
        "tempF": 73,
        "humidity": 73
      },
      {
        "month": "Oct",
        "weather": "Good",
        "price": "Good value",
        "tempC": 19,
        "tempF": 66,
        "humidity": 76
      },
      {
        "month": "Nov",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 15,
        "tempF": 59,
        "humidity": 78
      },
      {
        "month": "Dec",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 13,
        "tempF": 55,
        "humidity": 80
      }
    ]
  },
  "nh-collection-bogota-wtc-royal": {
    "hotel": "NH Collection Bogotá WTC Royal",
    "city": "Bogotá",
    "country": "Colombia",
    "matchedSite": false,
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
          "label": "Best"
        },
        {
          "month": "Apr",
          "label": "Avoid"
        },
        {
          "month": "May",
          "label": "Possible"
        },
        {
          "month": "Jun",
          "label": "Good"
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
          "label": "Possible"
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
      "summary": "Best: Dec–Mar. Drier Bogotá weather; Apr and Oct are usually wetter.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.intrepidtravel.com/nl/colombia/best-time-to-visit-colombia\nhttps://www.tomplanmytrip.com/best-time-to-travel-to-colombia-tips/\nhttps://www.kayak.nl/Bogota-Hotels-NH-Collection-Bogota-Wtc-Royal.26415.ksp"
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
          "label": "Good value"
        },
        {
          "month": "Mar",
          "label": "Average"
        },
        {
          "month": "Apr",
          "label": "Cheapest"
        },
        {
          "month": "May",
          "label": "Cheapest"
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
          "label": "Average"
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
          "label": "Most expensive"
        }
      ],
      "summary": "Cheapest: Apr–May; Sep–Nov. Most expensive: Dec; holiday periods can lift rates.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Tet, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.intrepidtravel.com/nl/colombia/best-time-to-visit-colombia\nhttps://www.tomplanmytrip.com/best-time-to-travel-to-colombia-tips/\nhttps://www.kayak.nl/Bogota-Hotels-NH-Collection-Bogota-Wtc-Royal.26415.ksp"
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Best",
        "price": "Good value",
        "tempC": 13,
        "tempF": 55,
        "humidity": 77
      },
      {
        "month": "Feb",
        "weather": "Best",
        "price": "Good value",
        "tempC": 14,
        "tempF": 57,
        "humidity": 77
      },
      {
        "month": "Mar",
        "weather": "Best",
        "price": "Average",
        "tempC": 14,
        "tempF": 57,
        "humidity": 78
      },
      {
        "month": "Apr",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 14,
        "tempF": 57,
        "humidity": 80
      },
      {
        "month": "May",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 14,
        "tempF": 57,
        "humidity": 80
      },
      {
        "month": "Jun",
        "weather": "Good",
        "price": "Good value",
        "tempC": 13,
        "tempF": 55,
        "humidity": 79
      },
      {
        "month": "Jul",
        "weather": "Good",
        "price": "Expensive",
        "tempC": 13,
        "tempF": 55,
        "humidity": 77
      },
      {
        "month": "Aug",
        "weather": "Good",
        "price": "Average",
        "tempC": 13,
        "tempF": 55,
        "humidity": 77
      },
      {
        "month": "Sep",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 13,
        "tempF": 55,
        "humidity": 78
      },
      {
        "month": "Oct",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 13,
        "tempF": 55,
        "humidity": 80
      },
      {
        "month": "Nov",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 13,
        "tempF": 55,
        "humidity": 80
      },
      {
        "month": "Dec",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 13,
        "tempF": 55,
        "humidity": 79
      }
    ]
  },
  "graffit-gallery-varna": {
    "hotel": "Graffit Gallery Varna",
    "city": "Varna",
    "country": "Bulgaria",
    "matchedSite": true,
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
      "summary": "Best: Jun–Sep. Warm Black Sea weather is strongest; Apr–May and Oct are calmer shoulder months.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.climatestotravel.com/climate/bulgaria/varna\nhttps://www.kayak.com/Varna-Hotels-Graffit-Gallery-Design-Hotel.601871.ksp\nhttps://www.kayak.ie/Varna-Hotels.12778.hotel.ksp\nhttps://www.skyscanner.net/hotels/bulgaria/varna-hotels/ci-27547366"
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
          "label": "Cheapest"
        },
        {
          "month": "May",
          "label": "Good value"
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
          "label": "Cheapest"
        }
      ],
      "summary": "Cheapest: Nov–Feb; Apr. Most expensive: Jul–Aug; June and September can rise around Black Sea season.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Christmas/New Year, school holidays and local festivals move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.climatestotravel.com/climate/bulgaria/varna\nhttps://www.kayak.com/Varna-Hotels-Graffit-Gallery-Design-Hotel.601871.ksp\nhttps://www.kayak.ie/Varna-Hotels.12778.hotel.ksp\nhttps://www.skyscanner.net/hotels/bulgaria/varna-hotels/ci-27547366"
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 2,
        "tempF": 36,
        "humidity": 80
      },
      {
        "month": "Feb",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 3,
        "tempF": 37,
        "humidity": 78
      },
      {
        "month": "Mar",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 6,
        "tempF": 43,
        "humidity": 76
      },
      {
        "month": "Apr",
        "weather": "Good",
        "price": "Cheapest",
        "tempC": 11,
        "tempF": 52,
        "humidity": 74
      },
      {
        "month": "May",
        "weather": "Good",
        "price": "Good value",
        "tempC": 16,
        "tempF": 61,
        "humidity": 74
      },
      {
        "month": "Jun",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 21,
        "tempF": 70,
        "humidity": 72
      },
      {
        "month": "Jul",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 23,
        "tempF": 73,
        "humidity": 70
      },
      {
        "month": "Aug",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 23,
        "tempF": 73,
        "humidity": 70
      },
      {
        "month": "Sep",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 19,
        "tempF": 66,
        "humidity": 74
      },
      {
        "month": "Oct",
        "weather": "Good",
        "price": "Average",
        "tempC": 14,
        "tempF": 57,
        "humidity": 78
      },
      {
        "month": "Nov",
        "weather": "Possible",
        "price": "Cheapest",
        "tempC": 9,
        "tempF": 48,
        "humidity": 80
      },
      {
        "month": "Dec",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 4,
        "tempF": 39,
        "humidity": 82
      }
    ]
  },
  "hermitage-jakarta": {
    "hotel": "The Hermitage Jakarta",
    "city": "Jakarta",
    "country": "Indonesia",
    "matchedSite": true,
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
          "label": "Possible"
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
      "summary": "Best: Jun–Aug. Jakarta is driest then; Dec–Mar is wetter and can disrupt outdoor plans.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://www.traveloka.com/en-sg/explore/guides/jakarta-weather-temperature-forecast/1002862\nhttps://www.vietjetair.com/en/pages/jakarta-weather-by-season-when-is-the-best-time-to-visit-1698723800683\nhttps://www.kayak.com/Jakarta-Hotels-The-Hermitage-a-Tribute-Portfolio-Hotel-Jakarta.742864.ksp\nhttps://www.kayak.com/Jakarta-Hotels.22380.hotel.ksp"
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
          "label": "Good value"
        },
        {
          "month": "Mar",
          "label": "Cheapest"
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
          "label": "Expensive"
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
          "label": "Expensive"
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
      "summary": "Cheapest: Mar; Sep. Most expensive: Dec; Apr, Jul and Oct can rise with business and holiday demand.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Chinese New Year, Christmas/New Year, school holidays and local events move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://www.traveloka.com/en-sg/explore/guides/jakarta-weather-temperature-forecast/1002862\nhttps://www.vietjetair.com/en/pages/jakarta-weather-by-season-when-is-the-best-time-to-visit-1698723800683\nhttps://www.kayak.com/Jakarta-Hotels-The-Hermitage-a-Tribute-Portfolio-Hotel-Jakarta.742864.ksp\nhttps://www.kayak.com/Jakarta-Hotels.22380.hotel.ksp"
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 82
      },
      {
        "month": "Feb",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": 27,
        "tempF": 81,
        "humidity": 82
      },
      {
        "month": "Mar",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 81
      },
      {
        "month": "Apr",
        "weather": "Possible",
        "price": "Expensive",
        "tempC": 28,
        "tempF": 82,
        "humidity": 80
      },
      {
        "month": "May",
        "weather": "Good",
        "price": "Average",
        "tempC": 28,
        "tempF": 82,
        "humidity": 79
      },
      {
        "month": "Jun",
        "weather": "Best",
        "price": "Average",
        "tempC": 28,
        "tempF": 82,
        "humidity": 78
      },
      {
        "month": "Jul",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 28,
        "tempF": 82,
        "humidity": 77
      },
      {
        "month": "Aug",
        "weather": "Best",
        "price": "Good value",
        "tempC": 28,
        "tempF": 82,
        "humidity": 76
      },
      {
        "month": "Sep",
        "weather": "Good",
        "price": "Cheapest",
        "tempC": 28,
        "tempF": 82,
        "humidity": 76
      },
      {
        "month": "Oct",
        "weather": "Possible",
        "price": "Expensive",
        "tempC": 28,
        "tempF": 82,
        "humidity": 77
      },
      {
        "month": "Nov",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 28,
        "tempF": 82,
        "humidity": 79
      },
      {
        "month": "Dec",
        "weather": "Avoid",
        "price": "Most expensive",
        "tempC": 27,
        "tempF": 81,
        "humidity": 81
      }
    ]
  },
  "millennium-downtown-abu-dhabi": {
    "hotel": "Millennium Downtown Abu Dhabi",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "matchedSite": true,
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
          "label": "Best"
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
          "label": "Avoid"
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
      "summary": "Best: Nov–Mar. Comfortable outdoor weather; Jun–Sep is usually too hot for most leisure plans.",
      "notes": "Avoid means simply not ideal, not impossible. Moving holidays/festivals may change crowds year by year.",
      "confidenceLevel": "High",
      "lastChecked": "2026-05-30",
      "sources": "https://visitabudhabi.ae/en/plan-your-trip/essential-info/weather-in-abu-dhabi\nhttps://visitabudhabi.ae/en/plan-your-trip/article-hub/things-to-do-by-season\nhttps://www.kayak.com/Abu-Dhabi-Hotels-Crowne-Plaza-Abu-Dhabi.159847.ksp\nhttps://www.kayak.com/Abu-Dhabi-Hotels.9457.hotel.ksp"
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
          "label": "Most expensive"
        },
        {
          "month": "Mar",
          "label": "Cheapest"
        },
        {
          "month": "Apr",
          "label": "Cheapest"
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
      "summary": "Cheapest: Mar–Apr; Jun–Aug. Most expensive: Dec–Feb; November can rise with winter demand and events.",
      "notes": "Most expensive is used only where the evidence is strong. Ramadan/Eid, Easter, Christmas/New Year, school holidays and major Abu Dhabi events move year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-05-30",
      "sources": "https://visitabudhabi.ae/en/plan-your-trip/essential-info/weather-in-abu-dhabi\nhttps://visitabudhabi.ae/en/plan-your-trip/article-hub/things-to-do-by-season\nhttps://www.kayak.com/Abu-Dhabi-Hotels-Crowne-Plaza-Abu-Dhabi.159847.ksp\nhttps://www.kayak.com/Abu-Dhabi-Hotels.9457.hotel.ksp"
    },
    "months": [
      {
        "month": "Jan",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 19,
        "tempF": 66,
        "humidity": 65
      },
      {
        "month": "Feb",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 20,
        "tempF": 68,
        "humidity": 65
      },
      {
        "month": "Mar",
        "weather": "Best",
        "price": "Cheapest",
        "tempC": 23,
        "tempF": 73,
        "humidity": 60
      },
      {
        "month": "Apr",
        "weather": "Good",
        "price": "Cheapest",
        "tempC": 27,
        "tempF": 81,
        "humidity": 55
      },
      {
        "month": "May",
        "weather": "Possible",
        "price": "Good value",
        "tempC": 31,
        "tempF": 88,
        "humidity": 55
      },
      {
        "month": "Jun",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 33,
        "tempF": 91,
        "humidity": 58
      },
      {
        "month": "Jul",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 35,
        "tempF": 95,
        "humidity": 55
      },
      {
        "month": "Aug",
        "weather": "Avoid",
        "price": "Cheapest",
        "tempC": 35,
        "tempF": 95,
        "humidity": 58
      },
      {
        "month": "Sep",
        "weather": "Avoid",
        "price": "Good value",
        "tempC": 32,
        "tempF": 90,
        "humidity": 60
      },
      {
        "month": "Oct",
        "weather": "Good",
        "price": "Average",
        "tempC": 29,
        "tempF": 84,
        "humidity": 60
      },
      {
        "month": "Nov",
        "weather": "Best",
        "price": "Expensive",
        "tempC": 25,
        "tempF": 77,
        "humidity": 62
      },
      {
        "month": "Dec",
        "weather": "Best",
        "price": "Most expensive",
        "tempC": 21,
        "tempF": 70,
        "humidity": 66
      }
    ]
  },
  "bar-peepal-resort-pokhara": {
    "hotel": "Bar Peepal Resort",
    "city": "Pokhara",
    "country": "Nepal",
    "matchedSite": true,
    "weather": {
      "title": "Best time for weather",
      "months": [
        { "month": "Jan", "label": "Best" },
        { "month": "Feb", "label": "Best" },
        { "month": "Mar", "label": "Good" },
        { "month": "Apr", "label": "Good" },
        { "month": "May", "label": "Possible" },
        { "month": "Jun", "label": "Avoid" },
        { "month": "Jul", "label": "Avoid" },
        { "month": "Aug", "label": "Avoid" },
        { "month": "Sep", "label": "Avoid" },
        { "month": "Oct", "label": "Best" },
        { "month": "Nov", "label": "Best" },
        { "month": "Dec", "label": "Good" }
      ],
      "summary": "Best: Oct–Nov and Jan–Feb. Peak clarity for Annapurna views. Jun–Sep is monsoon — avoid unless the price trade-off is compelling.",
      "notes": "Avoid means simply not ideal, not impossible. Monsoon timing shifts year to year, and clear mountain mornings can still appear in the shoulder months.",
      "confidenceLevel": "High",
      "lastChecked": "2026-06-05",
      "sources": "https://www.holidify.com/places/pokhara/best-time-to-visit.html\nhttps://weather-and-climate.com/average-monthly-Rainfall-Temperature-Sunshine,pokhara,Nepal"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        { "month": "Jan", "label": "Average" },
        { "month": "Feb", "label": "Average" },
        { "month": "Mar", "label": "Good value" },
        { "month": "Apr", "label": "Good value" },
        { "month": "May", "label": "Cheapest" },
        { "month": "Jun", "label": "Cheapest" },
        { "month": "Jul", "label": "Cheapest" },
        { "month": "Aug", "label": "Cheapest" },
        { "month": "Sep", "label": "Cheapest" },
        { "month": "Oct", "label": "Expensive" },
        { "month": "Nov", "label": "Most expensive" },
        { "month": "Dec", "label": "Expensive" }
      ],
      "summary": "Cheapest: Jun–Sep (monsoon). Most expensive: Oct–Nov. Best weather-to-price balance: Jan–Feb and Mar–Apr.",
      "notes": "Rates move with trekking demand; peak season (Oct–Nov) and the winter view window (Jan–Feb) carry the highest prices.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-06-05",
      "sources": "https://www.booking.com/hotel/np/bar-peepal-resort.html"
    },
    "months": [
      { "month": "Jan", "weather": "Best", "price": "Average", "tempC": 10, "tempF": 50, "humidity": 75 },
      { "month": "Feb", "weather": "Best", "price": "Average", "tempC": 13, "tempF": 55, "humidity": 70 },
      { "month": "Mar", "weather": "Good", "price": "Good value", "tempC": 18, "tempF": 64, "humidity": 65 },
      { "month": "Apr", "weather": "Good", "price": "Good value", "tempC": 22, "tempF": 72, "humidity": 68 },
      { "month": "May", "weather": "Possible", "price": "Cheapest", "tempC": 24, "tempF": 75, "humidity": 75 },
      { "month": "Jun", "weather": "Avoid", "price": "Cheapest", "tempC": 25, "tempF": 77, "humidity": 88 },
      { "month": "Jul", "weather": "Avoid", "price": "Cheapest", "tempC": 25, "tempF": 77, "humidity": 90 },
      { "month": "Aug", "weather": "Avoid", "price": "Cheapest", "tempC": 25, "tempF": 77, "humidity": 90 },
      { "month": "Sep", "weather": "Avoid", "price": "Cheapest", "tempC": 24, "tempF": 75, "humidity": 88 },
      { "month": "Oct", "weather": "Best", "price": "Expensive", "tempC": 20, "tempF": 68, "humidity": 72 },
      { "month": "Nov", "weather": "Best", "price": "Most expensive", "tempC": 15, "tempF": 59, "humidity": 70 },
      { "month": "Dec", "weather": "Good", "price": "Expensive", "tempC": 11, "tempF": 52, "humidity": 74 }
    ]
  },
  "mansion-merida-boutique-hotel": {
    "hotel": "Mansion Merida Boutique Hotel",
    "city": "Merida",
    "country": "Mexico",
    "matchedSite": true,
    "weather": {
      "title": "Best time for weather",
      "months": [
        { "month": "Jan", "label": "Best" },
        { "month": "Feb", "label": "Best" },
        { "month": "Mar", "label": "Good" },
        { "month": "Apr", "label": "Possible" },
        { "month": "May", "label": "Avoid" },
        { "month": "Jun", "label": "Avoid" },
        { "month": "Jul", "label": "Avoid" },
        { "month": "Aug", "label": "Avoid" },
        { "month": "Sep", "label": "Avoid" },
        { "month": "Oct", "label": "Possible" },
        { "month": "Nov", "label": "Good" },
        { "month": "Dec", "label": "Best" }
      ],
      "summary": "Best: Dec-Feb. Cooler, drier walking weather for Merida and Yucatan day trips; May-Sep is hot and wetter.",
      "notes": "Avoid means simply not ideal, not impossible. Heat, humidity and storm timing vary year by year.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-06-13",
      "sources": "https://www.climatestotravel.com/climate/mexico/merida\nhttps://www.booking.com/hotel/mx/mansion-merida-on-the-park.html"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        { "month": "Jan", "label": "Expensive" },
        { "month": "Feb", "label": "Expensive" },
        { "month": "Mar", "label": "Average" },
        { "month": "Apr", "label": "Good value" },
        { "month": "May", "label": "Cheapest" },
        { "month": "Jun", "label": "Cheapest" },
        { "month": "Jul", "label": "Good value" },
        { "month": "Aug", "label": "Good value" },
        { "month": "Sep", "label": "Cheapest" },
        { "month": "Oct", "label": "Good value" },
        { "month": "Nov", "label": "Average" },
        { "month": "Dec", "label": "Most expensive" }
      ],
      "summary": "Cheapest: May-Jun and Sep. Most expensive: Dec; Jan-Feb can rise with the best weather window.",
      "notes": "Christmas, New Year, Easter and local events can override seasonal patterns.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-06-13",
      "sources": "https://www.booking.com/hotel/mx/mansion-merida-on-the-park.html"
    },
    "months": [
      { "month": "Jan", "weather": "Best", "price": "Expensive", "tempC": 23, "tempF": 73, "humidity": 72 },
      { "month": "Feb", "weather": "Best", "price": "Expensive", "tempC": 24, "tempF": 75, "humidity": 70 },
      { "month": "Mar", "weather": "Good", "price": "Average", "tempC": 26, "tempF": 79, "humidity": 68 },
      { "month": "Apr", "weather": "Possible", "price": "Good value", "tempC": 28, "tempF": 82, "humidity": 68 },
      { "month": "May", "weather": "Avoid", "price": "Cheapest", "tempC": 29, "tempF": 84, "humidity": 70 },
      { "month": "Jun", "weather": "Avoid", "price": "Cheapest", "tempC": 29, "tempF": 84, "humidity": 76 },
      { "month": "Jul", "weather": "Avoid", "price": "Good value", "tempC": 28, "tempF": 82, "humidity": 78 },
      { "month": "Aug", "weather": "Avoid", "price": "Good value", "tempC": 28, "tempF": 82, "humidity": 80 },
      { "month": "Sep", "weather": "Avoid", "price": "Cheapest", "tempC": 28, "tempF": 82, "humidity": 82 },
      { "month": "Oct", "weather": "Possible", "price": "Good value", "tempC": 27, "tempF": 81, "humidity": 80 },
      { "month": "Nov", "weather": "Good", "price": "Average", "tempC": 25, "tempF": 77, "humidity": 76 },
      { "month": "Dec", "weather": "Best", "price": "Most expensive", "tempC": 23, "tempF": 73, "humidity": 74 }
    ]
  },
  "cartesiano-puebla": {
    "hotel": "Cartesiano Boutique & Wellness Hotel",
    "city": "Puebla",
    "country": "Mexico",
    "matchedSite": true,
    "weather": {
      "title": "Best time for weather",
      "months": [
        { "month": "Jan", "label": "Good" },
        { "month": "Feb", "label": "Best" },
        { "month": "Mar", "label": "Best" },
        { "month": "Apr", "label": "Best" },
        { "month": "May", "label": "Good" },
        { "month": "Jun", "label": "Possible" },
        { "month": "Jul", "label": "Possible" },
        { "month": "Aug", "label": "Possible" },
        { "month": "Sep", "label": "Avoid" },
        { "month": "Oct", "label": "Good" },
        { "month": "Nov", "label": "Best" },
        { "month": "Dec", "label": "Good" }
      ],
      "summary": "Best: Feb-Apr and Nov. Comfortable highland weather for walking; Sep is usually the least reliable month.",
      "notes": "Avoid means simply not ideal, not impossible. Afternoon rain is more common in the wet season.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-06-13",
      "sources": "https://www.climatestotravel.com/climate/mexico/puebla\nhttps://www.booking.com/hotel/mx/cartesiano-puebla.html"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        { "month": "Jan", "label": "Good value" },
        { "month": "Feb", "label": "Average" },
        { "month": "Mar", "label": "Average" },
        { "month": "Apr", "label": "Expensive" },
        { "month": "May", "label": "Good value" },
        { "month": "Jun", "label": "Cheapest" },
        { "month": "Jul", "label": "Good value" },
        { "month": "Aug", "label": "Good value" },
        { "month": "Sep", "label": "Cheapest" },
        { "month": "Oct", "label": "Average" },
        { "month": "Nov", "label": "Average" },
        { "month": "Dec", "label": "Most expensive" }
      ],
      "summary": "Cheapest: Jun and Sep. Most expensive: Dec; Easter and Mexican holiday weekends can lift rates.",
      "notes": "Puebla can show good midweek value because business and leisure demand patterns vary.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-06-13",
      "sources": "https://www.booking.com/hotel/mx/cartesiano-puebla.html"
    },
    "months": [
      { "month": "Jan", "weather": "Good", "price": "Good value", "tempC": 14, "tempF": 57, "humidity": 58 },
      { "month": "Feb", "weather": "Best", "price": "Average", "tempC": 15, "tempF": 59, "humidity": 54 },
      { "month": "Mar", "weather": "Best", "price": "Average", "tempC": 17, "tempF": 63, "humidity": 52 },
      { "month": "Apr", "weather": "Best", "price": "Expensive", "tempC": 18, "tempF": 64, "humidity": 54 },
      { "month": "May", "weather": "Good", "price": "Good value", "tempC": 19, "tempF": 66, "humidity": 58 },
      { "month": "Jun", "weather": "Possible", "price": "Cheapest", "tempC": 18, "tempF": 64, "humidity": 68 },
      { "month": "Jul", "weather": "Possible", "price": "Good value", "tempC": 17, "tempF": 63, "humidity": 70 },
      { "month": "Aug", "weather": "Possible", "price": "Good value", "tempC": 17, "tempF": 63, "humidity": 72 },
      { "month": "Sep", "weather": "Avoid", "price": "Cheapest", "tempC": 17, "tempF": 63, "humidity": 75 },
      { "month": "Oct", "weather": "Good", "price": "Average", "tempC": 16, "tempF": 61, "humidity": 70 },
      { "month": "Nov", "weather": "Best", "price": "Average", "tempC": 15, "tempF": 59, "humidity": 62 },
      { "month": "Dec", "weather": "Good", "price": "Most expensive", "tempC": 14, "tempF": 57, "humidity": 60 }
    ]
  },
  "casa-don-gustavo-campeche": {
    "hotel": "Casa Don Gustavo Boutique Hotel",
    "city": "Campeche",
    "country": "Mexico",
    "matchedSite": true,
    "weather": {
      "title": "Best time for weather",
      "months": [
        { "month": "Jan", "label": "Best" },
        { "month": "Feb", "label": "Best" },
        { "month": "Mar", "label": "Good" },
        { "month": "Apr", "label": "Possible" },
        { "month": "May", "label": "Avoid" },
        { "month": "Jun", "label": "Avoid" },
        { "month": "Jul", "label": "Avoid" },
        { "month": "Aug", "label": "Avoid" },
        { "month": "Sep", "label": "Avoid" },
        { "month": "Oct", "label": "Possible" },
        { "month": "Nov", "label": "Good" },
        { "month": "Dec", "label": "Best" }
      ],
      "summary": "Best: Dec-Feb. Cooler Gulf weather is strongest for old-town walks; May-Sep is hot and wetter.",
      "notes": "Avoid means simply not ideal, not impossible. Campeche is rewarding year-round if heat is acceptable.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-06-13",
      "sources": "https://www.climatestotravel.com/climate/mexico/campeche\nhttps://www.booking.com/hotel/mx/casa-don-gustavo.html"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        { "month": "Jan", "label": "Average" },
        { "month": "Feb", "label": "Average" },
        { "month": "Mar", "label": "Good value" },
        { "month": "Apr", "label": "Good value" },
        { "month": "May", "label": "Cheapest" },
        { "month": "Jun", "label": "Cheapest" },
        { "month": "Jul", "label": "Good value" },
        { "month": "Aug", "label": "Good value" },
        { "month": "Sep", "label": "Cheapest" },
        { "month": "Oct", "label": "Good value" },
        { "month": "Nov", "label": "Average" },
        { "month": "Dec", "label": "Expensive" }
      ],
      "summary": "Cheapest: May-Jun and Sep. December can rise, but Campeche usually stays calmer than better-known Mexico destinations.",
      "notes": "Small room count can matter more than broad seasonality; check several dates.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-06-13",
      "sources": "https://www.booking.com/hotel/mx/casa-don-gustavo.html"
    },
    "months": [
      { "month": "Jan", "weather": "Best", "price": "Average", "tempC": 24, "tempF": 75, "humidity": 74 },
      { "month": "Feb", "weather": "Best", "price": "Average", "tempC": 25, "tempF": 77, "humidity": 72 },
      { "month": "Mar", "weather": "Good", "price": "Good value", "tempC": 26, "tempF": 79, "humidity": 70 },
      { "month": "Apr", "weather": "Possible", "price": "Good value", "tempC": 28, "tempF": 82, "humidity": 70 },
      { "month": "May", "weather": "Avoid", "price": "Cheapest", "tempC": 29, "tempF": 84, "humidity": 72 },
      { "month": "Jun", "weather": "Avoid", "price": "Cheapest", "tempC": 29, "tempF": 84, "humidity": 78 },
      { "month": "Jul", "weather": "Avoid", "price": "Good value", "tempC": 29, "tempF": 84, "humidity": 78 },
      { "month": "Aug", "weather": "Avoid", "price": "Good value", "tempC": 29, "tempF": 84, "humidity": 80 },
      { "month": "Sep", "weather": "Avoid", "price": "Cheapest", "tempC": 28, "tempF": 82, "humidity": 82 },
      { "month": "Oct", "weather": "Possible", "price": "Good value", "tempC": 27, "tempF": 81, "humidity": 80 },
      { "month": "Nov", "weather": "Good", "price": "Average", "tempC": 26, "tempF": 79, "humidity": 77 },
      { "month": "Dec", "weather": "Best", "price": "Expensive", "tempC": 24, "tempF": 75, "humidity": 75 }
    ]
  },
  "hotel-suitess-dresden": {
    "hotel": "Hotel Suitess",
    "city": "Dresden",
    "country": "Germany",
    "matchedSite": true,
    "weather": {
      "title": "Best time for weather",
      "months": [
        { "month": "Jan", "label": "Avoid" },
        { "month": "Feb", "label": "Avoid" },
        { "month": "Mar", "label": "Possible" },
        { "month": "Apr", "label": "Good" },
        { "month": "May", "label": "Best" },
        { "month": "Jun", "label": "Best" },
        { "month": "Jul", "label": "Good" },
        { "month": "Aug", "label": "Good" },
        { "month": "Sep", "label": "Best" },
        { "month": "Oct", "label": "Good" },
        { "month": "Nov", "label": "Possible" },
        { "month": "Dec", "label": "Possible" }
      ],
      "summary": "Best: May-Jun and Sep. Spring and early autumn are strongest for old-town walking; winter can be atmospheric but colder.",
      "notes": "Avoid means simply not ideal, not impossible. December is atmospheric but Christmas-market demand can be high.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-06-13",
      "sources": "https://www.climatestotravel.com/climate/germany/dresden\nhttps://www.booking.com/hotel/de/suitess.html"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        { "month": "Jan", "label": "Cheapest" },
        { "month": "Feb", "label": "Cheapest" },
        { "month": "Mar", "label": "Good value" },
        { "month": "Apr", "label": "Good value" },
        { "month": "May", "label": "Average" },
        { "month": "Jun", "label": "Average" },
        { "month": "Jul", "label": "Expensive" },
        { "month": "Aug", "label": "Expensive" },
        { "month": "Sep", "label": "Average" },
        { "month": "Oct", "label": "Good value" },
        { "month": "Nov", "label": "Good value" },
        { "month": "Dec", "label": "Most expensive" }
      ],
      "summary": "Cheapest: Jan-Feb. Most expensive: Dec; summer weekends and cultural dates can also lift rates.",
      "notes": "Dresden events, holidays and Christmas markets can override normal seasonality.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-06-13",
      "sources": "https://www.booking.com/hotel/de/suitess.html"
    },
    "months": [
      { "month": "Jan", "weather": "Avoid", "price": "Cheapest", "tempC": 1, "tempF": 34, "humidity": 82 },
      { "month": "Feb", "weather": "Avoid", "price": "Cheapest", "tempC": 2, "tempF": 36, "humidity": 78 },
      { "month": "Mar", "weather": "Possible", "price": "Good value", "tempC": 6, "tempF": 43, "humidity": 72 },
      { "month": "Apr", "weather": "Good", "price": "Good value", "tempC": 10, "tempF": 50, "humidity": 68 },
      { "month": "May", "weather": "Best", "price": "Average", "tempC": 15, "tempF": 59, "humidity": 68 },
      { "month": "Jun", "weather": "Best", "price": "Average", "tempC": 18, "tempF": 64, "humidity": 70 },
      { "month": "Jul", "weather": "Good", "price": "Expensive", "tempC": 20, "tempF": 68, "humidity": 70 },
      { "month": "Aug", "weather": "Good", "price": "Expensive", "tempC": 19, "tempF": 66, "humidity": 72 },
      { "month": "Sep", "weather": "Best", "price": "Average", "tempC": 15, "tempF": 59, "humidity": 74 },
      { "month": "Oct", "weather": "Good", "price": "Good value", "tempC": 10, "tempF": 50, "humidity": 78 },
      { "month": "Nov", "weather": "Possible", "price": "Good value", "tempC": 5, "tempF": 41, "humidity": 82 },
      { "month": "Dec", "weather": "Possible", "price": "Most expensive", "tempC": 2, "tempF": 36, "humidity": 84 }
    ]
  },
  "steigenberger-handelshof-leipzig": {
    "hotel": "Steigenberger Icon Grandhotel Handelshof Leipzig",
    "city": "Leipzig",
    "country": "Germany",
    "matchedSite": true,
    "weather": {
      "title": "Best time for weather",
      "months": [
        { "month": "Jan", "label": "Avoid" },
        { "month": "Feb", "label": "Avoid" },
        { "month": "Mar", "label": "Possible" },
        { "month": "Apr", "label": "Good" },
        { "month": "May", "label": "Best" },
        { "month": "Jun", "label": "Best" },
        { "month": "Jul", "label": "Good" },
        { "month": "Aug", "label": "Good" },
        { "month": "Sep", "label": "Best" },
        { "month": "Oct", "label": "Good" },
        { "month": "Nov", "label": "Possible" },
        { "month": "Dec", "label": "Possible" }
      ],
      "summary": "Best: May-Jun and Sep. Good walking weather for Leipzig's passages, churches and cafe streets.",
      "notes": "Avoid means simply not ideal, not impossible. Winter can still suit museums, music and cafe trips.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-06-13",
      "sources": "https://www.climatestotravel.com/climate/germany/leipzig\nhttps://www.booking.com/hotel/de/steigenberger-grandhotel-handelshof-leipzig.html"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        { "month": "Jan", "label": "Cheapest" },
        { "month": "Feb", "label": "Cheapest" },
        { "month": "Mar", "label": "Good value" },
        { "month": "Apr", "label": "Average" },
        { "month": "May", "label": "Average" },
        { "month": "Jun", "label": "Average" },
        { "month": "Jul", "label": "Good value" },
        { "month": "Aug", "label": "Good value" },
        { "month": "Sep", "label": "Expensive" },
        { "month": "Oct", "label": "Expensive" },
        { "month": "Nov", "label": "Good value" },
        { "month": "Dec", "label": "Most expensive" }
      ],
      "summary": "Cheapest: Jan-Feb. Most expensive: Dec; Leipzig fair and event dates can matter more than month.",
      "notes": "Trade fairs and conventions are the main price risk. Always compare event calendars with hotel rates.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-06-13",
      "sources": "https://www.booking.com/hotel/de/steigenberger-grandhotel-handelshof-leipzig.html"
    },
    "months": [
      { "month": "Jan", "weather": "Avoid", "price": "Cheapest", "tempC": 1, "tempF": 34, "humidity": 82 },
      { "month": "Feb", "weather": "Avoid", "price": "Cheapest", "tempC": 2, "tempF": 36, "humidity": 78 },
      { "month": "Mar", "weather": "Possible", "price": "Good value", "tempC": 6, "tempF": 43, "humidity": 72 },
      { "month": "Apr", "weather": "Good", "price": "Average", "tempC": 10, "tempF": 50, "humidity": 68 },
      { "month": "May", "weather": "Best", "price": "Average", "tempC": 15, "tempF": 59, "humidity": 68 },
      { "month": "Jun", "weather": "Best", "price": "Average", "tempC": 18, "tempF": 64, "humidity": 70 },
      { "month": "Jul", "weather": "Good", "price": "Good value", "tempC": 20, "tempF": 68, "humidity": 70 },
      { "month": "Aug", "weather": "Good", "price": "Good value", "tempC": 19, "tempF": 66, "humidity": 72 },
      { "month": "Sep", "weather": "Best", "price": "Expensive", "tempC": 15, "tempF": 59, "humidity": 74 },
      { "month": "Oct", "weather": "Good", "price": "Expensive", "tempC": 10, "tempF": 50, "humidity": 78 },
      { "month": "Nov", "weather": "Possible", "price": "Good value", "tempC": 5, "tempF": 41, "humidity": 82 },
      { "month": "Dec", "weather": "Possible", "price": "Most expensive", "tempC": 2, "tempF": 36, "humidity": 84 }
    ]
  },
  "hotel-elephant-weimar": {
    "hotel": "Hotel Elephant Weimar, Autograph Collection",
    "city": "Weimar",
    "country": "Germany",
    "matchedSite": true,
    "weather": {
      "title": "Best time for weather",
      "months": [
        { "month": "Jan", "label": "Avoid" },
        { "month": "Feb", "label": "Avoid" },
        { "month": "Mar", "label": "Possible" },
        { "month": "Apr", "label": "Good" },
        { "month": "May", "label": "Best" },
        { "month": "Jun", "label": "Best" },
        { "month": "Jul", "label": "Good" },
        { "month": "Aug", "label": "Good" },
        { "month": "Sep", "label": "Best" },
        { "month": "Oct", "label": "Good" },
        { "month": "Nov", "label": "Possible" },
        { "month": "Dec", "label": "Possible" }
      ],
      "summary": "Best: May-Jun and Sep. Comfortable small-city weather for Weimar's museums, houses and park walks.",
      "notes": "Avoid means simply not ideal, not impossible. Winter can still work well for culture-focused trips.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-06-13",
      "sources": "https://www.climatestotravel.com/climate/germany/weimar\nhttps://www.booking.com/hotel/de/elephant-weimar.html"
    },
    "price": {
      "title": "Best time for price",
      "months": [
        { "month": "Jan", "label": "Cheapest" },
        { "month": "Feb", "label": "Cheapest" },
        { "month": "Mar", "label": "Good value" },
        { "month": "Apr", "label": "Average" },
        { "month": "May", "label": "Average" },
        { "month": "Jun", "label": "Average" },
        { "month": "Jul", "label": "Expensive" },
        { "month": "Aug", "label": "Expensive" },
        { "month": "Sep", "label": "Average" },
        { "month": "Oct", "label": "Good value" },
        { "month": "Nov", "label": "Good value" },
        { "month": "Dec", "label": "Expensive" }
      ],
      "summary": "Cheapest: Jan-Feb. Summer and festival periods can be higher; Weimar usually stays calmer than Germany's biggest cities.",
      "notes": "Small-city seasonality can be disrupted by festivals and cultural events.",
      "confidenceLevel": "Medium",
      "lastChecked": "2026-06-13",
      "sources": "https://www.booking.com/hotel/de/elephant-weimar.html"
    },
    "months": [
      { "month": "Jan", "weather": "Avoid", "price": "Cheapest", "tempC": 1, "tempF": 34, "humidity": 82 },
      { "month": "Feb", "weather": "Avoid", "price": "Cheapest", "tempC": 2, "tempF": 36, "humidity": 78 },
      { "month": "Mar", "weather": "Possible", "price": "Good value", "tempC": 6, "tempF": 43, "humidity": 72 },
      { "month": "Apr", "weather": "Good", "price": "Average", "tempC": 10, "tempF": 50, "humidity": 68 },
      { "month": "May", "weather": "Best", "price": "Average", "tempC": 15, "tempF": 59, "humidity": 68 },
      { "month": "Jun", "weather": "Best", "price": "Average", "tempC": 18, "tempF": 64, "humidity": 70 },
      { "month": "Jul", "weather": "Good", "price": "Expensive", "tempC": 20, "tempF": 68, "humidity": 70 },
      { "month": "Aug", "weather": "Good", "price": "Expensive", "tempC": 19, "tempF": 66, "humidity": 72 },
      { "month": "Sep", "weather": "Best", "price": "Average", "tempC": 15, "tempF": 59, "humidity": 74 },
      { "month": "Oct", "weather": "Good", "price": "Good value", "tempC": 10, "tempF": 50, "humidity": 78 },
      { "month": "Nov", "weather": "Possible", "price": "Good value", "tempC": 5, "tempF": 41, "humidity": 82 },
      { "month": "Dec", "weather": "Possible", "price": "Expensive", "tempC": 2, "tempF": 36, "humidity": 84 }
    ]
  }
};
