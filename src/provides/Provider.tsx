import { NextIntlClientProvider } from 'next-intl'
import MoreProvider from './MoreProvider'

interface Props {
	children: React.ReactNode
	locale: string
}

export default function Provider({ children, locale }: Props) {
	return (
		<NextIntlClientProvider locale={locale}>
			<MoreProvider>{children}</MoreProvider>
		</NextIntlClientProvider>
	)
}
