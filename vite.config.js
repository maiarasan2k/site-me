// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/site-me/', // 👈 VERY IMPORTANT
  plugins: [react()],
});
