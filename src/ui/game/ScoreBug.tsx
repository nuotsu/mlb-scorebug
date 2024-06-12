import TeamScore from './TeamScore'
import PlayByPlay from './PlayByPlay'
import HideScore from './HideScore'

export default function ScoreBug({ game }: { game: MLB.ScheduleGame }) {
	return (
		<dl
			className="scorebug group relative grid grid-cols-[1fr,auto,1fr] gap-x-3 gap-y-1 overflow-hidden px-2 py-1 @container *:leading-none"
			tabIndex={0}
		>
			<TeamScore side="away" game={game} />
			<TeamScore side="home" game={game} />

			<div className="relative col-[3/4] row-[1/3] grid hide-score:invisible">
				<PlayByPlay game={game} />
			</div>

			<HideScore game={game} />
		</dl>
	)
}
