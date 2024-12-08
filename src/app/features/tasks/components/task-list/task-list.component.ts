import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../core/services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAllTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  // get tasks() {
  //   return this.taskService.getAllTasks();
  // }
}
