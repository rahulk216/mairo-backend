import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Roles } from 'src/user/auth/roles.decorator';
import { RolesGuard } from 'src/user/auth/roles.guard';
import { createSkillDto, updateSkillDto } from './dtos/skill.dtos';

@Controller('skills')
export class SkillsController {
    constructor(private readonly skillsService: SkillsService) { }

    @Post('')
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    async createSkill(@Body() body: createSkillDto) {
        return this.skillsService.createSkills(body);
    }

    @Get('')
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    async getAllSkills() {
        return this.skillsService.getAllSkills();
    }

    @Get(':id')
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    async getSkillById(@Param('id') id: number) {
        return this.skillsService.getSkillById(id);
    }

    @Put(':id')
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    async updateOrganization(@Body() body: updateSkillDto, @Param('id') id: number) {
        return this.skillsService.updateSkill(id, body);
    }

    @Delete(':id')
    @UseGuards(RolesGuard)
    @Roles('ADMIN')
    async deleteOrganization(@Param('id') id: number) {
        return this.skillsService.deleteSkill(id);
    }

}
