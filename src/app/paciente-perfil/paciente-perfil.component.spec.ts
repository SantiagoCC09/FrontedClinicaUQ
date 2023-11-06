import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientePerfilComponent } from './paciente-perfil.component';

describe('PacientePerfilComponent', () => {
  let component: PacientePerfilComponent;
  let fixture: ComponentFixture<PacientePerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacientePerfilComponent]
    });
    fixture = TestBed.createComponent(PacientePerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
