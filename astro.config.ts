import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import poimandres from "./src/lib/poimandres.json";

const siteURL = "https://swarnimwalavalkar.com/";

// https://astro.build/config
export default defineConfig({
  site: siteURL,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    solidJs(),
    sitemap(),
  ],
  vite: {
    ssr: {
      noExternal: [
        "@fontsource-variable/inter",
        "@fontsource-variable/brygada-1918",
      ],
    },
    define: {
      "import.meta.env.PUBLIC_URL": JSON.stringify(siteURL),
    },
  },
  // @ts-expect-error
  markdown: { shikiConfig: { theme: poimandres, wrap: true } },
});
