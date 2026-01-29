import { axiosClassic } from '@/lib/axios/axios'
import { IVenue } from '@/types/venues.type'

class VenueService {
	async getVenues(query = '', minPrice = 0, maxPrice = Infinity) {
		const res = await axiosClassic(
			`/venues?q=${query}&minPrice=${minPrice}&maxPrice=${maxPrice}`
		)

		return res.data
	}

	async getVenueById(id: string) {
		const res = await axiosClassic<IVenue>(`/venues/${id}`)

		return res.data
	}
}

export const venueService = new VenueService()
