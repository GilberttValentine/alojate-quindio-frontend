import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodgingServiceComponent } from './lodging-service.component';

describe('LodgingServiceComponent', () => {
  let component: LodgingServiceComponent;
  let fixture: ComponentFixture<LodgingServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodgingServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodgingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
