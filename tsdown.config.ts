import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs'],
  minify: true,
  deps: {
    alwaysBundle: ['@actions/core', '@actions/github', '@faker-js/faker'],
  },
})
