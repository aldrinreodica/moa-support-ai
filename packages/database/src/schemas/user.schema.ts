import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'
import { v4 as uuidv4 } from 'uuid'

@Schema({ timestamps: true })
@ObjectType()
export class User {
  @Prop({ type: String, default: uuidv4 })
  @Field(() => ID)
  _id: string

  @Prop({ required: true })
  @Field(() => String)
  firstName: string

  @Prop({ required: true })
  @Field(() => String)
  lastName: string

  @Prop({ required: true, unique: true })
  @Field(() => String)
  email: string

  @Prop({ required: true })
  @Field(() => String)
  password: string

  @Prop({ default: 'user' })
  @Field(() => String)
  role: string

  @Prop({ default: true })
  @Field(() => Boolean)
  isActive: boolean

  @Prop({ default: false })
  @Field(() => Boolean)
  isVerified: boolean

  @Prop({ default: null })
  @Field(() => Date, { nullable: true })
  lastLogin: Date
}

export type UserDocument = User & Document

export const UserSchema = SchemaFactory.createForClass(User)
