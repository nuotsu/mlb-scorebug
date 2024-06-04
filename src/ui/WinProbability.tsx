'use client'

import { getWinnerProb } from '@/lib/mlb'
import Panel from './Panel'

export default function WinProbability({
	game,
	side,
}: {
	game: MLB.ScheduleGame
	side: 'away' | 'home'
}) {
	const { team: winner, probability } = getWinnerProb(game)

	return (
		side === winner &&
		probability !== 50 &&
		game.status.detailedState === 'In Progress' && (
			<strong className="pill anim-fade shrink-0 bg-green-100 text-xxs tabular-nums text-green-600">
				<Panel>{probability?.toFixed(1)}%</Panel>
			</strong>
		)
	)
}
