import { Component, OnInit } from '@angular/core';
import {Mensaje} from './mensaje';
import {Estatus} from './estatus'
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
  estatus:Estatus;
  constructor(private servicio:MensajeService){
    this.mensa=new Mensaje("uno",'titulo','Mensajito');
    this.estatus=new Estatus(false);
  }

   ngOnInit():void{
  this.obtenerTodosMensajes();
  
  }
   obtenerTodosMensajes(){
    return this.servicio.getMensajes().
    subscribe(mensajes=>this.mensajes=mensajes);
   }

   actualizarElMensaje(){
      return this.servicio.actualizarMensaje(this.mensa).
      subscribe(estatus=>this.estatus=estatus);
   }
  
}
