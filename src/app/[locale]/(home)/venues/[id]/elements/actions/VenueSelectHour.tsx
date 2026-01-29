import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { Timer } from 'lucide-react'

interface Props {
	duration: number
	setDuration: React.Dispatch<React.SetStateAction<number>>
}
export function VenueSelectHour({ duration, setDuration }: Props) {
	return (
		<Select
			value={String(duration)}
			onValueChange={v => setDuration(Number(v))}
		>
			<SelectTrigger className='w-20! max-sm:w-full!'>
				<SelectValue placeholder='Hours' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='1'>
					1 <Timer />
				</SelectItem>
				<SelectItem value='2'>
					2 <Timer />
				</SelectItem>
				<SelectItem value='3'>
					3 <Timer />
				</SelectItem>
				<SelectItem value='4'>
					4 <Timer />{' '}
				</SelectItem>
			</SelectContent>
		</Select>
	)
}
