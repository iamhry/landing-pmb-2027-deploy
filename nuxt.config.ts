// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
const staticRoutes = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  
  { url: '/program-studi', priority: 1.0, changefreq: 'weekly' },
  { url: '/mitra', priority: 1.0, changefreq: 'weekly' },
  { url: '/biaya-pendaftaran', priority: 0.8, changefreq: 'monthly' },
  { url: '/faq-umpku', priority: 0.6, changefreq: 'weekly' },
  { url: '/biaya-studi', priority: 0.6, changefreq: 'monthly' },
  { url: '/beasiswa', priority: 0.5, changefreq: 'monthly' },
  { url: '/brosur', priority: 0.5, changefreq: 'monthly' },

  { url: '/course-detail/1', priority: 0.8, changefreq: 'weekly' },
  { url: '/course-detail/2', priority: 1.0, changefreq: 'weekly' },
  { url: '/course-detail/3', priority: 0.8, changefreq: 'weekly' },
  { url: '/course-detail-two/1', priority: 0.4, changefreq: 'weekly' },
  { url: '/course-detail-two/2', priority: 0.5, changefreq: 'weekly' },
  { url: '/course-detail-two/3', priority: 0.6, changefreq: 'weekly' },
  
];

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/sitemap', // Modul Sitemap yang benar
    '@nuxtjs/robots',  // Modul Robots yang benar
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '~/assets/scss/tailwind.scss',
  ],

  sitemap: {
    hostname: 'https://pmb.umpku.ac.id',
    routes: staticRoutes.map(r => r.url),
    defaults: {},
  },

  robots: {
    UserAgent: '*',
    Disallow: '', // Mengizinkan crawling secara default
    sitemap: 'https://pmb.umpku.ac.id/sitemap.xml',
  },

  app: {
    head: {
      title: 'PMB UMPKU Surakarta',
      titleTemplate: 'PMB UMPKU Surakarta',
      htmlAttrs: { class: "light scroll-smooth", dir: 'ltr', lang: 'en' },
      bodyAttrs: {
        class: 'light dark:bg-slate-900',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      
      link: [
        { rel: 'preconnect', href: 'https://cdn.jsdelivr.net' },
        { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com' },

       {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'" 
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'"
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'"
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css',
          as: 'style',
          onload: "this.onload=null;this.rel='stylesheet'"
        },
      ],

      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
          defer: true 
        }
      ]
    },
  },
})
