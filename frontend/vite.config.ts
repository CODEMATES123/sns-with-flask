import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {thisBaseURL} from "./src/constants"
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base:thisBaseURL,
  resolve:{
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  }
})
