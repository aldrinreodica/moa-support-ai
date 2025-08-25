import z from 'zod'

export const SessionValidationSchema = z.object({
  userId: z.uuid(),
  expiresAt: z.date(),
  token: z.string(),
})
