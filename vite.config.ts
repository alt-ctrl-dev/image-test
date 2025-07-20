import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/image-test/",
  build:{
    assetsInlineLimit: 0, // Disable inlining of assets
  }
})
