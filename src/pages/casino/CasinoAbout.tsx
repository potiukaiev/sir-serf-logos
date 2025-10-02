import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { CasinoLayout } from "@/components/casino/CasinoLayout";
import { Shield, Heart, Users, Award } from "lucide-react";

const CasinoAbout = () => {
  return (
    <CasinoLayout
      title="About HealthyCasinos | Our Mission & Values"
      description="Learn about HealthyCasinos and our commitment to promoting responsible gambling and honest casino reviews."
      keywords="about healthycasinos, responsible gambling, casino reviews, our mission"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About HealthyCasinos",
            "description": "Our mission to promote responsible gambling and provide honest casino reviews"
          })}
        </script>
      </Helmet>

      <div className="space-y-8 max-w-4xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold text-casino-green mb-4">
            About HealthyCasinos
          </h1>
          <p className="text-muted-foreground text-lg">
            Your trusted partner in safe and responsible online gaming
          </p>
        </div>

        {/* Mission */}
        <Card className="bg-gradient-card border-casino-green/20">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-casino-green/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-casino-green" />
              </div>
              <h2 className="text-2xl font-bold text-casino-green">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              HealthyCasinos is dedicated to providing honest, comprehensive reviews of online casinos while promoting responsible gambling practices. We believe that online gaming should be safe, fair, and transparent.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experts thoroughly evaluates each casino based on licensing, game selection, payment methods, customer support, and overall user experience. We only recommend casinos that meet our strict standards for security and fairness.
            </p>
          </CardContent>
        </Card>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-card border-casino-green/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-8 h-8 text-casino-gold" />
                <h3 className="text-xl font-bold">Player First</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Your safety and satisfaction are our top priorities. We advocate for fair treatment and transparent practices.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-casino-green/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-8 h-8 text-casino-blue" />
                <h3 className="text-xl font-bold">Honest Reviews</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                We provide unbiased, detailed reviews based on thorough testing and real player feedback.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Responsible Gambling */}
        <Card className="bg-gradient-card border-casino-green/20">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-casino-gold/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-casino-gold" />
              </div>
              <h2 className="text-2xl font-bold text-casino-green">Responsible Gambling</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We take responsible gambling seriously. Gambling should be fun and entertaining, not a way to make money or solve financial problems.
            </p>
            <div className="bg-casino-darker/50 rounded-lg p-6 space-y-3">
              <h4 className="font-semibold text-casino-green mb-3">Key Principles:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-casino-green mt-1">•</span>
                  <span>Only gamble with money you can afford to lose</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-casino-green mt-1">•</span>
                  <span>Set time and money limits before playing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-casino-green mt-1">•</span>
                  <span>Never chase losses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-casino-green mt-1">•</span>
                  <span>Take regular breaks from gambling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-casino-green mt-1">•</span>
                  <span>Seek help if gambling becomes a problem</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Help Resources */}
        <Card className="bg-gradient-card border-casino-green/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-casino-green mb-4">
              Need Help?
            </h2>
            <p className="text-muted-foreground mb-6">
              If you or someone you know has a gambling problem, help is available 24/7:
            </p>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-casino-darker/50 rounded-lg">
                <div className="font-semibold mb-1">National Problem Gambling Helpline</div>
                <div className="text-casino-gold">1-800-522-4700</div>
              </div>
              <div className="p-4 bg-casino-darker/50 rounded-lg">
                <div className="font-semibold mb-1">GamCare (UK)</div>
                <div className="text-casino-gold">www.gamcare.org.uk</div>
              </div>
              <div className="p-4 bg-casino-darker/50 rounded-lg">
                <div className="font-semibold mb-1">BeGambleAware</div>
                <div className="text-casino-gold">www.begambleaware.org</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="bg-gradient-card border-casino-green/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-casino-green mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-6">
              Have questions or suggestions? We'd love to hear from you.
            </p>
            <a href="mailto:contact@healthycasinos.com" className="text-casino-gold hover:underline text-lg">
              contact@healthycasinos.com
            </a>
          </CardContent>
        </Card>
      </div>
    </CasinoLayout>
  );
};

export default CasinoAbout;
