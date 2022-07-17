import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {

      '/api': {
        target: 'http://ec2-54-153-1-194.us-west-1.compute.amazonaws.com:4000',
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