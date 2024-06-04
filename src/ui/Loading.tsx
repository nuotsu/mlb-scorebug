import { cn } from '@/lib/utils'
import { VscLoading } from 'react-icons/vsc'

export default function Loading({
	what,
	className,
}: { what?: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn('with-icon', className)}>
			<VscLoading className="animate-spin" />
			Loading{what && ` ${what}`}...
		</div>
	)
}
