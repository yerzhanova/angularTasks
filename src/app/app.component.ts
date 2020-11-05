import { Component, Optional } from '@angular/core';
import { TaskService} from "./task.service";
import {LogService} from "./log.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [ TaskService, LogService ]
})
export class AppComponent {
  title = 'angularExample';
  constructor(){}
}
