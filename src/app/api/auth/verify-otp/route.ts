import { users } from '@/mocks/auth.mock'
import { generateAccessToken } from '@/utils/generate-token.util'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const { phone, otp } = await req.json()

	if (!phone || !otp) {
		return NextResponse.json(
			{ error: 'Phone and OTP required' },
			{ status: 400 }
		)
	}

	if (otp !== '1234') {
		return NextResponse.json({ error: 'Invalid OTP' }, { status: 401 })
	}

	let user = users.find(u => u.phone === phone)
	if (!user) {
		user = { id: users.length + 1, name: 'New User', phone }
		users.push(user)
	}

	const accessToken = generateAccessToken(user.id)

	return NextResponse.json({ success: true, accessToken, user })
}
