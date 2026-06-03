import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Replace 'lunar-knights2' with your actual repo name if it differs
  base: '/lunar-knights2/', 
})