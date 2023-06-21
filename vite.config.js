import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, './src/assets'),
      "@Components": path.resolve(__dirname, './src/Components'),
      "@Layouts": path.resolve(__dirname, './src/Layouts'),
      "@Templates": path.resolve(__dirname, './src/Templates'),
    },
  },
})
