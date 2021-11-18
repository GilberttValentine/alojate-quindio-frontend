import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditLodgingComponent } from './create-edit-lodging.component';

describe('CreateEditLodgingComponent', () => {
  let component: CreateEditLodgingComponent;
  let fixture: ComponentFixture<CreateEditLodgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditLodgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
