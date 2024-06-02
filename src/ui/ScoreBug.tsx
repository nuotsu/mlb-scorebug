import TeamScore from './TeamScore'

export default function ScoreBug({ game }: { game: MLB.ScheduleGame }) {
	return (
		<article className="grid gap-1 px-2 py-1">
			<TeamScore side="away" team={game.teams.away} game={game} />
			<TeamScore side="home" team={game.teams.home} game={game} />
		</article>
	)
}
