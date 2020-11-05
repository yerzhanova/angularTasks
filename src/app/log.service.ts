import { Injectable } from '@angular/core';
import { AppModule } from "./app.module"
@Injectable(
  // {
  // providedIn: AppModule
// }
)
export class LogService {

  constructor() { }
  write(logMessage:string){

    console.log(logMessage);
  }
}
