import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTypesLodgingsComponent } from './filter-types-lodgings.component';

describe('FilterTypesLodgingsComponent', () => {
  let component: FilterTypesLodgingsComponent;
  let fixture: ComponentFixture<FilterTypesLodgingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTypesLodgingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTypesLodgingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
