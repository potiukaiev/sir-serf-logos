import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { ThemeSelector } from "@/components/ThemeSelector";
import { LanguageSelector } from "@/components/LanguageSelector";
import { MobileMenu } from "@/components/MobileMenu";
import { Helmet } from "react-helmet-async";
import { Shield, Star, Users, TrendingUp, CheckCircle, AlertTriangle, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Sites Only",
      description: "Every platform is thoroughly vetted for security, legitimacy, and user safety."
    },
    {
      icon: Star,
      title: "Real User Reviews",
      description: "Authentic ratings and reviews from the gaming community."
    },
    {
      icon: TrendingUp,
      title: "Live Data",
      description: "Real-time site status, user counts, and bonus tracking."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by gamers, for gamers. Your feedback shapes our directory."
    }
  ];

  const stats = [
    { label: "Verified Sites", value: "150+", color: "gaming-cyan" },
    { label: "Monthly Users", value: "50K+", color: "gaming-purple" },
    { label: "Skins Tracked", value: "$2M+", color: "gaming-orange" },
    { label: "Countries Served", value: "45+", color: "gaming-green" }
  ];

  const safetyTips = [
    "Never share your Steam login credentials with any third-party site",
    "Always enable Steam Guard and two-factor authentication",
    "Check site reviews and ratings before depositing any items",
    "Start with small amounts to test withdrawal processes",
    "Verify site licenses and regulatory compliance",
    "Use reputable payment methods with buyer protection"
  ];

  return (
    <div className="min-h-screen relative">
      <Helmet>
        <title>About CaseHunters | Gaming Case Site Reviews & Safety</title>
        <meta name="description" content="Learn about CaseHunters mission to provide verified reviews of CS2 and Dota 2 case sites. Promoting safe gaming, trusted platforms, and responsible gaming practices." />
        <meta name="keywords" content="about casehunters, gaming site reviews, safe case sites, responsible gaming, gaming platform verification" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About CaseHunters | Gaming Safety & Reviews" />
        <meta property="og:description" content="Dedicated to promoting safe gaming and verified case site reviews." />
        <meta property="og:url" content="https://casehunters.com/about" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CaseHunters",
            "url": "https://casehunters.com",
            "description": "Gaming case site reviews and verification platform",
            "foundingDate": "2024",
            "sameAs": [
              "https://twitter.com/casehunters",
              "https://discord.gg/casehunters"
            ]
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
                <Link to="/about" className="text-gaming-cyan hover:text-gaming-cyan/80 transition-colors font-medium">About</Link>
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

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent">
            About CaseHunters
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted companion in the world of gaming case sites. We help players discover 
            safe, legitimate platforms for skin trading and case opening adventures.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-gaming-cyan/20 text-center">
              <CardContent className="p-6">
                <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-gaming-cyan/20 shadow-gaming">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-primary bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground text-center mb-8">
                To create the most comprehensive, trusted directory of gaming case sites while 
                promoting safe trading practices and protecting our community from scams.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-gaming rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gaming-cyan">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Safety Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">🛡️ Safety First</h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Safety Tips */}
          <Card className="bg-gradient-card border-gaming-cyan/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-gaming-cyan flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Safety Guidelines
              </h3>
              <div className="space-y-3">
                {safetyTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gaming-green rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Warning Signs */}
          <Card className="bg-gradient-card border-gaming-orange/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-gaming-orange flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Red Flags to Avoid
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Sites asking for Steam passwords directly</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Unrealistic bonus promises (500%+)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">No customer support or contact information</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Pressure to deposit immediately</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Poor user reviews or no reviews at all</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gaming-orange rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">Complicated withdrawal processes</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16">
        <Card className="bg-gradient-card border-gaming-cyan/20 shadow-gaming max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-muted-foreground mb-8">
              Have a site to recommend? Found an issue? We'd love to hear from you!
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <Button className="bg-gaming-cyan hover:bg-gaming-cyan/90 text-gaming-dark">
                <Mail className="w-4 h-4 mr-2" />
                Email Us
              </Button>
              <Button variant="outline" className="border-gaming-purple text-gaming-purple hover:bg-gaming-purple/10">
                <MessageCircle className="w-4 h-4 mr-2" />
                Discord
              </Button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gaming-cyan/20">
              <p className="text-sm text-muted-foreground">
                CaseHunters is an independent directory. We are not affiliated with Valve Corporation, 
                Steam, or any of the listed case sites.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;