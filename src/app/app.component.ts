import { Component } from '@angular/core';
import { selectValidos } from 'src/global/tiposValidos';
import { encontrarId } from 'src/helper/encontrarId';
import { encontrarMaximo } from 'src/helper/encontrarMaximo';
import { separarContenido } from 'src/helper/separarContenido';
import { iEstado } from 'src/interface/iestado';
import { iPromedio } from 'src/interface/ipromedio';
import { VehiculoService } from 'src/vehiculo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ? esta con <any> para poder dibujar la tabla, si se pone Terrestre | Aereo no funciona
  public vehiculos: Array<any> = [];
  public title: string = 'Parcial Vehiculos';
  public select: selectValidos = 'todos';
  public promedioObj: iPromedio = { valor: 0, flag: false };
  public estado: iEstado = {
    form: 'listado',
    operacion: 'alta',
    vehiculo: null,
    tipo: 'terrestre',
    id: null,
  };

  public constructor(private vehiculoService: VehiculoService) {}

  public ngOnInit(): void {
    this.getVehiculos();
  }

  ngDoCheck(): void {
    if (this.estado.operacion == 'eliminado') {
      this.estado.operacion = null;
      this.vehiculos = this.vehiculos.filter(
        (v) => v.id != this.estado.vehiculo.id
      );
      this.estado.vehiculo = null;
    } else if (this.estado.operacion == 'creado') {
      this.estado.operacion = null;
      this.vehiculos.push(this.estado.vehiculo);
      this.estado.vehiculo = null;
    } else if (this.estado.operacion == 'modificado') {
      this.estado.operacion = null;
      const index = encontrarId(this.vehiculos, this.estado.vehiculo.id);
      this.vehiculos[index] = this.estado.vehiculo;
      this.vehiculos;
      this.estado.vehiculo = null;
    }
  }

  public getVehiculos(): void {
    this.vehiculoService
      .getVehiculos()
      .subscribe((vehiculos) => (this.vehiculos = separarContenido(vehiculos)));
  }

  public agregar(): void {
    this.estado.form = 'abm';
    this.estado.operacion = 'alta';
    this.estado.vehiculo = null;
    this.estado.tipo = 'terrestre';
    this.estado.id = encontrarMaximo(this.vehiculos) + 1;
  }
}
