import { z } from 'zod'

export const SessionZod = z.object({
  userId: z.uuid(),
  expiresAt: z.date(),
  token: z.string(),
})

export type ISession = z.infer<typeof SessionZod>
