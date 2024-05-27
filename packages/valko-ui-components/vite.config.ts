import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import typescript2 from 'rollup-plugin-typescript2'
import dts from 'vite-plugin-dts'

export default defineConfig({
  publicDir: './src/exports',
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    }),
    typescript2({
      check: false,
      include: [
        'src/components/**/*.{vue, ts}',
        'src/types/**/*.ts',
        'src/composables/**/*.ts',
        'src/styles/**/*.ts'
      ],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: false,
          declaration: false,
          declarationMap: false
        }
      },
      exclude: ['vite.config.ts']
    })
  ],
  test: {
    globals: true,
    root: 'src',
    include: ['**/*.spec.ts'],
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: '../coverage',
      exclude: ['exports', 'scripts', 'types', 'img']
    }
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: 'src/index.ts',
      name: 'ValkoUI',
      formats: ['es', 'cjs'],
      fileName: format => `index${format === 'es' ? '' : '.' + format}.js`
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.ts')
      },
      external: [
        'vue',
        'nuxt',
        '@nuxt/bridge',
        '@nuxt/kit',
        'headlessui/vue',
        'vue-router/composables',
        'node:url'
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    alias: {
      '#valkoui': path.resolve(__dirname, 'src')
    },
    extensions: ['.ts', '.vue', '.json', 'svg']
  }
})
