import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  private TASKS = [
    {
      id: 1,
      name: 'Go to home...',
      isDone: false,
    },
    {
      id: 2,
      name: 'Do your homework...',
      isDone: false,
    },
  ];

  getAll() {
    return this.TASKS;
  }

  create(dto: TaskDto) {
    this.TASKS.push({
      id: this.TASKS.length + 1,
      isDone: false,
      name: dto.name,
    });

    return this.TASKS;
  }

  toggleDone(id: string) {
    const task = this.TASKS.find((task) => task.id === +id);
    if (!task) {
      throw new NotFoundException('Task topilmadi!');
    }
    task.isDone = !task.isDone;
    return task;
  }
}
