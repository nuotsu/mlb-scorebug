import { cn } from '@/lib/utils'

export default function BaseRunners({ runners }: { runners?: number[] }) {
	return (
		<div className="grid rotate-45 grid-cols-2 gap-[2px]" title="Base runners">
			{[1, 0, 2].map((i) => (
				<div
					className={cn(
						'aspect-square size-2 transition-colors @sm:size-3',
						runners?.includes(i)
							? 'bg-amber-400'
							: 'bg-ink/10 dark:bg-canvas/15',
					)}
					key={i}
				/>
			))}
		</div>
	)
}

const runnerKeys: Record<string, number> = {
	first: 0,
	second: 1,
	third: 2,
}

export function getRunners(linescore: MLB.LiveLineScore) {
	return Object.keys(linescore.offense)
		.map((key) => runnerKeys[key])
		.filter(Number.isInteger)
}
