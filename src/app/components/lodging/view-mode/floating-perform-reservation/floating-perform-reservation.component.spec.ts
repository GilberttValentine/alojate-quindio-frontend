import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingPerformReservationComponent } from './floating-perform-reservation.component';

describe('FloatingPerformReservationComponent', () => {
  let component: FloatingPerformReservationComponent;
  let fixture: ComponentFixture<FloatingPerformReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingPerformReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingPerformReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
