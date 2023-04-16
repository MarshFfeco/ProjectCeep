import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ["oh-vue-icons/icons"]
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: { additionalData: `@important "src/assets/scssindex.scss";`},
  //   }
  // },
  server: {
    port: 3000
  }
})
