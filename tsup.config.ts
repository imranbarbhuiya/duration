import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	entry: ['src/index.ts'],
	format: ['esm', 'cjs', 'iife'],
	minify: false,
	skipNodeModulesBundle: true,
	sourcemap: true,
	target: 'es2021',
	keepNames: true,
	globalName: 'duration',
	tsconfig: 'src/tsconfig.json'
});
