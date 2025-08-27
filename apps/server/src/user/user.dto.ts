import {
  IsString,
  IsEmail,
  IsOptional,
  IsBoolean,
  IsDate,
  IsEnum,
} from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { UserRole } from 'src/graphql/enums/role.enum';

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

  @Field(() => UserRole, { defaultValue: UserRole.USER })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole = UserRole.USER;

  @Field(() => Boolean, { defaultValue: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean = true;

  @Field(() => Boolean, { defaultValue: false })
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

  @Field(() => UserRole, { nullable: true })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  isVerified?: boolean;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDate()
  lastLogin?: Date;
}
