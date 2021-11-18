import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingCardComponent } from './lodging-card.component';

describe('LodgingCardComponent', () => {
  let component: LodgingCardComponent;
  let fixture: ComponentFixture<LodgingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
