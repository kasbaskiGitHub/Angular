import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pgm2Component } from './pgm2.component';

describe('Pgm2Component', () => {
  let component: Pgm2Component;
  let fixture: ComponentFixture<Pgm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pgm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pgm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
