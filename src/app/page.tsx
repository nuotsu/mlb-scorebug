'use client'

import { liveMLB } from '@/lib/mlb'
import ScoreBug from '@/ui/ScoreBug'

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

			<ul className="border">
				{date?.games?.map((game) => (
					<li className="[&+&]:border-t" key={game.gamePk}>
						<ScoreBug game={game} />
					</li>
				))}
			</ul>
		</section>
	)
}
