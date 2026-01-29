import { useTranslations } from 'next-intl'
import { use } from 'react'
import { VenuePage } from './VenuePage'

interface Props {
	params: Promise<{
		id: string
		locale: string
	}>
}
export default function Page({ params }: Props) {
	const { id } = use(params)
	const t = useTranslations('')

	const strings = {
		perHour: t('venues.perHour'),
		date: t('venues.date'),
		time: t('venues.time'),
		duration: t('venues.duration'),
		total: t('venues.total'),
		bookNow: t('venues.bookNow'),
		loading: t('loading')
	}

	return (
		<VenuePage
			strings={strings}
			id={id}
		/>
	)
}
