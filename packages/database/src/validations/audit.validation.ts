import z from 'zod'

export const AuditValidationSchema = z.object({
  userId: z.uuid(),
  action: z.string(),
  timestamp: z.iso.datetime(),
  details: z.string().optional(),
})
