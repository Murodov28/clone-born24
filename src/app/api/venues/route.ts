import { venues } from '@/mocks/venues.mock'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const query = searchParams.get('q') || ''
	const minPrice = Number(searchParams.get('minPrice') || 0)
	const maxPrice = Number(searchParams.get('maxPrice') || Infinity)

	const filtered = venues.filter(
		v =>
			v.name.toLowerCase().includes(query.toLowerCase()) &&
			v.pricePerHour >= minPrice &&
			v.pricePerHour <= maxPrice
	)

	return NextResponse.json(filtered)
}
