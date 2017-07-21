import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MdButtonModule, MdCheckboxModule, MdRadioModule} from '@angular/material';
import 'clarity-icons';
import 'clarity-icons';
import 'clarity-icons/shapes/essential-shapes';
import { ClarityModule } from 'clarity-angular';
import {ClarityIcons}  from 'clarity-icons'






import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ClarityModule,
   // MdButtonModule, MdCheckboxModule, MdRadioModule
   

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
