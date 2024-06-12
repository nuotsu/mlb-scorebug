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
			className={cn('flex shrink-0 tabular-nums', className)}
			title="Balls-Strikes"
		>
			<Panel className="text-green-700">{balls}</Panel>
			{'-'}
			<Panel className="text-amber-500">{strikes}</Panel>
		</div>
	)
}
