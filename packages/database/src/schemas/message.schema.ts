import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Message extends Document {
  @Prop({ required: true, ref: 'User' })
  userId: string

  @Prop({ required: true })
  content: string

  @Prop({ required: true })
  sender: string

  @Prop({ default: Date.now().toString() })
  timestamp: string
}

export const MessageSchema = SchemaFactory.createForClass(Message)
