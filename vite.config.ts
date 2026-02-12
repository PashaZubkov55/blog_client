import { defineConfig } from 'vite'
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'), // псевдоним @components ссылается на src/components
      '@pages': resolve(__dirname, 'src/pages'),           // псевдоним @pages ссылается на src/pages
      '@store': resolve(__dirname, 'src/store'),           // псевдоним @store ссылается на src/store
      '@utils': resolve(__dirname, 'src/utils'),            // псевдоним @utils ссылается на src/utils
      '@modals': resolve(__dirname, 'src/modals'),   
    }

  },
  plugins: [
    react(),
    tailwindcss(),
 
    

  ],
})
