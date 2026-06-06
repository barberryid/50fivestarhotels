# Codex Instructions — Add 10 USA/Canada Hotels to 50fivestarhotels.com
*Version: June 2026 | Prepared for: OpenAI Codex / Claude Code*

---

## Context

You are working on the codebase for **50fivestarhotels.com**, a curated editorial guide to affordable luxury hotels. The site currently lists 20 hotels. You must add 10 new hotels from the USA and Canada, bringing the total to 30.

**Do not guess or improvise any hotel data.** All content, scores, prices and descriptions are specified in full in this document. Use them exactly as written.

---

## Phase 0 — Repo Exploration (do this first)

Before writing any code, run the following to understand the project:

```bash
# Print the directory tree (2 levels deep)
find . -maxdepth 3 -not -path '*/node_modules/*' -not -path '*/.git/*' | sort

# Find where hotel data lives
grep -r "Majapahit\|Yogyakarta\|Tbilisi" --include="*.json" --include="*.js" --include="*.ts" --include="*.md" --include="*.yaml" --include="*.yml" --include="*.toml" --include="*.csv" -l

# Find where rankings/scores live
grep -r "score\|verdict\|91\|89\|87" --include="*.json" --include="*.js" --include="*.ts" -l | head -20

# Find all page templates and components related to hotels
grep -r "hotel\|Hotel" --include="*.jsx" --include="*.tsx" --include="*.vue" --include="*.svelte" -l | head -20

# Check for a sitemap generator
find . -name "sitemap*" -not -path '*/node_modules/*'

# Check for structured data / JSON-LD
grep -r "application/ld+json\|@type.*Hotel\|schema.org" --include="*.html" --include="*.jsx" --include="*.tsx" --include="*.vue" -l | head -10

# Check package.json for framework
cat package.json 2>/dev/null || cat composer.json 2>/dev/null || echo "No package.json found"
```

Use the output to identify:
- **The hotel data source** (a JSON file, a JavaScript array, a CMS schema, Markdown files, etc.)
- **The template for individual hotel pages** (if they exist)
- **The main listing/grid component**
- **The ranking/leaderboard component or page**
- **Any region/country filter components**
- **The SEO layer** (meta tags, JSON-LD, og:tags)
- **The sitemap file or generator**

Adapt all instructions below to match what you find. The data is definitive; the implementation pattern must match the existing codebase.

---

## Phase 1 — The Hotel Data

Add all 10 hotels below to whatever data source the existing 20 hotels use. Maintain the same field names, data types, and structure as the existing entries.

---

### Hotel 1 of 10

```
slug:              auberge-saint-antoine-quebec-city
name:              Auberge Saint-Antoine
city:              Quebec City
state_province:    Quebec
country:           Canada
region:            North America
continent:         Americas
latitude:          46.8136
longitude:         -71.2043
five_star_category: True international five-star
site_score:        90
verdict:           Exceptional value
price_range_eur:   155–230
price_range_note:  CAD $235–345/night shoulder season; best value Oct–Nov and Feb–Mar
booking_score:     9.8 (location; 384 reviews — Relais & Châteaux / Michelin 2 Keys property)
official_url:      https://www.saint-antoine.com/
booking_url:       https://www.booking.com/hotel/ca/auberge-saint-antoine.html

tagline:
  Relais & Châteaux in a UNESCO World Heritage city — at Canadian dollar prices.

short_description:
  A Relais & Châteaux member with Michelin 2 Keys recognition, occupying a 17th-century heritage
  building in Quebec City's Old Port. Archaeological artefacts unearthed during construction are
  displayed throughout the corridors; the hotel's position in Vieux-Québec puts the Château
  Frontenac and the St. Lawrence River within five minutes' walk in either direction.

editorial_case:
  A European-trained traveller who knows what Relais & Châteaux costs in France would be stopped
  cold by the CAD pricing — especially outside high summer.

risk_flag:
  Summer high season (July–August) can push rates above €250; best positioned as a shoulder-season
  or winter-carnival destination. Verify dates before booking.

nearby:
  - Château Frontenac and the Plains of Abraham — 5 minutes on foot; the cliff-top promenade at
    dusk is among the finest urban photography setups in North America.
  - Le Petit-Champlain district — immediately adjacent; North America's oldest commercial street,
    with artisan boutiques and Québécois restaurants.
  - Montmorency Falls — 15 minutes by car; a 30-metre waterfall higher than Niagara, virtually
    uncrowded, with a suspension bridge for panoramic photography.

seo_title:         Auberge Saint-Antoine Quebec City — Relais & Châteaux Value Review
seo_description:   Relais & Châteaux hotel with Michelin 2 Keys in UNESCO Old Quebec City, from €155/night. Full review, prices, and what to do nearby.
seo_keywords:      auberge saint-antoine review, Quebec City luxury hotel, Relais Chateaux North America affordable, best hotel old Quebec, boutique hotel Quebec City

photography_score: 10
hero_alt:          Auberge Saint-Antoine courtyard in Old Quebec City, stone walls and lantern light
added_date:        2026-06-06
```

---

### Hotel 2 of 10

