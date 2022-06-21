import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pgm1Component } from './pgm1.component';

describe('Pgm1Component', () => {
  let component: Pgm1Component;
  let fixture: ComponentFixture<Pgm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pgm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pgm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
