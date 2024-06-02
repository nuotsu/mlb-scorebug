export default function WinProbability({
	dataset,
}: {
	dataset?: MLB.WinProbability[]
}) {
	if (!dataset?.length) return null

	const data = dataset[dataset.length - 1]

	return <div>Home Win: {data.homeTeamWinProbability}%</div>
}
