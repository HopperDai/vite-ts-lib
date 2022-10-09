import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'ViteTs',
      // fileName: (format) => `index.${format}.js`,
      fileName: 'index',
    }
  }
})
