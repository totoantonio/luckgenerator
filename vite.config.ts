import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://totoantonio.github.io/luckgenerator/',
  plugins: [react()],

  // Minification Configuration (Example)
  build: {
    minify: 'terser', 
  }
});
