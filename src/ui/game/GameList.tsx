import { fetchMLB } from '@/lib/mlb'
import ScoreBug from '@/ui/game/ScoreBug'
import formatDate from '@/lib/formatDate'
import { cn } from '@/lib/utils'

export default async function GameList() {
	const { dates } = await fetchMLB<MLB.Schedule>('/schedule', {
		sportId: '1',
	})

	const today = dates?.[0]

	return (
		<section>
			<h2 className="p-2 text-center">
				<b>{today?.totalGames} Games</b> for <b>{formatDate(today?.date)}</b>
			</h2>

			<ul className="max-sm:full-bleed grid border border-b-0">
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
