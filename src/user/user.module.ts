import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { MailjetModule } from 'nest-mailjet';
import { AuthService } from './auth/auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
  imports: [PrismaModule, MailjetModule.registerAsync({
    useFactory: () => ({
      apiKey: process.env.MAILJET_API_KEY,
      apiSecret: process.env.MAILJET_API_SECRET,
    }),
  }),],
  controllers: [AuthController],
  providers: [AuthService]
})
export class UserModule { }
