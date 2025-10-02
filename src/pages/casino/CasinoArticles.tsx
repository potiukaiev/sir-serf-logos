import { useState } from "react";
import { CasinoLayout } from "@/components/casino/CasinoLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { GamingAd } from "@/components/GamingAd";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
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
    id: "1",
    title: "Understanding RTP: What Players Need to Know",
    excerpt: "Learn about Return to Player percentages and how they affect your gaming experience at online casinos. Discover how to find high RTP games and make informed decisions.",
    category: "Education",
    author: "Sarah Johnson",
    date: "2025-01-15",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop"
  },
  {
    id: "2",
    title: "Top 5 Progressive Jackpot Slots in 2025",
    excerpt: "Discover the biggest progressive jackpot slots with life-changing prizes and exciting gameplay. Learn which games offer the best chances at massive wins.",
    category: "Reviews",
    author: "Mike Chen",
    date: "2025-01-12",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&h=400&fit=crop"
  },
  {
    id: "3",
    title: "Responsible Gambling: Setting Limits That Work",
    excerpt: "Practical tips for setting and maintaining healthy gambling limits to enjoy gaming responsibly. Learn how to stay in control and play safely.",
    category: "Guide",
    author: "Emma Davis",
    date: "2025-01-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&h=400&fit=crop"
  },
  {
    id: "4",
    title: "Cryptocurrency in Online Casinos: A Complete Guide",
    excerpt: "Everything you need to know about using Bitcoin, Ethereum, and other cryptocurrencies at online casinos. Explore the benefits and potential drawbacks.",
    category: "Technology",
    author: "Alex Turner",
    date: "2025-01-08",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&h=400&fit=crop"
  },
  {
    id: "5",
    title: "Live Dealer Games: The Future of Online Gaming",
    excerpt: "Explore how live dealer games are revolutionizing the online casino experience with real-time interaction and authentic gameplay.",
    category: "Trends",
    author: "Lisa Wang",
    date: "2025-01-05",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=400&fit=crop"
  },
  {
    id: "6",
    title: "Casino Bonuses Explained: Terms You Should Know",
    excerpt: "Understand wagering requirements, game contributions, and other bonus terms to make informed decisions and maximize your bonus value.",
    category: "Education",
    author: "David Brown",
    date: "2025-01-03",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1624365169831-b72e7db18ea3?w=800&h=400&fit=crop"
  },
  {
    id: "7",
    title: "Blackjack Strategy Guide for Beginners",
    excerpt: "Master the basics of blackjack strategy and learn how to minimize the house edge. Perfect guide for players new to the game.",
    category: "Strategy",
    author: "Robert Taylor",
    date: "2025-01-01",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1594911772125-07fc7c9eac6a?w=800&h=400&fit=crop"
  },
  {
    id: "8",
    title: "Mobile Casino Gaming: Best Apps of 2025",
    excerpt: "Review of the best mobile casino apps for iOS and Android. Find out which apps offer the best gaming experience on the go.",
    category: "Reviews",
    author: "Jennifer Lee",
    date: "2024-12-28",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&h=400&fit=crop"
  },
  {
    id: "9",
    title: "Understanding Slot Volatility and Variance",
    excerpt: "Learn the difference between high and low volatility slots and how to choose games that match your playing style and bankroll.",
    category: "Education",
    author: "Sarah Johnson",
    date: "2024-12-25",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1571864669734-67b5c2d2f45c?w=800&h=400&fit=crop"
  },
  {
    id: "10",
    title: "VIP Casino Programs: Are They Worth It?",
    excerpt: "Explore the benefits and requirements of VIP casino programs. Learn whether loyalty programs offer real value for your gaming style.",
    category: "Guide",
    author: "Mike Chen",
    date: "2024-12-22",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=800&h=400&fit=crop"
  },
  {
    id: "11",
    title: "Roulette Systems: Do They Really Work?",
    excerpt: "An honest look at popular roulette betting systems like Martingale and D'Alembert. Understand the mathematics behind these strategies.",
    category: "Strategy",
    author: "Emma Davis",
    date: "2024-12-20",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&h=400&fit=crop"
  },
  {
    id: "12",
    title: "Online Casino Security: Protecting Your Account",
    excerpt: "Essential security measures to protect your casino account and personal information. Learn about two-factor authentication and safe practices.",
    category: "Security",
    author: "Alex Turner",
    date: "2024-12-18",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop"
  }
];

export default function CasinoArticles() {
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

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Education": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Reviews": "bg-casino-green/20 text-casino-green border-casino-green/30",
      "Guide": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Technology": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "Trends": "bg-pink-500/20 text-pink-400 border-pink-500/30",
      "Strategy": "bg-orange-500/20 text-orange-400 border-orange-500/30",
      "Security": "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return colors[category] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <CasinoLayout
      title="Casino Articles & Guides | HealthyCasinos"
      description="Read the latest casino articles, guides, and industry news. Learn about gambling strategies, game reviews, and responsible gaming practices."
      keywords="casino articles, gambling guides, casino news, online gaming tips, responsible gambling"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Casino Articles & Guides",
            "description": "Expert articles about online casinos and gambling",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": currentArticles.map((article, index) => ({
                "@type": "ListItem",
                "position": (currentPage - 1) * articlesPerPage + index + 1,
                "item": {
                  "@type": "Article",
                  "headline": article.title,
                  "description": article.excerpt,
                  "datePublished": article.date,
                  "author": {
                    "@type": "Person",
                    "name": article.author
                  },
                  "articleSection": article.category
                }
              }))
            }
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-casino-green">Casino Articles & Guides</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights, gaming strategies, and industry news to enhance your online casino experience
          </p>
        </div>

        {/* Featured Banner Ad */}
        <GamingAd variant="banner" />

        <div className="space-y-6">
          {currentArticles.map((article) => (
            <Card 
              key={article.id} 
              className="bg-casino-dark/30 border-casino-green/20 hover:border-casino-green/40 transition-all overflow-hidden hover:shadow-[0_0_30px_hsl(142_76%_36%/0.3)]"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-6 p-6">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full md:w-64 h-48 md:h-40 object-cover rounded-lg"
                  />
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3 flex-1">
                        <Badge className={getCategoryColor(article.category)}>
                          {article.category}
                        </Badge>
                        <Link to={`/healthy-casinos/article/${article.id}`}>
                          <h3 className="text-2xl font-bold text-casino-green hover:text-casino-green/90 transition-colors">
                            {article.title}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-casino-green/10">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      
                      <Link to={`/healthy-casinos/article/${article.id}`}>
                        <Button 
                          variant="outline" 
                          className="border-casino-green/40 text-casino-green hover:bg-casino-green/10 hover:border-casino-green"
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-casino-green/10 hover:text-casino-green"}
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
                      className="cursor-pointer hover:bg-casino-green/10 hover:text-casino-green data-[active=true]:bg-casino-green data-[active=true]:text-casino-darker"
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-casino-green/10 hover:text-casino-green"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}

        {/* Inline Ad */}
        <GamingAd variant="inline" />
      </div>
    </CasinoLayout>
  );
}
