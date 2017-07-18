import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http'
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Mensaje} from './mensaje';
import {Estatus} from './estatus';

@Injectable()
export class MensajeService {
miUrl:string='http://localhost:9000/mensaje';
private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http:Http) { }

  getMensajes():Observable<Mensaje[]>{
 return this.http.get(this.miUrl)
   .map((respuesta:Response)=><Mensaje []>respuesta.json())
  }

  actualizarMensaje(mensa:Mensaje):Observable<Estatus>{
   return this.http.put(this.miUrl, JSON.stringify(mensa),{headers:this.headers})
    .map((respuesta:Response)=><Estatus>respuesta.json());
   
  }
}
