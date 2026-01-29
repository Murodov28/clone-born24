import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { routing } from './i18n/routing.ts'

const i18nMiddleware = createMiddleware(routing)

export default async function proxy(req: NextRequest): Promise<NextResponse> {
	const res = i18nMiddleware(req)
	if (res) return res

	// const locales = routing.locales
	// const pathName = req.nextUrl.pathname
	// const localeInPath = locales.find(locale =>
	// 	pathName.startsWith(`/${locale}/`)
	// )

	// const isAuthPage = localeInPath
	// 	? pathName === `/${localeInPath}/auth` ||
	// 		pathName.startsWith(`/${localeInPath}/auth/`)
	// 	: false

	// const isVenuePage = localeInPath
	// 	? pathName === `/${localeInPath}/venues` ||
	// 		pathName.startsWith(`/${localeInPath}/venues/`)
	// 	: false

	// if (isAuthPage) {
	// 	return (protectAuthPages(req), res)
	// }

	// if (isVenuePage) {
	// 	return (protectVenuePages(req), res)
	// }

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
}
