import { Component } from '@angular/core';
import {Mensaje} from './mensaje';

@Component({
  selector: 'principal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  nombre:string='Juan Carlos';
  mensa:Mensaje;
  constructor(){
    this.mensa=new Mensaje('primer','Mensajito');
  }
}
