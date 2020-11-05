import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksViewComponent } from './tasks-view/tasks-view.component';


import { TaskService} from "./task.service";
import { AddTaskComponent } from './add-task/add-task.component'
import {LogService} from "./log.service";
import { HttpClientModule } from '@angular/common/http';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { MinePipePipe } from './mine-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TasksViewComponent,
    AddTaskComponent,
    EditTaskComponent,
    MinePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ TaskService, LogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
