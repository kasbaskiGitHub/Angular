import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pgm8PipesComponent } from './pgm8-pipes.component';

describe('Pgm8PipesComponent', () => {
  let component: Pgm8PipesComponent;
  let fixture: ComponentFixture<Pgm8PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pgm8PipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pgm8PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
