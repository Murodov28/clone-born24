import { axiosClassic } from '@/lib/axios/axios'
import Cookie from 'js-cookie'
class AuthService {
	async sendOtp(phone: string) {
		const res = await axiosClassic.post('/auth/send-otp', { phone })
		return res.data
	}

	async verifyOtp(phone: string, otp: string) {
		const res = await axiosClassic.post('/auth/verify-otp', { phone, otp })

		if (res.data.error) throw new Error(res.data.error)

		if (res.data.accessToken) {
			Cookie.set('accessToken', res.data.accessToken)
		}

		return res.data
	}
}

export const authService = new AuthService()
