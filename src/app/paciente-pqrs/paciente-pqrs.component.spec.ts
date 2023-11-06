import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientePqrsComponent } from './paciente-pqrs.component';

describe('PacientePqrsComponent', () => {
  let component: PacientePqrsComponent;
  let fixture: ComponentFixture<PacientePqrsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacientePqrsComponent]
    });
    fixture = TestBed.createComponent(PacientePqrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
