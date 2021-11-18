import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostLodgingComponent } from './host-lodging.component';

describe('HostLodgingComponent', () => {
  let component: HostLodgingComponent;
  let fixture: ComponentFixture<HostLodgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostLodgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
