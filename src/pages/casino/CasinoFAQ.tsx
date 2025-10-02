import { CasinoLayout } from "@/components/casino/CasinoLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function CasinoFAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "What are online casinos?",
      answer: "Online casinos are digital platforms that offer casino games like slots, table games, and live dealer games. They allow you to gamble using real money from the comfort of your home or mobile device. Licensed casinos are regulated by gaming authorities to ensure fair play and player protection."
    },
    {
      question: "Are online casinos safe?",
      answer: "Licensed and regulated online casinos are safe to use. They employ SSL encryption, fair gaming certifications, and are regularly audited by independent testing agencies. Always check for valid licenses from authorities like Malta Gaming Authority, UK Gambling Commission, or Curacao eGaming before playing."
    },
    {
      question: "How do casino bonuses work?",
      answer: "Casino bonuses are promotional offers that give you extra funds or free spins. Welcome bonuses typically match your deposit by a percentage (e.g., 100% up to $500). Most bonuses come with wagering requirements, meaning you must bet the bonus amount a certain number of times before withdrawing winnings."
    },
    {
      question: "Can I withdraw my winnings?",
      answer: "Yes, you can withdraw winnings from licensed casinos. However, you'll need to verify your identity first and meet any wagering requirements attached to bonuses. Withdrawal times vary by payment method - e-wallets are fastest (hours), while bank transfers may take 3-5 days."
    },
    {
      question: "What payment methods are accepted?",
      answer: "Most online casinos accept credit/debit cards (Visa, Mastercard), e-wallets (PayPal, Skrill, Neteller), bank transfers, and cryptocurrencies (Bitcoin, Ethereum). Payment options vary by casino and your location. E-wallets typically offer the fastest deposits and withdrawals."
    },
    {
      question: "How do we rate casinos?",
      answer: "We evaluate casinos based on multiple criteria: licensing and security, game variety and quality, bonus terms, payment options and speed, customer support, mobile compatibility, and user reviews. Each factor is weighted and combined to create an overall rating score."
    },
    {
      question: "Are there age restrictions?",
      answer: "Yes, you must be at least 18 years old to gamble at online casinos in most jurisdictions. Some regions require you to be 21+. Licensed casinos verify age during account registration and may request ID documents before processing withdrawals."
    },
    {
      question: "What is RTP in casino games?",
      answer: "RTP (Return to Player) is the percentage of all wagered money that a game pays back to players over time. For example, a slot with 96% RTP returns $96 for every $100 wagered on average. Higher RTP generally means better long-term value, though individual sessions can vary widely."
    },
    {
      question: "Can I play on mobile?",
      answer: "Yes, most modern online casinos are mobile-friendly and offer either responsive websites or dedicated mobile apps. You can play on smartphones and tablets using iOS or Android. Mobile casinos provide the same games, bonuses, and features as desktop versions."
    },
    {
      question: "What if I have issues with a casino?",
      answer: "First, contact the casino's customer support through live chat, email, or phone. If the issue isn't resolved, you can file a complaint with the licensing authority that regulates the casino. Most reputable casinos are motivated to resolve disputes fairly to maintain their reputation and license."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <CasinoLayout
      title="Frequently Asked Questions | HealthyCasinos"
      description="Find answers to common questions about online casinos, bonuses, payments, safety, and responsible gambling."
      keywords="casino FAQ, online gambling questions, casino bonuses explained, casino safety, how to play online"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-casino-green" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-casino-green to-casino-gold bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about online casinos, bonuses, and safe gambling
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-card border-border shadow-elevated">
              <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-casino-darker/20 transition-colors">
                    <CardTitle className="flex items-center justify-between text-left">
                      <span className="text-lg font-semibold">{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-casino-green transition-transform ${
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
        <Card className="bg-gradient-card border-casino-green/20 shadow-casino text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-casino-green mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-cta text-white rounded-lg shadow-neon hover:shadow-elevated transition-all">
                Contact Support
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </CasinoLayout>
  );
}
