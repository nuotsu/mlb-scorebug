import { cn, count } from '@/lib/utils'

export default function OutCount({ value = 0 }: { value?: number }) {
	return (
		<div className="relative flex gap-1" title={count(value, 'out')}>
			{Array.from({ length: 3 }, (_, i) => (
				<div
					className={cn(
						'@sm:size-2 size-[6px] rounded-full transition-colors',
						value >= i + 1 ? 'bg-current' : 'bg-ink/10',
					)}
					key={i}
				/>
			))}
		</div>
	)
}
