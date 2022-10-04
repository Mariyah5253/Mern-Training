import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FooterComponent } from './footer/footer.component';
import { AmanRathoreComponent } from './aman-rathore/aman-rathore.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    FooterComponent,
    AmanRathoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
