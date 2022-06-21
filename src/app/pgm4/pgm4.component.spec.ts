import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pgm4Component } from './pgm4.component';

describe('Pgm4Component', () => {
  let component: Pgm4Component;
  let fixture: ComponentFixture<Pgm4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pgm4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pgm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
