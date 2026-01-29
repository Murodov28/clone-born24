import { pageConfig } from '@/config/page.config'
import { useTranslations } from 'next-intl'
import { HeaderNavigationItem } from './HeaderNavigationItem'

export async function HeaderNavigation() {
	const t = useTranslations('pages')

	return (
		<div>
			<ul className='flex items-center gap-5'>
				<HeaderNavigationItem
					title={t('home')}
					path={pageConfig.HOME}
				/>
				<HeaderNavigationItem
					title={t('myBookings')}
					path={pageConfig.BOOKINGS}
				/>
			</ul>
		</div>
	)
}
