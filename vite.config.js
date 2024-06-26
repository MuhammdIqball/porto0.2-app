import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/porto0.2-appporto0.2-app/",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
