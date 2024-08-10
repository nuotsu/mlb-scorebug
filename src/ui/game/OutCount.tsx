import { cn, count } from '@/lib/utils'

export default function OutCount({ value = 0 }: { value?: number }) {
	return (
		<div className="relative flex gap-1" title={count(value, 'out')}>
			{Array.from({ length: 3 }, (_, i) => (
				<div
					className={cn(
						'size-[6px] rounded-full transition-colors @sm:size-2',
						value >= i + 1 ? 'bg-red-600' : 'bg-ink/10 dark:bg-canvas/15',
					)}
					key={i}
				/>
			))}
		</div>
	)
}
