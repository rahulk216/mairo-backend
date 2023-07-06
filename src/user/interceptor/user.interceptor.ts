import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { jwtDecode } from 'src/util';

export class UserInterceptor implements NestInterceptor {
  async intercept(context: ExecutionContext, handler: CallHandler) {
    const request = context.switchToHttp().getRequest()
    const token = request?.header?.authorization?.split('Bearer')[1]
    const user = await jwtDecode(token)
    console.log({token})
    return handler.handle();
  }
}
