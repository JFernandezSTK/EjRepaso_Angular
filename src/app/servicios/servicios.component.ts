import { Component } from '@angular/core';
import { RepasoServiciosService } from '../repaso-servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  dato:string

  constructor(private info:RepasoServiciosService){
    this.dato=info.texto
  }

  mostrarTexto(){
    alert(this.dato)
  }
}
