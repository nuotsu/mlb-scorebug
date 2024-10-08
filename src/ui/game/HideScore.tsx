'use client'

import { useEffect, useRef } from 'react'
import { BiShow, BiHide } from 'react-icons/bi'

export default function HideScore({ game }: { game: MLB.ScheduleGame }) {
	const ref = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (typeof window === 'undefined' || !ref.current) return
		if (sessionStorage.getItem(`hide-${game.gamePk}`) === 'true') {
			ref.current.checked = true
		}
	}, [])

	return (
		<div className="anim-fade-to-l absolute inset-y-0 right-0 hidden place-content-center gap-2 px-4 group-hover/scorebug:grid group-focus-visible/scorebug:grid hide-score:grid">
			<div className="blur-gradient-to-l absolute inset-0 -left-16 [--amount:50%]" />

			<label className="relative flex gap-2">
				<input
					ref={ref}
					className="hide-score"
					type="checkbox"
					hidden
					onChange={(e) => {
						if (typeof window === 'undefined') return

						if (e.target.checked) {
							sessionStorage.setItem(`hide-${game.gamePk}`, 'true')
						} else {
							sessionStorage.removeItem(`hide-${game.gamePk}`)
						}
					}}
				/>

				<span className="with-icon text-sm hide-score:hidden">
					Hide score
					<BiHide className="text-lg" />
				</span>

				<span className="with-icon text-sm show-score:hidden">
					Show score
					<BiShow className="text-lg" />
				</span>
			</label>
		</div>
	)
}
