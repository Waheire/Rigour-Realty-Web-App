import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    // Allow hosts dynamically based on environment
    allowedHosts: process.env.RENDER_EXTERNAL_URL
      ? [new URL(process.env.RENDER_EXTERNAL_URL).hostname]
      : ['.onrender.com', 'localhost'],

    // Listen on all network interfaces (IPv6 and IPv4)
    host: "::",

    // Use PORT from environment or default to 8080
    port: parseInt(process.env.PORT || '8080'),

    hmr: {
      overlay: false,
    },
  },
  preview: {
    // Same configuration for preview/production mode
    host: "::",
    port: parseInt(process.env.PORT || '4173'),
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));