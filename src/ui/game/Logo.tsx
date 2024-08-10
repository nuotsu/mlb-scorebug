import { cn } from '@/lib/utils'

export default function Logo() {
	return (
		<>
			<figure
				className={cn(
					'colors -z-1 overflow-fade pointer-events-none absolute right-[calc(50%+1rem)] size-1/2 opacity-20',
					'bg-[image:var(--light)] bg-[size:4rem] bg-right bg-no-repeat dark:bg-[image:var(--dark)]',
				)}
			/>

			<figure className="aspect-square size-6 shrink-0 bg-[image:var(--light)] bg-contain bg-center bg-no-repeat dark:bg-[image:var(--dark)]" />
		</>
	)
}