```
slug:              brown-hotel-louisville
name:              The Brown Hotel
city:              Louisville
state_province:    Kentucky
country:           United States
region:            North America
continent:         Americas
latitude:          38.2527
longitude:         -85.7585
five_star_category: Heritage-value five-star
site_score:        86
verdict:           Exceptional value
price_range_eur:   95–175
price_range_note:  USD $104–190/night shoulder season; avoid Derby week (late April/early May) — rates spike 5–10×
booking_score:     8.8 (745 reviews)
official_url:      https://www.brownhotel.com/
booking_url:       https://www.booking.com/hotel/us/the-brown.html

tagline:
  The birthplace of the Hot Brown, in the heart of bourbon country — from €95 a night.

short_description:
  Opened in 1923, the Brown Hotel is Louisville's defining grand hotel: mahogany panelling, velvet
  upholstery, 294 rooms, and the dining room where the Hot Brown sandwich was invented and is still
  served. The hotel sits in the Theater District, walkable to the bourbon bars of Whiskey Row and
  ten minutes from Churchill Downs.

editorial_case:
  At an average rate of €117, this is arguably the best-value piece of American grand hotel heritage
  on the continent — bourbon trail, Derby heritage, and a legendary culinary backstory all included.

risk_flag:
  Some reviewers note worn furnishings and a dated atmosphere; this is a classic heritage hotel, not
  a boutique-contemporary one, and style-forward travellers should read recent room reviews before
  booking.

nearby:
  - Kentucky Bourbon Trail — Evan Williams Bourbon Experience and Louisville Whiskey Row are walkable;
    multiple distilleries are within 30–90 minutes' drive.
  - Muhammad Ali Center — 10 minutes on foot; one of the most powerful sports-and-culture museums
    in the US, with exceptional documentary photography throughout.
  - Churchill Downs — home of the Kentucky Derby; guided tours run year-round outside race season and
    the grandstand is photogenic in any weather.

seo_title:         The Brown Hotel Louisville — Heritage Grand Hotel Value Review
seo_description:   Louisville's 1923 grand hotel, home of the Hot Brown sandwich, from €95/night. Full review, bourbon trail access, and Derby heritage.
seo_keywords:      Brown Hotel Louisville review, luxury hotel Louisville Kentucky, best hotel bourbon trail, Louisville Derby hotel, cheap five star hotel USA

photography_score: 8
hero_alt:          The Brown Hotel lobby, Louisville, mahogany columns and period chandelier
added_date:        2026-06-06
```

---

### Hotel 3 of 10

```
slug:              pfister-hotel-milwaukee
name:              The Pfister Hotel
city:              Milwaukee
state_province:    Wisconsin
country:           United States
region:            North America
continent:         Americas
latitude:          43.0389
longitude:         -87.9065
five_star_category: Heritage-value five-star
site_score:        85
verdict:           Exceptional value
price_range_eur:   125–220
price_range_note:  USD $136–240/night shoulder season; three-phase renovation completed early 2025
booking_score:     9.5 (2,566 reviews)
official_url:      https://www.thepfisterhotel.com/
booking_url:       https://www.booking.com/hotel/us/the-pfister.html

tagline:
  A 9.5 Booking.com score, a Victorian lobby, and a 23rd-floor pool overlooking Lake Michigan.

short_description:
  Opened in 1893, the Pfister is a Victorian grand hotel housing the largest collection of 19th-century
  European art in any US hotel. NBA visiting teams have stayed here for decades. A complete renovation
  was finished in early 2025. The rooftop pool on the 23rd floor looks over Lake Michigan, and the
  Michelin Guide lists it among the country's notable hotel stays — at rates that would be implausible
  in Chicago, three hours to the south.

editorial_case:
  The Pfister has a 9.5 Booking.com score from over 2,500 guests — the most data-confident luxury
  property on this list — and costs less per night than a standard room at a Chicago convention hotel.

risk_flag:
  Milwaukee requires editorial investment: the hotel is extraordinary but the destination pitch must
  work hard to justify the trip for travellers without a pre-existing reason to visit Wisconsin.

nearby:
  - Milwaukee Art Museum (Calatrava wing) — 10 minutes on foot; the brise-soleil "wings" that open
    at noon are one of the most photographed architectural moments in the US Midwest.
  - Milwaukee Public Market and Third Ward — the city's artisan food hall and independent restaurant
    district, walkable from the hotel, with excellent Midwestern craft brewing.
  - Harley-Davidson Museum — 15 minutes by cab; an unexpectedly compelling museum with superb
    exhibition design and some of the most photogenic motorcycles in the world.

seo_title:         The Pfister Hotel Milwaukee — Victorian Grand Hotel Value Review
seo_description:   Milwaukee's iconic 1893 Victorian grand hotel, 9.5 Booking.com score, from €125/night. Full review, Lake Michigan views, and what to see nearby.
seo_keywords:      Pfister Hotel Milwaukee review, best hotel Milwaukee, Milwaukee luxury hotel, Victorian grand hotel USA, affordable five star hotel Midwest

photography_score: 9
hero_alt:          The Pfister Hotel Milwaukee, Victorian lobby with ornate ceiling and period art
added_date:        2026-06-06
```

---

### Hotel 4 of 10

