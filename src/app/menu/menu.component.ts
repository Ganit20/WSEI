import { Component, OnInit,EventEmitter, Output  } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {
 
  @Output() SiteSelected = new EventEmitter<number>();
  SiteChange(siteId:number) {
   this.SiteSelected.emit(siteId);
  }
  
}

