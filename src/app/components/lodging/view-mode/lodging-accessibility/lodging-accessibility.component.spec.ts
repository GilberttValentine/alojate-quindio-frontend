import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingAccessibilityComponent } from './lodging-accessibility.component';

describe('LodgingAccessibilityComponent', () => {
  let component: LodgingAccessibilityComponent;
  let fixture: ComponentFixture<LodgingAccessibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingAccessibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingAccessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
