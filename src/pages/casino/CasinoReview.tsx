import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Trophy, Users, Clock, TrendingUp, ExternalLink, CheckCircle, AlertTriangle, ChevronLeft } from "lucide-react";
import { CasinoLayout } from "@/components/casino/CasinoLayout";
import { GamingAd } from "@/components/GamingAd";

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
    <CasinoLayout
      title={`${casinoData.name} Review | HealthyCasinos`}
      description={`Detailed review of ${casinoData.name} - ${casinoData.description}. Rating: ${casinoData.rating}/5 based on ${casinoData.reviews} reviews.`}
      keywords={`${casinoData.name} review, ${casinoData.name} casino, casino bonus, online gambling`}
    >
      <Helmet>
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

      <div className="space-y-8">
        <Link to="/healthy-casinos/casinos" className="inline-flex items-center text-casino-green hover:underline">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Casinos
        </Link>

        {/* Casino Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

        {/* Ad */}
        <GamingAd variant="banner" />

        {/* Related Casinos */}
        <div>
          <h2 className="text-2xl font-bold text-casino-green mb-6">
            Similar Casinos You Might Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: 2, name: "Golden Palace", rating: 4.7, bonus: "200%" },
              { id: 3, name: "Diamond Casino", rating: 4.6, bonus: "150%" },
              { id: 4, name: "Platinum Spins", rating: 4.5, bonus: "100%" }
            ].map((casino) => (
              <Card
                key={casino.id}
                className="bg-gradient-card border-casino-green/20 hover:shadow-casino transition-all"
              >
                <CardContent className="p-4">
                  <h3 className="font-bold text-foreground mb-2">{casino.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-casino-gold fill-current" />
                    <span className="font-semibold">{casino.rating}</span>
                  </div>
                  <Badge className="bg-casino-green text-white mb-3">
                    {casino.bonus} Bonus
                  </Badge>
                  <Link to={`/healthy-casinos/casino/${casino.id}`}>
                    <Button size="sm" className="w-full bg-gradient-cta text-white">
                      View Review
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </CasinoLayout>
  );
};

export default CasinoReview;
