import { NgModule } from '@angular/core';
import { AgtcalendarComponent } from './agtcalendar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';




@NgModule({
  declarations: [
    AgtcalendarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MainComponent
  ]
})
export class AgtcalendarModule { }
