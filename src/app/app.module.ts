import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pgm1Component } from './pgm1/pgm1.component';
import { Pgm2Component } from './pgm2/pgm2.component';
import { Pgm3Component } from './pgm3/pgm3.component';
import { Pgm4Component } from './pgm4/pgm4.component';
import { Pgm5Component } from './pgm5/pgm5.component';
import { Pgm6Component } from './pgm6/pgm6.component';
import { Pgm7Component } from './pgm7/pgm7.component';
import { PipesComponent } from './pipes/pipes.component';
import { Pgm8PipesComponent } from './pgm8-pipes/pgm8-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    Pgm1Component,
    Pgm2Component,
    Pgm3Component,
    Pgm4Component,
    Pgm5Component,
    Pgm6Component,
    Pgm7Component,
    PipesComponent,
    Pgm8PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
