import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function FAQ() {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: t('faq.whatAreCS2Sites.question'),
      answer: t('faq.whatAreCS2Sites.answer')
    },
    {
      question: t('faq.areSitesSafe.question'),
      answer: t('faq.areSitesSafe.answer')
    },
    {
      question: t('faq.howBonusesWork.question'),
      answer: t('faq.howBonusesWork.answer')
    },
    {
      question: t('faq.canWithdraw.question'),
      answer: t('faq.canWithdraw.answer')
    },
    {
      question: t('faq.paymentMethods.question'),
      answer: t('faq.paymentMethods.answer')
    },
    {
      question: t('faq.howRateSites.question'),
      answer: t('faq.howRateSites.answer')
    },
    {
      question: t('faq.ageRestrictions.question'),
      answer: t('faq.ageRestrictions.answer')
    },
    {
      question: t('faq.provablyFair.question'),
      answer: t('faq.provablyFair.answer')
    },
    {
      question: t('faq.mobilePlay.question'),
      answer: t('faq.mobilePlay.answer')
    },
    {
      question: t('faq.siteIssues.question'),
      answer: t('faq.siteIssues.answer')
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
    <Layout
      title={t('faq.pageTitle')}
      description={t('faq.pageDescription')}
      keywords={t('faq.pageKeywords')}
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
            <HelpCircle className="w-8 h-8 text-gaming-cyan" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-gaming bg-clip-text text-transparent">
              {t('faq.title')}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('faq.subtitle')}
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
              {t('faq.stillHaveQuestions')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('faq.contactDescription')}
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-gradient-cta text-white rounded-lg shadow-neon hover:shadow-elevated transition-all">
                {t('faq.contactSupport')}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}