import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingLodgingInfoComponent } from './floating-lodging-info.component';

describe('FloatingLodgingInfoComponent', () => {
  let component: FloatingLodgingInfoComponent;
  let fixture: ComponentFixture<FloatingLodgingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingLodgingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingLodgingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
