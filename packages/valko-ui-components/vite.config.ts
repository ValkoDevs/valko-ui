import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import * as path from 'path'
import typescript2 from 'rollup-plugin-typescript2'
import dts from 'vite-plugin-dts'

export default defineConfig({
  publicDir: './src/exports',
  plugins: [
    vue(),
    VueTypeImports(),
    dts({
      insertTypesEntry: true,
    }),
    typescript2({
      check: false,
      include: ['src/components/**/*.vue'],
      tsconfigOverride: {
        compilerOptions: {
          outDir: 'dist',
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
      },
      exclude: ['vite.config.ts']
    })
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: 'src/index.ts',
      name: 'ValkoUI',
      formats: ['es', 'cjs', 'umd'],
      fileName: format => `index.${format}.js`
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
        'vue-router/composables',
        'node:url'
      ],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})