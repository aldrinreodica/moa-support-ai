import {
  IsString,
  IsEmail,
  IsOptional,
  IsBoolean,
  IsDate,
} from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  firstName: string;

  @Field()
  @IsString()
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  password: string;

  @Field({ defaultValue: 'user' })
  @IsOptional()
  @IsString()
  role?: string = 'user';

  @Field(() => Date)
  @IsOptional()
  @IsDate()
  createdAt?: Date = new Date();

  @Field({ defaultValue: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean = true;

  @Field({ defaultValue: false })
  @IsOptional()
  @IsBoolean()
  isVerified?: boolean = false;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  lastLogin?: Date;
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  firstName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  lastName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  password?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  role?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  isVerified?: boolean;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  lastLogin?: Date;
}
