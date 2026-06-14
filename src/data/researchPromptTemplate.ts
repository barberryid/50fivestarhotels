// src/data/researchPromptTemplate.ts
// The public research prompt shown on /research-hotels/, ported from
// research-prompt-public.md (the SESSION PROMPT block only — no editor notes).
// Tokens substituted on the client:
//   [REGION]          — the selected country/territory name
//   [PRICE_LEVEL_SEARCH_RULE] — selected price-level instructions
//   [PRICE_LEVEL_LABELS]      — selected price-level labels for candidate output
//   [PRICE_LEVEL_DISQUALIFICATION_RULE] — selected price ceiling rule
//   [CITY_FOCUS_SECTION] — optional city/town focus block (empty when no city entered)
//   [PERSONAL_WEIGHTING_SECTION] — optional traveller-fit weighting block (empty when no preferences)
//   [PERSONAL_OUTPUT_NOTES]      — optional extra output columns / personal-fit notes (empty when no preferences)
// Keep the tokens exactly as written; the tool does literal replacement.

export const researchPromptTemplate = `You are an expert travel assistant. Help me find an outstanding-value hotel for an upcoming trip to **[REGION]**.

The hotel I'm hoping to find should make me think:

> "I didn't realise I could get this kind of stay at that price."

I'm not chasing the cheapest room — I want the best comfort, character and location for the money. Suggest places I might not find on my own, not just the obvious famous five-stars.

[CITY_FOCUS_SECTION]---

### My budget

[PRICE_LEVEL_SEARCH_RULE]

---

### Step 1 — Where should I base myself in [REGION]?

If I haven't named a specific city, first suggest the **3–6 places** in **[REGION]** worth considering, prioritising spots where genuinely good hotels are unusually affordable and the destination itself is worth visiting.

For each, tell me briefly:
- Why hotel prices are lower here than I'd expect
- What makes it worth a trip
- A rough safety level for ordinary travellers: Low / Moderate / High

Skip anywhere you'd rate **High** risk unless there's a strong reason to mention it.

---

### Step 2 — Find the best-value hotels

For each place worth staying, apply my budget above and find the **1–3 strongest hotels**. Favour places with:

- Strong value compared with similar hotels nearby
- Real character (heritage, design, boutique, spa or resort — not bland chain towers)
- A genuinely useful, pleasant location
- Consistently good recent reviews

Check Booking.com, Google Hotels, Tripadvisor and recent travel write-ups, and tell me where you found each one.

---

### Step 3 — Score and compare the options

List the strongest candidates you find (aim for roughly 8–15, or fewer if the area is small). For each:

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
- 55–64: Worth a look
- Below 55: Skip

**One line on why I'd book it**
**One honest line on what might disappoint me**

---

[PERSONAL_WEIGHTING_SECTION]### Step 4 — Rule out the weak options

Drop any hotel that:

- Has a review score below 8.0 / 10, or too few reviews to trust
- [PRICE_LEVEL_DISQUALIFICATION_RULE]
- Looks cheap only because of a short-term promotion or flash sale
- Is cheap mainly because it's run-down or poorly maintained
- Sits somewhere with nothing worth doing nearby
- Is in an area you'd flag as unsafe

Tell me which hotels you dropped and why.

---

### Step 5 — Give me a shortlist

Rank the survivors by value score in a clean table:

| Rank | Hotel | Place | Type | Lowest budget level | Price range (€) | Score | Rating |
|---|---|---|---|---|---|---|---|

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

### How to answer

- Be direct and confident — recommend clearly, don't hedge everything.
- Only suggest hotels you can actually verify. If you're unsure of a price or score, say so rather than inventing it.
- Prices change constantly with season, demand and dates, so treat every figure as indicative and remind me to check the live rate before booking.
- Use the exact category and rating labels above.
- Keep the shortlist table clean and easy to copy.`;

export default researchPromptTemplate;
