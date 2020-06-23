import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WSEI';
  SelectedSiteid:number=0;
   isMainSite:boolean = this.SelectedSiteid==0?true:false;
   isTodoListSite:boolean = this.SelectedSiteid==1?true:false;
   isVideoSite:boolean = this.SelectedSiteid==2?true:false;
   isAboutSite:boolean = this.SelectedSiteid==3?true:false;
  OnSiteChange(ev:number) {
    this.SelectedSiteid=ev;
    this.isMainSite = this.SelectedSiteid==0?true:false;
    this.isTodoListSite = this.SelectedSiteid==1?true:false;
    this.isVideoSite = this.SelectedSiteid==2?true:false;
    this.isAboutSite = this.SelectedSiteid==3?true:false;
    console.log(this.isMainSite);

  }
  
  
  
}
