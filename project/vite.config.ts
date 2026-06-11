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
        privacy: 'privacy.html',
        terms: 'terms.html',
        'about-meeli': 'about-meeli.html',
        'community-guidelines': 'community-guidelines.html',
        'safety-moderation': 'safety-moderation.html',
        'data-deletion': 'data-deletion.html',
        copyright: 'copyright.html',
      },
    },
  },
});
