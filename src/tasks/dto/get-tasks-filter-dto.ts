import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTasksFilterDto {
  @ApiProperty({
    description: 'should be valid task status from that organisation',
    required: false,
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @ApiProperty({
    description: 'string part of task title or description',
    required: false,
  })
  @ApiProperty()
  @IsOptional()
  @IsString()
  search?: string;
}
