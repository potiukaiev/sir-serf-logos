import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CasinoLayout } from "@/components/casino/CasinoLayout";
import { Calendar, Clock, User, Share2, ChevronLeft } from "lucide-react";
import { GamingAd } from "@/components/GamingAd";

const CasinoArticle = () => {
  const { articleId } = useParams();

  const article = {
    title: "Understanding RTP: What Players Need to Know",
    category: "Education",
    author: "Sarah Johnson",
    date: "2025-01-15",
    readTime: "5 min read",
    image: "🎰",
    content: `
      <h2>What is RTP?</h2>
      <p>Return to Player (RTP) is one of the most important concepts for casino players to understand. RTP represents the percentage of all wagered money that a slot machine or casino game will pay back to players over time.</p>
      
      <h2>How RTP Works</h2>
      <p>If a slot game has an RTP of 96%, it means that for every $100 wagered, the game will theoretically return $96 to players over an extended period. The remaining 4% represents the house edge.</p>
      
      <h3>Key Points About RTP:</h3>
      <ul>
        <li>RTP is calculated over millions of spins</li>
        <li>Individual sessions can vary widely</li>
        <li>Higher RTP generally means better long-term value</li>
        <li>RTP doesn't guarantee specific short-term results</li>
      </ul>
      
      <h2>Finding High RTP Games</h2>
      <p>Most reputable online casinos display RTP information for their games. Look for games with RTP above 96% for better long-term value. Some of the highest RTP games include certain video poker variants and specific slot machines.</p>
      
      <h2>RTP vs Volatility</h2>
      <p>While RTP indicates how much a game pays back overall, volatility describes how often and how much a game pays out. High volatility games pay less frequently but with bigger wins, while low volatility games pay more frequently with smaller wins.</p>
    `
  };

  return (
    <CasinoLayout
      title={`${article.title} | HealthyCasinos`}
      description="Learn about Return to Player percentages and how they affect your gaming experience at online casinos."
      keywords="RTP, return to player, casino games, slot machines, gambling"
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "datePublished": article.date,
            "description": "Learn about Return to Player percentages"
          })}
        </script>
      </Helmet>

      <div className="space-y-8">
        {/* Back Button */}
        <Link
          to="/healthy-casinos/articles"
          className="inline-flex items-center text-casino-green hover:underline"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Articles
        </Link>

        {/* Article Header */}
        <div>
          <Badge className="bg-casino-blue text-white mb-4">
            {article.category}
          </Badge>
          <h1 className="text-4xl font-bold text-casino-green mb-4">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
            <Button variant="outline" size="sm" className="ml-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Article Content */}
        <Card className="bg-gradient-card border-casino-green/20">
          <CardContent className="p-8">
            <div className="text-6xl mb-6 text-center">{article.image}</div>
            
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </CardContent>
        </Card>

        {/* Ad */}
        <GamingAd variant="banner" />

        {/* Related Articles */}
        <div>
          <h2 className="text-2xl font-bold text-casino-green mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: 2, title: "Top 5 Progressive Jackpot Slots", category: "Reviews" },
              { id: 3, title: "Setting Healthy Gambling Limits", category: "Guide" },
              { id: 4, title: "Crypto in Online Casinos", category: "Technology" }
            ].map((related) => (
              <Card
                key={related.id}
                className="bg-gradient-card border-casino-green/20 hover:shadow-casino transition-all"
              >
                <CardContent className="p-4">
                  <Badge className="bg-casino-green text-white mb-2 text-xs">
                    {related.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground hover:text-casino-green transition-colors">
                    <Link to={`/healthy-casinos/article/${related.id}`}>
                      {related.title}
                    </Link>
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </CasinoLayout>
  );
};

export default CasinoArticle;
