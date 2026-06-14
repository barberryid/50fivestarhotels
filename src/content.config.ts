import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const hotels = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hotels' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    rank: z.number(),
    city: z.string(),
    country: z.string(),
    region: z.string(),
    budgetTier: z.enum(['Under €50', 'Under €100', 'Under €200', 'Under €250']),
    secondaryTier: z.string().optional(),
    typicalPriceRange: z.string(),
    hotelType: z.string(),
    fiveStarStatus: z.string(),
    bestFor: z.array(z.string()),
    notIdealFor: z.array(z.string()).optional(),
    valueScore: z.number(),
    verdict: z.enum([
      'Exceptional value',
      'Strong value',
      'Good value',
      'Conditional value',
      'Reject for now',
    ]),
    bookingUrl: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      srcSet: z.object({
        large: z.string(),
        small: z.string(),
      }).optional(),
      attribution: z.string().optional(),
      sourcePageUrl: z.string().optional(),
      sourceSite: z.string().optional(),
      photographer: z.string().optional(),
      license: z.string().optional(),
      licenseUrl: z.string().optional(),
      todo: z.boolean().optional(),
    }),
    generatedGallery: z.array(
      z.object({
        src: z.string(),
        srcSet: z.object({
          large: z.string(),
          small: z.string(),
        }).optional(),
        type: z.enum(['editorial-dusk', 'realistic-daylight']).optional(),
        alt: z.string(),
        caption: z.string().optional(),
      })
    ).optional(),
    gallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        type: z.enum(['Hero', 'Hotel', 'City', 'Attraction', 'Food', 'Secondary']).optional(),
        subject: z.string().optional(),
        attribution: z.string().optional(),
        sourceSite: z.string().optional(),
        sourcePageUrl: z.string().optional(),
        photographer: z.string().optional(),
        license: z.string().optional(),
        licenseUrl: z.string().optional(),
      })
    ).optional(),
    highlights: z.array(z.string()),
    cautions: z.array(z.string()),
    whyCheap: z.array(z.string()).optional(),
    bestNearbyAttraction: z.string(),
    foodAngle: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    focusKeyword: z.string().optional(),
    secondaryKeywords: z.array(z.string()).optional(),
    lastUpdated: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { hotels };
