import { Organisation } from 'src/organisation/organisation.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Organisation)
export class OrganisationsRepository extends Repository<Organisation> {}
