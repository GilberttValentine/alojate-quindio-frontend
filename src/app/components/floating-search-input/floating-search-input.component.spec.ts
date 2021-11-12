import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingSearchInputComponent } from './floating-search-input.component';

describe('FloatingSearchInputComponent', () => {
  let component: FloatingSearchInputComponent;
  let fixture: ComponentFixture<FloatingSearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingSearchInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
