// https://github.com/raycast/extensions/tree/d126453f74f9e5d05f260ead5ec56a7743a416e8/extensions/mlb-scores/src/interfaces

declare global {
	namespace MLB {
		type Schedule = import('./schedule').default
	}
}

export {}
