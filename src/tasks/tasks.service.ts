import { GetTaskResDto } from './dto/get-task-dto';
import { User } from 'src/auth/user.entity';
import { TaskRepository } from './tasks.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskReqDto, CreateTaskResDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository) private taskRepository: TaskRepository,
  ) {}

  getTasks(filterDto: GetTasksFilterDto, user: User): Promise<GetTaskResDto[]> {
    return this.taskRepository.getTasks(filterDto, user);
  }

  async getTaskById(id: string, user: User) {
    const found = await this.taskRepository.findOne({ where: { id, user } });
    if (!found) {
      throw new NotFoundException();
    }
    return found;
  }

  createTask(
    createTaskDto: CreateTaskReqDto,
    user: User,
  ): Promise<CreateTaskResDto> {
    return this.taskRepository.createTask(createTaskDto, user);
  }

  async deleteTaskById(id: string, user: User): Promise<void> {
    const result = await this.taskRepository.delete({ id, user });
    if (result.affected === 0) {
      throw new NotFoundException('Task not found!');
    }
  }
  async updateTaskStatus(
    id: string,
    status: TaskStatus,
    user: User,
  ): Promise<GetTaskResDto> {
    const task = await this.getTaskById(id, user);

    task.status = status;

    await this.taskRepository.save(task);

    return task;
  }
}