```
slug:              venetian-resort-las-vegas
name:              The Venetian Resort
city:              Las Vegas
state_province:    Nevada
country:           United States
region:            North America
continent:         Americas
latitude:          36.1215
longitude:         -115.1699
five_star_category: True international five-star
site_score:        83
verdict:           Strong value
price_range_eur:   160–250
price_range_note:  USD $175–272/night midweek shoulder season; weekend and event pricing can be 3× higher — always check midweek Sun–Thu rates
booking_score:     8.9 (large review base)
official_url:      https://www.venetianlasvegas.com/
booking_url:       https://www.booking.com/hotel/us/the-venetian-resort.html

tagline:
  Every room is a suite. On a Tuesday in October, it costs less than a standard room in Paris.

short_description:
  The Venetian is an all-suite resort — every standard room is a 650 sq ft suite with a sunken living
  area, which at midweek shoulder rates makes it one of the few places in the world where genuinely
  five-star accommodation costs less than a mid-range European hotel. The Strip location, the Canyon
  Ranch Spa, and the attached Palazzo tower (same property) make it the most operationally capable
  luxury resort in the United States.

editorial_case:
  When major US cities charge $400+ for a standard room, a 650 sq ft all-suite stay in Las Vegas at
  €175 on a Wednesday represents value that requires genuine explanation to a first-time visitor.

risk_flag:
  The value proposition is strictly midweek and off-peak; weekend and event-week rates are among the
  highest in the country. This page should carry a prominent "book Sun–Thu" editorial note.

nearby:
  - The Strip and Fremont Street — Las Vegas's primary entertainment corridor begins at the hotel's
    front door; Michelin-starred restaurants, world-class shows, and free casino photography.
  - The Venetian's Canyon Ranch Spa Club — 134,000 sq ft; one of the largest hotel spas in the world
    and a compelling editorial story in its own right.
  - Neon Museum (Neon Boneyard) — 20 minutes by rideshare; the most visually extraordinary
    photography location in Nevada, with decommissioned casino signs lit for guided evening tours.

seo_title:         The Venetian Resort Las Vegas — All-Suite Value Review
seo_description:   Las Vegas all-suite five-star resort from €160/night midweek. Every room is a 650 sq ft suite. Full review and booking tips.
seo_keywords:      Venetian Las Vegas review, affordable five star Las Vegas, Las Vegas luxury hotel value, Venetian Resort price, best hotel Las Vegas midweek

photography_score: 9
hero_alt:          The Venetian Resort Las Vegas at dusk, Grand Canal and gondola in foreground
added_date:        2026-06-06
```

---

### Hotel 5 of 10

```
slug:              mayo-hotel-tulsa
name:              The Mayo Hotel
city:              Tulsa
state_province:    Oklahoma
country:           United States
region:            North America
continent:         Americas
latitude:          36.1540
longitude:         -95.9928
five_star_category: Heritage-value five-star
site_score:        82
verdict:           Strong value
price_range_eur:   130–190
price_range_note:  USD $140–207/night; average $177; consistent year-round pricing
booking_score:     8.9 (380 reviews)
official_url:      https://themayohotel.com/
booking_url:       https://www.booking.com/hotel/us/the-mayo.html

tagline:
  A 1920s Art Deco skyscraper hotel overlooking America's most intact Art Deco skyline.

short_description:
  Built in 1925 and restored to its original Art Deco splendour, the Mayo sits at the epicentre of
  Tulsa's extraordinary downtown — the most architecturally intact Art Deco city centre in the United
  States. The Penthouse Rooftop Lounge and the Boiler Room restaurant anchor the hotel's social life,
  while the surrounding blocks hold one of America's best-kept heritage walking circuits.

editorial_case:
  Tulsa is routinely overlooked, but its combination of world-class Art Deco architecture, the
  Philbrook Museum, and the Gathering Place park makes it more rewarding than its reputation allows —
  and the Mayo is the correct base for all of it, at a nightly rate below a London hostel bunk.

risk_flag:
  Tulsa demands editorial work: readers need a reason to visit Oklahoma, and the page must supply
  one convincingly or the hotel will be ignored regardless of its quality.

nearby:
  - Art Deco walking circuit — the surrounding six blocks contain more intact Art Deco commercial
    buildings than any US city outside New York; the Mayo sits at the circuit's centre.
  - Philbrook Museum of Art — 15 minutes by car; a 1920s Italian Renaissance villa set on 23 acres
    of formal gardens, housing a permanent collection with genuine international depth.
  - The Gathering Place — 10 minutes by car; a $465M private riverfront park opened in 2018,
    consistently ranked among the best public parks in the United States.

seo_title:         The Mayo Hotel Tulsa — Art Deco Heritage Value Review
seo_description:   Tulsa's 1925 Art Deco landmark hotel, 8.9 Booking.com score, from €130/night. Full review and guide to America's best Art Deco city.
seo_keywords:      Mayo Hotel Tulsa review, Tulsa luxury hotel, Art Deco hotel USA, best hotel Tulsa Oklahoma, affordable heritage hotel America

photography_score: 8
hero_alt:          The Mayo Hotel Tulsa, Art Deco facade at night with neon signage
added_date:        2026-06-06
```

---

### Hotel 6 of 10

