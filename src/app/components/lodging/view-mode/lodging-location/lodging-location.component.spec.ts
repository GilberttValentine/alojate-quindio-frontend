import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingLocationComponent } from './lodging-location.component';

describe('LodgingLocationComponent', () => {
  let component: LodgingLocationComponent;
  let fixture: ComponentFixture<LodgingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
