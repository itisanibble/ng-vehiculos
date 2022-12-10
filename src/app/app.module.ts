import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VehiculoComponent } from './vehiculos/vehiculos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VelocidadMaximaPromedioComponent } from './velocidad-maxima-promedio/velocidad-maxima-promedio.component';
import { FiltrarVehiculosComponent } from './filtrar-vehiculos/filtrar-vehiculos.component';
import { DetallesVehiculoComponent } from './detalles-vehiculo/detalles-vehiculo.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    VelocidadMaximaPromedioComponent,
    FiltrarVehiculosComponent,
    DetallesVehiculoComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
