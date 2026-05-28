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
    dependencies: {
      "@willa-ui/content": styleDependency,
      "@willa-ui/widgets": styleDependency,
    },
  },
});
