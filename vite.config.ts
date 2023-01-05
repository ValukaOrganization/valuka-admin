import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      /** @ 符号指向 src 目录 */
      '@': resolve(__dirname, './src'),
    },
  },
})