```
slug:              central-station-memphis
name:              The Central Station Memphis, Curio Collection by Hilton
city:              Memphis
state_province:    Tennessee
country:           United States
region:            North America
continent:         Americas
latitude:          35.1362
longitude:         -90.0533
five_star_category: Heritage-value five-star
site_score:        81
verdict:           Strong value
price_range_eur:   115–175
price_range_note:  USD $128–190/night shoulder season; live music in the bar most evenings at no extra cost
booking_score:     8.2 (193 reviews)
official_url:      https://centralstationmemphis.com/
booking_url:       https://www.booking.com/hotel/us/the-central-station-memphis-curio-collection-by-hilton.html

tagline:
  Memphis's Art Deco train terminal, converted into a hotel where the bar is also the blues club.

short_description:
  The Central Station opened as Memphis's main railway terminal in 1914 and has been restored as a
  hotel that preserves the full scale of the original Art Deco arrival hall — vaulted ceilings,
  ironwork, original tilework. The hotel occupies the South Main Arts District, Memphis's best
  neighbourhood for independent restaurants and galleries, and functions as a cultural venue: the
  bar hosts live music several nights a week.

editorial_case:
  The only hotel on this list where the building itself is the story — a film-set level of American
  architectural history that costs less per night than a budget hotel in any European capital.

risk_flag:
  Booking.com score of 8.2 is the lowest on this list; WiFi quality has been a recurring complaint.
  The hotel is not in the tourist core — South Main is walkable to Beale Street (1.5km) but not
  immediate.

nearby:
  - Stax Museum of American Soul Music — 15 minutes by rideshare; built on the exact site of the
    original Stax Records studio, with original recording equipment and gold records in situ.
  - National Civil Rights Museum at the Lorraine Motel — 15 minutes; built around the room where
    Dr. King was assassinated; the most important civil rights memorial in the United States.
  - Sun Studio — 20 minutes; where Elvis, Johnny Cash, Jerry Lee Lewis and BB King all recorded;
    still a functioning studio and one of the best-value tours in the country.

seo_title:         Central Station Memphis — Art Deco Train Station Hotel Review
seo_description:   Memphis's 1914 Art Deco train terminal converted to a boutique hotel, from €115/night. Full review, South Main Arts District guide, and what's nearby.
seo_keywords:      Central Station Memphis review, Memphis boutique hotel train station, best hotel Memphis Tennessee, luxury hotel South Main Memphis, heritage hotel USA

photography_score: 9
hero_alt:          Central Station Memphis, vaulted Art Deco arrival hall with original ironwork and warm lighting
added_date:        2026-06-06
```

---

### Hotel 7 of 10

```
slug:              the-nines-portland
name:              The Nines, a Luxury Collection Hotel
city:              Portland
state_province:    Oregon
country:           United States
region:            North America
continent:         Americas
latitude:          45.5202
longitude:         -122.6783
five_star_category: True international five-star
site_score:        80
verdict:           Strong value
price_range_eur:   140–225
price_range_note:  USD $154–245/night shoulder season; cheapest rates in January and November; avoid Rose Festival (June) and peak summer
booking_score:     8.8 (132 reviews)
official_url:      https://www.thenines.com/
booking_url:       https://www.booking.com/hotel/us/the-nines.html

tagline:
  The cheapest true five-star city in America — in a 1909 department store above Pioneer Square.

short_description:
  The Nines occupies the upper floors of the historic Meier & Frank building above Portland's Pioneer
  Place, part of Marriott's Luxury Collection. The 1909 building's structure is preserved and visible
  throughout, while the rooms and public spaces carry a strong Pacific Northwest design identity.
  Portland is confirmed by Hotels.com's 2025 data as the cheapest city in the United States for
  five-star hotels, with an average of $287/night.

editorial_case:
  A genuine Luxury Collection brand property in a historic building, at rates that are structurally
  the lowest available in any US city for this product tier.

risk_flag:
  Portland's downtown carried significant reputational baggage from 2022–2023; conditions have
  improved but editorial copy should acknowledge this directly to maintain reader trust. Low
  Booking.com review count (132) means less data confidence than other entries.

nearby:
  - Powell's City of Books — 10 minutes on foot; the largest independent bookshop in the world and
    a genuine Portland landmark with extraordinary photographic potential.
  - Portland Art Museum — 15 minutes on foot; the oldest art museum in the Pacific Northwest, with
    a strong Native American and Pacific Rim collection.
  - Japanese Garden — 20 minutes by rideshare; considered one of the most authentic Japanese gardens
    outside Japan, set on 12 acres of forested hillside above the city.

seo_title:         The Nines Portland — Luxury Collection Hotel Value Review
seo_description:   Portland's flagship five-star Luxury Collection hotel in a 1909 historic building, from €140/night. Full review — America's cheapest five-star city.
seo_keywords:      The Nines Portland review, Portland luxury hotel, affordable five star Portland Oregon, Luxury Collection hotel Portland, best hotel Portland

photography_score: 8
hero_alt:          The Nines Portland atrium, 1909 Meier & Frank building interior with contemporary furnishings
added_date:        2026-06-06
```

---

### Hotel 8 of 10

