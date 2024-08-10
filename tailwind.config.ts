import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				ink: '#000',
				canvas: '#fff',
			},
			fontFamily: {
				sans: `'Chakra Petch', sans-serif`,
			},
			fontSize: {
				xxs: 'xx-small',
			},
		},
	},
	plugins: [
		require('@tailwindcss/container-queries'),
		plugin(function ({ addVariant }) {
			addVariant('hide-score', '.scorebug:has(.hide-score:checked) &')
			addVariant('show-score', '.scorebug:has(.hide-score:not(:checked)) &')
		}),
	],
}

export default config
