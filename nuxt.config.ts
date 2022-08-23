import { defineNuxtConfig } from "nuxt";
// import { form } from "@nuxtjs/tailwindcss";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  buildModules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.ts",
    exposeConfig: true,
    injectPosition: 0,
    viewer: true,
  },
});
