import TeamScore from './TeamScore'
import PlayByPlay from './PlayByPlay'

export default function ScoreBug({ game }: { game: MLB.ScheduleGame }) {
	return (
		<dl className="grid grid-cols-[1fr,auto,1fr] gap-x-3 gap-y-1 px-2 py-1 @container *:leading-none">
			<TeamScore side="away" game={game} />
			<TeamScore side="home" game={game} />

			<div className="relative col-[3/4] row-[1/3] grid">
				<PlayByPlay game={game} />
			</div>
		</dl>
	)
}
