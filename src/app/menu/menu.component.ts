import { Component, OnInit,EventEmitter, Output  } from '@angular/core';

declare var openNav: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent  {
  
  @Output() SiteSelected = new EventEmitter<number>();
  OldId:number;
  NewId:number;
  
  SiteChange(siteId:number) {
   this.SiteSelected.emit(siteId);
   this.OldId=this.NewId;
   this.NewId=siteId;
   (<HTMLInputElement>document.getElementById('Site'+this.NewId)).setAttribute("class", "main-menu-button-clicked");
   (<HTMLInputElement>document.getElementById('Site'+this.OldId)).setAttribute("class", "main-menu-button");
   if(window.screen.width>620) { 
    openNav.setStandardNav();
   }
   if((<HTMLButtonElement>document.getElementById('hideMenuButton')).style.display == "block")
   openNav.closeNav();
  }

  openMenu() {
    openNav.openNav();
  }
  hideMenu()
  {
    openNav.closeNav();
  }
}

