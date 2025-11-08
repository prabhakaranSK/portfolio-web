import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-web', // Remove process.env for now
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})