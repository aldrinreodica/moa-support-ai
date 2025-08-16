import { z } from 'zod'

export const MessageZod = z.object({
  userId: z.uuid(),
  content: z.string(),
  sender: z.enum(['user', 'bot']),
  timestamp: z.iso.datetime(),
})

export type IMessage = z.infer<typeof MessageZod>
