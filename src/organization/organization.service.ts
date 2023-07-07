import { PrismaService } from './../prisma/prisma.service';
import { Injectable, ConflictException, HttpException, HttpStatus } from '@nestjs/common';

interface createOrganizationParam {
  name: string;
  orgLocation: string;
  description: string;
}

interface updateOrganizationParams {
  name?: string;
  orgLocation?: string;
  description?: string;
}

@Injectable()
export class OrganizationService {
  constructor(private readonly prismaService: PrismaService) { }

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

  async updateOrganization(id: number, body: updateOrganizationParams) {
    const userExists = await this.prismaService.organization.findUnique({
      where: {
        id: id,
      },
    });

    if (!userExists) throw new ConflictException();

    const response = await this.prismaService.organization.update({
      where: {
        id: id,
      },
      data: body
    });

    if (response) throw new HttpException('Organization Updated', HttpStatus.OK);
    throw new HttpException('Organization  not updated', HttpStatus.OK)
  }

  async deleteOrganization(id: number) {
    const userExists = await this.prismaService.organization.findUnique({
      where: {
        id: id,
      },
      include: { user: true, jobs: true },
    });

    if (userExists?.user.length > 0 || userExists?.jobs.length > 0)
      throw new HttpException('A User or Job is associated with this organization', HttpStatus.NO_CONTENT)
    else {
      if (userExists) {
        const response = await this.prismaService.organization.delete({
          where: {
            id: Number(id),
          },
        });
        if (response)
          throw new HttpException('Organization deleted successfully', HttpStatus.OK);
      }
      throw new HttpException('Organization not found', HttpStatus.NO_CONTENT);
    }
  }
}
