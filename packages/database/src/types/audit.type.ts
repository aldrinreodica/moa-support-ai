import z from 'zod'
import { AuditValidationSchema } from '../validations/audit.validation'

export type IAudit = z.infer<typeof AuditValidationSchema>
