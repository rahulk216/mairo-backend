import { createOrganizationDto } from './dtos/organization.dtos';
import { PrismaService } from './../prisma/prisma.service';
import { OrganizationModule } from './organization.module';
import { Injectable, ConflictException, HttpException } from '@nestjs/common';
import { returnPayload } from '../util';
import * as bcrypt from 'bcryptjs';

interface createOrganizationParam {
  name: string;
  orgLocation: string;
  description: string;
}

@Injectable()
export class OrganizationService {
  constructor(private readonly prismaService: PrismaService) {}

  async createOrganization({
    name,
    orgLocation,
    description,
  }: createOrganizationParam) {
    const response = await this.prismaService.organization.create({
      data: {
        name,
        orgLocation,
        description,
      },
    });
    if (response) return response;
  }

  async getOrganizationList() {
    const response = await this.prismaService.organization.findMany();
    if (response) return response;
    else return {};
  }

  async getOrganizationById(id: number) {
    const response = await this.prismaService.organization.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (response) return response;
    else return {};
  }

  async updateOrganization() {}

  async deleteOrganization(id: number) {
    const userExists = await this.prismaService.organization.findUnique({
      where: {
        id: id,
      },
      include: { user: true, jobs: true },
    });
    
    if (userExists?.user.length > 0 || userExists?.jobs.length > 0)
      return returnPayload(204, 'Foreign Key Dependency with user and job');
    else {
      if (userExists) {
        const response = await this.prismaService.organization.delete({
          where: {
            id: Number(id),
          },
        });
        if (response)
          return returnPayload(200, 'Organization deleted successfully');
      }
      return returnPayload(204, 'Organization not found');
    }
  }
}
