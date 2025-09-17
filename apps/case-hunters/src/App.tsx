import { Toaster } from "@repo/ui";
import { Toaster as Sonner } from "@repo/ui";
import { TooltipProvider } from "@repo/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { VariantWrapper } from "@repo/ui";
import { useAnalytics } from "@/hooks/useAnalytics";
import Index from "./pages/Index";
import Sites from "./pages/Sites";
import Categories from "./pages/Categories";
import About from "./pages/About";
import SiteReview from "./pages/SiteReview";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  useAnalytics();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/sites" element={<Sites />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/about" element={<About />} />
      <Route path="/review/:siteId" element={<SiteReview />} />
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
