import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What are CS2 case sites?",
    answer: "CS2 case sites are online platforms where you can open virtual cases to win CS2 (Counter-Strike 2) skins and items. These sites simulate the case opening experience from the game with various cosmetic rewards."
  },
  {
    question: "Are these sites safe and legitimate?",
    answer: "We only feature verified and licensed platforms that meet strict security standards. All listed sites undergo thorough review processes including security audits, fair play verification, and user feedback analysis."
  },
  {
    question: "How do bonuses work?",
    answer: "Most sites offer welcome bonuses ranging from 50% to 500% of your first deposit, plus free spins or cases. Bonuses typically have wagering requirements and specific terms and conditions that vary by platform."
  },
  {
    question: "Can I withdraw my winnings?",
    answer: "Yes, all featured sites support withdrawals to Steam accounts or third-party marketplaces. Withdrawal methods, processing times, and minimum amounts vary by platform. Check each site's specific withdrawal policies."
  },
  {
    question: "What payment methods are accepted?",
    answer: "Most sites accept cryptocurrency (Bitcoin, Ethereum), Steam items, PayPal, credit cards, and various e-wallets. Payment options vary by platform and region."
  },
  {
    question: "How do you rate and rank sites?",
    answer: "Our rankings are based on multiple factors including user ratings, security measures, bonus value, withdrawal speed, customer support quality, game variety, and overall user experience."
  },
  {
    question: "Are there age restrictions?",
    answer: "Yes, you must be 18 years or older (or the legal gambling age in your jurisdiction) to use these platforms. All reputable sites require age verification during registration."
  },
  {
    question: "What is provably fair gaming?",
    answer: "Provably fair is a cryptographic system that allows players to verify that game outcomes are random and not manipulated. It provides transparency and ensures fair play on gaming platforms."
  },
  {
    question: "Can I play on mobile devices?",
    answer: "Most modern case sites are optimized for mobile browsers or offer dedicated mobile apps for iOS and Android devices. Mobile gameplay offers the same features as desktop versions."
  },
  {
    question: "What should I do if I have issues with a site?",
    answer: "First, contact the site's customer support directly. If issues persist, you can report problems to us through our contact form, and we'll investigate and update our reviews accordingly."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Layout
      title="FAQ - Frequently Asked Questions | CaseHunters"
      description="Get answers to common questions about CS2 and Dota 2 case sites, bonuses, withdrawals, safety, and more. Everything you need to know about skin gaming platforms."
      keywords="CS2 case sites FAQ, gaming site questions, skin gambling help, case opening guide, withdrawal FAQ, bonus questions"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-gaming-cyan" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to the most common questions about CS2 and Dota 2 case sites, 
            bonuses, withdrawals, and gaming platform safety.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-card border-border shadow-elevated">
              <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-gaming-darker/20 transition-colors">
                    <CardTitle className="flex items-center justify-between text-left">
                      <span className="text-lg font-semibold">{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gaming-cyan transition-transform ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`} 
                      />
                    </CardTitle>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="bg-gradient-card border-gaming-cyan/20 shadow-gaming text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gaming-cyan mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you can't find the answer you're looking for, feel free to reach out to our team. 
              We're here to help you navigate the world of gaming case sites safely.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-cta text-white rounded-lg shadow-neon hover:shadow-elevated transition-all">
                Contact Support
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}