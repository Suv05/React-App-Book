import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [
      'react-router-dom',
      'react-redux',
      '@reduxjs/toolkit',
      'react-icons/io5'
    ]
  }
})
