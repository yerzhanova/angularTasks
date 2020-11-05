import { Component, OnInit, OnDestroy, OnChanges, Optional } from '@angular/core';
import { TaskService} from "../task.service"
import { TASKS } from './mock-tasks';
import {LogService} from "../log.service";
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators'


@Component({
  selector: 'app-tasks-view',
  templateUrl: './tasks-view.component.html',
  styleUrls: ['./tasks-view.component.css'],
  // providers: [ TaskService, LogService ]
})

export class TasksViewComponent implements OnInit, OnDestroy, OnChanges {


  task = {
    id: 0,
    name: ''
  };
  tasks = [];
  // task: string = '';
  logs = [];
  newName: string ='';
  user;
  date = new Date();
  power = "123";
  message$: Observable <string>;
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?',
    'Yes!'
  ];
  classes = "add";
// constructor(@Optional() taskService: TaskService) {
  constructor(private taskService: TaskService) {
    // if (taskService)

      // this.tasks = taskService.getTasks();
    // else this.tasks = TASKS;
  }
  ngOnInit()    {
    this.logIt(`onInit`);
    // this.taskService.getTasks().subscribe((data) => this.user=data);
    console.log(this.user, "fff")
    this.tasks = this.taskService.getTasks();


  }

  ngOnDestroy() { this.logIt(`onDestroy`); }

  ngOnChanges() {
    console.log('change det');
    this.logIt(`onChanged`); }

  private logIt(msg: string) {
    // this.logger.log(`Spy #${nextId++} ${msg}`);
    console.log(typeof this.logs);
    // this.logs.push('msg');
    console.log(msg, 'logged')
  }
  removeHero(hero: string) {
    // this.heroes.splice(this.heroes.indexOf(hero), 1);
    // this.logger.tick();
  }
  reset() {
    // this.logger.log('-- reset --');
    console.log('reset');
    // this.heroes = [];
    // this.logger.tick();
  }
  addTask(task) {
    console.log('add hero');
    this.taskService.addTask({name: task, id: 1});
    this.taskService.getTasks();
    // this.heroes.push(this.newName);
  }
  resend(){
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }
}
