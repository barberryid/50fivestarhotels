// src/data/researchPromptTemplate.ts
// The public research prompt shown on /research-hotels/, ported from
// research-prompt-public.md (the SESSION PROMPT block only — no editor notes).
// Tokens substituted on the client:
//   [REGION]          — the selected country/territory name
//   [PRICE_LEVEL_SEARCH_RULE] — selected price-level instructions
//   [PRICE_LEVEL_LABELS]      — selected price-level labels for option output
//   [PRICE_LEVEL_DISQUALIFICATION_RULE] — selected price ceiling rule
//   [CITY_FOCUS_SECTION] — optional city/town focus block (empty when no city entered)
//   [TRIP_SCENARIO_SECTION] — optional real-trip context block (empty when no scenario entered)
//   [PERSONAL_WEIGHTING_SECTION] — optional traveller-fit weighting block (empty when no preferences)
//   [PERSONAL_OUTPUT_NOTES]      — optional extra output columns / trip-fit notes (empty when no preferences)
//   [OUTPUT_MODE_SECTION]        — simple-shortlist or deep-research output instruction
// Keep the tokens exactly as written; the tool does literal replacement.

export const researchPromptTemplate = `You are a practical hotel-finding assistant. Help me choose unusually good-value hotels for an upcoming trip to **[REGION]**.

The hotel I'm hoping to find should make me think:

> "I didn't realise I could get this kind of stay at that price."

I'm not chasing the cheapest room — I want the best comfort, character and location for the money. Suggest places I might not find on my own, not just the obvious famous five-stars. Don't recommend a hotel just because it's cheap, highly rated or labelled five-star: it has to add up to a stay I'd be genuinely glad I booked. If a hotel is good value but the place, setting or experience around it is dull, say so or mark it borderline rather than overselling it.

**A smaller, honest list is better than a padded one.** Don't invent weak options to hit a target number. For a large country, aim for the fuller ranges below; for a small country, an island, a single-city search, or a strict low budget, give me only the genuinely credible hotel options that exist. If the market can't really support a good-value luxury stay at my budget, tell me plainly and say whether I'd do better to raise the budget a little, shift my dates, or look at a nearby alternative.

[CITY_FOCUS_SECTION][TRIP_SCENARIO_SECTION]---

### My budget

[PRICE_LEVEL_SEARCH_RULE]

When you check prices, assume a normal booking: 2 adults, a standard entry-level room, midweek nights in shoulder-season months (not public holidays or peak events), and look at 1- and 2-night stays where you can. Note refundable and non-refundable rates separately if they differ a lot. If the only cheap rate is non-refundable, mobile-only, member-only, opaque, or a short-lived promotion, flag it and don't treat it as the normal price. If the same hotel would qualify as a fallback for more than one missed budget level, list it once under the lowest relevant fallback label rather than repeating it.

---

[OUTPUT_MODE_SECTION]

---

### Step 1 — Where should I base myself in [REGION]?

If I haven't named a specific city, first suggest the places worth considering — up to about 5–8 for a large country, but far fewer (even one or two) for a small or island destination. Prioritise spots where genuinely good hotels are unusually affordable and the destination itself is worth visiting. Don't pad the list.

For each, tell me briefly:
- Why hotel prices are lower here than I'd expect
- What makes it worth a trip
- A rough safety level for ordinary travellers: Low / Moderate / High

Skip anywhere you'd rate **High** risk unless there's a strong reason to mention it. If you considered a place and ruled it out, note it in one line with the reason (too remote, weak hotels, nothing to do, safety) so I know it was checked.

Treat serious safety or political risk as a hard filter unless I explicitly ask you to consider higher-risk destinations. For normal neighbourhood-level safety, reflect my traveller-fit priorities: a hotel in a less convenient or less comfortable area can still be mentioned, but it should lose trip-fit points and carry a clear warning.

---

### Step 2 — Find the best-value hotels

For each place worth staying, apply my budget above and find the strongest hotels (1–3 each). Favour places with:

- Strong value compared with similar hotels nearby
- Real character (heritage, design, boutique, spa or resort — not bland chain towers)
- A genuinely useful, pleasant location
- Consistently good recent reviews

Check Booking.com, Google Hotels, Tripadvisor and recent travel write-ups. Before you trust a hotel's review strength, scan its negative and mixed reviews from the last 12–18 months for recurring complaints: maintenance decline, noise, cleanliness, air-conditioning problems, weak breakfast, poor service, nearby construction, misleading photos, location issues, or surprise fees. If recent reviews contradict older glowing ones, trust the recent reviews.

You may include a strong four-star or near-luxury exception if it appears to fit the trip better than weak five-star options, but mark it clearly as **Near-luxury exception** and explain why it deserves consideration. Do not include ordinary four-star hotels just to fill the list.

---

### Step 3 — Score and compare the options

List the strongest hotel options you find — up to roughly 8–15, or as few as genuinely exist in a small market. For each:

**Hotel name and location**
**What kind of "five-star" it is** (pick one):
- True international five-star
- Local / booking-site five-star
- Heritage-value five-star
- Business five-star bargain
- Near-luxury exception
- Questionable five-star

**Typical nightly price** (standard room, shoulder season, in €; note the rate you saw and roughly when)

**Lowest budget level it fits** (pick one):
[PRICE_LEVEL_LABELS]

**Review score** (Booking.com or Google, with the rough number of reviews so I know it's reliable)

**Evidence line** — so I can trust the numbers:
- Star-rating source (Booking.com / Google / hotel site / official classification / other)
- Review-score source and the date you checked
- Price source and the rough date you checked
- Recent reviews scanned? yes / no
- Your confidence: High / Medium / Low

Don't rely on a hotel's own website alone for its star rating, price or reviews — use at least two independent sources where you can.

**Value score out of 100**, built from these six factors:

| What I'm judging | Max | Score |
|---|---|---|
| Price vs. what comparable hotels cost nearby | 25 | |
| Character and how luxurious it actually feels | 20 | |
| Review strength and consistency | 15 | |
| How useful the location is | 15 | |
| Things to see, eat and do nearby | 15 | |
| Risk and hidden drawbacks | 10 | |
| **Total** | **100** | |

Score each line and total to 100. You may add up to +5 (staying within the 100 ceiling) for an exceptional heritage, design or independent hotel. Show the final number.

**Rating** (from the score):
- 85–100: Exceptional value
- 75–84: Strong value
- 65–74: Good value
- 55–64: Conditional value
- Below 55: Reject for now

**Trip-fit score out of 100**

Also give each hotel a separate **Trip-fit score /100**. This should reflect how well the hotel fits my specific trip details, traveller profile, priorities and deal-breakers. Do not merge this into the value score.

Use this scale:
- 85–100: Excellent fit for this trip
- 75–84: Strong fit
- 65–74: Good fit with some compromises
- 55–64: Conditional fit
- Below 55: Poor fit for this trip

If I have not provided many trip details, base the trip-fit score on general traveller practicality: location usefulness, safety, recent review consistency, comfort, ease of arrival, and whether the hotel makes sense for a normal short leisure stay.

**One line on why I'd book it**
**One honest line on what might disappoint me**

---

[PERSONAL_WEIGHTING_SECTION]### Step 4 — Rule out the weak options

Drop any hotel that:

- Has a reliable review score below 8.0 / 10, or too few reviews to trust. If Booking.com coverage is thin, use a recent Google, Tripadvisor or Agoda equivalent instead and say which — and don't drop a strong hotel on a weak Booking.com score alone if other reputable sources clearly contradict it.
- [PRICE_LEVEL_DISQUALIFICATION_RULE]
- Looks cheap only because of a short-term promotion or flash sale
- Is cheap mainly because it's run-down or poorly maintained
- Sits somewhere with nothing worth doing nearby
- Is in an area you'd flag as unsafe

Tell me which hotels you dropped and why.

---

### Step 5 — Give me a shortlist

Rank the survivors by value score in a clean table:

| Rank | Hotel | Place | Type | Lowest budget level | Price range (€) | Value score | Trip-fit score | Rating |
|---|---|---|---|---|---|---|---|---|

Then for my **top 3–5**, add a fuller picture:

- What makes it special beyond the price
- The 3 best things to see, eat or do nearby
- An honest take on any remaining drawbacks
- A direct booking link (clean Booking.com or hotel URL) so I can check the live rate
[PERSONAL_OUTPUT_NOTES]
---

### Step 6 — Honourable mentions and traps

Briefly list any hotels I might be tempted by but should probably skip — name, location, and the one reason to pass. This saves me from booking something that looks good but isn't.

---

### Bottom line

In 2–3 sentences, tell me straight: does **[REGION]** at my budget genuinely deliver an affordable-luxury stay worth taking, or would I do better to raise my budget a little, change my dates, or base myself somewhere nearby? If it's a clear yes, say which hotel you'd book first.

---

### How to answer

- Be direct and confident — recommend clearly, don't hedge everything.
- Only suggest hotels you can actually verify. If you're unsure of a price or score, say so rather than inventing it.
- Prices change constantly with season, demand and dates, so treat every figure as indicative and remind me to check the live rate before booking.
- Use the exact category and rating labels above.
- Keep the shortlist table clean and easy to copy.`;

