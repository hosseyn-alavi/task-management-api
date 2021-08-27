import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.entity';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { CreateOrganisationDto } from './dto/create-organisation-dto';
import { OrganisationService } from './organisation.service';
import {
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetOrganisationResDto } from './dto/get-organisation-dto';

@UseGuards(AuthGuard())
@ApiTags('Organisations')
@Controller('organisation')
export class OrganisationController {
  constructor(private organisationService: OrganisationService) {}

  @ApiOkResponse()
  @ApiBearerAuth('accessToken')
  @Get('/:id')
  async getOrganisationById(
    @Param('id') id: string,
  ): Promise<GetOrganisationResDto> {
    return await this.organisationService.getOrganisationById(id);
  }

  @ApiNoContentResponse()
  @ApiBearerAuth('accessToken')
  @Post()
  async createOrganisation(
    @Body() createOrganisationDto: CreateOrganisationDto,
    @GetUser() user: User,
  ): Promise<GetOrganisationResDto> {
    return await this.organisationService.createOrganisation(
      createOrganisationDto,
      user,
    );
  }
}
