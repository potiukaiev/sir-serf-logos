import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trophy, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        {/* Gaming Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-gaming rounded-lg flex items-center justify-center mx-auto mb-4 shadow-neon">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            CaseHunters
          </h1>
        </div>

        {/* 404 Message */}
        <div className="mb-8">
          <h2 className="text-6xl font-bold mb-4 text-gaming-cyan">404</h2>
          <h3 className="text-2xl font-bold mb-4 text-foreground">Page Not Found</h3>
          <p className="text-muted-foreground mb-6">
            Looks like this case site escaped! The page you're looking for doesn't exist.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            asChild 
            className="w-full bg-gradient-cta text-white shadow-neon hover:shadow-elevated"
          >
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </a>
          </Button>
          <Button 
            variant="outline" 
            asChild
            className="w-full border-gaming-purple text-gaming-purple hover:bg-gaming-purple/10"
          >
            <a href="/sites">
              <Search className="w-4 h-4 mr-2" />
              Browse Sites
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
