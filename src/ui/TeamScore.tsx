'use client'

import { getTeamMeta, getWinnerProb } from '@/lib/mlb'

export default function TeamScore({
	team,
	side,
	game,
}: {
	team: MLB.ScheduleTeam
	side: 'home' | 'away'
	game: MLB.ScheduleGame
}) {
	const meta = getTeamMeta(team.team)
	const { team: winner, probability } = getWinnerProb(game)

	return (
		<dl className="flex items-center gap-x-3">
			<dt className="grid w-[3ch] text-xl">
				<abbr className="no-underline" title={meta?.name}>
					{meta?.abbreviation || <>&nbsp;</>}
				</abbr>

				<small className="text-[xx-small] leading-none" title="W-L">
					{team.leagueRecord.wins}-{team.leagueRecord.losses}
				</small>
			</dt>

			<dd className="w-[2ch] overflow-hidden text-center text-2xl tabular-nums">
				<b className="anim-fade-to-t block" key={team.score}>
					{team.score}
				</b>
			</dd>

			<dd
				className="text-xxs anim-fade tabular-nums"
				title="Win Probability"
				key={probability}
			>
				{side === winner && probability !== 50 && `${probability?.toFixed(1)}%`}
			</dd>
		</dl>
	)
}
