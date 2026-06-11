import { defineConfig } from "auklet";

const styleDependency = {
  entry: "/style.css",
  components: "/components/**.css",
  themes: {
    dark: "/themes/dark.css",
    light: "/themes/light.css",
  },
};

export const config = defineConfig({
  modules: true,
  styles: {
    themes: {
      dark: "./src/themes/dark.css",
      light: "./src/themes/light.css",
    },
    dependencies: {
      "@willa-ui/layout": styleDependency,
    },
  },
});
