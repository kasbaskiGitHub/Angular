import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pgm3Component } from './pgm3.component';

describe('Pgm3Component', () => {
  let component: Pgm3Component;
  let fixture: ComponentFixture<Pgm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pgm3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pgm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
