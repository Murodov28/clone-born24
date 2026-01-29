'use client'
import { MiniLoader } from '@/components/ui/MiniLoader'
import { AuthInput } from './AuthInput'
import { useAuth } from './useAuth'
interface Props {
	strings: { phone: string; desc: string; auth: string }
}

export function AuthPage({ strings }: Props) {
	const { register, errors, handleSubmit, isLoading, onSendOtpSubmit } =
		useAuth()
	return (
		<div className='h-screen flex items-center justify-center'>
			<form
				className='w-sm bg-white/10 p-6 rounded-3xl backdrop-blur-2xl flex flex-col gap-3 shadow-xl border border-white/20'
				onSubmit={handleSubmit(onSendOtpSubmit)}
			>
				<AuthInput
					title={strings.phone}
					type='text'
					{...register('phone')}
					error={errors.phone?.message}
					placeholder={strings.desc}
				/>
				<button
					type='submit'
					className='bg-white py-2 w-full rounded-xl text-bold text-black  hover:bg-white/90 transition text-base'
				>
					{isLoading ? <MiniLoader /> : <p>{strings.auth}</p>}
				</button>
			</form>
		</div>
	)
}