```
slug:              21c-museum-hotel-louisville
name:              21c Museum Hotel Louisville
city:              Louisville
state_province:    Kentucky
country:           United States
region:            North America
continent:         Americas
latitude:          38.2555
longitude:         -85.7560
five_star_category: Near-luxury exception
site_score:        80
verdict:           Strong value
price_range_eur:   115–180
price_range_note:  USD $127–200/night; flagship location of the 21c chain; rates lowest Sun–Thu
booking_score:     8.7 (186 reviews)
official_url:      https://21cmuseumhotels.com/louisville/
booking_url:       https://www.booking.com/hotel/us/21c-museum.html

tagline:
  A functioning contemporary art museum you can sleep inside — Michelin-listed and under €120 on a weeknight.

short_description:
  The original and flagship location of the 21c Museum Hotels brand (now Accor MGallery), the
  Louisville property is a working contemporary art museum open to the public 24 hours a day, with
  guest rooms positioned throughout. The rotating collection spills into corridors and stairwells.
  Michelin Guide listed. The Proof on Main restaurant has its own culinary following independent of
  the hotel. This is the art-hotel format at its American best.

editorial_case:
  A Michelin-listed property where the standard room includes free entry to a functioning contemporary
  art museum — at rates that make comparable design hotels in Berlin look expensive.

risk_flag:
  Near-luxury exception category (four-star boutique, not a traditional five-star); only 186
  Booking.com reviews provides limited data confidence. Louisville is already represented on this
  list by the Brown Hotel — editors should confirm both entries are justified.

nearby:
  - Louisville Slugger Museum and Factory — 5 minutes on foot; the world's most visited baseball bat
    manufacturer, with a 36m bat leaning against the building's exterior.
  - NuLu (East Market District) — 10 minutes on foot; Louisville's most creative food, bar and
    boutique neighbourhood, with some of the best cocktail programmes in the American South.
  - Whiskey Row on Main Street — walkable; a block of restored 19th-century iron-facade buildings
    housing craft distilleries and bourbon bars, photogenic at any hour.

seo_title:         21c Museum Hotel Louisville — Art Hotel Value Review
seo_description:   Louisville's Michelin-listed art museum hotel, from €115/night. Full review — sleep inside a functioning contemporary art gallery in bourbon country.
seo_keywords:      21c Museum Hotel Louisville review, art hotel USA affordable, boutique hotel Louisville, museum hotel cheap, 21c Louisville Michelin

photography_score: 9
hero_alt:          21c Museum Hotel Louisville, contemporary art installation in lobby corridor with dramatic lighting
added_date:        2026-06-06
```

---

### Hotel 9 of 10

```
slug:              kimpton-cottonwood-omaha
name:              Kimpton Cottonwood Hotel
city:              Omaha
state_province:    Nebraska
country:           United States
region:            North America
continent:         Americas
latitude:          41.2565
longitude:         -95.9345
five_star_category: Heritage-value five-star
site_score:        78
verdict:           Conditional value
price_range_eur:   125–185
price_range_note:  USD $135–205/night; cheapest in February and November; avoid College World Series (June) — rates spike significantly
booking_score:     8.8 est. (TripAdvisor 4.5/5; Booking.com couples score 9.0)
official_url:      https://www.thecottonwoodhotel.com/
booking_url:       https://www.booking.com/hotel/us/kimpton-cottonwood.html

tagline:
  The 1916 hotel once considered the finest between Chicago and San Francisco — restored at $75M and priced like Nebraska.

short_description:
  The Kimpton Cottonwood is the restored Blackstone Hotel, a 1916 Beaux-Arts landmark that was once
  the most prestigious hotel between Chicago and San Francisco. A $75M restoration reopened it in 2020
  with 205 rooms and 31 suites, European-inspired interiors, and Kimpton's characteristic independent
  spirit. The Blackstone District around the hotel has become Omaha's most interesting neighbourhood
  for independent restaurants and bars.

editorial_case:
  A $75M restoration of a century-old landmark at Midwestern pricing is a genuinely rare proposition —
  the kind of hotel that would be discussed as a discovery if it were in Europe.

risk_flag:
  Omaha is a difficult pitch for international readers with no pre-existing reason to visit Nebraska;
  the editorial page needs a strong destination hook (the zoo, Warren Buffett pilgrimage season, College
  World Series) to work. Overall Booking.com score not directly confirmed — editor should verify.

nearby:
  - Henry Doorly Zoo and Aquarium — 20 minutes by rideshare; consistently ranked among the top 5 zoos
    in the world, with a 1.5-hectare indoor rainforest and the world's largest indoor desert.
  - Joslyn Art Museum — 15 minutes; a 1931 Art Deco landmark housing a strong American West and
    European collection, free admission.
  - The Old Market District — 20 minutes on foot; Omaha's original warehouse district with independent
    restaurants, galleries and a cobblestone streetscape that photographs well.

seo_title:         Kimpton Cottonwood Hotel Omaha — Heritage Hotel Value Review
seo_description:   Omaha's restored 1916 Blackstone Hotel, $75M renovation, from €125/night. Full review of the Kimpton Cottonwood and Omaha travel guide.
seo_keywords:      Kimpton Cottonwood Hotel Omaha review, Blackstone Hotel Omaha, best hotel Omaha Nebraska, heritage hotel Midwest USA, affordable luxury Omaha

photography_score: 8
hero_alt:          Kimpton Cottonwood Hotel Omaha, Beaux-Arts facade and ornate lobby after $75M restoration
added_date:        2026-06-06
```

---

### Hotel 10 of 10

