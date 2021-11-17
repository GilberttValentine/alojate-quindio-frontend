import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedStatsComponent } from './feed-stats.component';

describe('FeedStatsComponent', () => {
  let component: FeedStatsComponent;
  let fixture: ComponentFixture<FeedStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
