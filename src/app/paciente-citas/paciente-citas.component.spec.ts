import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCitasComponent } from './paciente-citas.component';

describe('PacienteCitasComponent', () => {
  let component: PacienteCitasComponent;
  let fixture: ComponentFixture<PacienteCitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacienteCitasComponent]
    });
    fixture = TestBed.createComponent(PacienteCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