```
slug:              perry-lane-hotel-savannah
name:              Perry Lane Hotel, a Luxury Collection Hotel
city:              Savannah
state_province:    Georgia
country:           United States
region:            North America
continent:         Americas
latitude:          32.0810
longitude:         -81.0912
five_star_category: True international five-star
site_score:        77
verdict:           Conditional value
price_range_eur:   210–290
price_range_note:  USD $230–315/night shoulder season; January–February and August–September are lowest; avoid St. Patrick's Day (March) — rates spike
booking_score:     9.0 (184 reviews)
official_url:      https://www.perrylanehotel.com/
booking_url:       https://www.booking.com/hotel/us/perry-lane-a-luxury-collection-savannah.html

tagline:
  The #1-ranked hotel in America's most photogenic city — on a midweek winter booking, under €230.

short_description:
  Opened in 2018, Perry Lane is a 167-room Marriott Luxury Collection hotel positioned inside
  Savannah's Historic District — the most intact antebellum urban landscape in the United States.
  The hotel features a local art collection, a rooftop pool, and a ground-floor restaurant that has
  become a neighbourhood anchor. US News & World Report consistently ranks it the best hotel in
  Savannah.

editorial_case:
  The best-rated hotel in a city whose streets look like a film set, at prices that are competitive
  with standard rooms in Atlanta — 4 hours to the northwest.

risk_flag:
  At €210–290 this sits at the top of the site's price range; shoulder season (January–February)
  provides the clearest value. Savannah is increasingly popular and pricing reflects demand — the
  editorial case rests on careful date selection.

nearby:
  - Forsyth Park — 5 minutes on foot; Savannah's centrepiece Victorian park, one of the most
    photographed green spaces in the American South.
  - SCAD Museum of Art — 10 minutes on foot; the Savannah College of Art and Design's exhibition
    space in a restored 1856 building, free entry and consistently well-curated.
  - Mercer Williams House Museum — 10 minutes on foot; the house from "Midnight in the Garden of
    Good and Evil," with guided tours covering Savannah's most famous true crime story.

seo_title:         Perry Lane Hotel Savannah — Luxury Collection Value Review
seo_description:   Savannah's #1-ranked Luxury Collection hotel in the Historic District, from €210/night. Full review and guide to America's most photogenic city.
seo_keywords:      Perry Lane Hotel Savannah review, best hotel Savannah Georgia, Savannah luxury hotel Historic District, Luxury Collection Savannah, Savannah hotel value

photography_score: 9
hero_alt:          Perry Lane Hotel Savannah rooftop pool at dusk, Savannah Historic District rooftops in background
added_date:        2026-06-06
```

---

## Phase 2 — Updated Global Rankings Table

The rankings table must reflect the **full 30-hotel collection** after these additions. Below is the complete updated table. Replace the current 20-hotel table with this one in its entirety.

| # | Hotel | Region | Score |
|---|-------|--------|-------|
| 1 | Hotel Majapahit Surabaya – MGallery Collection | Surabaya, Indonesia | 91 |
| 2 | Auberge Saint-Antoine | Quebec City, Canada | 90 |
| 3 | The Phoenix Hotel Yogyakarta – Handwritten Collection | Yogyakarta, Indonesia | 89 |
| 4 | The Majestic Hotel Kuala Lumpur, Autograph Collection | Kuala Lumpur, Malaysia | 87 |
| 5 | The Brown Hotel | Louisville, USA | 86 |
| 6 | The Pfister Hotel | Milwaukee, USA | 85 |
| 7 | The Raweekanlaya Bangkok Wellness Cuisine Resort | Bangkok, Thailand | 85 |
| 8 | Stamba Hotel | Tbilisi, Georgia | 84 |
| 9 | Angkor Aurora | Siem Reap, Cambodia | 83 |
| 10 | The Venetian Resort | Las Vegas, USA | 83 |
| 11 | The Royal Surakarta Heritage – Handwritten Collection | Solo, Indonesia | 82 |
| 12 | The Mayo Hotel | Tulsa, USA | 82 |
| 13 | Pleiada Boutique Hotel & Spa | Iași, Romania | 81 |
| 14 | Steigenberger Resort Achti Luxor | Luxor, Egypt | 81 |
| 15 | The Central Station Memphis | Memphis, USA | 81 |
| 16 | Silk Path Grand Hue Hotel & Spa | Hue, Vietnam | 80 |
| 17 | The Hermitage, a Tribute Portfolio Hotel | Jakarta, Indonesia | 80 |
| 18 | The Nines | Portland, USA | 80 |
| 19 | 21c Museum Hotel Louisville | Louisville, USA | 80 |
| 20 | Hyatt Regency Tashkent | Tashkent, Uzbekistan | 79 |
| 21 | Grand Hotel Yerevan | Yerevan, Armenia | 78 |
| 22 | Kimpton Cottonwood | Omaha, USA | 78 |
| 23 | Sofitel Marrakech Palais Imperial & Spa | Marrakech, Morocco | 78 |
| 24 | Perry Lane Hotel | Savannah, USA | 77 |
| 25 | Boton Blue Hotel & Spa | Nha Trang, Vietnam | 76 |
| 26 | I'M Hotel Makati | Makati, Philippines | 75 |
| 27 | Malak Regency Hotel | Sarajevo, Bosnia and Herzegovina | 73 |
| 28 | Real Marina Hotel & Spa | Olhão, Portugal | 72 |
| 29 | Graffit Gallery Design Hotel | Varna, Bulgaria | 71 |
| 30 | Millennium Downtown Abu Dhabi | Abu Dhabi, UAE | 68 |

---

