import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChipComponent } from './service-chip.component';

describe('ServiceChipComponent', () => {
  let component: ServiceChipComponent;
  let fixture: ComponentFixture<ServiceChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
