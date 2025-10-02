import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Star, Trophy, Users, Clock, TrendingUp } from "lucide-react";

const Casinos = () => {
  const casinos = [
    {
      id: 1,
      name: "Royal Casino",
      rating: 4.8,
      reviews: 1543,
      bonus: "100% up to $500",
      games: 2500,
      withdrawalTime: "24-48h",
      payoutRate: "97.2%",
    },
    {
      id: 2,
      name: "Golden Palace",
      rating: 4.7,
      reviews: 1289,
      bonus: "200% up to $1000",
      games: 3200,
      withdrawalTime: "12-24h",
      payoutRate: "96.8%",
    },
    {
      id: 3,
      name: "Diamond Casino",
      rating: 4.6,
      reviews: 987,
      bonus: "150% up to $750",
      games: 1800,
      withdrawalTime: "24h",
      payoutRate: "96.5%",
    },
    {
      id: 4,
      name: "Platinum Spins",
      rating: 4.5,
      reviews: 856,
      bonus: "100% up to $600",
      games: 2100,
      withdrawalTime: "24-48h",
      payoutRate: "96.3%",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Online Casino Reviews & Ratings | HealthyCasinos</title>
        <meta
          name="description"
          content="Browse comprehensive reviews of licensed online casinos. Compare bonuses, games, withdrawal times, and user ratings to find your perfect casino."
        />
      </Helmet>

      {/* Header */}
      <header className="border-b border-casino-green/20 bg-casino-dark/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/healthy-casinos" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-casino-green" />
              <span className="text-2xl font-bold text-casino-green">
                HealthyCasinos
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/healthy-casinos/casinos"
                className="text-casino-green font-semibold"
              >
                Casinos
              </Link>
              <Link
                to="/healthy-casinos/about"
                className="text-foreground hover:text-casino-green transition-colors"
              >
                About
              </Link>
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                ← CaseHunters
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-casino-green mb-8">
          All Casino Reviews
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {casinos.map((casino) => (
            <Card
              key={casino.id}
              className="bg-gradient-card border-casino-green/20 hover:shadow-casino transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {casino.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(casino.rating)
                                ? "text-casino-gold fill-current"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {casino.rating} ({casino.reviews})
                      </span>
                    </div>
                  </div>
                  <Badge className="bg-casino-green text-white">
                    Licensed
                  </Badge>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="w-4 h-4 text-casino-gold" />
                    <span className="text-casino-gold font-semibold">
                      {casino.bonus}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{casino.games} Games</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Withdrawal: {casino.withdrawalTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    <span>RTP: {casino.payoutRate}</span>
                  </div>
                </div>

                <Link to={`/healthy-casinos/casino/${casino.id}`}>
                  <Button className="w-full bg-gradient-cta text-white hover:shadow-neon">
                    Read Review
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Casinos;
