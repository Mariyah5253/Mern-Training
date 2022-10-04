import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoursesService } from './courses.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})

export class AppModule { }
