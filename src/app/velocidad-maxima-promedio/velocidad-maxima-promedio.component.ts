import { Component, EventEmitter, Input, Output } from '@angular/core';
import { selectValidos } from 'src/global/tiposValidos';
import { iPromedio } from 'src/interface/ipromedio';

@Component({
  selector: 'app-velocidad-maxima-promedio',
  templateUrl: './velocidad-maxima-promedio.component.html',
  styleUrls: ['./velocidad-maxima-promedio.component.scss'],
})
export class VelocidadMaximaPromedioComponent {
  public selectAnterior!: selectValidos;
  @Input() select!: selectValidos;
  @Input() promedioObj!: iPromedio;
  @Output() promedioObjChange = new EventEmitter<iPromedio>();

  public ngDoCheck(): void {
    if (this.selectAnterior != this.select) {
      this.promedioObj.valor = 0;
    }
    this.selectAnterior = this.select;
  }

  public onClick(): void {
    this.promedioObj.flag = !this.promedioObj.flag;
    this.promedioObjChange.emit(this.promedioObj);
  }
}
