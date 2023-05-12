import { defineConfig } from "tsup"

export default defineConfig({
	entry: ["src/index.ts"],
	outDir: "dist",
	splitting: false,
	sourcemap: true,
	clean: true,
	minify: true,
	format: ["cjs", "esm"],
	dts: true,
})
