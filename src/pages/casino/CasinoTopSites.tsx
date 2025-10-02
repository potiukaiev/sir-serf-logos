import { CasinoLayout } from "@/components/casino/CasinoLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, CheckCircle, XCircle, ExternalLink, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const topCasinos = [
  {
    id: 1,
    name: "Royal Casino",
    subtitle: "Premium Online Casino Experience",
    rating: 4.9,
    users: "150k",
    bonus: "100% up to $500",
    category: "Slots",
    trend: "+18%",
    description: "Leading online casino with advanced gaming algorithms and instant withdrawals. Features exclusive games, daily bonuses, and professional customer support.",
    pros: [
      "Instant withdrawals",
      "1000+ premium games",
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
    name: "Lucky Spins",
    subtitle: "Your Luck Starts Here",
    rating: 4.8,
    users: "120k",
    bonus: "150% up to $300",
    category: "Roulette",
    trend: "+15%",
    description: "A vibrant online casino offering a wide range of games, from classic slots to live dealer experiences. Known for its generous bonuses and user-friendly interface.",
    pros: [
      "Wide variety of games",
      "Mobile-friendly platform",
      "Fast payouts",
      "Regular promotions",
      "User-friendly interface"
    ],
    cons: [
      "Restricted in some countries",
      "Fewer payment options",
      "Bonus wagering requirements"
    ]
  },
  {
    id: 3,
    name: "Golden Ace",
    subtitle: "The Ultimate Casino Destination",
    rating: 4.7,
    users: "110k",
    bonus: "50 Free Spins",
    category: "Blackjack",
    trend: "+12%",
    description: "An established online casino with a focus on providing a secure and fair gaming environment. Offers a wide selection of games, including live casino options and progressive jackpots.",
    pros: [
      "Secure and fair gaming",
      "Live casino options",
      "Progressive jackpots",
      "Loyalty rewards program",
      "Multiple language support"
    ],
    cons: [
      "Outdated website design",
      "Slower withdrawal times",
      "Limited customer support hours"
    ]
  },
  {
    id: 4,
    name: "Diamond Casino",
    subtitle: "Shine with Every Spin",
    rating: 4.6,
    users: "95k",
    bonus: "200% up to $200",
    category: "Poker",
    trend: "+10%",
    description: "A luxurious online casino offering a premium gaming experience. Features high-limit games, exclusive bonuses, and personalized customer support.",
    pros: [
      "Premium gaming experience",
      "High-limit games",
      "Exclusive bonuses",
      "Personalized customer support",
      "VIP program"
    ],
    cons: [
      "High minimum bets",
      "Limited game selection",
      "VIP program required for best benefits"
    ]
  },
  {
    id: 5,
    name: "Vegas Nights",
    subtitle: "Experience the Thrill of Vegas",
    rating: 4.5,
    users: "80k",
    bonus: "100 Free Spins",
    category: "Live Casino",
    trend: "+8%",
    description: "An immersive online casino that brings the excitement of Las Vegas to your screen. Offers a wide range of live dealer games, virtual sports, and classic casino games.",
    pros: [
      "Immersive gaming experience",
      "Wide range of live dealer games",
      "Virtual sports",
      "Mobile app available",
      "24/7 customer support"
    ],
    cons: [
      "Can be slow on older devices",
      "High data usage",
      "Limited payment options"
    ]
  }
];

export default function CasinoTopSites() {
  return (
    <CasinoLayout
      title="Top 10 Online Casinos 2025 | Best Licensed Platforms"
      description="Discover the top-ranked online casinos with detailed reviews, pros and cons, user ratings, and exclusive bonuses. Find your perfect platform today."
      keywords="top online casinos, best casino sites, licensed casinos, casino rankings, casino reviews, online gambling"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Top 10 Online Casinos 2025",
            "description": "Comprehensive rankings of the best licensed online casino platforms",
            "itemListElement": topCasinos.map((casino, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": casino.name,
                "description": casino.description,
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": casino.rating,
                  "bestRating": 5,
                  "worstRating": 1,
                  "ratingCount": parseInt(casino.users.replace('k', '000'))
                },
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "description": casino.bonus
                },
                "category": casino.category
              }
            }))
          })}
        </script>
      </Helmet>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-casino-gold" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-casino-green to-casino-gold bg-clip-text text-transparent">
              Top 10 Online Casinos
            </h1>
            <Trophy className="w-8 h-8 text-casino-gold" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive rankings based on user reviews, security ratings, bonuses, and community feedback. 
            Updated monthly with the latest platform analysis.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="outline" className="bg-casino-green/10 border-casino-green/40 text-casino-green">
              <TrendingUp className="w-3 h-3 mr-1" />
              Updated Dec 2024
            </Badge>
            <Badge variant="outline" className="bg-casino-purple/10 border-casino-purple/40 text-casino-purple">
              <Users className="w-3 h-3 mr-1" />
              2.5M+ Users
            </Badge>
          </div>
        </div>

        {/* Rankings List */}
        <div className="space-y-6">
          {topCasinos.map((casino, index) => (
            <Card key={casino.id} className="bg-card border-border shadow-elevated hover:shadow-casino transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    {/* Rank Badge */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-casino-green/20 text-casino-green font-bold text-lg border-2 border-casino-green/40">
                      #{index + 1}
                    </div>
                    
                    {/* Site Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl text-foreground">{casino.name}</CardTitle>
                        <Badge 
                          variant="outline" 
                          className="text-xs border-casino-green/50 text-casino-green"
                        >
                          {casino.trend}
                        </Badge>
                      </div>
                      <p className="text-casino-green font-medium mb-2">{casino.subtitle}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{casino.description}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="text-right space-y-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-casino-gold fill-current" />
                      <span className="font-bold text-casino-gold">{casino.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-casino-purple" />
                      <span className="text-sm text-muted-foreground">{casino.users}</span>
                    </div>
                    <Badge className="bg-casino-purple/20 text-casino-purple border-casino-purple/40">
                      {casino.category}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pros and Cons */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Pros */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-casino-green flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Pros
                    </h4>
                    <ul className="space-y-2">
                      {casino.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-casino-green mt-0.5 flex-shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-casino-red flex items-center gap-2">
                      <XCircle className="w-4 h-4" />
                      Cons
                    </h4>
                    <ul className="space-y-2">
                      {casino.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <XCircle className="w-3 h-3 text-casino-red mt-0.5 flex-shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bonus and CTA */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-casino-darker/30 border border-casino-green/20">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Exclusive Bonus</p>
                    <p className="font-bold text-casino-green text-lg">{casino.bonus}</p>
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      asChild
                      className="border-casino-purple/50 text-casino-purple hover:bg-casino-purple/10"
                    >
                      <Link to={`/healthy-casinos/casino/${casino.id}`}>
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
        <Card className="bg-gradient-card border-casino-green/20 shadow-casino text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-casino-green mb-4">
              Want to See Your Casino Listed?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Submit your casino for review and get featured in our rankings. 
              We evaluate based on security, user experience, bonuses, and community feedback.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-cta text-white shadow-neon hover:shadow-elevated"
            >
              Submit Your Casino
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </CasinoLayout>
  );
}
