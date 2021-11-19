import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingReservationsComponent } from './lodging-reservations.component';

describe('LodgingReservationsComponent', () => {
  let component: LodgingReservationsComponent;
  let fixture: ComponentFixture<LodgingReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingReservationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
