import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@repo/ui";
import { Button } from "@repo/ui";
import { Badge } from "@repo/ui";
import { Star, Shield, TrendingUp, Users, Clock, Trophy } from "lucide-react";

const Index = () => {
  const featuredCasinos = [
    {
      id: 1,
      name: "Royal Casino",
      rating: 4.8,
      reviews: 1543,
      bonus: "100% up to $500",
      games: 2500,
      withdrawalTime: "24-48h",
      license: "Malta Gaming Authority",
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
      license: "UK Gambling Commission",
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
      license: "Curacao eGaming",
      payoutRate: "96.5%",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>HealthyCasinos - Trusted Online Casino Reviews & Ratings</title>
        <meta
          name="description"
          content="Find the best online casinos with honest reviews, verified licenses, and responsible gambling practices. Compare bonuses, games, and withdrawal times."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "HealthyCasinos",
            url: "https://healthycasinos.com",
            description:
              "Trusted online casino reviews and responsible gambling resources",
          })}
        </script>
      </Helmet>

      {/* Header */}
      <header className="border-b border-casino-green/20 bg-casino-dark/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-casino-green" />
              <span className="text-2xl font-bold text-casino-green">
                HealthyCasinos
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/casinos"
                className="text-foreground hover:text-casino-green transition-colors"
              >
                Casinos
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-casino-green transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-casino-green to-casino-gold bg-clip-text text-transparent">
          Find Trusted Online Casinos
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Honest reviews, verified licenses, and responsible gambling practices.
          Your safe guide to online casino gaming.
        </p>
        <Link to="/casinos">
          <Button className="bg-gradient-cta text-white shadow-neon hover:shadow-elevated text-lg px-8 py-6">
            Browse Casinos
          </Button>
        </Link>
      </section>

      {/* Featured Casinos */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-casino-green mb-8">
          Top Rated Casinos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCasinos.map((casino) => (
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
                        {casino.rating} ({casino.reviews} reviews)
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

                <Link to={`/casino/${casino.id}`}>
                  <Button className="w-full bg-gradient-cta text-white hover:shadow-neon">
                    Read Review
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-casino-green/20 bg-casino-darker py-8 mt-16">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p className="mb-2">© 2025 HealthyCasinos. All rights reserved.</p>
          <p className="text-sm">
            Play responsibly. Gambling can be addictive. 18+
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
