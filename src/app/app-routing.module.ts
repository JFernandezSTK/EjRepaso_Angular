import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventosComponent } from './eventos/eventos.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { Elemento1Component } from './elemento1/elemento1.component';
import { Elemento1RecibeComponent } from './elemento1-recibe/elemento1-recibe.component';
import { VariosElementosComponent } from './varios-elementos/varios-elementos.component';
import { VariosElementosRecibeComponent } from './varios-elementos-recibe/varios-elementos-recibe.component';

const routes: Routes = [
  {path:'interpolacion',component:InterpolacionComponent},
  {path:'one-way-binding',component:OneWayBindingComponent},
  {path:'eventos',component:EventosComponent},
  {path:'two-way-binding',component:TwoWayBindingComponent},
  {path:'servicios',component:ServiciosComponent},
  {path:'directivas',component:DirectivasComponent},
  {path:'elemento1',component:Elemento1Component},
  {path:'elemento1recibe/:id',component:Elemento1RecibeComponent},
  {path:'variosElementos',component:VariosElementosComponent},
  {path:'variosElementosrecibe/:id/:accion',component:VariosElementosRecibeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
