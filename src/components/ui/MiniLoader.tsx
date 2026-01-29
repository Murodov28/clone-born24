import Image from 'next/image'

interface Props {
	isDark?: boolean
	width?: number
	height?: number
}

export function MiniLoader({
	isDark = false,
	width = 30,
	height = 30,
	...rest
}: Props) {
	return (
		<Image
			src={isDark ? '/dark-loader.svg' : '/loader.svg'}
			width={width}
			height={height}
			className='mx-auto'
			alt='loader'
			priority
			{...rest}
		/>
	)
}
