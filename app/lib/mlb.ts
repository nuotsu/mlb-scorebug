import useSWR from 'swr'

const BASE_URL = 'https://statsapi.mlb.com'

function generateUrl(endpoint: string, params?: Record<string, string>) {
	const url = new URL('api/v1/' + endpoint, BASE_URL)

	url.search = params ? new URLSearchParams(params).toString() : ''

	return url.toString()
}

export async function fetchMLB<T = unknown>(
	endpoint: string,
	params?: Record<string, string>,
): Promise<T> {
	const res = await fetch(generateUrl(endpoint, params), {
		next: {
			revalidate: 0,
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
) {
	return useSWR<T>(endpoint, () => fetcher(endpoint, params))
}
