'use client'

import { liveMLB } from '@/lib/mlb'
import Panel from '../Panel'

export default function Score({
	game,
	side,
}: {
	game: MLB.ScheduleGame
	side: 'away' | 'home'
}) {
	const { data } = liveMLB<MLB.LiveData>(game.link)

	const { runs } = data?.liveData.linescore.teams[side] || {}

	return (
		<Panel tag="b" className="text-2xl leading-none">
			{runs}
		</Panel>
	)
}
