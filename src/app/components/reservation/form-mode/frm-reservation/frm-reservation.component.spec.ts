import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmReservationComponent } from './frm-reservation.component';

describe('FrmReservationComponent', () => {
  let component: FrmReservationComponent;
  let fixture: ComponentFixture<FrmReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
