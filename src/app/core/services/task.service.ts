import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: { title: string; description: string }[] = [];

  createTask(task: { title: string; description: string }) {
    this.tasks.push(task);
  }

  getAllTasks() {
    return this.tasks;
  }
}
