import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GamingAd } from "@/components/GamingAd";
import { Logo } from "@/components/Logo";
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
    <div className="min-h-screen bg-gradient-background">
      {/* Header */}
      <header className="border-b border-gaming-cyan/20 bg-gaming-dark/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Logo variant="compact" />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/sites" className="text-gaming-cyan hover:text-gaming-cyan/80 transition-colors font-medium">Sites</Link>
              <Link to="/categories" className="text-foreground hover:text-gaming-cyan transition-colors">Categories</Link>
              <Link to="/about" className="text-foreground hover:text-gaming-cyan transition-colors">About</Link>
            </nav>
          </div>
        </div>
      </header>

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

      {/* Sites Grid */}
      <section className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedSites.map((site) => (
            <Card key={site.id} className="bg-gradient-card border-gaming-cyan/20 shadow-gaming hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 group">
              <CardContent className="p-6">
                {/* Site Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gaming-green animate-pulse"></div>
                    <span className="text-sm text-gaming-green font-medium">ONLINE</span>
                  </div>
                  <Badge className={`bg-${rarityColors[site.rarity as keyof typeof rarityColors]} text-white`}>
                    {site.rarity.toUpperCase()}
                  </Badge>
                </div>

                {/* Site Name & Rating */}
                <div className="mb-4">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-gaming-cyan transition-colors">
                    {site.name}
                  </h4>
                  <div className="flex items-center space-x-2 mb-2">
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
                  <p className="text-muted-foreground text-sm">{site.description}</p>
                </div>

                {/* Games */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {site.games.map((game) => (
                    <Badge key={game} variant="outline" className="text-xs border-gaming-purple text-gaming-purple">
                      {gameLabels[game as keyof typeof gameLabels]}
                    </Badge>
                  ))}
                </div>

                {/* Features & Promocode */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between p-2 bg-gaming-darker/50 rounded-lg">
                    <span className="text-sm">Welcome Bonus</span>
                    <span className="font-bold text-gaming-green">{site.bonus}</span>
                  </div>
                  {site.promocode && (
                    <div className="flex items-center justify-between p-2 bg-gaming-orange/10 border border-gaming-orange/20 rounded-lg">
                      <span className="text-sm text-gaming-orange">Promo Code</span>
                      <code className="font-bold text-gaming-orange bg-gaming-orange/10 px-2 py-1 rounded text-xs">
                        {site.promocode}
                      </code>
                    </div>
                  )}
                  <div className="text-xs text-muted-foreground">
                    {site.features.join(" • ")}
                  </div>
                </div>

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
    </div>
  );
};

export default Sites;