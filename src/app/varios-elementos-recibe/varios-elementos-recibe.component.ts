import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-varios-elementos-recibe',
  templateUrl: './varios-elementos-recibe.component.html',
  styleUrls: ['./varios-elementos-recibe.component.css']
})
export class VariosElementosRecibeComponent {
  texto1:string=""
  texto2:string=""

  constructor(private rutaActiva: ActivatedRoute) { 
  }

  ngOnInit(){
    this.texto1 = this.rutaActiva.snapshot.params['id']
    this.texto2 = this.rutaActiva.snapshot.params['accion']
  }
}
