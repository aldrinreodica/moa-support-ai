import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Session extends Document {
  @Prop({ required: true, ref: 'User' })
  userId: string

  @Prop({ required: true })
  expiresAt: Date

  @Prop({ required: true })
  token: string
}

export const SessionSchema = SchemaFactory.createForClass(Session)
