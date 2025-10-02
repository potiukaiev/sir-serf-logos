import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CasinoLayout } from "@/components/casino/CasinoLayout";
import { Calendar, Clock, User } from "lucide-react";
import { GamingAd } from "@/components/GamingAd";

const CasinoArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding RTP: What Players Need to Know",
      excerpt: "Learn about Return to Player percentages and how they affect your gaming experience at online casinos.",
      category: "Education",
      author: "Sarah Johnson",
      date: "2025-01-15",
      readTime: "5 min read",
      image: "🎰"
    },
    {
      id: 2,
      title: "Top 5 Progressive Jackpot Slots in 2025",
      excerpt: "Discover the biggest progressive jackpot slots with life-changing prizes and exciting gameplay.",
      category: "Reviews",
      author: "Mike Chen",
      date: "2025-01-12",
      readTime: "7 min read",
      image: "🎲"
    },
    {
      id: 3,
      title: "Responsible Gambling: Setting Limits That Work",
      excerpt: "Practical tips for setting and maintaining healthy gambling limits to enjoy gaming responsibly.",
      category: "Guide",
      author: "Emma Davis",
      date: "2025-01-10",
      readTime: "6 min read",
      image: "🛡️"
    },
    {
      id: 4,
      title: "Cryptocurrency in Online Casinos: A Complete Guide",
      excerpt: "Everything you need to know about using Bitcoin, Ethereum, and other cryptocurrencies at online casinos.",
      category: "Technology",
      author: "Alex Turner",
      date: "2025-01-08",
      readTime: "8 min read",
      image: "₿"
    },
    {
      id: 5,
      title: "Live Dealer Games: The Future of Online Gaming",
      excerpt: "Explore how live dealer games are revolutionizing the online casino experience with real-time interaction.",
      category: "Trends",
      author: "Lisa Wang",
      date: "2025-01-05",
      readTime: "6 min read",
      image: "🎥"
    },
    {
      id: 6,
      title: "Casino Bonuses Explained: Terms You Should Know",
      excerpt: "Understand wagering requirements, game contributions, and other bonus terms to make informed decisions.",
      category: "Education",
      author: "David Brown",
      date: "2025-01-03",
      readTime: "9 min read",
      image: "🎁"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Education: "bg-casino-blue text-white",
      Reviews: "bg-casino-green text-white",
      Guide: "bg-casino-purple text-white",
      Technology: "bg-casino-gold text-casino-dark",
      Trends: "bg-casino-red text-white"
    };
    return colors[category] || "bg-muted text-foreground";
  };

  return (
    <CasinoLayout
      title="Casino Articles & Guides | HealthyCasinos"
      description="Read the latest casino articles, guides, and industry news. Learn about gambling strategies, game reviews, and responsible gaming."
      keywords="casino articles, gambling guides, casino news, online gaming tips"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "HealthyCasinos Blog",
            "description": "Casino articles, guides, and industry insights"
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-casino-green mb-4">
            Articles & Guides
          </h1>
          <p className="text-muted-foreground text-lg">
            Expert insights, gaming guides, and industry news to enhance your casino experience
          </p>
        </div>

        {/* Featured Banner Ad */}
        <GamingAd variant="banner" />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="bg-gradient-card border-casino-green/20 hover:shadow-casino transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{article.image}</div>
                
                <div className="flex items-center gap-2 mb-3">
                  <Badge className={getCategoryColor(article.category)}>
                    {article.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-casino-green transition-colors">
                  <Link to={`/healthy-casinos/article/${article.id}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-casino-green/10">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inline Ad */}
        <GamingAd variant="inline" />
      </div>
    </CasinoLayout>
  );
};

export default CasinoArticles;
