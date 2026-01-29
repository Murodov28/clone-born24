import { Button } from '@/components/ui/button'
import { Booking } from '@/types/booking.type'
import { convertPriceToString } from '@/utils/conver-price-to-string.util'
import React from 'react'

interface Props {
	b: Booking
	onCancel: () => void
	title: string
}

export const BookingItem = React.memo(function Venue({
	b,
	onCancel,
	title
}: Props) {
	return (
		<div className='bg-white/10 rounded-md p-2 flex items-center gap-10 justify-between  max-sm:overflow-scroll'>
			<span>{new Date(b.date).toLocaleDateString()}</span>
			<span>{b.time}</span>
			<span>{b.duration}</span>
			<span>{convertPriceToString(b.totalPrice)}</span>
			<span></span>
			<span>{b.status}</span>
			<Button
				variant='destructive'
				onClick={onCancel}
			>
				{title}
			</Button>
		</div>
	)
})
