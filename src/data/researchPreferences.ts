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

// The three fixed preference factors (the custom factor is handled separately).
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
] as const;

export interface PreferenceState {
  preset: string | null;
  safety: number;
  sights: number;
  quietness: number;
  customText: string;
  customImportance: number;
}

export const defaultPreferences: PreferenceState = {
  preset: 'balanced',
  safety: 3,
  sights: 3,
  quietness: 2,
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
    key: 'balanced',
    label: 'Balanced traveller',
    values: { safety: 3, sights: 3, quietness: 2, customText: '', customImportance: 0 },
  },
  {
    key: 'first-time',
    label: 'First-time visitor',
    values: { safety: 5, sights: 5, quietness: 2, customText: 'Walkability', customImportance: 4 },
  },
  {
    key: 'light-sleeper',
    label: 'Light sleeper',
    values: { safety: 3, sights: 2, quietness: 5, customText: 'Room soundproofing', customImportance: 5 },
  },
  {
    key: 'value-hunter',
    label: 'Value hunter',
    values: { safety: 3, sights: 2, quietness: 2, customText: 'Best price-value ratio', customImportance: 5 },
  },
  {
    key: 'romantic',
    label: 'Romantic trip',
    values: { safety: 4, sights: 3, quietness: 4, customText: 'Romantic atmosphere', customImportance: 5 },
  },
  {
    key: 'food-culture',
    label: 'Food & culture traveller',
    values: { safety: 3, sights: 4, quietness: 2, customText: 'Nearby food and cultural experiences', customImportance: 5 },
  },
];

export const preferencesStorageKey = '50fivestarhotels-research-preferences';
