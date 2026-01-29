import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface IAuthStore {
	isAuth: boolean
	setIsAuth: (isAuth: boolean) => void
}

export const useIsAuthStore = create<IAuthStore>()(
	persist(
		set => ({
			isAuth: false,
			setIsAuth: isAuth => set({ isAuth })
		}),
		{
			name: 'isAuth'
		}
	)
)