## Phase 3 — All Site Elements to Update

Work through every item in this checklist. Do not skip any.

### 3.1 — Hotel count / statistics
Search for any hardcoded hotel count (e.g., "20 hotels", "twenty hotels", "20 destinations"). Update all instances to **30**.

Search patterns:
```bash
grep -r "20 hotel\|twenty hotel\|20 destination\|20 properties" --include="*.html" --include="*.jsx" --include="*.tsx" --include="*.vue" --include="*.md" --include="*.js" --include="*.ts" -l
```

---

### 3.2 — Hotel data file
Add all 10 hotel objects to the primary data source (JSON array, JS/TS export, YAML file, CMS entries, or Markdown files — whatever the existing 20 hotels use). Match the exact schema of existing entries. Do not add fields that do not exist in the schema; do not omit required fields.

If the codebase uses individual Markdown or MDX files per hotel, create one file per hotel using the slug as the filename (e.g., `auberge-saint-antoine-quebec-city.md`).

---

### 3.3 — Region / continent filters
The site currently covers: Southeast Asia, Europe, Caucasus/Central Asia, Middle East, North Africa.

Add the following new filter values if they do not already exist:
- **Region:** `North America`
- **Country:** `United States`, `Canada`
- **Continent:** `Americas`

Search for where existing region filter options are defined:
```bash
grep -r "Southeast Asia\|Caucasus\|Europe\|filterRegion\|regions\b" --include="*.jsx" --include="*.tsx" --include="*.vue" --include="*.js" --include="*.ts" -l
```

Update the filter list, dropdown options, or constants file to include the new values.

---

### 3.4 — Navigation (if region-based)
If the nav includes region links (e.g., "Asia", "Europe"), add a **"North America / Americas"** link. Match the existing nav structure exactly.

---

### 3.5 — Homepage
Check whether the homepage includes any of:
- A "latest additions" or "recently added" section → add the top-ranked new hotels (Auberge Saint-Antoine, Brown Hotel, Pfister) as the newest entries
- A "featured hotels" carousel or grid → optionally feature the top 3 new additions
- A "regions covered" section or map → add North America / Americas
- Any hardcoded hotel count → update to 30 (covered in 3.1)

---

### 3.6 — Rankings / leaderboard page
Replace the full rankings table with the 30-hotel version specified in Phase 2 above. Maintain the same table component, sorting logic, and visual style. The new hotels must be visually distinguishable as "new" only if the existing hotels already carry a "new" badge or indicator — if not, do not add one.

---

### 3.7 — Individual hotel pages
If the site generates individual pages per hotel (e.g., `/hotels/stamba-hotel-tbilisi`), ensure that all 10 new hotels have pages generated at their slugs:
```
/hotels/auberge-saint-antoine-quebec-city
/hotels/brown-hotel-louisville
/hotels/pfister-hotel-milwaukee
/hotels/venetian-resort-las-vegas
/hotels/mayo-hotel-tulsa
/hotels/central-station-memphis
/hotels/the-nines-portland
/hotels/21c-museum-hotel-louisville
/hotels/kimpton-cottonwood-omaha
/hotels/perry-lane-hotel-savannah
```
If pages are statically generated (Next.js `getStaticPaths`, Gatsby `createPage`, Eleventy, Hugo, etc.), ensure the new slugs are included in the build.

---

### 3.8 — SEO metadata (per hotel page)
Each individual hotel page must have the following in `<head>`:

```html
<!-- Use the per-hotel values from the data in Phase 1 -->
<title>{seo_title} | 50fivestarhotels.com</title>
<meta name="description" content="{seo_description}" />
<meta name="keywords" content="{seo_keywords}" />

<!-- Open Graph -->
<meta property="og:title" content="{seo_title}" />
<meta property="og:description" content="{seo_description}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="https://50fivestarhotels.com/hotels/{slug}" />
<meta property="og:image" content="https://50fivestarhotels.com/images/hotels/{slug}/hero.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{seo_title}" />
<meta name="twitter:description" content="{seo_description}" />
<meta name="twitter:image" content="https://50fivestarhotels.com/images/hotels/{slug}/hero.jpg" />
```

---

### 3.9 — JSON-LD structured data (per hotel page)
If any existing hotel page includes `application/ld+json` schema markup, add the following template to all 10 new hotel pages, substituting values from Phase 1:

```json
{
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "{name}",
  "description": "{short_description}",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "{city}",
    "addressRegion": "{state_province}",
    "addressCountry": "{country}"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": {latitude},
    "longitude": {longitude}
  },
  "url": "{official_url}",
  "priceRange": "€{price_range_eur}",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{booking_score_numeric}",
    "reviewCount": "{booking_review_count}",
    "ratingCount": "{booking_review_count}"
  }
}
```

If no existing hotel pages have JSON-LD, do not add it — maintain consistency with the existing codebase.

---

### 3.10 — XML sitemap
If the site has a static `sitemap.xml` or a sitemap generator:

