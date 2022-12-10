import { Component, EventEmitter, Input, Output } from '@angular/core';
import { selectValidos } from 'src/global/tiposValidos';

@Component({
  selector: 'app-filtrar-vehiculos',
  templateUrl: './filtrar-vehiculos.component.html',
  styleUrls: ['./filtrar-vehiculos.component.scss'],
})
export class FiltrarVehiculosComponent {
  @Input() select!: selectValidos;
  @Output() selectChange = new EventEmitter<selectValidos>();

  public onChange(e: Event): void {
    const select = e.target as HTMLSelectElement;
    this.selectChange.emit(select.value as selectValidos);
  }
}
