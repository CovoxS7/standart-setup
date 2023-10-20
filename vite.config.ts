import { defineConfig } from "vite";
import * as path from "path";

export default defineConfig({
  root: "src",
  assetsInclude: ["./assets/**/*.*"],
  base: "",
  build: {
    emptyOutDir: true,
    outDir: "../dist",
  },
  publicDir: "assets",
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
});
