import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontSize: {
				xxs: 'xx-small',
			},
		},
	},
	plugins: [],
}

export default config
