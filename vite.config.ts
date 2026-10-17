import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vitePages } from '@kingironman2011/vite-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/orange/', // 注意：仓库名必须与你的 GitHub 仓库名称一致，以斜杠开头和结尾
  plugins: [react(), vitePages()], 
})