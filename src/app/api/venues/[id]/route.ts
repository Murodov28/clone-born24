import { venues } from '@/mocks/venues.mock'
import { NextResponse } from 'next/server'

export async function GET(
	req: Request,
	context: { params: { id: string } | Promise<{ id: string }> }
) {
	const params = await context.params
	const { id } = params

	const venue = venues.find(v => v.id === id)

	if (!venue) {
		return NextResponse.json({ error: 'Venue not found' }, { status: 404 })
	}

	return NextResponse.json(venue)
}
