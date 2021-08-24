import { ApiProperty } from '@nestjs/swagger';
import { GetUserResDto } from 'src/auth/dto/get-user-dto';

export class GetTaskResDto {
  @ApiProperty({
    example: 'some-id-here',
  })
  id: string;

  @ApiProperty({
    example: 'Cleaning the room',
  })
  title: string;

  @ApiProperty({
    example: 'My room should be cleaned as hell',
  })
  description: string;

  @ApiProperty({
    example: 'TODO',
  })
  status: string;

  user: GetUserResDto;
}
