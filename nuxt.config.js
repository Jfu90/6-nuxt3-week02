// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/styles/all.scss'],
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1.0',
      title: '享樂酒店｜Enjoyment Luxury Hotel',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: true,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200..900&display=swap',
        },
      ],
      // script: [
      //   {
      //     src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js',
      //     async: true,
      //   },
      // ],
    },
  },
});
