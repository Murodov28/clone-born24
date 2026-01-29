'use client'

import { convertPriceToString } from '@/utils/conver-price-to-string.util'
import { MapPin } from 'lucide-react'
import { useParams } from 'next/navigation'
import { VenueActions } from './elements/actions/VenueActions'
import { VenueImages } from './elements/VenueImages'
import { useVenue } from './useVenue'
interface Props {
	id: string
	strings: {
		perHour: string
		date: string
		time: string
		duration: string
		total: string
		bookNow: string
		loading: string
	}
}
export function VenuePage({ id, strings }: Props) {
	const params = useParams()

	const { data, isLoading, selectedImage, handleImageClick, handleBook } =
		useVenue(id)

	if (isLoading) return <p>Loading...</p>
	if (!data) return <p>Venue not found</p>

	return (
		<div className='bg-white/10 rounded-2xl p-6 grid grid-cols-[6fr_3.3fr] gap-10 max-lg:grid-rows-1 max-lg:grid-cols-1 max-sm:p-2'>
			<VenueImages
				images={data.images}
				selectedImage={selectedImage}
				handleImageClick={handleImageClick}
			/>
			<div className='flex flex-col justify-between'>
				<div>
					<div className='mb-6'>
						<h3 className='font-bold text-2xl mb-2.5 max-sm:text-xl'>
							{data.name}
						</h3>
						<p className='text-white/60 flex items-center gap-1 text-sm mb-3'>
							<MapPin size={20} /> {data.address}
						</p>
						<span className='flex items-center text-xs gap-3'>
							{data.amenities.map((a: string) => (
								<div className='bg-primary/50 rounded px-2 py-0.5'>
									<p>{a}</p>
								</div>
							))}
						</span>
					</div>
					<span>
						<h3 className='text-2xl font-bold mb-1 max-sm:text-xl'>
							{convertPriceToString(data.pricePerHour)} UZS
						</h3>
						<p className='text-white/60 text-sm '>{strings.perHour}</p>
					</span>
				</div>
				<VenueActions
					strings={strings}
					pricePerHour={data.pricePerHour}
					handleBook={handleBook}
					id={params.id as string}
				/>
			</div>
		</div>
	)
}
