import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Audit extends Document {
  @Prop({ required: true, ref: 'User' })
  userId: string

  @Prop({ required: true })
  action: string

  @Prop({ default: Date.now().toString() })
  timestamp: string

  @Prop()
  details: string
}

export const AuditSchema = SchemaFactory.createForClass(Audit)
