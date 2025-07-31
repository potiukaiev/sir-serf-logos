import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { ThemeSelector } from "@/components/ThemeSelector";
import { LanguageSelector } from "@/components/LanguageSelector";
import { MobileMenu } from "@/components/MobileMenu";
import { Helmet } from "react-helmet-async";
import { Trophy, Star, TrendingUp, Users, ExternalLink, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const gameCategories = [
    {
      name: "Counter-Strike 2",
      shortName: "CS2",
      icon: "🔫",
      sites: 85,
      topRated: 4.8,
      totalUsers: "150K+",
      color: "gaming-cyan",
      description: "The most popular FPS with valuable weapon skins and cases",
      features: ["Weapon Skins", "Knife Collection", "StatTrak Items", "Sticker Capsules"],
      topSites: ["CSGOEmpire", "SkinBaron", "DMarket"]
    },
    {
      name: "Dota 2",
      shortName: "DOTA",
      icon: "⚔️",
      sites: 42,
      topRated: 4.6,
      totalUsers: "85K+",
      color: "gaming-purple",
      description: "MOBA with exclusive hero cosmetics and immortal treasures",
      features: ["Hero Sets", "Immortal Items", "Arcanas", "Battle Pass"],
      topSites: ["DotaSkins", "SteamAnalyst", "BitSkins"]
    },
    {
      name: "Rust",
      shortName: "RUST",
      icon: "🦀",
      sites: 28,
      topRated: 4.2,
      totalUsers: "35K+",
      color: "gaming-orange",
      description: "Survival game with unique weapon and clothing skins",
      features: ["Weapon Skins", "Clothing", "Building Skins", "Tool Skins"],
      topSites: ["RustLoot", "SkinSwap", "TradeSkins"]
    },
    {
      name: "Team Fortress 2",
      shortName: "TF2",
      icon: "🎯",
      sites: 15,
      topRated: 4.0,
      totalUsers: "25K+",
      color: "gaming-magenta",
      description: "Classic FPS with unusual hats and weapon variants",
      features: ["Unusual Hats", "Weapon Skins", "Taunts", "Cosmetics"],
      topSites: ["TF2Central", "Backpack.tf", "Marketplace.tf"]
    }
  ];

  const rarityCategories = [
    {
      name: "Covert",
      color: "rarity-covert",
      description: "Ultra-rare items with the highest value",
      percentage: "0.26%",
      examples: ["AK-47 Redline", "AWP Dragon Lore"]
    },
    {
      name: "Classified",
      color: "rarity-classified",
      description: "High-value items with limited availability",
      percentage: "3.2%",
      examples: ["M4A4 Asiimov", "Glock Fade"]
    },
    {
      name: "Restricted",
      color: "rarity-restricted",
      description: "Rare items with unique designs",
      percentage: "15.98%",
      examples: ["AK-47 Vulcan", "USP-S Orion"]
    },
    {
      name: "Mil-Spec",
      color: "rarity-milspec",
      description: "Military-grade weapons with solid value",
      percentage: "79.92%",
      examples: ["M4A1-S Guardian", "AK-47 Blue Laminate"]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>Gaming Categories | CS2 & Dota 2 Case Types | CaseHunters</title>
        <meta name="description" content="Explore different categories of CS2 and Dota 2 cases. Learn about skin rarities, drop rates, and find the best case types for your gaming needs." />
        <meta name="keywords" content="CS2 case types, Dota 2 case categories, skin rarities, case drop rates, gaming case types, CS2 rarities guide" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gaming Categories | CS2 & Dota 2 Case Types" />
        <meta property="og:description" content="Explore different categories of gaming cases and skin rarities." />
        <meta property="og:url" content="https://casehunters.com/categories" />
      </Helmet>
      <ParallaxBackground />
      {/* Header */}
      <header className="border-b border-gaming-cyan/20 bg-gaming-dark/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Logo variant="compact" />
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/sites" className="text-foreground hover:text-gaming-cyan transition-colors">Sites</Link>
                <Link to="/categories" className="text-gaming-cyan hover:text-gaming-cyan/80 transition-colors font-medium">Categories</Link>
                <Link to="/about" className="text-foreground hover:text-gaming-cyan transition-colors">About</Link>
              </nav>
              <div className="hidden md:flex items-center gap-2">
                <ThemeSelector />
                <LanguageSelector />
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent">
            Game Categories
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore case sites by your favorite games. Each category offers unique items, 
            rarities, and trading opportunities.
          </p>
        </div>
      </section>

      {/* Game Categories */}
      <section className="container mx-auto px-6 pb-16">
        <h2 className="text-3xl font-bold text-center mb-12">🎮 Popular Games</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {gameCategories.map((game, index) => (
            <Card key={index} className="bg-gradient-card border-gaming-cyan/20 shadow-gaming hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{game.icon}</div>
                    <div>
                      <CardTitle className="text-2xl group-hover:text-gaming-cyan transition-colors">
                        {game.name}
                      </CardTitle>
                      <p className="text-muted-foreground">{game.description}</p>
                    </div>
                  </div>
                  <Badge className={`bg-${game.color} text-white`}>
                    {game.sites} Sites
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gaming-darker/50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="w-4 h-4 text-gaming-orange mr-1" />
                      <span className="font-bold text-gaming-orange">{game.topRated}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Top Rated</div>
                  </div>
                  <div className="text-center p-3 bg-gaming-darker/50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-4 h-4 text-gaming-green mr-1" />
                      <span className="font-bold text-gaming-green">{game.totalUsers}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Total Users</div>
                  </div>
                  <div className="text-center p-3 bg-gaming-darker/50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="w-4 h-4 text-gaming-purple mr-1" />
                      <span className="font-bold text-gaming-purple">{game.sites}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Active Sites</div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-gaming-cyan">Item Types</h4>
                  <div className="flex flex-wrap gap-2">
                    {game.features.map((feature, i) => (
                      <Badge key={i} variant="outline" className="text-xs border-gaming-purple/50 text-gaming-purple">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Top Sites */}
                <div>
                  <h4 className="font-semibold mb-3 text-gaming-cyan">Top Sites</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.topSites.map((site, i) => (
                      <span key={i} className="text-sm text-muted-foreground">
                        {site}{i < game.topSites.length - 1 && " • "}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
                  Browse {game.shortName} Sites
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rarity Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">💎 Rarity Guide</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Understand item rarities and their drop rates to make informed decisions.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rarityCategories.map((rarity, index) => (
              <Card key={index} className="bg-gradient-card border-gaming-cyan/20 hover:shadow-purple transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-${rarity.color} rounded-full mx-auto mb-4 flex items-center justify-center`}>
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{rarity.name}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{rarity.description}</p>
                  <div className="text-2xl font-bold text-gaming-cyan mb-3">{rarity.percentage}</div>
                  <div className="text-xs text-muted-foreground">
                    {rarity.examples.join(", ")}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;