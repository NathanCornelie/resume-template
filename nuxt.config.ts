// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@mdi/font/css/materialdesignicons.css"],
  modules: ["vuetify-nuxt-module", "nuxt-mdi", "@nuxt/image"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
         
        },
      },
    },
  },
  vuetify: {
    vuetifyOptions: {
      icons: {
        defaultSet: "mdi",
        sets: ["mdi", "fa"],
      },
    },
  },
});
