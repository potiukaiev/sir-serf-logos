import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, CheckCircle, XCircle, ExternalLink, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const topSites = [
  {
    id: 1,
    name: "CaseClash Pro",
    subtitle: "Premium CS2 Case Opening Platform",
    rating: 4.9,
    users: "120k",
    bonus: "500% + 50FS",
    category: "CS2",
    trend: "+15%",
    description: "Leading CS2 case opening platform with advanced algorithms and instant withdrawals. Features exclusive cases, daily bonuses, and professional customer support.",
    pros: [
      "Instant withdrawals to Steam",
      "Exclusive knife cases",
      "24/7 customer support", 
      "Provably fair system",
      "Daily login bonuses"
    ],
    cons: [
      "Higher minimum deposits",
      "Limited payment methods",
      "VIP program required for best rates"
    ]
  },
  {
    id: 2,
    name: "SkinBattle Elite",
    subtitle: "Multi-Game Skin Trading Hub", 
    rating: 4.8,
    users: "95k",
    bonus: "300% + 30FS",
    category: "Dota 2",
    trend: "+12%",
    description: "Comprehensive platform supporting both CS2 and Dota 2 skins with competitive rates and secure trading environment.",
    pros: [
      "Multi-game support",
      "Competitive rates",
      "Secure trading system",
      "Mobile app available",
      "Regular promotions"
    ],
    cons: [
      "Slower withdrawal times",
      "Complex interface for beginners",
      "Limited customer support hours"
    ]
  },
  {
    id: 3,
    name: "DragonLoot",
    subtitle: "High-Roller Gaming Paradise",
    rating: 4.7,
    users: "88k", 
    bonus: "200% + 25FS",
    category: "CS2",
    trend: "+10%",
    description: "Premium platform designed for high-stakes players with exclusive VIP treatment and luxury case collections.",
    pros: [
      "VIP treatment program",
      "Luxury case collections",
      "Personal account managers",
      "Priority withdrawals",
      "Exclusive events"
    ],
    cons: [
      "High minimum deposits",
      "Limited to premium users",
      "Complex verification process"
    ]
  },
  {
    id: 4,
    name: "RareDrop Casino",
    subtitle: "All-in-One Gaming Experience",
    rating: 4.6,
    users: "75k",
    bonus: "150% + 20FS",
    category: "Multi",
    trend: "+8%",
    description: "Complete gaming ecosystem with cases, battles, and traditional casino games all in one platform.",
    pros: [
      "Multiple game types",
      "Integrated casino",
      "Social features",
      "Tournament system",
      "Cross-platform compatibility"
    ],
    cons: [
      "Overwhelming interface",
      "Slower customer support",
      "Mixed game quality"
    ]
  },
  {
    id: 5,
    name: "LootVault",
    subtitle: "Secure Skin Investment Platform",
    rating: 4.6,
    users: "70k",
    bonus: "250% + 15FS", 
    category: "CS2",
    trend: "+7%",
    description: "Security-focused platform with advanced encryption and insurance coverage for high-value skin investments.",
    pros: [
      "Bank-level security",
      "Insurance coverage",
      "Advanced encryption",
      "Detailed analytics",
      "Investment tools"
    ],
    cons: [
      "Strict verification",
      "Limited casual features",
      "Higher fees for small trades"
    ]
  },
  {
    id: 6,
    name: "SkinArena",
    subtitle: "Community-Driven Battle Platform",
    rating: 4.5,
    users: "65k",
    bonus: "100% + 10FS",
    category: "Dota 2", 
    trend: "+6%",
    description: "Interactive community platform where players can engage in skin battles and trading with social features.",
    pros: [
      "Strong community",
      "Interactive battles",
      "Social trading",
      "User-generated content",
      "Regular community events"
    ],
    cons: [
      "Limited automation",
      "Dependent on community activity",
      "Basic interface design"
    ]
  },
  {
    id: 7,
    name: "CaseRush",
    subtitle: "Fast-Paced Case Opening",
    rating: 4.4,
    users: "60k",
    bonus: "180% + 18FS",
    category: "CS2",
    trend: "+5%",
    description: "Lightning-fast case opening experience with instant results and rapid-fire gaming sessions.",
    pros: [
      "Instant case opening",
      "Rapid gameplay",
      "Low minimum bets",
      "Quick deposits",
      "Simple interface"
    ],
    cons: [
      "Limited advanced features",
      "Basic customer support",
      "Fewer premium cases"
    ]
  },
  {
    id: 8,
    name: "GamerLuck",
    subtitle: "Luck-Based Gaming Hub",
    rating: 4.4,
    users: "55k",
    bonus: "120% + 12FS",
    category: "Multi",
    trend: "+4%",
    description: "Luck-focused gaming platform with various chance-based games and progressive jackpot systems.",
    pros: [
      "Progressive jackpots",
      "Variety of games",
      "Luck-based mechanics",
      "Regular bonuses",
      "Easy to understand"
    ],
    cons: [
      "High variance gameplay",
      "Limited skill-based options",
      "Unpredictable returns"
    ]
  },
  {
    id: 9,
    name: "DropZone Pro",
    subtitle: "Professional Trading Platform", 
    rating: 4.3,
    users: "50k",
    bonus: "90% + 9FS",
    category: "Dota 2",
    trend: "+3%",
    description: "Professional-grade trading platform with advanced market analysis tools and automated trading features.",
    pros: [
      "Market analysis tools",
      "Automated trading",
      "Professional interface",
      "Advanced charts",
      "API access"
    ],
    cons: [
      "Complex for beginners",
      "Steep learning curve",
      "Premium features locked"
    ]
  },
  {
    id: 10,
    name: "LegendLoot",
    subtitle: "Legendary Item Specialist",
    rating: 4.2,
    users: "45k",
    bonus: "75% + 7FS",
    category: "CS2",
    trend: "+2%",
    description: "Specialized platform focusing on rare and legendary items with expert authentication and valuation services.",
    pros: [
      "Rare item specialist",
      "Expert authentication",
      "Accurate valuations",
      "Collector community",
      "Historical data"
    ],
    cons: [
      "Limited common items",
      "Higher price points",
      "Specialized audience only"
    ]
  }
];

