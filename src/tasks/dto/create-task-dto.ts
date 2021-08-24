import { GetTaskResDto } from './get-task-dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTaskReqDto {
  @IsNotEmpty()
  @ApiProperty({
    example: 'Cleaning the room',
    description: 'The title of the task',
  })
  title: string;

  @ApiProperty({
    example: 'My room should be cleaned as hell',
    description: 'The description of the task',
  })
  @IsNotEmpty()
  description: string;
}

export class CreateTaskResDto extends GetTaskResDto {}
