export const researchPriceLevels = [
  {
    amount: 50,
    title: 'Long-shot bargain',
    text: 'Rare, but worth checking in low-cost markets. If no credible option appears, show the next best fallback hotels clearly marked.',
  },
  {
    amount: 100,
    title: 'Budget luxury',
    text: 'The most distinctive category: hotels that can feel surprisingly good for the price outside peak dates.',
  },
  {
    amount: 150,
    title: 'Better reliability',
    text: 'Allows stronger hotels, better locations and fewer compromises in many markets.',
  },
  {
    amount: 250,
    title: 'Smart splurge',
    text: 'Useful for expensive cities, special occasions or genuinely stronger properties that still undercut normal luxury pricing.',
  },
] as const;

export type ResearchPriceLevel = (typeof researchPriceLevels)[number];
