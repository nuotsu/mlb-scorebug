'use client'

import { liveMLB } from '@/lib/mlb'
import ScoreBug from '@/ui/game/ScoreBug'
import formatDate from '@/lib/formatDate'
import { cn } from '@/lib/utils'

export default function GameList() {
	const { data } = liveMLB<MLB.Schedule>('/schedule', {
		sportId: '1',
	})

	const today = data?.dates?.[0]

	if (!today) return null

	return (
		<section>
			<h2 className="p-2 text-center text-sm">
				<b>{today?.totalGames} Games</b> for <b>{formatDate(today?.date)}</b>
			</h2>

			<ul className="max-sm:full-bleed grid border-4 border-b-[3px] dark:border-canvas/15">
				{today?.games?.map((game) => (
					<li
						className={cn(
							'border-b-[.5px] dark:border-[inherit]',
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
