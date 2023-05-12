import { defineConfig } from "tsup"

export default defineConfig({
	entry: ["src/index.tsx"],
	outDir: "dist",
	external: ["react"],
	format: ["cjs", "esm"],
	splitting: false,
	sourcemap: true,
	clean: true,
	minify: true,
	dts: true,
})
