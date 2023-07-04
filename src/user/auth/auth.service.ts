import { Injectable, ConflictException, HttpException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { UserType } from '@prisma/client';
import * as jwt from "jsonwebtoken";
import { generateJWT } from 'src/util';

interface SignupParams {
  email: string;
  password: string;
  name: string;
}

interface SigninParams {
  email: string;
  password: string;
  role: UserType;
}

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) { }

  async signup({ email, password, name }: SignupParams) {
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
    const token = await jwt.sign({
      name,
      id: user.id
    }, process.env.JSON_T0KEN_KEY, {
      expiresIn: 3600000
    })

    return token;
  }

  async login({ email, password, role }: SigninParams) {
    console.log(email);
    const user = await this.prismaService.user.findUnique({ where: { email } });
    console.log(user);
    if (!user) {
      throw new HttpException('Invalid Credentials', 400);
    }

    if (user.role === role) {
      const hashedPassword = user.password;

      // const isValidPassword = await bcrypt.compare(password, hashedPassword)

      // if (!isValidPassword) {
      //   throw new HttpException("Invalid Credentials", 400);
      // }

      return generateJWT(user.name, user.id);
    } else {
      throw new HttpException('Invalid Credentials', 400);
    }
  }


  async getUser() {
    return 'getUser';
  }

  // generateProductKey(email: string, userType: UserType) {
  //   const string = `${email}-${userType}-${process.env.PRODUCT_KEY_SECRET}`;
  //   return bcrypt.hash(string, 10);
  // }
}
