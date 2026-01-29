import { NextResponse } from 'next/server'

export async function POST(req: Request) {
	const { phone } = await req.json()

	if (!phone) {
		return NextResponse.json(
			{ error: 'Phone number required' },
			{ status: 400 }
		)
	}

	console.log(`Sending mock OTP 1234 to ${phone}`)

	return NextResponse.json({ success: true, message: 'OTP sent (mock)' })
}
