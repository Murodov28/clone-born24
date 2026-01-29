import { create } from 'zustand'

interface PhoneState {
	phone: string
	setPhone: (phone: string) => void
}

export const usePhoneStore = create<PhoneState>(set => ({
	phone: '',
	setPhone: phone => set({ phone })
}))
