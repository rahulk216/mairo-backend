import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Roles } from 'src/user/auth/roles.decorator';
import { RolesGuard } from 'src/user/auth/roles.guard';
import { JobsService } from './jobs.service';
import { createJobDto, updateJobDto } from './dtos/job.dtos';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) { }

    @Post('')
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    async createJob(@Body() body: createJobDto) {
        return this.jobsService.createJob(body);
    }

    @Get('')
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    async getAllJobs() {
        return this.jobsService.getAllJobs();
    }

    @Get(':id')
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    async getJobById(@Param('id') id: number) {
        return this.jobsService.getJobById(id);
    }

    @Put(':id')
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    async updateJob(@Body() body: updateJobDto, @Param('id') id: number) {
      console.log(body)
        return this.jobsService.updateJob(id, body);
    }

    @Delete(':id')
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    async deleteJob(@Param('id') id: number) {
        return this.jobsService.deleteJob(id);
    }

}