For **static sitemap.xml**, add 10 new `<url>` entries:
```xml
<url>
  <loc>https://50fivestarhotels.com/hotels/{slug}</loc>
  <lastmod>2026-06-06</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

For **dynamic sitemap generators** (Next.js, Gatsby, etc.), ensure the new hotel slugs are included in whatever function returns the list of hotel paths.

---

### 3.11 — Internal links ("You might also like" / related hotels)
If any existing hotel pages display related hotel suggestions, check whether these are:
- Hardcoded per hotel → no action needed for existing pages, but set up related suggestions for new hotel pages using geographically or thematically similar hotels
- Automatically generated by region/score proximity → no action needed; the algorithm will include new hotels automatically once the data is added

If related hotels are hardcoded:
- **Auberge Saint-Antoine** → suggest: Pleiada Boutique Hotel Iași, Stamba Hotel Tbilisi
- **Brown Hotel Louisville** → suggest: 21c Museum Hotel Louisville, Pfister Hotel Milwaukee
- **Pfister Hotel Milwaukee** → suggest: Brown Hotel Louisville, Kimpton Cottonwood Omaha
- **Venetian Resort** → suggest: The Nines Portland, Perry Lane Hotel Savannah
- **Mayo Hotel Tulsa** → suggest: Central Station Memphis, Brown Hotel Louisville
- **Central Station Memphis** → suggest: Mayo Hotel Tulsa, 21c Museum Hotel Louisville
- **The Nines Portland** → suggest: Venetian Resort, Kimpton Cottonwood Omaha
- **21c Museum Hotel Louisville** → suggest: Brown Hotel Louisville, Central Station Memphis
- **Kimpton Cottonwood Omaha** → suggest: Pfister Hotel Milwaukee, Mayo Hotel Tulsa
- **Perry Lane Hotel Savannah** → suggest: Venetian Resort, The Nines Portland

---

### 3.12 — Score display and verdict labels
Confirm the verdict label used on each hotel card and page matches the tier system:
- Score 85–100: **Exceptional value**
- Score 75–84: **Strong value**
- Score 65–74: **Good value**
- Score 55–64: **Conditional value**

Applied to new hotels:
| Hotel | Score | Verdict label |
|---|---|---|
| Auberge Saint-Antoine | 90 | Exceptional value |
| Brown Hotel | 86 | Exceptional value |
| Pfister Hotel | 85 | Exceptional value |
| Venetian Resort | 83 | Strong value |
| Mayo Hotel | 82 | Strong value |
| Central Station Memphis | 81 | Strong value |
| The Nines | 80 | Strong value |
| 21c Museum Hotel Louisville | 80 | Strong value |
| Kimpton Cottonwood | 78 | Strong value |
| Perry Lane Hotel | 77 | Strong value |

---

### 3.13 — Five-star category tags
Confirm these labels exist in the codebase's category taxonomy and add any missing values:
- `True international five-star` — likely already present
- `Heritage-value five-star` — likely already present
- `Near-luxury exception` — confirm this exists; add if not

---

### 3.14 — Image placeholders
If the codebase expects hero images at a specific path (e.g., `/public/images/hotels/{slug}/hero.jpg`), create the directory structure for all 10 new hotels and place a placeholder or note:

```bash
mkdir -p public/images/hotels/auberge-saint-antoine-quebec-city
mkdir -p public/images/hotels/brown-hotel-louisville
mkdir -p public/images/hotels/pfister-hotel-milwaukee
mkdir -p public/images/hotels/venetian-resort-las-vegas
mkdir -p public/images/hotels/mayo-hotel-tulsa
mkdir -p public/images/hotels/central-station-memphis
mkdir -p public/images/hotels/the-nines-portland
mkdir -p public/images/hotels/21c-museum-hotel-louisville
mkdir -p public/images/hotels/kimpton-cottonwood-omaha
mkdir -p public/images/hotels/perry-lane-hotel-savannah
```

Add a `README.md` in each folder with the `hero_alt` text from Phase 1 as a brief for the photography team. Do not use placeholder images from external services.

---

## Phase 4 — Verification Checklist

After completing all changes, verify the following before committing:

```bash
# 1. Build passes without errors
npm run build   # or yarn build / next build / gatsby build / hugo / etc.

# 2. All 30 hotel slugs produce valid routes
# (For Next.js: check .next/server/pages/hotels/ or app/hotels/)
# (For static sites: check the dist/hotels/ or public/hotels/ output)

# 3. No hardcoded "20" hotel counts remain
grep -r '"20"\|"20 hotels"\|20 destinations\|totalHotels.*20' --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx" --include="*.vue" --include="*.html" --include="*.md" .

# 4. All 10 new slugs appear in the rankings table render
grep -r "auberge-saint-antoine\|brown-hotel-louisville\|pfister-hotel-milwaukee" --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx" --include="*.json" .

# 5. Region filter includes North America
grep -r "North America" --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx" --include="*.json" .

# 6. Sitemap includes new URLs (if static)
grep "auberge-saint-antoine" public/sitemap.xml 2>/dev/null || echo "Check sitemap generator output"
```

---

## Notes for Codex

- **Do not alter existing hotel data.** Only add the 10 new hotels and update elements that directly reference the hotel count or collection.
- **Maintain code style.** Match the formatting, naming conventions and import patterns used by existing hotel entries.
- **Do not add fields that do not exist in the current schema.** If the current schema does not have a `photography_score` field, do not add one. Map Phase 1 data to the fields that exist.
- **The hotel data above is editorially final.** Do not rewrite descriptions, alter scores, or change price ranges.
- **If you encounter ambiguity** (e.g., multiple data sources, unclear schema), stop and output a concise question before proceeding. Do not guess.
