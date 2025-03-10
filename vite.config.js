import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    brotliSize: false,
  },
  plugins: [
    tailwindcss(),
    viteStaticCopy({
      targets: [
          { src: 'src/components/nav.html', dest: 'src/components' },
          { src: 'src/pages/*.html', dest: 'src/pages' },
          { src: 'src/assets/*.jpg', dest: 'src/assets'},
          { src: 'src/assets/*.webp', dest: 'src/assets'}
      ]
  })

  ],
  server: {
    port: 5173, 
    open: true, 
  },
});
