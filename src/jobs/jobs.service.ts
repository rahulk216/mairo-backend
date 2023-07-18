import { BadRequestException, ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

interface createJobsParam {
  roleName: string;
  jobDescription : string;
  vacancies: number;
  org_id : number;
  skill_id: number;
  jobCategory: string;
  jobPublishDate: Date;
  expiryDate: Date;
  experience: number;
  jobTier: string;
  skillList: string;
  jobSalary: number;
}

interface updateJobsParams {
  roleName?: string;
  jobDescription?: string;
  vacancies?: number;
  org_id?: number;
  skill_id?: number;
  jobCategory?: string;
  jobPublishDate?: Date;
  expiryDate?: Date;
  experience?: number;
  jobTier?: string;
  skillList?: string;
  jobSalary?: number;
}

@Injectable()
export class JobsService {

  constructor(private readonly prismaService: PrismaService) { }

  async createJob({
    roleName,
    jobDescription,
    vacancies,
    org_id,
    skill_id,
    jobCategory,
    jobPublishDate,
    expiryDate,
    experience,
    jobTier,
    skillList,
    jobSalary
  }: createJobsParam) {
    const response = await this.prismaService.jobs.create({
      data: {
        roleName,
        jobDescription,
        vacancies,
        org_id,
        skill_id,
        jobCategory,
        jobPublishDate,
        expiryDate,
        experience,
        jobTier,
        skillList,
        jobSalary,
      },
    });
    if (response) return response;
  }

    async getAllJobs() {
        const response = await this.prismaService.jobs.findMany();
        if (response) return response;
        else return {};
    }

    async getJobById(id: number) {
        const response = await this.prismaService.jobs.findUnique({
            where: {
                id: Number(id),
            },
        });
        if (response) return response;
        else throw new NotFoundException('Job not found');
    }

    async updateJob(id: number, body: updateJobsParams) {
      console.log(Object.keys(body).length === 0)
      if(Object.keys(body).length === 0){
        throw new BadRequestException('Empty Object');
      }
      const jobExists = await this.prismaService.skill.findUnique({
          where: {
              id: id,
          },
      });

      if (!jobExists) throw new ConflictException();

      const response = await this.prismaService.jobs.update({
          where: {
              id: id,
          },
          data: body
      });

      if (response) throw new HttpException('Jobs Updated', HttpStatus.OK);
      throw new HttpException('Jobs not updated', HttpStatus.OK)
  }

    async deleteJob(id: number) {
        const jobExists = await this.prismaService.jobs.findUnique({
            where: {
                id: id,
            },
        });

        if (jobExists) {
            const response = await this.prismaService.jobs.delete({
                where: {
                    id: Number(id),
                },
            });
            if (response)
                throw new HttpException('Job deleted successfully', HttpStatus.OK);
        }
        throw new HttpException('Job not found', HttpStatus.NO_CONTENT);
    }
}
