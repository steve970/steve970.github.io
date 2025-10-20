import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    outDir: '.tmp/dist',
    rollupOptions: {
      input: {
        all: './source/javascripts/all.js',
        bootstrap: './source/javascripts/projects.js'
      },
      output: {
        entryFileNames: 'javascripts/[name].js',
        chunkFileNames: 'javascripts/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'stylesheets/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
})