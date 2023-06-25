import { signupDto, signinDto } from './../dtos/auth.dtos';
import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){ }

  @Post('signup')
  signup(@Body() body: signupDto){
    return this.authService.signup(body)
  }

  @Post('signin')
  signin(@Body() body: signinDto){
    return this.authService.login(body)
  }

  @Get('getuser')
  getuser(@Body() body: signinDto){
    return this.authService.getUser()
  }
}
