import { Injectable, ConflictException, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { UserType } from '@prisma/client';
import { generateJWT } from 'src/util';
import * as generator from 'generate-password'
import { MailjetService } from 'nest-mailjet'


interface SignupParams {
  email: string;
  password: string;
  name: string;
}

interface SigninParams {
  email: string;
  password: string;
}

interface createUser {
  name: string;
  email: string;
  role: string;
  org_id: number;
}

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService, private readonly mailjetService: MailjetService) { }

  async createUser({ email, name, role, org_id }: createUser) {
    const userExists = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      throw new ConflictException();
    }

    let tentativePassword = generator.generate({
      length: 10,
      numbers: true
    });
    const hashedPassword = await bcrypt.hash(tentativePassword, 10);

    const user = await this.prismaService.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: UserType[role],
        org_id: Number(org_id),
      },
    });

    if (user) {
      const { response } = await this.mailjetService.send({
        Messages: [
          {
            From: {
              Email: process.env.FROM_EMAIL,
            },
            To: [
              {
                Email: email,
              },
            ],
            Subject: `Hi ${name.split(' ')[0]} !! Welcome to Maiora`,
            TextPart: `This is your password: ${tentativePassword}`,
          },
        ],
      })

      if (response.status === 200) throw new HttpException(`Mail sent successfully to user email: ${email}`, 202)
      throw new HttpException(`Mail did nto get sent successfully`, 404)
    }
    throw new HttpException('User already exists', 400)
  }

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

  async deleteUser(id) {
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
