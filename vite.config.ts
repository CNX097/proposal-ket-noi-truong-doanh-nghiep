/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build:demo` gom toàn bộ JS/CSS/ảnh vào một file demo/index.html mở trực tiếp được.
export default defineConfig(({ mode }) => ({
  plugins: mode === 'demo' ? [react(), viteSingleFile()] : [react()],
  base: './',
  build: mode === 'demo' ? { outDir: 'demo', assetsInlineLimit: 100_000_000 } : {},
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    globals: true,
  },
}))
