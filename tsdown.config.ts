import { readFileSync } from 'node:fs'
import { defineConfig } from 'tsdown'

const pkg = JSON.parse(readFileSync('./package.json', { encoding: 'utf-8' }))

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs'],
  minify: true,
  deps: {
    alwaysBundle: Object.keys(pkg.dependencies || {}),
  },
})
