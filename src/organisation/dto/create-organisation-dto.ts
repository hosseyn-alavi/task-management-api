import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOrganisationDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  address?: string;

  @ApiProperty()
  website?: string;
}
