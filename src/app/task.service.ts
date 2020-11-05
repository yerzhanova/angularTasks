import { Injectable } from '@angular/core';
import { TASKS } from './tasks-view/mock-tasks';
import {HttpClient} from '@angular/common/http';
// import { LogService } from "./log.service"
// import { AppModule} from "./app.module"
// @Injectable({
//   providedIn: 'root',
// })
@Injectable(
  // {providedIn: 'root' }
)

export class TaskService {
  i =0;
  constructor(private http: HttpClient) {  }
  getTasks () {
    let arr = TASKS;
    this.i ++;
    // arr = arr.slice(1, 5);
    console.log('arr', arr, this.i);
    // return this.http.get('assets/user.json');
    // this.logService.write("операция получения данных");
    return arr;
  }
  addTask (task) {
    TASKS.push(task);
    console.log(TASKS, "TASKS");
    // this.logService.write("операция записи данных");
    console.log('added');
  }
}
