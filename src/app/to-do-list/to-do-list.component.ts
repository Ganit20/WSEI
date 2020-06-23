import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
var toDoElement = {name:String,date:String,time:String}
export class ToDoListComponent  {
  
  Array<toDoElement> = new Array<toDoElement>();


}
