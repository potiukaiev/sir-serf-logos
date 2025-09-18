import { Layout } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { useTranslation } from "react-i18next";

const articlesData = [
  {
    id: "cs2-case-opening-guide",
    title: "Complete Guide to CS2 Case Opening",
    description: "Learn everything you need to know about CS2 case opening, from the basics to advanced strategies. Discover which cases offer the best value and how to maximize your chances of getting rare skins.",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Guide",
    author: "Alex Gaming"
  },
  {
    id: "dota2-betting-strategies", 
    title: "Top 5 Dota 2 Betting Strategies for 2024",
    description: "Explore proven betting strategies for Dota 2 matches. From analyzing team performance to understanding meta changes, this comprehensive guide will help you make more informed betting decisions.",
    publishDate: "2024-01-12",
    readTime: "6 min read",
    category: "Strategy",
    author: "Mike Esports"
  },
  {
    id: "skin-trading-tips",
    title: "Essential Skin Trading Tips for Beginners",
    description: "New to skin trading? This article covers the fundamentals of trading CS2 and Dota 2 skins safely and profitably. Learn about market trends, pricing, and avoiding common scams.",
    publishDate: "2024-01-10",
    readTime: "5 min read",
    category: "Trading",
    author: "Sarah Trader"
  },
  {
    id: "case-site-security",
    title: "How to Identify Secure Case Opening Sites",
    description: "Security should be your top priority when choosing a case opening site. Learn the key indicators of legitimate platforms and red flags to avoid when selecting where to play.",
    publishDate: "2024-01-08",
    readTime: "7 min read",
    category: "Security",
    author: "David Security"
  }
];

export default function Articles() {
  const { t } = useTranslation();

  return (
    <Layout
      title="Gaming Articles & Guides | CaseHunters"
      description="Explore comprehensive guides, strategies, and tips for CS2 and Dota 2 case opening, skin trading, and gaming. Stay updated with the latest trends and insights."
      keywords="CS2 guides, Dota 2 strategies, case opening tips, skin trading, gaming articles, betting guides"
    >
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gaming-cyan">{t('articles.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('articles.subtitle')}
          </p>
        </div>

        <div className="space-y-6">
          {articlesData.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              description={article.description}
              publishDate={article.publishDate}
              readTime={article.readTime}
              category={article.category}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}