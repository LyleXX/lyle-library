/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'LyleLibrary',
      fileName: (format) => `lyle-library.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue(), dts()],
  test: {
    // 模拟dom环境
    environment: 'happy-dom',
    coverage: {
      // 覆盖率提供者
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      // 设置覆盖文件夹
      reportsDirectory: './coverage',
    },
    open: true,
    include: ['./tests/**/*.{test,spec}.ts'],
  },
})
