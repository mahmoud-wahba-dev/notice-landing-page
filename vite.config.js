import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        login: new URL('./login.html', import.meta.url).pathname,
        register: new URL('./register.html', import.meta.url).pathname,
        'forgot-password': new URL('./forgot-password.html', import.meta.url).pathname,
        'confirm-password': new URL('./confirm-password.html', import.meta.url).pathname,
        '404': new URL('./404.html', import.meta.url).pathname,
        test: new URL('./test.html', import.meta.url).pathname,
        // 'privacy-policy': new URL('./privacy-policy.html', import.meta.url).pathname,
      }
    }
  }
})

