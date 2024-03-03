import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  build: {
    copyPublicDir: false,
    outDir: 'build',
    lib: {
      entry: resolve(__dirname, 'src/lib/index.js'),
      name: 'BoringAvatars',
      fileName: (format) => `boring-avatars.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
