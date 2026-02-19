import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: "src/main.js",
			name: "BubbleJS",
			fileName: (format) => format === "es" ? "main.js" : "main.cjs",
			formats: ["es", "cjs"]
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"]
		}
	}
})