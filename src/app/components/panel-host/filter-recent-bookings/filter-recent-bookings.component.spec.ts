import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRecentBookingsComponent } from './filter-recent-bookings.component';

describe('FilterRecentBookingsComponent', () => {
  let component: FilterRecentBookingsComponent;
  let fixture: ComponentFixture<FilterRecentBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterRecentBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterRecentBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
