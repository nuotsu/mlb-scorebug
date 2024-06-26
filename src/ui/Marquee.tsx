import { cn } from '@/lib/utils'

export default function Marquee({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	if (!children) return null

	return (
		// @ts-ignore
		<marquee className={cn('absolute -inset-x-2 text-xxs', className)}>
			{children}
			{/* @ts-ignore */}
		</marquee>
	)
}
