import { createOrganizationDto, updateOrganizationDto } from './dtos/organization.dtos';
import { OrganizationService } from './organization.service';
import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/user/auth/roles.decorator';
import { RolesGuard } from 'src/user/auth/roles.guard';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post('')
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  async createOrganization(@Body() body: createOrganizationDto) {
    return this.organizationService.createOrganization(body);
  }

  @Get('')
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  async getOrganizationList() {
    return this.organizationService.getOrganizationList();
  }

  @Get(':id')
  @UseGuards(RolesGuard)
  @Roles('ADMIN', 'MAIORA')
  async getOrganizationById(@Param('id') id: number) {
    return this.organizationService.getOrganizationById(id);
  }

  @Put(':id')
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  async updateOrganization(@Body() body: updateOrganizationDto ,@Param('id') id: number) {
    return this.organizationService.updateOrganization(id, body);
  }

  @Delete(':id')
  @UseGuards(RolesGuard)
  @Roles('ADMIN')
  async deleteOrganization(@Param('id') id: number) {
    return this.organizationService.deleteOrganization(id);
  }
}