export type ResearchPromptInputs = {
  countryOrTerritory: string;
  cityOrTown?: string;
  selectedPriceLevel?: string;
  selectedPriceLevels?: readonly number[];
  travellerProfile?: string;
  travellerPriorities?: string;
  additionalNotes?: string;
};

const cleanPromptValue = (value: string | undefined): string => (value ?? '').trim();

export const formatWhenToGoPriceTierLabel = (amounts: readonly number[] | undefined): string => {
  const sorted = Array.from(new Set(amounts ?? []))
    .filter((amount) => Number.isFinite(amount))
    .sort((a, b) => a - b);

  if (sorted.length === 0) return 'Selected price level not specified';
  return sorted.map((amount) => `€${amount} or below`).join(', ');
};

const singleWhenToGoPriceTierInstruction = (amount: number): string => {
  if (amount <= 50) {
    return '- If the price level is €50 or below, identify the months with the best chance of credible hotel value near or below €50. If that level is unrealistic, say so clearly, then identify the months most likely to produce the best fallback value above €50.';
  }

  if (amount <= 100) {
    return '- If the price level is €100 or below, identify the months with the best chance of five-star or near-five-star value near or below €100.';
  }

  if (amount <= 200) {
    return '- If the price level is €200 or below, identify the months with the best chance of strong affordable-luxury value near or below €200.';
  }

  if (amount <= 250) {
    return '- If the price level is €250 or below, identify the months with the best chance of higher-quality five-star or near-five-star value while avoiding peak luxury pricing.';
  }

  return `- For the selected price level near or below €${amount}, identify the months with the best chance of strong affordable-luxury hotel value while avoiding peak pricing.`;
};

