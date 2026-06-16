import { defineConfig } from 'vite'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
  plugins: [
    ViteMinifyPlugin({}),
  ],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        music: 'music.html',
        youtube: 'youtube.html',
        programming: 'programming.html'
      }
    }
  }
})