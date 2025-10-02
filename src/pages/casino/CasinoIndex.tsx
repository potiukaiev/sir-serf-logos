import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CasinoLayout } from "@/components/casino/CasinoLayout";
import { GamingAd } from "@/components/GamingAd";
import { Star, Trophy, TrendingUp, Users, Zap, Shield } from "lucide-react";

const CasinoIndex = () => {
  const featuredCasinos = [
    {
      id: 1,
      name: "Royal Casino",
      rating: 4.8,
      reviews: 1543,
      bonus: "100% up to $500",
      games: 2500,
      withdrawalTime: "24-48h",
      license: "Malta Gaming Authority",
      payoutRate: "97.2%",
      featured: true,
    },
    {
      id: 2,
      name: "Golden Palace",
      rating: 4.7,
      reviews: 1289,
      bonus: "200% up to $1000",
      games: 3200,
      withdrawalTime: "12-24h",
      license: "UK Gambling Commission",
      payoutRate: "96.8%",
      featured: true,
    },
    {
      id: 3,
      name: "Diamond Casino",
      rating: 4.6,
      reviews: 987,
      bonus: "150% up to $750",
      games: 1800,
      withdrawalTime: "24h",
      license: "Curacao eGaming",
      payoutRate: "96.5%",
      featured: true,
    },
  ];

  return (
    <CasinoLayout showSidebar={false}>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "HealthyCasinos",
            url: "https://healthycasinos.com",
            description: "Trusted online casino reviews and responsible gambling resources",
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Badge className="bg-casino-green/20 text-casino-green border-casino-green mb-6">
            <Shield className="w-3 h-3 mr-1" />
            Licensed & Verified Reviews
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-casino-green via-casino-gold to-casino-green bg-clip-text text-transparent animate-gradient">
            Find Your Perfect Online Casino
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Honest reviews, verified licenses, and responsible gambling practices. Your trusted guide to safe online gaming.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/healthy-casinos/casinos">
              <Button size="lg" className="bg-gradient-cta text-white shadow-neon hover:shadow-elevated text-lg px-8">
                Browse All Casinos
                <Zap className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/healthy-casinos/articles">
              <Button size="lg" variant="outline" className="border-casino-green text-casino-green hover:bg-casino-green/10 text-lg px-8">
                Read Guides
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 border-y border-casino-green/20 bg-casino-darker/50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto px-4">
          <div>
            <div className="text-4xl font-bold text-casino-green mb-2">250+</div>
            <div className="text-sm text-muted-foreground">Licensed Casinos</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-casino-gold mb-2">45K+</div>
            <div className="text-sm text-muted-foreground">Verified Reviews</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-casino-blue mb-2">1.2M+</div>
            <div className="text-sm text-muted-foreground">Monthly Visitors</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-casino-purple mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Trust Score</div>
          </div>
        </div>
      </section>

      {/* Featured Casinos */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-casino-green mb-4">
              Top Rated Online Casinos
            </h2>
            <p className="text-muted-foreground text-lg">
              Hand-picked casinos with the best bonuses and highest ratings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredCasinos.map((casino) => (
              <Card
                key={casino.id}
                className="bg-gradient-card border-casino-green/20 hover:shadow-casino transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-casino-green transition-colors">
                          {casino.name}
                        </h3>
                        <Badge className="bg-casino-green text-white">
                          Licensed
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
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
                          ({casino.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 p-3 bg-casino-darker/50 rounded-lg">
                      <Trophy className="w-5 h-5 text-casino-gold" />
                      <div>
                        <div className="text-sm text-muted-foreground">Welcome Bonus</div>
                        <div className="font-bold text-casino-gold">{casino.bonus}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-casino-blue" />
                        <span className="text-muted-foreground">{casino.games} Games</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <TrendingUp className="w-4 h-4 text-casino-green" />
                        <span className="text-muted-foreground">RTP {casino.payoutRate}</span>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground pt-2 border-t border-casino-green/10">
                      <Shield className="w-3 h-3 inline mr-1" />
                      {casino.license}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/healthy-casinos/casino/${casino.id}`} className="flex-1">
                      <Button variant="outline" className="w-full border-casino-green/50 text-casino-green hover:bg-casino-green/10">
                        Read Review
                      </Button>
                    </Link>
                    <Button className="flex-1 bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
                      Play Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/healthy-casinos/casinos">
              <Button size="lg" variant="outline" className="border-casino-green text-casino-green hover:bg-casino-green/10">
                View All Casinos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Ad */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <GamingAd variant="banner" />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-casino-darker/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-casino-green mb-4">
              Why Choose HealthyCasinos?
            </h2>
            <p className="text-muted-foreground text-lg">
              Your safety and satisfaction are our top priorities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card border-casino-green/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-casino-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-casino-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">Licensed & Verified</h3>
                <p className="text-muted-foreground">
                  We only review casinos with valid licenses from reputable gaming authorities
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-casino-green/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-casino-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-casino-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Honest Reviews</h3>
                <p className="text-muted-foreground">
                  Unbiased, detailed reviews based on thorough testing and player feedback
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-casino-green/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-casino-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-casino-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Responsible Gaming</h3>
                <p className="text-muted-foreground">
                  Promoting safe gambling practices and providing resources for player protection
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </CasinoLayout>
  );
};

export default CasinoIndex;
