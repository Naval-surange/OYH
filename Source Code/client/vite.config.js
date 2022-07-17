import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {

      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,      
      },
     
    }
  },
  build: {
    target: 'esnext'
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})