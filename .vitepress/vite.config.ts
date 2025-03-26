import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'

/* const env = loadEnv(mode, projectRoot)
process.env = { ...process.env, ...env } */

export default defineConfig({
  envDir: fileURLToPath(new URL('../', import.meta.url)),
  plugins: [
    Components({
      dirs: [fileURLToPath(new URL('./components', import.meta.url))],
      dts: fileURLToPath(new URL('./components.d.ts', import.meta.url)),
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      extensions: ['vue', 'md'],
    }),
    UnoCSS(fileURLToPath(new URL('./uno.config.ts', import.meta.url))),
  ],
  ssr: {
    noExternal: ['function-plot', 'd3', /d3-[a-z-]+/],
  },
})
