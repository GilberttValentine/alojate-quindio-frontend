import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingOwnerComponent } from './lodging-owner.component';

describe('LodgingOwnerComponent', () => {
  let component: LodgingOwnerComponent;
  let fixture: ComponentFixture<LodgingOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
