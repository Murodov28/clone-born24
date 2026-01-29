'use client'
import { MiniLoader } from '@/components/ui/MiniLoader'
import { AuthInput } from '../AuthInput'
import { useAuth } from '../useAuth'

interface Props {
	strings: {
		phone: string
		desc: string
		otp: string
		otpDesc: string
		verify: string
	}
}

export default function VerifyPage({ strings }: Props) {
	const { register, errors, handleSubmit, isLoading, onVerifySubmit } =
		useAuth()
	return (
		<div className='h-screen flex items-center justify-center'>
			<form
				className='w-sm bg-white/10 p-6 rounded-3xl backdrop-blur-2xl flex flex-col gap-3 shadow-xl border border-white/20'
				onSubmit={handleSubmit(onVerifySubmit)}
			>
				<AuthInput
					title={strings.phone}
					type='text'
					{...register('phone')}
					error={errors.phone?.message}
					placeholder={strings.desc}
				/>
				<AuthInput
					title={strings.otp}
					type='text'
					{...register('otp', {
						required: 'otp',
						minLength: {
							value: 4,
							message: 'otp must be at least 4 characters'
						}
					})}
					error={errors.otp?.message}
					placeholder={strings.otpDesc}
				/>
				<button className='bg-white py-2 w-full rounded-xl text-bold text-black  hover:bg-white/90 transition text-base'>
					{isLoading ? <MiniLoader /> : <p>{strings.verify}</p>}
				</button>
			</form>
		</div>
	)
}
