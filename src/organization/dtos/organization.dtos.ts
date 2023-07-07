import {
  IsString,
  IsNotEmpty,
  IsOptional
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

export class updateOrganizationDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  orgLocation: string;

  @IsOptional()
  @IsString()
  description: string;
}