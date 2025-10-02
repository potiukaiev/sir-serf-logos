import { Link } from "react-router-dom";
import { Button } from "@repo/ui";
import { Shield } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <Shield className="w-16 h-16 text-casino-green mb-6" />
      <h1 className="text-6xl font-bold text-casino-green mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-foreground mb-4">
        Page Not Found
      </h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button className="bg-gradient-cta text-white">
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
