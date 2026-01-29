interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	title?: string
	error?: string
	color?: string
	labelClassName?: string
}

export function AuthInput({
	title,
	error,
	color = '#fff',
	labelClassName,
	...props
}: Props) {
	return (
		<label
			style={{
				color: color
			}}
			className={labelClassName}
		>
			<p className='mb-1.5'>{title}</p>
			<input
				{...props}
				className='w-full bg-white/10 rounded-xl px-3 py-2 outline-none border border-white/20 focus:bg-white/15 transition mb-2'
				style={{
					color: color
				}}
			/>
			{error && <span className='text-red-500 text-sm mb-1'>{error}</span>}
		</label>
	)
}
