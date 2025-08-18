// vite.config.ts
import { defineConfig } from "file:///Users/stanly/Documents/GuildMaster/node_modules/vite/dist/node/index.js";
import react from "file:///Users/stanly/Documents/GuildMaster/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { nodePolyfills } from "file:///Users/stanly/Documents/GuildMaster/node_modules/vite-plugin-node-polyfills/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      // To add only specific polyfills, add them here.
      include: ["buffer", "process"],
      // To also polyfill globals like `Buffer` and `process`
      globals: {
        Buffer: true,
        global: true,
        process: true
      },
      // To override the default polyfills for specific modules.
      overrides: {
        fs: "memfs"
        // Example of a custom polyfill
      }
    })
  ],
  optimizeDeps: {
    exclude: ["lucide-react"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc3Rhbmx5L0RvY3VtZW50cy9HdWlsZE1hc3RlclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3N0YW5seS9Eb2N1bWVudHMvR3VpbGRNYXN0ZXIvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3N0YW5seS9Eb2N1bWVudHMvR3VpbGRNYXN0ZXIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgbm9kZVBvbHlmaWxscyB9IGZyb20gXCJ2aXRlLXBsdWdpbi1ub2RlLXBvbHlmaWxsc1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgbm9kZVBvbHlmaWxscyh7XG4gICAgICAvLyBUbyBhZGQgb25seSBzcGVjaWZpYyBwb2x5ZmlsbHMsIGFkZCB0aGVtIGhlcmUuXG4gICAgICBpbmNsdWRlOiBbXCJidWZmZXJcIiwgXCJwcm9jZXNzXCJdLFxuICAgICAgLy8gVG8gYWxzbyBwb2x5ZmlsbCBnbG9iYWxzIGxpa2UgYEJ1ZmZlcmAgYW5kIGBwcm9jZXNzYFxuICAgICAgZ2xvYmFsczoge1xuICAgICAgICBCdWZmZXI6IHRydWUsXG4gICAgICAgIGdsb2JhbDogdHJ1ZSxcbiAgICAgICAgcHJvY2VzczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAvLyBUbyBvdmVycmlkZSB0aGUgZGVmYXVsdCBwb2x5ZmlsbHMgZm9yIHNwZWNpZmljIG1vZHVsZXMuXG4gICAgICBvdmVycmlkZXM6IHtcbiAgICAgICAgZnM6IFwibWVtZnNcIiwgLy8gRXhhbXBsZSBvZiBhIGN1c3RvbSBwb2x5ZmlsbFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgZXhjbHVkZTogW1wibHVjaWRlLXJlYWN0XCJdLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJSLFNBQVMsb0JBQW9CO0FBQ3hULE9BQU8sV0FBVztBQUNsQixTQUFTLHFCQUFxQjtBQUc5QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUE7QUFBQSxNQUVaLFNBQVMsQ0FBQyxVQUFVLFNBQVM7QUFBQTtBQUFBLE1BRTdCLFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNYO0FBQUE7QUFBQSxNQUVBLFdBQVc7QUFBQSxRQUNULElBQUk7QUFBQTtBQUFBLE1BQ047QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsY0FBYztBQUFBLEVBQzFCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
