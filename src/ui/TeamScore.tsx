'use client'

import { getTeamMeta, getWinnerProb } from '@/lib/mlb'
import { cn } from '@/lib/utils'
import Panel from './Panel'

export default function TeamScore({
	side,
	game,
}: {
	side: 'away' | 'home'
	game: MLB.ScheduleGame
}) {
	const team = game.teams[side]
	const meta = getTeamMeta(team.team)
	const { team: winner, probability } = getWinnerProb(game)

	return (
		<>
			<dt
				className={cn(
					'flex w-[3ch] items-center gap-2',
					game.status.abstractGameState === 'Final' &&
						team?.isWinner &&
						'font-semibold',
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

					{side === winner &&
						probability !== 50 &&
						game.status.detailedState === 'In Progress' && (
							<strong className="pill shrink-0 bg-green-100 text-xxs tabular-nums text-green-600">
								<Panel>{probability?.toFixed(1)}%</Panel>
							</strong>
						)}
				</div>
			</dt>

			<dd className="w-[2.5ch] text-center text-2xl tabular-nums">
				<Panel tag="b">{team.score}</Panel>
			</dd>
		</>
	)
}
