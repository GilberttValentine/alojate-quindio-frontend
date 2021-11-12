import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMunicipalitiesComponent } from './filter-municipalities.component';

describe('FilterMunicipalitiesComponent', () => {
  let component: FilterMunicipalitiesComponent;
  let fixture: ComponentFixture<FilterMunicipalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterMunicipalitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterMunicipalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
