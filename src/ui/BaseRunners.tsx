import { cn } from '@/lib/utils'

export default function BaseRunners({ runners }: { runners?: number[] }) {
	return (
		<div className="grid rotate-45 grid-cols-2 gap-[2px]" title="Base runners">
			{[1, 0, 2].map((i) => (
				<div
					className={cn(
						'aspect-square size-2 transition-colors @sm:size-3',
						runners?.includes(i) ? 'bg-current' : 'bg-ink/10',
					)}
					key={i}
				/>
			))}
		</div>
	)
}
