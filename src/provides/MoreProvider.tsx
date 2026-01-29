'use client'
import { useIsAuthStore } from '@/store/auth.store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion, domAnimation } from 'framer-motion'
import Cookie from 'js-cookie'
import { useEffect, useState, type PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './ThemeProvider'

export default function MoreProvider({ children }: PropsWithChildren<unknown>) {
	const [client] = useState(
		() =>
			new QueryClient({
				defaultOptions: { queries: { staleTime: 60 * 1000 } }
			})
	)

	const { isAuth, setIsAuth } = useIsAuthStore()

	useEffect(() => {
		const accessToken = Cookie.get('accessToken')
		setIsAuth(Boolean(accessToken))
	}, [])

	return (
		<QueryClientProvider client={client}>
			<ThemeProvider
				attribute='class'
				defaultTheme='system'
			>
				<LazyMotion features={domAnimation}>
					{children}
					<Toaster />
				</LazyMotion>
			</ThemeProvider>
		</QueryClientProvider>
	)
}
