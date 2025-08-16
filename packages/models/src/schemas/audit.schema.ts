import { z } from 'zod'

export const AuditZod = z.object({
  userId: z.uuid(),
  action: z.string(), // login, update-profile, update-persona, etc.
  timestamp: z.iso.datetime(),
  details: z.string().optional(),
})

export type IAudit = z.infer<typeof AuditZod>
