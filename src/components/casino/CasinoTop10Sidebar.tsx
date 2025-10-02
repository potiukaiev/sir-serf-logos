import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Shield, Trophy, Users, DollarSign, Sparkles } from "lucide-react";
import { GamingAd } from "@/components/GamingAd";

const top10Casinos = [
  { id: 1, name: "Royal Casino", rating: 4.8, games: "2500+", bonus: "$2000", license: "MGA", trend: "hot" },
  { id: 2, name: "Golden Palace", rating: 4.7, games: "3200+", bonus: "$3000", license: "Curacao", trend: "hot" },
  { id: 3, name: "Diamond Casino", rating: 4.6, games: "1800+", bonus: "$1500", license: "UKGC", trend: "new" },
  { id: 4, name: "Platinum Spins", rating: 4.5, games: "2100+", bonus: "$2500", license: "MGA", trend: "hot" },
  { id: 5, name: "Emerald Slots", rating: 4.5, games: "1600+", bonus: "$1200", license: "Curacao", trend: "normal" },
  { id: 6, name: "Ruby Fortune", rating: 4.4, games: "1900+", bonus: "$1800", license: "MGA", trend: "hot" },
  { id: 7, name: "Sapphire Gaming", rating: 4.4, games: "2200+", bonus: "$2200", license: "UKGC", trend: "normal" },
  { id: 8, name: "Crystal Palace", rating: 4.3, games: "1500+", bonus: "$1600", license: "Curacao", trend: "new" },
  { id: 9, name: "Pearl Casino", rating: 4.3, games: "1700+", bonus: "$1400", license: "MGA", trend: "normal" },
  { id: 10, name: "Opal Spins", rating: 4.2, games: "1400+", bonus: "$1000", license: "Curacao", trend: "normal" }
];

const getTrendBadge = (trend: string) => {
  switch (trend) {
    case "hot":
      return (
        <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-[10px] px-1.5 py-0">
          🔥 HOT
        </Badge>
      );
    case "new":
      return (
        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-[10px] px-1.5 py-0">
          ✨ NEW
        </Badge>
      );
    default:
      return null;
  }
};

export const CasinoTop10Sidebar = () => {
  return (
    <div className="w-80 hidden lg:block">
      <div className="sticky top-24 space-y-6">
        {/* Top 10 Casinos Card */}
        <Card className="bg-casino-darker/50 border-casino-green/30 shadow-[0_0_30px_hsl(142_76%_36%/0.2)] backdrop-blur-sm">
          <CardHeader className="pb-4 border-b border-casino-green/20">
            <CardTitle className="text-casino-green flex items-center gap-2 text-xl">
              <Trophy className="w-6 h-6 text-casino-gold" />
              Top 10 Online Casinos
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-2">
              Verified & Trusted by Players Worldwide
            </p>
          </CardHeader>
          <CardContent className="space-y-2 p-4">
            {top10Casinos.map((casino, index) => (
              <Link
                key={casino.id}
                to={`/healthy-casinos/casino/${casino.id}`}
                className="block group"
              >
                <div className="flex items-start gap-3 p-3 rounded-lg bg-casino-dark/50 hover:bg-casino-dark border border-casino-green/10 hover:border-casino-green/30 transition-all hover:shadow-[0_0_20px_hsl(142_76%_36%/0.2)]">
                  {/* Rank Badge */}
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                      index < 3 
                        ? 'bg-gradient-to-br from-casino-gold to-yellow-600 text-casino-darker shadow-[0_0_15px_hsl(45_100%_50%/0.3)]' 
                        : 'bg-casino-green/20 text-casino-green'
                    }`}>
                      #{index + 1}
                    </div>
                  </div>

                  {/* Casino Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-foreground group-hover:text-casino-green transition-colors truncate">
                          {casino.name}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-1">
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-3 h-3 ${
                                  i < Math.floor(casino.rating) 
                                    ? 'text-casino-gold fill-current' 
                                    : 'text-muted-foreground/30'
                                }`} 
                              />
                            ))}
                          </div>
                          <span className="text-xs font-semibold text-casino-gold">
                            {casino.rating}
                          </span>
                        </div>
                      </div>
                      {getTrendBadge(casino.trend)}
                    </div>

                    {/* Casino Details */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          {casino.games} Games
                        </span>
                        <Badge className="bg-casino-green/20 text-casino-green border-casino-green/30 text-[10px] px-1.5 py-0">
                          <DollarSign className="w-2.5 h-2.5 inline" />
                          {casino.bonus}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-[10px]">
                        <Shield className="w-3 h-3 text-blue-400" />
                        <span className="text-blue-400 font-medium">Licensed: {casino.license}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* View All Button */}
            <Link to="/healthy-casinos/casinos">
              <Button 
                variant="outline" 
                className="w-full mt-4 border-casino-green/40 text-casino-green hover:bg-casino-green/10 hover:border-casino-green"
              >
                View All Casinos
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Platform Stats */}
        <Card className="bg-casino-darker/50 border-casino-green/30 shadow-[0_0_20px_hsl(142_76%_36%/0.1)] backdrop-blur-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-casino-green text-lg flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Platform Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center p-2 rounded bg-casino-dark/30">
              <span className="text-sm text-muted-foreground">Verified Casinos</span>
              <span className="font-bold text-casino-green text-lg">250+</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded bg-casino-dark/30">
              <span className="text-sm text-muted-foreground">Licensed Sites</span>
              <span className="font-bold text-blue-400 text-lg">230+</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded bg-casino-dark/30">
              <span className="text-sm text-muted-foreground">Player Reviews</span>
              <span className="font-bold text-yellow-400 text-lg">45K+</span>
            </div>
            <div className="flex justify-between items-center p-2 rounded bg-casino-dark/30">
              <span className="text-sm text-muted-foreground">Monthly Players</span>
              <span className="font-bold text-purple-400 text-lg">1.2M+</span>
            </div>
          </CardContent>
        </Card>

        {/* Ad Space */}
        <GamingAd variant="sidebar" />

        {/* CTA Card */}
        <Card className="bg-gradient-to-br from-casino-green/20 to-casino-dark/50 border-casino-green/30 shadow-[0_0_25px_hsl(142_76%_36%/0.2)]">
          <CardContent className="p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-casino-green/20 flex items-center justify-center mx-auto mb-3 shadow-[0_0_20px_hsl(142_76%_36%/0.3)]">
              <Users className="w-7 h-7 text-casino-green" />
            </div>
            <h4 className="font-bold text-foreground mb-2 text-lg">List Your Casino</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Reach thousands of potential players worldwide
            </p>
            <Button className="w-full bg-casino-green hover:bg-casino-green/90 text-casino-darker font-bold shadow-[0_0_20px_hsl(142_76%_36%/0.4)] hover:shadow-[0_0_30px_hsl(142_76%_36%/0.6)] transition-all">
              Submit Your Casino
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
