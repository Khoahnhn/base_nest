import { ClassSerializerInterceptor, Controller, Get, Req, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";

import { Roles } from "@/core/role/role.decorator";
import { AccountsService } from "@/modules/accounts/accounts.service";
import { ERole } from "@/utils/enum";

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Account')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get('me')
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(RolesGuard)
  @Roles(ERole.ADMIN)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get me' })
  async getMe(@Req() req) {
    return await this.accountsService.handleGetMe(req.user.account_address);
  }
}
