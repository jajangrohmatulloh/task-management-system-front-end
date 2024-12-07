import { Component } from '@angular/core';
import { TaskService } from '../../../../core/services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  title = '';
  description = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.title && this.description) {
      this.taskService.createTask({
        title: this.title,
        description: this.description,
      });
      this.title = '';
      this.description = '';
    }
  }
}
