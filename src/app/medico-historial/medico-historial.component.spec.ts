import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoHistorialComponent } from './medico-historial.component';

describe('MedicoHistorialComponent', () => {
  let component: MedicoHistorialComponent;
  let fixture: ComponentFixture<MedicoHistorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoHistorialComponent]
    });
    fixture = TestBed.createComponent(MedicoHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
