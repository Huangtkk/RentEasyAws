import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionEmpComponent } from './inicio-sesion-emp.component';

describe('InicioSesionEmpComponent', () => {
  let component: InicioSesionEmpComponent;
  let fixture: ComponentFixture<InicioSesionEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioSesionEmpComponent]
    });
    fixture = TestBed.createComponent(InicioSesionEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
