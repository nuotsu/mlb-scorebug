'use client'

import { liveMLB } from '@/lib/mlb'
import Loading from './Loading'
import BaseRunners from './BaseRunners'
import OutCount from './OutCount'
import Inning from './Inning'
import BallsStrikes from './BallsStrikes'
import Panel from './Panel'
import Marquee from './Marquee'
import { cn } from '@/lib/utils'

type States = MLB.GameStatus['detailedState'][]

const reviewStates: States = ['Umpire review', 'Manager challenge']

export default function PlayByPlay({ game }: { game: MLB.ScheduleGame }) {
	const { data } = liveMLB<MLB.LiveData>(game.link)
	const { currentPlay } = data?.liveData.plays || {}
	const inReview = reviewStates.includes(game.status.detailedState)

	const isLive = (['In Progress', ...reviewStates] as States).includes(
		data?.gameData.status.detailedState!,
	)

	const { linescore } = data?.liveData || {}
	if (!linescore) return <Loading />

	const isMiddle = linescore.inningState === 'Middle'

	if (!isLive) return <div className="m-auto">{game.status.detailedState}</div>

	return (
		<>
			{inReview && (
				<p className="absolute -inset-x-2 -top-1 text-center text-xxs">
					{game.status.detailedState}
				</p>
			)}

			<Marquee className="absolute -inset-x-2 -bottom-1 text-xxs">
				{currentPlay?.result.description}
			</Marquee>

			<div className="flex items-center gap-4">
				<div className="ml-auto grid transition-opacity *:m-auto @xl:ml-0">
					<BaseRunners
						runners={!isMiddle ? currentPlay?.runnerIndex : undefined}
					/>
					<OutCount value={!isMiddle ? linescore.outs : undefined} />
				</div>

				<div className="mr-auto flex flex-col items-center justify-center gap-x-3 gap-y-1 @xs:flex-row">
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

				<div className="transtion-opaciity hidden gap-1 overflow-hidden whitespace-nowrap text-xs *:ml-auto *:flex *:gap-x-1 @xl:grid">
					<div>
						P: <Panel>{linescore.defense.pitcher.fullName}</Panel>
					</div>
					<div>
						AB: <Panel>{linescore.offense.batter.fullName}</Panel>
					</div>
				</div>
			</div>
		</>
	)
}
