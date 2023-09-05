import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: '/Habit-Piggy/',
  plugins: [react()],

  build: {
    outDir: 'dist',
  },
});
