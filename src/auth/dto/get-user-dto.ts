import { GetOrganisationResDto } from 'src/organisation/dto/get-organisation-dto';

export class GetUserResDto {
  id: string;

  username: string;

  name?: string;

  role: string;

  avatar?: string;

  creationDate: string;

  isActive: boolean;

  organisation?: GetOrganisationResDto;
}
