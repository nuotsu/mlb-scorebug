import Panel from './Panel'
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
			<Panel>{balls}</Panel>-<Panel>{strikes}</Panel>
		</div>
	)
}
