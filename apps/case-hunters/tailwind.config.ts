import type { Config } from "tailwindcss";
import { sharedTailwindConfig } from "@repo/config";

export default {
  ...sharedTailwindConfig,
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
  ],
  theme: {
    ...sharedTailwindConfig.theme,
    extend: {
      ...sharedTailwindConfig.theme?.extend,
      colors: {
        ...sharedTailwindConfig.theme?.extend?.colors,
        // CS2 Gaming Colors
        gaming: {
          cyan: "hsl(var(--gaming-cyan))",
          purple: "hsl(var(--gaming-purple))",
          magenta: "hsl(var(--gaming-magenta))",
          orange: "hsl(var(--gaming-orange))",
          green: "hsl(var(--gaming-green))",
          dark: "hsl(var(--gaming-dark))",
          darker: "hsl(var(--gaming-darker))"
        },
        // CS2 Skin Rarity Colors
        rarity: {
          consumer: "hsl(var(--rarity-consumer))",
          industrial: "hsl(var(--rarity-industrial))",
          milspec: "hsl(var(--rarity-milspec))",
          restricted: "hsl(var(--rarity-restricted))",
          classified: "hsl(var(--rarity-classified))",
          covert: "hsl(var(--rarity-covert))",
          knife: "hsl(var(--rarity-knife))"
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))"
        }
      },
      animation: {
        ...sharedTailwindConfig.theme?.extend?.animation,
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
        "slide-up": "slide-up 0.5s ease-out"
      },
      keyframes: {
        ...sharedTailwindConfig.theme?.extend?.keyframes,
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "pulse-glow": {
          "0%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" },
          "100%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.6)" }
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-gaming": "var(--gradient-gaming)",
        "gradient-rarity": "var(--gradient-rarity)",
        "gradient-background": "var(--gradient-background)",
        "gradient-card": "var(--gradient-card)",
        "gradient-cta": "var(--gradient-cta)"
      },
      boxShadow: {
        "neon": "var(--shadow-neon)",
        "purple": "var(--shadow-purple)",
        "gaming": "var(--shadow-gaming)",
        "card": "var(--shadow-card)",
        "elevated": "var(--shadow-elevated)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
