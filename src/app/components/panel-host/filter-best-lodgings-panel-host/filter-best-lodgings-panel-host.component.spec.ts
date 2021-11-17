import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBestLodgingsPanelHostComponent } from './filter-best-lodgings-panel-host.component';

describe('FilterBestLodgingsPanelHostComponent', () => {
  let component: FilterBestLodgingsPanelHostComponent;
  let fixture: ComponentFixture<FilterBestLodgingsPanelHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBestLodgingsPanelHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBestLodgingsPanelHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
