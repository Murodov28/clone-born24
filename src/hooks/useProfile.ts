import { instance } from '@/lib/axios/axios'
import { useQuery } from '@tanstack/react-query'

export const useProfile = () => {
	return useQuery({
		queryKey: ['me'],
		queryFn: () => instance.get('/me')
	})
}
