import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingNameInfoComponent } from './lodging-name-info.component';

describe('LodgingNameInfoComponent', () => {
  let component: LodgingNameInfoComponent;
  let fixture: ComponentFixture<LodgingNameInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingNameInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingNameInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
