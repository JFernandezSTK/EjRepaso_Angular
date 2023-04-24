import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-elemento1-recibe',
  templateUrl: './elemento1-recibe.component.html',
  styleUrls: ['./elemento1-recibe.component.css']
})
export class Elemento1RecibeComponent {
info:string=""

  constructor(private rutaActiva: ActivatedRoute) { 
  }

  ngOnInit(){
    this.info = this.rutaActiva.snapshot.params['id']
  }
}
