import { Component, OnInit,ViewChild, Output, Input, EventEmitter } from '@angular/core';
import { IToDoElement } from '../ito-do-element';


@Component({
  selector: 'app-to-do-list-element',
  templateUrl: './to-do-list-element.component.html',
  styleUrls: ['./to-do-list-element.component.css']
})
export class ToDoListElementComponent implements OnInit {
  @Input() item:IToDoElement;
  ngOnInit() {
    (<HTMLDivElement>document.getElementById('showElement')).id = 'showElement'+this.item.name;
    (<HTMLDivElement>document.getElementById('editElement')).id = 'editElement'+this.item.name;
  }
  constructor() { 
    
   
  }
  @Output() DeleteElement = new EventEmitter<number>();
  DeletePress() {
   this.DeleteElement.emit(this.item.id);
  }
  EditPress() {
    (<HTMLDivElement>document.getElementById('editElement'+this.item.name)).setAttribute("style", "display:block;");
  }
  DonePrees(){
    (<HTMLDivElement>document.getElementById('editElement'+this.item.name)).setAttribute("style", "display:none;");
}
  
}
