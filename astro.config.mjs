import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  base: '/',
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  vite: {
    ssr: {
      noExternal: ["three"],
    },
  },
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});