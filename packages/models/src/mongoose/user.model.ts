import { model, models, Schema } from 'mongoose'
import { IUser } from '../schemas/user.schema'
import { v4 as uuidv4 } from 'uuid'

const userSchema = new Schema<IUser>(
  {
    _id: {
      type: String,
      default: uuidv4(),
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    role: { type: String, default: 'user' },
    lastLogin: { type: Date },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)

export const User = models.User || model<IUser>('User', userSchema)
