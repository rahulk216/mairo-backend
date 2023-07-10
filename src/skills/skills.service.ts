import { ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface createSkillsParam {
    skillName: string;
}

interface updateSkillsParams {
    skillName?: string;
}

@Injectable()
export class SkillsService {
    constructor(private readonly prismaService: PrismaService) { }

    async createSkills({
        skillName
    }: createSkillsParam) {
        const response = await this.prismaService.skill.create({
            data: {
                skillName
            },
        });
        if (response) return response;
    }

    async getAllSkills() {
        const response = await this.prismaService.skill.findMany();
        if (response) return response;
        else return {};
    }

    async getSkillById(id: number) {
        const response = await this.prismaService.skill.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (response) return response;
        else throw new NotFoundException('Skill not found');
    }

    async updateSkill(id: number, body: updateSkillsParams) {
        const skillExists = await this.prismaService.skill.findUnique({
            where: {
                id: id,
            },
        });

        if (!skillExists) throw new ConflictException();

        const response = await this.prismaService.skill.update({
            where: {
                id: id,
            },
            data: body
        });

        if (response) throw new HttpException('Skill Updated', HttpStatus.OK);
        throw new HttpException('Skill not updated', HttpStatus.OK)
    }

    async deleteSkill(id: number) {
        const skillExists = await this.prismaService.skill.findUnique({
            where: {
                id: id,
            },
        });

        if (skillExists) {
            const response = await this.prismaService.skill.delete({
                where: {
                    id: Number(id),
                },
            });
            if (response)
                throw new HttpException('Skill deleted successfully', HttpStatus.OK);
        }
        throw new HttpException('Skill not found', HttpStatus.NO_CONTENT);
    }
}
