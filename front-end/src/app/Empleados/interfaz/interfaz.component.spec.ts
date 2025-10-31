import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazComponent } from './interfaz.component';

describe('InterfazComponent', () => {
  let component: InterfazComponent;
  let fixture: ComponentFixture<InterfazComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfazComponent]
    });
    fixture = TestBed.createComponent(InterfazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
