import { z } from 'zod'

export const UserValidationSchema = z.object({
  _id: z.uuid(),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.email({
    pattern:
      /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9]*\.)+[a-z]{2,}$/i,
  }),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(
      /[^a-zA-Z0-9]/,
      'Password must contain at least one special character'
    ),
  profilePicture: z.string().url().optional(),
  role: z.enum(['user', 'admin']).default('user'),
  lastLogin: z.date().optional(),
  isActive: z.boolean().default(true),
  isVerified: z.boolean().default(false),
})
