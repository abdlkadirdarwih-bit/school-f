import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
    // if you don't write this vercel.json then ypou willface with routing error
    //the project will work but in routing whenever you directly would like to access a page so you cannot access 
