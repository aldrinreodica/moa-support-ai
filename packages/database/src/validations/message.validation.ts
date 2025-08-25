import z from 'zod'

export const MessageValidationSchema = z.object({
  userId: z.uuid(),
  content: z.string(),
  sender: z.enum(['user', 'bot']),
  timestamp: z.iso.datetime(),
})
