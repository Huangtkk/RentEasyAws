import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargosComponent } from './cargos.component';

describe('CargosComponent', () => {
  let component: CargosComponent;
  let fixture: ComponentFixture<CargosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargosComponent]
    });
    fixture = TestBed.createComponent(CargosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
