export const researchPriceLevels = [
  {
    amount: 50,
    title: 'Impossible finds',
    text: 'Search first for credible five-star or near-five-star rooms at €50 or below.',
  },
  {
    amount: 100,
    title: 'Budget luxury',
    text: 'Capture the strongest affordable luxury candidates that still feel genuinely special.',
  },
  {
    amount: 150,
    title: 'Reliable value',
    text: 'Open the search to better locations, stronger reviews and more dependable quality.',
  },
  {
    amount: 250,
    title: 'Smart splurge',
    text: 'Keep higher-quality hotels in expensive markets if the value still feels unusual.',
  },
] as const;

export type ResearchPriceLevel = (typeof researchPriceLevels)[number];
