// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
    css: ['bootstrap/dist/css/bootstrap.min.css',
          'bootstrap-icons/font/bootstrap-icons.css'
    ],

    app: {
      head: {
        link: [
          {
            rel: 'stylesheet',
            href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css'
          }
        ]
      }
    }

});
