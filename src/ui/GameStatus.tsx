type States = MLB.GameStatus['detailedState'][]

const { format } = new Intl.DateTimeFormat('en-US', {
	hour: 'numeric',
	minute: 'numeric',
	timeZoneName: 'shortGeneric',
})

export default function GameStatus({ game }: { game: MLB.ScheduleGame }) {
	return (
		<div className="m-auto grid gap-1 text-center">
			<div>{game.status.detailedState}</div>

			{(['Scheduled', 'Pre-Game', 'Warmup'] as States).includes(
				game.status.detailedState,
			) && (
				<time className="text-xs" dateTime={game.gameDate}>
					{format(new Date(game.gameDate))}
				</time>
			)}
		</div>
	)
}
