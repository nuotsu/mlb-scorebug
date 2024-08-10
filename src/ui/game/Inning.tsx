import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc'
import Panel from '../Panel'
import { cn } from '@/lib/utils'

export default function Inning({
	linescore,
	className,
}: {
	linescore?: MLB.LiveLineScore
} & React.HTMLAttributes<HTMLDivElement>) {
	if (!linescore) return null

	return (
		<div
			className={cn('with-icon gap-1 text-xs @2xl:text-base', className)}
			key={
				linescore.inningState + linescore.currentInning + linescore.isTopInning
			}
		>
			<Panel>{linescore.currentInningOrdinal}</Panel>

			<div className="grid text-xs *:my-[-2px] *:transition-opacity">
				<VscTriangleUp
					className={cn(
						linescore.inningState === 'Top'
							? 'text-orange-500'
							: 'text-ink/10 dark:text-canvas/15',
					)}
				/>
				<VscTriangleDown
					className={cn(
						linescore.inningState === 'Bottom'
							? 'text-orange-500'
							: 'text-ink/10 dark:text-canvas/15',
					)}
				/>
			</div>
		</div>
	)
}
