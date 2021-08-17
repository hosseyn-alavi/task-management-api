import { User } from 'src/auth/user.entity';
import { Organisation } from 'src/organisation/organisation.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateOrganisationDto } from './dto/create-organisation-dto';

@EntityRepository(Organisation)
export class OrganisationsRepository extends Repository<Organisation> {
  async createOrganisation(
    createOrganisationDto: CreateOrganisationDto,
    user: User,
  ): Promise<Organisation> {
    const organisation = this.create({
      ...createOrganisationDto,
      users: [user],
    });

    await this.save(organisation);

    return organisation;
  }
}
