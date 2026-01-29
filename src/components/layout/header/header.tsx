import { pageConfig } from '@/config/page.config'
import { BookmarkCheck, Home } from 'lucide-react'
import { ModeToggle } from './elements/ModeToggle'
import { HeaderNavigation } from './elements/navigation/HeaderNavigation'
import { HeaderNavigationItem } from './elements/navigation/HeaderNavigationItem'
import { SelectLanguage } from './elements/SelectLanguage'
interface Props {}

export function Header({}: Props) {
	return (
		<div>
			<header className='flex w-full py-5 items-center justify-between max-sm:hidden'>
				<span className=''>
					<span className='text-primary font-bold text-3xl italic pr-0.5'>
						B
					</span>
					<span className='text-xl font-semibold'>24</span>
				</span>
				<HeaderNavigation />
				<div className='flex gap-2'>
					<SelectLanguage title='Language' />
					<ModeToggle />
				</div>
			</header>
			<div className='sm:hidden  fixed bottom-0 left-0 right-0 bg-white/15  flex items-center justify-center gap-5 z-50  backdrop-blur-lg p-5'>
				<HeaderNavigationItem
					isIcon={true}
					Icon={Home}
					path={pageConfig.HOME}
				/>
				<HeaderNavigationItem
					isIcon={true}
					Icon={BookmarkCheck}
					path={pageConfig.BOOKINGS}
				/>
				<div className='flex gap-3'>
					<SelectLanguage title='Language' />
					<ModeToggle />
				</div>
			</div>
		</div>
	)
}
