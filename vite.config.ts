import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // Ensure assets are loaded from root
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode === 'production' ? false : true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
  },
  server: {
    // Allow hosts dynamically based on environment
    allowedHosts: process.env.RENDER_EXTERNAL_URL
      ? [new URL(process.env.RENDER_EXTERNAL_URL).hostname]
      : ['.onrender.com', 'localhost'],

    // Listen on all network interfaces (IPv6 and IPv4)
    host: "::",

    // Use PORT from environment (Render uses 10000) or default to 8080
    port: parseInt(process.env.PORT || '10000'),
    proxy: {
      "/api": {
        target: process.env.VITE_API_PROXY_TARGET || "http://localhost:3001",
        changeOrigin: true,
      },
    },

    hmr: {
      overlay: false,
    },
  },
  preview: {
    // Same configuration for preview/production mode
    host: "::",
    port: parseInt(process.env.PORT || '10000'),
  },
  plugins: [react()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
