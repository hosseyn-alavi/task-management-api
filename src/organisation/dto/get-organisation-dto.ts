import { User } from 'src/auth/user.entity';

export class GetOrganisationResDto {
  id: string;

  name: string;

  address: string;

  website: string;

  logo: string;

  users: Pick<User, 'name' | 'id' | 'username'>[];
}
