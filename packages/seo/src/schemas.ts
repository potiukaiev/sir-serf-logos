import { z } from "zod";

export const SeoMetaSchema = z.object({
  title: z.string().min(1).max(60),
  description: z.string().min(1).max(160),
  keywords: z.array(z.string()).optional(),
  canonicalUrl: z.string().url().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().url().optional(),
  ogType: z.enum(["website", "article", "product"]).default("website"),
  twitterCard: z.enum(["summary", "summary_large_image"]).default("summary_large_image"),
  twitterTitle: z.string().optional(),
  twitterDescription: z.string().optional(),
  twitterImage: z.string().url().optional(),
});

export type SeoMeta = z.infer<typeof SeoMetaSchema>;

export const ArticleSchema = z.object({
  "@context": z.literal("https://schema.org"),
  "@type": z.literal("Article"),
  headline: z.string(),
  description: z.string(),
  image: z.string().url().optional(),
  author: z.object({
    "@type": z.literal("Person"),
    name: z.string(),
  }),
  publisher: z.object({
    "@type": z.literal("Organization"),
    name: z.string(),
    logo: z.object({
      "@type": z.literal("ImageObject"),
      url: z.string().url(),
    }),
  }),
  datePublished: z.string(),
  dateModified: z.string().optional(),
});

export type Article = z.infer<typeof ArticleSchema>;

export const ProductSchema = z.object({
  "@context": z.literal("https://schema.org"),
  "@type": z.literal("Product"),
  name: z.string(),
  description: z.string(),
  image: z.string().url().optional(),
  brand: z.object({
    "@type": z.literal("Brand"),
    name: z.string(),
  }),
  aggregateRating: z.object({
    "@type": z.literal("AggregateRating"),
    ratingValue: z.number().min(0).max(5),
    reviewCount: z.number().min(0),
  }).optional(),
});

export type Product = z.infer<typeof ProductSchema>;