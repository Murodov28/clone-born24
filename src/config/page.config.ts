class PageConfig {
	HOME = '/'
	AUTH = '/auth'
	SUCCESS = '/bookings/success'
	BOOKINGS = '/bookings'
	VERIFY = `${this.AUTH}/verify`

	VENUES(id: string) {
		return `/venues/${id}`
	}
}

export const pageConfig = new PageConfig()
