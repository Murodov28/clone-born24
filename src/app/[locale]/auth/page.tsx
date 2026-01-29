import { useTranslations } from 'next-intl'
import { AuthPage } from './AuthPage'

export default function Page() {
	const t = useTranslations('auth')
	const strings = {
		phone: t('phone'),
		desc: t('phoneDesc'),
		auth: t('auth')
	}
	return <AuthPage strings={strings} />
}
