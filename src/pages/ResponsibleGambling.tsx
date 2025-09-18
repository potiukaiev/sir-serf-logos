import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Clock, DollarSign, Users, Phone, ExternalLink, AlertTriangle } from "lucide-react";

export default function ResponsibleGambling() {
  const warningSignsData = [
    "Spending more money than you can afford",
    "Chasing losses with bigger bets",
    "Neglecting work, family, or social activities",
    "Borrowing money to gamble",
    "Lying about gambling activities",
    "Feeling anxious when not gambling",
    "Unable to control gambling impulses"
  ];

  const safePracticesData = [
    {
      icon: <DollarSign className="w-6 h-6 text-gaming-green" />,
      title: "Set Budget Limits",
      description: "Only gamble with money you can afford to lose. Never use money intended for bills, rent, or necessities."
    },
    {
      icon: <Clock className="w-6 h-6 text-gaming-cyan" />,
      title: "Time Management",
      description: "Set time limits for gaming sessions and stick to them. Take regular breaks and don't let gaming interfere with daily responsibilities."
    },
    {
      icon: <Shield className="w-6 h-6 text-gaming-purple" />,
      title: "Use Safety Tools",
      description: "Take advantage of deposit limits, cooling-off periods, and self-exclusion options offered by gaming platforms."
    },
    {
      icon: <Users className="w-6 h-6 text-gaming-orange" />,
      title: "Stay Connected",
      description: "Maintain relationships with family and friends. Don't isolate yourself or let gaming become your primary social activity."
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
    <Layout
      title="Responsible Gambling | Safe Gaming Practices | CaseHunters"
      description="Learn about responsible gambling practices, warning signs of problem gambling, and where to get help. Stay safe while enjoying CS2 and Dota 2 case sites."
      keywords="responsible gambling, problem gambling help, safe gaming practices, gambling addiction support, gaming site safety"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-gaming-green" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
              Responsible Gambling
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gaming should be fun and entertaining. Learn how to stay safe, set limits, 
            and recognize when gaming becomes a problem.
          </p>
        </div>

        {/* Important Alert */}
        <Alert className="border-gaming-orange/40 bg-gaming-orange/10">
          <AlertTriangle className="h-4 w-4 text-gaming-orange" />
          <AlertDescription className="text-gaming-orange">
            <strong>Important:</strong> Case opening and skin gambling can be addictive. 
            Only participate if you are 18+ and can afford potential losses.
          </AlertDescription>
        </Alert>

        {/* Safe Gaming Practices */}
        <section>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
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
          <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Warning Signs of Problem Gambling
          </h2>
          <Card className="bg-card border-gaming-orange/20 shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gaming-orange">
                <AlertTriangle className="w-6 h-6" />
                Recognize the Signs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                If you or someone you know experiences any of these signs, it may indicate a gambling problem:
              </p>
              <ul className="space-y-3">
                {warningSignsData.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gaming-orange mt-2 flex-shrink-0" />
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Self-Assessment Tools */}
        <section>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Self-Assessment & Tools
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card border-border shadow-elevated">
              <CardHeader>
                <CardTitle>Set Your Limits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Before you start gaming, decide on your limits and stick to them:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Daily/weekly spending limit</li>
                  <li>• Time limit per session</li>
                  <li>• Loss limit (stop when reached)</li>
                  <li>• Never chase losses</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border shadow-elevated">
              <CardHeader>
                <CardTitle>Platform Safety Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Use built-in safety tools offered by gaming platforms:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Deposit limits</li>
                  <li>• Time limits and session reminders</li>
                  <li>• Cooling-off periods</li>
                  <li>• Self-exclusion options</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Support Resources */}
        <section>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Get Help & Support
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
                        <div className="flex items-center gap-2 text-gaming-green">
                          <Phone className="w-4 h-4" />
                          <span className="font-medium">{resource.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gaming-cyan">
                          <ExternalLink className="w-4 h-4" />
                          <span className="font-medium">{resource.website}</span>
                        </div>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-gaming-green/50 text-gaming-green hover:bg-gaming-green/10 ml-4"
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
        <Card className="bg-gradient-card border-gaming-orange/20 shadow-gaming text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gaming-orange mb-4">
              Need Immediate Help?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you're experiencing a gambling crisis or having thoughts of self-harm, 
              please reach out for immediate support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gaming-orange text-white hover:bg-gaming-orange/90"
              >
                <Phone className="w-5 h-5 mr-2" />
                Crisis Helpline: 988
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan/10"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Chat Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}