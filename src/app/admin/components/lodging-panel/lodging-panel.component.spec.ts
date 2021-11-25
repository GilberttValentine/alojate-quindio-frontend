import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingPanelComponent } from './lodging-panel.component';

describe('LodgingPanelComponent', () => {
  let component: LodgingPanelComponent;
  let fixture: ComponentFixture<LodgingPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
