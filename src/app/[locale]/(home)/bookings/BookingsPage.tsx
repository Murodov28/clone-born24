'use client'

import { BookingItem } from './elements/BookingItem'
import { useBooking } from './useBooking'

interface Props {
	strings: {
		cancel: string
		myBookings: string
		noBookings: string
		loading: string
		errorBookings: string
	}
}

export function BookingsPage({ strings }: Props) {
	const { handleCancel, profileLoading, bookings, bookingsLoading, error } =
		useBooking()

	if (profileLoading || bookingsLoading) return <p>{strings.loading}...</p>
	if (error) return <p>{strings.errorBookings}</p>

	return (
		<div>
			<h2 className='mb-5 text-2xl font-bold'>{strings.myBookings}</h2>
			<div className='flex flex-col gap-5'>
				{bookings?.length ? (
					bookings.map(b => (
						<BookingItem
							title={strings.cancel}
							key={b.id}
							b={b}
							onCancel={() => handleCancel(b.id)}
						/>
					))
				) : (
					<p>{strings.noBookings}</p>
				)}
			</div>
		</div>
	)
}
