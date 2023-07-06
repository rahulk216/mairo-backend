import { createOrganizationDto } from './dtos/organization.dtos';
import { OrganizationService } from './organization.service';
import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post('')
  async createOrganization(@Body() body: createOrganizationDto) {
    return this.organizationService.createOrganization(body);
  }

  @Get('')
  async getOrganizationList() {
    return this.organizationService.getOrganizationList();
  }

  @Get(':id')
  async getOrganizationById(@Param('id') id) {
    return this.organizationService.getOrganizationById(id);
  }

  @Put('')
  async updateOrganization() {
    return this.organizationService.updateOrganization();
  }

  @Delete(':id')
  async deleteOrganization(@Param('id') id: number) {
    return this.organizationService.deleteOrganization(id);
  }
}
