'use client'

import { useEffect, useRef, useState } from 'react'
import Confetti from 'react-confetti'
import { createPortal } from 'react-dom'

export default function Homerun({ play }: { play?: string }) {
	if (!play) return null

	const [parent, setParent] = useState<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!ref.current) return
		setParent(ref.current.closest('.scorebug') as HTMLDivElement)
	}, [play])

	const ref = useRef<HTMLDivElement>(null)

	const scoringPlay = ['homers', 'scores'].some((type) => play?.includes(type))

	return (
		<div className="empty:hidden" ref={ref} key={play}>
			{scoringPlay &&
				parent &&
				createPortal(<Confetti className="hide-score:hidden" />, parent)}
		</div>
	)
}
