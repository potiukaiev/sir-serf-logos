import { CasinoLayout } from "@/components/casino/CasinoLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Clock, DollarSign, Users, Phone, ExternalLink, AlertTriangle } from "lucide-react";

export default function CasinoResponsibleGambling() {
  const warningSignsData = [
    "Spending more money than you can afford to lose",
    "Chasing losses with bigger bets",
    "Neglecting work, family, or social activities",
    "Borrowing money to gamble",
    "Lying about gambling activities",
    "Feeling anxious or restless when not gambling",
    "Unable to control gambling impulses"
  ];

  const safePracticesData = [
    {
      icon: <DollarSign className="w-6 h-6 text-casino-green" />,
      title: "Set Budget Limits",
      description: "Only gamble with money you can afford to lose. Never use money intended for bills, rent, or necessities."
    },
    {
      icon: <Clock className="w-6 h-6 text-casino-blue" />,
      title: "Time Management",
      description: "Set time limits for gaming sessions and stick to them. Take regular breaks and don't let gaming interfere with daily responsibilities."
    },
    {
      icon: <Shield className="w-6 h-6 text-casino-purple" />,
      title: "Use Safety Tools",
      description: "Take advantage of deposit limits, cooling-off periods, and self-exclusion options offered by casinos."
    },
    {
      icon: <Users className="w-6 h-6 text-casino-gold" />,
      title: "Stay Connected",
      description: "Maintain relationships with family and friends. Don't isolate yourself or let gambling become your primary social activity."
    }
  ];

  const supportResources = [
    {
      name: "National Council on Problem Gambling",
      phone: "1-800-522-4700",
      website: "ncpgambling.org",
      description: "24/7 confidential helpline and chat support"
    },
    {
      name: "Gamblers Anonymous",
      phone: "626-960-3500",
      website: "gamblersanonymous.org",
      description: "Support groups and recovery programs"
    },
    {
      name: "GamCare",
      phone: "0808 8020 133",
      website: "gamcare.org.uk",
      description: "UK-based support and counseling services"
    },
    {
      name: "BeGambleAware",
      phone: "0808 8020 133",
      website: "begambleaware.org",
      description: "Information and support for problem gambling"
    }
  ];

  return (
    <CasinoLayout
      title="Responsible Gambling | Safe Gaming Practices | HealthyCasinos"
      description="Learn about responsible gambling practices, warning signs of problem gambling, and where to get help. Your safety is our priority."
      keywords="responsible gambling, problem gambling help, gambling addiction support, safe gaming practices, gambling limits"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-casino-green" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-casino-green to-casino-gold bg-clip-text text-transparent">
              Responsible Gambling
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gambling should be fun and entertaining. Learn how to gamble safely and responsibly.
          </p>
        </div>

        {/* Important Alert */}
        <Alert className="border-casino-red/40 bg-casino-red/10">
          <AlertTriangle className="h-4 w-4 text-casino-red" />
          <AlertDescription className="text-casino-red">
            Gambling can be addictive. If you or someone you know has a gambling problem, help is available 24/7.
          </AlertDescription>
        </Alert>

        {/* Safe Gaming Practices */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-casino-green">
            Safe Gaming Practices
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {safePracticesData.map((practice, index) => (
              <Card key={index} className="bg-card border-border shadow-elevated">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    {practice.icon}
                    <span>{practice.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{practice.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Warning Signs */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-casino-green">
            Warning Signs of Problem Gambling
          </h2>
          <Card className="bg-card border-casino-red/20 shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-casino-red">
                <AlertTriangle className="w-6 h-6" />
                Recognize the Signs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Problem gambling can affect anyone. Be aware of these warning signs:
              </p>
              <ul className="space-y-3">
                {warningSignsData.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-casino-red mt-2 flex-shrink-0" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Self-Assessment Tools */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-casino-green">
            Self-Assessment & Safety Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border shadow-elevated">
              <CardHeader>
                <CardTitle>Set Personal Limits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Before you start gambling, set clear limits and stick to them:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Set daily, weekly, or monthly deposit limits</li>
                  <li>• Decide how much time you'll spend gambling</li>
                  <li>• Set loss limits you're comfortable with</li>
                  <li>• Never chase losses by betting more</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-elevated">
              <CardHeader>
                <CardTitle>Casino Safety Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Reputable casinos offer tools to help you gamble responsibly:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Deposit and betting limits</li>
                  <li>• Session time limits and reminders</li>
                  <li>• Cooling-off periods (temporary breaks)</li>
                  <li>• Self-exclusion (permanent account closure)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Support Resources */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-casino-green">
            Get Help - Support Resources
          </h2>
          <div className="space-y-4">
            {supportResources.map((resource, index) => (
              <Card key={index} className="bg-card border-border shadow-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{resource.name}</h3>
                      <p className="text-muted-foreground mb-3">{resource.description}</p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <div className="flex items-center gap-2 text-casino-green">
                          <Phone className="w-4 h-4" />
                          <span className="font-medium">{resource.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-casino-blue">
                          <ExternalLink className="w-4 h-4" />
                          <span className="font-medium">{resource.website}</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-casino-green/50 text-casino-green hover:bg-casino-green/10 ml-4"
                    >
                      Visit Site
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Help */}
        <Card className="bg-gradient-card border-casino-red/20 shadow-casino text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-casino-red mb-4">
              Need Immediate Help?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you're in crisis or need immediate support, help is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-casino-red text-white hover:bg-casino-red/90"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Crisis Helpline
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-casino-green text-casino-green hover:bg-casino-green/10"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Chat Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </CasinoLayout>
  );
}
