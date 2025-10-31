import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoComponent } from './vehiculo.component';

describe('VehiculoComponent', () => {
  let component: VehiculoComponent;
  let fixture: ComponentFixture<VehiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiculoComponent]
    });
    fixture = TestBed.createComponent(VehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
