import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import typescript2 from 'rollup-plugin-typescript2'
import dts from 'vite-plugin-dts'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  publicDir: './src/exports',
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      exclude: [
        'src/__test__',
        'src/scripts'
      ],
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
          sourceMap: true,
          declaration: false,
          declarationMap: false
        }
      },
      exclude: ['vite.config.ts']
    }),
    copy({
      hook: 'writeBundle',
      targets: [
        { src: 'src/components/*.vue', dest: 'dist/components', ignore: ['**/*.map'] },
        { src: 'src/composables/*.ts', dest: 'dist/composables', ignore: ['**/*.map'] },
        { src: 'src/styles/*.ts', dest: 'dist/styles', ignore: ['**/*.map'] },
        { src: 'src/types/*.ts', dest: 'dist/types', ignore: ['**/*.map'] },
        { src: 'src/img/*', dest: 'dist/img', ignore: ['**/*.map'] }
      ]
    })
  ],
  test: {
    globals: true,
    root: 'src',
    include: ['__test__/*.spec.ts'],
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      enabled: true,
      reportsDirectory: '../coverage',
      exclude: ['exports', 'scripts', 'types', 'img', '**/__mocks__', '**/__test__']
    }
  },
  build: {
    cssCodeSplit: true,
    sourcemap: false,
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
        '@nuxt/kit',
        'headlessui/vue',
        'vue-router/composables'
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
