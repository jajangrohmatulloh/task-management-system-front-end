import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/api/tasks';
  private tasks: { title: string; description: string }[] = [];
  constructor(private http: HttpClient) {}

  createTask(task: {
    title: string;
    description: string;
    latestTime: string;
    status: string;
  }): Observable<any> {
    // this.tasks.push(task);
    return this.http.post(this.apiUrl, task);
  }

  getAllTasks(): Observable<any> {
    // return this.tasks;
    return this.http.get(this.apiUrl);
  }
}
