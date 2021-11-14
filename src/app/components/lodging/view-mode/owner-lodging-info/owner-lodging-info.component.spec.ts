import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLodgingInfoComponent } from './owner-lodging-info.component';

describe('OwnerLodgingInfoComponent', () => {
  let component: OwnerLodgingInfoComponent;
  let fixture: ComponentFixture<OwnerLodgingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnerLodgingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerLodgingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
