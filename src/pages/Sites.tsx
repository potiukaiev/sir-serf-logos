import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GamingAd } from "@/components/GamingAd";
import { Layout } from "@/components/Layout";
import { Star, Trophy, Shield, Zap, ExternalLink, TrendingUp, Smartphone, Crown, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Sites = () => {
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
      features: ["Instant Withdrawals", "Live Chat", "Mobile App"],
      mobileOptimized: true,
      year2025: true
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
      features: ["Steam API", "Price Tracking", "Trade History"],
      mobileOptimized: true,
      year2025: true
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
      features: ["Multi-Game", "Crypto Support", "VIP Program"],
      mobileOptimized: true,
      year2025: true
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
      features: ["Rust Exclusive", "Weekly Events", "Referral Bonus"],
      mobileOptimized: false,
      year2025: true
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
      features: ["Unusual Calculator", "Price History", "Safe Trading"],
      mobileOptimized: false,
      year2025: false
    },
    {
      id: 6,
      name: "CaseKing Pro",
      rating: 4.7,
      bonus: "220%",
      promocode: "KING220",
      rarity: "covert",
      status: "online",
      users: "11.3K",
      description: "Elite case opening experience",
      games: ["cs2"],
      features: ["Premium Support", "VIP Rewards", "Mobile App"],
      mobileOptimized: true,
      year2025: true
    },
    {
      id: 7,
      name: "SkinVault Elite",
      rating: 4.5,
      bonus: "180%",
      promocode: "VAULT180",
      rarity: "classified",
      status: "online",
      users: "9.7K",
      description: "Secure skin storage and trading",
      games: ["cs2", "dota2"],
      features: ["2FA Security", "Insurance", "Mobile Trading"],
      mobileOptimized: true,
      year2025: true
    },
    {
      id: 8,
      name: "LootBox Master",
      rating: 4.3,
      bonus: "140%",
      promocode: "LOOT140",
      rarity: "restricted",
      status: "online",
      users: "7.8K",
      description: "Professional loot box platform",
      games: ["cs2"],
      features: ["Live Unboxing", "Chat Features", "Mobile Optimized"],
      mobileOptimized: true,
      year2025: true
    },
    {
      id: 9,
      name: "CaseDrop Premium",
      rating: 4.6,
      bonus: "195%",
      promocode: "DROP195",
      rarity: "classified",
      status: "online",
      users: "10.5K",
      description: "Daily case drops and rewards",
      games: ["cs2", "dota2"],
      features: ["Daily Bonuses", "Loyalty Program", "Mobile App"],
      mobileOptimized: true,
      year2025: true
    },
    {
      id: 10,
      name: "SkinHub Ultimate",
      rating: 4.4,
      bonus: "170%",
      promocode: "HUB170",
      rarity: "restricted",
      status: "online",
      users: "8.6K",
      description: "Community-driven skin marketplace",
      games: ["cs2", "rust"],
      features: ["P2P Trading", "Escrow", "Mobile Friendly"],
      mobileOptimized: true,
      year2025: true
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

  // Rating categories
  const top5Sites = allSites.slice(0, 5);
  const top10Sites2025 = allSites.filter(site => site.year2025).slice(0, 10);
  const topMobileSites2025 = allSites.filter(site => site.mobileOptimized && site.year2025).slice(0, 10);

  const renderSiteCard = (site: typeof allSites[0]) => (
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
  );

  return (
    <Layout
      title="Top Gaming Case Sites Rankings 2025 | CaseHunters"
      description="Explore our curated rankings of the best CS2, Dota 2, and gaming case sites. Top 5, Top 10, and mobile-optimized platforms for 2025."
      keywords="top case sites 2025, best CS2 sites, top Dota 2 platforms, mobile case sites, gaming site rankings"
    >
      {/* Page Header */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-gaming bg-clip-text text-transparent">
            Top Gaming Case Sites Rankings
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated rankings of the best verified gaming case sites for 2025.
          </p>
        </div>

        {/* Gaming Ad Banner */}
        <div className="mb-8">
          <GamingAd variant="banner" />
        </div>
      </section>

      {/* Rating Categories */}
      <section className="container mx-auto px-6 pb-16">
        <Tabs defaultValue="top5" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="top5" className="flex items-center gap-2">
              <Crown className="w-4 h-4" />
              <span className="hidden sm:inline">Top 5 Sites</span>
              <span className="sm:hidden">Top 5</span>
            </TabsTrigger>
            <TabsTrigger value="top10-2025" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Top 10 Sites 2025</span>
              <span className="sm:hidden">Top 10</span>
            </TabsTrigger>
            <TabsTrigger value="mobile-2025" className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              <span className="hidden sm:inline">Mobile Sites 2025</span>
              <span className="sm:hidden">Mobile</span>
            </TabsTrigger>
          </TabsList>

          {/* Top 5 Sites */}
          <TabsContent value="top5" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Top 5 Best Gaming Case Sites
              </h2>
              <p className="text-muted-foreground">
                Our elite selection of the absolute best gaming case sites
              </p>
            </div>
            {top5Sites.map(renderSiteCard)}
          </TabsContent>

          {/* Top 10 Sites 2025 */}
          <TabsContent value="top10-2025" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Top 10 Gaming Case Sites 2025
              </h2>
              <p className="text-muted-foreground">
                The best platforms for case opening in 2025
              </p>
            </div>
            {top10Sites2025.map(renderSiteCard)}
          </TabsContent>

          {/* Top Mobile Sites 2025 */}
          <TabsContent value="mobile-2025" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Top Mobile-Optimized Sites 2025
              </h2>
              <p className="text-muted-foreground">
                Best gaming case sites optimized for mobile devices
              </p>
            </div>
            {topMobileSites2025.map(renderSiteCard)}
          </TabsContent>
        </Tabs>
      </section>
    </Layout>
  );
};

export default Sites;