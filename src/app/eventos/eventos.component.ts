import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  texto:string=""

  cogeValor(dato:any){
    this.texto=dato.target.value
  }

  muestraValor(){
    alert("El texto tiene el valor "+this.texto)
  }
}
