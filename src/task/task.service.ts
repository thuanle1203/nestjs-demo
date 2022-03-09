import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private taskRepository: Repository<Task>
  ) {}

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    return await this.taskRepository.findOne(id);
  }

  async create(task: Task): Promise<Task> {
    return await this.taskRepository.save(task);
  }

  async update(task: Task): Promise<UpdateResult> {
    return await this.taskRepository.update(task.id, task);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.taskRepository.delete(id);
  }
}
