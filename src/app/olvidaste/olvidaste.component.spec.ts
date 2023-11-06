import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlvidasteComponent } from './olvidaste.component';

describe('OlvidasteComponent', () => {
  let component: OlvidasteComponent;
  let fixture: ComponentFixture<OlvidasteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OlvidasteComponent]
    });
    fixture = TestBed.createComponent(OlvidasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
