import { GetTaskResDto } from './dto/get-task-dto';
import { User } from 'src/auth/user.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetUser } from 'src/auth/get-user.decorator';
import { CreateTaskReqDto, CreateTaskResDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { UpdateTaskStatusDto } from './dto/update-task-status-dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
@UseGuards(AuthGuard())
@ApiTags('Tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @ApiOkResponse()
  @ApiBearerAuth('accessToken')
  @Get()
  async getTasks(
    @Query() filterDto: GetTasksFilterDto,
    @GetUser() user: User,
  ): Promise<GetTaskResDto[]> {
    return await this.tasksService.getTasks(filterDto, user);
  }

  @Get('/:id')
  @ApiOkResponse()
  @ApiBearerAuth('accessToken')
  async getTaskById(
    @Param('id') id: string,
    @GetUser() user: User,
  ): Promise<GetTaskResDto> {
    return await this.tasksService.getTaskById(id, user);
  }

  @Post()
  @ApiBearerAuth('accessToken')
  @ApiNoContentResponse()
  async createTask(
    @Body() createTaskReqDto: CreateTaskReqDto,
    @GetUser() user: User,
  ): Promise<CreateTaskResDto> {
    return await this.tasksService.createTask(createTaskReqDto, user);
  }

  @ApiBearerAuth('accessToken')
  @ApiOkResponse()
  @Delete('/:id')
  async deleteTaskById(
    @Param('id') id: string,
    @GetUser() user: User,
  ): Promise<void> {
    return await this.tasksService.deleteTaskById(id, user);
  }

  @ApiBearerAuth('accessToken')
  @ApiOkResponse()
  @Patch('/:id/status')
  async updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
    @GetUser() user: User,
  ): Promise<GetTaskResDto> {
    const { status } = updateTaskStatusDto;
    return await this.tasksService.updateTaskStatus(id, status, user);
  }
}
