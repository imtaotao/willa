import { defineConfig } from "auklet";

export const config = defineConfig({
  modules: true,
  styles: {
    dependencies: {
      "@willa-ui/content": {
        entry: "/style.css",
        components: "/components/**.css",
        themes: {
          dark: "/themes/dark.css",
          light: "/themes/light.css",
        },
      },
      "@willa-ui/widgets": {
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
