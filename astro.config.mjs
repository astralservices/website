import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig({
  site: "https://astralapp.io",
  integrations: [react(), tailwind(), sitemap(), partytown(), turbolinks()],
  vite: {
    define: {
      "process.env": JSON.stringify(process.env)
    }
  }
});