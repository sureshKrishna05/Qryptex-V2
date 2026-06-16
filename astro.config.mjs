import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://qryptex.in",

  // REMOVE the 'output' line entirely. 
  // It defaults to 'static', which is exactly what you want for speed.

  adapter: vercel({ imageService: true }),

  integrations: [
    sitemap(),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // This is still highly recommended for that "instant" feel
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  }
});