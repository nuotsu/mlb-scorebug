import useSWR, { type SWRConfiguration } from 'swr'

const BASE_URL = 'https://statsapi.mlb.com'

function generateUrl(endpoint: string, params?: Record<string, string>) {
	const url = new URL(
		endpoint.startsWith('/api/') ? endpoint : `/api/v1${endpoint}`,
		BASE_URL,
	)

	url.search = params ? new URLSearchParams(params).toString() : ''

	return url.toString()
}

export async function fetchMLB<T = unknown>(
	endpoint: string,
	params?: Record<string, string>,
): Promise<T> {
	const res = await fetch(generateUrl(endpoint, params), {
		next: {
			revalidate: 1000 * 60 * 15, // 15 minutes
		},
	})

	return await res.json()
}

function fetcher(endpoint: string, params?: Record<string, string>) {
	return fetch(generateUrl(endpoint, params)).then((res) => res.json())
}

export function liveMLB<T = unknown>(
	endpoint: string,
	params?: Record<string, string>,
	options?: SWRConfiguration,
) {
	return useSWR<T>(endpoint, () => fetcher(endpoint, params), {
		refreshInterval: 1000 * 5, // seconds
		...options,
	})
}

/* specific fetchers */

export async function getTeamMeta(team: MLB.NameableObject) {
	const { teams } = await fetchMLB<{ teams: MLB.Team[] }>(team.link)
	return teams?.[0]
}

export function getWinnerProb(game: MLB.ScheduleGame) {
	const { data } = liveMLB<any>(`/game/${game.gamePk}/winProbability`)

	if (!data?.length || data.length === 1) return {}

	const { homeTeamWinProbability, awayTeamWinProbability } =
		data[data.length - 1]

	return {
		team: homeTeamWinProbability > awayTeamWinProbability ? 'home' : 'away',
		probability: Math.max(homeTeamWinProbability, awayTeamWinProbability),
	}
}
