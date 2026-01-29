export type BookingStatus = 'pending' | 'confirmed' | 'cancelled'

export interface CreateBookingPayload {
	venueId: string
	date: string
	time: string
	duration: number
}

export interface Booking {
	id: string
	venueId: string
	userId: number
	date: string // ISO date
	time: string // HH:mm
	duration: number // hours
	totalPrice: number
	status: BookingStatus
}
