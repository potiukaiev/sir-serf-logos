import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GamingAd } from "@/components/GamingAd";
import { Layout } from "@/components/Layout";
import { Star, Trophy, Shield, Zap, ExternalLink, TrendingUp, Filter, Search, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Sites = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState("all");
  const [selectedSort, setSelectedSort] = useState("rating");

  const allSites = [
    {
      id: 1,
      name: "CSGOEmpire",
      rating: 4.8,
      bonus: "250%",
      promocode: "HUNT250",
      rarity: "covert",
      status: "online",
      users: "12.5K",
      description: "Premium case opening with guaranteed drops",
      games: ["cs2"],
      features: ["Instant Withdrawals", "Live Chat", "Mobile App"]
    },
    {
      id: 2,
      name: "DotaSkins",
      rating: 4.6,
      bonus: "200%",
      promocode: "DOTA200",
      rarity: "classified",
      status: "online", 
      users: "8.3K",
      description: "Best Dota 2 cosmetic marketplace",
      games: ["dota2"],
      features: ["Steam API", "Price Tracking", "Trade History"]
    },
    {
      id: 3,
      name: "SkinClub",
      rating: 4.4,
      bonus: "150%",
      promocode: "CLUB150",
      rarity: "restricted",
      status: "online",
      users: "15.2K",
      description: "Multi-game skin trading platform",
      games: ["cs2", "dota2", "rust"],
      features: ["Multi-Game", "Crypto Support", "VIP Program"]
    },
    {
      id: 4,
      name: "RustLoot",
      rating: 4.2,
      bonus: "100%",
      promocode: "RUST100",
      rarity: "milspec",
      status: "online",
      users: "6.8K",
      description: "Rust skin cases and trading",
      games: ["rust"],
      features: ["Rust Exclusive", "Weekly Events", "Referral Bonus"]
    },
    {
      id: 5,
      name: "TF2Central",
      rating: 4.0,
      bonus: "75%",
      promocode: "TF2DEAL",
      rarity: "industrial",
      status: "online",
      users: "4.2K",
      description: "Team Fortress 2 unusual trading hub",
      games: ["tf2"],
      features: ["Unusual Calculator", "Price History", "Safe Trading"]
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

  const gameLabels = {
    all: "All Games",
    cs2: "CS2",
    dota2: "Dota 2",
    rust: "Rust",
    tf2: "Team Fortress 2"
  };

  const filteredSites = allSites.filter(site => {
    const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         site.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGame = selectedGame === "all" || site.games.includes(selectedGame);
    return matchesSearch && matchesGame;
  });

  const sortedSites = [...filteredSites].sort((a, b) => {
    switch (selectedSort) {
      case "rating":
        return b.rating - a.rating;
      case "users":
        return parseFloat(b.users.replace('K', '')) - parseFloat(a.users.replace('K', ''));
      case "bonus":
        return parseFloat(b.bonus.replace('%', '')) - parseFloat(a.bonus.replace('%', ''));
      default:
        return 0;
    }
  });

  return (
    <Layout
      title="All Case Sites | CaseHunters - CS2, Dota 2 & Gaming Platforms"
      description="Browse our complete directory of verified CS2, Dota 2, and gaming case sites. Find platforms with best bonuses, instant withdrawals, and trusted reviews."
      keywords="case sites directory, CS2 case sites list, Dota 2 case platforms, gaming case sites, verified case sites, skin gambling sites"
    >

      {/* Page Header */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-gaming bg-clip-text text-transparent">
            All Case Sites
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our complete directory of verified gaming case sites. Find the perfect platform for your skin hunting adventures.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search sites..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gaming-dark/50 border-gaming-cyan/20"
            />
          </div>
          <Select value={selectedGame} onValueChange={setSelectedGame}>
            <SelectTrigger className="w-full md:w-48 bg-gaming-dark/50 border-gaming-cyan/20">
              <SelectValue placeholder="Select game" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(gameLabels).map(([value, label]) => (
                <SelectItem key={value} value={value}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedSort} onValueChange={setSelectedSort}>
            <SelectTrigger className="w-full md:w-48 bg-gaming-dark/50 border-gaming-cyan/20">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Top Rated</SelectItem>
              <SelectItem value="users">Most Popular</SelectItem>
              <SelectItem value="bonus">Best Bonus</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Gaming Ad Banner */}
        <div className="mb-8">
          <GamingAd variant="banner" />
        </div>
        <div className="text-center mb-8">
          <p className="text-muted-foreground">
            Showing {sortedSites.length} of {allSites.length} verified sites
          </p>
        </div>
      </section>

      {/* Sites List */}
      <section className="container mx-auto px-6 pb-16">
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          {sortedSites.map((site) => (
            <Card key={site.id} className="bg-gradient-card border-gaming-cyan/20 shadow-gaming hover:shadow-elevated transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left: Site Info */}
                  <div className="flex-1 space-y-4">
                    {/* Status & Name */}
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-gaming-green animate-pulse"></div>
                        <span className="text-sm text-gaming-green font-medium">ONLINE</span>
                      </div>
                      <h4 className="text-2xl font-bold mb-2 group-hover:text-gaming-cyan transition-colors">
                        {site.name}
                      </h4>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(site.rating) ? 'text-gaming-orange fill-current' : 'text-muted-foreground'}`} 
                          />
                        ))}
                      </div>
                      <span className="font-semibold text-gaming-orange">{site.rating}</span>
                      <span className="text-sm text-muted-foreground">({site.users} users)</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground">{site.description}</p>

                    {/* Games & Rarity */}
                    <div className="flex flex-wrap items-center gap-2">
                      {site.games.map((game) => (
                        <Badge key={game} variant="outline" className="text-xs border-gaming-purple text-gaming-purple">
                          {gameLabels[game as keyof typeof gameLabels]}
                        </Badge>
                      ))}
                      <Badge className={`bg-${rarityColors[site.rarity as keyof typeof rarityColors]} text-white text-xs`}>
                        {site.rarity.toUpperCase()}
                      </Badge>
                    </div>

                    {/* Features */}
                    <div className="text-xs text-muted-foreground">
                      {site.features.join(" • ")}
                    </div>
                  </div>

                  {/* Right: Bonus, Promo & Actions */}
                  <div className="lg:w-80 space-y-4">
                    {/* Welcome Bonus */}
                    <div className="flex items-center justify-between p-3 bg-gaming-darker/50 rounded-lg">
                      <span className="text-sm">Welcome Bonus</span>
                      <span className="font-bold text-gaming-green text-lg">{site.bonus}</span>
                    </div>

                    {/* Promocode */}
                    {site.promocode && (
                      <div className="flex items-center justify-between p-3 bg-gaming-orange/20 border-2 border-gaming-orange/40 rounded-lg shadow-lg">
                        <span className="text-sm font-semibold text-gaming-orange">Promo Code</span>
                        <code className="font-bold text-white bg-gaming-orange px-3 py-2 rounded-md text-sm shadow-md tracking-wider">{site.promocode}</code>
                      </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
                        Visit Site
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <Button 
                        asChild
                        variant="outline" 
                        className="w-full border-gaming-purple text-gaming-purple hover:bg-gaming-purple/10"
                      >
                        <Link to={`/review/${site.id}`}>
                          Read Review
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSites.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-gaming rounded-lg flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">No sites found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse all sites.
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedGame("all");
              }}
              className="bg-gaming-cyan hover:bg-gaming-cyan/90 text-gaming-dark"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Sites;