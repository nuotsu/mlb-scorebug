import { VscLoading } from 'react-icons/vsc'

export default function Loading({ what }: { what?: React.ReactNode }) {
	return (
		<div className="with-icon">
			<VscLoading className="animate-spin" />
			Loading{what && ` ${what}`}...
		</div>
	)
}
