import { createOrganizationDto } from './dtos/organization.dtos';
import { PrismaService } from './../prisma/prisma.service';
import { OrganizationModule } from './organization.module';
import { Injectable, ConflictException, HttpException } from '@nestjs/common';
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
    // console.log(id, 'deleteOrganization')
    // const response = await this.prismaService.organization.delete({
    //   where: {
    //     id: Number(id),
    //   },
    // });

    // if (response)
    //   return {
    //     statusCode: 202,
    //     message: 'organization deleted successfully',
    //   };

    // return { statusCode: 204, message: 'organization not found' };
  }
}
