import { User } from 'src/auth/user.entity';
import { OrganisationsRepository } from './organisations.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrganisationDto } from './dto/create-organisation-dto';
import { GetOrganisationResDto } from './dto/get-organisation-dto';

@Injectable()
export class OrganisationService {
  constructor(
    @InjectRepository(OrganisationsRepository)
    private organisationsRepository: OrganisationsRepository,
  ) {}

  async getOrganisationById(id: string): Promise<GetOrganisationResDto> {
    const organisation = await this.organisationsRepository.findOne({ id });
    const organisationUsers = organisation.users.map((user) => ({
      name: user.name,
      id: user.id,
      username: user.username,
    }));
    return {
      id: organisation.id,
      name: organisation.name,
      address: organisation.address,
      website: organisation.website,
      logo: organisation.logo,
      users: organisationUsers,
    };
  }

  async createOrganisation(
    createOrganisationDto: CreateOrganisationDto,
    user: User,
  ): Promise<GetOrganisationResDto> {
    const organisation = await this.organisationsRepository.createOrganisation(
      createOrganisationDto,
      user,
    );

    const organisationUsers = organisation.users.map((user) => ({
      name: user.name,
      id: user.id,
      username: user.username,
    }));

    return {
      id: organisation.id,
      name: organisation.name,
      address: organisation.address,
      website: organisation.website,
      logo: organisation.logo,
      users: organisationUsers,
    };
  }
}
