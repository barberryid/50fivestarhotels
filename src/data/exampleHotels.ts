// Curated example hotels for the homepage "featured" strip and the Collection
// grid. This is the editorial dataset from the redesign handoff — fixed copy,
// scores and dusk imagery — kept separate from the full `hotels` content
// collection so the marketing screens stay pixel-faithful to the design.

export interface ExampleHotel {
  slug: string;
  img: string;
  title: string;
  place: string;
  type: string;
  tier: string;
  tierMax: number;
  price: string;
  score: number;
  verdict: string;
}

const B = '/images/example-hotels/';

export const exampleHotels: ExampleHotel[] = [
  { slug: 'grand-hotel-wagner-palermo', img: B + 'grand-hotel-wagner-palermo.webp', title: 'Grand Hotel Wagner', place: 'Palermo, Italy', type: 'Heritage grand hotel', tier: 'Under €250', tierMax: 250, price: 'Often €110–€220 on good shoulder dates', score: 94, verdict: 'Exceptional value' },
  { slug: 'hotel-de-la-cite-carcassonne', img: B + 'hotel-de-la-cite-carcassonne.webp', title: 'Hôtel de la Cité', place: 'Carcassonne, France', type: 'Medieval citadel hotel', tier: 'Under €250', tierMax: 250, price: 'Often €187–€245 in shoulder season', score: 94, verdict: 'Exceptional value' },
  { slug: 'relais-antica-badia-ragusa', img: B + 'relais-antica-badia-ragusa.webp', title: 'Relais Antica Badia', place: 'Ragusa, Italy', type: 'Sicilian baroque relais', tier: 'Under €200', tierMax: 200, price: 'Often €120–€190 in shoulder season', score: 92, verdict: 'Exceptional value' },
  { slug: 'hotel-majapahit-surabaya', img: B + 'hotel-majapahit-surabaya.webp', title: 'Hotel Majapahit', place: 'Surabaya, Indonesia', type: 'Heritage hotel · MGallery', tier: 'Under €100', tierMax: 100, price: 'Often €70–€120 outside peak dates', score: 91, verdict: 'Exceptional value' },
  { slug: 'royal-surakarta-heritage', img: B + 'royal-surakarta-heritage.webp', title: 'Royal Surakarta Heritage', place: 'Solo, Indonesia', type: 'Palace heritage hotel', tier: 'Under €50', tierMax: 50, price: 'Snapshot rates seen €25–€35; recheck dates', score: 91, verdict: 'Exceptional value' },
  { slug: 'regent-petite-france-strasbourg', img: B + 'regent-petite-france-strasbourg.webp', title: 'Régent Petite France', place: 'Strasbourg, France', type: 'Canalside five-star & spa', tier: 'Under €250', tierMax: 250, price: 'From about €249 on the right dates', score: 90, verdict: 'Exceptional value' },
  { slug: 'hotel-de-bourgtheroulde-rouen', img: B + 'hotel-de-bourgtheroulde-rouen.webp', title: 'Hôtel de Bourgtheroulde', place: 'Rouen, France', type: 'Renaissance mansion hotel', tier: 'Under €250', tierMax: 250, price: 'Often €172–€246 in shoulder season', score: 89, verdict: 'Exceptional value' },
  { slug: 'raweekanlaya-bangkok', img: B + 'raweekanlaya-bangkok.webp', title: 'The Raweekanlaya', place: 'Bangkok, Thailand', type: 'Wellness resort', tier: 'Under €200', tierMax: 200, price: 'Often €90–€160 outside peak dates', score: 85, verdict: 'Exceptional value' },
  { slug: 'stamba-hotel-tbilisi', img: B + 'stamba-hotel-tbilisi.webp', title: 'Stamba Hotel', place: 'Tbilisi, Georgia', type: 'Design hotel', tier: 'Under €250', tierMax: 250, price: 'Often €130–€220 outside peak dates', score: 84, verdict: 'Strong value' },
  { slug: 'silk-path-grand-hue', img: B + 'silk-path-grand-hue.webp', title: 'Silk Path Grand Hue', place: 'Hue, Vietnam', type: 'City hotel & spa', tier: 'Under €100', tierMax: 100, price: 'Often €55–€90 outside peak dates', score: 80, verdict: 'Strong value' },
  { slug: 'sofitel-marrakech', img: B + 'sofitel-marrakech.webp', title: 'Sofitel Marrakech', place: 'Marrakech, Morocco', type: 'Palace resort & spa', tier: 'Under €250', tierMax: 250, price: 'Often €130–€220 outside peak dates', score: 78, verdict: 'Strong value' },
  { slug: 'grand-hotel-yerevan', img: B + 'grand-hotel-yerevan.webp', title: 'Grand Hotel Yerevan', place: 'Yerevan, Armenia', type: 'Classic grand hotel', tier: 'Under €200', tierMax: 200, price: 'Often €85–€145 outside peak dates', score: 78, verdict: 'Strong value' },
];

// Pulled from the content collection (not the dusk image set) so the homepage
// featured strip can showcase it in the under-€100 slot.
export const brownHotelLouisville: ExampleHotel = {
  slug: 'brown-hotel-louisville',
  img: '/images/hotels/brown-hotel-louisville-ai-hero.webp',
  title: 'The Brown Hotel',
  place: 'Louisville, USA',
  type: 'Heritage grand hotel',
  tier: 'Under €100',
  tierMax: 100,
  price: 'Often €95–€175 in shoulder season',
  score: 86,
  verdict: 'Exceptional value',
};
