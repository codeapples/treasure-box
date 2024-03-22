import DefaultTheme from 'vitepress/theme'
import vitepressNprogress from 'vitepress-plugin-nprogress'
import { type Theme, useData, useRoute } from 'vitepress'
import codeblocksFold from 'vitepress-plugin-codeblocks-fold'
import { createPinia } from 'pinia'
import 'uno.css'
import 'vitepress-plugin-nprogress/lib/css/index.css'
import 'vitepress-plugin-codeblocks-fold/style/index.css'
import './style.css'
import './custom.css'
import CustomLayout from '../components/CustomLayout.vue'

const theme: Theme = {
  extends: DefaultTheme,
  Layout: CustomLayout,
  enhanceApp(ctx) {
    vitepressNprogress(ctx)
    ctx.app.use(createPinia())
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
