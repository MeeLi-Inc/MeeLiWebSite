import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about-meeli.html',
        community: 'community-guidelines.html',
        copyright: 'copyright.html',
        dataDeletion: 'data-deletion.html',
        privacy: 'privacy.html',
        safety: 'safety-moderation.html',
        terms: 'terms.html',
      },
    },
  },
});
