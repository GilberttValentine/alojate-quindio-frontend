import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBestLodgingsComponent } from './filter-best-lodgings.component';

describe('FilterBestLodgingsComponent', () => {
  let component: FilterBestLodgingsComponent;
  let fixture: ComponentFixture<FilterBestLodgingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBestLodgingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBestLodgingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
