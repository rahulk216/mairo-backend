import {
    IsString,
    IsNotEmpty,
    IsOptional
} from 'class-validator';

export class createSkillDto {
    @IsString()
    @IsNotEmpty()
    skillName: string;
}

export class updateSkillDto {
    @IsOptional()
    @IsString()
    skillName: string;
}