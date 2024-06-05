import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  srcDir: "src",
  alias: {
    assets: fileURLToPath(new URL("./assets", import.meta.url)),
  },
});
