import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Trophy, Users } from "lucide-react";
import { GamingAd } from "@/components/GamingAd";

const top10Casinos = [
  { id: 1, name: "Royal Casino", rating: 4.8, games: "2500+", bonus: "100%", trend: "up" },
  { id: 2, name: "Golden Palace", rating: 4.7, games: "3200+", bonus: "200%", trend: "up" },
  { id: 3, name: "Diamond Casino", rating: 4.6, games: "1800+", bonus: "150%", trend: "same" },
  { id: 4, name: "Platinum Spins", rating: 4.5, games: "2100+", bonus: "100%", trend: "up" },
  { id: 5, name: "Emerald Slots", rating: 4.5, games: "1600+", bonus: "125%", trend: "down" },
  { id: 6, name: "Ruby Fortune", rating: 4.4, games: "1900+", bonus: "150%", trend: "up" },
  { id: 7, name: "Sapphire Gaming", rating: 4.4, games: "2200+", bonus: "100%", trend: "same" },
  { id: 8, name: "Crystal Palace", rating: 4.3, games: "1500+", bonus: "175%", trend: "up" },
  { id: 9, name: "Pearl Casino", rating: 4.3, games: "1700+", bonus: "100%", trend: "down" },
  { id: 10, name: "Opal Spins", rating: 4.2, games: "1400+", bonus: "200%", trend: "same" }
];

export const CasinoTop10Sidebar = () => {
  return (
    <div className="w-80 hidden lg:block">
      <div className="sticky top-24 space-y-6">
        {/* Top 10 Casinos Card */}
        <Card className="bg-gradient-card border-casino-green/20 shadow-casino">
          <CardHeader>
            <CardTitle className="text-casino-green flex items-center">
              <Trophy className="w-5 h-5 mr-2" />
              Top 10 Online Casinos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {top10Casinos.map((casino, index) => (
              <Link
                key={casino.id}
                to={`/healthy-casinos/casino/${casino.id}`}
                className="block p-3 rounded-lg bg-casino-darker/50 hover:bg-casino-darker transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-casino-green/20 flex items-center justify-center text-casino-green font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-semibold text-foreground truncate">
                        {casino.name}
                      </h4>
                      {casino.trend === "up" && (
                        <TrendingUp className="w-3 h-3 text-casino-green flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-casino-gold fill-current" />
                        <span className="ml-1 font-medium">{casino.rating}</span>
                      </div>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{casino.games} games</span>
                    </div>
                    <div className="mt-1">
                      <Badge className="bg-casino-green/20 text-casino-green text-xs">
                        {casino.bonus} Bonus
                      </Badge>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Platform Stats */}
        <Card className="bg-gradient-card border-casino-green/20 shadow-casino">
          <CardHeader>
            <CardTitle className="text-casino-green">Platform Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Casinos</span>
              <span className="font-bold text-casino-green">250+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Licensed Casinos</span>
              <span className="font-bold text-casino-gold">230+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Reviews</span>
              <span className="font-bold text-casino-blue">45K+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Monthly Visitors</span>
              <span className="font-bold text-casino-purple">1.2M+</span>
            </div>
          </CardContent>
        </Card>

        {/* Ad Space */}
        <GamingAd variant="sidebar" />

        {/* CTA Card */}
        <Card className="bg-gradient-card border-casino-green/20 shadow-casino">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 text-casino-green mx-auto mb-3" />
            <h4 className="font-bold text-foreground mb-2">List Your Casino</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Reach thousands of potential players
            </p>
            <Button className="w-full bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
              Submit Casino
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
