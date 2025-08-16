import { model, models, Schema } from 'mongoose'
import { IMessage } from '../schemas/message.schema'

const messageSchema = new Schema<IMessage>(
  {
    userId: { type: String, ref: 'User', required: true },
    content: { type: String, required: true },
    sender: { type: String, required: true },
    timestamp: { type: String, default: Date.now().toString() },
  },
  {
    timestamps: true,
  }
)

export const Message =
  models.Message || model<IMessage>('Message', messageSchema)
