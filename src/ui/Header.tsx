import { cn } from '@/lib/utils'
import css from './Header.module.css'

export default function Header() {
	return (
		<header className={cn(css.root, 'sticky top-0 z-20 p-4 text-center')}>
			<h1>⚾ MLB ScoreBug</h1>
		</header>
	)
}
