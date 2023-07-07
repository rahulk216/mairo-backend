import { NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class AuthCheckMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req?.headers?.authorization?.split(' ')[1]
    if(!token) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    next()
  }
}