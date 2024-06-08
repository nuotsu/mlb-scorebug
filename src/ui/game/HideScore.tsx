import { BiShow, BiHide } from 'react-icons/bi'

export default function HideScore() {
	return (
		<div className="anim-fade-to-l absolute inset-y-0 right-0 hidden place-content-center gap-2 px-4 group-hover:grid group-focus-visible:grid hide-score:grid">
			<div className="blur-gradient-to-l absolute inset-0 -left-16 [--amount:50%]" />

			<label className="relative flex gap-2">
				<input className="hide-score" type="checkbox" hidden />

				<span className="with-icon text-sm hide-score:hidden">
					Hide score
					<BiHide className="text-lg" />
				</span>

				<span className="with-icon text-sm show-score:hidden">
					Show score
					<BiShow className="text-lg" />
				</span>
			</label>
		</div>
	)
}
