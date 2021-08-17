import { User } from 'src/auth/user.entity';
import { OrganisationsRepository } from './organisations.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrganisationDto } from './dto/create-organisation-dto';
import { Organisation } from './organisation.entity';

@Injectable()
export class OrganisationService {
  constructor(
    @InjectRepository(OrganisationsRepository)
    private organisationsRepository: OrganisationsRepository,
  ) {}

  async createOrganisation(
    createOrganisationDto: CreateOrganisationDto,
    user: User,
  ): Promise<Organisation> {
    return this.organisationsRepository.createOrganisation(
      createOrganisationDto,
      user,
    );
  }
}
