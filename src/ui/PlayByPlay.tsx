import BaseRunners from './BaseRunners'
import OutCount from './OutCount'
import Inning from './Inning'
import BallsStrikes from './BallsStrikes'
import Panel from './Panel'
import Marquee from './Marquee'
import { cn } from '@/lib/utils'

export default function PlayByPlay({ data }: { data?: MLB.LiveData }) {
	const { linescore } = data?.liveData || {}

	if (!linescore) return null

	const isMiddle = linescore.inningState === 'Middle'
	const { currentPlay, allPlays } = data?.liveData.plays || {}

	return (
		<div className="flex items-center gap-4">
			<div
				className={cn(
					'grid transition-opacity *:m-auto',
					isMiddle && 'opacity-40',
				)}
			>
				<BaseRunners
					runners={!isMiddle ? allPlays?.[0]?.runnerIndex : undefined}
				/>
				<OutCount value={!isMiddle ? linescore.outs : undefined} />
			</div>

			<div className="flex flex-col items-center justify-center gap-x-3 gap-y-1 @xs:flex-row">
				<BallsStrikes
					className={cn('transition-opacity', isMiddle && 'opacity-10')}
					balls={!isMiddle ? linescore.balls : 0}
					strikes={!isMiddle ? linescore.strikes : 0}
				/>
				<Inning
					className="order-first text-sm @xs:order-last"
					linescore={linescore}
				/>
			</div>

			<div
				className={cn(
					'transtion-opaciity hidden flex-wrap gap-x-1 text-xs @xl:flex @2xl:text-base',
					isMiddle && 'opacity-10',
				)}
			>
				AB: <Panel>{linescore.offense.batter.fullName}</Panel>
			</div>

			<Marquee className="absolute -inset-x-2 -bottom-1 text-xxs">
				{currentPlay?.result.description}
			</Marquee>
		</div>
	)
}
