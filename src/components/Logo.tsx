import { useState } from "react";
import companyLogo from "@/assets/company-logo.png";

interface LogoProps {
  variant?: "default" | "compact" | "icon";
  className?: string;
}

export const Logo = ({ variant = "default", className = "" }: LogoProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const getLogoSize = () => {
    switch (variant) {
      case "compact":
        return "h-12 w-auto";
      case "icon":
        return "h-8 w-auto";
      default:
        return "h-16 w-auto";
    }
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative">
        <img
          src={companyLogo}
          alt="Sir gay and serf Dmytro - IT Software Company"
          className={`${getLogoSize()} transition-all duration-300 ${
            imageLoaded ? 'opacity-100 animate-slide-up' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
        />
        {!imageLoaded && (
          <div className={`${getLogoSize()} bg-gradient-primary animate-pulse rounded-lg`} />
        )}
      </div>
      
      {variant !== "icon" && (
        <div className="flex flex-col">
          <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Sir gay and serf Dmytro
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            IT Software Solutions
          </p>
        </div>
      )}
    </div>
  );
};