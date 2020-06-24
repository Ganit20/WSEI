import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { IToDoElement } from '../ito-do-element';

@Component({
  selector: 'app-to-do-list-element',
  templateUrl: './to-do-list-element.component.html',
  styleUrls: ['./to-do-list-element.component.css']
})
export class ToDoListElementComponent  {
  @Input() item:IToDoElement;
  constructor() { 
  }
  @Output() DeleteElement = new EventEmitter<number>();
  DeletePress() {
   this.DeleteElement.emit(this.item.id);
  }
}
