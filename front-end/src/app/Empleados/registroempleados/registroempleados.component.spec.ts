import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroempleadosComponent } from './registroempleados.component';

describe('RegistroempleadosComponent', () => {
  let component: RegistroempleadosComponent;
  let fixture: ComponentFixture<RegistroempleadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroempleadosComponent]
    });
    fixture = TestBed.createComponent(RegistroempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
