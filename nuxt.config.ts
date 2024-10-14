// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false, // Désactiver SSR pour un site statique
  // target: 'static', // Permet de générer un site statique
  app: {
    baseURL: process.env.BASE_URL || "/", // Chemin de base (important pour GitHub Pages)
  },
  vite: {
    base: process.env.BASE_URL || "/",
  },
  css: ["@mdi/font/css/materialdesignicons.css"],
  modules: ["vuetify-nuxt-module", "nuxt-mdi", "@nuxt/image"],

  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: "mdi",
        sets: ["mdi", "fa"],
      },
    },
  },
});
