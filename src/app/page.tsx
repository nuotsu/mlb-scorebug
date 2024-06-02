'use client'

import { liveMLB } from '@/lib/mlb'
import Game from '@/ui/Game'

export default function Page() {
	const { data, isLoading } = liveMLB<MLB.Schedule>('/schedule', {
		sportId: '1',
	})

	const date = data?.dates?.[0]

	return (
		<section>
			<h1>MLB ScoreBug</h1>

			{isLoading && <p>Loading...</p>}

			<h2>
				{date?.totalGames} Games for {date?.date}
			</h2>

			<ul>
				{date?.games?.map((game) => (
					<li key={game.gamePk} data-gamePk={game.gamePk}>
						<Game game={game} />
					</li>
				))}
			</ul>
		</section>
	)
}
