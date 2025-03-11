import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  build: {
    brotliSize: false,
  },
  plugins: [
    tailwindcss()

  ],
  server: {
    port: 5173, 
    open: true, 
  },
});
