import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Aereo } from 'src/class/Aereo';
import { Terrestre } from 'src/class/Terrestre';
import { nuevoValidos } from 'src/global/tiposValidos';
import { iEstado } from 'src/interface/iestado';

@Component({
  selector: 'app-detalles-vehiculo',
  templateUrl: './detalles-vehiculo.component.html',
  styleUrls: ['./detalles-vehiculo.component.scss'],
})
export class DetallesVehiculoComponent {
  public select!: nuevoValidos;
  @Input() estado!: iEstado;
  @Output() estadoChange = new EventEmitter<iEstado>();
  public formAbmVehiculo!: FormGroup;
  public formAbmTerrestre!: FormGroup;
  public formAbmAereo!: FormGroup;

  public constructor() {}

  public ngOnInit(): void {
    this.select = this.estado.tipo;
    this.crearValidaciones();
  }

  public ngOnDestroy(): void {
    this.estado.id = null;
  }

  private crearValidaciones(): void {
    this.formAbmVehiculo = new FormGroup({
      modelo: new FormControl(this.estado.vehiculo?.modelo, [
        Validators.required,
      ]),
      anoFabricacion: new FormControl(this.estado.vehiculo?.anoFabricacion, [
        Validators.required,
        Validators.pattern(/^\d+$/), // ? solo numeros
        Validators.min(0),
      ]),
      velocidadMaxima: new FormControl(this.estado.vehiculo?.velocidadMaxima, [
        Validators.required,
        Validators.pattern(/^\d+$/), // ? solo numeros
        Validators.min(0),
      ]),
    });
    this.formAbmAereo = new FormGroup({
      alturaMaxima: new FormControl(this.estado.vehiculo?.alturaMaxima, [
        Validators.required,
        Validators.pattern(/^\d+$/), // ? solo numeros
        Validators.min(0),
      ]),
      autonomia: new FormControl(this.estado.vehiculo?.autonomia, [
        Validators.required,
        Validators.pattern(/^\d+$/), // ? solo numeros
        Validators.min(0),
      ]),
    });
    this.formAbmTerrestre = new FormGroup({
      cantidadRuedas: new FormControl(this.estado.vehiculo?.cantidadRuedas, [
        Validators.required,
        Validators.pattern(/^\d+$/), // ? solo numeros
        Validators.min(0),
      ]),
      cantidadPuertas: new FormControl(this.estado.vehiculo?.cantidadPuertas, [
        Validators.required,
        Validators.pattern(/^\d+$/), // ? solo numeros
        Validators.min(0),
      ]),
    });
  }

  public verificarValidaciones(): boolean {
    return !(
      this.formAbmVehiculo.status == 'INVALID' ||
      (this.formAbmTerrestre.status == 'INVALID' &&
        this.select == 'terrestre') ||
      (this.formAbmAereo.status == 'INVALID' && this.select == 'aereo')
    );
  }

  public onChangeSelect(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.select = select.value as nuevoValidos;
  }

  public alta(): void {
    if (this.verificarValidaciones()) {
      if (confirm('Aceptar para crear un registro, caso contrario cancelar')) {
        const id: number = Number.parseInt(this.estado.id!.toString());
        // this.estado.id = null;
        const modelo: string = this.formAbmVehiculo.get('modelo')?.value;
        const anoFabricacion: number =
          this.formAbmVehiculo.get('anoFabricacion')?.value;
        const velocidadMaxima: number = Number.parseInt(
          this.formAbmVehiculo.get('velocidadMaxima')?.value
        );

        if (this.select == 'terrestre') {
          const cantidadPuertas: number =
            this.formAbmTerrestre.get('cantidadPuertas')?.value;
          const cantidadRuedas: number =
            this.formAbmTerrestre.get('cantidadRuedas')?.value;
          this.estado.vehiculo = new Terrestre({
            id,
            modelo,
            anoFabricacion,
            velocidadMaxima,
            cantidadPuertas,
            cantidadRuedas,
          });
        } else if (this.select == 'aereo') {
          const alturaMaxima: number =
            this.formAbmAereo.get('alturaMaxima')?.value;
          const autonomia: number = this.formAbmAereo.get('autonomia')?.value;
          this.estado.vehiculo = new Aereo({
            id,
            modelo,
            anoFabricacion,
            velocidadMaxima,
            alturaMaxima,
            autonomia,
          });
        }

        this.estado.form = 'listado';
        this.estado.operacion = 'creado';
        this.estadoChange.emit(this.estado);
      }
    } else {
      alert('No ha pasado con las validaciones petinentes');
    }
  }

  public modificar(vehiculo: any): void {
    if (this.verificarValidaciones()) {
      if (
        confirm('Aceptar para modificar el registro, caso contrario cancelar')
      ) {
        const id: number = this.estado.vehiculo?.id;
        // this.estado.id = null;
        const modelo: string = this.formAbmVehiculo.get('modelo')?.value;
        const anoFabricacion: number =
          this.formAbmVehiculo.get('anoFabricacion')?.value;
        const velocidadMaxima: number = Number.parseInt(
          this.formAbmVehiculo.get('velocidadMaxima')?.value
        );

        if (this.select == 'terrestre') {
          const cantidadPuertas: number =
            this.formAbmTerrestre.get('cantidadPuertas')?.value;
          const cantidadRuedas: number =
            this.formAbmTerrestre.get('cantidadRuedas')?.value;
          this.estado.vehiculo = new Terrestre({
            id,
            modelo,
            anoFabricacion,
            velocidadMaxima,
            cantidadPuertas,
            cantidadRuedas,
          });
        } else if (this.select == 'aereo') {
          const alturaMaxima: number =
            this.formAbmAereo.get('alturaMaxima')?.value;
          const autonomia: number = this.formAbmAereo.get('autonomia')?.value;
          this.estado.vehiculo = new Aereo({
            id,
            modelo,
            anoFabricacion,
            velocidadMaxima,
            alturaMaxima,
            autonomia,
          });
        }

        this.estado.form = 'listado';
        this.estado.operacion = 'modificado';
        this.estadoChange.emit(this.estado);
      }
    } else {
      alert('No ha pasado con las validaciones pertinentes');
    }
  }

  public eliminar(vehiculo: any): void {
    if (confirm('Aceptar para eliminar, caso contrario cancelar')) {
      this.estado.form = 'listado';
      this.estado.operacion = 'eliminado';
      this.estadoChange.emit(this.estado);
    }
  }

  public cancelar(): void {
    this.estado.form = 'listado';
    this.estado.operacion = 'cancelado';
    this.estadoChange.emit(this.estado);
  }
}
