import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationGuestInformationComponent } from './reservation-guest-information.component';

describe('ReservationGuestInformationComponent', () => {
  let component: ReservationGuestInformationComponent;
  let fixture: ComponentFixture<ReservationGuestInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationGuestInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationGuestInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
