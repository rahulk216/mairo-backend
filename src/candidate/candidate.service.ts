import { PrismaService } from './../prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

interface createCandidateParams{
  name: string;
  candidate_token: string;
  candidateLocation: string; 
  experience: number;
  email: string; 
  phone: string; 
  jobStatus: string; 
  candResumeURL: string;
}

@Injectable()
export class CandidateService {
  constructor(private readonly prismaService: PrismaService) { }

  async createCandidate(body: createCandidateParams){
    const {name, candidate_token, candidateLocation, experience, email, phone, jobStatus, candResumeURL} = body
    console.log(name, candidate_token, candidateLocation, experience, email, phone, jobStatus, candResumeURL)
    const response = await this.prismaService.candidate.create({
      data:{
        name,
        candidate_token,
        candidateLocation,
        experience,
        email,
        phone,
        jobStatus,
        candResumeURL
      }
    })

    if (response) return response;

    
  }
  async getAllCandidates(){
    const response = await this.prismaService.candidate.findMany();
    if (response) return response;
    else return {};
  }

  async getCandidateById(id){
    const response = await this.prismaService.candidate.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (response) return response;
    else return {};
  }

  async updateCandidate(id){
    
  }
  async deleteCandidate(id){
  }
}
