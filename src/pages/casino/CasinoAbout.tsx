import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { CasinoLayout } from "@/components/casino/CasinoLayout";

const CasinoAbout = () => {
  return (
    <CasinoLayout
      title="About HealthyCasinos | Our Mission"
      description="Learn about HealthyCasinos and our commitment to promoting responsible gambling and honest casino reviews."
      keywords="about healthycasinos, responsible gambling, casino reviews"
    >
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-casino-green mb-8">
          About HealthyCasinos
        </h1>

        <div className="max-w-3xl space-y-6">
          <Card className="bg-gradient-card border-casino-green/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-casino-green mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                HealthyCasinos is dedicated to providing honest, comprehensive reviews
                of online casinos while promoting responsible gambling practices. We
                believe that online gaming should be safe, fair, and transparent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of experts thoroughly evaluates each casino based on licensing,
                game selection, payment methods, customer support, and overall user
                experience. We only recommend casinos that meet our strict standards
                for security and fairness.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-casino-green/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-casino-green mb-4">
                Responsible Gambling
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We take responsible gambling seriously. Gambling should be fun and
                entertaining, not a way to make money or solve financial problems.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Only gamble with money you can afford to lose</li>
                <li>Set time and money limits before playing</li>
                <li>Never chase losses</li>
                <li>Take regular breaks</li>
                <li>Seek help if gambling becomes a problem</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-casino-green/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-casino-green mb-4">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Have questions or suggestions? We'd love to hear from you. Contact
                us at contact@healthycasinos.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </CasinoLayout>
  );
};

export default CasinoAbout;
