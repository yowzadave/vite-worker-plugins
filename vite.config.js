import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import image from '@rollup/plugin-image';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...image(),
      enforce: 'pre'
    },
    vue(),
  ]
})
