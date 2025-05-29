import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import UnoCSS from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}),
    vue(),
    vueDevTools(),
    UnoCSS(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: ['vue'],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      dirs: ['src/layouts', 'src/pages'],
      extensions: ['vue'],
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
