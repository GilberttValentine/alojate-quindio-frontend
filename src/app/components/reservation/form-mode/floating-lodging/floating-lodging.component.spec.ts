import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingLodgingComponent } from './floating-lodging.component';

describe('FloatingLodgingComponent', () => {
  let component: FloatingLodgingComponent;
  let fixture: ComponentFixture<FloatingLodgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingLodgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
