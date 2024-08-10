import TeamScore from './TeamScore'
import PlayByPlay from './PlayByPlay'
import HideScore from './HideScore'

export default function ScoreBug({ game }: { game: MLB.ScheduleGame }) {
	return (
		<dl
			className="scorebug group/scorebug relative grid grid-cols-[1fr,auto,1fr] gap-x-3 gap-y-1 overflow-hidden px-2 py-1 @container *:leading-none"
			tabIndex={0}
		>
			<TeamScore side="away" game={game} className="[&_.colors]:top-0" />
			<TeamScore side="home" game={game} className="[&_.colors]:bottom-0" />

			<div className="relative col-[3/4] row-[1/3] grid hide-score:invisible">
				<PlayByPlay game={game} />
			</div>

			<HideScore game={game} />
		</dl>
	)
}
