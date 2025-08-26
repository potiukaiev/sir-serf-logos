import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const top10Sites = [
  {
    id: 1,
    name: "CaseClash Pro",
    rating: 4.9,
    users: "120k",
    bonus: "500% + 50FS",
    category: "CS2",
    trend: "+15%"
  },
  {
    id: 2,
    name: "SkinBattle Elite",
    rating: 4.8,
    users: "95k",
    bonus: "300% + 30FS",
    category: "Dota 2",
    trend: "+12%"
  },
  {
    id: 3,
    name: "DragonLoot",
    rating: 4.7,
    users: "88k",
    bonus: "200% + 25FS",
    category: "CS2",
    trend: "+10%"
  },
  {
    id: 4,
    name: "RareDrop Casino",
    rating: 4.6,
    users: "75k",
    bonus: "150% + 20FS",
    category: "Multi",
    trend: "+8%"
  },
  {
    id: 5,
    name: "LootVault",
    rating: 4.6,
    users: "70k",
    bonus: "250% + 15FS",
    category: "CS2",
    trend: "+7%"
  },
  {
    id: 6,
    name: "SkinArena",
    rating: 4.5,
    users: "65k",
    bonus: "100% + 10FS",
    category: "Dota 2",
    trend: "+6%"
  },
  {
    id: 7,
    name: "CaseRush",
    rating: 4.4,
    users: "60k",
    bonus: "180% + 18FS",
    category: "CS2",
    trend: "+5%"
  },
  {
    id: 8,
    name: "GamerLuck",
    rating: 4.4,
    users: "55k",
    bonus: "120% + 12FS",
    category: "Multi",
    trend: "+4%"
  },
  {
    id: 9,
    name: "DropZone Pro",
    rating: 4.3,
    users: "50k",
    bonus: "90% + 9FS",
    category: "Dota 2",
    trend: "+3%"
  },
  {
    id: 10,
    name: "LegendLoot",
    rating: 4.2,
    users: "45k",
    bonus: "75% + 7FS",
    category: "CS2",
    trend: "+2%"
  }
];

export const Top10Sidebar = () => {
  return (
    <div className="w-80 hidden lg:block">
      <div className="sticky top-24 space-y-6">
        <Card className="bg-card border-border shadow-elevated">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <TrendingUp className="w-5 h-5 text-gaming-cyan" />
              Top 10 Gaming Sites
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Ranked by user ratings and popularity
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            {top10Sites.map((site, index) => (
              <Link
                key={site.id}
                to={`/review/${site.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center justify-between p-3 rounded-lg bg-gaming-darker/30 hover:bg-gaming-darker/50 transition-colors group cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gaming-cyan/20 text-gaming-cyan font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm group-hover:text-gaming-cyan transition-colors truncate">
                      {site.name}
                    </h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-gaming-orange fill-current" />
                        <span className="text-xs text-muted-foreground">{site.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3 text-gaming-purple" />
                        <span className="text-xs text-muted-foreground">{site.users}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge 
                    variant="outline" 
                    className="text-xs border-gaming-green/50 text-gaming-green mb-1"
                  >
                    {site.trend}
                  </Badge>
                  <div className="text-xs text-muted-foreground">
                    {site.category}
                  </div>
                </div>
              </Link>
            ))}
          </CardContent>
        </Card>

        {/* Quick Stats Card */}
        <Card className="bg-card border-border shadow-elevated">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Platform Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Sites</span>
              <span className="font-bold text-gaming-cyan">847</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Active Users</span>
              <span className="font-bold text-gaming-green">2.1M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Reviews</span>
              <span className="font-bold text-gaming-purple">156k</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">This Month</span>
              <span className="font-bold text-gaming-orange">+12%</span>
            </div>
          </CardContent>
        </Card>

        {/* CTA Card */}
        <Card className="bg-gradient-card border-gaming-cyan/20 shadow-gaming">
          <CardContent className="p-6 text-center">
            <h3 className="font-bold text-gaming-cyan mb-2">Submit Your Site</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get your gaming site featured in our top rankings
            </p>
            <Button 
              size="sm" 
              className="w-full bg-gradient-cta text-white shadow-neon hover:shadow-elevated"
            >
              Submit Site
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};