import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface ArticleData {
  id: string;
  title: string;
  description: string;
  content: string;
  publishDate: string;
  readTime: string;
  category: string;
  author: string;
}

const articlesData: ArticleData[] = [
  {
    id: "cs2-case-opening-guide",
    title: "Complete Guide to CS2 Case Opening",
    description: "Learn everything you need to know about CS2 case opening, from the basics to advanced strategies. Discover which cases offer the best value and how to maximize your chances of getting rare skins.",
    content: `# Complete Guide to CS2 Case Opening

Counter-Strike 2 case opening is one of the most exciting aspects of the game, offering players the chance to obtain rare and valuable skins. This comprehensive guide will walk you through everything you need to know about case opening, from understanding the basics to developing advanced strategies.

## Understanding Case Opening Mechanics

Case opening in CS2 follows a predetermined probability system. Each case contains a specific pool of items with different rarity levels:

- **Consumer Grade (White)**: 79.92%
- **Industrial Grade (Light Blue)**: 15.98%
- **Mil-Spec (Darker Blue)**: 3.2%
- **Restricted (Purple)**: 0.64%
- **Classified (Pink)**: 0.32%
- **Covert (Red)**: 0.64%
- **Special Items (Gold)**: Extremely rare

## Choosing the Right Cases

Not all cases are created equal. Here are some factors to consider:

### Current Market Value
Always check the current market prices for case contents before opening. Some older cases might have higher-value items due to their rarity.

### Float Values
The condition of your skin matters significantly for its value. Factory New and Minimal Wear conditions typically command higher prices.

## Advanced Strategies

### Timing Your Opens
While case opening is ultimately based on probability, some players prefer opening cases during off-peak hours when fewer people are online.

### Budget Management
Set a strict budget for case opening and stick to it. Never spend more than you can afford to lose, as case opening should be viewed as entertainment rather than investment.

### Market Analysis
Study market trends and seasonal patterns. Prices often fluctuate around major tournaments and updates.

## Safety and Security

When engaging in case opening:

1. Only use official Steam marketplace or trusted third-party sites
2. Be wary of gambling sites that promise guaranteed returns
3. Never share your Steam login credentials
4. Use Steam Guard authentication
5. Be cautious of too-good-to-be-true offers

## Conclusion

CS2 case opening can be an exciting way to potentially obtain valuable skins, but it should always be approached responsibly. Remember that the house always has an edge, and you should never gamble more than you can afford to lose.

Focus on enjoying the excitement of the opening process rather than expecting guaranteed profits, and always prioritize your financial wellbeing over the thrill of the gamble.`,
    publishDate: "2024-01-15",
    readTime: "8 min read",
    category: "Guide",
    author: "Alex Gaming"
  },
  {
    id: "dota2-betting-strategies",
    title: "Top 5 Dota 2 Betting Strategies for 2024",
    description: "Explore proven betting strategies for Dota 2 matches. From analyzing team performance to understanding meta changes, this comprehensive guide will help you make more informed betting decisions.",
    content: `# Top 5 Dota 2 Betting Strategies for 2024

Dota 2 betting has evolved significantly over the years, with new strategies and analytical approaches emerging regularly. Here are the top five strategies that successful bettors use in 2024.

## 1. Meta Analysis and Patch Understanding

The current meta heavily influences match outcomes. Understanding which heroes are overpowered or underpowered in the current patch can give you a significant edge.

### Key Points:
- Track professional pick/ban rates
- Monitor win rates across different skill brackets
- Understand how patches affect team compositions

## 2. Team Form and Recent Performance

Recent performance is often more indicative of future results than historical achievements.

### What to Analyze:
- Last 10 matches across all tournaments
- Performance against similar-tier opponents
- Individual player form and consistency

## 3. Head-to-Head Records

Some teams consistently perform better against specific opponents due to playstyle matchups.

### Factors to Consider:
- Historical match results
- Playstyle compatibility
- Psychological factors and rivalry

## 4. Map and Draft Analysis

The drafting phase often determines 50% of the match outcome before it even begins.

### Draft Analysis Includes:
- Early pick priorities
- Ban strategies
- Team composition synergy
- Coaching staff influence

## 5. Live Betting and In-Game Momentum

Live betting allows you to capitalize on momentum shifts and unexpected developments.

### Live Betting Tips:
- Watch for early game advantages
- Monitor item timings and power spikes
- Understand comeback mechanics

## Risk Management

Successful betting isn't just about picking winners - it's about managing your bankroll effectively:

1. Never bet more than 2-5% of your bankroll on a single match
2. Keep detailed records of your bets
3. Don't chase losses with larger bets
4. Take breaks after losing streaks

## Conclusion

Successful Dota 2 betting requires dedication, research, and disciplined bankroll management. These strategies provide a framework for making more informed decisions, but remember that no strategy guarantees profits.

Always bet responsibly and within your means.`,
    publishDate: "2024-01-12",
    readTime: "6 min read",
    category: "Strategy",
    author: "Mike Esports"
  },
  {
    id: "skin-trading-tips",
    title: "Essential Skin Trading Tips for Beginners",
    description: "New to skin trading? This article covers the fundamentals of trading CS2 and Dota 2 skins safely and profitably. Learn about market trends, pricing, and avoiding common scams.",
    content: `# Essential Skin Trading Tips for Beginners

Skin trading can be a rewarding hobby and even a profitable venture if approached correctly. This guide covers the essential knowledge every beginner trader needs to know.

## Understanding Skin Values

Before making any trades, you need to understand how skin values are determined:

### Factors Affecting Value:
- **Rarity**: The rarer the skin, the higher its value
- **Condition (Float)**: Factory New > Minimal Wear > Field-Tested > Well-Worn > Battle-Scarred
- **Popularity**: Popular skins among players command higher prices
- **Market trends**: Seasonal fluctuations and game updates affect prices

## Trading Platforms

### Official Steam Market
- Safest option with Valve protection
- 15% transaction fee (13% to Valve, 2% to game publisher)
- Regional price variations

### Third-Party Trading Sites
- Lower fees (typically 2-10%)
- More trading options and features
- Requires careful site selection for safety

## Common Trading Strategies

### 1. Buy Low, Sell High
The most basic strategy involves buying skins when their prices are low and selling when they increase.

### 2. Seasonal Trading
Many skins experience price fluctuations around major tournaments and updates.

### 3. Cross-Game Trading
Trading skins between CS2 and Dota 2 can sometimes yield better value ratios.

## Safety First

### Red Flags to Avoid:
- Traders asking you to go first without reputation
- Deals that seem too good to be true
- Pressure to trade quickly
- Requests to use unknown trading platforms

### Safety Measures:
- Use reputable middleman services for high-value trades
- Check trader reputation and reviews
- Verify item authenticity and float values
- Keep screenshots of all communications

## Building Your Trading Portfolio

Start small and gradually build your portfolio:

1. Begin with lower-value skins to learn the market
2. Diversify across different games and skin types
3. Keep some liquid assets for quick trades
4. Track your trades and profits/losses

## Market Analysis Tools

### Essential Tools:
- Steam Analyst for historical price data
- CSGOFloat for precise float values
- Reddit trading communities for market insights
- Price tracking websites and browser extensions

## Tax Considerations

Depending on your location and trading volume, you may need to consider tax implications:

- Keep detailed records of all transactions
- Understand your local tax laws regarding virtual item trading
- Consider consulting a tax professional for significant trading activities

## Conclusion

Successful skin trading requires patience, research, and risk management. Start small, learn continuously, and always prioritize safety over quick profits.

Remember that trading should be enjoyable - if it becomes stressful or financially burdensome, it may be time to take a step back and reassess your approach.`,
    publishDate: "2024-01-10",
    readTime: "5 min read",
    category: "Trading",
    author: "Sarah Trader"
  },
  {
    id: "case-site-security",
    title: "How to Identify Secure Case Opening Sites",
    description: "Security should be your top priority when choosing a case opening site. Learn the key indicators of legitimate platforms and red flags to avoid when selecting where to play.",
    content: `# How to Identify Secure Case Opening Sites

With the popularity of case opening sites, it's crucial to know how to identify legitimate, secure platforms from potential scams. This guide will help you make informed decisions about where to spend your money.

## Essential Security Features

### 1. Proper Licensing and Regulation
Legitimate sites should display:
- Valid gambling licenses from recognized authorities
- License numbers and regulatory body information
- Clear terms of service and privacy policies

### 2. SSL Encryption
Look for:
- HTTPS in the URL (not just HTTP)
- Valid SSL certificates
- Secure payment processing

### 3. Transparent Algorithms
Reputable sites provide:
- Provably fair systems
- Public verification methods
- Clear explanation of odds and probabilities

## Red Flags to Avoid

### Immediate Warning Signs:
- No licensing information available
- Pressure to deposit immediately
- Unrealistic promotional offers
- Poor website design and functionality
- No customer support contact information

### Community Red Flags:
- Negative reviews from multiple sources
- Reports of withdrawal issues
- Lack of social media presence
- No user testimonials or reviews

## Verification Steps

### 1. Research the Site
- Check online reviews and forums
- Look up the company information
- Verify licensing claims with regulatory bodies
- Search for any legal issues or complaints

### 2. Test Small Amounts First
- Start with minimal deposits
- Test the withdrawal process
- Evaluate customer support responsiveness
- Check transaction processing times

### 3. Community Feedback
- Join relevant Discord servers and forums
- Ask experienced users about their experiences
- Check Reddit and other community platforms
- Look for consistent positive feedback

## Payment Security

### Safe Payment Methods:
- Major credit cards with fraud protection
- PayPal and other established payment processors
- Cryptocurrency (if you understand the risks)
- Bank transfers (for established sites only)

### Avoid:
- Wire transfers to individuals
- Gift card payments
- Unusual payment methods
- Sites that only accept cryptocurrency

## Customer Support Quality

Test customer support before making large deposits:
- Response time to inquiries
- Quality and helpfulness of responses
- Multiple contact methods available
- Professional communication

## Legal Considerations

### Important Factors:
- Your local gambling laws and regulations
- Age requirements and verification
- Tax implications of winnings
- Terms regarding account closure and withdrawals

## Best Practices

### For Safe Site Usage:
1. Never gamble more than you can afford to lose
2. Set strict deposit and time limits
3. Use strong, unique passwords
4. Enable two-factor authentication when available
5. Keep records of all transactions
6. Regularly review your account activity

## Conclusion

Choosing a secure case opening site requires thorough research and due diligence. Take the time to verify a site's legitimacy before depositing any money, and always prioritize your financial security over convenience or attractive bonuses.

Remember that no gambling activity is without risk, and even on legitimate sites, you should never gamble more than you can afford to lose.`,
    publishDate: "2024-01-08",
    readTime: "7 min read",
    category: "Security",
    author: "David Security"
  }
];

