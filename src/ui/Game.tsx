'use client'

import { liveMLB } from '@/lib/mlb'
import WinProbability from './WinProbability'

export default function Game({ game }: { game: MLB.ScheduleGame }) {
	const { data } = liveMLB<any>(`/game/${game.gamePk}/winProbability`)

	return (
		<div className="flex items-center gap-x-4">
			<span>
				{game.teams.away.team.name}
				{' @ '}
				{game.teams.home.team.name}
			</span>

			<WinProbability dataset={data} />
		</div>
	)
}
