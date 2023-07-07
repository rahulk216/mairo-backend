import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { verifyJwt } from "src/util";
import { Reflector } from "@nestjs/core";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector){}
  async canActivate(context: ExecutionContext): Promise<boolean>{
    const roles = this.reflector.get<string[]>('roles', context.getHandler())
    const request = context.switchToHttp().getRequest()
    const token = request?.headers?.authorization?.split(' ')[1]
    const user = await verifyJwt(token);
    if(roles.includes(user['role'])) return true
    return false
  }
}