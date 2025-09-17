import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@repo/ui": path.resolve(__dirname, "../../packages/ui"),
      "@repo/utils": path.resolve(__dirname, "../../packages/utils"),
      "@repo/seo": path.resolve(__dirname, "../../packages/seo"),
      "@repo/config": path.resolve(__dirname, "../../packages/config"),
    },
  },
}));
