import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Logo } from "@/components/Logo";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { ThemeSelector } from "@/components/ThemeSelector";
import { LanguageSelector } from "@/components/LanguageSelector";
import { MobileMenu } from "@/components/MobileMenu";
import { Helmet } from "react-helmet-async";
import { useTranslation } from 'react-i18next';
import { 
  Star, Trophy, Shield, Zap, ExternalLink, TrendingUp, Users, Clock, 
  CreditCard, Globe, MessageCircle, CheckCircle, XCircle, AlertTriangle,
  ChevronLeft, ThumbsUp, ThumbsDown
} from "lucide-react";

const SiteReview = () => {
  const { siteId } = useParams();
  const { t } = useTranslation();
  
  // Mock data - in real app this would come from API
  const siteData = {
    name: "CSGOEmpire",
    rating: 4.8,
    totalReviews: 1247,
    bonus: "250%",
    rarity: "covert",
    status: "online",
    users: "12.5K",
    description: "Premium case opening platform with guaranteed drops and instant withdrawals",
    games: ["CS2"],
    features: ["Instant Withdrawals", "Live Chat", "Mobile App", "Crypto Support"],
    founded: "2018",
    license: "Curacao Gaming License",
    languages: ["English", "Russian", "German", "Spanish"],
    currencies: ["USD", "EUR", "BTC", "ETH"],
    minDeposit: "$5",
    maxWithdrawal: "$10,000",
    withdrawalTime: "1-24 hours",
    supportAvailable: "24/7",
    
    pros: [
      "Fast withdrawal processing",
      "High-quality user interface", 
      "Excellent customer support",
      "Wide variety of cases",
      "Transparent drop rates",
      "Mobile-friendly design"
    ],
    
    cons: [
      "Limited payment methods in some regions",
      "Higher house edge on some games",
      "Occasional server maintenance"
    ],
    
    faqs: [
      {
        question: "How long does withdrawal take?",
        answer: "Withdrawals are typically processed within 1-24 hours. The exact time depends on your chosen payment method and account verification status."
      },
      {
        question: "Is this site safe and licensed?",
        answer: "Yes, the site operates under a Curacao Gaming License and implements industry-standard security measures including SSL encryption and secure payment processing."
      },
      {
        question: "What payment methods are accepted?",
        answer: "The site accepts multiple payment methods including credit/debit cards, cryptocurrencies (BTC, ETH), and various e-wallets. Availability may vary by region."
      },
      {
        question: "Can I play on mobile?",
        answer: "Yes, the platform is fully optimized for mobile devices and also offers dedicated mobile apps for iOS and Android."
      },
      {
        question: "What is the minimum deposit?",
        answer: "The minimum deposit is $5, making it accessible for players with different budget levels."
      }
    ],
    
    ratingBreakdown: {
      security: 4.9,
      userExperience: 4.8,
      gameVariety: 4.7,
      bonuses: 4.6,
      support: 4.9,
      withdrawals: 4.8
    },
    
    recentReviews: [
      {
        id: 1,
        user: "SkinHunter2023",
        rating: 5,
        date: "2024-01-15",
        comment: "Amazing site! Withdrew my winnings in under 2 hours. Great case selection and fair odds.",
        helpful: 24,
        verified: true
      },
      {
        id: 2,
        user: "CSGOPro",
        rating: 4,
        date: "2024-01-10",
        comment: "Solid platform overall. Love the UI design and the case animations are smooth. Support helped me quickly when I had an issue.",
        helpful: 18,
        verified: true
      },
      {
        id: 3,
        user: "CaseMaster",
        rating: 5,
        date: "2024-01-08",
        comment: "Been using for 6 months. Never had any problems with withdrawals. The bonus system is generous.",
        helpful: 31,
        verified: false
      }
    ]
  };

  const rarityColors = {
    covert: "rarity-covert",
    classified: "rarity-classified", 
    restricted: "rarity-restricted",
    milspec: "rarity-milspec",
    industrial: "rarity-industrial",
    consumer: "rarity-consumer"
  };

  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>{siteData.name} Review | Detailed Analysis | CaseHunters</title>
        <meta name="description" content={`Detailed review of ${siteData.name} - ${siteData.description}. Rating: ${siteData.rating}/5 based on ${siteData.totalReviews} reviews. Features, pros, cons, and user feedback.`} />
        <meta name="keywords" content={`${siteData.name} review, ${siteData.name} rating, case site review, ${siteData.games.join(', ')} case site`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${siteData.name} Review | CaseHunters`} />
        <meta property="og:description" content={`${siteData.description} - Rating: ${siteData.rating}/5`} />
        <meta property="og:url" content={`https://casehunters.com/review/${siteId}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "WebSite",
              "name": siteData.name,
              "description": siteData.description,
              "url": `https://${siteData.name.toLowerCase()}.com`
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": siteData.rating,
              "bestRating": 5,
              "worstRating": 1
            },
            "author": {
              "@type": "Organization",
              "name": "CaseHunters"
            },
            "reviewBody": siteData.description,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": siteData.rating,
              "reviewCount": siteData.totalReviews,
              "bestRating": 5,
              "worstRating": 1
            }
          })}
        </script>
      </Helmet>
      <ParallaxBackground />
      {/* Header */}
      <header className="border-b border-gaming-cyan/20 bg-gaming-dark/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <Logo variant="compact" />
            </Link>
            <div className="flex items-center gap-4">
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/sites" className="text-foreground hover:text-gaming-cyan transition-colors">Sites</Link>
                <Link to="/categories" className="text-foreground hover:text-gaming-cyan transition-colors">Categories</Link>
                <Link to="/about" className="text-foreground hover:text-gaming-cyan transition-colors">About</Link>
              </nav>
              <div className="hidden md:flex items-center gap-2">
                <ThemeSelector />
                <LanguageSelector />
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-8 overflow-x-hidden">
        {/* Back Button */}
        <Link to="/sites" className="inline-flex items-center text-gaming-cyan hover:text-gaming-cyan/80 transition-colors mb-6">
          <ChevronLeft className="w-4 h-4 mr-1" />
          {t('review.backToSites')}
        </Link>

        {/* Site Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-gaming-cyan/20 shadow-gaming">
              <CardContent className="p-4 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <h1 className="text-4xl font-bold text-gaming-cyan">{siteData.name}</h1>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-gaming-green animate-pulse"></div>
                        <span className="text-sm text-gaming-green font-medium">{t('featuredSites.online')}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg mb-4">{siteData.description}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-5 h-5 ${i < Math.floor(siteData.rating) ? 'text-gaming-orange fill-current' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-2xl font-bold text-gaming-orange">{siteData.rating}</span>
                        <span className="text-muted-foreground">({siteData.totalReviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  
                  <Badge className={`bg-${rarityColors[siteData.rarity as keyof typeof rarityColors]} text-white text-lg px-4 py-2`}>
                    {siteData.rarity.toUpperCase()}
                  </Badge>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-2 md:gap-4 mb-6">
                  <div className="text-center p-3 bg-gaming-darker/50 rounded-lg">
                    <Users className="w-6 h-6 text-gaming-cyan mx-auto mb-2" />
                    <div className="font-bold text-gaming-cyan">{siteData.users}</div>
                    <div className="text-xs text-muted-foreground">{t('review.activeUsers')}</div>
                  </div>
                  <div className="text-center p-3 bg-gaming-darker/50 rounded-lg">
                    <Trophy className="w-6 h-6 text-gaming-green mx-auto mb-2" />
                    <div className="font-bold text-gaming-green">{siteData.bonus}</div>
                    <div className="text-xs text-muted-foreground">{t('review.welcomeBonus')}</div>
                  </div>
                  <div className="text-center p-3 bg-gaming-darker/50 rounded-lg">
                    <Clock className="w-6 h-6 text-gaming-purple mx-auto mb-2" />
                    <div className="font-bold text-gaming-purple">{siteData.withdrawalTime}</div>
                    <div className="text-xs text-muted-foreground">{t('review.withdrawalTime')}</div>
                  </div>
                  <div className="text-center p-3 bg-gaming-darker/50 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-gaming-orange mx-auto mb-2" />
                    <div className="font-bold text-gaming-orange">{siteData.supportAvailable}</div>
                    <div className="text-xs text-muted-foreground">{t('review.support')}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="flex-1 bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
                    {t('review.visitSite')}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple/10">
                    <Star className="w-4 h-4 mr-2" />
                    {t('review.addReview')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Info Sidebar */}
          <div>
            <Card className="bg-gradient-card border-gaming-cyan/20 shadow-gaming">
              <CardHeader>
                <CardTitle className="text-gaming-cyan">{t('review.quickInfo')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('review.founded')}</span>
                  <span className="font-medium">{siteData.founded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('review.license')}</span>
                  <span className="font-medium text-xs">{siteData.license}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('review.minDeposit')}</span>
                  <span className="font-medium">{siteData.minDeposit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">{t('review.maxWithdrawal')}</span>
                  <span className="font-medium">{siteData.maxWithdrawal}</span>
                </div>
                
                <div className="pt-4 border-t border-gaming-cyan/20">
                  <h4 className="font-semibold mb-2 text-gaming-cyan">{t('review.supportedGames')}</h4>
                  <div className="flex flex-wrap gap-1">
                    {siteData.games.map((game, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {game}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gaming-cyan/20">
                  <h4 className="font-semibold mb-2 text-gaming-cyan">{t('review.features')}</h4>
                  <div className="space-y-2">
                    {siteData.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-gaming-green" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Review Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-gaming-dark/50">
            <TabsTrigger value="overview">{t('review.overview')}</TabsTrigger>
            <TabsTrigger value="ratings">{t('review.ratings')}</TabsTrigger>
            <TabsTrigger value="reviews">{t('review.userReviews')}</TabsTrigger>
            <TabsTrigger value="details">{t('review.details')}</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Pros */}
              <Card className="bg-gradient-card border-gaming-green/20">
                <CardHeader>
                  <CardTitle className="text-gaming-green flex items-center">
                    <ThumbsUp className="w-5 h-5 mr-2" />
                    {t('review.pros')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {siteData.pros.map((pro, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-gaming-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{pro}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cons */}
              <Card className="bg-gradient-card border-gaming-orange/20">
                <CardHeader>
                  <CardTitle className="text-gaming-orange flex items-center">
                    <ThumbsDown className="w-5 h-5 mr-2" />
                    {t('review.cons')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {siteData.cons.map((con, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-gaming-orange mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{con}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* FAQ Section */}
            <Card className="bg-gradient-card border-gaming-cyan/20">
              <CardHeader>
                <CardTitle className="text-gaming-cyan flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('review.faq')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {siteData.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger className="text-left hover:text-gaming-cyan">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ratings" className="space-y-6">
            <Card className="bg-gradient-card border-gaming-cyan/20">
              <CardHeader>
                <CardTitle>{t('review.ratingBreakdown')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(siteData.ratingBreakdown).map(([category, rating]) => (
                  <div key={category}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="capitalize font-medium">{category.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-bold text-gaming-cyan">{rating}/5</span>
                    </div>
                    <Progress value={rating * 20} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-6">
            <div className="space-y-4">
              {siteData.recentReviews.map((review) => (
                <Card key={review.id} className="bg-gradient-card border-gaming-cyan/20">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-gaming rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {review.user.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{review.user}</span>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs border-gaming-green text-gaming-green">
                                {t('review.verified')}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < review.rating ? 'text-gaming-orange fill-current' : 'text-muted-foreground'}`} 
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{review.comment}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gaming-green hover:text-gaming-green/80 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm">{review.helpful}</span>
                        </button>
                        <button className="text-muted-foreground hover:text-foreground transition-colors">
                          <ThumbsDown className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-xs text-muted-foreground">{t('review.helpful')} ({review.helpful})</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="details" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border-gaming-cyan/20">
                <CardHeader>
                  <CardTitle>{t('review.paymentWithdrawals')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('review.minDeposit')}</span>
                    <span className="font-medium">{siteData.minDeposit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('review.maxWithdrawal')}</span>
                    <span className="font-medium">{siteData.maxWithdrawal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('review.withdrawalTime')}</span>
                    <span className="font-medium">{siteData.withdrawalTime}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block mb-2">{t('review.supportedCurrencies')}</span>
                    <div className="flex flex-wrap gap-1">
                      {siteData.currencies.map((currency, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {currency}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-gaming-cyan/20">
                <CardHeader>
                  <CardTitle>{t('review.localization')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-muted-foreground block mb-2">{t('review.supportedLanguages')}</span>
                    <div className="flex flex-wrap gap-1">
                      {siteData.languages.map((language, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('review.customerSupport')}</span>
                    <span className="font-medium">{siteData.supportAvailable}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t('review.license')}</span>
                    <span className="font-medium text-sm">{siteData.license}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Author Section */}
        <Card className="bg-gradient-card border-gaming-cyan/20 shadow-gaming mt-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16 border-2 border-gaming-cyan/30">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-gaming text-white text-xl font-bold">
                  KD
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Kate Drane</h3>
                <p className="text-muted-foreground">Chief Editor</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Also Like Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gaming-cyan mb-6">Users Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 2, name: "SkinBattle Elite", rating: 4.8, bonus: "300%", users: "95k" },
              { id: 3, name: "DragonLoot", rating: 4.7, bonus: "200%", users: "88k" },
              { id: 4, name: "RareDrop Casino", rating: 4.6, bonus: "150%", users: "75k" },
              { id: 5, name: "LootVault", rating: 4.6, bonus: "250%", users: "70k" },
              { id: 6, name: "SkinArena", rating: 4.5, bonus: "100%", users: "65k" }
            ].map((site) => (
              <Link key={site.id} to={`/review/${site.id}`}>
                <Card className="bg-gradient-card border-gaming-cyan/20 hover:shadow-gaming transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Logo/Image Placeholder */}
                      <div className="w-full h-32 bg-gaming-darker/50 rounded-lg flex items-center justify-center border border-gaming-cyan/20">
                        <div className="text-4xl font-bold text-gaming-cyan/30">
                          {site.name.charAt(0)}
                        </div>
                      </div>
                      
                      {/* Site Info */}
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground text-lg hover:text-gaming-cyan transition-colors">
                          {site.name}
                        </h3>
                        
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(site.rating)
                                    ? "text-gaming-orange fill-current"
                                    : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-bold text-gaming-orange">{site.rating}</span>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">{site.users} users</span>
                          <Badge className="bg-gaming-green/20 text-gaming-green border-gaming-green/40">
                            {site.bonus}
                          </Badge>
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="space-y-2">
                        <Button 
                          variant="outline"
                          className="w-full border-gaming-purple text-gaming-purple hover:bg-gaming-purple/10"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = `/review/${site.id}`;
                          }}
                        >
                          Read Review
                        </Button>
                        <Button className="w-full bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
                          Visit Site
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteReview;