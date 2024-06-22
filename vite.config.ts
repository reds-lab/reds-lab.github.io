// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/reds-lab.github.io/', // Base URL for your project
  plugins: [react()],
});
