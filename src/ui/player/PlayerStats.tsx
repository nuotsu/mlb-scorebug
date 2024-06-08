import { fetchMLB } from '@/lib/mlb'
import SelectPlayer from './SelectPlayer'

export default async function PlayerStats({}: {}) {
	const { people } = await fetchMLB<{ people: MLB.Player[] }>(
		'/sports/1/players',
	)

	return (
		<article className="md:sticky-below-header">
			<h2>Players</h2>

			<SelectPlayer players={people} />
		</article>
	)
}
