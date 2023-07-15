import { AuthCheckMiddleware } from './middleware/authorization.middleware';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrganizationModule } from './organization/organization.module';
import { SkillsModule } from './skills/skills.module';
import { CandidateModule } from './candidate/candidate.module';

@Module({
  imports: [UserModule, PrismaModule, OrganizationModule, SkillsModule, CandidateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthCheckMiddleware)
      .exclude({ path: 'auth/signin', method: RequestMethod.POST })
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
