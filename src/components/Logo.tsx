
import { useState } from "react";
import { Trophy } from "lucide-react";
import { useVariant } from "@/hooks/useVariant";

interface LogoProps {
  variant?: "default" | "compact" | "icon";
  className?: string;
}

export const Logo = ({ variant = "default", className = "" }: LogoProps) => {
  const themeVariant = useVariant();

  const getLogoSize = () => {
    switch (variant) {
      case "compact":
        return "w-8 h-8";
      case "icon":
        return "w-6 h-6";
      default:
        return "w-10 h-10";
    }
  };

  const getTextSize = () => {
    switch (variant) {
      case "compact":
        return "text-lg";
      case "icon":
        return "text-sm";
      default:
        return "text-2xl";
    }
  };

  const getLogoStyles = () => {
    if (themeVariant === 'B') {
      // Glass variant styling
      return {
        container: "bg-gradient-gaming rounded-xl shadow-neon animate-pulse-glow border-2",
        trophy: "text-gaming-dark drop-shadow-sm",
        title: "font-bold bg-gradient-primary bg-clip-text text-transparent drop-shadow-sm",
        subtitle: "text-muted-foreground font-medium opacity-90"
      };
    } else {
      // Default neon gaming styling
      return {
        container: "bg-gradient-gaming rounded-lg shadow-neon animate-pulse-glow",
        trophy: "text-white",
        title: "font-bold bg-gradient-primary bg-clip-text text-transparent",
        subtitle: "text-muted-foreground font-medium"
      };
    }
  };

  const styles = getLogoStyles();

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${getLogoSize()} ${styles.container} flex items-center justify-center`}>
        <Trophy className={`${variant === "icon" ? "w-4 h-4" : variant === "compact" ? "w-5 h-5" : "w-6 h-6"} ${styles.trophy}`} />
      </div>
      
      {variant !== "icon" && (
        <div className="flex flex-col">
          <h1 className={`${getTextSize()} ${styles.title}`}>
            CaseHunters
          </h1>
          {variant === "default" && (
            <p className={`text-sm ${styles.subtitle}`}>
              {themeVariant === 'B' ? 'Premium Glass Experience' : 'Premium Case Site Directory'}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
