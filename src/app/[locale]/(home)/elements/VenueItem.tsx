import { Button } from '@/components/ui/button'
import { pageConfig } from '@/config/page.config'
import { IVenue } from '@/types/venues.type'
import { convertPriceToString } from '@/utils/conver-price-to-string.util'
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface Props {
	v: IVenue
	strings: { perHour: string; book: string }
}

export const VenueItem = React.memo(function Venue({ v, strings }: Props) {
	return (
		<div className='bg-white/10 rounded-2xl p-2'>
			<img
				src={v.images[0]}
				alt={v.name}
				className='w-full h-48 object-cover rounded-2xl mb-2.5'
			/>
			<div className='p-2'>
				<div className='mb-6'>
					<h3 className='font-bold text-2xl mb-2.5'>{v.name}</h3>
					<p className='text-white/60 flex items-center gap-0.5 text-sm mb-3'>
						<MapPin size={20} /> {v.address}
					</p>
					<span className='flex items-center text-xs gap-3'>
						{v.amenities.map((a: string) => (
							<div className='bg-primary/50 rounded px-2 py-0.5'>
								<p>{a}</p>
							</div>
						))}
					</span>
				</div>
				<div className='flex items-center justify-between'>
					<span>
						<h3 className='text-2xl font-bold mb-1 '>
							{convertPriceToString(v.pricePerHour)} UZS
						</h3>
						<p className='text-white/60 text-sm '>{strings.perHour}</p>
					</span>
					<Link href={pageConfig.VENUES(v.id)}>
						<Button
							variant={'ghost'}
							className='hover:bg-white/10! hover:text-primary! min-w-24'
							size={'sm'}
						>
							{strings.book}
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
})
