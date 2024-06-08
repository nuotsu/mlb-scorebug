import PlayerStats from '@/ui/player/PlayerStats'
import GameList from '@/ui/game/GameList'

export default function Page() {
	return (
		<section className="grid gap-4 p-4 md:grid-cols-2">
			<PlayerStats />
			<GameList />
		</section>
	)
}