export default function Article() {
  const { t } = useTranslation();
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<ArticleData | null>(null);

  useEffect(() => {
    const foundArticle = articlesData.find(a => a.id === articleId);
    setArticle(foundArticle || null);
  }, [articleId]);

  if (!article) {
    return (
      <Layout
        title="Article Not Found | CaseHunters"
        description="The article you're looking for could not be found."
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gaming-cyan">Article Not Found</h1>
          <p className="text-muted-foreground">The article you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/articles')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${article.title} | CaseHunters`}
      description={article.description}
      keywords={`${article.category.toLowerCase()}, gaming guide, ${article.title.toLowerCase()}`}
    >
      <article className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <Button 
          onClick={() => navigate('/articles')} 
          variant="ghost" 
          className="mb-6 hover:bg-gaming-cyan/10 hover:text-gaming-cyan"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('articles.backToArticles')}
        </Button>

        {/* Article Header */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Badge 
              variant="secondary" 
              className="bg-gaming-cyan/20 text-gaming-cyan border-gaming-cyan/30"
            >
              {article.category}
            </Badge>
            
            <h1 className="text-4xl font-bold text-gaming-cyan leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.description}
            </p>
          </div>

          {/* Article Meta */}
          <Card className="bg-gaming-dark/30 border-gaming-cyan/20">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span className="font-medium text-foreground">{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Article Content */}
        <Card className="bg-gaming-dark/20 border-gaming-cyan/20">
          <CardContent className="p-8">
            <div 
              className="prose prose-sm prose-invert max-w-none text-muted-foreground [&>h2]:text-lg [&>h2]:font-semibold [&>h2]:text-gaming-cyan [&>h2]:mt-6 [&>h2]:mb-3 [&>h3]:text-base [&>h3]:font-medium [&>h3]:text-gaming-cyan [&>h3]:mt-4 [&>h3]:mb-2 [&>strong]:text-gaming-cyan [&>ul]:text-muted-foreground [&>ol]:text-muted-foreground [&>p]:text-muted-foreground [&>p]:text-sm [&>p]:leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: article.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, '<h2>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
              }}
            />
          </CardContent>
        </Card>

        {/* Back to Articles */}
        <div className="text-center pt-8">
          <Button 
            onClick={() => navigate('/articles')} 
            variant="outline"
            className="hover:bg-gaming-cyan/10 hover:border-gaming-cyan hover:text-gaming-cyan"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('articles.backToArticles')}
          </Button>
        </div>
      </article>
    </Layout>
  );
}