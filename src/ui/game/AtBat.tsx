import Panel from '../Panel'

export default function AtBat({ linescore }: { linescore: MLB.LiveLineScore }) {
	return (
		<div className="hidden gap-1 overflow-hidden whitespace-nowrap text-xs *:ml-auto *:flex *:gap-x-1 @xl:grid">
			<div>
				P: <Panel>{linescore.defense.pitcher.fullName}</Panel>
			</div>
			<div>
				AB: <Panel>{linescore.offense.batter.fullName}</Panel>
			</div>
		</div>
	)
}
