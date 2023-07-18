import { Transform } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsInt,
  IsNumber,
  IsDate,
  isNotEmpty
} from 'class-validator';


export class createJobDto {
  @IsString()
  @IsNotEmpty()
  roleName: string;

  @IsString()
  @IsNotEmpty()
  jobDescription: string;

  @IsInt()
  @IsNotEmpty()
  vacancies: number;

  @IsInt()
  @IsNotEmpty()
  org_id: number;

  @IsInt()
  @IsNotEmpty()
  skill_id: number;

  @IsString()
  @IsNotEmpty()
  jobCategory: string;

  @IsDate()
  @IsNotEmpty()
  jobPublishDate: Date;

  @IsDate()
  @IsNotEmpty()
  expiryDate : Date;

  @IsInt()
  @IsNotEmpty()
  experience: number;

  @IsString()
  @IsNotEmpty()
  jobTier: string;

  @IsString()
  @IsNotEmpty()
  skillList: string;

  @IsNumber()
  @IsOptional()
  jobSalary: number;


}

export class updateJobDto {
  @IsString()
  @IsOptional()
  roleName: string;

  @IsString()
  @IsOptional()
  jobDescription: string;

  @IsInt()
  @IsOptional()
  vacancies: number;

  @IsInt()
  @IsOptional()
  org_id: number;

  @IsInt()
  @IsOptional()
  skill_id: number;

  @IsString()
  @IsOptional()
  jobCategory: string;

  @IsDate()
  @IsOptional()
  jobPublishDate: Date;

  @IsDate()
  @IsOptional()
  expiryDate : Date;

  @IsInt()
  @IsOptional()
  experience: number;

  @IsString()
  @IsOptional()
  jobTier: string;

  @IsString()
  @IsOptional()
  skillList: string;

  @IsNumber()
  @IsOptional()
  jobSalary: number;
}