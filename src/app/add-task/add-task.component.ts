import { Component, OnInit } from '@angular/core';
import { TaskService } from "../task.service";
import { LogService } from "../log.service";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [ TaskService, LogService ]
})
export class AddTaskComponent implements OnInit {

  newItem = {name: '', id: 0};
  items = [];
  constructor(private taskService: TaskService){}

  addItem(task){

    this.taskService.addTask(task);
    this.taskService.getTasks();
  }
  ngOnInit(){
    this.items = this.taskService.getTasks();
    this.items = this.taskService.getTasks();
    // this.items = this.taskService.getTasks();
  }

}
