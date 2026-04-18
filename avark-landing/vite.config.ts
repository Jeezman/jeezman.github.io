import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// Base path is env-driven so the same build works on:
//   - GitHub Pages default subpath: VITE_BASE=/avark/
//   - custom domain (future):       VITE_BASE=/
const base = process.env.VITE_BASE ?? "/";

export default defineConfig({
  base,
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
  },
});
