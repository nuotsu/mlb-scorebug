import formatDate from '@/lib/formatDate'

type States = MLB.GameStatus['detailedState'][]

export default function GameStatus({ game }: { game: MLB.ScheduleGame }) {
	return (
		<div className="m-auto grid gap-1 text-center">
			<div>{game.status.detailedState}</div>

			{(['Scheduled', 'Pre-Game', 'Warmup'] as States).includes(
				game.status.detailedState,
			) && (
				<time className="text-xs" dateTime={game.gameDate}>
					{formatDate(game.gameDate, {
						hour: 'numeric',
						minute: 'numeric',
						timeZoneName: 'shortGeneric',
					})}
				</time>
			)}
		</div>
	)
}
