import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { ROLES_KEY } from '@/core/role/role.decorator';
import { ERole } from '@/utils/enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<ERole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (
      !requiredRoles ||
      !requiredRoles.length ||
      requiredRoles.includes(ERole.MASTER_ADMIN)
    ) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();

    if (!requiredRoles.some((role) => user.role?.includes(role))) {
      throw new HttpException('Forbidden resource', HttpStatus.FORBIDDEN);
    }
    return true;
  }
}
