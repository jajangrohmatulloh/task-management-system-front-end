import { Component } from '@angular/core';
import { TaskService } from '../../../../core/services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {}

  get tasks() {
    return this.taskService.getAllTasks();
  }
}
