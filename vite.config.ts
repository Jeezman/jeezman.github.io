import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProd ? "/jeezman/" : "/",
  plugins: [
    TanStackRouterVite({ routesDirectory: "src/routes" }),
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
});
