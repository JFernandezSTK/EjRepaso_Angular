import { Component } from '@angular/core';

const PIRATAS =[
  {id: 1,name:'Luffy'},
  {id: 2,name:'Zoro'},
  {id: 3,name:'Nami'},
  {id: 4,name:'Usopp'},
  {id: 5,name:'Sanji'},
  {id: 6,name:'Chopper'},
  {id: 7,name:'Robin'},
  {id: 8,name:'Franky'},
  {id: 9,name:'Brook'},
  {id: 10,name:'Jimbey'}
]

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  piratas=PIRATAS
  boolIf: boolean = true
  num: number=0
  comprueba: number=0

  cambiaIf(){
    this.boolIf=!this.boolIf
  }

  cambiaSwitch(){
    this.comprueba=this.num
  }
}
