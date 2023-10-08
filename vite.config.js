import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // set the base path
  build: {
    outDir: "dist", // specify the output directory
  },
});
