import { Booking, CreateBookingPayload } from '@/types/booking.type'

const STORAGE_KEY = 'bookings'

function getBookings(): Booking[] {
	if (typeof window === 'undefined') return []
	return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}

function saveBookings(bookings: Booking[]) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
}

function toMinutes(time: string) {
	const [h, m] = time.split(':').map(Number)
	return h * 60 + m
}

function hasConflict(existing: Booking, payload: CreateBookingPayload) {
	if (
		existing.venueId !== payload.venueId ||
		existing.date !== payload.date ||
		existing.status === 'cancelled'
	) {
		return false
	}

	const existingStart = toMinutes(existing.time)
	const existingEnd = existingStart + existing.duration * 60

	const newStart = toMinutes(payload.time)
	const newEnd = newStart + payload.duration * 60

	return newStart < existingEnd && newEnd > existingStart
}

class BookingService {
	// CREATE
	async createBooking(
		payload: CreateBookingPayload,
		userId: number,
		pricePerHour: number
	): Promise<Booking> {
		const bookings = getBookings()

		const conflict = bookings.some(b => hasConflict(b, payload))

		if (conflict) {
			throw new Error('Booking conflict')
		}

		const booking: Booking = {
			id: crypto.randomUUID(),
			venueId: payload.venueId,
			userId,
			date: payload.date,
			time: payload.time,
			duration: payload.duration,
			totalPrice: payload.duration * pricePerHour,
			status: 'confirmed'
		}

		bookings.push(booking)
		saveBookings(bookings)

		return booking
	}

	// READ
	async getMyBookings(userId: number | string): Promise<Booking[]> {
		const bookings = getBookings()
		return bookings.filter(b => b.userId.toString() === userId.toString())
	}

	// CANCEL
	async cancelBooking(bookingId: string, userId: number): Promise<Booking> {
		const bookings = getBookings()

		const booking = bookings.find(
			b => b.id === bookingId && b.userId.toString() === userId.toString()
		)

		if (!booking) {
			throw new Error('Booking not found')
		}

		booking.status = 'cancelled'
		saveBookings(bookings)

		return booking
	}
}

export const bookingService = new BookingService()
