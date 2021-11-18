import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgsLodgingComponent } from './imgs-lodging.component';

describe('ImgsLodgingComponent', () => {
  let component: ImgsLodgingComponent;
  let fixture: ComponentFixture<ImgsLodgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgsLodgingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgsLodgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
