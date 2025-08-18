import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // To add only specific polyfills, add them here.
      include: ["buffer", "process"],
      // To also polyfill globals like `Buffer` and `process`
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      // To override the default polyfills for specific modules.
      overrides: {
        fs: "memfs", // Example of a custom polyfill
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
