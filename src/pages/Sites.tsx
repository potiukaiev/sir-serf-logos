import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GamingAd } from "@/components/GamingAd";
import { Layout } from "@/components/Layout";
import { Star, Gift, Gamepad2, Shield, Zap, Trophy, Search } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Sites = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGame, setSelectedGame] = useState("all");
  const [selectedSort, setSelectedSort] = useState("rating");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  const allSites = [
    {
      id: 1,
      name: "CSGOEmpire",
      rating: 9.8,
      bonus: "$500",
      promoCode: "HUNTER500",
      games: ["CS2", "Dota 2"],
      features: ["Instant Withdrawals", "Live Support", "Mobile App"],
      popularity: 50000,
    },
    {
      id: 2,
      name: "RustClash",
      rating: 9.5,
      bonus: "$300",
      promoCode: "RUST300",
      games: ["CS2", "Rust"],
      features: ["Daily Bonuses", "VIP Program", "Fast Deposits"],
      popularity: 35000,
    },
    {
      id: 3,
      name: "DotaGems",
      rating: 9.3,
      bonus: "$400",
      promoCode: "DOTA400",
      games: ["Dota 2"],
      features: ["Exclusive Skins", "Tournaments", "Cashback"],
      popularity: 28000,
    },
    {
      id: 4,
      name: "SkinArena",
      rating: 9.1,
      bonus: "$250",
      promoCode: "ARENA250",
      games: ["CS2", "Dota 2", "Rust"],
      features: ["Multi-Game", "Live Chat", "Quick Payouts"],
      popularity: 42000,
    },
    {
      id: 5,
      name: "CaseRoyale",
      rating: 8.9,
      bonus: "$350",
      promoCode: "ROYAL350",
      games: ["CS2"],
      features: ["Battle Royale Mode", "Trade System", "Referral Rewards"],
      popularity: 31000,
    },
    {
      id: 6,
      name: "LootBattles",
      rating: 8.7,
      bonus: "$200",
      promoCode: "LOOT200",
      games: ["CS2", "Dota 2"],
      features: ["PvP Battles", "Leaderboards", "Daily Drops"],
      popularity: 25000,
    },
    {
      id: 7,
      name: "GambleBox",
      rating: 8.5,
      bonus: "$450",
      promoCode: "GAMBLE450",
      games: ["CS2", "Rust"],
      features: ["High Roller Bonuses", "VIP Support", "Premium Cases"],
      popularity: 38000,
    },
    {
      id: 8,
      name: "CrateKing",
      rating: 8.3,
      bonus: "$275",
      promoCode: "KING275",
      games: ["CS2"],
      features: ["Loyalty Program", "Instant Payouts", "Mobile Optimized"],
      popularity: 22000,
    },
    {
      id: 9,
      name: "SkinVault",
      rating: 8.1,
      bonus: "$325",
      promoCode: "VAULT325",
      games: ["CS2", "Dota 2", "Rust"],
      features: ["Secure Storage", "Trade Lock", "Multi-Currency"],
      popularity: 27000,
    },
    {
      id: 10,
      name: "TreasureHunt",
      rating: 7.9,
      bonus: "$225",
      promoCode: "HUNT225",
      games: ["Dota 2"],
      features: ["Daily Quests", "Achievement System", "Community Events"],
      popularity: 19000,
    },
    {
      id: 11,
      name: "MegaCases",
      rating: 7.7,
      bonus: "$380",
      promoCode: "MEGA380",
      games: ["CS2", "Rust"],
      features: ["Giant Cases", "Progressive Jackpots", "Weekly Tournaments"],
      popularity: 33000,
    },
    {
      id: 12,
      name: "ProSkins",
      rating: 7.5,
      bonus: "$290",
      promoCode: "PRO290",
      games: ["CS2", "Dota 2"],
      features: ["Pro Player Cases", "Esports Betting", "Stream Integration"],
      popularity: 24000,
    },
  ];

  const filteredAndSortedSites = allSites
    .filter((site) => {
      const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGame = selectedGame === "all" || site.games.includes(selectedGame);
      return matchesSearch && matchesGame;
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case "rating":
          return b.rating - a.rating;
        case "popularity":
          return b.popularity - a.popularity;
        case "bonus":
          return parseInt(b.bonus.replace("$", "")) - parseInt(a.bonus.replace("$", ""));
        default:
          return 0;
      }
    });

  const totalPages = Math.ceil(filteredAndSortedSites.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentSites = filteredAndSortedSites.slice(startIndex, endIndex);

  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  return (
    <Layout
      title="All Gaming Case Sites | CaseHunters"
      description="Browse our complete directory of verified CS2, Dota 2, and Rust case opening sites. Compare ratings, bonuses, and features."
      keywords="case sites, CS2 sites, Dota 2 platforms, Rust cases, gaming sites directory"
    >
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-gaming bg-clip-text text-transparent">
            All Gaming Case Sites
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our complete directory of verified gaming case sites. Use filters to find the perfect platform for you.
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search sites..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  handleFilterChange();
                }}
                className="pl-10 bg-background/50 border-gaming-cyan/20"
              />
            </div>
            <Select value={selectedGame} onValueChange={(value) => {
              setSelectedGame(value);
              handleFilterChange();
            }}>
              <SelectTrigger className="bg-background/50 border-gaming-cyan/20">
                <SelectValue placeholder="Filter by game" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Games</SelectItem>
                <SelectItem value="CS2">CS2</SelectItem>
                <SelectItem value="Dota 2">Dota 2</SelectItem>
                <SelectItem value="Rust">Rust</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedSort} onValueChange={setSelectedSort}>
              <SelectTrigger className="bg-background/50 border-gaming-cyan/20">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="bonus">Best Bonus</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mb-8">
          <GamingAd variant="banner" />
        </div>

        {currentSites.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8">
              {currentSites.map((site) => (
                <Card
                  key={site.id}
                  className="bg-gradient-card border-gaming-cyan/20 shadow-gaming hover:shadow-elevated transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-2xl">{site.name}</CardTitle>
                      <div className="flex items-center gap-1 bg-gaming-orange/20 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 text-gaming-orange fill-gaming-orange" />
                        <span className="font-bold text-gaming-orange">{site.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Trophy className="w-4 h-4" />
                      {site.popularity.toLocaleString()} active users
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2 p-3 bg-gaming-cyan/10 rounded-lg border border-gaming-cyan/20">
                      <Gift className="w-5 h-5 text-gaming-cyan" />
                      <div>
                        <p className="text-sm text-muted-foreground">Welcome Bonus</p>
                        <p className="font-bold text-gaming-cyan">{site.bonus}</p>
                      </div>
                      <Badge className="ml-auto bg-gaming-orange text-white">
                        Code: {site.promoCode}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Gamepad2 className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Games:</span>
                        {site.games.map((game) => (
                          <Badge key={game} variant="outline" className="border-gaming-cyan/50">
                            {game}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-1">
                        {site.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm">
                            {feature.includes("Instant") || feature.includes("Fast") ? (
                              <Zap className="w-4 h-4 text-gaming-cyan" />
                            ) : (
                              <Shield className="w-4 h-4 text-gaming-green" />
                            )}
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      className="w-full bg-gradient-cta text-white shadow-neon hover:shadow-elevated"
                    >
                      <Link to={`/review/${site.id}`}>View Full Review</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        onClick={() => setCurrentPage(index + 1)}
                        isActive={currentPage === index + 1}
                        className="cursor-pointer"
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No sites found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedGame("all");
                setCurrentPage(1);
              }}
              variant="outline"
              className="border-gaming-cyan text-gaming-cyan"
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
