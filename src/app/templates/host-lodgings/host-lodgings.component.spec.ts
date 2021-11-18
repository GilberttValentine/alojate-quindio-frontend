import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostLodgingsComponent } from './host-lodgings.component';

describe('HostLodgingsComponent', () => {
  let component: HostLodgingsComponent;
  let fixture: ComponentFixture<HostLodgingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostLodgingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostLodgingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
