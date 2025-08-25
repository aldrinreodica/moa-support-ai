import { z } from 'zod'
import { SessionValidationSchema } from '../validations/session.validation'

export type ISession = z.infer<typeof SessionValidationSchema>
