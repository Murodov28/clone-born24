import { useProfile } from '@/hooks/useProfile'
import { bookingService } from '@/services/booking.service'
import { venueService } from '@/services/venue.service'
import { CreateBookingPayload } from '@/types/booking.type'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'

export function useVenue(id: string) {
	const [selectedImage, setSelectedImage] = useState(0)
	const { data: profile } = useProfile()

	const { data: venue, isLoading } = useQuery({
		queryKey: ['venue', id],
		queryFn: () => venueService.getVenueById(id),
		staleTime: 60 * 1000
	})

	const { mutate } = useMutation({
		mutationFn: (data: CreateBookingPayload) =>
			bookingService.createBooking(
				data,
				profile?.data,
				venue?.pricePerHour as number
			),
		onSuccess: () => {
			toast.success('Booking created', { id: 'booking-created' })
		},
		onError: (error: any) => {
			toast.error(error.message, { id: 'booking-error' })
		}
	})

	const handleBook = useCallback(
		(data: CreateBookingPayload) => {
			mutate(data)
		},
		[mutate]
	)

	const handleImageClick = useCallback(
		(index: number) => {
			setSelectedImage(index)
		},
		[setSelectedImage]
	)

	return {
		data: venue,
		isLoading,
		selectedImage,
		handleImageClick,
		handleBook
	}
}
