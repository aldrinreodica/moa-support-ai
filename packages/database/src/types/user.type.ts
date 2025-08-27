import { z } from 'zod'
import { UserValidationSchema } from '../validations/user.validation'

export type IUser = z.infer<typeof UserValidationSchema>

export enum UserRoleEnum {
  SUPERADMIN = 'SUPERADMIN',
  ADMIN = 'ADMIN',
  USER = 'USER',
}

// Zod schema
export const UserRoleSchema = z.enum([
  UserRoleEnum.SUPERADMIN,
  UserRoleEnum.ADMIN,
  UserRoleEnum.USER,
])

export type UserRole = z.infer<typeof UserRoleSchema>
