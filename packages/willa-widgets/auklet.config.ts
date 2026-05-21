import type { AukletConfig } from "auklet";

export const config: AukletConfig = {
  modules: true,
  styles: {
    themes: {
      dark: "./src/themes/dark.css",
      light: "./src/themes/light.css",
    },
    dependencies: {
      "@willa-ui/content": {
        entry: "/style.css",
        components: "/components/**.css",
        themes: {
          dark: "/themes/dark.css",
          light: "/themes/light.css",
        },
      },
    },
  },
};
