// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: { port: 3001 },
  typescript: {
    shim: false
  },
  imports: {
    dirs: ['stores']
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      title: '艾里攝影工作室',
      meta: [
        { 'name': 'description', 'content': '這是艾里攝影工作室' },
        { 'property': 'og:title', 'content': '艾里攝影工作室' },
        { 'property': 'og:url', 'content': 'http://localhost:3001/' },
        { 'property': 'og:description', 'content': '這是艾里攝影工作室' },
      ],
    }
  },
})
