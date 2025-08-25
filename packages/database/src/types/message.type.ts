import z from 'zod'
import { MessageValidationSchema } from '../validations/message.validation'

export type IMessage = z.infer<typeof MessageValidationSchema>
