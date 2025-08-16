import { model, models, Schema } from 'mongoose'
import { ISession } from '../schemas/session.schema'

const sessionSchema = new Schema<ISession>(
  {
    userId: { type: String, ref: 'User', required: true },
    expiresAt: { type: Date, required: true },
    token: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export const Session =
  models.Session || model<ISession>('Session', sessionSchema)
