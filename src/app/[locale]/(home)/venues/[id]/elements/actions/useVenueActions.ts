import { pageConfig } from '@/config/page.config'
import { useIsAuthStore } from '@/store/auth.store'
import { CreateBookingPayload } from '@/types/booking.type'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface Props {
	pricePerHour: number
	handleBook: (data: CreateBookingPayload) => void
	id: string
}

export function useVenueActions({ pricePerHour, handleBook, id }: Props) {
	const [open, setOpen] = useState(false)
	const [date, setDate] = useState<Date>()
	const [time, setTime] = useState('')
	const [duration, setDuration] = useState<number>(1)

	const { isAuth } = useIsAuthStore()
	const route = useRouter()

	const totalPrice = duration * pricePerHour

	const isValid = date && time && duration

	const onClick = () => {
		if (!date) return

		if (!isAuth) {
			return route.push(pageConfig.AUTH)
		}

		handleBook({
			venueId: id,
			date: date.toISOString(),
			time: time,
			duration: duration
		})

		route.push(pageConfig.HOME)
	}

	return {
		state: {
			open,
			date,
			time,
			duration,
			totalPrice,
			isValid
		},
		actions: {
			setOpen,
			setDate,
			setTime,
			setDuration,
			onClick
		}
	}
}
