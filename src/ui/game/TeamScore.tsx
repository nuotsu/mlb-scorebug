'use client'

import { getTeamMeta } from '@/lib/mlb'
import Logo from './Logo'
import WinProbability from './WinProbability'
import Score from './Score'
import { cn } from '@/lib/utils'

export default function TeamScore({
	side,
	game,
	className,
}: {
	side: 'away' | 'home'
	game: MLB.ScheduleGame
	className?: string
}) {
	const team = game.teams[side]
	const meta = getTeamMeta(team.team)

	return (
		<>
			<dt
				className={cn(
					'flex w-[3ch] items-center gap-2',
					game.status.abstractGameState === 'Final' &&
						team?.isWinner &&
						'show-score:font-semibold',
					className,
				)}
				style={
					{
						'--light': `url(//www.mlbstatic.com/team-logos/team-cap-on-light/${meta?.id}.svg)`,
						'--dark': `url(//www.mlbstatic.com/team-logos/team-cap-on-dark/${meta?.id}.svg)`,
					} as React.CSSProperties
				}
			>
				<Logo />

				<div
					className="anim-fade-to-r xs:flex-wrap flex items-center gap-1 has-[abbr>*:empty]:invisible @xs:flex-nowrap"
					key={meta?.name}
				>
					<abbr className="shrink-0 no-underline" title={meta?.name}>
						<span className="@md:hidden">{meta?.abbreviation}</span>
						<span className="hidden @md:block @xl:hidden">
							{meta?.teamName}
						</span>
						<span className="hidden @xl:block">{meta?.name}</span>
					</abbr>

					<small
						className="hidden shrink-0 text-[xx-small] opacity-60 @xs:block"
						title="Wins-Losses"
					>
						({team.leagueRecord.wins}-{team.leagueRecord.losses})
					</small>

					<WinProbability game={game} side={side} />
				</div>
			</dt>

			<dd className="w-[3ch] text-center group-has-[time]/scorebug:opacity-20 hide-score:invisible">
				<Score game={game} side={side} />
			</dd>
		</>
	)
}
