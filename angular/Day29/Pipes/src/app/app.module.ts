import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SqrtPipe } from './sqrt.pipe';
import { ReversePipe } from './reverse.pipe';
import { PiglatinPipe } from './piglatin.pipe';
import { MyencrptPipe } from './myencrpt.pipe';
import { MultiplierPipe } from './multiplier.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SqrtPipe,
    ReversePipe,
    PiglatinPipe,
    MyencrptPipe,
    MultiplierPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
