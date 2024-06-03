import { cn } from '@/lib/utils'

export default function Panel({
	tag: Tag = 'span',
	className,
	children,
}: {
	tag?: React.ElementType
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn('overflow-hidden', className)}
			key={children?.toString()}
		>
			<Tag className="anim-fade-to-t inline-block">{children}</Tag>
		</div>
	)
}
