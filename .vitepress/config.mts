import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Treasure box",
  description: "A collection of useful student materials.",

  outDir: "dist",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },/*
      { text: 'Examples', link: '/markdown-examples' } */
    ],

    sidebar: [
      {
        text: 'Programming [P]',
        collapsed: false,
        items: [
          { text: '[P] General', link: '/programming/' },
          { text: '[P] Algo: Seq -> Single', link: '/programming/single.md' },
          { text: '[P] Algo: Seq -> Seq', link: '/programming/sequence.md' },
          { text: '[P] Algo: Sort and other', link: '/programming/sort.md' },
          { text: '[P] Practical examples', link: '/programming/poa-examples.md' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codeapples/treasure-box' }
    ]
  },
  markdown: {
    math: true
  },
  vite: {
    // https://vitejs.dev/config/

  }
})
