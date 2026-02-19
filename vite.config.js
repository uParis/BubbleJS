import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: "src/main.js",
            name: "BubbleJS",
            fileName: "main"
        },
        rollupOptions: {
            external: ["react", "react-dom"]
        }
    }
})