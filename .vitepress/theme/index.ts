// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import vitepressNprogress from 'vitepress-plugin-nprogress'
import { type Theme, useData, useRoute } from 'vitepress'
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'
import 'uno.css'
import 'vitepress-plugin-nprogress/lib/css/index.css'
import 'vitepress-plugin-codeblocks-fold/style/index.css'
import './style.css'
import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp(ctx) {
    vitepressNprogress(ctx)
  },
  setup() {
    // get frontmatter and route
    const { frontmatter } = useData()
    const route = useRoute()
    // basic use
    codeblocksFold({ route, frontmatter }, true, 400)
  },
}

export default theme
