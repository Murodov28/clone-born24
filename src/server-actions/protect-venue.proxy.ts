'use server'

import { type NextRequest, NextResponse } from 'next/server'

import { pageConfig } from '@/config/page.config'
import { nextRedirect } from './utils/next-redirect'

export async function protectVenuePages(request: NextRequest) {
	const token = request.cookies.get('accessToken')?.value

	if (token) return NextResponse.next()

	return nextRedirect(pageConfig.AUTH, request.url)
}
