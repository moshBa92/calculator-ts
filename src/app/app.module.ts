import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { Ng2FittextModule } from 'ng2-fittext'

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2FittextModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
