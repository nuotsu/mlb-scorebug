'use client'

import { getTeamMeta, getWinnerProb } from '@/lib/mlb'

export default function TeamScore({
	team,
	side,
	game,
}: {
	team: MLB.ScheduleTeam
	side: 'away' | 'home'
	game: MLB.ScheduleGame
}) {
	const meta = getTeamMeta(team.team)
	const { team: winner, probability } = getWinnerProb(game)

	return (
		<dl className="@container grid grid-cols-[1fr,auto,1fr] items-center gap-x-3 *:leading-none">
			<dt className="flex w-[3ch] items-center gap-2">
				<figure
					className="aspect-square h-[1.5em] bg-contain bg-center bg-no-repeat"
					style={{
						backgroundImage: `url(https://www.mlbstatic.com/team-logos/team-cap-on-light/${meta?.id}.svg)`,
					}}
				/>

				<div className="@xs:flex-nowrap flex flex-wrap items-center gap-1">
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
							<strong
								className="anim-fade pill shrink-0 bg-green-100 text-xxs tabular-nums text-green-600"
								title="Win Probability"
								key={probability}
							>
								<span className="animate-pulse">
									{probability?.toFixed(1)}%
								</span>
							</strong>
						)}
				</div>
			</dt>

			<dd className="w-[2ch] overflow-hidden text-center text-2xl tabular-nums">
				<b className="anim-fade-to-t block" key={team.score}>
					{team.score}
				</b>
			</dd>

			<dd></dd>
		</dl>
	)
}
