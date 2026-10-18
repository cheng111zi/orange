import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePages } from '@kingironman2011/vite-pages'

export default defineConfig(({ mode }) => ({
  // 仅在 build（生产构建）时使用 /orange/，开发时使用 /
  base: mode === 'production' ? '/orange/' : '/',
  plugins: [react(), vitePages()],
}))