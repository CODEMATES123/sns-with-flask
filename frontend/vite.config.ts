import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {thisBaseURL} from "./src/constants"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base:thisBaseURL
})
