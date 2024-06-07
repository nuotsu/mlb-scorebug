export default function (
	date: string,
	options: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		month: 'long',
		day: 'numeric',
	},
) {
	if (!date) return ''

	const { format } = new Intl.DateTimeFormat('en-US', options)

	return format(new Date(date))
}
