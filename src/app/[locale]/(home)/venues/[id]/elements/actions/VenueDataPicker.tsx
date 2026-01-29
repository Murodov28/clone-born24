import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

import {
	Popover,
	PopoverContent,
	PopoverTrigger
} from '@/components/ui/popover'
import { format } from 'date-fns'
import { ChevronDownIcon } from 'lucide-react'
interface Props {
	open: boolean
	setOpen: (open: boolean) => void
	date: Date | undefined
	setDate: (date: Date | undefined) => void
}

export function VenueDataPicker({ open, setDate, setOpen, date }: Props) {
	return (
		<Popover
			open={open}
			onOpenChange={setOpen}
		>
			<PopoverTrigger asChild>
				<Button
					variant='outline'
					className='w-40 justify-between font-normal'
				>
					{date ? format(date, 'PPP') : 'Select date'}
					<ChevronDownIcon />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className='p-0'
				align='center'
			>
				<Calendar
					mode='single'
					selected={date}
					onSelect={d => {
						setDate(d)
						setOpen(false)
					}}
					disabled={d => d <= new Date()}
				/>
			</PopoverContent>
		</Popover>
	)
}
