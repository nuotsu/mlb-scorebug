import TeamScore from './TeamScore'

export default function ScoreBug({ game }: { game: MLB.ScheduleGame }) {
	return (
		<article>
			<TeamScore side="home" team={game.teams.home} game={game} />
			<TeamScore side="away" team={game.teams.away} game={game} />
		</article>
	)
}
