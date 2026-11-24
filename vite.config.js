import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Public source maps for first-party JS (Lighthouse "missing source maps").
    sourcemap: true,
  },
})
