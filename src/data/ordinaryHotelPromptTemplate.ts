// Prompt template for /ordinary-hotel-finder/.
// Tokens are substituted by CountryPromptTool. Keep token names in sync with
// src/components/CountryPromptTool.astro.

export const ordinaryHotelPromptTemplate = `You are a practical hotel-finding assistant. Help me choose ordinary but genuinely good hotels for an upcoming trip to **[REGION]**.

By "ordinary but good", I mean hotels that are not trying to be luxury or special-occasion stays. I want clean rooms, dependable recent reviews, a sensible location, fair pricing, decent sleep, and no nasty surprises.

The hotel I'm hoping to find should make me think:

> "This is straightforward, well-run and exactly good enough for this trip."

I'm not chasing the cheapest room, a five-star label, or a hotel that looks impressive in marketing photos. I want the best practical hotel for the money. If a cheaper hotel is noisy, badly located, poorly maintained, unreliable, or full of recent complaints, reject it rather than trying to make it fit.

**A smaller, honest list is better than a padded one.** Do not invent weak options to hit a target number. If the market cannot support a good ordinary hotel at my budget, tell me plainly and say whether I should raise the budget, shift dates, change area, or use a nearby alternative.

[CITY_FOCUS_SECTION][TRIP_SCENARIO_SECTION]---

### My budget

[PRICE_LEVEL_SEARCH_RULE]

When you check prices, assume a normal booking: 2 adults, a standard entry-level room, midweek nights in shoulder-season months unless I gave specific dates, and look at 1- and 2-night stays where you can. Note refundable and non-refundable rates separately if they differ a lot. If the only low rate is non-refundable, mobile-only, member-only, opaque, or a short-lived promotion, flag it and do not treat it as the normal price.

---

[OUTPUT_MODE_SECTION]

---

### Step 1 - Where should I base myself in [REGION]?

If I have not named a specific city or neighbourhood, first suggest the places worth considering. Prioritise areas where ordinary hotels are reliable, well located for a normal traveller, and fairly priced.

For each possible base, tell me briefly:
- Why it is practical
- Whether ordinary hotels there are usually good value
- What it is best for
- A rough safety level for ordinary travellers: Low / Moderate / High

Skip anywhere you would rate **High** risk unless there is a strong reason to mention it. If you considered a place and ruled it out, note it in one line with the reason: poor hotel stock, weak transport, safety, dull area, too remote, or overpriced.

Treat serious safety or political risk as a hard filter unless I explicitly ask you to consider higher-risk destinations. For normal neighbourhood-level safety, reflect my traveller-fit priorities: a cheaper hotel in a less convenient or less comfortable area can still be mentioned, but it should lose trip-fit points and carry a clear warning.

---

### Step 2 - Find the best ordinary hotels

For each place worth staying, apply my budget above and find the strongest ordinary hotel options. Favour hotels with:

- Consistently good recent reviews
- Cleanliness and maintenance that still look solid
- Useful location for my trip, not just a low price
- Quiet enough rooms or clear room-choice advice
- Working basics: air conditioning or heating where relevant, Wi-Fi, beds, bathrooms, check-in, and luggage practicality
- Fair pricing compared with similar hotels nearby

Check Booking.com, Google Hotels, Tripadvisor, Agoda, Expedia, recent review snippets and the hotel's own site where useful. Before you trust a hotel's review strength, scan negative and mixed reviews from the last 12-18 months for recurring complaints: dirty rooms, tired bathrooms, poor soundproofing, weak air conditioning, uncomfortable beds, bad smells, weak breakfast, unreliable service, construction, surprise fees, unsafe surroundings, or misleading photos.

Do not include a weak luxury hotel or old five-star just because the rate looks low. A plain three-star or four-star hotel with excellent recent evidence can beat a tired higher-rated hotel for this task. Mark apartment-style stays, guesthouses, aparthotels and airport hotels clearly so I understand the trade-off.

---

### Step 3 - Score and compare the options

List the strongest options you find - up to roughly 8-12, or as few as genuinely exist in a small market. For each:

**Hotel name and location**

**What kind of ordinary hotel it is** (pick one):
- Dependable budget hotel
- Good mid-range hotel
- Simple chain hotel done well
- Guesthouse / small inn
- Aparthotel / serviced apartment
- Practical airport or station hotel
- Boutique or characterful ordinary hotel
- Borderline / only if very cheap

**Typical nightly price** (standard room, shoulder season or my dates, in EUR; note the rate you saw and roughly when)

**Lowest budget level it fits** (pick one):
[PRICE_LEVEL_LABELS]

**Review score** (Booking.com or Google, with the rough number of reviews so I know it is reliable)

**Evidence line** - so I can trust the recommendation:
- Review-score source and the date you checked
- Price source and the rough date you checked
- Recent reviews scanned? yes / no
- Recurring complaints found? yes / no, with one-line summary
- Your confidence: High / Medium / Low

Use at least two independent sources where possible. Do not rely on the hotel's own site alone for reviews, price or quality claims.

**Value score out of 100**, built from these six factors:

| What I'm judging | Max | Score |
|---|---:|---:|
| Cleanliness, maintenance and recent review consistency | 25 | |
| Location usefulness for this trip | 20 | |
| Price fairness vs comparable ordinary hotels nearby | 20 | |
| Sleep comfort and noise risk | 15 | |
| Room practicality, breakfast and facilities | 10 | |
| Hidden drawbacks, safety and booking risk | 10 | |
| **Total** | **100** | |

Score each line and total to 100. Do not award points for looking luxurious unless it also improves the practical stay.

**Rating** (from the score):
- 85-100: Excellent ordinary hotel
- 75-84: Very good practical pick
- 65-74: Good with caveats
- 55-64: Only if the price or location is unusually useful
- Below 55: Reject for now

**Trip-fit score out of 100**

Also give each hotel a separate **Trip-fit score /100**. This should reflect how well the hotel fits my specific trip details, traveller profile, priorities and deal-breakers. Do not merge this into the value score.

Use this scale:
- 85-100: Excellent fit for this trip
- 75-84: Strong fit
- 65-74: Good fit with some compromises
- 55-64: Conditional fit
- Below 55: Poor fit for this trip

If I have not provided many trip details, base the trip-fit score on general traveller practicality: location usefulness, safety, recent review consistency, comfort, ease of arrival, and whether the hotel makes sense for a normal short stay.

**One line on why I'd book it**
**One honest line on what might annoy me**

---

[PERSONAL_WEIGHTING_SECTION]### Step 4 - Rule out the weak options

Drop any hotel that:

- Has weak or inconsistent recent reviews. As a guide, prefer Booking.com 8.0+ or Google 4.2+ unless other current evidence strongly explains the score.
- [PRICE_LEVEL_DISQUALIFICATION_RULE]
- Looks cheap mainly because it is run-down, poorly maintained or badly located
- Has recurring recent complaints about cleanliness, noise, air conditioning, beds, bathrooms, service, safety or surprise fees
- Is inconvenient for the trip I described
- Is in an area you would flag as unsafe for an ordinary traveller
- Uses misleading photos or confusing room categories

Tell me which tempting hotels you dropped and why.

---

### Step 5 - Give me a shortlist

Rank the survivors by value score in a clean table:

| Rank | Hotel | Place | Type | Lowest budget level | Price range (EUR) | Value score | Trip-fit score | Rating |
|---|---|---|---|---|---:|---:|---:|---|

Then for my **top 3-5**, add a fuller picture:

- Why it is a sensible practical pick
- What kind of traveller it suits
- The best nearby area, transport, restaurant or sightseeing advantages
- The main drawback or room type to avoid
- What I must verify before booking
- A direct booking link (clean Booking.com, Google Hotels or hotel URL) so I can check the live rate
[PERSONAL_OUTPUT_NOTES]
---

### Step 6 - Honourable mentions and traps

Briefly list any hotels I might be tempted by but should probably skip - name, location, and the one reason to pass. This saves me from booking something that looks good but is not actually dependable.

---

### Bottom line

In 2-3 sentences, tell me straight: does **[REGION]** at my budget genuinely deliver ordinary but good hotels, or would I do better to raise my budget, change dates, or choose a different base? If there is a clear winner, say which hotel I would check first.

---

### How to answer

- Be direct and practical.
- Only suggest hotels you can actually verify. If you are unsure of a price or score, say so rather than inventing it.
- Prices change constantly with season, demand, room type, taxes, cancellation policy and promotions, so treat every figure as indicative and remind me to check the live rate before booking.
- Use the exact category and rating labels above.
- Keep the shortlist table clean and easy to copy.`;

export default ordinaryHotelPromptTemplate;
