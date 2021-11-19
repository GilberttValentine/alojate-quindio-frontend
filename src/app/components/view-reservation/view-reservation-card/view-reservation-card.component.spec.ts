import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReservationCardComponent } from './view-reservation-card.component';

describe('ViewReservationCardComponent', () => {
  let component: ViewReservationCardComponent;
  let fixture: ComponentFixture<ViewReservationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReservationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReservationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
