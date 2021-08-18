import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @ApiProperty({
    example: 'Cleaning the room',
    description: 'The title of the task',
  })
  title: string;

  @IsNotEmpty()
  description: string;
}
