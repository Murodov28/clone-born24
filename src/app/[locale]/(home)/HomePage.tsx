'use client'
import { Input } from '@/components/ui/input'
import { useDebounce } from '@/hooks/useDebounce'
import { venueService } from '@/services/venue.service'
import { IVenue } from '@/types/venues.type'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { VenueItem } from './elements/VenueItem'

interface Props {
	strings: { perHour: string; book: string; loading: string; search: string }
}

export function HomePage({ strings }: Props) {
	const [search, setSearch] = useState('')
	const debouncedSearch = useDebounce(search, 500)

	const { data = [], isLoading } = useQuery({
		queryKey: ['venues', debouncedSearch],
		queryFn: () => venueService.getVenues(debouncedSearch),
		staleTime: 60 * 1000,
		keepPreviousData: true
	})

	if (isLoading) return <p>{strings.loading}...</p>

	return (
		<div>
			<div className=' mb-4'>
				<Input
					type='text'
					placeholder={strings.search}
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
				{data.map((v: IVenue) => (
					<VenueItem
						key={v.id}
						v={v}
						strings={{ perHour: strings.perHour, book: strings.book }}
					/>
				))}
			</div>
		</div>
	)
}
