'use client'

import { liveMLB } from '@/lib/mlb'
import TeamScore from './TeamScore'
import PlayByPlay from './PlayByPlay'

type State = MLB.GameStatus['detailedState'][]

const reviewStates = ['Umpire review', 'Manager challenge']

export default function ScoreBug({ game }: { game: MLB.ScheduleGame }) {
	const { data } = liveMLB<MLB.LiveData>(game.link)

	const isLive = (['In Progress', ...reviewStates] as State).includes(
		game.status.detailedState,
	)

	const inReview = reviewStates.includes(game.status.detailedState)

	return (
		<dl className="grid grid-cols-[1fr,auto,1fr] gap-x-3 gap-y-1 px-2 py-1 @container *:leading-none">
			<TeamScore side="away" game={game} />
			<TeamScore side="home" game={game} />

			<div className="relative col-[3/4] row-[1/3] grid place-content-center">
				{isLive ? (
					<>
						{inReview && (
							<p className="absolute -inset-x-2 -top-1 text-center text-xxs">
								{game.status.detailedState}
							</p>
						)}

						<PlayByPlay data={data} />
					</>
				) : (
					game.status.detailedState
				)}
			</div>
		</dl>
	)
}
