import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import{Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {Mensaje} from './mensaje';

@Injectable()
export class MensajeService {

  constructor(private http:Http) { }

  getMensajes():Observable<Mensaje[]>{
   return this.http.get('http://localhost:9000/mensaje')
   .map((respuesta:Response)=><Mensaje []>respuesta.json())
  }
}
