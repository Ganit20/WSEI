import { Component, OnInit } from '@angular/core';
import { IToDoElement } from '../ito-do-element';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
 
export class ToDoListComponent  {
   toDoArray:Array<IToDoElement> = new Array();
   AddElement() {
     
    var item:IToDoElement = new IToDoElement();
      item.name=(<HTMLInputElement>document.getElementById('todoName')).value;
      item.date=(<HTMLInputElement>document.getElementById('todoDate')).value.toString();
      item.time=(<HTMLInputElement>document.getElementById('todoTime')).value.toString();
    if(item.name=="" || item.date=="" || item.time==""){
      alert("Fields cannot be empty");
      return;}
      if(this.toDoArray.some(x=>x.name==item.name)) {
        alert("This name is already taken");
        return;
      }
    this.toDoArray.push(item); 
    item.id=this.toDoArray.length;
    (<HTMLInputElement>document.getElementById('todoName')).value = "";
  }
  OnElementDelete(id:number) {
    this.toDoArray.splice(this.toDoArray.indexOf(this.toDoArray.find(x=>x.id==id)),1);
    id=1;
    this.toDoArray.forEach(element => {
      element.id=id;
      id++;
    });
  }
   }


