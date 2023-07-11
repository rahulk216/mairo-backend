import { signupDto, signinDto, createUserDto } from './../dtos/auth.dtos';
import { Body, Controller, Post, Get, Delete, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserType } from '@prisma/client';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('createuser')
  createUser(@Body() body: createUserDto) {
    return this.authService.createUser(body)
  }

  @Post('signup')
  signup(@Body() body: signupDto) {
    return this.authService.adminsignup(body)
  }

  @Post('signin')
  signin(@Body() body: signinDto) {
    return this.authService.login(body)
  }

  @Get('getuser')
  getuser(@Body() body: signinDto) {
    return this.authService.getUser()
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.authService.deleteUser(id)
  }
}
