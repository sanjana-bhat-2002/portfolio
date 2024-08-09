import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import path from 'node:path';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), icon()],
  vite: {
    resolve: {
      alias: {
        "@src": path.resolve("./src"),
        "@layouts": path.resolve("./src/layouts"),
        "@components": path.resolve("./src/components"),
        "@config": path.resolve("./src/config"),
        "@content": path.resolve("./src/content"),
        "@styles": path.resolve("./src/styles"),
        "@utils": path.resolve("./src/utils"),
        "@icons": path.resolve("./src/components/icons")
      }
    }
  }
});