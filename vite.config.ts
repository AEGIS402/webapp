import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const PRE_AUDIT_TARGET = env.VITE_PREAUDIT_PROXY || 'http://127.0.0.1:13001'
  const POST_AUDIT_TARGET = env.VITE_POSTAUDIT_PROXY || 'http://127.0.0.1:3000'

  return {
    plugins: [react()],
    base: './',
    server: {
      proxy: {
        '/api/preaudit': {
          target: PRE_AUDIT_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/preaudit/, ''),
          timeout: 600_000,
          proxyTimeout: 600_000,
        },
        '/api/postaudit': {
          target: POST_AUDIT_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/postaudit/, ''),
          timeout: 600_000,
          proxyTimeout: 600_000,
        },
      },
    },
  }
})
