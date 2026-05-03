import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PRE_AUDIT_TARGET = process.env.VITE_PREAUDIT_PROXY || 'http://127.0.0.1:13001'
const POST_AUDIT_TARGET = process.env.VITE_POSTAUDIT_PROXY || 'http://127.0.0.1:3000'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    proxy: {
      '/api/preaudit': {
        target: PRE_AUDIT_TARGET,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/preaudit/, ''),
      },
      '/api/postaudit': {
        target: POST_AUDIT_TARGET,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/postaudit/, ''),
        // post-audit LLM round trip can exceed 2 minutes
        timeout: 600_000,
        proxyTimeout: 600_000,
      },
    },
  },
})
