import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocidadMaximaPromedioComponent } from './velocidad-maxima-promedio.component';

describe('VelocidadMaximaPromedioComponent', () => {
  let component: VelocidadMaximaPromedioComponent;
  let fixture: ComponentFixture<VelocidadMaximaPromedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelocidadMaximaPromedioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelocidadMaximaPromedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
