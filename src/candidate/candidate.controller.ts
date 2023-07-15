import { createCandidateDto } from './dtos/candidate.dtos';
import { CandidateService } from './candidate.service';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('candidate')
export class CandidateController {
  constructor(private readonly candidateService: CandidateService) {}

  @Post('')
  async createCandidate(@Body() body: createCandidateDto){
    console.log(body)
    return this.candidateService.createCandidate(body)
  }

  @Get('')
  async getAllCandidates(){
    return this.candidateService.getAllCandidates()
  }

  @Get(':id')
  async getCandidateById(@Param('id') id: number){
    return this.candidateService.getCandidateById(id)
  }

  @Put(':id')
  async updateCandidate(@Body() body, @Param('id') id: number){
    return this.candidateService.updateCandidate(id)
  }

  @Delete(':id')
  async deleteCandidate(@Param('id') id: number){
    return this.candidateService.deleteCandidate(id)
  }
}
