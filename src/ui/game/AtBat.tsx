import { liveMLB } from '@/lib/mlb'
import Panel from '../Panel'

export default function AtBat({ linescore }: { linescore: MLB.LiveLineScore }) {
	const { data } = liveMLB<{ people: MLB.Player[] }>(
		linescore.offense.batter.link,
	)

	const batter = data?.people?.[0]

	return (
		<div className="hidden gap-1 overflow-hidden whitespace-nowrap text-xs *:ml-auto *:flex *:gap-x-1 @xl:grid">
			<div>
				P: <Panel>{linescore.defense.pitcher.fullName}</Panel>
			</div>
			<div>
				{'AB: '}
				<Panel>
					{linescore.offense.batter.fullName}{' '}
					{batter && (
						<small className="opacity-60">
							{batter.primaryPosition.abbreviation}
						</small>
					)}
				</Panel>
			</div>
		</div>
	)
}
