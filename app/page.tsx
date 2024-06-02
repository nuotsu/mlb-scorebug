'use client'

import { liveMLB } from './lib/mlb'

export default function Page() {
	const { data, isLoading } = liveMLB<MLB.Schedule>('/schedule', {
		sportId: '1',
	})

	const { games } = data?.dates?.[0] ?? {}

	return (
		<section>
			<h1>MLB ScoreBug</h1>

			{isLoading && <p>Loading...</p>}

			<ul>
				{games?.map((game) => (
					<li key={game.calendarEventID}>
						{game.teams.away.team.name}
						{' @ '}
						{game.teams.home.team.name}
					</li>
				))}
			</ul>
		</section>
	)
}
