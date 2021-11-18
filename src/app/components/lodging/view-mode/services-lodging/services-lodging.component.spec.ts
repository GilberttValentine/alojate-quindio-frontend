import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesLodgingComponent } from './services-lodging.component';

describe('ServicesLodgingComponent', () => {
  let component: ServicesLodgingComponent;
  let fixture: ComponentFixture<ServicesLodgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesLodgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
