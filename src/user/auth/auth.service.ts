import { Injectable } from '@nestjs/common';

interface SignupParams{
  email : string;
  password : string;
  phone : string;
  name : string;
}

interface SigninParams{
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  async signup({ email, password, name, phone }: SignupParams) {
    return 'signup'
  }

  async login({ email, password }: SigninParams) {
    return 'login'
  }

  async getUser(){
    return 'getUser'
  }
}
