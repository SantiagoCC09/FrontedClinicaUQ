import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoDisponibilidadComponent } from './medico-disponibilidad.component';

describe('MedicoDisponibilidadComponent', () => {
  let component: MedicoDisponibilidadComponent;
  let fixture: ComponentFixture<MedicoDisponibilidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoDisponibilidadComponent]
    });
    fixture = TestBed.createComponent(MedicoDisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
