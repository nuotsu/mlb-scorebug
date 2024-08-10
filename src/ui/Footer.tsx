export default function Footer() {
	return (
		<footer className="mb-[env(safe-area-inset-bottom)] p-4 text-center text-xs">
			{'</> by '}

			<a
				className="hover:underline"
				href="https://github.com/nuotsu/mlb-scorebug"
			>
				nuotsu
			</a>
		</footer>
	)
}
