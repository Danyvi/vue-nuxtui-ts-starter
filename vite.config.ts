import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ui({
      ui: {
        colors: {
          primary: 'green',
          neutral: 'slate',
          tertiary: 'indigo',
        },
        theme: {
          colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error'],
          transitions: true,
          defaultVariants: {
            color: 'neutral',
            size: 'sm',
          },
        },
        // button: {
        //   slots: {
        //     base: 'font-bold'
        //   }
        // },
        icons: {
          arrowLeft: 'i-lucide-arrow-left',
          arrowRight: 'i-lucide-arrow-right',
          check: 'i-lucide-check',
          chevronDoubleLeft: 'i-lucide-chevrons-left',
          chevronDoubleRight: 'i-lucide-chevrons-right',
          chevronDown: 'i-lucide-chevron-down',
          chevronLeft: 'i-lucide-chevron-left',
          chevronRight: 'i-lucide-chevron-right',
          chevronUp: 'i-lucide-chevron-up',
          close: 'i-lucide-x',
          ellipsis: 'i-lucide-ellipsis',
          external: 'i-lucide-arrow-up-right',
          file: 'i-lucide-file',
          folder: 'i-lucide-folder',
          folderOpen: 'i-lucide-folder-open',
          loading: 'i-lucide-loader-circle',
          minus: 'i-lucide-minus',
          plus: 'i-lucide-plus',
          search: 'i-lucide-search',
          upload: 'i-lucide-upload',
        },
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
