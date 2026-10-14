import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosReciclaje } from './puntos-reciclaje';

describe('PuntosReciclaje', () => {
  let component: PuntosReciclaje;
  let fixture: ComponentFixture<PuntosReciclaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuntosReciclaje],
    }).compileComponents();

    fixture = TestBed.createComponent(PuntosReciclaje);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
