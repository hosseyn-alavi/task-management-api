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

  async getTasks(
    filterDto: GetTasksFilterDto,
    user: User,
  ): Promise<GetTaskResDto[]> {
    const tasks = await this.taskRepository.getTasks(filterDto, user);
    const mappedTasks: GetTaskResDto[] = tasks.map((task) => ({
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
    }));

    return mappedTasks;
  }

  async getTaskById(id: string, user: User) {
    const task = await this.taskRepository.findOne({ where: { id, user } });
    if (!task) {
      throw new NotFoundException();
    }
    return task;
  }

  async createTask(
    createTaskDto: CreateTaskReqDto,
    user: User,
  ): Promise<CreateTaskResDto> {
    const task = await this.taskRepository.createTask(createTaskDto, user);
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
    };
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

    return {
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
    };
  }
}
