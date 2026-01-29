import { useTranslations } from 'next-intl'
import VerifyPage from './VerifyPage'

export default function Page() {
	const t = useTranslations('auth')
	const strings = {
		phone: t('phone'),
		desc: t('phoneDesc'),
		otp: t('otp'),
		otpDesc: t('otpDesc'),
		verify: t('verify')
	}
	return <VerifyPage strings={strings} />
}
