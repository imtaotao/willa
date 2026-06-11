import { defineConfig } from "auklet";

export const config = defineConfig({
  modules: true,
  styles: {
    themes: {
      dark: "./src/themes/dark.css",
      light: "./src/themes/light.css",
    },
  },
});
