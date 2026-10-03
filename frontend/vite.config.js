import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('react-dom') || id.includes('react-router-dom') || id.includes('node_modules/react/')) {
            return 'vendor';
          }
          if (id.includes('@react-google-maps') || id.includes('leaflet') || id.includes('react-leaflet')) {
            return 'maps';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  }
})
