'use client'

import { getWinnerProb } from '@/lib/mlb'
import Panel from './Panel'

export default function WinProbability({
	side,
	game,
}: {
	side: 'away' | 'home'
	game: MLB.ScheduleGame
}) {
	const { team: winner, probability } = getWinnerProb(game)

	return (
		side === winner &&
		probability !== 50 &&
		game.status.detailedState === 'In Progress' && (
			<strong className="pill shrink-0 bg-green-100 text-xxs tabular-nums text-green-600">
				<Panel>{probability?.toFixed(1)}%</Panel>
			</strong>
		)
	)
}
