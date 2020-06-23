import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { VideoComponent } from './video/video.component';
import { AboutComponent } from './about/about.component';
import { ToDoListElementComponent } from './to-do-list-element/to-do-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    ToDoListComponent,
    VideoComponent,
    AboutComponent,
    ToDoListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
