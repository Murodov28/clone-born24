'use client'

import { Button } from '@/components/ui/button'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { CreateBookingPayload } from '@/types/booking.type'
import { VenueDataPicker } from './VenueDataPicker'
import { VenueSelectHour } from './VenueSelectHour'
import { useVenueActions } from './useVenueActions'

type VenueActionsProps = {
	id: string
	pricePerHour: number
	handleBook: (data: CreateBookingPayload) => void
	strings: {
		perHour: string
		date: string
		time: string
		duration: string
		total: string
		bookNow: string
	}
}

export function VenueActions({
	pricePerHour,
	handleBook,
	id,
	strings
}: VenueActionsProps) {
	const { state, actions } = useVenueActions({ pricePerHour, handleBook, id })

	return (
		<div className='flex flex-col gap-8'>
			<FieldGroup className='flex-row max-sm:flex-col'>
				<Field>
					<FieldLabel>{strings.date}</FieldLabel>
					<VenueDataPicker
						open={state.open}
						setOpen={actions.setOpen}
						date={state.date}
						setDate={actions.setDate}
					/>
				</Field>

				<Field>
					<FieldLabel>{strings.time}</FieldLabel>
					<Input
						type='time'
						step={1800}
						value={state.time}
						onChange={e => actions.setTime(e.target.value)}
						className='appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none '
					/>
				</Field>

				<Field>
					<FieldLabel>{strings.duration}</FieldLabel>
					<VenueSelectHour
						duration={state.duration}
						setDuration={actions.setDuration}
					/>
				</Field>
			</FieldGroup>

			<div className='flex flex-col gap-4'>
				<div className='flex items-center justify-between text-sm '>
					<span>{strings.perHour}</span>
					<span>${pricePerHour}</span>
				</div>

				<div className='flex items-center justify-between font-semibold'>
					<span>{strings.total}</span>
					<span>{state.totalPrice} UZS</span>
				</div>

				<Button
					className='w-full'
					disabled={!state.isValid}
					onClick={actions.onClick}
				>
					{strings.bookNow}
				</Button>
			</div>
		</div>
	)
}
