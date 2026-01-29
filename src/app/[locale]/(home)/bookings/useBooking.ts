import { pageConfig } from '@/config/page.config'
import { useProfile } from '@/hooks/useProfile'
import { bookingService } from '@/services/booking.service'
import { useIsAuthStore } from '@/store/auth.store'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import toast from 'react-hot-toast'

export function useBooking() {
	const { data: profile, isLoading: profileLoading } = useProfile()
	const route = useRouter()
	const { isAuth } = useIsAuthStore()

	useEffect(() => {
		if (isAuth === false) {
			route.push(pageConfig.AUTH)
		}
	}, [isAuth, route])

	const {
		data: bookings,
		isLoading: bookingsLoading,
		error
	} = useQuery({
		queryKey: ['bookings', profile?.data],
		queryFn: () => bookingService.getMyBookings(profile!.data),
		staleTime: 60 * 1000,
		enabled: !!profile?.data
	})

	const { mutate } = useMutation({
		mutationFn: (bookingId: string) =>
			bookingService.cancelBooking(bookingId, profile?.data),
		onSuccess: () => {
			toast.success('Booking cancelled', { id: 'booking-cancelled' })
		},
		onError: (error: any) => {
			toast.error(error.message, { id: 'booking-error' })
		}
	})

	const handleCancel = useCallback(
		(bookingId: string) => {
			mutate(bookingId)
		},
		[mutate]
	)
	return {
		bookings,
		profileLoading,
		bookingsLoading,
		error,
		handleCancel
	}
}
