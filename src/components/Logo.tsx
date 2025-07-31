import { useState } from "react";
import { Trophy } from "lucide-react";

interface LogoProps {
  variant?: "default" | "compact" | "icon";
  className?: string;
}

export const Logo = ({ variant = "default", className = "" }: LogoProps) => {
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

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${getLogoSize()} bg-gradient-gaming rounded-lg flex items-center justify-center shadow-neon animate-pulse-glow`}>
        <Trophy className={`${variant === "icon" ? "w-4 h-4" : variant === "compact" ? "w-5 h-5" : "w-6 h-6"} text-white`} />
      </div>
      
      {variant !== "icon" && (
        <div className="flex flex-col">
          <h1 className={`${getTextSize()} font-bold bg-gradient-primary bg-clip-text text-transparent`}>
            CaseHunters
          </h1>
          {variant === "default" && (
            <p className="text-sm text-muted-foreground font-medium">
              Premium Case Site Directory
            </p>
          )}
        </div>
      )}
    </div>
  );
};