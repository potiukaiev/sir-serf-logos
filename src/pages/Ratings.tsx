import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GamingAd } from "@/components/GamingAd";
import { Layout } from "@/components/Layout";
import { Smartphone, Crown, Calendar, Trophy, Gamepad2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Sites = () => {
  const ratingCategories = [
    {
      id: "top-5",
      icon: Crown,
      title: "Top 5 Best Sites",
      description: "Our elite selection of the absolute best gaming case sites. Handpicked based on ratings, bonuses, and user feedback.",
      count: 5,
      badge: "Premium",
      badgeColor: "bg-gaming-orange"
    },
    {
      id: "top-10-2025",
      icon: Calendar,
      title: "Top 10 Sites 2025",
      description: "The best gaming case opening platforms for 2025. Updated regularly with the latest and most trusted sites.",
      count: 10,
      badge: "Latest",
      badgeColor: "bg-gaming-cyan"
    },
    {
      id: "mobile-2025",
      icon: Smartphone,
      title: "Top Mobile Sites 2025",
      description: "Best mobile-optimized gaming case sites. Perfect for on-the-go case opening with full feature support.",
      count: 10,
      badge: "Mobile",
      badgeColor: "bg-gaming-purple"
    },
    {
      id: "cs2-exclusive",
      icon: Gamepad2,
      title: "CS2 Exclusive Sites",
      description: "Dedicated Counter-Strike 2 case opening sites with exclusive CS2 skins and the best CS2-focused features.",
      count: 8,
      badge: "CS2",
      badgeColor: "bg-gaming-green"
    },
    {
      id: "best-bonuses",
      icon: Trophy,
      title: "Best Bonus Offers",
      description: "Sites with the most generous welcome bonuses and promotional offers. Get the most value for your deposits.",
      count: 10,
      badge: "Bonus",
      badgeColor: "bg-gaming-orange"
    }
  ];

  return (
    <Layout
      title="Gaming Case Sites Rankings | CaseHunters"
      description="Explore our curated rankings of the best CS2, Dota 2, and gaming case sites. Top 5, Top 10, mobile-optimized, and bonus-focused platforms."
      keywords="case sites rankings, best CS2 sites, top Dota 2 platforms, mobile case sites, gaming bonuses"
    >
      {/* Page Header */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-gaming bg-clip-text text-transparent">
            Gaming Case Sites Rankings
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our curated rankings of verified gaming case sites. Each category is carefully reviewed and updated regularly.
          </p>
        </div>

        {/* Gaming Ad Banner */}
        <div className="mb-8">
          <GamingAd variant="banner" />
        </div>
      </section>

      {/* Rating Categories Grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ratingCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="bg-gradient-card border-gaming-cyan/20 shadow-gaming hover:shadow-elevated transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-gaming flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge className={`${category.badgeColor} text-white`}>
                      {category.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-gaming-cyan transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">
                      {category.count} verified sites
                    </span>
                    <Button 
                      asChild
                      className="bg-gradient-cta text-white shadow-neon hover:shadow-elevated"
                    >
                      <Link to={`/ratings/${category.id}`}>
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
    </Layout>
  );
};

export default Sites;