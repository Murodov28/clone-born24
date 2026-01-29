import { Home, type LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface Props {
	title?: string
	path: string
	isIcon?: boolean
	Icon?: LucideIcon
}

export function HeaderNavigationItem({
	title,
	path,
	isIcon = false,
	Icon = Home
}: Props) {
	return isIcon ? (
		<Link href={path}>
			<Icon size={24} />
		</Link>
	) : (
		<li className=' font-medium cursor-pointer hover:text-primary transition-all duration-300'>
			<Link href={path}>{title}</Link>
		</li>
	)
}
