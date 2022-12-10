import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VEHICULOS } from './data/mock-vehiculos';
import { clasesValidas } from './global/tiposValidos';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  public getVehiculos(): Observable<clasesValidas[]> {
    return of(JSON.parse(VEHICULOS));
  }
}
