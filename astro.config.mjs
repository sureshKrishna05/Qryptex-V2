import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

export default defineConfig({

  site: "https://qryptex.in",

  output: "server",

  adapter: vercel({imageService: true},),

  integrations: [
    sitemap(),
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

});
