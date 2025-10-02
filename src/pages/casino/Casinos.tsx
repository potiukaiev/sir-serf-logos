import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CasinoLayout } from "@/components/casino/CasinoLayout";
import { GamingAd } from "@/components/GamingAd";
import { Star, Trophy, Users, TrendingUp, Search, Shield } from "lucide-react";

const Casinos = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allCasinos = [
    { id: 1, name: "Royal Casino", rating: 4.8, reviews: 1543, bonus: "100% up to $500", games: 2500, payoutRate: "97.2%", license: "MGA" },
    { id: 2, name: "Golden Palace", rating: 4.7, reviews: 1289, bonus: "200% up to $1000", games: 3200, payoutRate: "96.8%", license: "UKGC" },
    { id: 3, name: "Diamond Casino", rating: 4.6, reviews: 987, bonus: "150% up to $750", games: 1800, payoutRate: "96.5%", license: "Curacao" },
    { id: 4, name: "Platinum Spins", rating: 4.5, reviews: 856, bonus: "100% up to $600", games: 2100, payoutRate: "96.3%", license: "MGA" },
    { id: 5, name: "Emerald Slots", rating: 4.5, reviews: 745, bonus: "125% up to $625", games: 1600, payoutRate: "96.1%", license: "UKGC" },
    { id: 6, name: "Ruby Fortune", rating: 4.4, reviews: 698, bonus: "150% up to $750", games: 1900, payoutRate: "96.0%", license: "MGA" },
  ];

  const filteredCasinos = allCasinos.filter(casino =>
    casino.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <CasinoLayout
      title="Online Casino Reviews & Ratings | HealthyCasinos"
      description="Browse comprehensive reviews of licensed online casinos. Compare bonuses, games, withdrawal times, and user ratings."
      keywords="casino reviews, online casinos, casino ratings, casino bonuses"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": filteredCasinos.map((casino, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Organization",
                "name": casino.name,
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": casino.rating,
                  "reviewCount": casino.reviews
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-casino-green mb-4">
            All Casino Reviews
          </h1>
          <p className="text-muted-foreground text-lg">
            Compare {allCasinos.length}+ licensed casinos, bonuses, and player ratings
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="Search casinos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-casino-darker border-casino-green/20"
          />
        </div>

        {/* Ad */}
        <GamingAd variant="banner" />

        {/* Casinos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCasinos.map((casino) => (
            <Card
              key={casino.id}
              className="bg-gradient-card border-casino-green/20 hover:shadow-casino transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-casino-green transition-colors mb-2">
                      {casino.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
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
                      <span className="text-sm font-semibold">{casino.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({casino.reviews})
                      </span>
                    </div>
                  </div>
                  <Badge className="bg-casino-green text-white">
                    {casino.license}
                  </Badge>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="w-4 h-4 text-casino-gold" />
                    <span className="text-casino-gold font-semibold">
                      {casino.bonus}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{casino.games} Games</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span>RTP: {casino.payoutRate}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link to={`/healthy-casinos/casino/${casino.id}`} className="flex-1">
                    <Button variant="outline" className="w-full border-casino-green/50 text-casino-green hover:bg-casino-green/10">
                      Review
                    </Button>
                  </Link>
                  <Button className="flex-1 bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
                    Play
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredCasinos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No casinos found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </CasinoLayout>
  );
};

export default Casinos;
