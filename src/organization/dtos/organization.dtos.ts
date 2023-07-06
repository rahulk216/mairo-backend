import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Matches,
  isEnum,
  IsEnum,
} from 'class-validator';

export class createOrganizationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  orgLocation: string;

  @IsString()
  @IsNotEmpty()     
  description: string;  
}