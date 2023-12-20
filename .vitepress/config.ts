import { defineConfig } from 'vitepress'
import { nav, sidebar } from './navigation'
import vite from './vite.config'
import 'dotenv/config'

const gID = process.env.GA_ID || 'XXXXXXXXXX'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  themeConfig: {
    logo: '/android-chrome-192x192.png',
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/codeapples/treasure-box' }],

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
    search: {
      provider: 'local',
    },
  },

  markdown: {
    // TODO: figure out how to use latex macros in mathjax
    math: {},
  },

  vite,

  title: 'Treasure box',
  description: 'A collection of useful student materials.',

  srcDir: 'src',
  outDir: 'dist',

  cleanUrls: true,

  head: [
    ['script', { async: '', src: `https://www.googletagmanager.com/gtag/js?id=G-${gID}` }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-${gID}');`,
    ],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ],
})
