import { pageConfig } from '@/config/page.config'
import { authService } from '@/services/auth.service'
import { useIsAuthStore } from '@/store/auth.store'
import { usePhoneStore } from '@/store/phone.store'
import { authSchema, TAuthFormData } from '@/validation/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export function useAuth() {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm<TAuthFormData>({
		resolver: zodResolver(authSchema)
	})

	const { phone: authPhone, setPhone } = usePhoneStore()
	const { setIsAuth } = useIsAuthStore()
	const route = useRouter()

	const { isPending: isOtpSend, mutate: auth } = useMutation({
		mutationFn: ({ phone }: Pick<TAuthFormData, 'phone'>) => {
			setPhone(phone)
			return authService.sendOtp(phone)
		},
		onSuccess: (_, variables) => {
			toast.success(`OTP sent ${variables.phone}`, { id: 'otp-sent' })
			route.push(pageConfig.VERIFY)
		},
		onError: (err: any) => {
			toast.error(err.message, { id: 'login-error' })
		}
	})

	const { isPending: isVerify, mutate: verify } = useMutation({
		mutationFn: ({ otp, phone }: TAuthFormData) => {
			if (!otp || phone !== authPhone) throw new Error('Invalid OTP or phone')
			return authService.verifyOtp(authPhone, otp)
		},
		onSuccess: () => {
			toast.success('Auth successful', { id: 'auth-success' })
			reset()
			setIsAuth(true)
			route.push(pageConfig.HOME)
		},
		onError: (e: any) => {
			toast.error(e.message, { id: 'verify-error' })
		}
	})

	const onSendOtpSubmit: SubmitHandler<Pick<TAuthFormData, 'phone'>> = data => {
		auth(data)
	}

	const onVerifySubmit: SubmitHandler<TAuthFormData> = data => {
		verify(data)
	}

	const isLoading = isOtpSend || isVerify

	return {
		register,
		errors,
		handleSubmit,
		onSendOtpSubmit,
		onVerifySubmit,
		isLoading
	}
}
