import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pgm7Component } from './pgm7.component';

describe('Pgm7Component', () => {
  let component: Pgm7Component;
  let fixture: ComponentFixture<Pgm7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pgm7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pgm7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
