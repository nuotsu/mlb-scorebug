'use client'

import { liveMLB } from '@/lib/mlb'
import ScoreBug from '@/ui/ScoreBug'
import Loading from './Loading'
import { cn } from '@/lib/utils'

export default function GameList() {
	const { data, isLoading } = liveMLB<MLB.Schedule>('/schedule', {
		sportId: '1',
	})

	const today = data?.dates?.[0]

	if (isLoading) return <Loading what="today's games" />

	return (
		<section>
			<h2>
				{today?.totalGames} Games for {today?.date}
			</h2>

			<ul className="grid border border-b-0">
				{today?.games?.map((game) => (
					<li
						className={cn(
							'border-b',
							game.status.abstractGameState !== 'Final' && 'order-first',
						)}
						key={game.gamePk}
					>
						<ScoreBug game={game} />
					</li>
				))}
			</ul>
		</section>
	)
}