export const getWhenToGoPriceTierInstruction = (
  selectedPriceLevel = '',
  selectedPriceLevels?: readonly number[]
): string => {
  const sorted = Array.from(new Set(selectedPriceLevels ?? []))
    .filter((amount) => Number.isFinite(amount))
    .sort((a, b) => a - b);

  if (sorted.length > 0) {
    return sorted.map(singleWhenToGoPriceTierInstruction).join('\n');
  }

  const level = selectedPriceLevel.toLowerCase();
  if (/(^|[^0-9])50([^0-9]|$)/.test(level)) return singleWhenToGoPriceTierInstruction(50);
  if (/(^|[^0-9])100([^0-9]|$)/.test(level)) return singleWhenToGoPriceTierInstruction(100);
  if (/(^|[^0-9])200([^0-9]|$)/.test(level)) return singleWhenToGoPriceTierInstruction(200);
  if (/(^|[^0-9])250([^0-9]|$)/.test(level)) return singleWhenToGoPriceTierInstruction(250);

  return '- Identify the months with the best chance of strong affordable-luxury hotel value at the selected price level.';
};

export function buildWhenToGoPrompt(inputs: ResearchPromptInputs): string {
  const countryOrTerritory = cleanPromptValue(inputs.countryOrTerritory) || '[COUNTRY OR TERRITORY]';
  const cityOrTown = cleanPromptValue(inputs.cityOrTown);
  const destinationLabel = cityOrTown ? `${cityOrTown}, ${countryOrTerritory}` : countryOrTerritory;
  const selectedPriceTier =
    cleanPromptValue(inputs.selectedPriceLevel) || formatWhenToGoPriceTierLabel(inputs.selectedPriceLevels);
  const cityOrRegion = cityOrTown || 'Not specified - research the strongest relevant destination(s) inside the country or territory, then keep the answer focused and practical.';

  const travellerContext = [
    cleanPromptValue(inputs.travellerProfile) ? `Traveller profile: ${cleanPromptValue(inputs.travellerProfile)}` : '',
    cleanPromptValue(inputs.travellerPriorities)
      ? `Traveller priorities: ${cleanPromptValue(inputs.travellerPriorities)}`
      : '',
    cleanPromptValue(inputs.additionalNotes)
      ? `Additional traveller notes: ${cleanPromptValue(inputs.additionalNotes)}`
      : '',
  ].filter(Boolean);

  const countryOnlyInstruction = cityOrTown
    ? ''
    : '\nNo city or town has been provided. Research the strongest relevant destination(s) inside the country or territory, but do not turn this into a broad country guide. Choose the most useful city, resort area or travel base for affordable-luxury value and explain the focus briefly.\n';

  return `You are a practical travel-timing assistant helping a traveller decide when to visit a destination for good-value luxury or near-luxury hotels.

Use the same value checks used by 50 Five-Star Hotels, but answer for this traveller's trip rather than for an editorial hotel list.

Your task is to research when to visit the following destination:

Destination: ${destinationLabel}
Country or territory: ${countryOrTerritory}
City / town / region: ${cityOrRegion}
Selected hotel price level: ${selectedPriceTier}${travellerContext.length ? `\n${travellerContext.join('\n')}` : ''}
${countryOnlyInstruction}
This task is not to find hotels again. Instead, research the best months to visit this destination for the best mix of:

1. Weather comfort
2. Air quality
3. Hotel-price value at the selected price level

For the selected price level, adapt your judgement as follows:
${getWhenToGoPriceTierInstruction(selectedPriceTier, inputs.selectedPriceLevels)}

If traveller priorities are provided, use them to frame the monthly trade-offs without making the answer bloated. For example:
- If safety matters, flag months with extreme heat, storms, smoke, flooding, transport disruption, local instability or other practical risks where relevant.
- If sightseeing matters, identify months that make walking, tours, museums, beaches, mountain trips or day trips more comfortable.
- If quietness matters, mention peak crowding, school holidays, major events, nightlife seasons or resort shutdowns where relevant.
- If food, culture, romance or another custom priority is mentioned, include major festivals, closures, seasonal atmosphere and crowding trade-offs where they materially affect the trip.

Use credible, current sources where possible. For weather, use sources such as Weather Spark, Time and Date, Meteostat, NOAA, national meteorological agencies or climate normals. For air quality, use IQAir, AQICN, OpenAQ, national environmental agencies or other credible PM2.5 / AQI sources. For hotel-price seasonality, use Booking.com, Google Hotels, Agoda, Kayak, Expedia, official tourism calendars, major event calendars and visible month-by-month availability patterns where useful.

Do not invent precise monthly figures. If reliable local PM2.5, AQI or hotel-price data is unavailable, say so clearly, use cautious ranges or relative categories, and explain the uncertainty. If using a nearby city or regional proxy, identify it as a proxy.

Hotel prices change constantly by date, room type, taxes, cancellation policy, events and occupancy. Do not promise exact rates. Use relative monthly categories and cautious wording.

Return the answer in this structure:

# When to go: [Destination]

## Best time for weather

Short summary:
- Best months:
- Good months:
- Possible months:
- Difficult months:

Explain the main weather pattern in plain English:
- temperature
- humidity
- rainfall / rainy season
- heat risk
- cold risk, if relevant
- beach / mountain / city comfort, if relevant

## Air quality by month

Short summary:
- Best air:
- Use caution:
- Avoid if sensitive:

Explain the likely air-quality pattern:
- PM2.5 / AQI trend if credible data exists
- smoke / burning season risk if relevant
- dust / desert wind risk if relevant
- traffic pollution if relevant
- monsoon / rain-cleaning effect if relevant
- uncertainty if local data is limited

## Best time for price

Short summary:
- Cheapest months:
- Good-value months:
- Average months:
- Expensive months:
- Most expensive months:

Explain why prices change:
- peak tourist season
- weather
- holidays
- local events
- school holidays
- business travel patterns
- heat / rain / low-season discounts
- whether the selected price tier is realistic

## Best overall months for value travellers

Best overall:
Best for weather:
Best for price:
Best for air quality:
Avoid or think twice:

Give a short verdict for a traveller looking for affordable luxury.

## Month-by-month table

Use exactly these category labels where possible:

Weather:
- Best
- Good
- Possible
- Difficult

Air quality:
- Best
- Moderate
- Use caution
- Avoid if sensitive

Price:
- Cheapest
- Good value
- Average
- Expensive
- Most expensive

| Month | Weather | Air quality | Price value | Traveller note |
|---|---|---|---|---|
| Jan |  |  |  |  |
| Feb |  |  |  |  |
| Mar |  |  |  |  |
| Apr |  |  |  |  |
| May |  |  |  |  |
| Jun |  |  |  |  |
| Jul |  |  |  |  |
| Aug |  |  |  |  |
| Sep |  |  |  |  |
| Oct |  |  |  |  |
| Nov |  |  |  |  |
| Dec |  |  |  |  |

## Structured monthly data

Return a valid JSON object using this exact shape:

{
  "destination": "",
  "countryOrTerritory": "",
  "cityOrRegion": "",
  "selectedPriceTier": "",
  "weatherSummary": "",
  "airQualitySummary": "",
  "priceSummary": "",
  "bestOverallMonths": "",
  "bestWeatherMonths": "",
  "bestPriceMonths": "",
  "bestAirQualityMonths": "",
  "months": [
    {
      "month": "Jan",
      "weatherCategory": "",
      "weatherReason": "",
      "avgHighC": null,
      "avgLowC": null,
      "avgTempC": null,
      "avgTempF": null,
      "humidityPercent": null,
      "rainfallMm": null,
      "rainyDays": null,
      "airQualityCategory": "",
      "pm25": null,
      "aqi": null,
      "airQualityReason": "",
      "priceCategory": "",
      "priceReason": "",
      "travellerNote": ""
    }
  ],
  "sourceNotes": [
    {
      "topic": "Weather",
      "sourcesUsed": [],
      "confidence": "High / Medium / Low",
      "notes": ""
    },
    {
      "topic": "Air quality",
      "sourcesUsed": [],
      "confidence": "High / Medium / Low",
      "notes": ""
    },
    {
      "topic": "Hotel price seasonality",
      "sourcesUsed": [],
      "confidence": "High / Medium / Low",
      "notes": ""
    }
  ]
}

Important:
- The JSON must include all 12 months.
- Use null where precise numeric data is not credible.
- Do not use fake precision.
- Add a brief explanation of uncertainty where data is weak.
- Weather averages are not guarantees.
- Air quality can vary daily because of traffic, fires, dust, weather, construction and local conditions.
- Hotel prices change constantly.
- Live AQI and current hotel rates should be checked before booking.
- If the destination has limited data, say so clearly.`;
}

export default researchPromptTemplate;
