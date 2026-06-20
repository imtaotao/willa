import { defineConfig } from "auklet";

export const config = defineConfig({
  modules: true,
  styles: {
    themes: {
      dark: "./src/themes/dark.css",
      light: "./src/themes/light.css",
    },
    dependencies: {
      katex: {
        entry: "/dist/katex.min.css",
      },
      "@willa-ui/layout": {
        entry: "/style.css",
        components: "/components/**.css",
        themes: {
          dark: "/themes/dark.css",
          light: "/themes/light.css",
        },
      },
    },
  },
});
