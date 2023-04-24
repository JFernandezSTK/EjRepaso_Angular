import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { EventosComponent } from './eventos/eventos.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { Elemento1Component } from './elemento1/elemento1.component';
import { Elemento1RecibeComponent } from './elemento1-recibe/elemento1-recibe.component';
import { VariosElementosComponent } from './varios-elementos/varios-elementos.component';
import { VariosElementosRecibeComponent } from './varios-elementos-recibe/varios-elementos-recibe.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    OneWayBindingComponent,
    EventosComponent,
    TwoWayBindingComponent,
    DirectivasComponent,
    ServiciosComponent,
    Elemento1Component,
    Elemento1RecibeComponent,
    VariosElementosComponent,
    VariosElementosRecibeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
