import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityLodgingCreateEditComponent } from './accessibility-lodging-create-edit.component';

describe('AccessibilityLodgingCreateEditComponent', () => {
  let component: AccessibilityLodgingCreateEditComponent;
  let fixture: ComponentFixture<AccessibilityLodgingCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessibilityLodgingCreateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessibilityLodgingCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
