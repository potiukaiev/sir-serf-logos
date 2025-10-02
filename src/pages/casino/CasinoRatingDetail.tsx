import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GamingAd } from "@/components/GamingAd";
import { CasinoLayout } from "@/components/casino/CasinoLayout";
import { Star, ExternalLink, ArrowLeft, Crown, Calendar, Smartphone, Gamepad2, Trophy } from "lucide-react";
import { Helmet } from "react-helmet-async";

const CasinoRatingDetail = () => {
  const { categoryId } = useParams();

  const allCasinos = [
    {
      id: 1,
      name: "Royal Casino",
      rating: 4.8,
      bonus: "100%",
      promocode: "ROYAL100",
      rarity: "premium",
      status: "online",
      users: "150K",
      description: "Premium online casino with guaranteed payouts",
      games: ["slots", "table"],
      features: ["Instant Withdrawals", "Live Chat", "Mobile App"],
      mobileOptimized: true,
      year2025: true,
      liveDealer: true
    },
    // Add more casinos...
  ];

  const categoryConfig: Record<string, {
    title: string;
    description: string;
    icon: any;
    filter: (casinos: typeof allCasinos) => typeof allCasinos;
  }> = {
    "top-5": {
      title: "Top 5 Best Online Casinos",
      description: "Our elite selection of the absolute best online casinos based on ratings, bonuses, and user feedback.",
      icon: Crown,
      filter: (casinos) => casinos.slice(0, 5)
    },
    "top-10-2025": {
      title: "Top 10 Online Casinos 2025",
      description: "The best online casino platforms for 2025, updated regularly with the latest and most trusted sites.",
      icon: Calendar,
      filter: (casinos) => casinos.filter(c => c.year2025).slice(0, 10)
    },
    "mobile-2025": {
      title: "Top Mobile-Optimized Casinos 2025",
      description: "Best mobile-optimized casino sites with full feature support for on-the-go gaming.",
      icon: Smartphone,
      filter: (casinos) => casinos.filter(c => c.mobileOptimized && c.year2025)
    },
    "live-dealer": {
      title: "Best Live Dealer Casinos",
      description: "Top casinos with live dealer games featuring real-time interaction.",
      icon: Gamepad2,
      filter: (casinos) => casinos.filter(c => c.liveDealer).slice(0, 8)
    },
    "best-bonuses": {
      title: "Best Welcome Bonus Offers",
      description: "Casinos with the most generous welcome bonuses and promotional offers.",
      icon: Trophy,
      filter: (casinos) => [...casinos].sort((a, b) => parseFloat(b.bonus) - parseFloat(a.bonus)).slice(0, 10)
    }
  };

  const category = categoryConfig[categoryId || ""] || categoryConfig["top-5"];
  const IconComponent = category.icon;
  const filteredCasinos = category.filter(allCasinos);

  return (
    <CasinoLayout
      title={`${category.title} | HealthyCasinos`}
      description={category.description}
      keywords={`${categoryId}, online casinos, casino rankings, casino bonuses`}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": category.title,
            "description": category.description,
            "itemListElement": filteredCasinos.map((casino, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": casino.name,
                "description": casino.description,
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": casino.rating,
                  "bestRating": 5,
                  "worstRating": 1
                }
              }
            }))
          })}
        </script>
      </Helmet>
      <div className="space-y-8">
        {/* Header */}
        <Button 
          asChild 
          variant="ghost" 
          className="hover:bg-casino-green/10"
        >
          <Link to="/healthy-casinos/ratings">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Rankings
          </Link>
        </Button>

        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-casino-green to-casino-gold flex items-center justify-center flex-shrink-0">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-casino-green to-casino-gold bg-clip-text text-transparent">
              {category.title}
            </h1>
            <p className="text-muted-foreground max-w-3xl">
              {category.description}
            </p>
          </div>
        </div>

        {/* Gaming Ad */}
        <GamingAd variant="banner" />

        {/* Casinos List */}
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          {filteredCasinos.map((casino, index) => (
            <Card 
              key={casino.id} 
              className="bg-gradient-card border-casino-green/20 shadow-casino hover:shadow-elevated transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Rank Badge */}
                  <div className="flex items-center lg:items-start">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-casino-green to-casino-gold flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-bold text-white">#{index + 1}</span>
                    </div>
                  </div>

                  {/* Casino Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-casino-green animate-pulse"></div>
                        <span className="text-sm text-casino-green font-medium">ONLINE</span>
                      </div>
                      <h4 className="text-2xl font-bold mb-2 group-hover:text-casino-green transition-colors">
                        {casino.name}
                      </h4>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(casino.rating)
                                ? "text-casino-gold fill-current"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-casino-gold">{casino.rating}</span>
                      <span className="text-sm text-muted-foreground">({casino.users} users)</span>
                    </div>

                    <p className="text-muted-foreground">{casino.description}</p>

                    <div className="text-xs text-muted-foreground">
                      {casino.features.join(" • ")}
                    </div>
                  </div>

                  {/* Bonus & Actions */}
                  <div className="lg:w-80 space-y-4">
                    <div className="flex items-center justify-between p-3 bg-casino-darker/50 rounded-lg">
                      <span className="text-sm">Welcome Bonus</span>
                      <span className="font-bold text-casino-green text-lg">{casino.bonus}</span>
                    </div>

                    {casino.promocode && (
                      <div className="flex items-center justify-between p-3 bg-casino-gold/20 border-2 border-casino-gold/40 rounded-lg">
                        <span className="text-sm font-semibold text-casino-gold">Promo Code</span>
                        <code className="font-bold text-white bg-casino-gold px-3 py-2 rounded-md text-sm">
                          {casino.promocode}
                        </code>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
                        Visit Casino
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-casino-purple text-casino-purple hover:bg-casino-purple/10"
                      >
                        <Link to={`/healthy-casinos/casino/${casino.id}`}>Read Review</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Ratings */}
        <div>
          <h2 className="text-2xl font-bold text-casino-green mb-6">Other Rankings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(categoryConfig)
              .filter(([key]) => key !== categoryId)
              .map(([key, cat]) => {
                const IconComp = cat.icon;
                return (
                  <Link key={key} to={`/healthy-casinos/ratings/${key}`}>
                    <Card className="bg-gradient-card border-casino-green/20 hover:shadow-casino transition-all duration-300 cursor-pointer h-full">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-casino-green to-casino-gold flex items-center justify-center flex-shrink-0">
                            <IconComp className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground text-sm mb-1 line-clamp-2">
                              {cat.title}
                            </h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {cat.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </CasinoLayout>
  );
};

export default CasinoRatingDetail;
