import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Trophy, Shield, Zap, ExternalLink, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { GamingAd } from "@/components/GamingAd";
import { Layout } from "@/components/Layout";

const Index = () => {
  const featuredSites = [
    {
      name: "CSGOEmpire",
      rating: 4.8,
      bonus: "250%",
      rarity: "covert",
      status: "online",
      users: "12.5K",
      description: "Premium case opening with guaranteed drops"
    },
    {
      name: "DotaSkins",
      rating: 4.6,
      bonus: "200%",
      rarity: "classified",
      status: "online", 
      users: "8.3K",
      description: "Best Dota 2 cosmetic marketplace"
    },
    {
      name: "SkinClub",
      rating: 4.4,
      bonus: "150%",
      rarity: "restricted",
      status: "online",
      users: "15.2K",
      description: "Multi-game skin trading platform"
    }
  ];

  const rarityColors = {
    covert: "rarity-covert",
    classified: "rarity-classified", 
    restricted: "rarity-restricted",
    milspec: "rarity-milspec",
    industrial: "rarity-industrial",
    consumer: "rarity-consumer"
  };

  return (
    <Layout 
      title="CaseHunters - Best CS2 & Dota 2 Case Sites | Verified Gaming Platforms"
      description="Discover the best verified CS2, Dota 2, and gaming case sites. Compare bonuses, read reviews, and find trusted platforms for skin hunting. 150+ verified sites with detailed reviews."
      keywords="CS2 case sites, Dota 2 case sites, gaming case sites, skin gambling, CS2 skins, Dota 2 items, verified gaming platforms, case opening sites"
    >
      {/* Hero Section */}
      <section className="text-center py-16 px-4 animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent drop-shadow-lg">
          Best CS2 & Dota 2 Case Sites
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Discover verified CS2, Dota 2, and gaming case sites. Compare bonuses, read reviews, 
          and find the perfect platform for your skin hunting adventures.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap animate-slide-up">
          <Button size="lg" className="px-8 bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
            Browse Sites
          </Button>
          <Button variant="outline" size="lg" className="px-8 border-gaming-purple text-gaming-purple hover:bg-gaming-purple/10">
            Read Reviews
          </Button>
        </div>
      </section>

      {/* Gaming Ad Section */}
      <section className="mb-16">
        <GamingAd variant="banner" />
      </section>

      {/* Featured Sites Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Gaming Sites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hand-picked premium platforms with the best bonuses and verified security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredSites.map((site, index) => (
            <Card key={index} className="bg-gradient-card border-gaming-cyan/20 shadow-gaming hover:shadow-elevated transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Site Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gaming-green animate-pulse"></div>
                    <span className="text-sm text-gaming-green font-medium">ONLINE</span>
                  </div>
                  <Badge className={`bg-${rarityColors[site.rarity as keyof typeof rarityColors]}`}>
                    Premium
                  </Badge>
                </div>

                {/* Site Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gaming-cyan transition-colors">
                    {site.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(site.rating) 
                              ? 'text-gaming-orange fill-current' 
                              : 'text-gaming-orange/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({site.rating})</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{site.description}</p>
                </div>

                {/* Bonus & Features */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gaming-darker/50 rounded-lg">
                    <span className="text-sm">Welcome Bonus</span>
                    <span className="font-bold text-gaming-green">{site.bonus}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4 text-gaming-cyan" />
                      <span>Verified</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4 text-gaming-orange" />
                      <span>Instant</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-gaming-green" />
                      <span>Trending</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
                    Play Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full border-gaming-purple text-gaming-purple hover:bg-gaming-purple/10"
                  >
                    <Link to={`/review/${site.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      Read Review
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Middle Gaming Ad */}
      <section className="mb-16">
        <GamingAd variant="inline" />
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-gaming-darker/30 rounded-2xl border border-gaming-cyan/10">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Ready to Start Your Hunt?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of hunters finding the best case sites and exclusive bonuses.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg" className="px-8 bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
            <Link to="/sites">Explore All Sites</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan/10">
            <Link to="/categories">Browse Categories</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16">
        <div className="text-center">
          <nav className="flex justify-center space-x-8 mb-8">
            <Link to="/sites" className="text-foreground hover:text-gaming-cyan transition-colors">
              Browse Sites
            </Link>
            <Link to="/categories" className="text-foreground hover:text-gaming-cyan transition-colors">
              Categories
            </Link>
            <Link to="/top-sites" className="text-foreground hover:text-gaming-cyan transition-colors">
              Top 10 Sites
            </Link>
            <Link to="/about" className="text-foreground hover:text-gaming-cyan transition-colors">
              About Us
            </Link>
          </nav>
          <div className="border-t border-gaming-cyan/20 mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 CaseHunters. Find the best gaming case sites and hunt for legendary skins.
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;