import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GamingAd } from "@/components/GamingAd";
import { CasinoLayout } from "@/components/casino/CasinoLayout";
import { Smartphone, Crown, Calendar, Trophy, Gamepad2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CasinoRatings = () => {
  const ratingCategories = [
    {
      id: "top-5",
      icon: Crown,
      title: "Top 5 Best Casinos",
      description: "Our elite selection of the absolute best online casinos. Handpicked based on ratings, bonuses, and user feedback.",
      count: 5,
      badge: "Premium",
      badgeColor: "bg-casino-gold"
    },
    {
      id: "top-10-2025",
      icon: Calendar,
      title: "Top 10 Casinos 2025",
      description: "The best online casino platforms for 2025. Updated regularly with the latest and most trusted sites.",
      count: 10,
      badge: "Latest",
      badgeColor: "bg-casino-green"
    },
    {
      id: "mobile-2025",
      icon: Smartphone,
      title: "Top Mobile Casinos 2025",
      description: "Best mobile-optimized casino sites. Perfect for on-the-go gaming with full feature support.",
      count: 10,
      badge: "Mobile",
      badgeColor: "bg-casino-purple"
    },
    {
      id: "live-dealer",
      icon: Gamepad2,
      title: "Best Live Dealer Casinos",
      description: "Top casinos with live dealer games featuring real-time interaction and authentic casino experience.",
      count: 8,
      badge: "Live",
      badgeColor: "bg-casino-red"
    },
    {
      id: "best-bonuses",
      icon: Trophy,
      title: "Best Bonus Offers",
      description: "Casinos with the most generous welcome bonuses and promotional offers. Get the most value for your deposits.",
      count: 10,
      badge: "Bonus",
      badgeColor: "bg-casino-gold"
    }
  ];

  return (
    <CasinoLayout
      title="Online Casino Rankings | HealthyCasinos"
      description="Explore our curated rankings of the best online casinos. Top 5, Top 10, mobile-optimized, and bonus-focused platforms."
      keywords="casino rankings, best online casinos, top casino sites, mobile casinos, casino bonuses"
    >
      {/* Page Header */}
      <section className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-casino-green to-casino-gold bg-clip-text text-transparent">
            Online Casino Rankings
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our curated rankings of verified online casinos. Each category is carefully reviewed and updated regularly.
          </p>
        </div>

        {/* Gaming Ad Banner */}
        <GamingAd variant="banner" />
      </section>

      {/* Rating Categories Grid */}
      <section className="pt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ratingCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="bg-gradient-card border-casino-green/20 shadow-casino hover:shadow-elevated transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-casino-green to-casino-gold flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge className={`${category.badgeColor} text-white`}>
                      {category.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-casino-green transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">
                      {category.count} verified casinos
                    </span>
                    <Button 
                      asChild
                      className="bg-gradient-cta text-white shadow-neon hover:shadow-elevated"
                    >
                      <Link to={`/healthy-casinos/ratings/${category.id}`}>
                        View Ranking
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </CasinoLayout>
  );
};

export default CasinoRatings;
