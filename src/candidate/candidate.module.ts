import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CandidateController } from './candidate.controller';
import { CandidateService } from './candidate.service';

@Module({
  imports: [PrismaModule],
  controllers: [CandidateController],
  providers: [CandidateService]
})
export class CandidateModule {}