export default function TopSites() {
  return (
    <Layout
      title="Top 10 Gaming Sites 2024 | Best CS2 & Dota 2 Platforms"
      description="Discover the top-ranked CS2 and Dota 2 gaming sites with detailed reviews, pros and cons, user ratings, and exclusive bonuses. Find your perfect platform today."
      keywords="top gaming sites, best CS2 sites, Dota 2 platforms, skin trading rankings, case opening reviews, gaming site comparison"
    >
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-gaming-orange" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
              Top 10 Gaming Sites
            </h1>
            <Trophy className="w-8 h-8 text-gaming-orange" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive rankings based on user reviews, security ratings, bonuses, and community feedback. 
            Updated monthly with the latest platform analysis.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="outline" className="bg-gaming-cyan/10 border-gaming-cyan/40 text-gaming-cyan">
              <TrendingUp className="w-3 h-3 mr-1" />
              Updated Dec 2024
            </Badge>
            <Badge variant="outline" className="bg-gaming-purple/10 border-gaming-purple/40 text-gaming-purple">
              <Users className="w-3 h-3 mr-1" />
              2.1M+ Users
            </Badge>
          </div>
        </div>

        {/* Rankings List */}
        <div className="space-y-6">
          {topSites.map((site, index) => (
            <Card key={site.id} className="bg-card border-border shadow-elevated hover:shadow-gaming transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    {/* Rank Badge */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gaming-cyan/20 text-gaming-cyan font-bold text-lg border-2 border-gaming-cyan/40">
                      #{index + 1}
                    </div>
                    
                    {/* Site Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl text-foreground">{site.name}</CardTitle>
                        <Badge 
                          variant="outline" 
                          className="text-xs border-gaming-green/50 text-gaming-green"
                        >
                          {site.trend}
                        </Badge>
                      </div>
                      <p className="text-gaming-cyan font-medium mb-2">{site.subtitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{site.description}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="text-right space-y-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-gaming-orange fill-current" />
                      <span className="font-bold text-gaming-orange">{site.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-gaming-purple" />
                      <span className="text-sm text-muted-foreground">{site.users}</span>
                    </div>
                    <Badge className="bg-gaming-purple/20 text-gaming-purple border-gaming-purple/40">
                      {site.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Pros */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gaming-green flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Pros
                    </h4>
                    <ul className="space-y-2">
                      {site.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-gaming-green mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gaming-orange flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Cons
                    </h4>
                    <ul className="space-y-2">
                      {site.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <XCircle className="w-3 h-3 text-gaming-orange mt-0.5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bonus and CTA */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-gaming-darker/30 border border-gaming-cyan/20">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Exclusive Bonus</p>
                    <p className="font-bold text-gaming-cyan text-lg">{site.bonus}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                      className="border-gaming-purple/50 text-gaming-purple hover:bg-gaming-purple/10"
                    >
                      <Link to={`/review/${site.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        Read Review
                      </Link>
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-gradient-cta text-white shadow-neon hover:shadow-elevated"
                    >
                      Play Now
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <Card className="bg-gradient-card border-gaming-cyan/20 shadow-gaming text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gaming-cyan mb-4">
              Want to See Your Site Listed?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Submit your gaming platform for review and get featured in our rankings. 
              We evaluate based on security, user experience, bonuses, and community feedback.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-cta text-white shadow-neon hover:shadow-elevated"
            >
              Submit Your Site
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}