import Wrapper from './Wrapper'
import Ball from './Ball'

export default function Header() {
	return (
		<Wrapper className="blur-gradient-to-b sticky top-0 z-20 p-4 text-center">
			<h1 className="text-2xl font-bold">
				<Ball /> MLB ScoreBug
			</h1>
		</Wrapper>
	)
}
