import { z } from 'zod'

export const authSchema = z.object({
	phone: z
		.string()
		.regex(/^\+998\d{9}$/, 'Invalid phone number (+998XXXXXXXXX)'),
	otp: z.string().length(4, 'OTP must be 4 digits').optional()
})

export type TAuthFormData = z.infer<typeof authSchema>
