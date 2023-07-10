import { Injectable, ConflictException, HttpException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { UserType } from '@prisma/client';
import { generateJWT } from 'src/util';

interface SignupParams {
  email: string;
  password: string;
  name: string;
}

interface SigninParams {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  //admin signup route
  async adminsignup({ email, password, name }: SignupParams) {
    const userExists = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      throw new ConflictException();
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prismaService.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: UserType.ADMIN,
        org_id: 1,
      },
    });
    const token = await generateJWT(name, user.id, UserType.ADMIN);

    return token;
  }

  // login route created
  async login({ email, password }: SigninParams) {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) {
      throw new HttpException('Invalid Credentials', 400);
    }

    const hashedPassword = user.password;

    const isValidPassword = await bcrypt.compare(password, hashedPassword);

    if (!isValidPassword) {
      throw new HttpException('Invalid Credentials', 400);
    }

    return generateJWT(user.name, user.id, user.role);
  }

  //get user route
  async getUser() {
    return 'getUser';
  }

  async deleteUser(id){
    const user = await this.prismaService.user.findUnique({ where: { id } });
    if (!user) {
      throw new HttpException('User Not Found', 400);
    }
    const deleteUser = await this.prismaService.user.delete({
      where: {
        id: id,
      },
    })
    return deleteUser;
  }
}
