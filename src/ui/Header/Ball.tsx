'use client'

import { useEffect, useState } from 'react'

export default function Ball() {
	const [rotate, setRotate] = useState(0)

	useEffect(() => {
		if (typeof window === 'undefined') return

		function handleScroll() {
			setRotate(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<span
			className="inline-block will-change-transform"
			style={{ rotate: `${rotate}deg` }}
		>
			⚾
		</span>
	)
}
