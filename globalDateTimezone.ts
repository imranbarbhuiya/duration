import process from 'node:process'

export function setup() {
	process.env.TZ = 'UTC';
}
