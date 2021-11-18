import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCardBookingComponent } from './recent-card-booking.component';

describe('RecentCardBookingComponent', () => {
  let component: RecentCardBookingComponent;
  let fixture: ComponentFixture<RecentCardBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentCardBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentCardBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
