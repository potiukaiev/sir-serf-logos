import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star, Zap, X } from "lucide-react";

interface GamingAdProps {
  variant?: "banner" | "sidebar" | "inline";
  className?: string;
}

export const GamingAd = ({ variant = "sidebar", className = "" }: GamingAdProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const ads = [
    {
      id: 1,
      title: "Razer DeathAdder V3 Pro",
      subtitle: "Wireless Gaming Mouse",
      price: "$149.99",
      originalPrice: "$199.99",
      discount: "25% OFF",
      rating: 4.8,
      reviews: "15K+",
      features: ["30K DPI", "90h Battery", "Wireless"],
      image: "🖱️",
      cta: "Upgrade Your Aim",
      badge: "Editor's Choice"
    },
    {
      id: 2,
      title: "SteelSeries Apex Pro",
      subtitle: "Mechanical Gaming Keyboard",
      price: "$199.99",
      originalPrice: "$249.99",
      discount: "20% OFF",
      rating: 4.9,
      reviews: "12K+",
      features: ["OmniPoint Switches", "RGB", "Magnetic"],
      image: "⌨️",
      cta: "Level Up Typing",
      badge: "Pro Choice"
    },
    {
      id: 3,
      title: "HyperX Cloud III",
      subtitle: "Gaming Headset",
      price: "$99.99",
      originalPrice: "$129.99",
      discount: "23% OFF",
      rating: 4.7,
      reviews: "25K+",
      features: ["7.1 Surround", "Comfort", "Durable"],
      image: "🎧",
      cta: "Hear Every Step",
      badge: "Best Value"
    }
  ];

  const randomAd = ads[Math.floor(Math.random() * ads.length)];

  if (!isVisible) return null;

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Editor's Choice": return "bg-gaming-cyan text-gaming-dark";
      case "Pro Choice": return "bg-gaming-purple text-white";
      case "Best Value": return "bg-gaming-green text-gaming-dark";
      default: return "bg-gaming-orange text-white";
    }
  };

  if (variant === "banner") {
    return (
      <div className={`w-full ${className}`}>
        <Card className="bg-gradient-card border-gaming-cyan/20 shadow-gaming relative overflow-hidden">
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 z-10 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{randomAd.image}</div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-bold text-gaming-cyan">{randomAd.title}</h4>
                    <Badge className={getBadgeColor(randomAd.badge)}>
                      {randomAd.badge}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{randomAd.subtitle}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-gaming-orange fill-current" />
                      <span className="text-xs font-medium ml-1">{randomAd.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({randomAd.reviews})</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-lg font-bold text-gaming-green">{randomAd.price}</span>
                  <span className="text-sm text-muted-foreground line-through">{randomAd.originalPrice}</span>
                </div>
                <Badge className="bg-gaming-orange text-white mb-2">{randomAd.discount}</Badge>
                <Button size="sm" className="bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
                  {randomAd.cta}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`w-full ${className}`}>
        <Card className="bg-gradient-card border-gaming-cyan/20 shadow-gaming relative">
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 z-10 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
          <CardContent className="p-6 text-center">
            <div className="text-4xl mb-3">{randomAd.image}</div>
            <div className="flex justify-center mb-2">
              <Badge className={getBadgeColor(randomAd.badge)}>
                {randomAd.badge}
              </Badge>
            </div>
            <h4 className="text-xl font-bold text-gaming-cyan mb-1">{randomAd.title}</h4>
            <p className="text-muted-foreground mb-3">{randomAd.subtitle}</p>
            
            <div className="flex justify-center items-center space-x-2 mb-3">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-gaming-orange fill-current" />
                <span className="text-sm font-medium ml-1">{randomAd.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">({randomAd.reviews})</span>
            </div>

            <div className="flex justify-center items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-gaming-green">{randomAd.price}</span>
              <span className="text-muted-foreground line-through">{randomAd.originalPrice}</span>
              <Badge className="bg-gaming-orange text-white">{randomAd.discount}</Badge>
            </div>

            <div className="flex justify-center flex-wrap gap-1 mb-4">
              {randomAd.features.map((feature, i) => (
                <Badge key={i} variant="outline" className="text-xs border-gaming-purple/50 text-gaming-purple">
                  {feature}
                </Badge>
              ))}
            </div>

            <Button className="bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
              {randomAd.cta}
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Default sidebar variant
  return (
    <div className={`w-full ${className}`}>
      <Card className="bg-gradient-card border-gaming-cyan/20 shadow-gaming relative sticky top-24">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 z-10 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <CardContent className="p-4">
          <div className="text-center">
            <div className="text-3xl mb-3">{randomAd.image}</div>
            <Badge className={`${getBadgeColor(randomAd.badge)} mb-2`}>
              {randomAd.badge}
            </Badge>
            <h4 className="font-bold text-gaming-cyan mb-1">{randomAd.title}</h4>
            <p className="text-sm text-muted-foreground mb-3">{randomAd.subtitle}</p>
            
            <div className="flex justify-center items-center space-x-2 mb-3">
              <div className="flex items-center">
                <Star className="w-3 h-3 text-gaming-orange fill-current" />
                <span className="text-xs font-medium ml-1">{randomAd.rating}</span>
              </div>
              <span className="text-xs text-muted-foreground">({randomAd.reviews})</span>
            </div>

            <div className="text-center mb-3">
              <div className="text-lg font-bold text-gaming-green">{randomAd.price}</div>
              <div className="text-xs text-muted-foreground line-through">{randomAd.originalPrice}</div>
              <Badge className="bg-gaming-orange text-white text-xs mt-1">{randomAd.discount}</Badge>
            </div>

            <div className="text-xs text-muted-foreground mb-4">
              {randomAd.features.join(" • ")}
            </div>

            <Button size="sm" className="w-full bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
              {randomAd.cta}
              <ExternalLink className="w-3 h-3 ml-1" />
            </Button>
            
            <div className="text-xs text-muted-foreground mt-2">
              Sponsored
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GamingAd;