import { fetchMLB } from '@/lib/mlb'
import ScoreBug from '@/ui/ScoreBug'
import { cn } from '@/lib/utils'
import formatDate from '@/lib/formatDate'

export default async function GameList() {
	const { dates } = await fetchMLB<MLB.Schedule>('/schedule', {
		sportId: '1',
	})

	const today = dates?.[0]

	return (
		<section>
			<h2>
				{today?.totalGames} Games for {formatDate(today?.date)}
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
