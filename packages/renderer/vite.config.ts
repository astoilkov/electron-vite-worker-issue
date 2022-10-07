import { defineConfig } from "vite";
import pkg from "../../package.json";
import { builtinModules } from "module";
import renderer from "vite-plugin-electron-renderer";

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  // mode: process.env.NODE_ENV,
  base: "./",
  plugins: [
    renderer({
      resolve() {
        return ["graceful-fs"];
      },
    }),
  ],
  build: {
    outDir: "../../dist/renderer",
    emptyOutDir: true,
    sourcemap: true,
  },
  worker: {
    rollupOptions: {
      external: ["electron", ...builtinModules],
    },
  },
  server: process.env.VSCODE_DEBUG
    ? {
        host: pkg.debug.env.VITE_DEV_SERVER_HOSTNAME,
        port: pkg.debug.env.VITE_DEV_SERVER_PORT,
      }
    : undefined,
});
