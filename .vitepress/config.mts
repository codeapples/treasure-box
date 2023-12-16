import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Treasure box",
  description: "A collection of useful student materials.",

  srcDir: "src",
  outDir: "dist",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },/*
      { text: 'Examples', link: '/markdown-examples' } */
    ],

    sidebar: [
      {
        text: "Semester 1",
        collapsed: false,
        items: [
          {
            text: 'Programming [P]',
            collapsed: true,
            items: [
              { text: '[P] General', link: '/programming/' },
              { text: '[P] Algo: Seq -> Single', link: '/programming/single.md' },
              { text: '[P] Algo: Seq -> Seq', link: '/programming/sequence.md' },
              { text: '[P] Algo: Sort and other', link: '/programming/sort.md' },
              { text: '[P] Practical examples', link: '/programming/poa-examples.md' }
            ]
          },
          {
            text: 'Basic Mathematics [BM]',
            collapsed: true,
            items: [
              { text: '[BM] General', link: '/basicmath/' },
              { text: '[BM] Inverse matrices', link: '/basicmath/inverse-mx.md' },
              { text: '[BM] Inverse matrices Gauss-Jordan method', link: '/basicmath/inverse-mx-gj.md' },
              { text: '[BM] Eigenvalues and eigenvectors', link: '/basicmath/eigen.md' },
              { text: '[BM] Diagonalization', link: '/basicmath/diagonalization.md' },
              { text: '[BM] Orthogonal and orthonormal basis', link: '/basicmath/ortho.md' },
              { text: '[BM] Inverse functions', link: '/basicmath/inverse-fn.md' },
              { text: '[BM] Proving limits', link: '/basicmath/limits.md' },
            ]
          }
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/codeapples/treasure-box' }
    ]
  },
  markdown: {
    // TODO: figure out how to use latex macros in mathjax
    math: {}
  },
  vite: {
    // https://vitejs.dev/config/
    // TODO: configure js and css minification & chunk size
  }
})
