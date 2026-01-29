'use client'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { Languages } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
interface Props {}

interface Props {
	title: string
}

export function SelectLanguage({ title }: Props) {
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()
	useTranslations('')

	const switchLocale = (newLocale: string) => {
		if (newLocale !== locale) {
			const segments = pathname.split('/').slice(2)
			const newPath = `/${newLocale}/${segments.join('/')}`
			router.push(newPath)
		}
	}

	return (
		<Select
			onValueChange={switchLocale}
			value={locale}
		>
			<SelectTrigger className='w-fit'>
				<Languages /> <SelectValue placeholder={title} />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='en'>En</SelectItem>
				<SelectItem value='ru'>Ru</SelectItem>
				<SelectItem value='uz'>Uz</SelectItem>
			</SelectContent>
		</Select>
	)
}
