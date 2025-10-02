import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Star, Trophy, Shield, Zap, ExternalLink, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { GamingAd } from "@/components/GamingAd";
import { Layout } from "@/components/Layout";
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  const featuredSites = [
    {
      name: "CSGOEmpire",
      rating: 4.8,
      bonus: "250%",
      rarity: "covert",
      status: "online",
      users: "12.5K",
      description: "Premium case opening with guaranteed drops"
    },
    {
      name: "DotaSkins",
      rating: 4.6,
      bonus: "200%",
      rarity: "classified",
      status: "online", 
      users: "8.3K",
      description: "Best Dota 2 cosmetic marketplace"
    },
    {
      name: "SkinClub",
      rating: 4.4,
      bonus: "150%",
      rarity: "restricted",
      status: "online",
      users: "15.2K",
      description: "Multi-game skin trading platform"
    },
    {
      name: "RustLoot",
      rating: 4.2,
      bonus: "100%",
      rarity: "milspec",
      status: "online",
      users: "6.8K",
      description: "Rust skin cases and trading"
    },
    {
      name: "TF2Central",
      rating: 4.0,
      bonus: "75%",
      rarity: "industrial",
      status: "online",
      users: "4.2K",
      description: "Team Fortress 2 unusual trading hub"
    },
    {
      name: "CaseKing",
      rating: 4.7,
      bonus: "225%",
      rarity: "covert",
      status: "online",
      users: "11.2K",
      description: "Elite case opening experience"
    },
    {
      name: "SkinVault",
      rating: 4.5,
      bonus: "180%",
      rarity: "classified",
      status: "online",
      users: "9.8K",
      description: "Secure skin storage and trading"
    },
    {
      name: "LootBox Pro",
      rating: 4.3,
      bonus: "140%",
      rarity: "restricted",
      status: "online",
      users: "7.5K",
      description: "Professional loot box platform"
    },
    {
      name: "CaseDrop",
      rating: 4.6,
      bonus: "190%",
      rarity: "classified",
      status: "online",
      users: "10.1K",
      description: "Daily case drops and rewards"
    },
    {
      name: "SkinHub",
      rating: 4.4,
      bonus: "165%",
      rarity: "restricted",
      status: "online",
      users: "8.9K",
      description: "Community-driven skin marketplace"
    },
    {
      name: "CaseRush",
      rating: 4.1,
      bonus: "120%",
      rarity: "milspec",
      status: "online",
      users: "5.7K",
      description: "Fast-paced case opening action"
    },
    {
      name: "SkinElite",
      rating: 4.8,
      bonus: "260%",
      rarity: "covert",
      status: "online",
      users: "13.4K",
      description: "Premium skins and exclusive drops"
    },
    {
      name: "LootMaster",
      rating: 4.5,
      bonus: "175%",
      rarity: "classified",
      status: "online",
      users: "9.2K",
      description: "Master your loot game"
    }
  ];

  // Pagination
  const totalPages = Math.ceil(featuredSites.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentSites = featuredSites.slice(startIndex, endIndex);

  const rarityColors = {
    covert: "rarity-covert",
    classified: "rarity-classified", 
    restricted: "rarity-restricted",
    milspec: "rarity-milspec",
    industrial: "rarity-industrial",
    consumer: "rarity-consumer"
  };

  return (
    <Layout 
      title="CaseHunters - Best CS2 & Dota 2 Case Sites | Verified Gaming Platforms"
      description="Discover the best verified CS2, Dota 2, and gaming case sites. Compare bonuses, read reviews, and find trusted platforms for skin hunting. 150+ verified sites with detailed reviews."
      keywords="CS2 case sites, Dota 2 case sites, gaming case sites, skin gambling, CS2 skins, Dota 2 items, verified gaming platforms, case opening sites"
    >
      {/* Hero Section */}
      <section className="text-center py-16 px-4 animate-fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-gaming bg-clip-text text-transparent drop-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap animate-slide-up">
          <Button size="lg" className="px-8 bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
            {t('hero.browseSites')}
          </Button>
          <Button variant="outline" size="lg" className="px-8 border-gaming-purple text-gaming-purple hover:bg-gaming-purple/10">
            {t('hero.readReviews')}
          </Button>
        </div>
      </section>

      {/* Gaming Ad Section */}
      <section className="mb-16">
        <GamingAd variant="banner" />
      </section>

      {/* Featured Sites Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {t('featuredSites.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('featuredSites.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 px-2 md:px-0">
          {currentSites.map((site, index) => (
            <Card key={index} className="bg-gradient-card border-gaming-cyan/20 shadow-gaming hover:shadow-elevated transition-all duration-300 group overflow-hidden">
              <CardContent className="p-4 md:p-6">
                {/* Site Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-gaming-green animate-pulse"></div>
                    <span className="text-sm text-gaming-green font-medium">{t('featuredSites.online')}</span>
                  </div>
                  <Badge className={`bg-${rarityColors[site.rarity as keyof typeof rarityColors]}`}>
                    {t('featuredSites.premium')}
                  </Badge>
                </div>

                {/* Site Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gaming-cyan transition-colors">
                    {site.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(site.rating) 
                              ? 'text-gaming-orange fill-current' 
                              : 'text-gaming-orange/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">({site.rating})</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{site.description}</p>
                </div>

                {/* Bonus & Features */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-2 md:p-3 bg-gaming-darker/50 rounded-lg">
                    <span className="text-xs md:text-sm">{t('featuredSites.welcomeBonus')}</span>
                    <span className="font-bold text-gaming-green text-sm md:text-base">{site.bonus}</span>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm overflow-x-auto pb-1">
                    <div className="flex items-center space-x-1 whitespace-nowrap">
                      <Shield className="w-3 h-3 md:w-4 md:h-4 text-gaming-cyan flex-shrink-0" />
                      <span>{t('featuredSites.verified')}</span>
                    </div>
                    <div className="flex items-center space-x-1 whitespace-nowrap">
                      <Zap className="w-3 h-3 md:w-4 md:h-4 text-gaming-orange flex-shrink-0" />
                      <span>{t('featuredSites.instant')}</span>
                    </div>
                    <div className="flex items-center space-x-1 whitespace-nowrap">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-gaming-green flex-shrink-0" />
                      <span>{t('featuredSites.trending')}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-cta text-white shadow-neon hover:shadow-elevated text-sm md:text-base">
                    {t('featuredSites.playNow')}
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                  </Button>
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full border-gaming-purple text-gaming-purple hover:bg-gaming-purple/10 text-sm md:text-base"
                  >
                    <Link to={`/review/${site.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      {t('featuredSites.readReview')}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mb-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      onClick={() => setCurrentPage(i + 1)}
                      isActive={currentPage === i + 1}
                      className="cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </section>

      {/* Middle Gaming Ad */}
      <section className="mb-16">
        <GamingAd variant="inline" />
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-gaming-darker/30 rounded-2xl border border-gaming-cyan/10">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          {t('cta.title')}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg" className="px-8 bg-gradient-cta text-white shadow-neon hover:shadow-elevated">
            <Link to="/sites">{t('cta.exploreAllSites')}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8 border-gaming-cyan text-gaming-cyan hover:bg-gaming-cyan/10">
            <Link to="/categories">{t('cta.browseCategories')}</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16">
        <div className="text-center">
          <nav className="flex justify-center space-x-8 mb-8">
            <Link to="/sites" className="text-foreground hover:text-gaming-cyan transition-colors">
              {t('nav.sites')}
            </Link>
            <Link to="/categories" className="text-foreground hover:text-gaming-cyan transition-colors">
              {t('nav.categories')}
            </Link>
            <Link to="/top-sites" className="text-foreground hover:text-gaming-cyan transition-colors">
              {t('nav.tops')}
            </Link>
            <Link to="/about" className="text-foreground hover:text-gaming-cyan transition-colors">
              {t('nav.about')}
            </Link>
          </nav>
          <div className="border-t border-gaming-cyan/20 mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Index;