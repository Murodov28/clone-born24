import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

interface Props {
	selectedImage: number
	handleImageClick: (index: number) => void
	images: string[]
}

export function VenueImages({
	images,
	selectedImage,
	handleImageClick
}: Props) {
	return (
		<div className='flex flex-col items-center gap-5 max-sm:gap-2'>
			<Image
				src={images[selectedImage]}
				alt={'img 1'}
				className='w-2xl h-60 object-cover rounded-2xl shadow-xl mb-2.5 max-sm:h-40 mx-auto'
				width={500}
				height={500}
			/>
			<div className='flex w-full justify-between gap-5 max-sm:gap-2'>
				{images.map((image, index) => (
					<button
						key={index}
						onClick={() => handleImageClick(index)}
					>
						<Image
							src={image}
							alt={`img ${index + 1}`}
							className={twMerge(
								`w-2xl h-40 object-cover rounded-md mb-2.5 transition duration-300 ease-in-out max-sm:h-28`,
								index === selectedImage && '  scale-95 shadow-xl'
							)}
							width={500}
							height={500}
						/>
					</button>
				))}
			</div>
		</div>
	)
}
