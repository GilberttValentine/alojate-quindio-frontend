import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingFiltersComponent } from './lodging-filters.component';

describe('LodgingFiltersComponent', () => {
  let component: LodgingFiltersComponent;
  let fixture: ComponentFixture<LodgingFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
