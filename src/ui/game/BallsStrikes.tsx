import Panel from '../Panel'
import { cn } from '@/lib/utils'

export default function BallsStrikes({
	balls,
	strikes,
	className,
}: {
	balls?: number
	strikes?: number
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('flex shrink-0 text-center tabular-nums', className)}
			title="Balls-Strikes"
		>
			<Panel className="w-[1ch] text-green-700">{balls}</Panel>
			{'-'}
			<Panel className="w-[1ch] text-amber-500">{strikes}</Panel>
		</div>
	)
}
