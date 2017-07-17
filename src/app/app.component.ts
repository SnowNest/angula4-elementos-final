import { Component, OnInit } from '@angular/core';
import {Mensaje} from './mensaje';
import {MensajeService} from './mensaje.service';

@Component({
  selector: 'principal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MensajeService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  nombre:string='Juan Carlos';
  mensa:Mensaje;
  mensajes:Mensaje[];
  constructor(private servicio:MensajeService){
    this.mensa=new Mensaje('primer','Mensajito');
  }

   ngOnInit():void{
  this.obtenerTodosMensajes();
  }
   obtenerTodosMensajes(){
    return this.servicio.getMensajes().
    subscribe(mensajes=>this.mensajes=mensajes);
   }
}
