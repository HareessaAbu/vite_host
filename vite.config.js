import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import sass from 'sass';
import ViteRequireContext from '@originjs/vite-plugin-require-context';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: false,
  resolve: {
    alias:[ 
      {
        find: /^~/,
        replacement: '',
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: 'src',
        replacement: '.'
      }
    ],
    extensions: [
        '.mts',
        '.mjs',
        '.js',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
        '.vue',
    ],
  },
  plugins: [
    vue(),
    ViteRequireContext.default(),
    viteCommonjs(),
    federation({
      name: 'host-app',
      filename: 'remoteFile.js',
      optimizeDeps: {
        include: ['vuetify','vue','@payoffice2.0/vuetify'],
      },
      remotes: {
        'remote-app': "http://127.0.0.1:8083/assets/remoteFile.js",
      },
      shared: ['vue','vuetify','@payoffice2.0/vuetify'],
      optimization: {
          splitChunks: true,
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: `@import "@/styles/variables.scss";`, // Adjust the path to your Sass variables file
      },
    },
  },
  build: {
    minify: false,
    target: 'esnext',
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        format: 'esm',
        entryFileNames: 'assets/[name].js',
        minifyInternalExports: false,
        manualChunks: {
          vuetify: ['vuetify'],
        },
      },
    },
  },
  server: {
    fsServe: {
      alias: {
        'vuetify': 'vuetify',
      },
    },
  },
})
