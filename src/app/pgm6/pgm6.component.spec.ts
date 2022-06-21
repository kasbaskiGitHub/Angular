import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pgm6Component } from './pgm6.component';

describe('Pgm6Component', () => {
  let component: Pgm6Component;
  let fixture: ComponentFixture<Pgm6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pgm6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pgm6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
