import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { TaskStatus } from './../task-status.enum';

export class UpdateTaskStatusDto {
  @ApiProperty({
    description: 'should be valid task status from that organisation',
  })
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
