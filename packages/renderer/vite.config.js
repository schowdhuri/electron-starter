/* eslint-env node */

import { chrome } from "../../.electron-vendors.cache.json";
import { join } from "path";
import { builtinModules } from "module";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

const PACKAGE_ROOT = __dirname;

/**
 * @type {import('vite').UserConfig}
 * @see https://vitejs.dev/config/
 */
const config = {
  mode: process.env.MODE,
  root: PACKAGE_ROOT,
  resolve: {
    alias: {
      "@atoms/": join(PACKAGE_ROOT, "src", "components", "atoms") + "/",
      "@constants/": join(PACKAGE_ROOT, "src", "constants") + "/",
      "@molecules/": join(PACKAGE_ROOT, "src", "components", "molecules") + "/",
      "@organisms/": join(PACKAGE_ROOT, "src", "components", "organisms") + "/",
      "@pages/": join(PACKAGE_ROOT, "src", "pages") + "/",
      "@src/": join(PACKAGE_ROOT, "src") + "/",
      "@templates/": join(PACKAGE_ROOT, "src", "components", "templates") + "/",
      "@utils/": join(PACKAGE_ROOT, "src", "utils") + "/",
    },
  },
  plugins: [
    react(),
    svgrPlugin({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  base: "",
  server: {
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
    target: `chrome${chrome}`,
    outDir: "dist",
    assetsDir: ".",
    rollupOptions: {
      input: join(PACKAGE_ROOT, "index.html"),
      external: [...builtinModules.flatMap((p) => [p, `node:${p}`])],
    },
    emptyOutDir: true,
    brotliSize: false,
  },
  test: {
    environment: "happy-dom",
  },
};

export default config;
