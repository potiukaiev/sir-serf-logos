import React from "react";
import { Helmet } from "react-helmet-async";
import { SeoMeta, Article, Product } from "./schemas";

interface SeoHeadProps {
  meta: SeoMeta;
  structuredData?: Article | Product | Record<string, any>;
  hreflangs?: Array<{ locale: string; url: string }>;
}

export function SeoHead({ meta, structuredData, hreflangs }: SeoHeadProps) {
  return React.createElement(Helmet, {}, [
    // Basic meta tags
    React.createElement("title", { key: "title" }, meta.title),
    React.createElement("meta", { 
      key: "description", 
      name: "description", 
      content: meta.description 
    }),
    
    // Keywords
    meta.keywords && React.createElement("meta", {
      key: "keywords",
      name: "keywords",
      content: meta.keywords.join(", ")
    }),

    // Canonical URL
    meta.canonicalUrl && React.createElement("link", {
      key: "canonical",
      rel: "canonical",
      href: meta.canonicalUrl
    }),

    // Open Graph tags
    React.createElement("meta", {
      key: "og:title",
      property: "og:title",
      content: meta.ogTitle || meta.title
    }),
    React.createElement("meta", {
      key: "og:description", 
      property: "og:description",
      content: meta.ogDescription || meta.description
    }),
    React.createElement("meta", {
      key: "og:type",
      property: "og:type", 
      content: meta.ogType
    }),
    meta.ogImage && React.createElement("meta", {
      key: "og:image",
      property: "og:image",
      content: meta.ogImage
    }),

    // Twitter Card tags
    React.createElement("meta", {
      key: "twitter:card",
      name: "twitter:card",
      content: meta.twitterCard
    }),
    React.createElement("meta", {
      key: "twitter:title",
      name: "twitter:title", 
      content: meta.twitterTitle || meta.title
    }),
    React.createElement("meta", {
      key: "twitter:description",
      name: "twitter:description",
      content: meta.twitterDescription || meta.description
    }),
    meta.twitterImage && React.createElement("meta", {
      key: "twitter:image",
      name: "twitter:image",
      content: meta.twitterImage
    }),

    // Hreflangs
    ...(hreflangs?.map((hreflang, index) =>
      React.createElement("link", {
        key: `hreflang-${index}`,
        rel: "alternate",
        hrefLang: hreflang.locale,
        href: hreflang.url
      })
    ) || []),

    // Structured data
    structuredData && React.createElement("script", {
      key: "structured-data",
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify(structuredData)
      }
    })
  ]);
}

export function createSeoMeta(overrides: Partial<SeoMeta>): SeoMeta {
  const defaults: SeoMeta = {
    title: "Case Hunters - Gaming Site Reviews",
    description: "Discover the best gaming sites with our comprehensive reviews and ratings.",
    ogType: "website",
    twitterCard: "summary_large_image",
  };

  return { ...defaults, ...overrides };
}