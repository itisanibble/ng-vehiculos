import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ordenarVehiculos } from 'src/helper/ordenarVehiculos';
import { clasesValidas, selectValidos } from 'src/global/tiposValidos';
import { Terrestre } from 'src/class/Terrestre';
import { Aereo } from 'src/class/Aereo';
import { velocidadMaximaPromedio } from 'src/helper/velocidadMaximaPromedio';
import { iPromedio } from 'src/interface/ipromedio';
import { iEstado } from 'src/interface/iestado';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss'],
})
export class VehiculoComponent {
  public id: boolean = true;
  public modelo: boolean = true;
  public anoFabricacion: boolean = true;
  public velocidadMaxima: boolean = true;
  public alturaMaxima: boolean = true;
  public autonomia: boolean = true;
  public cantidadPuertas: boolean = true;
  public cantidadRuedas: boolean = true;
  public promedio: number = 0;
  @Input() select!: selectValidos;
  @Output() selectChange = new EventEmitter<selectValidos>();
  @Input() promedioObj!: iPromedio;
  @Output() promedioObjChange = new EventEmitter<iPromedio>();
  @Input() estado!: iEstado;
  @Output() estadoChange = new EventEmitter<iEstado>();
  @Input() vehiculos!: Array<any>;
  @Output() vehiculosChange = new EventEmitter<any>();

  public ngDoCheck() {
    if (this.promedioObj.flag) {
      this.calcularPromedio();
    }
  }

  public onDblClick(vehiculo: clasesValidas): void {
    this.estado.operacion = 'modificar-eliminar';
    this.estado.form = 'abm';
    this.estado.vehiculo = vehiculo;

    if (vehiculo instanceof Terrestre) {
      this.estado.tipo = 'terrestre';
    } else if (vehiculo instanceof Aereo) {
      this.estado.tipo = 'aereo';
    }
    this.estadoChange.emit(this.estado);
  }

  public ordenar(atributo: string): void {
    this.vehiculos = ordenarVehiculos(this.vehiculos, atributo);
  }

  public mostrar(vehiculo: any): boolean {
    return (
      (vehiculo instanceof Terrestre && this.select == 'terrestre') ||
      (vehiculo instanceof Aereo && this.select == 'aereo') ||
      this.select == 'todos'
    );
  }

  public calcularPromedio(): void {
    this.promedioObj.valor = velocidadMaximaPromedio(
      this.vehiculos,
      this.select
    );
    this.promedioObj.flag = !this.promedioObj.flag;
    this.promedioObjChange.emit(this.promedioObj);
  }
}
