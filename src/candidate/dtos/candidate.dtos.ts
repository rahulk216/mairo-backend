import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEmail
} from 'class-validator';


export class createCandidateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  candidate_token: string;

  @IsString()
  @IsNotEmpty()
  candidateLocation: string;

  @IsNumber()
  @IsNotEmpty()
  experience: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  jobStatus: string;

  @IsString()
  @IsNotEmpty()
  candResumeURL: string;
}