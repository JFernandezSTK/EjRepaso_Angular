import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepasoServiciosService {

  texto:string

  constructor() { 
    this.texto="Hola Mundo"
  }
}
