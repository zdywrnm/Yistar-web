import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yixingretail.cn",
  output: "static",
  trailingSlash: "always",
  devToolbar: {
    enabled: false,
  },
  build: {
    format: "directory",
  },
  integrations: [sitemap()],
});
