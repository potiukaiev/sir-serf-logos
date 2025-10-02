import { CasinoLayout } from "@/components/casino/CasinoLayout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Share2, Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GamingAd } from "@/components/GamingAd";
import { useEffect, useState } from "react";

interface ArticleData {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

const articlesData: ArticleData[] = [
  {
    id: "1",
    title: "Understanding RTP: What Players Need to Know",
    description: "Learn about Return to Player percentages and how they affect your gaming experience at online casinos.",
    category: "Education",
    author: "Sarah Johnson",
    date: "2025-01-15",
    readTime: "5 min read",
    content: `# Understanding RTP: What Players Need to Know

Return to Player (RTP) is one of the most important concepts for casino players to understand. This comprehensive guide will help you make informed decisions about which games to play.

## What is RTP?

RTP represents the percentage of all wagered money that a slot machine or casino game will pay back to players over time. For example, if a slot game has an RTP of 96%, it means that for every $100 wagered, the game will theoretically return $96 to players over an extended period.

## How RTP Works

### Long-Term Statistics
RTP is calculated over millions of spins, so your individual session results may vary significantly. The house edge (100% - RTP) represents the casino's mathematical advantage.

### Key Points About RTP
- RTP is based on long-term statistical averages
- Individual sessions can vary widely from the RTP
- Higher RTP generally means better long-term value
- RTP doesn't guarantee specific short-term results

## Finding High RTP Games

Most reputable online casinos display RTP information for their games. Here's what to look for:

### Best RTP Games
1. **Video Poker**: Often 98-99% RTP with optimal strategy
2. **Blackjack**: Around 99% with basic strategy
3. **Baccarat**: Typically 98.94% (banker bet)
4. **High RTP Slots**: Look for games above 96%

### Where to Find RTP Information
- Game information screens
- Casino help sections
- Game provider websites
- Independent review sites

## RTP vs Volatility

While RTP indicates how much a game pays back overall, volatility (or variance) describes how often and how much a game pays out:

### High Volatility
- Less frequent wins
- Larger potential payouts
- Higher risk, higher reward
- Requires larger bankroll

### Low Volatility
- More frequent wins
- Smaller payouts
- Lower risk
- Better for smaller bankrolls

## Making Informed Decisions

Understanding RTP helps you:
- Choose games that offer better value
- Manage your bankroll more effectively
- Set realistic expectations
- Play more responsibly

## Conclusion

While RTP is an important factor in game selection, remember that all casino games have a house edge. Always play within your means and view gambling as entertainment, not a way to make money.`
  },
  {
    id: "2",
    title: "Top 5 Progressive Jackpot Slots in 2025",
    description: "Discover the biggest progressive jackpot slots with life-changing prizes and exciting gameplay.",
    category: "Reviews",
    author: "Mike Chen",
    date: "2025-01-12",
    readTime: "7 min read",
    content: `# Top 5 Progressive Jackpot Slots in 2025

Progressive jackpot slots offer the dream of life-changing wins. Here are the top games currently offering the biggest prizes and best gaming experiences.

## 1. Mega Moolah

### The King of Progressives
Mega Moolah holds multiple records for the largest online slot jackpots ever won. With four progressive jackpots, including the massive Mega jackpot that regularly exceeds €10 million.

### Key Features
- Four-tiered progressive system
- African safari theme
- Free spins with 3x multiplier
- Random jackpot bonus game

## 2. Mega Fortune

### Luxury Themed Winner
This NetEnt classic has created more millionaires than any other online slot. The luxury yacht theme and bonus wheel feature make it a player favorite.

### Winning Features
- Three progressive jackpots
- Bonus wheel feature
- Free spins mode
- Regular mega wins

## 3. Divine Fortune

### Mythology Meets Big Wins
A more recent addition to the progressive scene, Divine Fortune combines engaging gameplay with substantial jackpot potential.

### Game Highlights
- Three progressive jackpots
- Wild on Wild feature
- Falling Wilds Re-Spins
- Jackpot bonus game

## 4. Hall of Gods

### Norse Mythology Adventure
This NetEnt masterpiece offers excellent graphics and engaging bonus features alongside three progressive jackpots.

### Special Features
- Expanding wilds
- Free spins bonus
- Thor's hammer bonus game
- Three-tier progressive system

## 5. Arabian Nights

### Classic Progressive Excellence
One of the oldest and most beloved progressive slots, Arabian Nights continues to create winners with its simple yet effective gameplay.

### Game Features
- Single massive jackpot
- Simple 3-row gameplay
- Free spins feature
- Regular big wins

## Tips for Playing Progressive Slots

### Bankroll Management
- Progressive slots often require maximum bets
- Set strict loss limits
- Never chase losses
- Play for entertainment, not income

### Choosing the Right Game
- Check current jackpot sizes
- Consider the base game RTP
- Look at hit frequency
- Read player reviews

## Conclusion

Progressive jackpot slots offer exciting gameplay and the chance at life-changing wins. However, they typically have lower base RTPs, so play responsibly and within your means.`
  }
];

export default function CasinoArticle() {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<ArticleData | null>(null);

  useEffect(() => {
    const foundArticle = articlesData.find(a => a.id === articleId);
    setArticle(foundArticle || null);
  }, [articleId]);

  if (!article) {
    return (
      <CasinoLayout
        title="Article Not Found | HealthyCasinos"
        description="The article you're looking for could not be found."
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-casino-green">Article Not Found</h1>
          <p className="text-muted-foreground">The article you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/healthy-casinos/articles')} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Button>
        </div>
      </CasinoLayout>
    );
  }

  const relatedArticles = articlesData.filter(a => a.id !== articleId).slice(0, 3);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Education": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Reviews": "bg-casino-green/20 text-casino-green border-casino-green/30",
      "Guide": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Technology": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "Trends": "bg-pink-500/20 text-pink-400 border-pink-500/30",
      "Strategy": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    };
    return colors[category] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <CasinoLayout
      title={`${article.title} | HealthyCasinos`}
      description={article.description}
      keywords={`${article.category.toLowerCase()}, casino guide, ${article.title.toLowerCase()}`}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.description,
            "datePublished": article.date,
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "HealthyCasinos",
              "logo": {
                "@type": "ImageObject",
                "url": "https://healthycasinos.com/logo.png"
              }
            },
            "articleSection": article.category,
            "wordCount": article.content.split(' ').length
          })}
        </script>
      </Helmet>

      <article className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <Button 
          onClick={() => navigate('/healthy-casinos/articles')} 
          variant="ghost" 
          className="mb-6 hover:bg-casino-green/10 hover:text-casino-green"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Button>

        {/* Article Header */}
        <div className="space-y-6">
          <div className="space-y-4">
            <Badge 
              variant="secondary" 
              className={getCategoryColor(article.category)}
            >
              {article.category}
            </Badge>
            
            <h1 className="text-4xl font-bold text-casino-green leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {article.description}
            </p>
          </div>

          {/* Article Meta */}
          <Card className="bg-casino-dark/30 border-casino-green/20">
            <CardContent className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-medium text-foreground">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-casino-green/40 text-casino-green hover:bg-casino-green/10 hover:border-casino-green"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Article Content */}
        <Card className="bg-casino-dark/20 border-casino-green/20">
          <CardContent className="p-8">
            <div 
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-casino-green 
                prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-8
                prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8
                prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                prose-ul:text-muted-foreground prose-ul:my-4
                prose-li:mb-2
                prose-strong:text-foreground prose-strong:font-semibold"
              style={{ whiteSpace: 'pre-line' }}
            >
              {article.content}
            </div>
          </CardContent>
        </Card>

        {/* Ad Section */}
        <GamingAd 
          variant="inline"
          className="my-8"
        />

        {/* Related Articles */}
        <div className="mt-16 pt-8 border-t border-casino-green/20">
          <h2 className="text-3xl font-bold mb-8 text-casino-green">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedArticles.map((related) => (
              <Link 
                key={related.id} 
                to={`/healthy-casinos/article/${related.id}`}
                className="group"
              >
                <Card className="bg-casino-dark/30 border-casino-green/20 hover:border-casino-green/40 transition-all h-full hover:shadow-[0_0_30px_hsl(142_76%_36%/0.3)]">
                  <CardContent className="p-6 space-y-4">
                    <Badge className={getCategoryColor(related.category)}>
                      {related.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-casino-green transition-colors">
                      {related.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {related.readTime}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </CasinoLayout>
  );
}
