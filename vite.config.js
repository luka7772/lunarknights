import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/lunar-knights/', // 👈 must match the repo name exactly (lowercase)
})
