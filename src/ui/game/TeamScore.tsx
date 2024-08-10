'use client'

import { getTeamMeta } from '@/lib/mlb'
import WinProbability from './WinProbability'
import Score from './Score'
import { cn } from '@/lib/utils'

export default function TeamScore({
	side,
	game,
}: {
	side: 'away' | 'home'
	game: MLB.ScheduleGame
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
				)}
			>
				<figure
					className="aspect-square size-6 shrink-0 bg-contain bg-center bg-no-repeat"
					style={{
						backgroundImage:
							meta &&
							`url(https://www.mlbstatic.com/team-logos/team-cap-on-light/${meta?.id}.svg)`,
					}}
				/>

				<div className="flex flex-wrap items-center gap-1 @xs:flex-nowrap">
					<abbr className="shrink-0 no-underline *:hidden" title={meta?.name}>
						<span className="@xs:block @md:hidden">{meta?.abbreviation}</span>
						<span className="@md:block @xl:hidden">{meta?.teamName}</span>
						<span className="@xl:block">{meta?.name}</span>
					</abbr>

					<small className="shrink-0 text-[xx-small]" title="Wins-Losses">
						({team.leagueRecord.wins}-{team.leagueRecord.losses})
					</small>

					<WinProbability game={game} side={side} />
				</div>
			</dt>

			<dd className="w-[3ch] text-center hide-score:invisible">
				<Score game={game} side={side} />
			</dd>
		</>
	)
}
