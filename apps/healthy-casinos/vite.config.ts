import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@repo/ui': path.resolve(__dirname, '../../packages/ui'),
      '@repo/seo': path.resolve(__dirname, '../../packages/seo'),
      '@repo/config': path.resolve(__dirname, '../../packages/config'),
      '@repo/utils': path.resolve(__dirname, '../../packages/utils'),
    },
  },
  server: {
    port: 5174,
  },
});
