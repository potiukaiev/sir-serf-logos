import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { VariantWrapper } from "@/components/VariantWrapper";
import { useAnalytics } from "@/hooks/useAnalytics";
import Index from "./pages/Index";
import Sites from "./pages/Sites";
import Ratings from "./pages/Ratings";
import Categories from "./pages/Categories";
import About from "./pages/About";
import SiteReview from "./pages/SiteReview";
import TopSites from "./pages/TopSites";
import FAQ from "./pages/FAQ";
import ResponsibleGambling from "./pages/ResponsibleGambling";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import RatingDetail from "./pages/RatingDetail";
import NotFound from "./pages/NotFound";
import CasinoIndex from "./pages/casino/CasinoIndex";
import Casinos from "./pages/casino/Casinos";
import CasinoReview from "./pages/casino/CasinoReview";
import CasinoAbout from "./pages/casino/CasinoAbout";
import CasinoArticles from "./pages/casino/CasinoArticles";
import CasinoArticle from "./pages/casino/CasinoArticle";
import CasinoTopSites from "./pages/casino/CasinoTopSites";
import CasinoRatings from "./pages/casino/CasinoRatings";
import CasinoFAQ from "./pages/casino/CasinoFAQ";
import CasinoResponsibleGambling from "./pages/casino/CasinoResponsibleGambling";
import CasinoRatingDetail from "./pages/casino/CasinoRatingDetail";

const queryClient = new QueryClient();

const AppContent = () => {
  useAnalytics();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sites" element={<Sites />} />
      <Route path="/ratings" element={<Ratings />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/about" element={<About />} />
      <Route path="/top-sites" element={<TopSites />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/responsible-gambling" element={<ResponsibleGambling />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article/:articleId" element={<Article />} />
      <Route path="/review/:siteId" element={<SiteReview />} />
      <Route path="/ratings/:categoryId" element={<RatingDetail />} />
      {/* HealthyCasinos Routes */}
      <Route path="/healthy-casinos" element={<CasinoIndex />} />
      <Route path="/healthy-casinos/casinos" element={<Casinos />} />
      <Route path="/healthy-casinos/casino/:casinoId" element={<CasinoReview />} />
      <Route path="/healthy-casinos/top-sites" element={<CasinoTopSites />} />
      <Route path="/healthy-casinos/ratings" element={<CasinoRatings />} />
      <Route path="/healthy-casinos/ratings/:categoryId" element={<CasinoRatingDetail />} />
      <Route path="/healthy-casinos/articles" element={<CasinoArticles />} />
      <Route path="/healthy-casinos/article/:articleId" element={<CasinoArticle />} />
      <Route path="/healthy-casinos/faq" element={<CasinoFAQ />} />
      <Route path="/healthy-casinos/responsible-gambling" element={<CasinoResponsibleGambling />} />
      <Route path="/healthy-casinos/about" element={<CasinoAbout />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <VariantWrapper>
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </VariantWrapper>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
