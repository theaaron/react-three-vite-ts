import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glsl from "vite-plugin-glsl";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
      output: {
        entryFileNames: "bundle.js",
        assetFileNames: "[name].[ext]",
        inlineDynamicImports: true,
        format: "iife",
        manualChunks: undefined,
      },
    },
    cssCodeSplit: true, // This ensures CSS is in separate files
  },
  plugins: [react(), glsl()],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".glsl"],
  },
});
