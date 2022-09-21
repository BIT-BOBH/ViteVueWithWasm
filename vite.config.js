import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// javascript obfuscator
import { obfuscator } from 'rollup-obfuscator';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    obfuscator({
      // see https://github.com/javascript-obfuscator/javascript-obfuscator#javascript-obfuscator-options
      compact: true,
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.75,
      debugProtection: true,
      debugProtectionInterval: 500,
      renameGlobals: true,
      simplify: true,
      splitStrings: true,
      stringArrayRotate: true,
      stringArrayShuffle: true,
      stringArrayWrappersCount: 1,
      stringArrayWrappersChainedCalls: true,
      stringArrayWrappersParametersMaxCount: 2,
      stringArrayWrappersType: 'variable',
      stringArrayThreshold: 0.75,
      selfDefending: true,
    }),
  ],
  build: {
    assetsInlineLimit: 1024 * 1024
  }
})
