import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoPerfilComponent } from './medico-perfil.component';

describe('MedicoPerfilComponent', () => {
  let component: MedicoPerfilComponent;
  let fixture: ComponentFixture<MedicoPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoPerfilComponent]
    });
    fixture = TestBed.createComponent(MedicoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
