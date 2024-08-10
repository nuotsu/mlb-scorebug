import Header from '@/ui/Header'
import Footer from '@/ui/Footer'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
	title: 'MLB ScoreBug',
	icons: {
		icon: `https://fav.farm/⚾️`,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="bg-canvas text-ink dark:bg-ink dark:text-canvas">
				<Header />
				<main>{children}</main>
				<Footer />

				<Analytics />
			</body>
		</html>
	)
}
