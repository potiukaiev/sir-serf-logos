import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { Badge } from "@repo/ui";
import { Button } from "@repo/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui";
import { Shield, Star, Trophy, Users, Clock, TrendingUp, ExternalLink, CheckCircle, AlertTriangle } from "lucide-react";

const CasinoReview = () => {
  const { casinoId } = useParams();

  const casinoData = {
    name: "Royal Casino",
    rating: 4.8,
    reviews: 1543,
    bonus: "100% up to $500",
    games: 2500,
    withdrawalTime: "24-48h",
    license: "Malta Gaming Authority",
    payoutRate: "97.2%",
    founded: "2015",
    currencies: ["USD", "EUR", "GBP", "BTC"],
    languages: ["English", "German", "Spanish", "French"],
    minDeposit: "$10",
    maxWithdrawal: "$5,000/day",
    description: "Royal Casino is a premium online casino offering a vast selection of games from top providers. Licensed by the Malta Gaming Authority, it ensures fair play and secure transactions.",
    pros: [
      "Wide variety of games from top providers",
      "Fast withdrawal processing",
      "Excellent customer support 24/7",
      "Mobile-friendly platform",
      "Generous welcome bonus",
      "Licensed and regulated"
    ],
    cons: [
      "Limited availability in some countries",
      "Wagering requirements on bonuses",
      "Withdrawal limits may be restrictive for high rollers"
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{casinoData.name} Review | HealthyCasinos</title>
        <meta
          name="description"
          content={`Detailed review of ${casinoData.name} - ${casinoData.description}. Rating: ${casinoData.rating}/5 based on ${casinoData.reviews} reviews.`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "Organization",
              name: casinoData.name,
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: casinoData.rating,
              bestRating: 5,
            },
            author: {
              "@type": "Organization",
              name: "HealthyCasinos",
            },
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

      <div className="container mx-auto px-6 py-12">
        <Link to="/casinos" className="text-casino-green hover:underline mb-6 inline-block">
          ← Back to Casinos
        </Link>

        {/* Casino Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-casino-green/20">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-4xl font-bold text-casino-green mb-4">
                      {casinoData.name}
                    </h1>
                    <p className="text-muted-foreground text-lg mb-4">
                      {casinoData.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(casinoData.rating)
                                ? "text-casino-gold fill-current"
                                : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xl font-bold">
                        {casinoData.rating}
                      </span>
                      <span className="text-muted-foreground">
                        ({casinoData.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  <Badge className="bg-casino-green text-white text-lg px-4 py-2">
                    Licensed
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-casino-darker/50 rounded-lg">
                    <Trophy className="w-6 h-6 text-casino-gold mx-auto mb-2" />
                    <div className="font-bold text-casino-gold">{casinoData.bonus}</div>
                    <div className="text-xs text-muted-foreground">Welcome Bonus</div>
                  </div>
                  <div className="text-center p-4 bg-casino-darker/50 rounded-lg">
                    <Users className="w-6 h-6 text-casino-blue mx-auto mb-2" />
                    <div className="font-bold text-casino-blue">{casinoData.games}</div>
                    <div className="text-xs text-muted-foreground">Games</div>
                  </div>
                  <div className="text-center p-4 bg-casino-darker/50 rounded-lg">
                    <Clock className="w-6 h-6 text-casino-purple mx-auto mb-2" />
                    <div className="font-bold text-casino-purple">{casinoData.withdrawalTime}</div>
                    <div className="text-xs text-muted-foreground">Withdrawal</div>
                  </div>
                  <div className="text-center p-4 bg-casino-darker/50 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-casino-green mx-auto mb-2" />
                    <div className="font-bold text-casino-green">{casinoData.payoutRate}</div>
                    <div className="text-xs text-muted-foreground">RTP</div>
                  </div>
                </div>

                <Button className="w-full bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
                  Visit Casino
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info Sidebar */}
          <div>
            <Card className="bg-gradient-card border-casino-green/20">
              <CardHeader>
                <CardTitle className="text-casino-green">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Founded</span>
                  <span className="font-medium">{casinoData.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">License</span>
                  <span className="font-medium text-xs">{casinoData.license}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Min Deposit</span>
                  <span className="font-medium">{casinoData.minDeposit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Max Withdrawal</span>
                  <span className="font-medium">{casinoData.maxWithdrawal}</span>
                </div>
                <div className="pt-4 border-t border-casino-green/20">
                  <h4 className="font-semibold mb-2 text-casino-green">Supported Currencies</h4>
                  <div className="flex flex-wrap gap-1">
                    {casinoData.currencies.map((currency, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {currency}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Review Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 bg-casino-dark/50">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="pros-cons">Pros & Cons</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card className="bg-gradient-card border-casino-green/20">
              <CardHeader>
                <CardTitle className="text-casino-green">About {casinoData.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {casinoData.description} With {casinoData.games} games available and an impressive RTP of {casinoData.payoutRate}, 
                  players can enjoy a fair and exciting gaming experience. The casino supports multiple currencies and languages, 
                  making it accessible to players worldwide.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pros-cons">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-casino-green/20">
                <CardHeader>
                  <CardTitle className="text-casino-green flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Pros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {casinoData.pros.map((pro, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-casino-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{pro}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-casino-red/20">
                <CardHeader>
                  <CardTitle className="text-casino-red flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Cons
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {casinoData.cons.map((con, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-casino-red mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{con}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="details">
            <Card className="bg-gradient-card border-casino-green/20">
              <CardHeader>
                <CardTitle className="text-casino-green">Payment & Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="text-muted-foreground block mb-2">Supported Currencies</span>
                  <div className="flex flex-wrap gap-2">
                    {casinoData.currencies.map((currency, i) => (
                      <Badge key={i} variant="outline">
                        {currency}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground block mb-2">Languages</span>
                  <div className="flex flex-wrap gap-2">
                    {casinoData.languages.map((language, i) => (
                      <Badge key={i} variant="outline">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CasinoReview;
