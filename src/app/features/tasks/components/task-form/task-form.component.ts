import { Component } from '@angular/core';
// import { TaskService } from '@core/services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {
  title: string = '';
  description: string = '';
  latestTime: string = '';
  // latestTime: string = new Date().toISOString();
  status: string = '';

  // constructor(private taskService: TaskService) {}

  createTask() {
    if (this.title && this.description && this.latestTime && this.status) {
      const task = {
        title: this.title,
        description: this.description,
        latestTime: this.latestTime,
        status: this.status,
      };

      // this.taskService.createTask(task).subscribe((response) => {
      //   console.log('Task added successfully', response);
      //   this.clearForm();
      // });
    }
  }

  clearForm() {
    this.title = '';
    this.description = '';
    this.latestTime = '';
    this.status = '';
  }
}
