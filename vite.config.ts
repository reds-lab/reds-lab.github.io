import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  assetsInclude: ['**/*.gif', '**/*.webp'],
  base: '/reds-lab.github.io/',
});
