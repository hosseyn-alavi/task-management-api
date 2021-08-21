import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.entity';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { GetUser } from 'src/auth/get-user.decorator';
import { CreateOrganisationDto } from './dto/create-organisation-dto';
import { OrganisationService } from './organisation.service';
import { Organisation } from './organisation.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard())
@ApiTags('Organisations')
@Controller('organisation')
export class OrganisationController {
  constructor(private organisationService: OrganisationService) {}

  @ApiResponse({
    status: 201,
    description: 'Organisation created',
  })
  @Post()
  createOrganisation(
    @Body() createOrganisationDto: CreateOrganisationDto,
    @GetUser() user: User,
  ): Promise<Organisation> {
    return this.organisationService.createOrganisation(
      createOrganisationDto,
      user,
    );
  }
}
