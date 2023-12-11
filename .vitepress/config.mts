import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Treasure box",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },/*
      { text: 'Examples', link: '/markdown-examples' } */
    ],

    sidebar: [
      {
        text: 'Programming [P]',
        items: [
          { text: '[P] General', link: '/programming/' },
          { text: '[P] Algo: Seq -> Single', link: '/programming/single.md' },
          { text: '[P] Algo: Seq -> Seq', link: '/programming/sequence.md' },
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
  }
})
