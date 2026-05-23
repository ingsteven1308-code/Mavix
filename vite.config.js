import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.{mp4,MP4,png,PNG,jpg,JPG,jpeg,JPEG,svg,SVG}'],
  server: {
    port: 5173,
    open: true,
  },
})
