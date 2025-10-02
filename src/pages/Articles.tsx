import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { useTranslation } from "react-i18next";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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
  },
  {
    id: "rare-skin-values",
    title: "Understanding Rare Skin Values in 2024",
    description: "What makes a skin valuable? Dive deep into the factors that determine skin prices, from rarity and condition to market demand and trading history.",
    publishDate: "2024-01-05",
    readTime: "9 min read",
    category: "Trading",
    author: "Sarah Trader"
  },
  {
    id: "cs2-meta-analysis",
    title: "CS2 Meta Analysis: Best Cases to Open Now",
    description: "Stay ahead of the curve with our monthly meta analysis. Discover which CS2 cases are trending and offering the best return on investment this month.",
    publishDate: "2024-01-03",
    readTime: "6 min read",
    category: "Guide",
    author: "Alex Gaming"
  },
  {
    id: "bonus-optimization",
    title: "How to Maximize Casino Site Bonuses",
    description: "Master the art of bonus hunting with our comprehensive guide. Learn wagering requirements, terms and conditions, and strategies to get the most value from promotional offers.",
    publishDate: "2024-01-01",
    readTime: "7 min read",
    category: "Strategy",
    author: "Mike Esports"
  },
  {
    id: "scam-prevention",
    title: "Avoiding Common Gaming Scams in 2024",
    description: "Protect yourself and your inventory. This guide covers the most common scams targeting gamers and case site users, with practical tips to stay safe online.",
    publishDate: "2023-12-28",
    readTime: "8 min read",
    category: "Security",
    author: "David Security"
  },
  {
    id: "dota2-case-comparison",
    title: "Dota 2 Treasure Comparison: Which Offers Best Value?",
    description: "A detailed comparison of all current Dota 2 treasures and cases. Find out which containers give you the best chance at rare immortals and arcanas.",
    publishDate: "2023-12-25",
    readTime: "10 min read",
    category: "Guide",
    author: "Alex Gaming"
  },
  {
    id: "steam-market-guide",
    title: "Steam Community Market Trading Guide",
    description: "Navigate the Steam Community Market like a pro. Learn about listing fees, price history, and timing strategies to buy low and sell high.",
    publishDate: "2023-12-22",
    readTime: "11 min read",
    category: "Trading",
    author: "Sarah Trader"
  },
  {
    id: "responsible-gaming",
    title: "Responsible Gaming: Setting Limits and Staying Safe",
    description: "Gaming should always be fun. Learn how to set healthy limits, recognize warning signs, and maintain a balanced approach to case opening and betting.",
    publishDate: "2023-12-20",
    readTime: "6 min read",
    category: "Guide",
    author: "Mike Esports"
  },
  {
    id: "knife-unboxing-odds",
    title: "CS2 Knife Unboxing: Understanding the Odds",
    description: "The dream of every case opener - getting a knife. This article breaks down the actual odds, expected value calculations, and whether knife hunting is worth it.",
    publishDate: "2023-12-18",
    readTime: "8 min read",
    category: "Guide",
    author: "Alex Gaming"
  },
  {
    id: "payment-methods-guide",
    title: "Best Payment Methods for Gaming Sites",
    description: "Compare different payment options for depositing and withdrawing from gaming platforms. Learn about fees, processing times, and security considerations.",
    publishDate: "2023-12-15",
    readTime: "7 min read",
    category: "Guide",
    author: "David Security"
  },
  {
    id: "skin-investment-2024",
    title: "Skin Investment Strategies for 2024",
    description: "Treating skins as investments requires knowledge and strategy. Discover which skins historically hold value and which factors predict future price increases.",
    publishDate: "2023-12-12",
    readTime: "12 min read",
    category: "Trading",
    author: "Sarah Trader"
  },
  {
    id: "esports-betting-basics",
    title: "Esports Betting 101: A Beginner's Guide",
    description: "New to esports betting? Start here. This comprehensive guide covers betting types, odds reading, bankroll management, and finding value bets.",
    publishDate: "2023-12-10",
    readTime: "9 min read",
    category: "Strategy",
    author: "Mike Esports"
  },
  {
    id: "site-verification-checklist",
    title: "Gaming Site Verification Checklist",
    description: "Before depositing on any gaming site, run through this essential verification checklist. Ensure licenses, reviews, and security measures meet standards.",
    publishDate: "2023-12-08",
    readTime: "5 min read",
    category: "Security",
    author: "David Security"
  },
  {
    id: "case-opening-psychology",
    title: "The Psychology Behind Case Opening",
    description: "Why is case opening so addictive? Understand the psychological mechanisms at play and how to maintain control over your gaming habits.",
    publishDate: "2023-12-05",
    readTime: "10 min read",
    category: "Guide",
    author: "Alex Gaming"
  },
  {
    id: "marketplace-comparison",
    title: "Third-Party Marketplaces: A Comprehensive Comparison",
    description: "Not all skin marketplaces are created equal. Compare fees, security, selection, and user experience across the major trading platforms.",
    publishDate: "2023-12-03",
    readTime: "8 min read",
    category: "Trading",
    author: "Sarah Trader"
  },
  {
    id: "live-betting-strategies",
    title: "Advanced Live Betting Strategies for Esports",
    description: "Take your betting to the next level with live betting. Learn how to read momentum shifts, analyze in-game statistics, and make profitable live bets.",
    publishDate: "2023-12-01",
    readTime: "11 min read",
    category: "Strategy",
    author: "Mike Esports"
  },
  {
    id: "account-security-guide",
    title: "Ultimate Gaming Account Security Guide",
    description: "Protect your valuable inventory and account with these essential security measures. From 2FA setup to phishing prevention, secure your gaming presence.",
    publishDate: "2023-11-28",
    readTime: "7 min read",
    category: "Security",
    author: "David Security"
  },
  {
    id: "seasonal-case-analysis",
    title: "Seasonal Case Analysis: Holiday Event Cases",
    description: "Holiday and seasonal cases often offer unique opportunities. Analyze historical data to predict which seasonal cases will be most valuable this year.",
    publishDate: "2023-11-25",
    readTime: "9 min read",
    category: "Guide",
    author: "Alex Gaming"
  },
  {
    id: "trading-bot-guide",
    title: "Trading Bots: Should You Use Automated Trading?",
    description: "Explore the world of automated skin trading. Learn about bot types, risks, benefits, and whether automation is right for your trading strategy.",
    publishDate: "2023-11-22",
    readTime: "10 min read",
    category: "Trading",
    author: "Sarah Trader"
  }
];

export default function Articles() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;
  
  // Calculate pagination
  const totalPages = Math.ceil(articlesData.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articlesData.slice(startIndex, endIndex);

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

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
          {currentArticles.map((article) => (
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

        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {getPageNumbers().map((page, index) => (
                <PaginationItem key={index}>
                  {page === '...' ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      onClick={() => setCurrentPage(page as number)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </Layout>
  );
}