import { getUserFromToken } from '@/lib/get-user-from-token'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
	const user = getUserFromToken(req)

	if (!user || !user.id) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
	}

	return NextResponse.json(user)
}
