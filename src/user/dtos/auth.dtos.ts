import { matchesPattern } from '@babel/types';
import { UserType } from '@prisma/client';
import {IsString, IsNotEmpty, IsEmail, MinLength, Matches, isEnum, IsEnum} from 'class-validator'

export class signupDto{
  @IsString()
  @IsNotEmpty()
  name: string;
  @Matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, {message : 'Phone must be a valid phone number'})
  phone: string;
  @IsEmail()
  email: string;
  @MinLength(5)
  password: string;
}

export class signinDto{
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(5)
  password: string;

  @IsEnum(UserType)
  role: UserType
}

export class generateProductKeyDto{
  @IsEmail()
  email: string;

  @IsEnum(UserType)
  userType: UserType
}