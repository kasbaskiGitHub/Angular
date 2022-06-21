import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pgm5Component } from './pgm5.component';

describe('Pgm5Component', () => {
  let component: Pgm5Component;
  let fixture: ComponentFixture<Pgm5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pgm5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pgm5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
