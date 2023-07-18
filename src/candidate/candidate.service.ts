import { PrismaService } from './../prisma/prisma.service';
import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';

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

  async updateCandidate(id, body){
    const userExists = await this.prismaService.candidate.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExists) throw new ConflictException();

    const response = await this.prismaService.candidate.update({
      where: {
        id: id,
      },
      data: body
    });

    if (response) throw new HttpException('Candidate Updated', HttpStatus.OK);
    throw new HttpException('Candidate not updated', HttpStatus.OK)
    
    
  }

  async deleteCandidate(id){
    const candidateExists = await this.prismaService.candidate.findUnique({
      where:{
        id: Number(id)
      }
    })

    if(!candidateExists) throw new HttpException('Candidate does not exist', HttpStatus.NOT_FOUND);

    const response = await this.prismaService.candidate.delete({
      where: {
        id: Number(id),
      },
    });
    if (response) throw new HttpException('Candidate deleted successfully', HttpStatus.OK);
  }
}
