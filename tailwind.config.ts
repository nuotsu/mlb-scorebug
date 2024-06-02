import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				ink: '#000',
				canvas: '#fff',
			},
			fontSize: {
				xxs: 'xx-small',
			},
		},
	},
	plugins: [require('@tailwindcss/container-queries')],
}

export default config
