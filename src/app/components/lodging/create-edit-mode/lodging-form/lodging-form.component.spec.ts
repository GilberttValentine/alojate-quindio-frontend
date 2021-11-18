import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingFormComponent } from './lodging-form.component';

describe('LodgingFormComponent', () => {
  let component: LodgingFormComponent;
  let fixture: ComponentFixture<LodgingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
