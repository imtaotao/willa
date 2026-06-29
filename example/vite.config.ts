import { defineConfig } from "vite";
import { aukletStylePlugin } from "auklet";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/willa/",
  plugins: [aukletStylePlugin({ mode: "monorepo" }), tsconfigPaths()],
  server: {
    port: 2334,
  },
});
