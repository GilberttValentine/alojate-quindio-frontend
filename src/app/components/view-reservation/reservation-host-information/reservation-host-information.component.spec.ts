import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationHostInformationComponent } from './reservation-host-information.component';

describe('ReservationHostInformationComponent', () => {
  let component: ReservationHostInformationComponent;
  let fixture: ComponentFixture<ReservationHostInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationHostInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationHostInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
