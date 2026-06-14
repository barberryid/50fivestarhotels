// src/data/researchPreferences.ts
// Static config for the optional "Personalise the research" section on
// /research-hotels/. Shared between the Astro render (labels, options,
// preset buttons) and the client script (preset values, defaults).

export const importanceScale = [
  { value: 0, label: '0 — Not important' },
  { value: 1, label: '1 — Low' },
  { value: 2, label: '2 — Medium-low' },
  { value: 3, label: '3 — Medium' },
  { value: 4, label: '4 — High' },
  { value: 5, label: '5 — Essential' },
] as const;

// Fixed preference factors (the custom factor is handled separately).
export const preferenceFactors = [
  {
    key: 'safety',
    label: 'Safety of the area',
    help: 'How safe the immediate neighbourhood and wider city feel.',
  },
  {
    key: 'sights',
    label: 'Close to main tourist sights',
    help: 'Walkable or easy access to the destination’s highlights.',
  },
  {
    key: 'quietness',
    label: 'Quietness',
    help: 'Calm rooms and surroundings, away from noise.',
  },
  {
    key: 'walkability',
    label: 'Walkability',
    help: 'Prefer hotels where restaurants, sights or transport are easy to reach without relying on taxis.',
  },
  {
    key: 'foodNeighbourhood',
    label: 'Food and neighbourhood interest',
    help: 'Prefer hotels near good restaurants, cafes, markets or an interesting local area.',
  },
  {
    key: 'character',
    label: 'Character, heritage or design',
    help: 'Prefer hotels that feel distinctive rather than generic.',
  },
] as const;

export type PreferenceKey = (typeof preferenceFactors)[number]['key'];

export interface PreferenceState {
  preset: string | null;
  safety: number;
  sights: number;
  quietness: number;
  walkability: number;
  foodNeighbourhood: number;
  character: number;
  customText: string;
  customImportance: number;
}

export const defaultPreferences: PreferenceState = {
  preset: 'best-value',
  safety: 3,
  sights: 3,
  quietness: 2,
  walkability: 3,
  foodNeighbourhood: 2,
  character: 3,
  customText: '',
  customImportance: 0,
};

// Quick-start traveller profiles. Selecting one pre-fills the controls; the
// user can still edit every field afterwards.
export const travellerPresets: {
  key: string;
  label: string;
  values: Omit<PreferenceState, 'preset'>;
}[] = [
  {
    key: 'first-time',
    label: 'First-time visitor',
    values: { safety: 5, sights: 5, quietness: 2, walkability: 5, foodNeighbourhood: 3, character: 3, customText: '', customImportance: 0 },
  },
  {
    key: 'romantic',
    label: 'Romantic trip',
    values: { safety: 4, sights: 3, quietness: 4, walkability: 3, foodNeighbourhood: 3, character: 5, customText: 'Romantic atmosphere', customImportance: 5 },
  },
  {
    key: 'food-city',
    label: 'Food and city exploring',
    values: { safety: 3, sights: 4, quietness: 2, walkability: 5, foodNeighbourhood: 5, character: 3, customText: '', customImportance: 0 },
  },
  {
    key: 'quiet-safe',
    label: 'Quiet and safe base',
    values: { safety: 5, sights: 3, quietness: 5, walkability: 3, foodNeighbourhood: 2, character: 2, customText: 'Easy arrival and transport', customImportance: 4 },
  },
  {
    key: 'best-value',
    label: 'Best-value comfort',
    values: { safety: 3, sights: 3, quietness: 3, walkability: 3, foodNeighbourhood: 2, character: 4, customText: 'Best price-value ratio', customImportance: 5 },
  },
];

export const preferencesStorageKey = '50fivestarhotels-research-preferences';
