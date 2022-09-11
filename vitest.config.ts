import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		globals: true,
		globalSetup: './globalDateTimezone.ts',
		coverage: {
			enabled: true,
			reporter: ['text', 'lcov', 'clover']
		}
	}
});
