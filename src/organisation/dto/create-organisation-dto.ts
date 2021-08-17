import { IsNotEmpty } from 'class-validator';

export class CreateOrganisationDto {
  @IsNotEmpty()
  name: string;

  address?: string;

  website?: string;
}
