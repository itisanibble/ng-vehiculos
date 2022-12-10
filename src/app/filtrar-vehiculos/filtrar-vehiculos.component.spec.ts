import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarVehiculosComponent } from './filtrar-vehiculos.component';

describe('FiltrarVehiculosComponent', () => {
  let component: FiltrarVehiculosComponent;
  let fixture: ComponentFixture<FiltrarVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarVehiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
