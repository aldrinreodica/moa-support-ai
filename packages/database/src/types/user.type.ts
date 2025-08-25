import { z } from 'zod'
import { UserValidationSchema } from '../validations/user.validation'

export type IUser = z.infer<typeof UserValidationSchema>
